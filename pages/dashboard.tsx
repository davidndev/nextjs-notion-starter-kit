import * as React from 'react'
import { GetStaticProps } from 'next'

// utils
import { useDarkMode } from 'lib/use-dark-mode'
import { PageBlock } from 'notion-types'
import { formatDate, getBlockTitle, getPageProperty } from 'notion-utils'
import { useSearchParam } from 'react-use'

import * as config from '@/lib/config'
import { domain, isDev } from '@/lib/config'
import { mapImageUrl } from '@/lib/map-image-url'
import { getCanonicalPageUrl, mapPageUrl } from '@/lib/map-page-url'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { PageProps, Params } from '@/lib/types'

import { NotionPageHeader } from '../components/NotionPageHeader'
// components
import { PageHead } from '../components/PageHead'
import styles from './styles.module.css'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

function Dashboard(props) {
  const lite = useSearchParam('lite')
  // lite mode is for oembed
  const isLiteMode = lite === 'true'
  const { isDarkMode } = useDarkMode()

  console.log({ props })
  const site = props

  const keys = Object.keys(site.recordMap?.block || {})
  const block = site.recordMap?.block?.[keys[0]]?.value

  const canonicalPageUrl =
    !config.isDev &&
    getCanonicalPageUrl(site, site.recordMap)(site.rootNotionPageId)

  const socialImage = mapImageUrl(
    getPageProperty<string>('Social Image', block, site.recordMap) ||
      (block as PageBlock).format?.page_cover ||
      config.defaultPageCover,
    block
  )

  const socialDescription =
    getPageProperty<string>('Description', block, site.recordMap) ||
    config.description

  return (
    <>
      <PageHead
        pageId={site.rootNotionPageId}
        site={site}
        title={'Dashboard'}
        description={socialDescription}
        image={socialImage}
        url={canonicalPageUrl}
      />
      <div
        className={`notion notion-app ${
          isDarkMode ? 'dark-mode' : 'light-mode'
        }`}
      >
        <NotionPageHeader block={block} />
        <h1>Dashboard</h1>
      </div>
    </>
  )
}

export default Dashboard

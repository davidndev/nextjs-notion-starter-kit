import * as React from 'react'
import { useRouter } from 'next/router'

import cs from 'classnames'
// utils
import { useDarkMode } from 'lib/use-dark-mode'
import { PageBlock } from 'notion-types'
import { getBlockTitle, getPageProperty } from 'notion-utils'
import { useSearchParam } from 'react-use'

import * as config from '@/lib/config'
import * as types from '@/lib/types'
import { DashboardPageHeader } from '@/components/DashboardPageHeader'
import { domain, isDev } from '@/lib/config'
import { mapImageUrl } from '@/lib/map-image-url'
import { getCanonicalPageUrl, mapPageUrl } from '@/lib/map-page-url'

// components
import { PageHead } from '../components/PageHead'

export const DashboardPage: React.FC<types.PageProps> = ({
  site,
  recordMap,
  error,
  pageId
}) => {
  const { isDarkMode } = useDarkMode()

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  const canonicalPageUrl =
    !config.isDev && getCanonicalPageUrl(site, recordMap)(site.rootNotionPageId)

  const socialImage = mapImageUrl(
    getPageProperty<string>('Social Image', block, recordMap) ||
      (block as PageBlock).format?.page_cover ||
      config.defaultPageCover,
    block
  )

  const socialDescription =
    getPageProperty<string>('Description', block, recordMap) ||
    config.description

  const title = getBlockTitle(block, recordMap) || site.name

  console.log('dashboard page', {
    isDev: config.isDev,
    title,
    pageId,
    rootNotionPageId: site.rootNotionPageId,
    recordMap
  })

  console.log({ block })

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
        <DashboardPageHeader block={block} />
      </div>
    </>
  )
}

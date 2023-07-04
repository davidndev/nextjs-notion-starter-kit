import * as React from 'react'

import { DashboardPage } from '@/components/DashboardPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
  //https://www.notion.so/dn20/Dashboard-d8a27afdb2dc41f786b12abfb4d8f3bc?pvs=4
  const rawPageId = 'd8a27afdb2dc41f786b12abfb4d8f3bc'
  try {
    const props = await resolveNotionPage(domain, rawPageId)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function DavidDashboardPage(props) {
  return <DashboardPage {...props} />
}

import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'dcb27054e4c74fd0832db7a1f02d6b7d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'David Nguyen - Software Engineer',
  domain: 'davidn.co',
  author: 'David Nguyen',

  // open graph metadata (optional)
  description:
    'David Nguyen is a software engineer, consumer of information, and sporadic writer.',

  // social usernames (optional)
  twitter: 'DavidNDev',
  //github: 'davidndev',
  linkedin: 'davidnguyen20',
  hackernews: 'davidn20',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false, //temp false while developing

  //Search Config
  isSearchEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/now': 'a2906643c6e449f2b4cc19b6755ba5f9',
  //   '/about': '7ed65c833c97436390a662bb3fe2f7b8'
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Now',
      pageId: 'a2906643c6e449f2b4cc19b6755ba5f9'
    },
    {
      title: 'Dashboard',
      url: '/dashboard'
    },
    {
      title: 'Blog',
      pageId: '3abcc1ea343c4642808a40655bcd6699'
    },
    {
      title: 'About',
      pageId: '7ed65c833c97436390a662bb3fe2f7b8'
    }
  ]
})

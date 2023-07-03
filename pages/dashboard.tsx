import * as React from 'react'
import BodyClassName from 'react-body-classname'
import { useSearchParam } from 'react-use'

// utils
import { useDarkMode } from 'lib/use-dark-mode'

// components
import { PageHead } from '../components/PageHead'

import styles from './styles.module.css'

function Dashboard() {
  const lite = useSearchParam('lite')
  // lite mode is for oembed
  const isLiteMode = lite === 'true'
  const { isDarkMode } = useDarkMode()
  return (
    <>
      <PageHead
        title={'Dashboard'}
        description={
          'David Nguyen is a software engineer, consumer of information, and sporadic writer.'
        }
      />
      <div
        className={`notion notion-app ${
          isDarkMode ? 'dark-mode' : 'light-mode'
        }`}
      >
        <h1>Dashboard</h1>
      </div>
    </>
  )
}

export default Dashboard

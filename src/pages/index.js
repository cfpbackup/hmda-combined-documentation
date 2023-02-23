import React from 'react';
import { Redirect } from '@docusaurus/router'
import { DocSearch } from '@docsearch/react'

import '@docsearch/css'

// Redirects users from the base route '/'
export default function Home() {
  return (
    <>
      <Redirect to='/documentation/category/frequently-asked-questions' />
      <DocSearch
        appId='YOUR_APP_ID'
        indexName='YOUR_INDEX_NAME'
        apiKey='YOUR_SEARCH_API_KEY'
      />
    </>
  )
}

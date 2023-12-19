import React from 'react';
import { Redirect } from '@docusaurus/router'

import '@docsearch/css'

// Redirects users from the base route '/'
export default function Home() {

  return (
    <>
      <Redirect to='/documentation/fig/2023/overview' />
    </>
  )
}

import React from 'react'
import release from './release.json'
import './ReleaseVersion.css'

const ReleaseVersion = () => (
  <span className="release-version">
    &nbsp;{release.version}
  </span>
)

export default ReleaseVersion

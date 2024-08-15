import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router'
import Translate from '@docusaurus/Translate';
import {
  useActivePlugin,
  useDocVersionSuggestions,
} from '@docusaurus/plugin-content-docs/client';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useDocsPreferredVersion,
  useDocsVersion,
} from '@docusaurus/theme-common/internal';
function UnreleasedVersionLabel({siteTitle, versionMetadata}) {
  return (
    <Translate
      id="theme.docs.versions.unreleasedVersionLabel"
      description="The label used to tell the user that he's browsing an unreleased doc version"
      values={{
        siteTitle,
        versionLabel: <b>{versionMetadata.label}</b>,
      }}>
      {
        'This is unreleased documentation for {siteTitle} {versionLabel} version.'
      }
    </Translate>
  );
}
function UnmaintainedVersionLabel({
  siteTitle,
  versionMetadata,
  isSupplemental,
}) {
  return (
    <Translate
      id='theme.docs.versions.unmaintainedVersionLabel'
      description="The label used to tell the user that he's browsing an unmaintained doc version"
      values={{
        siteTitle,
        versionLabel: <b>{versionMetadata.label}</b>,
        guideType: isSupplemental
          ? 'Supplemental Guide'
          : 'Filing Instructions Guide',
      }}
    >
      {
        'This is the {versionLabel} {guideType} for data collected in {versionLabel}.'
      }
    </Translate>
  )
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel,
};
function BannerLabel(props) {
  const BannerLabelComponent =
    BannerLabelComponents[props.versionMetadata.banner];
  return <BannerLabelComponent {...props} />;
}
function LatestVersionSuggestionLabel({
  versionLabel,
  to,
  onClick,
  isSupplemental,
}) {
  return (
    <Translate
      id='theme.docs.versions.latestVersionSuggestionLabel'
      description='The label used to tell the user to check the latest version'
      values={{
        versionLabel,
        latestVersionLink: (
          <b>
            <Link to={to} onClick={onClick}>
              <Translate
                id='theme.docs.versions.latestVersionLinkLabel'
                description='The label used for the latest version suggestion link label'
              >
                {isSupplemental
                  ? 'Supplemental Guide'
                  : 'Filing Instructions Guide'}
              </Translate>
            </Link>
          </b>
        ),
      }}
    >
      {'Here is the {versionLabel} {latestVersionLink}.'}
    </Translate>
  )
}
function DocVersionBannerEnabled({ className, versionMetadata }) {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext()
  const { pluginId } = useActivePlugin({ failfast: true })
  const getVersionMainDoc = version =>
    version.docs.find(doc => doc.id === version.mainDocId)
  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId)
  const { latestDocSuggestion, latestVersionSuggestion } =
    useDocVersionSuggestions(pluginId)
  const location = useLocation() // Using Docusaurus API for SSR window.location - https://docusaurus.io/docs/next/advanced/routing#generating-and-accessing-routes

  // Try to link to same doc in latest version (not always possible), falling
  // back to main doc of latest version
  const latestVersionSuggestedDoc =
    latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion)

  // Determine if the current page is the supplemental guide
  const isSupplemental = location.pathname.includes(
    'supplemental-guide-for-quaterly-filers'
  )

  // Construct the correct path for the latest version
  let pathToLatestVersion
  if (isSupplemental) {
    // For the Supplemental Guide, use the direct path without version in URL
    pathToLatestVersion = `/documentation/fig/supplemental-guide-for-quaterly-filers`
  } else {
    // For the FIG, use the version-specific path
    pathToLatestVersion = latestVersionSuggestedDoc.path
  }

  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md'
      )}
      role='alert'
    >
      <div>
        <BannerLabel
          siteTitle={siteTitle}
          versionMetadata={versionMetadata}
          isSupplemental={isSupplemental}
        />
      </div>
      <div className='margin-top--md'>
        <LatestVersionSuggestionLabel
          versionLabel={latestVersionSuggestion.label}
          to={pathToLatestVersion}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
          isSupplemental={isSupplemental}
        />
      </div>
    </div>
  )
}

export default function DocVersionBanner({className}) {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.banner) {
    return (
      <DocVersionBannerEnabled
        className={className}
        versionMetadata={versionMetadata}
      />
    );
  }
  return null;
}

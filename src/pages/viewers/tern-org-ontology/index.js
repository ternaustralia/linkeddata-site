import React from 'react'
import ViewerPage from '../../../components/ontology-viewers/Page'
import settings from './_settings'


window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); };

export default function Page() {
  gtag('event', 'viewer', { 'cv': 'tern-org-ontology' });
  return (
    <ViewerPage settings={settings} />
  )
}
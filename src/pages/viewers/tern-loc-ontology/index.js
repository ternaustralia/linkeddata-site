import React from 'react';
import ViewerPage from '../../../components/ontology-viewers/Page';
import settings from './_settings';


function gtag() { dataLayer.push(arguments); };

export default function Page() {
  gtag('event', 'viewer', { 'cv': 'tern-loc-ontology' });
  return (
    <ViewerPage settings={settings} />
  )
}
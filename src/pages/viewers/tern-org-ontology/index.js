import React, { useEffect } from 'react';
import ViewerPage from '../../../components/ontology-viewers/Page';
import settings from './_settings';


function gtag() { dataLayer.push(arguments); };

export default function Page() {
  useEffect(() => {
    function gtag() { dataLayer.push(arguments); }
    gtag('event', 'viewer', { 'cv': 'tern-org-ontology' });
  }, []);
  return (
    <ViewerPage settings={settings} />
  )
}
import React, { useEffect } from 'react';
import ViewerPage from '../../../components/ontology-viewers/Page';
import settings from './_settings';


export default function Page() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('event', 'viewer', { 'cv': 'tern-loc-ontology' });
  }, []);
  return (
    <ViewerPage settings={settings} />
  )
}
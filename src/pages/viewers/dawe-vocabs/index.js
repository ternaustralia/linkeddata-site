import React, { useEffect } from 'react';
import ViewerPage from '../../../components/vocab-viewers/Page';


export default function Page() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('event', 'viewer', { 'cv': 'dawe' });
  }, []);

  return (
    <ViewerPage settingsID="nrm" />
  )
}
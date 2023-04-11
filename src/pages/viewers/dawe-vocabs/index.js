import React, { useEffect } from 'react';
import ViewerPage from '../../../components/vocab-viewers/Page';


export default function Page() {
  useEffect(() => {
    function gtag() { dataLayer.push(arguments); }
    gtag('event', 'viewer', { 'cv': 'dawe3' });
  }, []);

  return (
    <ViewerPage settingsID="nrm" />
  )
}
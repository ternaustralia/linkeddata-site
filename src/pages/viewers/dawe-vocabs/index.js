import React from 'react';
// import styles from './viewer.modules.css'
import settings from './_settings';
import ViewerPage from '../../../components/vocab-viewers/Page';


function gtag() { dataLayer.push(arguments); };

export default function Page() {
  gtag('event', 'viewer', { 'cv': 'dawe2' });
  return (
    <ViewerPage settingsID="nrm" />
  )
}
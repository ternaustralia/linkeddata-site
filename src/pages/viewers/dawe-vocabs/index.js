import React from 'react'
// import styles from './viewer.modules.css'
import settings from './_settings'
import ViewerPage from '../../../components/vocab-viewers/Page'


window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); };

export default function Page() {
  gtag('event', 'viewer', { 'cv': 'dawe' });
  return (
    <ViewerPage settingsID="nrm" />
  )
}
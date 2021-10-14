import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import useSWR from 'swr';
import { getNodeShapes } from '../../../components/viewers/tern-ontology/queries'

import { fetcher } from '../../../common/dataFetcher';
import ResourceView from '../../../components/viewers/tern-ontology/ResourceView';
import { getFetchOptions } from '../../../components/viewers/tern-ontology/utils';
import ClassList from '../../../components/viewers/tern-ontology/ClassList'
import settings from './_settings'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PageComponent() {
  let query = useQuery();
  const pageRoute = settings.pageRoute
  const uri = query.get('uri')
  const endpoint = query.get('endpoint') || settings.endpoint

  // const fetchOptions = getFetchOptions(getSparqlQuery(uri))

  // Reason we serialise fetchOptions is to avoid infinite loop.
  // See https://github.com/vercel/swr/issues/345
  // const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  const [selectedClass, setSelectedClass] = useState(null)

  useEffect(() => {
    if (uri) {
      setSelectedClass(uri)
    }
  }, [uri])
  // sidebar_node_modules-@docusaurus-theme-classic-lib-next-theme-DocSidebar-styles-module
  return (
    <main className="margin-vert--lg">
      <div className="row">
        <div className="col col--2">
          <ClassList pageRoute={pageRoute} endpoint={endpoint} />
        </div>
        
        <div className="col col--10">
          <ResourceView resourceUri={selectedClass} endpoint={endpoint} />
        </div>
      </div>

      {/* <div className="row">
        <div className="col col--3">
          
        </div>
        <div className="col col--9">
          
        </div>
      </div> */}

      {/* {debugView} */}
    </main>
  )
}

export default function Page() {

  return (
    <Layout title="TERN Ontology viewer">
      <Router>
        <PageComponent />
      </Router>
    </Layout>
  );
}
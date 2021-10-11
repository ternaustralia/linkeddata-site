import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import useSWR from 'swr';
import {getNodeShapes} from '../../../components/viewers/tern-ontology/queries'

import { fetcher } from '../../../common/dataFetcher';
import ClassView from '../../../components/viewers/tern-ontology/ClassView';
import { getFetchOptions } from '../../../components/viewers/tern-ontology/utils';
import ClassList from '../../../components/viewers/tern-ontology/ClassList'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PageComponent() {
  let query = useQuery();
  const pageRoute = '/viewers/tern-ontology'
  const uri = query.get('uri')
  const endpoint = query.get('endpoint') || 'https://graphdb.tern.org.au/repositories/knowledge_graph_core'
  
  // const fetchOptions = getFetchOptions(getSparqlQuery(uri))
  
  // Reason we serialise fetchOptions is to avoid infinite loop.
  // See https://github.com/vercel/swr/issues/345
  // const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  const [selectedClass, setSelectedClass] = useState(null)

  useEffect(() => {
    if(uri) {
      setSelectedClass(uri)
    }
  }, [uri])

  return (
    <main className="container container--fluid margin-vert--lg">
      <h2>Classes</h2>
      <div className="row">
        <div className="col col--3">
          <ClassList pageRoute={pageRoute} endpoint={endpoint} />
        </div>
        <div className="col col--9">
          <ClassView selectedClass={selectedClass} endpoint={endpoint} />
        </div>
      </div>
      
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
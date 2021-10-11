import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import useSWR from 'swr';
import {getNodeShapes} from './_queries'

import { fetcher } from './_dataFetcher';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getNodeShape(classUri) {
  return `
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
select *
from <http://www.ontotext.com/explicit>
from <https://w3id.org/tern/ontologies/tern/>
where {
    <${classUri}> ?p ?o .
}
  `
}

function getFetchOptions(sparqlQuery) {
  return {
    method: 'POST',
    headers: {
      accept: 'application/sparql-results+json',
      'content-type': 'application/x-www-form-urlencoded',
    },
    // https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch
    body: [encodeURIComponent('query') + '=' + encodeURIComponent(sparqlQuery)]
  }
}

function ClassList({pageRoute, endpoint}) {
  const sparqlQuery = getNodeShapes()
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading...</div>

  const items = data.results.bindings.map(item => {
    return <li key={item.class.value}><Link to={`${pageRoute}?uri=${item.class.value}&endpoint=${endpoint}`}>{item.class.value}</Link></li>
  })

  return (
    <ul>
      {items}
    </ul>
  )
}

function ClassView({selectedClass, endpoint}) {
  const sparqlQuery = getNodeShape(selectedClass)
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR(selectedClass ? [endpoint, JSON.stringify(fetchOptions)] : null, fetcher)

  if(error) return <div>Failed to load</div>
  if(!data && !selectedClass) return <div>No class selected</div>
  if(!data) return <div>Loading...</div>

  return (
    <>
      <p>{selectedClass}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
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
        <div className="col col--6">
          <ClassList pageRoute={pageRoute} endpoint={endpoint} />
        </div>
        <div className="col col--6">
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
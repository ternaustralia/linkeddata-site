import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import useSWR from 'swr';
// import { fetcher } from './_dataFetcher';
// const fetcher = (...args) => fetch(...args).then(res=> res.json())
const fetcher = async (...args) => {
  const url = args[0]
  const fetchOptions = JSON.parse(args[1])
  const res = await fetch(url, fetchOptions)

  if(!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getSparqlQuery(classUri) {
  return `
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
select *
where {
    <${classUri}> ?p ?o .
}
  `
}

function PageComponent() {
  let query = useQuery();
  const pageRoute = '/viewers/tern-ontology'
  const uri = query.get('uri') || 'https://w3id.org/tern/ontologies/tern/Observation'
  const endpoint = query.get('endpoint') || 'http://localhost:7200/repositories/ontologies'
  
  const sparqlQuery = getSparqlQuery(uri)
  const fetchOptions = {
    method: 'POST',
    headers: {
      accept: 'application/sparql-results+json',
      'content-type': 'application/x-www-form-urlencoded',
    },
    // https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch
    body: [encodeURIComponent('query') + '=' + encodeURIComponent(getSparqlQuery(uri))]
  }
  
  // Reason we serialise fetchOptions is to avoid infinite loop.
  // See https://github.com/vercel/swr/issues/345
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)
  
  const debug = true

  const debugView = debug ? <div>
    <p>{`URI: ${uri}`}</p>
    <p>{`SPARQL endpoint: ${endpoint}`}</p>
    <p></p>
    <pre>{sparqlQuery}</pre>
    <p>Received: </p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div> : ''

  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading...</div>

  return (
    <main className="container container--fluid margin-vert--lg">
      <ul>
        <li>
          <Link to={`${pageRoute}?uri=https://w3id.org/tern/ontologies/tern/Observation&endpoint=http://localhost:7200/repositories/ontologies`}>Ecological Site</Link>
        </li>
        <li>
          <Link to={`${pageRoute}?uri=https://w3id.org/tern/ontologies/tern/Transect&endpoint=http://localhost:7200/repositories/ontologies`}>Transect</Link>
        </li>
      </ul>

      {debugView}
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
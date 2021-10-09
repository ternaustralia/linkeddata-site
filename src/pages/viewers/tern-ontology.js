import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}

function PageComponent() {
  let query = useQuery();
  const pageRoute = '/viewers/tern-ontology'
  const uri = query.get('uri')
  const endpoint = query.get('endpoint')

  return (
    <>
      <ul>
        <li>
          <Link to={`${pageRoute}?uri=https://w3id.org/tern/ontologies/tern/Observation&endpoint=https://graphdb.tern.org.au/repositories/ontologies`}>Ecological Site</Link>
        </li>
        <li>
          <Link to={`${pageRoute}?uri=https://w3id.org/tern/ontologies/tern/Transect&endpoint=https://graphdb.tern.org.au/repositories/ontologies`}>Transect</Link>
        </li>
      </ul>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>{`URI: ${uri}`}</p>
        <p>{`SPARQL endpoint: ${endpoint}`}</p>
      </div>
    </>
  )
}

export default function Page() {

  return (
    <Layout title="Hello">
      <Router>
        <PageComponent />
      </Router>
    </Layout>
  );
}
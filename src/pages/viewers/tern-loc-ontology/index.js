import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
import ResourceView from '../../../components/viewers/ResourceView';
import ClassList from '../../../components/viewers/ClassList'
import settings from './_settings'
import ScrollToTop from '../../../components/ScrollToTop';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PageComponent() {
  let query = useQuery();
  const pageRoute = settings.pageRoute
  const uri = query.get('uri')
  const endpoint = query.get('endpoint') || settings.endpoint
  const queries = settings.queries

  // Reason we serialise fetchOptions is to avoid infinite loop.
  // See https://github.com/vercel/swr/issues/345
  // const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  const [selectedClass, setSelectedClass] = useState(null)

  useEffect(() => {
    if (uri) {
      setSelectedClass(uri)
    }
  }, [uri])

  return (
    <main className="margin-vert--lg">
      <div className="row">
        <div className="col col--2">
          <ClassList settings={settings} />
        </div>

        <div className="col col--10">
          <ResourceView resourceUri={selectedClass} settings={settings} />
        </div>
      </div>
    </main>
  )
}

export default function Page() {
  if (typeof window === "undefined") {
    return <></>
  }

  return <Layout title="TERN Location Ontology viewer">
    <Router>
      <ScrollToTop>
        <PageComponent />
      </ScrollToTop>
    </Router>
  </Layout>
}
import Layout from "@theme/Layout";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

import { ResourcePage } from "../../components/vocab-viewers/Page";
import useQuery from "../../hooks/useQuery";
import { useViewerSettings } from "../../hooks/useViewerSettings";

function PageComponent({ settingsID }) {
  const params = useQuery();
  let uri = params.get("uri");
  let sparqlEndpoint = params.get("sparql_endpoint");

  if (uri && sparqlEndpoint) {
    let page = (
      <ResourcePage
        uri={uri}
        settingsID={settingsID}
        sparqlEndpoint={sparqlEndpoint}
      />
    );
    return <main className="margin-vert--lg container">{page}</main>;
  } else {
    return (
      <main className="margin-vert--lg container">
        Query parameter "uri" value: {uri}
        Query parameter "sparql_endpoint" value: {sparqlEndpoint}
      </main>
    );
  }
}

export default function Page() {
  let settingsID = "general";
  const settings = useViewerSettings(settingsID);

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <Layout title={settings.title}>
      <Router>
        <ScrollToTop>
          <PageComponent settingsID={settingsID} />
        </ScrollToTop>
      </Router>
    </Layout>
  );
}

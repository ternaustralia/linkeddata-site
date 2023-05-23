import React from "react";
import Layout from "@theme/Layout";
import { BrowserRouter as Router } from "react-router-dom";

import useQuery from "../../hooks/useQuery";
import { useViewerSettings } from "../../hooks/useViewerSettings";

import ScrollToTop from "../ScrollToTop";

import { VocabsListPage } from "./VocabsListPage";
import { ResourcePage } from "./ResourcePage";

function PageComponent({ settingsID }) {
  const params = useQuery();
  let uri = params.get("uri");

  // Show the vocab list page if the "uri" query parameter is missing.
  // Otherwise show the resource identified by the uri.
  let page;
  if (uri) {
    page = <ResourcePage uri={uri} settingsID={settingsID} />;
  } else {
    page = <VocabsListPage settingsID={settingsID} />;
  }

  return <main className="margin-vert--lg container">{page}</main>;
}

export default function Page({ settingsID }) {
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

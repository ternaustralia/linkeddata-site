import React from 'react'
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import { BrowserRouter as Router, Link } from "react-router-dom";
import useSWR from "swr";
import { getFetcher } from "../../data/dataFetcher";
import useQuery from "../../hooks/useQuery";
import { useViewerSettings } from "../../hooks/useViewerSettings";
import ExternalLink from "../ExternalLink";
import { InternalLink } from "../InternalLink";
import ScrollToTop from "../ScrollToTop";

function VocabItem({ uri, label, description }) {
  return (
    <div className="card margin-vert--md">
      <div className="card__header">
        <h5>
          <Link to={"?uri=" + uri}>{label}</Link>
        </h5>
      </div>
      <div className="card__body">
        <div>{description}</div>
      </div>
    </div>
  );
}

function VocabsListPage({ settingsID }) {
  const settings = useViewerSettings(settingsID);
  const { data, error } = useSWR(
    settings.api + "/vocab_viewer/nrm/vocabs",
    getFetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h2>{settings.title}</h2>

      {data && data.length > 0 ? (
        data.map((item) => (
          <VocabItem
            key={item.id}
            uri={item.id}
            label={item.label}
            description={item.description}
          />
        ))
      ) : (
        <div>Sorry, failed to load data.</div>
      )}
    </>
  );
}

function ResourcePage({ uri, settingsID }) {
  const settings = useViewerSettings(settingsID);
  const { data, error } = useSWR(
    settings.api +
      "/vocab_viewer/nrm/resource?uri=" +
      uri +
      "&sparql_endpoint=" +
      settings.sparqlEndpoint,
    getFetcher
  );

  if (error) {
    // FIXME: Why do I have to stringify and then parse it to access?
    let errorObject = JSON.parse(JSON.stringify(error));
    if (errorObject.status === 404) {
      return (
        <>
          <Link to={`${settings.pageRoute}`}>
            <button className="button button--secondary margin-bottom--lg">
              Back to {settings.title}
            </button>
          </Link>
          <h2>Resource not found</h2>
          <p>
            Resource with URI <code>{uri}</code> not found.
          </p>
        </>
      );
    }
    return <div>Failed to load</div>;
  }
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Link to={`${settings.pageRoute}`}>
        <button className="button button--secondary margin-bottom--lg">
          Back to {settings.title}
        </button>
      </Link>

      <ul className="pills">
        {data.types.map((type, index) =>
          index === 0 ? (
            <a key={type.value} target="_blank" href={type.value}>
              <li className="badge badge--info margin-right--xs">
                {type.label}
              </li>
            </a>
          ) : (
            <a key={type.value} target="_blank" href={type.value}>
              <li className="badge badge--info margin-horiz--xs">
                {type.label}
              </li>
            </a>
          )
        )}
      </ul>

      <h2>{data.label}</h2>
      <hr />

      <CodeBlock>{uri}</CodeBlock>

      {/* <div>
        <p>SPARQL endpoint: {settings.sparqlEndpoint}</p>
      </div> */}

      <div>
        {data.properties.map((property) => {
          let predicateLink = (
            <ExternalLink href={property.predicate.value}>
              {property.predicate.label}
            </ExternalLink>
          );
          if (property.internal) {
            predicateLink = (
              <InternalLink
                uriObject={property.predicate}
                pageRoute={settings.pageRoute}
              />
            );
          }

          return (
            <div
              key={property.predicate.value}
              className="card margin-vert--md"
            >
              <div className="card__header">
                <h5>{predicateLink}</h5>
              </div>
              <div className="margin-left--md">
                {property.objects.map((object) => {
                  let objectValue = (
                    <>{`An error occurred. Unknown object type: '${object.type}' with value ${object.value}`}</>
                  );
                  if (object.type === "uri" && object.internal === true) {
                    objectValue = (
                      <InternalLink
                        uriObject={object}
                        pageRoute={settings.pageRoute}
                      />
                    );
                  } else if (
                    object.type === "uri" &&
                    object.internal === false
                  ) {
                    objectValue = (
                      <div>
                        <ExternalLink href={object.value}>
                          {object.label}
                        </ExternalLink>
                      </div>
                    );
                  } else if (object.type === "literal") {
                    if (
                      object.datatype &&
                      object.datatype.value ===
                        "http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML"
                    ) {
                      objectValue = (
                        <div
                          dangerouslySetInnerHTML={{ __html: object.value }}
                        ></div>
                      );
                    } else if (
                      object.datatype &&
                      object.datatype.value ===
                        "http://www.w3.org/2001/XMLSchema#anyURI"
                    ) {
                      objectValue = (
                        <ExternalLink href={object.value}>
                          {object.value}
                        </ExternalLink>
                      );
                    } else {
                      objectValue = <>{object.value}</>;
                    }
                  }

                  return (
                    <div key={object.value} className="card__body">
                      <div className="card">
                        <div className="card__body">{objectValue}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

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

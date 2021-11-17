import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { useSparql } from "../../data/dataFetcher";
import useQuery from "../../hooks/useQuery";
import InternalLink from "../InternalLink";
import IRIField from "../IRIField";
import ScrollToTop from "../ScrollToTop";

function VocabItem({ uri, description, settings }) {
  return (
    <div className="card margin-vert--sm">
      <div className="card__header">
        <InternalLink resourceUri={uri} settings={settings}></InternalLink>
      </div>
      <div className="card__body">
        <div>{description}</div>
      </div>
    </div>
  );
}

function VocabsListPage({ settings }) {
  const { data, error } = useSparql(
    settings.endpoint,
    settings.queries.getVocabularies()
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const vocabItems = data.results.bindings
    .map((item) => {
      if (item?.uri?.value) {
        return (
          <VocabItem
            key={item.uri.value}
            uri={item.uri.value}
            description={item?.description?.value}
            settings={settings}
          />
        );
      }
    })
    .filter((item) => item !== undefined);

  return (
    <>
      <h2>{settings.title}</h2>

      {vocabItems.length > 0 ? (
        vocabItems
      ) : (
        <div>Sorry, failed to load data.</div>
      )}
    </>
  );
}

function ResourceLabel({ uri, settings }) {
  const { data, error } = useSparql(
    settings.endpoint,
    settings.queries.getLabel(uri)
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <h2>{data.results.bindings[0]?.label?.value}</h2>;
}

function ResourcePage({ uri, settings }) {
  const { data, error } = useSparql(
    settings.endpoint,
    settings.queries.getResource(uri)
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // TODO: Refactor this property values into its own component.
  // TODO: Render a different component based on the value.type.
  //   E.g., IRI, String (lang), Number, Bool, etc.
  const propertyValues = {};
  for (const row of data.results.bindings) {
    const p = row.p.value;
    const o = row.o;
    if (propertyValues.hasOwnProperty(row.p.value)) {
      propertyValues[p].push(o);
    } else {
      propertyValues[p] = [o];
    }
  }

  const properties = [];
  for (const property in propertyValues) {
    properties.push({
      property: property,
      values: propertyValues[property],
    });
  }

  return (
    <>
      <Link to={`${settings.pageRoute}`}>
        <button className="button button--secondary margin-bottom--lg">
          Back to {settings.title}
        </button>
      </Link>

      <ResourceLabel uri={uri} settings={settings} />

      <CodeBlock>{uri}</CodeBlock>
      {properties.map((property) => (
        <div key={property.property}>
          <strong>
            <IRIField value={property.property} settings={settings} />
          </strong>
          <ul>
            {property.values.map((value) => {
              if (value.type === "uri") {
                return (
                  <li key={value.value}>
                    <IRIField
                      key={value.value}
                      value={value.value}
                      settings={settings}
                    />
                  </li>
                );
              } else {
                return <li key={value.value}>{value.value}</li>;
              }
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

function PageComponent({ settings }) {
  const params = useQuery();
  let uri = params.get("uri");

  // Show the vocab list page if the "uri" query parameter is missing.
  // Otherwise show the resource identified by the uri.
  let page = <VocabsListPage settings={settings} />;
  if (uri) {
    page = <ResourcePage uri={uri} settings={settings} />;
  }

  return <main className="margin-vert--lg container">{page}</main>;
}

export default function Page({ settings }) {
  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <Layout title={settings.title}>
      <Router>
        <ScrollToTop>
          <PageComponent settings={settings} />
        </ScrollToTop>
      </Router>
    </Layout>
  );
}

import React from "react";
import CodeBlock from "@theme/CodeBlock";
import useSWR from "swr";

import { getFetcher } from "../../data/dataFetcher";
import ExternalLink from "../ExternalLink";
import { InternalLink } from "../InternalLink";
import { useViewerSettings } from "../../hooks/useViewerSettings";
import { Link } from "react-router-dom";
import { PropertyValues } from "./PropertyValues";

export function ResourcePage({ uri, settingsID, sparqlEndpoint = "" }) {
  const settings = useViewerSettings(settingsID);
  let endpoint = sparqlEndpoint || settings.sparqlEndpoint;
  const { data, error } = useSWR(
    settings.api +
      "/viewer/resource?uri=" +
      uri +
      "&sparql_endpoint=" +
      endpoint +
      "&format=application/json",
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
      {settingsID !== "general" && (
        <Link to={`${settings.pageRoute}`}>
          <button className="button button--secondary margin-bottom--lg">
            Back to {settings.title}
          </button>
        </Link>
      )}

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

      <div className="padding-bottom--sm">
        {data.properties.map((property) => {
          // FIXME: We are assuming all predicates are an external link here when it may not always be true.
          let predicateLink = (
            <ExternalLink href={property.value}>{property.label}</ExternalLink>
          );
          if (property.internal) {
            predicateLink = (
              <InternalLink
                uriObject={property.value}
                settingsID={settingsID}
                sparqlEndpoint={endpoint}
              />
            );
          }

          return (
            <div key={property.value} className="card margin-vert--md">
              <div className="card__header">
                <h5>{predicateLink}</h5>
              </div>
              <div className="margin-left--md">
                <PropertyValues
                  uri={uri}
                  predicate={property.value}
                  sparqlEndpoint={endpoint}
                  settingsID={settingsID}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

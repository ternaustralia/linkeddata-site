import React from "react";
import useSWR from "swr";
import { fetcher } from "../data/dataFetcher";
import { getFetchOptions } from "../data/utils";
import { Link } from "react-router-dom";

function getConnegFetchOptions() {
  return {
    method: "GET",
    headers: {
      accept: "application/ld+json",
    },
  };
}

function LabelByConneg({ href }) {
  const fetchOptions = getConnegFetchOptions();
  const swrOptions = {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  };
  const { data, error } = useSWR(
    [
      `https://cors-anywhere.edmondchuc.com/${href}`,
      JSON.stringify(fetchOptions),
    ],
    fetcher,
    swrOptions
  );

  if (error) return <div>{href}</div>;
  if (!data) return <div>{href}</div>;

  // TODO: Hardcoded skos:prefLabel here.
  const label =
    data?.[0]?.["http://www.w3.org/2004/02/skos/core#prefLabel"]?.[0]?.[
      "@value"
    ];
  return <>{label}</>;
}

export function InternalLink({ uriObject, pageRoute, sparqlEndpoint = "" }) {
  if (sparqlEndpoint) {
    return (
      <Link to={`${pageRoute}?uri=${uriObject.value}&sparql_endpoint=${sparqlEndpoint}`}>
        <strong>{uriObject.label}</strong>
      </Link>
    );  
  }

  return (
    <Link to={`${pageRoute}?uri=${uriObject.value}`}>
      <strong>{uriObject.label}</strong>
    </Link>
  );
}

export default function InternalLinkLegacy({ resourceUri, settings }) {
  const { pageRoute, endpoint } = settings;
  const sparqlQuery = settings.queries.getLabel(resourceUri);
  const fetchOptions = getFetchOptions(sparqlQuery);
  const { data, error } = useSWR(
    [endpoint, JSON.stringify(fetchOptions)],
    fetcher
  );

  if (error) return <div>{resourceUri}</div>;
  if (!data) return <div>{resourceUri}</div>;

  const label = data.results.bindings?.[0]?.label?.value;

  return (
    <Link to={`${pageRoute}?uri=${resourceUri}`}>
      <strong>{label ? label : <LabelByConneg href={resourceUri} />}</strong>
    </Link>
  );
}

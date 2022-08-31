import React from "react";
import useSWR from "swr";
import { fetcher, useSparql } from "../data/dataFetcher";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";
import { prefixEndpoint } from "../prefixEndpoint";

function getFetchOptions() {
  return {
    method: "GET",
    headers: {
      accept: "application/ld+json",
    },
  };
}

function useIsInternalLink(uri, settings) {
  const { data, error } = useSparql(
    settings.endpoint,
    settings.queries.resourceExists(uri)
  );

  if (error) return false;
  if (!data) return false;

  return data.boolean;
}

export function ExternalConnegLink({ href, settings }) {
  const fetchOptions = getFetchOptions();
  const swrOptions = {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  };
  // TODO: Remove hardcoded cors proxy url here.
  const { data, error } = useSWR(
    [
      `https://cors-anywhere.edmondchuc.com/${href}`,
      JSON.stringify(fetchOptions),
    ],
    fetcher,
    swrOptions
  );
  // const isInternalLink = useIsInternalLink(href, settings)

  if (error) return <ExternalLink href={href}>{href}</ExternalLink>;
  if (!data) return <div>Loading...</div>;

  const label =
    data?.[0]?.["http://www.w3.org/2004/02/skos/core#prefLabel"]?.[0]?.[
      "@value"
    ];

  // if (isInternalLink) {
  //   return <InternalLink resourceUri={href} settings={settings} />
  // }

  if (label) {
    return <ExternalLink href={href}>{label}</ExternalLink>;
  }

  return <ExternalLink href={href}>{href}</ExternalLink>;
}

export default function IRIField({ value, settings }) {
  // A little ugly but, check if the URI is from the TERN Ontology namespace
  // and if it is, then create it as an internal viewer link.
  const isInternalLink = useIsInternalLink(value, settings);
  // if (value.startsWith(settings.queries.baseUri)) {
  //   return <InternalLink resourceUri={value} settings={settings} />
  // }

  const searchParams = new URLSearchParams("");
  searchParams.set("q", value);

  // Don't refetch on error - could be the curie does not exist in the prefix service.
  const swrOptions = {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  };
  const { data, error } = useSWR(
    prefixEndpoint + "?" + searchParams,
    fetcher,
    swrOptions
  );

  if (isInternalLink) {
    return <InternalLink resourceUri={value} settings={settings} />;
  }

  // const errorView = <ExternalConnegLink href={value} settings={settings} />;

  if (error) return <ExternalConnegLink href={value} settings={settings} />;
  if (!data) return <div>Loading...</div>;

  if (data.success) {
    return (
      <>
        <ExternalLink href={value}>{data.value}</ExternalLink>
      </>
    );
  } else {
    return <ExternalConnegLink href={value} settings={settings} />;
  }
}

import React from "react";
import useSWRInfinite from "swr/infinite";

import { getFetcher } from "../../data/dataFetcher";
import { useViewerSettings } from "../../hooks/useViewerSettings";
import ExternalLink from "../ExternalLink";
import { InternalLink } from "../InternalLink";

export function PropertyValues({ uri, predicate, sparqlEndpoint, settingsID }) {
  const settings = useViewerSettings(settingsID);

  const pageSize = 50;

  const url = `${settings.api}/viewer/predicate-values?uri=${encodeURIComponent(
    uri
  )}&predicate=${encodeURIComponent(
    predicate
  )}&sparql_endpoint=${encodeURIComponent(
    sparqlEndpoint
  )}&page_size=${pageSize}`;

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => url + `&page=${index + 1}`,
    getFetcher
  );

  const objectValues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.count < size * pageSize);
  const isRefreshing = isValidating && data && data.length === size;

  const totalCount = objectValues[0]?.count || 0;

  return (
    <>
      {objectValues.map((pageData) =>
        pageData.objects.map((object) => {
          let objectValue = (
            <>{`An error occurred. Unknown object type: '${object.type}' with value ${object.value}`}</>
          );
          if (object.type === "uri" && object.internal === true) {
            objectValue = (
              <InternalLink
                uriObject={object}
                settingsID={settingsID}
                sparqlEndpoint={sparqlEndpoint}
              />
            );
          } else if (object.type === "uri" && object.internal === false) {
            objectValue = (
              <div>
                <ExternalLink href={object.value}>{object.label}</ExternalLink>
              </div>
            );
          } else if (object.type === "literal") {
            if (
              object.datatype &&
              object.datatype.value ===
                "http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML"
            ) {
              objectValue = (
                <div dangerouslySetInnerHTML={{ __html: object.value }}></div>
              );
            } else if (
              object.datatype &&
              object.datatype.value ===
                "http://www.w3.org/2001/XMLSchema#anyURI"
            ) {
              objectValue = (
                <ExternalLink href={object.value}>{object.value}</ExternalLink>
              );
            } else {
              objectValue = <>{object.value}</>;
            }
          }

          return (
            <div key={object.value} className="card__body">
              <div className="card">
                <div className="card__body">
                  {objectValue}
                  {object.datatype ? <sup>^^{object.datatype.value}</sup> : ""}
                </div>
              </div>
            </div>
          );
        })
      )}

      {isLoadingInitialData ? (
        "Loading"
      ) : isReachingEnd ? (
        ""
      ) : (
        <>
          <button
            className="button button--secondary margin-bottom--md margin-left--md margin-top--md"
            disabled={isLoadingMore || isReachingEnd}
            onClick={() => setSize(size + 1)}
          >
            {isLoadingMore
              ? "Loading..."
              : isReachingEnd
              ? "No more data"
              : "Load more"}
          </button>
          <p className="margin-left--md">
            Showing {size * pageSize} of {totalCount}
          </p>
        </>
      )}
    </>
  );
}

import React from "react";
import { Table } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "../../../../data/dataFetcher";
import ExternalLink from "../../../ExternalLink";
import { getFetchOptions } from "../../../../data/utils";
import IRIField from "../../../IRIField";
import settings from "../../../../pages/viewers/dawe-vocabs/_settings";
import { endpoint, sparqlQuery } from "./settings";

export default function OverviewTable({ moduleOpCollectionUri }) {
  const fetchOptions = getFetchOptions(sparqlQuery(moduleOpCollectionUri));
  const { data, error } = useSWR(
    [endpoint, JSON.stringify(fetchOptions)],
    fetcher
  );

  const failedToLoadMessage = "Failed to load overview table";

  if (error) {
    console.error(error);
    return <div>{failedToLoadMessage}</div>;
  }
  if (!data) return <div>Loading...</div>;

  if (data.results.bindings.length < 1) {
    console.error("Results returned empty.");
    return <div>{failedToLoadMessage}</div>;
  }

  const concepts = data.results.bindings.map((value) => (
    <tr key={value.concept.value}>
      <td>
        <IRIField value={value.concept.value} settings={settings} />
      </td>
      <td>
        <ExternalLink href={value?.featureType?.value}>
          {value?.featureTypeLabel?.value}
        </ExternalLink>
      </td>
      <td>
        <ExternalLink href={value?.valueType?.value}>
          {value?.valueTypeLabel?.value
            ? value.valueTypeLabel.value
            : value.valueType.value.split("/").pop()}
        </ExternalLink>
      </td>
      <td>
        <IRIField
          value={value?.categoricalCollection?.value}
          settings={settings}
        />
      </td>
    </tr>
  ));

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>Observable property</th>
            <th>Feature type</th>
            <th>Value type</th>
            <th>Categorical values (if applicable)</th>
          </tr>
        </thead>
        <tbody>{concepts}</tbody>
      </Table>
    </>
  );
}

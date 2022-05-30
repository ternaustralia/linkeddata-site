import React from "react";
import { Table } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "../../../../data/dataFetcher";
import ExternalLink from "../../../ExternalLink";
import { getFetchOptions } from "../../../../data/utils";
import IRIField from "../../../IRIField";
import settings from "../../../../pages/viewers/dawe-vocabs/_settings";

export const sparqlQuery = (moduleOpCollectionUri) => {
  return `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
select ?concept (sample(?__label) as ?label) ?featureType (sample(?_featureTypeLabel) as ?featureTypeLabel) ?valueType (sample(?_valueTypeLabel) as ?valueTypeLabel) ?categoricalCollection (sample(?_categoricalCollectionLabel) as ?categoricalCollectionLabel)
from <http://www.ontotext.com/explicit>
from <https://linked.data.gov.au/def/test/dawe-cv/>
where { 
    # Plot Description Observable Properties
    <${moduleOpCollectionUri}> skos:member ?concept .
    ?concept skos:prefLabel ?_label .
    bind(str(?_label) as ?__label)

    optional { 
        ?concept tern:hasFeatureType ?featureType .
        service <https://graphdb.tern.org.au/repositories/tern_vocabs_core> {
            ?featureType skos:prefLabel ?_featureTypeLabel .
        }
    }

    optional {
      ?concept tern:valueType ?valueType .
      optional {
          service <https://graphdb.tern.org.au/repositories/knowledge_graph_core?context=%3Chttps%3A%2F%2Fw3id.org%2Ftern%2Fontologies%2Ftern%2F%3E&infer=false> {
          ?valueType rdfs:label ?_valueTypeLabel .
        }
      }
    }

    optional {
        ?concept tern:hasCategoricalCollection ?categoricalCollection .
        ?categoricalCollection skos:prefLabel ?_categoricalCollectionLabel .
    }
} 
group by ?concept ?featureType ?valueType ?categoricalCollection
order by lcase(?label)
`;
};

export const endpoint =
  "https://graphdb.tern.org.au/repositories/dawe_vocabs_core";

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

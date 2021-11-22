import React from "react";
import CodeBlock from "@theme/CodeBlock";
import { useGenerate } from "./generate";
import protocolModuleConfig from "./protocol-module-config";
import jsonLdContext from "../json-ld-context";

export default function Component({ protocolModule, observableProperty }) {
  const baseObservationUri = "https://example.com/observation";
  const baseFeatureOfInterestUri = "https://example.com/feature-of-interest";
  const datasetUri = "https://example.com/dataset/1";
  const sparqlEndpoint =
    "https://graphdb.tern.org.au/repositories/dawe_vocabs_core";
  const sparqlQuery = `
PREFIX : <http://linked.data.gov.au/def/test/dawe-cv/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>

SELECT ?label (?concept as ?uri) ?valueType ?featureType ?categoricalCollection ?method
WHERE {
    <${protocolModuleConfig[protocolModule].uri}> skos:member ?concept .
	graph ?g {
	    ?concept a ?type .
      ?concept skos:prefLabel ?label .
      optional { ?concept tern:hasFeatureType ?featureType }
      optional { ?concept tern:hasCategoricalCollection ?categoricalCollection }
      optional { ?concept tern:valueType ?valueType }
      optional { ?concept tern:hasMethod ?method }
  }
}
`;
  const examples = useGenerate(
    observableProperty,
    sparqlQuery,
    sparqlEndpoint,
    datasetUri,
    baseObservationUri,
    baseFeatureOfInterestUri,
    protocolModuleConfig[protocolModule].exampleData
  );

  if (!examples) {
    return <p>Loading...</p>;
  }

  if (examples && examples.length === 0) {
    return <p>Failed to load data.</p>;
  }

  const example = examples.filter(
    (example) => example.observedProperty === observableProperty
  );

  const data = jsonLdContext;
  data["@graph"] = example;

  return (
    <>
      <CodeBlock className="language-json">
        {JSON.stringify(data, null, 2)}
      </CodeBlock>
    </>
  );
}

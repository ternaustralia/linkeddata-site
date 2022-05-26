import React from "react";
import CodeBlock from "@theme/CodeBlock";
import { useGenerate } from "./generate";
import protocolModuleConfig from "./protocol-module-config";
import jsonLdContext from "../json-ld-context";
import useEnv from "../../../../hooks/useEnv";
import { useSparql } from "../../../../data/dataFetcher";
import { uuidv4 } from "./utils";

export default function Component({ protocolModule, observableProperty }) {
  const baseObservationUri = "https://example.com/observation";
  const baseFeatureOfInterestUri = "https://example.com/feature-of-interest";
  const datasetUri = "https://example.com/dataset/1";
  const sparqlEndpoint =
    "https://graphdb.tern.org.au/repositories/dawe_vocabs_core";

  try {
    var sparqlQuery = `
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
  } catch (e) {
    if (e instanceof TypeError) {
      throw new Error(
        `Entry "${protocolModule}" not found in protocol-module-config.js.
        `
      );
    }
  }

  const env = useEnv();
  const generated = useGenerate(
    observableProperty,
    sparqlQuery,
    sparqlEndpoint,
    datasetUri,
    baseObservationUri,
    baseFeatureOfInterestUri,
    protocolModuleConfig[protocolModule].exampleData,
    env
  );

  if (generated) {
    var [examples, observablePropertyValues] = generated;
  } else {
    return <p>Loading...</p>;
  }

  if (Array.isArray(examples)) {
    const example = examples.filter(
      (example) => example.observedProperty === observableProperty
    );
    const data = jsonLdContext;
    data["@graph"] = example;

    if (
      !data["@graph"][0].hasResult.hasOwnProperty("value") &&
      observablePropertyValues.valueType ===
        "https://w3id.org/tern/ontologies/tern/IRI"
    ) {
      return (
        <AutoCategoricalValueResult
          origData={data}
          sparqlEndpoint={sparqlEndpoint}
          observablePropertyValues={observablePropertyValues}
        />
      );
    }

    if (
      !data["@graph"][0].hasResult.hasOwnProperty("value") &&
      observablePropertyValues.valueType !==
        "https://w3id.org/tern/ontologies/tern/IRI" &&
      env === "test"
    ) {
      return <p>Failed to render example: No result value</p>;
    }

    return (
      <>
        <CodeBlock className="language-json">
          {JSON.stringify(data, null, 2)}
        </CodeBlock>
      </>
    );
  }

  return <p>Failed to load data.</p>;
}

const AutoCategoricalValueResult = ({
  origData,
  sparqlEndpoint,
  observablePropertyValues,
}) => {
  const query = `
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    SELECT *
    WHERE {
      <${observablePropertyValues.categoricalCollection}> skos:member ?member .
    } LIMIT 1
  `;
  const { data, error } = useSparql(sparqlEndpoint, query);
  if (error) return null;
  if (!data) return null;

  const categoricalValue =
    data.results.bindings.length > 0
      ? data.results.bindings[0].member
      : { value: `https://example.com/${uuidv4()}` };
  origData["@graph"][0].hasResult["@type"] = [
    observablePropertyValues.valueType,
  ];
  origData["@graph"][0].hasResult.value = { "@id": categoricalValue.value };
  return (
    <>
      <CodeBlock className="language-json">
        {JSON.stringify(origData, null, 2)}
      </CodeBlock>
    </>
  );
};

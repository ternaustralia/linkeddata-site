/**
 * Fetch data from https://graphdb.tern.org.au/repositories/dawe_vocabs_core and
 * generate markdown files. Configure the constant variable moduleName.
 *
 * TODO: move named graph in sparql query to config.
 * TODO: Move moduleLookup and all the settings above it to a config.
 */

const fs = require("fs");
const axios = require("axios").default;
const { getSparqlQuery } = require("./queries");

// Set the module to generate for each script run
const moduleName = "invertebrate-post-field-guideline";

// Key-value pair of module name in docs and the module's collection of observable properties.
const moduleLookup = {
  "plot-description": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  cover: {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/d6321ef2-a967-4a05-8e63-f892723c3473",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  floristics: {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/ea83b861-7592-4378-bfb0-e06c459147ad",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "opportunistic-observations": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/d3f85cc2-f3e8-4900-a2ac-19fc27fd14f9",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "vegetation-mapping": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/2089561b-5b49-472a-812f-3de661505ccb",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "basal-area": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/ab7c4569-312c-4450-b413-9b11c4d2577b",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "recruitment-age": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/36c493f1-6a2e-4d48-9c3a-df104d98124b",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "recruitment-survivorship": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/6bea1c41-0a98-465a-a146-1d3cfbf6f6fa",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "plot-soil-description": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/5b7addb7-ae3d-47eb-b5d8-f34cc211875a",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "soil-pit-characterization": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/760751fb-7a1b-4874-9de6-98127febac58",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "soil-bulk-density": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/72b5340f-6654-4ee8-81dc-6a492964b20c",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "soil-subsite-sampling": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/eaf5a55e-e053-4818-a808-4722b1da4d17",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "coarse-woody-debris": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/3a17f41f-1cf2-4abb-bde1-3b9a1388051e",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  condition: {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/1d6ca60e-4371-4248-a383-5d4bd4d88c65",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  fire: {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/75002e1e-7866-4264-9e20-8569743ea4f5",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "invertebrate-wet-pitfall": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/0fff4578-8fb7-4da1-a197-5078cafb1b25",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "invertebrate-active-sampling": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/2d955edb-ab22-4101-bc72-b5899d901fd7",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "invertebrate-pan-trapping": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/50054098-8127-4e09-b397-9e3c6d074570",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "invertebrate-malaise-trapping": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/553e5dc9-db36-484c-b71c-75a9b76dcca5",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
  "invertebrate-post-field-guideline": {
    collectionUri:
      "https://linked.data.gov.au/def/test/dawe-cv/656138c9-abc3-44c5-8d69-3522de407dee",
    startingIndex: 2,
    sparqlEndpoint: "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
  },
};

async function main() {
  const query = getSparqlQuery(moduleLookup[moduleName].collectionUri);
  const params = new URLSearchParams();
  params.append("query", query);
  const { data } = await axios.post(
    moduleLookup[moduleName].sparqlEndpoint,
    params,
    {
      method: "POST",
      headers: {
        accept: "application/sparql-results+json",
        "content-type": "application/x-www-form-urlencoded",
      },
    }
  );

  const ops = data.results.bindings.map((row) => ({
    uri: row.concept.value,
    label: row.label.value,
    featureType: row.featureType.value,
    featureTypeLabel: row.featureTypeLabel.value,
    valueType: row.valueType.value,
    valueTypeLabel: row.valueTypeLabel.value,
    categoricalCollection: row?.categoricalCollection?.value,
    categoricalCollectionLabel: row?.categoricalCollectionLabel?.value,
  }));

  const outputTopFolder = `./output`;
  const outputFolder = `${outputTopFolder}/${moduleName}`;

  if (!fs.existsSync(outputTopFolder)) {
    fs.mkdirSync(outputTopFolder);
  }

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  } else {
    deleteFiles(outputFolder);
  }

  let index = moduleLookup[moduleName].startingIndex;
  for (const op of ops) {
    const slug = slugify(op.label);
    fs.writeFile(
      `${outputFolder}/${slug}.mdx`,
      template(index, moduleName, op),
      (err) => {
        if (err) throw err;
        console.log(`${slug}.mdx created in ${outputFolder}`);
      }
    );
    index++;
  }
}

main();

function template(index, moduleName, op) {
  let categoricalCollection = "";
  if (
    op.valueType === "https://w3id.org/tern/ontologies/tern/CategoricalValue" ||
    (op.valueType === "https://w3id.org/tern/ontologies/tern/IRI" &&
      op.categoricalCollection &&
      op.categoricalCollectionLabel)
  ) {
    categoricalCollection = `- Categorical value collection: [${op.categoricalCollectionLabel}](/viewers/dawe-vocabs?uri=${op.categoricalCollection})`;
  }
  return `---
sidebar_position: ${index}
---

import Example from "../../../../../../src/components/docs/tern-ontology/example-data-component";

# ${capitalize(op.label)}

- [Observable property](/viewers/dawe-vocabs?uri=${op.uri}) definition
- Feature type: [${op.featureTypeLabel}](${op.featureType})
- Value type: [${op.valueTypeLabel}](${op.valueType})
${categoricalCollection}

<Example protocolModule="${moduleName}" observableProperty="${op.uri}" />
`;
}

// convert string to lowercase, replace spaces with dashes and replace parentheses with empty string.
function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/\(|\)/g, "");
}

// capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// delete files in folder
function deleteFiles(folder) {
  const files = fs.readdirSync(folder);
  for (const file of files) {
    fs.unlinkSync(`${folder}/${file}`);
  }
}

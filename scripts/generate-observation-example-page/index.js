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

// Set for each script run
const moduleName = "plot-description";
const startingIndex = 2;
const url = "https://graphdb.tern.org.au/repositories/dawe_vocabs_core";

const moduleLookup = {
  "plot-description":
    "https://linked.data.gov.au/def/test/dawe-cv/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312",
};

async function main() {
  const query = getSparqlQuery(moduleLookup[moduleName]);
  const params = new URLSearchParams();
  params.append("query", query);
  const { data } = await axios.post(url, params, {
    method: "POST",
    headers: {
      accept: "application/sparql-results+json",
      "content-type": "application/x-www-form-urlencoded",
    },
  });

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

  let index = startingIndex;
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
    op.valueType === "https://w3id.org/tern/ontologies/tern/CategoricalValue" &&
    op.categoricalCollection &&
    op.categoricalCollectionLabel
  ) {
    categoricalCollection = `- Categorical value collection: [${op.categoricalCollectionLabel}](/viewers/dawe-vocabs?uri=${op.categoricalCollection})`;
  }
  return `---
sidebar_position: ${index}
---

import Example from "../../../../src/components/docs/tern-ontology/example-data-component";

# ${capitalize(op.label)}

- [observable property](/viewers/dawe-vocabs?uri=${op.uri}) definition
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

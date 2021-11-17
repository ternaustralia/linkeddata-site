/**
 * Fetch data from https://graphdb.tern.org.au/repositories/dawe_vocabs_core and
 * generate markdown files. Configure the constant variable moduleName.
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
    const { uri, label } = op;
    const slug = slugify(label);
    fs.writeFile(
      `${outputFolder}/${slug}.mdx`,
      template(index, capitalize(label), uri, moduleName),
      (err) => {
        if (err) throw err;
        console.log(`${slug}.mdx created in ${outputFolder}`);
      }
    );
    index++;
  }
}

main();

function template(index, label, uri, moduleName) {
  return `---
sidebar_position: ${index}
---

import Example from "../../../../src/components/docs/tern-ontology/example-data-component";

# ${label}

<Example protocolModule="${moduleName}" observableProperty="${uri}" />
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

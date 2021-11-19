/**
 * Key value pair of protocol module and the protocol module observable properties collection.
 */

import plotDescExampleData from "./example-data/plot-description";
import coverExampleData from "./example-data/cover";
import floristicsExampleData from "./example-data/floristics";

const config = {
  "plot-description": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312",
    exampleData: plotDescExampleData,
  },
  cover: {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/d6321ef2-a967-4a05-8e63-f892723c3473",
    exampleData: coverExampleData,
  },
  floristics: {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/ea83b861-7592-4378-bfb0-e06c459147ad",
    exampleData: floristicsExampleData,
  },
};

export default config;

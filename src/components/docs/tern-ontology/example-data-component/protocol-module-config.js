/**
 * Key value pair of protocol module and the protocol module observable properties collection.
 */

import plotDescExampleData from "./example-data/plot-description";
import coverExampleData from "./example-data/cover";
import floristicsExampleData from "./example-data/floristics";
import opportunisticObservationsExampleData from "./example-data/opportunistic-observations";
import vegetationMappingExampleData from "./example-data/vegetation-mapping";
import basalAreaExampleData from "./example-data/basal-area";
import exampleData from "./example-data";

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
  "opportunistic-observations": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/d3f85cc2-f3e8-4900-a2ac-19fc27fd14f9",
    exampleData: opportunisticObservationsExampleData,
  },
  "vegetation-mapping": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/2089561b-5b49-472a-812f-3de661505ccb",
    exampleData: vegetationMappingExampleData,
  },
  "basal-area": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/5b7addb7-ae3d-47eb-b5d8-f34cc211875a",
    exampleData: basalAreaExampleData,
  },
  "recruitment-age": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/36c493f1-6a2e-4d48-9c3a-df104d98124b",
    exampleData: exampleData,
  },
  "plot-soil-description": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/5b7addb7-ae3d-47eb-b5d8-f34cc211875a",
    exampleData: exampleData,
  },
};

export default config;

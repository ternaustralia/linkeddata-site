/**
 * Key value pair of protocol module and the protocol module observable properties collection.
 */

import plotDescExampleData from "./example-data/plot-description";
import coverExampleData from "./example-data/cover";
import floristicsExampleData from "./example-data/floristics";
import opportunisticObservationsExampleData from "./example-data/opportunistic-observations";
import vegetationMappingExampleData from "./example-data/vegetation-mapping";
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
    uri: "https://linked.data.gov.au/def/test/dawe-cv/ab7c4569-312c-4450-b413-9b11c4d2577b",
    exampleData: exampleData,
  },
  "recruitment-age": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/36c493f1-6a2e-4d48-9c3a-df104d98124b",
    exampleData: exampleData,
  },
  "recruitment-survivorship": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/6bea1c41-0a98-465a-a146-1d3cfbf6f6fa",
    exampleData: exampleData,
  },
  "plot-soil-description": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/5b7addb7-ae3d-47eb-b5d8-f34cc211875a",
    exampleData: exampleData,
  },
  "soil-pit-characterization": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/760751fb-7a1b-4874-9de6-98127febac58",
    exampleData: exampleData,
  },
  "soil-bulk-density": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/72b5340f-6654-4ee8-81dc-6a492964b20c",
    exampleData: exampleData,
  },
  "soil-subsite-sampling": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/eaf5a55e-e053-4818-a808-4722b1da4d17",
    exampleData: exampleData,
  },
  "coarse-woody-debris": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/3a17f41f-1cf2-4abb-bde1-3b9a1388051e",
    exampleData: exampleData,
  },
  condition: {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/1d6ca60e-4371-4248-a383-5d4bd4d88c65",
    exampleData: exampleData,
  },
  "vertebrate-identify": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/a66e0c78-6f5c-4e24-8223-d03f14891e45",
    exampleData: exampleData,
  },
  "vertebrate-active": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/662320e4-4633-4aa3-9c78-4776d22e632e",
    exampleData: exampleData,
  },
  "vertebrate-bird": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/d2768d6b-769c-4355-9358-6d2d98de4baf",
    exampleData: exampleData,
  },
  fire: {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/75002e1e-7866-4264-9e20-8569743ea4f5",
    exampleData: exampleData,
  },
  "invertebrate-wet-pitfall": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/0fff4578-8fb7-4da1-a197-5078cafb1b25",
    exampleData: exampleData,
  },
  "invertebrate-active-sampling": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/2d955edb-ab22-4101-bc72-b5899d901fd7",
    exampleData: exampleData,
  },
  "invertebrate-pan-trapping": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/50054098-8127-4e09-b397-9e3c6d074570",
    exampleData: exampleData,
  },
  "invertebrate-malaise-trapping": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/553e5dc9-db36-484c-b71c-75a9b76dcca5",
    exampleData: exampleData,
  },
  "invertebrate-post-field-guideline": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/656138c9-abc3-44c5-8d69-3522de407dee",
    exampleData: exampleData,
  },
  "invertebrate-leaf-litter-extraction": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/b29538e9-1118-45c5-88d5-ba1738b57940",
    exampleData: exampleData,
  },
  "invertebrate-light-trapping": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/beacf237-e402-4911-a9e4-89925374df23",
    exampleData: exampleData,
  },
  "targeted-survey-ecological-community": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/2e7e218c-c307-4dfa-9560-90d8f03e401e",
    exampleData: exampleData,
  },
  "targeted-survey-general-field-protocol": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/ccaedec9-ffdc-42df-9c9f-7dce8b14fb91",
    exampleData: exampleData,
  },
  "targeted-survey-fauna-protocol-active": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/5a31ad93-8729-435d-b3ba-e361ab70a10c",
    exampleData: exampleData,
  },
  "targeted-survey-fauna-protocol-passive": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/5ed1bd2f-f3f3-4b62-a485-c07ccb454e66",
    exampleData: exampleData,
  },
  "targeted-survey-flora-protocol-population": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/7a3a06af-8c03-414f-9040-fd4bbf691384",
    exampleData: exampleData,
  },
  "targeted-survey-flora-protocol-observation": {
    uri: "https://linked.data.gov.au/def/test/dawe-cv/9b5e04d5-182c-4644-8bba-4c8f6399b527",
    exampleData: exampleData,
  },
};

export default config;

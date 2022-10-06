const exampleData = {
  // field species name
  "https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227": {
    "@type": [
      "https://w3id.org/tern/ontologies/tern/Text",
      "https://w3id.org/tern/ontologies/tern/Value",
    ],
    value: {
      "@value": "Eucalyptus rugosa",
      "@type": "http://www.w3.org/2001/XMLSchema#string",
    },
  },
  // growth form
  "https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65": {
    "@type": [
      "https://w3id.org/tern/ontologies/tern/Concept",
      "https://w3id.org/tern/ontologies/tern/Value",
    ],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/8f4fd07c-a8a8-5e6f-81b3-4506a6a2d629",
      "@type": "@id",
    },
  },
};

export default exampleData;

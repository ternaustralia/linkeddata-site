const exampleData = {
  // field species name
  "https://linked.data.gov.au/def/test/dawe-cv/26f843a5-e1ed-46da-b22b-053e567e3227":
    {
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
  "https://linked.data.gov.au/def/test/dawe-cv/dd1769b9-c475-4732-915c-9b890a8d5f65":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/8f4fd07c-a8a8-5e6f-81b3-4506a6a2d629",
        "@type": "@id",
      },
    },
  // in canopy sky
  "https://linked.data.gov.au/def/test/dawe-cv/85bdd25a-fa08-49de-9f0b-98895cb79aa6":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Boolean",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": "true",
        "@type": "http://www.w3.org/2001/XMLSchema#bool",
      },
    },
  // substrate type
  "https://linked.data.gov.au/def/test/dawe-cv/75f55bf0-6972-42ba-ad46-7e24f91e8f6a":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/856056f9-0588-5e50-9b6e-966beb136bf6",
        "@type": "@id",
      },
    },
  // uppermost height
  "https://linked.data.gov.au/def/test/dawe-cv/823263e6-4bc9-4c98-94de-74a509aef47c":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/QuantitativeMeasure",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 2.7,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/M",
    },
};

export default exampleData;

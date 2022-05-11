const exampleData = {
  // basal area count
  "https://linked.data.gov.au/def/test/dawe-cv/29b37ffc-9a41-44f7-889a-bab63b48fa93":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Integer",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 3,
        "@type": "http://www.w3.org/2001/XMLSchema#integer",
      },
    },
  // circumference at breast height
  "https://linked.data.gov.au/def/test/dawe-cv/2d042596-d49a-4139-92f5-dc0f23737e76":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Float",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 0.565,
        "@type": "http://www.w3.org/2001/XMLSchema#float",
      },
      unit: {
        "@value": "http://qudt.org/vocab/unit/M",
      },
    },
  // diameter at breast height
  "https://linked.data.gov.au/def/test/dawe-cv/6e1c8b97-3655-4a22-9647-02f2c756e789":
  {
    "@type": [
      "https://w3id.org/tern/ontologies/tern/Float",
      "https://w3id.org/tern/ontologies/tern/Value",
    ],
    value: {
      "@value": 0.43,
      "@type": "http://www.w3.org/2001/XMLSchema#float",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M",
    },
  },
};

export default exampleData;

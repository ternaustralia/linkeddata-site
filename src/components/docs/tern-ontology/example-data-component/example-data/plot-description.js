const exampleData = {
  // cover class
  // TODO: cover class - missing categorical values from API.
  //
  // cover
  "https://linked.data.gov.au/def/test/dawe-cv/60c714fa-4e8d-454d-b4cd-7fe77da7f47e":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/QuantitativeMeasure",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 2.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/PERCENT",
    },
  // homogeneity measure
  "https://linked.data.gov.au/def/test/dawe-cv/325d5ff2-8c81-484a-a422-c13ff29666a9":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/QuantitativeMeasure",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 5.1,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/M",
    },
  // landform pattern
  "https://linked.data.gov.au/def/test/dawe-cv/58e4aba5-78c3-4361-b08a-ae39a93c8cb0":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/0b764595-db65-5ddc-8591-8d9c653a4a21",
        "@type": "@id",
      },
    },
  // landform element
  "https://linked.data.gov.au/def/test/dawe-cv/9d4f8a2d-8e77-42dd-857b-0ecbc9c85696":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/11ccf134-21ac-5215-b3ee-39b84953837b",
        "@type": "@id",
      },
    },
  // slope
  "https://linked.data.gov.au/def/test/dawe-cv/b036ba09-d061-4a1c-99a8-890efc462a2c":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/QuantitativeMeasure",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 12.6,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/DEG",
    },
  // aspect (degrees)
  "https://linked.data.gov.au/def/test/dawe-cv/0e0423c6-0dc3-40aa-9776-410a94299256":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/QuantitativeMeasure",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 26.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/DEG",
    },
  // surface strew size
  "https://linked.data.gov.au/def/test/dawe-cv/3eeef779-d4d9-4019-9543-be0abe54cc5c":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/4147fa32-4fdd-5b84-9c31-0fcadfd6ad93",
        "@type": "@id",
      },
    },
  // surface strew lithology
  "https://linked.data.gov.au/def/test/dawe-cv/6ee380ca-e9dc-4a9b-91c3-758b54e751eb":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/0ac1055d-cf12-5575-9a37-b9d380dacd42",
        "@type": "@id",
      },
    },
  // outcropt lithology
  "https://linked.data.gov.au/def/test/dawe-cv/5af5cef1-179c-4bae-9037-42196668deff":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/120314f6-bdfd-5cc1-83e0-dfbc6c600386",
        "@type": "@id",
      },
    },
  // structural formation
  "https://linked.data.gov.au/def/test/dawe-cv/103f26cb-0194-45d2-8b1a-e18e1da6df2b":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/0e6077ea-8f45-5219-9247-6316c84156bf",
        "@type": "@id",
      },
    },
  // climatic condition
  "https://linked.data.gov.au/def/test/dawe-cv/dee23df7-4445-424f-b361-b2e0182be950":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/7933a4c8-1fd2-51f8-b71e-11d690535808",
        "@type": "@id",
      },
    },
  // disturbance
  "https://linked.data.gov.au/def/test/dawe-cv/632e4c3c-0e73-4b3d-b1d6-7b38897da5e8":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/2cef9075-c7d6-52d5-9c46-c951c37790ff",
        "@type": "@id",
      },
    },
  // most dominant species
  "https://linked.data.gov.au/def/test/dawe-cv/671252e3-b306-4436-b24b-7d6e13e9473e":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id": "https://id.biodiversity.org.au/name/apni/150981",
        "@type": "@id",
      },
    },
  // second most dominant species
  "https://linked.data.gov.au/def/test/dawe-cv/909557e9-782f-45ea-8e89-8cf17a2c6ca6":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id": "https://id.biodiversity.org.au/name/apni/169929",
        "@type": "@id",
      },
    },
  // third most dominant species
  "http://linked.data.gov.au/def/tern-cv/07abcf97-542d-4c2f-9fb1-c7c7508f484c":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id": "https://id.biodiversity.org.au/name/apni/7287886",
        "@type": "@id",
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
          "https://linked.data.gov.au/def/test/dawe-cv/10f93cb6-c6af-5c70-941b-01bfde3ac873",
        "@type": "@id",
      },
    },
  // growth stage
  "https://linked.data.gov.au/def/test/dawe-cv/fcfda2f7-84f0-4c26-9f80-c051d129a094":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/2ce92e92-ea69-5f3e-85bf-b3063da0bddd",
        "@type": "@id",
      },
    },
  // height class
  "https://linked.data.gov.au/def/test/dawe-cv/242d081b-b3f4-4206-bc39-7aa42e9972ee":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/35c8d4ba-5474-5a9a-ba66-d5792e7eb907",
      },
    },
  // species cover
  "http://linked.data.gov.au/def/tern-cv/4c6a55a6-3ea2-485f-82bc-c5b89a95a605":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/QuantitativeMeasure",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 12.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/PERCENT",
    },
  "http://linked.data.gov.au/def/tern-cv/abb0ee19-b2e8-42f3-8a25-d1f39ca3ebc3":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        // TODO: change
        "@id": "https://linked.data.gov.au/def/test/dawe-cv/life-stage/3",
      },
    },
  // fire history
  "https://linked.data.gov.au/def/test/dawe-cv/cf1aef8a-a782-4480-9c41-a7f6d170d7fc":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        // TODO: change
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/79155721-cb28-5e1e-98ba-fcf6a436f339",
      },
    },
  "http://linked.data.gov.au/def/tern-cv/7e13fdc3-8f5e-4438-ad74-b6908e7806da":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/QuantitativeMeasure",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@value": 5.1,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/M",
    },
  // slope type
  "https://linked.data.gov.au/def/test/dawe-cv/132a1452-4fd7-473c-956b-3183dd315b67":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/0f06cf3a-681c-5e3d-8d60-e2663d2193ed",
      },
    },
};
export default exampleData;

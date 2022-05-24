const exampleData = {
  // recruitment-age
  // sapling count
  "https://linked.data.gov.au/def/test/dawe-cv/0f342ac9-800a-4298-a148-ffc953ecd393":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
      value: {
        "@value": 2,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
    },
  // tree height
  "https://linked.data.gov.au/def/test/dawe-cv/20afc22d-7981-44d7-9417-673bb498b242":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 6.5,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: {
        "@value": "http://qudt.org/vocab/unit/M",
      },
    },
  // diameter at breast height (dbh)
  "https://linked.data.gov.au/def/test/dawe-cv/6e1c8b97-3655-4a22-9647-02f2c756e789":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 6.5,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
    },
  // seedling count
  "https://linked.data.gov.au/def/test/dawe-cv/b6a5d847-0698-4cce-8a5e-f2719e142208":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
      value: {
        "@value": 2.1,
        "@type": "http://www.w3.org/2001/XMLSchema#integer",
      },
    },
  // plot-soil-description
  // aspect (degrees)
  "https://linked.data.gov.au/def/test/dawe-cv/0e0423c6-0dc3-40aa-9776-410a94299256":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 26.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/DEG",
    },
  // coarse fragment abundance
  "https://linked.data.gov.au/def/test/dawe-cv/b3dd4df5-589b-476e-8e9e-0af6a7155759":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/72bdd173-9782-55b7-87f9-f3f46ea77312",
      },
    },
  // component of microrelief
  "https://linked.data.gov.au/def/test/dawe-cv/7f023c76-32e1-4c08-a52f-b900343b4b92":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/0ae36b0d-bc0e-5963-bb10-4418881946ce",
      },
    },
  // condition of soil surface when dry
  "https://linked.data.gov.au/def/test/dawe-cv/3a1ccb70-41dc-4f57-a74c-62e05aa02c61":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/01b55547-e78c-5eb0-82a3-ee3c13234f3b",
      },
    },
  // erosion type
  "https://linked.data.gov.au/def/test/dawe-cv/9fc1503b-e690-41f0-a824-99f0e69699f1":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/526a7fb6-fd26-55d6-bbd3-5f2075f6f495",
      },
    },
  // gully depth
  "https://linked.data.gov.au/def/test/dawe-cv/4aa9e813-8c4c-4fa6-953b-32c59fdd97be":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
      value: {
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/1a4c3838-0d31-59eb-be2d-6f713d273091",
      },
    },
  // microrelief horizontal interval distance
  "https://linked.data.gov.au/def/test/dawe-cv/22caefc0-0201-4bf2-a108-ef173d607bf4":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.2,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: {
        "@value": "http://qudt.org/vocab/unit/M",
      },
    },
  // microrelief vertical interval distance
  "https://linked.data.gov.au/def/test/dawe-cv/2f87b7cc-c029-4784-92cf-c32055b5c9b7":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.2,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: {
        "@value": "http://qudt.org/vocab/unit/M",
      },
    },
  // slope
  "https://linked.data.gov.au/def/test/dawe-cv/b036ba09-d061-4a1c-99a8-890efc462a2c":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.2,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: {
        "@value": "http://qudt.org/vocab/unit/DEG",
      },
    },
  // slope percent tangent
  "https://linked.data.gov.au/def/test/dawe-cv/bc537f95-6721-4a87-bd30-62d6377424ef":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 12.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/PERCENT",
    },
};

export default exampleData;

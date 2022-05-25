const exampleData = {
  // recruitment-age
  // sapling count
  "https://linked.data.gov.au/def/test/dawe-cv/0f342ac9-800a-4298-a148-ffc953ecd393":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
      value: {
        "@value": 2,
        "@type": "http://www.w3.org/2001/XMLSchema#integer",
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
        "@value": 2,
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
  // soil horizon depth
  "https://linked.data.gov.au/def/test/dawe-cv/c0b5ae33-438d-42ca-b78e-e384d139fe27":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 12.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/CentiM",
    },
  // soil horizon depth - lower
  "https://linked.data.gov.au/def/test/dawe-cv/66f227c3-6267-4068-9493-dfd909592aaf":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 12.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/CentiM",
    },
  // soil horizon depth - upper
  "https://linked.data.gov.au/def/test/dawe-cv/3b693f41-50b2-4469-bdbb-3b5b877fa2a9":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 12.3,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/CentiM",
    },
  // soil pH
  "https://linked.data.gov.au/def/test/dawe-cv/f8993f1e-b4d8-47b8-acdd-a74dd84e845e":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.5,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
    },
  // soil pit depth
  "https://linked.data.gov.au/def/test/dawe-cv/cc960a7d-33a1-446a-85dc-8d1f8fda9996":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.5,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/M",
    },
  // soil sample depth
  "https://linked.data.gov.au/def/test/dawe-cv/93932e83-41aa-48e6-b05c-ecde9bfcca99":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.5,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/M",
    },
  // soil sample depth - lower
  "https://linked.data.gov.au/def/test/dawe-cv/5040cfbe-eb65-4ce8-899c-f13ab841e7c3":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.5,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/M",
    },
  // soil sample depth - upper
  "https://linked.data.gov.au/def/test/dawe-cv/2729becc-9e41-4303-9311-ec2a506e62e5":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 1.5,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
      unit: "http://qudt.org/vocab/unit/M",
    },
  // fine earth bulk density
  "https://linked.data.gov.au/def/test/dawe-cv/460784be-8ad5-4c32-b171-93d69984c0b9":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 2.77,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
    },
  // gross soil bulk density
  "https://linked.data.gov.au/def/test/dawe-cv/a344d029-4b47-455e-89d9-a1040877a5ce":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 3.34,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
    },
  // soil bulk density
  "https://linked.data.gov.au/def/test/dawe-cv/ec510708-9ac1-4c8a-bfe2-31ba5bb693da":
    {
      "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
      value: {
        "@value": 2.44,
        "@type": "http://www.w3.org/2001/XMLSchema#double",
      },
    },
};

export default exampleData;

const exampleData = {
  // landform pattern
  "http://linked.data.gov.au/def/tern-cv/78b617e9-cd18-40b7-ad38-efc30579e680":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "http://linked.data.gov.au/def/tern-cv/e392b1f9-cf6f-4c3e-bf19-8bc04893a1f4",
        "@type": "@id",
      },
    },
  // landform element
  "http://linked.data.gov.au/def/tern-cv/a40230bc-c1e9-4309-b883-c4ead1d143ce":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "http://linked.data.gov.au/def/tern-cv/b5670886-70be-481e-806e-44b3c415e593",
        "@type": "@id",
      },
    },
  // slope angle
  "http://linked.data.gov.au/def/tern-cv/2b5ac7b3-b4bf-4a06-97d6-8dee8b32d72d":
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
  // aspect angle
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
  "http://linked.data.gov.au/def/tern-cv/40d04abb-0a50-43b8-8f19-2e1b5454fb11":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "http://linked.data.gov.au/def/ausplots-cv/ec2adb03-9bed-4335-a338-c2faba0dc71c",
        "@type": "@id",
      },
    },
  // surface strew lithology
  "http://linked.data.gov.au/def/tern-cv/6c2bde95-4b97-4b63-a42b-7a2c253e6e3b":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id": "http://todo.placeholder.com",
        "@type": "@id",
      },
    },
  // dominant outcropt lithology
  "http://linked.data.gov.au/def/tern-cv/09aae763-babb-4926-b1ed-52630195564d":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "http://linked.data.gov.au/def/ausplots-cv/80747e69-e276-4867-9459-ca0b76ca8505",
        "@type": "@id",
      },
    },
  // structural formation
  "http://linked.data.gov.au/def/tern-cv/08dde64e-5f1b-48c3-8ed3-3469780cbf24":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        // TODO: change to categorical value from DAWE protocol
        "@id":
          "http://linked.data.gov.au/def/corveg-cv/2f60a679-0aab-4934-805c-6ec466bfaa36",
        "@type": "@id",
      },
    },
  // climatic condition
  "http://linked.data.gov.au/def/tern-cv/c5ca86b0-c503-4590-87fb-0bc8ff9f1632":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        // TODO: change to categorical value from DAWE protocol
        "@id":
          "https://linked.data.gov.au/def/test/dawe-cv/climatic-condition/wet",
        "@type": "@id",
      },
    },
  // disturbance (event)
  "http://linked.data.gov.au/def/tern-cv/8e9797d9-d5f5-4c5b-8d0a-388cb3dd6253":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "http://linked.data.gov.au/def/ausplots-cv/0b22d017-b2a8-4fe7-a4da-0dde18f13e62",
        "@type": "@id",
      },
    },
  // most dominant species
  "http://linked.data.gov.au/def/tern-cv/ea001a27-3217-45c2-a7b5-96a104986def":
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
  "http://linked.data.gov.au/def/tern-cv/d40b3e6d-db78-4031-b7f3-ed94d538a2af":
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
  "http://linked.data.gov.au/def/tern-cv/f81aa91e-5f57-4e49-bc6e-4d821d1f9de2":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        "@id":
          "http://linked.data.gov.au/def/tern-cv/d3575da4-c1e3-4d25-af3f-7111c8671411",
        "@type": "@id",
      },
    },
  // height class
  "http://linked.data.gov.au/def/tern-cv/ad6feb34-3fa2-4aaa-b111-3db4c648d3a7":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      value: {
        // TODO: change
        "@id": "https://linked.data.gov.au/def/test/dawe-cv/height-class/7",
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
  "http://linked.data.gov.au/def/tern-cv/2746b234-5740-4696-82e8-9c3813daf0af":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      alue: {
        // TODO: change
        "@id": "https://linked.data.gov.au/def/test/dawe-cv/fire-history/2",
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
  "http://linked.data.gov.au/def/tern-cv/a117b27e-11b1-4369-9799-360b8d2ecb14":
    {
      "@type": [
        "https://w3id.org/tern/ontologies/tern/Concept",
        "https://w3id.org/tern/ontologies/tern/Value",
      ],
      alue: {
        // TODO: change
        "@id": "https://linked.data.gov.au/def/test/dawe-cv/slope-class/2",
      },
    },
};
export default exampleData;

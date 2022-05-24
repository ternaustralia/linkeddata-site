const exampleData = {
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
};

export default exampleData;

const context = {
  "@context": {
    featureType: {
      "@id": "https://w3id.org/tern/ontologies/tern/featureType",
      "@type": "@id",
    },
    hasFeatureOfInterest: {
      "@id": "http://www.w3.org/ns/sosa/hasFeatureOfInterest",
    },
    observedProperty: {
      "@id": "http://www.w3.org/ns/sosa/observedProperty",
      "@type": "@id",
    },
    usedProcedure: {
      "@id": "http://www.w3.org/ns/sosa/usedProcedure",
      "@type": "@id",
    },
    hasResult: {
      "@id": "http://www.w3.org/ns/sosa/hasResult",
    },
    value: {
      "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
    },
    vocabulary: {
      "@id": "https://w3id.org/tern/ontologies/tern/vocabulary",
      "@type": "@id",
    },
    phenomenonTime: {
      "@id": "http://www.w3.org/ns/sosa/phenomenonTime",
    },
    resultTime: {
      "@id": "http://www.w3.org/ns/sosa/resultTime",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
    },
    inDataset: {
      "@id": "http://rdfs.org/ns/void#inDataset",
      "@type": "@id",
    },
    hasSimpleResult: {
      "@id": "http://www.w3.org/ns/sosa/hasSimpleResult",
    },
    isResultOf: {
      "@id": "http://www.w3.org/ns/sosa/isResultOf",
      "@type": "@id",
    },
    inXSDDateTimeStamp: {
      "@id": "http://www.w3.org/2006/time#inXSDDateTimeStamp",
    },
    unit: {
      "@id": "https://w3id.org/tern/ontologies/tern/unit",
      "@type": "@id",
    },
  },
};
export default context;

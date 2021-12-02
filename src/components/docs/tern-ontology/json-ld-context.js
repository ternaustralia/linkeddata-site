const context = {
  "@context": {
    featureType: {
      "@id": "https://w3id.org/tern/ontologies/tern/featureType",
      "@type": "@id",
    },
    hasFeatureOfInterest: {
      "@id": "http://www.w3.org/ns/sosa/hasFeatureOfInterest",
      "@type": "@id",
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
      "@type": "@id",
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
    hasGeometry: {
      "@id": "http://www.opengis.net/ont/geosparql#hasGeometry",
      "@type": "@id",
    },
    label: {
      "@id": "http://www.w3.org/2000/01/rdf-schema#label",
    },
    dimension: {
      "@id": "https://w3id.org/tern/ontologies/tern/dimension",
    },
    locationDescription: {
      "@id": "https://w3id.org/tern/ontologies/tern/locationDescription",
    },
    siteDescription: {
      "@id": "https://w3id.org/tern/ontologies/tern/siteDescription",
    },
    polygon: {
      "@id": "https://w3id.org/tern/ontologies/tern/polygon",
      "@type": "@id",
    },
    type: {
      "@id": "http://purl.org/dc/terms/type",
      "@type": "@id",
    },
    asWKT: {
      "@id": "http://www.opengis.net/ont/geosparql#asWKT",
      "@type": "http://www.opengis.net/ont/geosparql#wktLiteral",
    },
    lat: {
      "@id": "http://www.w3.org/2003/01/geo/wgs84_pos#lat",
    },
    long: {
      "@id": "http://www.w3.org/2003/01/geo/wgs84_pos#long",
    },
    pointType: {
      "@id": "https://w3id.org/tern/ontologies/loc/pointType",
      "@type": "@id",
    },
    title: {
      "@id": "http://purl.org/dc/terms/title",
      "@type": "http://www.w3.org/2001/XMLSchema#string",
    },
    issued: {
      "@id": "http://purl.org/dc/terms/issued",
    },
    description: {
      "@id": "http://purl.org/dc/terms/description",
      "@type": "http://www.w3.org/2001/XMLSchema#string",
    },
  },
};
export default context;

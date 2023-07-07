---
sidebar_position: 10
---

import ExternalLink from '../../../../src/components/ExternalLink';

# Plant Tissue Vouchering Module

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

The Plant Tissue Vouchering Module outlines instructions and procedures in collecting representative material samples of each flora species within a plot, as well as a herbarium voucher specimen for identification. Additional material samples are collected for the dominant perenial species of the plot.

The following examples demonstrate how to capture the field name and growth form as observations on the voucher specimen. The replicate value is also captured as an attribute on the voucher specimen.

Example in JSON-LD:

```json
{
  "@graph": [
    {
      "@id": "https://example.com/site/1/flora-species/SAG000408/growth-form",
      "@type": "https://w3id.org/tern/ontologies/tern/Observation",
      "inDataset": "https://example.com/dataset/1",
      "label": "Plant tissue voucher SAG000408 growth form",
      "hasFeatureOfInterest": "https://example.com/site/1/flora-species/SAG000408",
      "hasResult": "_:nc9e5c390bed841c0a5743397af043312b5",
      "hasSimpleResult": {
        "@id": "https://linked.data.gov.au/def/nrm/2de905be-b280-54ba-b9a7-7c6f088f301c"
      },
      "observedProperty": "https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65",
      "phenomenonTime": {
        "@id": "_:nc9e5c390bed841c0a5743397af043312b4"
      },
      "resultTime": "2021-11-01T00:00:00+00:00",
      "usedProcedure": "https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95",
      "https://w3id.org/tern/ontologies/tern/hasSiteVisit": {
        "@id": "https://example.com/site/1/visit/1"
      }
    },
    {
      "@id": "_:nc9e5c390bed841c0a5743397af043312b4",
      "@type": "https://w3id.org/tern/ontologies/tern/Instant",
      "http://www.w3.org/2006/time#inXSDDateTime": {
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        "@value": "2021-11-01T00:00:00+00:00"
      }
    },
    {
      "@id": "_:nc9e5c390bed841c0a5743397af043312b5",
      "@type": "https://w3id.org/tern/ontologies/tern/Concept",
      "value": {
        "@id": "https://linked.data.gov.au/def/nrm/2de905be-b280-54ba-b9a7-7c6f088f301c"
      },
      "vocabulary": "https://linked.data.gov.au/def/nrm/d0fc07a7-3ec9-45ed-8850-885a32828d3c"
    },
    {
      "@id": "https://example.com/site/1/flora-species/SAG000408/sampling",
      "@type": "https://w3id.org/tern/ontologies/tern/Sampling",
      "inDataset": "https://example.com/dataset/1",
      "label": "Plant tissue voucher SAG000408 sampling",
      "hasFeatureOfInterest": "https://example.com/site/1",
      "hasResult": "https://example.com/site/1/flora-species/1",
      "usedProcedure": "https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95",
      "https://w3id.org/tern/ontologies/tern/hasSiteVisit": {
        "@id": "https://example.com/site/1/visit/1"
      }
    },
    {
      "@id": "https://example.com/site/1/flora-species/SAG000408/replicate",
      "@type": "https://w3id.org/tern/ontologies/tern/Attribute",
      "inDataset": "https://example.com/dataset/1",
      "label": "Plant tissue voucher SAG000408 replicate",
      "https://w3id.org/tern/ontologies/tern/attribute": "replicate",
      "https://w3id.org/tern/ontologies/tern/hasSimpleValue": 1,
      "https://w3id.org/tern/ontologies/tern/hasValue": {
        "@id": "_:nc9e5c390bed841c0a5743397af043312b1"
      },
      "https://w3id.org/tern/ontologies/tern/isAttributeOf": {
        "@id": "https://example.com/site/1/flora-species/SAG000408"
      }
    },
    {
      "@id": "_:nc9e5c390bed841c0a5743397af043312b1",
      "@type": "https://w3id.org/tern/ontologies/tern/Count",
      "value": 1
    },
    {
      "@id": "https://example.com/site/1/flora-species/SAG000408",
      "@type": "https://w3id.org/tern/ontologies/tern/MaterialSample",
      "inDataset": "https://example.com/dataset/1",
      "http://rs.tdwg.org/dwc/terms/materialSampleID": "SAG000408",
      "label": "Plant tissue voucher SAG000408",
      "isResultOf": "https://example.com/site/1/flora-species/1/sampling",
      "http://www.w3.org/ns/sosa/isSampleOf": {
        "@id": "https://example.com/site/1"
      },
      "featureType": "http://linked.data.gov.au/def/tern-cv/2e122e23-881c-43fa-a921-a8745f016ceb"
    },
    {
      "@id": "https://example.com/site/1/flora-species/SAG000408/field-name",
      "@type": "https://w3id.org/tern/ontologies/tern/Observation",
      "inDataset": "https://example.com/dataset/1",
      "label": "Plant tissue voucher SAG000408 field name",
      "hasFeatureOfInterest": "https://example.com/site/1/flora-species/SAG000408",
      "hasResult": "_:nc9e5c390bed841c0a5743397af043312b3",
      "hasSimpleResult": "Acacia acanthoclada",
      "observedProperty": "http://linked.data.gov.au/def/tern-cv/04a4c009-2a51-4bdb-96dd-0bfd1bed8826",
      "phenomenonTime": {
        "@id": "_:nc9e5c390bed841c0a5743397af043312b2"
      },
      "resultTime": "2021-11-01T00:00:00+00:00",
      "usedProcedure": "https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95",
      "https://w3id.org/tern/ontologies/tern/hasSiteVisit": {
        "@id": "https://example.com/site/1/visit/1"
      }
    },
    {
      "@id": "_:nc9e5c390bed841c0a5743397af043312b2",
      "@type": "https://w3id.org/tern/ontologies/tern/Instant",
      "http://www.w3.org/2006/time#inXSDDateTime": {
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        "@value": "2021-11-01T00:00:00+00:00"
      }
    },
    {
      "@id": "_:nc9e5c390bed841c0a5743397af043312b3",
      "@type": "https://w3id.org/tern/ontologies/tern/Text",
      "value": "Acacia acanthoclada"
    }
  ]
}
```

_For brevity, the JSON-LD context has been omitted. See the full JSON-LD context at [JSON-LD context](/information-models/tern-ontology/dev-guide/json-ld-context)._

<details>
    <summary>In Turtle.</summary>

<p>

```ttl
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix tern-loc: <https://w3id.org/tern/ontologies/loc/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .
@prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix dwc: <http://rs.tdwg.org/dwc/terms/> .
@prefix time: <http://www.w3.org/2006/time#> .

<https://example.com/site/1/flora-species/SAG000408/sampling> a tern:Sampling ;
    rdfs:label "Plant tissue voucher SAG000408 sampling" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/flora-species/1> ;
.

<https://example.com/site/1/flora-species/SAG000408> a tern:MaterialSample ;
    rdfs:label "Plant tissue voucher SAG000408" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isResultOf <https://example.com/site/1/flora-species/1/sampling> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2e122e23-881c-43fa-a921-a8745f016ceb> ;
    dwc:materialSampleID "SAG000408" ;
.

<https://example.com/site/1/flora-species/SAG000408/replicate> a tern:Attribute ;
    rdfs:label "Plant tissue voucher SAG000408 replicate" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:attribute "replicate" ;
    tern:hasSimpleValue 1 ;
    tern:hasValue [
        a tern:Count ;
        rdf:value 1 ;
    ] ;
    tern:isAttributeOf <https://example.com/site/1/flora-species/SAG000408> ;
.

<https://example.com/site/1/flora-species/SAG000408/field-name> a tern:Observation ;
    rdfs:label "Plant tissue voucher SAG000408 field name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1/flora-species/SAG000408> ;
    sosa:observedProperty <http://linked.data.gov.au/def/tern-cv/04a4c009-2a51-4bdb-96dd-0bfd1bed8826> ;
    sosa:phenomenonTime [
        a tern:Instant ;
        time:inXSDDateTime "2021-11-01T00:00:00Z"^^xsd:dateTime ;
    ] ;
    sosa:resultTime "2021-11-01T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasSimpleResult "Acacia acanthoclada" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Acacia acanthoclada" ;
    ] ;
.

<https://example.com/site/1/flora-species/SAG000408/growth-form> a tern:Observation ;
    rdfs:label "Plant tissue voucher SAG000408 growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1/flora-species/SAG000408> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
    sosa:phenomenonTime [
        a tern:Instant ;
        time:inXSDDateTime "2021-11-01T00:00:00Z"^^xsd:dateTime ;
    ] ;
    sosa:resultTime "2021-11-01T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2de905be-b280-54ba-b9a7-7c6f088f301c> ;
    sosa:hasResult [
        a tern:Concept ;
        rdf:value <https://linked.data.gov.au/def/nrm/2de905be-b280-54ba-b9a7-7c6f088f301c> ;
        tern:vocabulary <https://linked.data.gov.au/def/nrm/d0fc07a7-3ec9-45ed-8850-885a32828d3c> ;
    ] ;
.

```

</p>
    
</details>

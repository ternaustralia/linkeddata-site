---
sidebar_position: 3
---

# Plant Tissue Vouchering protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plant tissue vouchering](https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95) protocol.

## Conceptual modelling

The Plant tissue vouchering module involves the collection, rapid drying and appropriate storage of representative plant tissue (i.e. leaf) samples from the vascular flora species within the plot.

Replicate samples can be collected, and the minimum distance between replicate samples will be recorded in meters. `replicate number` and `minimum distance between replicates` are attributes to be recorded during `tern:Sampling` 'plant tissue vouchering'.

### Diagram

The following diagram is showing plant tissue vouchering

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=plant-tissue-vouchering-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1caMM1I8sxMhtruRJJwglWKgnXe1OfLAa%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=plant-tissue-vouchering-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1caMM1I8sxMhtruRJJwglWKgnXe1OfLAa%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Plant tissue vouchering` protocol surveys:

- [OpenAPI docs for floristics veg genetic voucher](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-genetic-voucher/post%2Ffloristics-veg-genetic-vouchers)
- [OpenAPI docs for floristics veg genetic voucher survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-genetic-voucher-survey/post%2Ffloristics-veg-genetic-voucher-surveys)

1. Survey data from floristics veg genetic voucher:

```json
{
  "floristics_voucher_full": 0,
  "floristics_voucher_lite": 0,
  "min_distance_between_replicates": 0,
  "replicate": [
    {
      "replicate_number": 0,
      "genetic_voucher_barcode": "string"
    }
  ],
  "survey": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

2. Survey data from floristics veg genetic voucher survey:

```json
{
  "start_date_time": "2022-12-15T01:57:56.192Z",
  "end_date_time": "2022-12-15T01:57:56.192Z",
  "protocol_variant": "lite",
  "surveyId": "string",
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `floristics_voucher_full`, `floristics_voucher_lite`, `protocol_variant`

Theses three keys are protocol selection in the app, not mapping to TERN Ontology.

#### `min_distance_between_replicates`

The `min_distance_between_replicates` key maps to the attribute `minimum distance between replicates` in [Plant tissue vouchering Attributes](https://linked.data.gov.au/def/nrm/7175159d-54ca-4a89-83a0-870a4d4c2524), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/plant-tissue-vouchering/1>
    a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "minimum distance between replicates" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/3b2aa21d-c60f-45c5-9447-ff8a799a513e> ;
        tern:hasSimpleValue 3.5 ;
        tern:hasValue [
            a tern:Float ;
            rdf:value 3.5^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/M> ;
        ] ;
    ] ;
.
```

#### `replicate_number`

The `replicate_number` key maps to the attribute `replicate number` in [Plant tissue vouchering Attributes](https://linked.data.gov.au/def/nrm/7175159d-54ca-4a89-83a0-870a4d4c2524), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/plant-tissue-vouchering/specimen/3> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "replicate number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/81cc5c4b-179b-4483-861a-65008517bd32> ;
        tern:hasSimpleValue 2 ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value 2 ;
        ] ;
    ] ;
.
```

#### `genetic_voucher_barcode`

The `genetic_voucher_barcode` key maps to the property `dwc:materialSampleID` in `tern:MaterialSample` class. It is the identifier of specimen collected during `tern:Sampling` 'plant tissue vouchering'.

##### Example

```turtle
<https://example.com/site/1/plant-tissue-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "flora vouchering specimen 1" ;
    dwc:materialSampleID "materialSample1" ;
.
```

#### `survey`, `plot_visit`

They both map to the `tern:SiteVisit` class.

#### `start_date_time`

The `start_date_time` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date_time`

The `end_date_time` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix geo: <http://www.opengis.net/ont/geosparql#> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .


<https://example.com/site/1>
    a tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute [
        rdfs:label "plot name" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
        tern:hasSimpleValue "The Jones Stream Study Plot" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The Jones Stream Study Plot" ;
        ] ;
    ] ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "site001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z" ;
    prov:endedAtTime "2022-11-02T03:18:42.783Z" ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/plant-tissue-vouchering/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/35175f0d-bdd7-4e32-908f-17f7239e78fa> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    tern:hasAttribute [
        rdfs:label "minimum distance between replicates" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/3b2aa21d-c60f-45c5-9447-ff8a799a513e> ;
        tern:hasSimpleValue 3.5 ;
        tern:hasValue [
            a tern:Float ;
            rdf:value 3.5^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/M> ;
        ] ;
    ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T05:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/site/1> ;
.

<https://example.com/site/1/plant-tissue-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "flora vouchering specimen 1" ;
    sosa:isResultOf <https://example.com/plant-tissue-vouchering/1> ;
    dwc:materialSampleID "materialSample1" ;
    sosa:isSampleOf <https://example.com/feature-of-interest/1> ;
    tern:hasAttribute [
        rdfs:label "replicate number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/81cc5c4b-179b-4483-861a-65008517bd32> ;
        tern:hasSimpleValue 2 ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value 2 ;
        ] ;
    ] ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2e122e23-881c-43fa-a921-a8745f016ceb> ;
.

```

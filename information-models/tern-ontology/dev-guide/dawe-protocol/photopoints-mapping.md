---
sidebar_position: 3
---

# Photopoints protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Photopoints](https://linked.data.gov.au/def/nrm/05669173-2fe7-4b70-ba67-2e09fbe87de9) protocol.

## Conceptual modelling

This module outlines the steps to take a series of photos of the plot to collect monitoring data. It requires identifying the plot centre, marking the plot centre with a star dropper, measuring an equilateral triangle around the centre post to identify the locations of the three photopoints, and taking a series of photos to create a 360&deg; panorama.

### Diagram

The following diagram is showing photopoints. Rectangles coloured in blue show the sampling process of establishing three photopoints positions. Rectangles coloured green show the sampling process of taking various photos in each position to make a 360&deg; panorama.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1U_YiQdqyehXOGIBQx6YM8j_X_Td9VzcT&layers=1&nav=1&title=photopoints-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1U_YiQdqyehXOGIBQx6YM8j_X_Td9VzcT%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1U_YiQdqyehXOGIBQx6YM8j_X_Td9VzcT&layers=1&nav=1&title=photopoints-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1U_YiQdqyehXOGIBQx6YM8j_X_Td9VzcT%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Photopoints` protocol surveys:

- [OpenAPI docs for photopoints](https://beta.core-api.paratoo.tern.org.au/documentation#/Photopoints-survey/post%2Fphotopoints-surveys)

Survey data from photopoints:

```json
{
  "start_date_time": "2022-12-13T03:31:43.595Z",
  "end_date_time": "2022-12-13T03:31:43.595Z",
  "photopoints_protocol_variant": "lite",
  "surveyId": "string",
  "plot_visit": 0,
  "point_1_panorama": [0],
  "point_2_panorama": [0],
  "point_3_panorama": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

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

#### `photopoints_protocol_variant`

The `photopoints_protocol_variant` is protocol selection in the app, not mapping to TERN Ontology. From the protocol,

> This module covers the procedures and guidelines of three protocols for establishing photopoints within the plot. The three protocols are:

- Full protocol (best practice): DSLR panorama – 360&deg; panorama taken at three photopoints located around the centre of the plot using a DSLR camera or high-end mirrorless camera that allows the user to set specific camera and lens settings, including focal length and aperture.
- Lite protocol: Compact panorama – 360&deg; panorama taken at three photopoints located around the centre of the plot using a compact camera without the ability to set all the specific camera and lens settings required.
- Lite protocol: Device panorama – 360&deg; panorama taken at three photopoints located around the centre of the plot using a mobile phone or tablet.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `point_1_panorama`, `point_2_panorama`, `point_3_panorama`

These 3 keys map to `tern:Sampling` 'photopoints position1,2,3 establishment' and 'taking photos'. The location of each photopoint will be recorded, and maps to the attribute `geo:hasGeometry` on the `tern:Sampling` class.

##### Example

```turtle
<https://example.com/site/1/photopoint-pos-1/sampling> a tern:Sampling ;
    rdfs:label "Photopoint position 1 establishment" ;
    geosparql:hasGeometry <https://example.com/site/1/photopoint-pos-1/sampling/geometry> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/photopoint-pos-1> ;
.

<https://example.com/site/1/photopoint-pos-1/sampling/geometry> a tern-loc:Point ;
    rdfs:label "Photopoint position 1 establishment point" ;
    wgs84:lat -34 ;
    wgs84:long 150.3 ;
    geosparql:asWKT "POINT(150.3 -34.0)"^^geosparql:wktLiteral ;
.

<https://example.com/site/1/photopoint-pos-1> a tern:Sample ;
    rdfs:label "Photopoint position 1" ;
    sosa:isSampleOf <https://example.com/site/1> ;
.

<https://example.com/site/1/photopoint-pos-1/image/1/sampling> a tern:Sampling ;
    rdfs:label "Photopoint image 1 sampling" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1/photopoint-pos-1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/photopoint-pos-1/image/1> ;
.

<https://example.com/site/1/photopoint-pos-1/image/1> a tern:MaterialSample ;
    rdfs:label "Photopoint image 1" ;
    sosa:isSampleOf <https://example.com/site/1/photopoint-pos-1> ;
.

```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
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

<https://example.com/site/1>
    a tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920849^^xsd:double ;
        wgs84:long 152.242400^^xsd:double ;
    ] ;
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

<https://example.com/site/1/photopoint-pos-1/sampling> a tern:Sampling ;
    rdfs:label "Photopoint position 1 establishment" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:resultTime "2021-11-11T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/05669173-2fe7-4b70-ba67-2e09fbe87de9> ;
    geosparql:hasGeometry <https://example.com/site/1/photopoint-pos-1/sampling/geometry> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/photopoint-pos-1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/site/1/photopoint-pos-1/sampling/geometry> a tern-loc:Point ;
    rdfs:label "Photopoint position 1 establishment point" ;
    wgs84:lat -34 ;
    wgs84:long 150.3 ;
    geosparql:asWKT "POINT(150.3 -34.0)"^^geosparql:wktLiteral ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/site/1/photopoint-pos-1> a tern:Sample ;
    rdfs:label "Photopoint position 1" ;
    sosa:isResultOf <https://example.com/site/1/photopoint-pos-1/sampling> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photopoint position" ;
.

<https://example.com/site/1/photopoint-pos-1/image/1/sampling> a tern:Sampling ;
    rdfs:label "Photopoint image 1 sampling" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1/photopoint-pos-1> ;
    sosa:resultTime "2021-11-11T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/05669173-2fe7-4b70-ba67-2e09fbe87de9> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/photopoint-pos-1/image/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:madeBySampler [
        a tern:Sampler ;
        rdfs:label "Canon EOS 550D DSLR cropped sensor camera" ;
        tern:samplerType <http://linked.data.gov.au/def/tern-cv/11e03f36-7ada-4333-88e2-38c9205f2749> ;
        void:inDataset <https://example.com/dataset/1> ;
        tern:hasAttribute [
            a tern:Attribute ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute "focal length" ;
            tern:hasSimpleValue 24 ;
            tern:hasValue [
                a tern:Integer ;
                rdf:value 24 ;
                tern:unit <http://qudt.org/vocab/unit/MilliM> ;
            ]
        ] ;
    ] ;
.

<https://example.com/site/1/photopoint-pos-1/image/1> a tern:MaterialSample ;
    rdfs:label "Photopoint image 1" ;
    sosa:isResultOf <https://example.com/site/1/photopoint-pos-1/image/1/sampling> ;
    sosa:isSampleOf <https://example.com/site/1/photopoint-pos-1> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photopoint image" ;
.
```

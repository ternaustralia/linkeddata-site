---
sidebar_position: 2
---

# Condition Point Intercept protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Condition point intercept protocol](https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6) protocol.

Mentions of observable properties should refer to [point-intercept/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/condition/point-intercept/overview) for the feature type and value type information.

## Conceptual modelling

The Condition point intercept module records data about the site for the following feature types:

- plant occurrence
- plant litter

These observations are recorded for each site during a site visit.

The Condition module involves the collection of quantitative, accurate and repeatable measures of condition attributes within the plot, using a combination of point-intercept, transect, belt-transect and plot-based methods. The primary aim of the Condition module is to collect baseline and revisit data for Regional Land Partnerships (RLP) projects, so any changes in condition following interventions can be evaluated.

Condition point-intercept is used to collect the condition point-intercept measures using four point-intercept transects, aligned with a subset of the existing plot layout described in the Cover module.

### Diagram

The following diagram show the Condition point-intercept mapping. The orange nodes are things related to the plant occurrence feature type and the yellow nodes are things related to the plant litter feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AZ_g1o36UI0PmGDd4dF9-hQ9MjaUEGg1&layers=1&nav=1&title=condition-point-intercept-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AZ_g1o36UI0PmGDd4dF9-hQ9MjaUEGg1%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AZ_g1o36UI0PmGDd4dF9-hQ9MjaUEGg1&layers=1&nav=1&title=condition-point-intercept-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AZ_g1o36UI0PmGDd4dF9-hQ9MjaUEGg1%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Condition point intercept` protocol surveys:

- [OpenAPI docs for condition point intercept survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Condition-point-intercept-survey/post%2Fcondition-point-intercept-surveys)

Survey data from Condition point intercept:

```json
{
  "surveyId": "string",
  "start_date": "2022-12-16T02:00:23.624Z",
  "end_date": "2022-12-16T02:00:23.624Z",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date`

The `end_date` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Condition point intercept measurements

- [OpenAPI docs for condition point intercept](https://beta.core-api.paratoo.tern.org.au/documentation#/Condition-point-intercept/post%2Fcondition-point-intercepts)

```json
{
  "lut_condition_species": "foo",
  "lut_condition_vegeatation_health": "CH",
  "lut_condition_vertebrate_pest_type": "CAT",
  "leaf_litter_depth_mm": 0,
  "mistletoe_number": 0,
  "comment": "string",
  "point_number": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `lut_condition_species`

The `lut_condition_species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `lut_condition_vegeatation_health`

The `lut_condition_vegeatation_health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

#### `lut_condition_vertebrate_pest_type`

The `lut_condition_vertebrate_pest_type` key should be deleted because sub module 'Vertebrate pest presence (plot)' has been removed.

#### `leaf_litter_depth_mm`

The `leaf_litter_depth_mm` key maps to a `tern:Observation` with the observable property 'leaf litter depth'.

#### `mistletoe_number`

The `mistletoe_number` key maps to a `tern:Observation` with the observable property 'mistletoe count'.

#### `comment`

The `comment` key maps to the property `rdfs:comment` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    rdfs:comment "The measure is confident."^^xsd:string ;
.
```

#### `point_number`

The `point_number` key maps to the attribute `point intercept number` in [Condition Attributes](https://linked.data.gov.au/def/nrm/ce3412d6-a99e-482c-9651-5b2b5ac42456), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "12"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "12"^^xsd:string ;
        ] ;
    ] ;
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix tern-loc: <https://w3id.org/tern/ontologies/loc/> .
@prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
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
.

<https://example.com/transect/1>
    a tern:Transect ;
    rdfs:label "Transect 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:transectStartPoint <https://example.com/site/1/transect-geometry/1> ;
    tern:transectDirection "East"^^xsd:string ;
.

<https://example.com/site/1/transect-geometry/1> a tern-loc:Point ;
    rdfs:label "Transect start point" ;
    wgs84:lat -34 ;
    wgs84:long 150.3 ;
    geosparql:asWKT "POINT(150.3 -34.0)"^^geosparql:wktLiteral ;
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
    tern:isSampleOf <https://example.com/transect/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/2>
    a tern:Sample ;
    rdfs:label "plant litter 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e6ed6e58-5916-4d31-9ed5-109ab3436fce> ;
    tern:isSampleOf <https://example.com/transect/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation/leaf-litter-depth/1>
    a tern:Observation ;
    rdfs:label "leaf litter depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "12"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "12"^^xsd:string ;
        ] ;
    ] ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value "33.81"^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/MilliM> ;
    ] ;
    sosa:hasSimpleResult "33.81"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f6af2c5e-d193-4337-b845-44550f661854> ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "12"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "12"^^xsd:string ;
        ] ;
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    sosa:hasMember <https://example.com/observation/field-species-name/1>,
        <https://example.com/observation/plant-height/1>,
        <https://example.com/observation/galls-and-lerps/1>,
        <https://example.com/observation/mistletoe-count/1>,
        <https://example.com/observation/epicormic-growth/1>,
        <https://example.com/observation/grazing/1>,
        <https://example.com/observation/vegetation-health/1>,
        <https://example.com/observation/dieback-from-disease/1>,
        <https://example.com/observation/growth-stage/1>,
        <https://example.com/observation/canopy-health/1>,
        <https://example.com/observation/insect-damage/1> ;
.

<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    rdfs:label "vegetation health" ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "The measure is confident."^^xsd:string ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7f563fcb-8f98-5a74-9581-f6ce4ea51d42> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Mistletoe" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7f563fcb-8f98-5a74-9581-f6ce4ea51d42> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7d4eaa80-0f2a-4828-886e-34cd5a4e2746> ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Pine" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Pine" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
.

<https://example.com/observation/growth-stage/1>
    a tern:Observation ;
    rdfs:label "growth stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Mature" ;
        rdf:value <https://linked.data.gov.au/def/nrm/5bce18a8-4e8c-574f-881b-625bd9240cbc> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5bce18a8-4e8c-574f-881b-625bd9240cbc> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fcfda2f7-84f0-4c26-9f80-c051d129a094> ;
.

<https://example.com/observation/canopy-health/1>
    a tern:Observation ;
    rdfs:label "canopy health" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value "33.81"^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult "33.81"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d0a31d21-b475-490e-a8d6-fbe374fc7391> ;
.

<https://example.com/observation/insect-damage/1>
    a tern:Observation ;
    rdfs:label "insect damage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult True ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value Ture ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/33e79578-0946-4f21-9607-ca501e1500c7> ;
.

<https://example.com/observation/plant-height/1>
    a tern:Observation ;
    rdfs:label "plant height" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 3.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 3.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e9da717-6c8e-4194-9385-c995d54702e4> ;
.

<https://example.com/observation/dieback-from-disease/1>
    a tern:Observation ;
    rdfs:label "dieback from disease" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult False ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value False ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0685299e-d22a-4efa-a507-a7614e58a500> ;
.

<https://example.com/observation/galls-and-lerps/1>
    a tern:Observation ;
    rdfs:label "galls and lerps" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult False ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/28131f08-1ae4-422f-99cb-3b5bafc7761d> ;
.

<https://example.com/observation/epicormic-growth/1>
    a tern:Observation ;
    rdfs:label "epicormic growth" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult false ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cacfba72-ae93-4f92-9cc3-bf656d7ab5f0> ;
.

<https://example.com/observation/grazing/1>
    a tern:Observation ;
    rdfs:label "grazing" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult False ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value False ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cd905dda-06df-4f0e-85eb-b50f9ed2af91> ;
.

<https://example.com/observation/mistleloe-count/1>
    a tern:Observation ;
    rdfs:label "mistleloe count" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult 3 ;
    sosa:hasResult [
        a tern:Integer ;
        rdf:value 3 ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6a1d703f-6622-4804-8b78-4c2ac93c97ba> ;
.

```

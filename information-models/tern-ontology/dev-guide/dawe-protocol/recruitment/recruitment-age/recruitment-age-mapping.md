---
sidebar_position: 2
---

# Recruitment module - Age class protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Recruitment module - Age class protocol](https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f) protocol in [Recruitment](https://linked.data.gov.au/def/nrm/4f0f0ca4-d8f7-472d-9203-f46a565ad970) module.

Mentions of observable properties should refer to [recruitment-age/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/recruitment/recruitment-age/overview) for the feature type and value type information.

## Conceptual modelling

The Recruitment module - Age class protocol records data about the site for the following feature types:

- plant individual
- plant population

These observations are recorded for each site during a site visit.

This protocol consists of 3 sub-protocols to undertake (1) growth stage and life-stage surveys at the plot level, (2) seedling and sapling counts within belt transects and (3) small trees surveys within belt transects.

### Diagram

The following diagram shows the Recruitment module - Age class protocol mapping. Blue nodes are things related to the plant individual feature type. Green nodes are things related to the plant population feature type. Purple nodes are things related to both plant individual and plant population.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO&layers=1&nav=1&title=recruitment-age-class-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO&layers=1&nav=1&title=recruitment-age-class-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO%26export%3Ddownload">View diagram in new tab.</a>

<!-- ## Survey data

Example data from source for `Recruitment module - Age class` protocol surveys:

- [OpenAPI docs for recruitment field survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Recruitment-field-survey/post%2Frecruitment-field-surveys)

```json
{
  "surveyId": "string",
  "startdate": "2023-04-04T06:02:09.407Z",
  "enddate": "2023-04-04T06:02:09.407Z",
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

#### `startdate`

The `startdate` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `enddate`

The `enddate` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`. -->

## Observations data

### Mapping Recruitment growth stage measurements

- [OpenAPI docs for recruitment growth stage measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Recruitment-growth-stage/post%2Frecruitment-growth-stages)

```json
{
  "veg_growth_stage": "ER",
  "recruitment_life_stage": "Seedling",
  "adequate": true,
  "voucher_full": 0,
  "voucher_lite": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `veg_growth_stage`

The `veg_growth_stage` key maps to a `tern:Observation` with the observable property 'growth stage'.

#### `recruitment_life_stage`

The `recruitment_life_stage` key maps to a `tern:Observation` with the observable property 'life stage'.

#### `adequate`

The `adequate` key maps to a `tern:Observation` with the observable property 'adequate recruitment'.

#### `voucher_full` and `voucher_lite`

These two keys map to a `tern:Method` used during the site visit, either [Plant Tissue Vouchering - Full protocol](https://linked.data.gov.au/def/nrm/eea8280c-6ec7-48c9-9b9e-2418731ff005) or [Plant Tissue Vouchering - Lite protocol](https://linked.data.gov.au/def/nrm/c20d9a04-702d-429a-ab5f-d7424cd2990d).

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Recruitment sapling and seedling count measurements

- [OpenAPI docs for recruitment sapling and seedling count](https://beta.core-api.paratoo.tern.org.au/documentation#/Recruitment-sapling-and-seedling-count/post%2Frecruitment-sapling-and-seedling-counts)

```json
{
  "transect": "1",
  "voucher_full": 0,
  "voucher_lite": 0,
  "seedling_count": 0,
  "sapling_count": 0,
  "juvenile_count": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `transect`

The `transect` key maps to the property `dcterms:identifier` in `tern:Transect` class. It is the identifier of the transect during site visits.

##### Example

```turtle
<https://example.com/site/1/transect/1> a tern:Transect ;
    dcterms:identifier "transect1" ;
.
```

#### `voucher_full` and `voucher_lite`

These two keys map to a `tern:Method` used during the site visit, either [Plant Tissue Vouchering - Full protocol](https://linked.data.gov.au/def/nrm/eea8280c-6ec7-48c9-9b9e-2418731ff005) or [Plant Tissue Vouchering - Lite protocol](https://linked.data.gov.au/def/nrm/c20d9a04-702d-429a-ab5f-d7424cd2990d).

#### `seedling_count`

The `seedling_count` key maps to a `tern:Observation` with the observable property 'seedling count'.

#### `sapling_count`

The `sapling_count` key maps to a `tern:Observation` with the observable property 'sapling count'.

#### `juvenile_count`

The `juvenile_count` key maps to a `tern:Observation` with the observable property 'juvenile count'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Recruitment small tree survey

- [OpenAPI docs for recruitment small tree survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Recruitment-small-tree-survey/post%2Frecruitment-small-tree-surveys)

```json
{
  "location": {
    "lat": 0,
    "lng": 0
  },
  "recruitment_tree_status": "Alive",
  "recruitment_life_stage": "Seedling",
  "dbh_measurement": 0,
  "pom_measurement": 0,
  "tree_height": 0,
  "voucher_full": 0,
  "voucher_lite": 0,
  "transect": "1",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `location`

The `location` key maps to the property `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `recruitment_tree_status`

The `recruitment_tree_status` key maps to a `tern:Observation` with the observable property 'plant status'.

#### `recruitment_life_stage`

The `recruitment_life_stage` key maps to a `tern:Observation` with the observable property 'life stage'.

#### `dbh_measurement`

The `dbh_measurement` key maps to a `tern:Observation` with the observable property 'diameter at breast height (dbh)'.

#### `pom_measurement`

The `pom_measurement` key maps to the attribute `point of measurement` in [Recruitment module - Age class protocol Attributes](https://linked.data.gov.au/def/nrm/15f69532-0fe8-498f-b667-cf130c84475b), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/dbh-measurement/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "point of measurement" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/9faeafe6-0d01-41aa-b38b-a6b56eda0dda> ;
        tern:hasSimpleValue "1.3"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "1.3"^^xsd:float ;
        ] ;
    ] ;
.
```

#### `tree_height`

The `tree_height` key maps to a `tern:Observation` with the observable property 'plant height'.

#### `voucher_full` and `voucher_lite`

These two keys map to a `tern:Method` used during the site visit, either [Plant Tissue Vouchering - Full protocol](https://linked.data.gov.au/def/nrm/eea8280c-6ec7-48c9-9b9e-2418731ff005) or [Plant Tissue Vouchering - Lite protocol](https://linked.data.gov.au/def/nrm/c20d9a04-702d-429a-ab5f-d7424cd2990d).

#### `transect`

The `transect` key maps to the property `dcterms:identifier` in `tern:Transect` class. It is the identifier of the transect during site visits.

##### Example

```turtle
<https://example.com/site/1/transect/1> a tern:Transect ;
    dcterms:identifier "transect1" ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Recruitment - age class protocol` are in [Recruitment - Age Class protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#recruitment_age_class_protocol_conformance_class_requirements).

Validator is [Recruitment - age class protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/recruitment/recruitment-age-class-protocol-shapes/shapes.ttl).

The following are examples of validating data at the project, protocol, sub-protocol, and observation levels:

### Example usage with PySHACL - project level

Save the [DCCEEW RLP shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/shapes.ttl) in a file named `dcceew-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for all DCCEEW protocols**, run the following command to validate the data:

```bash
pyshacl -s dcceew-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - protocol level

Save the [Recruitment shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/recruitment/shapes.ttl) in a file named `recruitment-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Recruitment protocol**, run the following command to validate the data:

```bash
pyshacl -s recruitment-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Recruitment - age class shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/recruitment/recruitment-age-class-protocol-shapes/shapes.ttl) in a file named `recruitment-age-class-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Recruitment - age class protocol**, run the following command to validate the data:

```bash
pyshacl -s recruitment-age-class-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [life stage shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/recruitment/recruitment-age-class-protocol-shapes/life-stage/shapes.ttl) in a file named `life-stage-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for life stage in Recruitment - age class protocol**, run the following command to validate the data:

```bash
pyshacl -s life-stage-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX unit: <http://qudt.org/vocab/unit/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/ObservationCollection/observations-on-plant-individual>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasMember
        <https://example.com/observation/diameter-at-breast-height-(dbh)/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/life-stage/1> ,
        <https://example.com/observation/plant-height/1> ,
        <https://example.com/observation/plant-status/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/ObservationCollection/observations-on-plant-population>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasMember
        <https://example.com/observation/adequate-recruitment/1> ,
        <https://example.com/observation/field-species-name/2> ,
        <https://example.com/observation/juvenile-count/1> ,
        <https://example.com/observation/life-stage/2> ,
        <https://example.com/observation/sapling-count/1> ,
        <https://example.com/observation/seedling-count/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/observation/adequate-recruitment/1>
    a tern:Observation ;
    rdfs:label "adequate recruitment" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value true
        ] ;
    sosa:hasSimpleResult true ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0f6d5b8e-4c3c-41b9-a8c0-99039718b59c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/diameter-at-breast-height-(dbh)/1>
    a tern:Observation ;
    rdfs:label "diameter at breast height (dbh)" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit unit:CentiM
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6e1c8b97-3655-4a22-9647-02f2c756e789> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:hasAttribute [
            rdfs:label "point of measurement" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/9faeafe6-0d01-41aa-b38b-a6b56eda0dda> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:CentiM
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/2>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/juvenile-count/1>
    a tern:Observation ;
    rdfs:label "juvenile count" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a42dbbca-7dbe-469e-adfc-9012d01ff43d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/life-stage/1>
    a tern:Observation ;
    rdfs:label "life stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Immature Fruit" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ce3fd96d-e68d-4b14-b3fd-27690c566440> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/life-stage/2>
    a tern:Observation ;
    rdfs:label "life stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Immature Fruit" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ce3fd96d-e68d-4b14-b3fd-27690c566440> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-height/1>
    a tern:Observation ;
    rdfs:label "plant height" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit unit:M
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e9da717-6c8e-4194-9385-c995d54702e4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-status/1>
    a tern:Observation ;
    rdfs:label "plant status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Alive" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1a57c444-66a7-5746-bebc-2be757ee54c8>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1a57c444-66a7-5746-bebc-2be757ee54c8> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ddd0c631-bfdd-4b0f-88de-a5eb1a0181c6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/sapling-count/1>
    a tern:Observation ;
    rdfs:label "sapling count" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0f342ac9-800a-4298-a148-ffc953ecd393> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/seedling-count/1>
    a tern:Observation ;
    rdfs:label "seedling count" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b6a5d847-0698-4cce-8a5e-f2719e142208> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Site/site>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "site" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    dcterms:identifier "sitevisit-site-visit-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-05-10T06:38:02"^^xsd:dateTime ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/Transect/transect>
    a
        tern:FeatureOfInterest ,
        tern:Transect ;
    rdfs:label "transect" ;
    dcterms:identifier "transect-transect-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/de46fa49-d1c9-4bef-8462-d7ee5174e1e1> ;
    tern:transectDirection "West" ;
.

<https://example.com/Sample/plant-individual>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/60d7edf8-98c6-43e9-841c-e176c334d270> ;
.

<https://example.com/Sample/plant-population>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs84:lat -3.092085e+01 ;
    wgs84:long 1.522424e+02 ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

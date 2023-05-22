---
sidebar_position: 2
---

# Condition Point Intercept protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Condition point intercept protocol](https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6) protocol in module [Condition](https://linked.data.gov.au/def/nrm/16a20c3f-e95d-4919-b2d1-a25c7a275109).

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

<!-- ## Survey data

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

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`. -->

## Observations data

### Mapping Condition point intercept measurements

- [OpenAPI docs for condition point intercept](https://beta.core-api.paratoo.tern.org.au/documentation#/Condition-point-intercept/post%2Fcondition-point-intercepts)

```json
{
  "lut_condition_species": "foo",
  "lut_condition_vegetation_health": "CH",
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

#### `lut_condition_vegetation_health`

The `lut_condition_vegetation_health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

<!-- #### `lut_condition_vertebrate_pest_type`

The `lut_condition_vertebrate_pest_type` key should be deleted because sub module 'Vertebrate pest presence (plot)' has been removed. -->

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

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Condition Point Intercept protocol` are in [Condition - Point intercept protocol Conformance Class Requirements
](https://ternaustralia.github.io/dawe-rlp-spec/#condition_point_intercept_protocol_conformance_class_requirements).

Validator is [Condition point intercept protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/condition/condition-point-intercept-protocol-shapes/shapes.ttl).

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

Save the [Condition shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/condition/shapes.ttl) in a file named `condition-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Condition protocol**, run the following command to validate the data:

```bash
pyshacl -s condition-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Condition - Point Intercept shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/condition/condition-point-intercept-protocol-shapes/shapes.ttl) in a file named `condition-point-intercept-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Condition - Point intercept protocol**, run the following command to validate the data:

```bash
pyshacl -s condition-point-intercept-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [plant height shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/condition/condition-point-intercept-protocol-shapes/plant-height/shapes.ttl) in a file named `plant-height-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for plant height in Condition - Point intercept protocol**, run the following command to validate the data:

```bash
pyshacl -s plant-height-shapes.ttl -m -i rdfs -a -j -f human data.ttl
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
PREFIX sf: <http://www.opengis.net/ont/sf#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/canopy-health/1> ,
        <https://example.com/observation/dieback-from-disease/1> ,
        <https://example.com/observation/epicormic-growth/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/galls-and-lerps/1> ,
        <https://example.com/observation/grazing/1> ,
        <https://example.com/observation/growth-stage/1> ,
        <https://example.com/observation/insect-damage/1> ,
        <https://example.com/observation/mistletoe-count/1> ,
        <https://example.com/observation/plant-height/1> ,
        <https://example.com/observation/vegetation-health/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "12"^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "12"^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/leaf-litter-depth/1>
    a tern:Observation ;
    rdfs:label "leaf litter depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.381e+01 ;
            tern:unit <http://qudt.org/vocab/unit/MilliM>
        ] ;
    sosa:hasSimpleResult 3.381e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f6af2c5e-d193-4337-b845-44550f661854> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "12"^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "12"^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant litter 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/transect/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e6ed6e58-5916-4d31-9ed5-109ab3436fce> ;
.

<https://example.com/observation/canopy-health/1>
    a tern:Observation ;
    rdfs:label "canopy health" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.381e+01 ;
            tern:unit <http://qudt.org/vocab/unit/PERCENT>
        ] ;
    sosa:hasSimpleResult 3.381e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d0a31d21-b475-490e-a8d6-fbe374fc7391> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/dieback-from-disease/1>
    a tern:Observation ;
    rdfs:label "dieback from disease" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value false
        ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0685299e-d22a-4efa-a507-a7614e58a500> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/epicormic-growth/1>
    a tern:Observation ;
    rdfs:label "epicormic growth" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value false
        ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cacfba72-ae93-4f92-9cc3-bf656d7ab5f0> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Pine"
        ] ;
    sosa:hasSimpleResult "Pine" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/galls-and-lerps/1>
    a tern:Observation ;
    rdfs:label "galls and lerps" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value false
        ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/28131f08-1ae4-422f-99cb-3b5bafc7761d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/grazing/1>
    a tern:Observation ;
    rdfs:label "grazing" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value false
        ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cd905dda-06df-4f0e-85eb-b50f9ed2af91> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/growth-stage/1>
    a tern:Observation ;
    rdfs:label "growth stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Mature" ;
            rdf:value <https://linked.data.gov.au/def/nrm/5bce18a8-4e8c-574f-881b-625bd9240cbc>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5bce18a8-4e8c-574f-881b-625bd9240cbc> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fcfda2f7-84f0-4c26-9f80-c051d129a094> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/insect-damage/1>
    a tern:Observation ;
    rdfs:label "insect damage" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value true
        ] ;
    sosa:hasSimpleResult true ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/33e79578-0946-4f21-9607-ca501e1500c7> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/mistletoe-count/1>
    a tern:Observation ;
    rdfs:label "mistleloe count" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 3
        ] ;
    sosa:hasSimpleResult 3 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6a1d703f-6622-4804-8b78-4c2ac93c97ba> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-height/1>
    a tern:Observation ;
    rdfs:label "plant height" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.81e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 3.81e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e9da717-6c8e-4194-9385-c995d54702e4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    rdfs:label "vegetation health" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    rdfs:comment "The measure is confident."^^xsd:string ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Mistletoe" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7f563fcb-8f98-5a74-9581-f6ce4ea51d42>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7f563fcb-8f98-5a74-9581-f6ce4ea51d42> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7d4eaa80-0f2a-4828-886e-34cd5a4e2746> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/transect-geometry/1>
    a
        sf:Point ,
        tern-loc:Point ;
    rdfs:label "Transect start point" ;
    geo:asWKT "POINT(150.3 -34.0)"^^geo:wktLiteral ;
    wgs:lat -34 ;
    wgs:long 150.3 ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "site001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-11-02T03:18:42.783000+00:00"^^xsd:dateTime ;
    prov:startedAtTime "2022-11-02T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/transect/1>
    a
        tern:FeatureOfInterest ,
        tern:Transect ;
    rdfs:label "Transect 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/de46fa49-d1c9-4bef-8462-d7ee5174e1e1> ;
    tern:transectDirection "East"^^xsd:string ;
    tern:transectStartPoint <https://example.com/site/1/transect-geometry/1> ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        tern-loc:Point ;
    wgs:lat -3.092085e+01 ;
    wgs:long 1.522424e+02 ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/transect/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

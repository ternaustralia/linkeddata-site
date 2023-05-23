---
sidebar_position: 2
---

# Recruitment module - Survivorship protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Recruitment module - Survivorship protocol](https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc) protocol.

Mentions of observable properties should refer to [recruitment-survivorship/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/recruitment/recruitment-survivorship/overview) for the feature type and value type information.

## Conceptual modelling

The Recruitment module - Survivorship protocol records data about the site for the following feature types:

- plant individual

These observations are recorded for each site during a site visit.

This protocol allows users to tag individual plants with a unique ID, record location, health and life-stage, and record size measurements for individual plants.

### Diagram

The following diagram shows the Recruitment module - Survivorship protocol mapping. The orange node `plant missing status` is only recorded when revisit.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L&layers=1&nav=1&title=recruitment-survivorship-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L&layers=1&nav=1&title=recruitment-survivorship-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Recruitment - survivorship` protocol surveys:

- [OpenAPI docs for recruitment survivorship survey](https://dev.core-api.paratoo.tern.org.au/documentation#/Recruitment-survivorship-survey/post%2Frecruitment-survivorship-surveys)
- [OpenAPI docs for recruitment survivorship visit](https://dev.core-api.paratoo.tern.org.au/documentation#/Recruitment-survivorship-visit/post%2Frecruitment-survivorship-visits)

1. Survey data from recruitment survivorship survey:

```json
{
  "surveyId": "string",
  "start_date": "2023-03-13T07:38:15.420Z",
  "end_date": "2023-03-13T07:38:15.420Z",
  "plot_visit": 0,
  "visit_type": true,
  "study_area_type": "Belt transect",
  "species": [
    {
      "species": "string"
    }
  ],
  "comments": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

2. Survey data from recruitment survivorship visit:

```json
{
  "study_area_type": "Belt transect",
  "visit_type": true,
  "species": "string",
  "comments": "string",
  "survivorship_survey": 0,
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

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `visit_type`

The `visit_type` key maps to the attribute `visit type` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "visit type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/bfa185a3-7e96-47ef-be9b-4fdfb699821e> ;
        tern:hasSimpleValue true ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value true ;
        ] ;
    ] ;
.
```

#### `study_area_type`

The `study_area_type` key maps to the attribute `study area type` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "study area type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/9805d35e-2844-4e2a-bc59-e6560cc4efb5> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/501885ea-655a-5b86-b148-e4c51625526c> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Plot" ;
            rdf:value <https://linked.data.gov.au/def/nrm/501885ea-655a-5b86-b148-e4c51625526c> ;
        ] ;
    ] ;
.
```

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `comments`

The `comments` key maps to the attribute `recruitment comments` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "recruitment comments" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/75228732-5776-4972-8534-84496bfaede9> ;
        tern:hasSimpleValue "The weather is sunny." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The weather is sunny." ;
        ] ;
    ] ;
.
```

#### `survivorship_survey`

The `survivorship_survey` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Recruitment survivorship measurements

- [OpenAPI docs for recruitment survivorship measurements](https://dev.core-api.paratoo.tern.org.au/documentation#/Recruitment-survivorship-observation/post%2Frecruitment-survivorship-observations)

```json
{
  "species": "string",
  "location": {
    "lat": 0,
    "lng": 0
  },
  "label": "string",
  "tree_status": "Alive",
  "veg_growth_stage": "ER",
  "life_stage": "Seedling",
  "health": "Canopy health",
  "plant_height": 0,
  "average_canopy_width": 0,
  "dbh_measurement": 0,
  "photo": 0,
  "comments": "string",
  "survivor_survey": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. Since majority of the properties on these observations share the same values (feature of interest, site visit, result and phenomenon time) they can be recorded as observation members of an observation collection.

The feature of interest for all the observations is plant individual modelled as a `tern:Sample` with the feature type as 'plant individual'.

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:ObservationCollection` class.

##### Example

```turtle
<https://example.com/observation-collection/1> a tern:ObservationCollection ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `label`

The `label` key maps to the property `dcterms:identifier` on the `tern:Sample` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/sample/1> a tern:Sample ;
    dcterms:identifier "plant-individual-001" .
```

#### `tree_status`

The `tree_status` key maps to a `tern:Observation` with the observable property 'plant status'.

#### `veg_growth_stage`

The `veg_growth_stage` key maps to a `tern:Observation` with the observable property 'growth stage'.

#### `life_stage`

The `life_stage` key maps to a `tern:Observation` with the observable property 'life stage'.

#### `health`

The `health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

#### `plant_height`

The `plant_height` key maps to a `tern:Observation` with the observable property 'plant height'.

#### `average_canopy_width`

The `average_canopy_width` key maps to a `tern:Observation` with the observable property 'average canopy width'.

#### `dbh_measurement`

The `dbh_measurement` key maps to a `tern:Observation` with the observable property 'diameter at breast height (dbh)'.

#### `photo`

The `photo` key maps to photos(`tern:Sample`) taken during 'taking photos'(`tern:Sampling`) for observations on site. Each photo has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `comments`

The `comments` key maps to the attribute `recruitment comments` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "recruitment comments" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/75228732-5776-4972-8534-84496bfaede9> ;
        tern:hasSimpleValue "The weather is sunny." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The weather is sunny." ;
        ] ;
    ] ;
.
```

#### `survivorship_survey`

The `survivorship_survey` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Recruitment - survivorship protocol` are in [Recruitment - Survivorship protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#recruitment_survivorship_protocol_conformance_class_requirements).

Validator is [Recruitment - survivorship protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/recruitment/recruitment-survivorship-protocol-shapes/shapes.ttl).

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

Save the [Recruitment - survivorship shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/recruitment/recruitment-survivorship-protocol-shapes/shapes.ttl) in a file named `recruitment-survivorship-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Recruitment - survivorship protocol**, run the following command to validate the data:

```bash
pyshacl -s recruitment-survivorship-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [life stage shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/recruitment/recruitment-survivorship-protocol-shapes/life-stage/shapes.ttl) in a file named `life-stage-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for life stage in Recruitment - survivorship protocol**, run the following command to validate the data:

```bash
pyshacl -s life-stage-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

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
        <https://example.com/observation/average-canopy-width/1> ,
        <https://example.com/observation/diameter-at-breast-height-(dbh)/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/life-stage/1> ,
        <https://example.com/observation/plant-height/1> ,
        <https://example.com/observation/plant-missing-status/1> ,
        <https://example.com/observation/plant-status/1> ,
        <https://example.com/observation/vegetation-health/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/photos>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/plant-individual> ;
    tern:featureType <https://example.com/non-created-feature-type/photos/1> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    dcterms:identifier "sitevisit-site-visit-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-05-10T06:38:02"^^xsd:dateTime ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasAttribute
        [
            rdfs:label "recruitment comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/75228732-5776-4972-8534-84496bfaede9> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "visit type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/bfa185a3-7e96-47ef-be9b-4fdfb699821e> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/observation/average-canopy-width/1>
    a tern:Observation ;
    rdfs:label "average canopy width" ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5471254f-01e0-4201-8e15-888bb26b8fa5> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-missing-status/1>
    a tern:Observation ;
    rdfs:label "plant missing status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value true
        ] ;
    sosa:hasSimpleResult true ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e7af31c1-6131-4053-87d4-306275175988> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    rdfs:label "vegetation health" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Grazing" ;
            rdf:value <https://linked.data.gov.au/def/nrm/118698b1-44f4-5159-a32a-79f7fd335682>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/118698b1-44f4-5159-a32a-79f7fd335682> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7d4eaa80-0f2a-4828-886e-34cd5a4e2746> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc> ;
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

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs84:lat -3.092085e+01 ;
    wgs84:long 1.522424e+02 ;
.

<https://example.com/Sample/plant-individual>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant individual" ;
    dcterms:identifier "sample-plant-individual-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/60d7edf8-98c6-43e9-841c-e176c334d270> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

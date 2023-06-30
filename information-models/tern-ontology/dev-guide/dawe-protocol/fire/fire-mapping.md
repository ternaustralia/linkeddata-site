---
sidebar_position: 2
---

# Fire protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Fire](https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b) protocol.

Mentions of observable properties should refer to [fire/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/fire/overview) for the feature type and value type information.

## Conceptual modelling

The Fire module records data about the site for the following feature types:

- plant occurrence
- land surface substrate
- plant community
- disturbance

These observations are recorded for each site during a site visit.

Lay out the N2/S2, N4/S4, E2/W2 and E4/W4 transects before doing survey.

### Diagram

The following diagram is colour-coded to show the related things by feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M&layers=1&nav=1&title=fire-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M&layers=1&nav=1&title=fire-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Fire` protocol surveys:

- [OpenAPI docs for fire survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Fire-survey/post%2Ffire-surveys)

```json
{
  "plot_visit": 0,
  "last_fire": "2023-01-24T00:19:39.024Z",
  "last_fire_accuracy_days": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

<!-- #### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
``` -->

<!-- #### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
``` -->

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `last_fire`

The `last_fire` key maps to the date and time of last fire event recorded in data type `xsd:dateTime`.

#### `last_fire_accuracy_days`

The `last_fire_accuracy_days` key maps to the attribute `time since fire` in [Fire Attributes](https://linked.data.gov.au/def/nrm/e8f2ee06-9943-49a4-b113-064f8e195dca), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "time since fire" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/c079efc5-5e96-4460-9323-e2f5eee7eb8f> ;
        tern:hasSimpleValue "20"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "20"^^xsd:float ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping fire measurements

- [OpenAPI docs for fire measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Fire-observation/post%2Ffire-observations)

```json
{
  "plot_burned_status": "U",
  "substrate_type": "BR",
  "cover_point_intercept_point": 0,
  "soil_char_depth": 0,
  "soil_char_surface": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `plot_burned_status`

The `plot_burned_status` key maps to a `tern:Observation` with the observable property 'plot burned status'.

#### `substrate_type`

The `substrate_type` key maps to a `tern:Observation` with the observable property 'substrate type'.

#### `cover_point_intercept_point`

The `cover_point_intercept_point` key maps to the attribute `point intercept number` in [Fire Attributes](https://linked.data.gov.au/def/nrm/e8f2ee06-9943-49a4-b113-064f8e195dca), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "20" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "20" ;
        ] ;
    ] ;
.
```

#### `soil_char_depth`

The `soil_char_depth` key maps to a `tern:Observation` with the observable property 'maximum trunk char height'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping fire species intercept measurements

- [OpenAPI docs for fire species-intercept measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Fire-species-intercept/post%2Ffire-species-intercepts)

```json
{
  "species_intercept": 0,
  "regeneration_status": "B",
  "regenerating_height": 0,
  "plant_alive_status": "D",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `species_intercept`

The `species_intercept` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `regeneration_status`

The `regeneration_status` key maps to a `tern:Observation` with the observable property 'regeneration status'.

#### `regeneration_height`

The `regeneration_height` key maps to a `tern:Observation` with the observable property 'plant regenerating height'.

#### `plant_alive_status`

The `plant_alive_status` key maps to a `tern:Observation` with the observable property 'plant status'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Fire protocol` are in [Fire Module Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#fire_module_conformance_class_requirements).

Validator is [Fire protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/fire-protocol-shapes/shapes.ttl).

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

Save the [Fire shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/fire-protocol-shapes/shapes.ttl) in a file named `fire-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Fire protocol**, run the following command to validate the data:

```bash
pyshacl -s fire-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [growth form shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/fire-protocol-shapes/growth-form/shapes.ttl) in a file named `growth-form-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for growth form in Fire protocol**, run the following command to validate the data:

```bash
pyshacl -s growth-form-shapes.ttl -m -i rdfs -a -j -f human data.ttl
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
    rdfs:label "observations on land surface substrate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/fire-substrate-type/1> ,
        <https://example.com/observation/substrate-type/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-12-12T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-12T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/growth-form/1> ,
        <https://example.com/observation/in-canopy-sky/1> ,
        <https://example.com/observation/plant-height/1> ,
        <https://example.com/observation/plant-regenerating-height/1> ,
        <https://example.com/observation/plant-status/1> ,
        <https://example.com/observation/plot-burned-status/1> ,
        <https://example.com/observation/regeneration-status/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-12-12T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-12T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Pines"^^xsd:string
        ] ;
    sosa:hasSimpleResult "Pines"^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/fire-substrate-type/1>
    a tern:Observation ;
    rdfs:label "fire substrate type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "White ash" ;
            rdf:value <https://linked.data.gov.au/def/nrm/67f0e621-e61d-55a6-9963-e0becc048aaa>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/67f0e621-e61d-55a6-9963-e0becc048aaa> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/56efb36f-d3bc-475d-80d3-990f910f8488> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Grass-tree" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1be47880-4ee6-5df9-8eda-551c58078771>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1be47880-4ee6-5df9-8eda-551c58078771> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/in-canopy-sky/1>
    a tern:Observation ;
    rdfs:label "in-canopy sky" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value true
        ] ;
    sosa:hasSimpleResult true ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/85bdd25a-fa08-49de-9f0b-98895cb79aa6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/maximum-trunk-char-height/1>
    a tern:Observation ;
    rdfs:label "maximum trunk char height" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 9.22e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 9.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3a2b344c-07b5-4536-8db3-06b73bc0e263> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:hasAttribute [
            rdfs:label "time since fire" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/c079efc5-5e96-4460-9323-e2f5eee7eb8f> ;
            tern:hasSimpleValue 2e+01 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2e+01
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-height/1>
    a tern:Observation ;
    rdfs:label "plant height" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 5.22e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 5.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e9da717-6c8e-4194-9385-c995d54702e4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-regenerating-height/1>
    a tern:Observation ;
    rdfs:label "plant regenerating height" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/936f6c7d-9432-41d2-8214-00ed64e8f0c4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-status/1>
    a tern:Observation ;
    rdfs:label "plant status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Dead" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2fd1ed97-3e7b-59a0-8d93-9be76f276071>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2fd1ed97-3e7b-59a0-8d93-9be76f276071> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ddd0c631-bfdd-4b0f-88de-a5eb1a0181c6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plot-burned-status/1>
    a tern:Observation ;
    rdfs:label "plot burned status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Past Burnt" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7d7c2dd4-4a7e-549f-a12a-7846d65aafcf>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7d7c2dd4-4a7e-549f-a12a-7846d65aafcf> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8eb830f7-a0ec-42d6-8170-dbe2f4d56db2> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/regeneration-status/1>
    a tern:Observation ;
    rdfs:label "regeneration status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Basal" ;
            rdf:value <https://linked.data.gov.au/def/nrm/ef12561d-a8d7-5dde-9779-6e02610f2070>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/ef12561d-a8d7-5dde-9779-6e02610f2070> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/50239f29-a693-49ef-98e8-4ee11d1758ea> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/substrate-type/1>
    a tern:Observation ;
    rdfs:label "substrate type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/75f55bf0-6972-42ba-ad46-7e24f91e8f6a> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/transect-end-point/1>
    a
        sf:Point ,
        tern-loc:Point ;
    wgs:lat -3.092086e+01 ;
    wgs:long 1.512424e+02 ;
.

<https://example.com/site/1/transect-geometry/1>
    a
        geo:Geometry ,
        tern-loc:Point ;
    rdfs:label "Transect start point" ;
    geo:asWKT "POINT(150.3 -34.0)"^^geo:wktLiteral ;
    wgs:lat -34 ;
    wgs:long 150.3 ;
.

<https://example.com/site/1/transect-start-point/1>
    a
        sf:Point ,
        tern-loc:Point ;
    wgs:lat -3.092086e+01 ;
    wgs:long 1.512424e+02 ;
.

<https://example.com/transect/1>
    a
        tern:FeatureOfInterest ,
        tern:Transect ;
    rdfs:label "Transect 1" ;
    dcterms:identifier "transect001"^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/site/1/transect-geometry/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/de46fa49-d1c9-4bef-8462-d7ee5174e1e1> ;
    tern:transectDirection "West" ;
    tern:transectEndPoint <https://example.com/site/1/transect-end-point/1> ;
    tern:transectStartPoint <https://example.com/site/1/transect-start-point/1> ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "land surface substrate 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/aef12cd6-3826-4988-a54c-8578d3fb4c8d> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-12-06T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
    tern:locationDescription "The weather is sunny."^^xsd:string ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    dcterms:identifier "site001"^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/transect/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
.

<https://example.com/feature-of-interest/3>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant community 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
.

<https://example.com/feature-of-interest/4>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plot disturbance 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/7e256d28-e686-4b6a-b64a-ac1b1a8f164d> ;
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

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

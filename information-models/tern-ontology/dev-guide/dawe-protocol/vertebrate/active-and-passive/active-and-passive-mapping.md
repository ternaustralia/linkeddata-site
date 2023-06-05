---
sidebar_position: 2
---

# Active and passive searching protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Active and passive searching protocol](https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24) protocol in [Vertebrate Fauna](https://linked.data.gov.au/def/nrm/0771a99f-27f4-4ff7-bf6d-aa70fe22ae51) module.

Mentions of observable properties should refer to [active-and-passive/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/vertebrate/active-and-passive/overview) for the feature type and value type information.

## Conceptual modelling

The Active and passive searching protocol records data about the site for the following feature types:

- animal population
- climate

These observations are recorded for each site during a site visit.

### Diagram

The following diagram shows the Active and passive searching protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G159WmRp9VIpLMyc9fzxJ5r26jIe8JR5G2&layers=1&nav=1&title=vertebrate-fauna-active-and-passive-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D159WmRp9VIpLMyc9fzxJ5r26jIe8JR5G2%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G159WmRp9VIpLMyc9fzxJ5r26jIe8JR5G2&layers=1&nav=1&title=vertebrate-fauna-active-and-passive-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D159WmRp9VIpLMyc9fzxJ5r26jIe8JR5G2%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

The following is dummy data:

```json
{
  "habitat_description": "string",
  "duration": 0,
  "lat": 0,
  "lng": 0,
  "plot_visit": 0,
  "equipment_used": "Camera used",
  "photo": [0],
  "samples": {
    "sample_id": "materialSample001",
    "voucher_type": "Animal tissue (fur/hair)",
    "voucher_condition": "Fresh (estimate 24 hours - <48 hours)",
    "collection_date": "2023-04-11T06:03:58.525Z"
  },
  "weather": {
    "precipitation": "NO",
    "wind_description": "C",
    "cloud_cover": "SU",
    "temperature": 0
  },
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

<!-- #### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/visit/1> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date`

The `end_date` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/visit/1> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
``` -->

#### `habitat_description`

The `habitat_description` key maps to a `tern:Observation` with the observable property 'habitat description'.

#### `duration`

The `duration` key maps to the attribute `survey duration` in [Vertebrate fauna module - Active and passive searching protocol Attributes](https://linked.data.gov.au/def/nrm/ccc2c832-9942-4dd4-816e-d44775836021), and is linked to site visit by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "survey duration" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/e06e4787-8bd3-4ee5-acb2-1457b1fa71ad> ;
        tern:hasSimpleValue "10 hours"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "10 hours"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `lat`, `lng`

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:Site` class.

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

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `equipment_used`

The `equipment_used` key maps to the attribute `equipment used` in [Vertebrate fauna module - Active and passive searching protocol Attributes](https://linked.data.gov.au/def/nrm/ccc2c832-9942-4dd4-816e-d44775836021), and is linked to site visit by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "equipment used" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/de6821ec-e2aa-4b12-8c8e-57251bec1b9d> ;
        tern:hasSimpleValue "Camera used"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Camera used"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `sample_id`

The `sample_id` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-voucher-specimen/1> a tern:MaterialSample ;
    dwc:materialSampleID "materialSample001" .
```

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher type` in [Vertebrate fauna module - Active and passive searching protocol Attributes](https://linked.data.gov.au/def/nrm/ccc2c832-9942-4dd4-816e-d44775836021), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/fauna-voucher-specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/958424a8-1c46-507b-a175-d5ff5409f85e> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Animal tissue (fur/hair)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/958424a8-1c46-507b-a175-d5ff5409f85e> ;
        ] ;
    ] ;
.
```

#### `voucher_condition`

The `voucher_condition` key maps to the attribute `voucher condition` in [Vertebrate fauna module - Active and passive searching protocol Attributes](https://linked.data.gov.au/def/nrm/ccc2c832-9942-4dd4-816e-d44775836021), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/fauna-voucher-specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher condition" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/010ee3c8-bfbe-47c5-adc8-068ca664173d> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/08f85f09-9f82-5b4e-8918-be7f2a317823> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Fresh (estimate 24 hours - <48 hours)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/08f85f09-9f82-5b4e-8918-be7f2a317823> ;
        ] ;
    ] ;
.
```

#### `collection_date`

The `collection_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/fauna-vouchering> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `precipitation`

The `precipitation` key maps to a `tern:Observation` with the observable property 'weather- site precipitation'.

#### `wind_description`

The `wind_description` key maps to a `tern:Observation` with the observable property 'weather-site wind'.

#### `cloud_cover`

The `cloud_cover` key maps to a `tern:Observation` with the observable property 'weather- site cloud cover'.

#### `temperature`

The `temperature` key maps to a `tern:Observation` with the observable property 'weather- site temperature'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observation data

The following is dummy data:

```json
{
  "age": "Adult",
  "fauna_behaviour": "Feeding",
  "count": 2,
  "exact_or_estimate": "Exact",
  "reproductive_status": "Breeding",
  "sex": "male",
  "species_name": "Snake",
  "confident": true,
  "source_of_identification": "Expert (museum/herbarium)",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `age`

The `age` key maps to a `tern:Observation` with the observable property 'age class'.

#### `fauna_behaviour`

The `fauna_behaviour` key maps to a `tern:Observation` with the observable property 'fauna behaviour'.

#### `count`

The `count` key maps to a `tern:Observation` with the observable property 'number of individuals'.

#### `exact_or_estimate`

The `exact_or_estimate` key maps to the attribute `count exact or estimate` in [Vertebrate fauna module - Active and passive searching protocol Attributes](https://linked.data.gov.au/def/nrm/ccc2c832-9942-4dd4-816e-d44775836021), and is linked to values by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/number-of-individuals/1>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2 ;
            tern:hasAttribute [
                    rdfs:label "count exact or estimate" ;
                    void:inDataset <https://example.com/dataset/1> ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/ca245b0d-b3e2-4dbc-8a72-d8cd1868a1ce> ;
                    tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8c1c83f2-66b1-5651-ba3c-adbbf3806433> ;
                    tern:hasValue [
                            a tern:IRI ;
                            rdfs:label "Exact" ;
                            rdf:value <https://linked.data.gov.au/def/nrm/8c1c83f2-66b1-5651-ba3c-adbbf3806433>
                        ]
                ]
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
.
```

#### `reproductive_status`

The `reproductive_status` key maps to a `tern:Observation` with the observable property 'reproductive status'.

#### `sex`

The `sex` key maps to a `tern:Observation` with the observable property 'sex'.

#### `species_name`

The `species_name` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `confident`

The `confident` key maps to the attribute `is confident` in [Vertebrate fauna module - Active and passive searching protocol Attributes](https://linked.data.gov.au/def/nrm/ccc2c832-9942-4dd4-816e-d44775836021), and is linked to observation by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/field-species-name/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "is confident" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/adb8ec51-3f23-448b-9c80-3e8f2e4bb584> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `source_of_identification`

The `source_of_identification` key maps to the attribute `source of identification` in [Vertebrate fauna module - Active and passive searching protocol Attributes](https://linked.data.gov.au/def/nrm/ccc2c832-9942-4dd4-816e-d44775836021), and is linked to observation by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/field-species-name/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "source of identification" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/76f2d8fa-29d1-552f-ae7d-41ee5963cf47> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Expert (museum/herbarium)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/76f2d8fa-29d1-552f-ae7d-41ee5963cf47> ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Vertebrate Fauna - Active and passive searching protocol` are in [Vertebrate Fauna - Active and passive searching protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#vertebrate_fauna_active_and_passive_searching_protocol_conformance_class_requirements).

Validator is [Vertebrate Fauna - Active and passive searching protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/vertebrate-fauna-active-and-passive-searching-protocol-shapes/shapes.ttl).

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

Save the [Vertebrate fauna shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/shapes.ttl) in a file named `vertebrate-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Vertebrate fauna protocol**, run the following command to validate the data:

```bash
pyshacl -s vertebrate-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Vertebrate Fauna - Active and passive searching protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/vertebrate-fauna-active-and-passive-searching-protocol-shapes/shapes.ttl) in a file named `vertebrate-active-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Vertebrate fauna - Active and passive searching protocol**, run the following command to validate the data:

```bash
pyshacl -s vertebrate-active-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [sex shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/vertebrate-fauna-active-and-passive-searching-protocol-shapes/sex/shapes.ttl) in a file named `sex-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for sex in Vertebrate fauna - Active and passive searching protocol**, run the following command to validate the data:

```bash
pyshacl -s sex-shapes.ttl -m -i rdfs -a -j -f human data.ttl
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
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/ObservationCollection/observations-on-animal-population>
    a tern:ObservationCollection ;
    rdfs:label "observations on animal population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasMember
        <https://example.com/observation/age-class/1> ,
        <https://example.com/observation/fauna-behaviour/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/number-of-individuals/1> ,
        <https://example.com/observation/reproductive-status/1> ,
        <https://example.com/observation/sex/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:hasAttribute
        [
            rdfs:label "observation method" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a5611033-d558-46c4-94b6-cd36885aa7f1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/e8006b91-390c-557b-8945-93db9aff0b89> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "OB" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/e8006b91-390c-557b-8945-93db9aff0b89>
                ]
        ] ,
        [
            rdfs:label "observation notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "The are both males and females."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The are both males and females."^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/ObservationCollection/observations-on-climate>
    a tern:ObservationCollection ;
    rdfs:label "observations on climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/climate> ;
    sosa:hasMember
        <https://example.com/observation/weather-site-cloud-cover/1> ,
        <https://example.com/observation/weather-site-precipitation/1> ,
        <https://example.com/observation/weather-site-temperature/1> ,
        <https://example.com/observation/weather-site-wind/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/Sampling/fauna-vouchering>
    a tern:Sampling ;
    rdfs:label "fauna vouchering" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    rdfs:comment "Photo is taken." ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult <https://example.com/MaterialSample/fauna-voucher-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:hasAttribute [
            rdfs:label "search method" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b534763f-6645-41df-bd21-9a09e907b833> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Other" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/habitat> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Isolated clump of tussock grasses" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f51c20dd-6026-5b24-9f5f-a705b8d88a95>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f51c20dd-6026-5b24-9f5f-a705b8d88a95> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T10:38:02"^^xsd:dateTime ;
.

<https://example.com/MaterialSample/fauna-voucher-specimen>
    a
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "fauna voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/animal-population> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute
        [
            rdfs:label "voucher type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Plant Tissue Voucher" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4>
                ]
        ] ,
        [
            rdfs:label "voucher condition" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/010ee3c8-bfbe-47c5-adc8-068ca664173d> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/08f85f09-9f82-5b4e-8918-be7f2a317823> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Fresh (estimate 24 houts - <48 hours)" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/08f85f09-9f82-5b4e-8918-be7f2a317823>
                ]
        ] ;
.

<https://example.com/Sample/photos>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/animal-population> ;
    tern:featureType <https://example.com/non-created-feature-type/photos> ;
.

<https://example.com/observation/age-class/1>
    a tern:Observation ;
    rdfs:label "age class" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Juvenile" ;
            rdf:value <https://linked.data.gov.au/def/nrm/6de1f874-fdcb-520a-9ff8-481a7968e76c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/6de1f874-fdcb-520a-9ff8-481a7968e76c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/59df7c05-1521-4161-86e4-8e6a8feb4002> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/fauna-behaviour/1>
    a tern:Observation ;
    rdfs:label "fauna behaviour" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Roosting" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4246f9b7-0e3c-55fc-a7e9-3794ec69599f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4246f9b7-0e3c-55fc-a7e9-3794ec69599f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dfaf2438-6019-4632-85d8-0efc91930768> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Snake."^^xsd:string
        ] ;
    sosa:hasSimpleResult "Snake."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:hasAttribute
        [
            rdfs:label "source of identification" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Other" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb>
                ]
        ] ,
        [
            rdfs:label "is confident" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/adb8ec51-3f23-448b-9c80-3e8f2e4bb584> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/number-of-individuals/1>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2 ;
            tern:hasAttribute [
                    rdfs:label "count exact or estimate" ;
                    void:inDataset <https://example.com/dataset/1> ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/ca245b0d-b3e2-4dbc-8a72-d8cd1868a1ce> ;
                    tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/68c919a7-5759-5169-92dd-a99b6b7be407> ;
                    tern:hasValue [
                            a
                                tern:IRI ,
                                tern:Value ;
                            rdfs:label "Estimate" ;
                            rdf:value <https://linked.data.gov.au/def/nrm/68c919a7-5759-5169-92dd-a99b6b7be407>
                        ]
                ]
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/reproductive-status/1>
    a tern:Observation ;
    rdfs:label "reproductive status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Unknown" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e8659dca-7861-407f-b405-55576ddcc276> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/sex/1>
    a tern:Observation ;
    rdfs:label "sex" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Unknown" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/40b39732-e10b-4c4e-968b-3404663a094d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/weather-site-cloud-cover/1>
    a tern:Observation ;
    rdfs:label "weather- site cloud cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/climate> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Partly Cloudy" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7773b3e9-83e7-5057-b7d6-6a025e0b6a2b>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7773b3e9-83e7-5057-b7d6-6a025e0b6a2b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/111a2971-f7c3-4d9d-b079-d9afa0bcc8b0> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/weather-site-precipitation/1>
    a tern:Observation ;
    rdfs:label "weather- site precipitation" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/climate> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "None observed" ;
            rdf:value <https://linked.data.gov.au/def/nrm/507fab84-10d1-5153-ab14-9f6a28ce9cbc>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/507fab84-10d1-5153-ab14-9f6a28ce9cbc> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b7e7f67b-d983-4167-baca-57cab6dd89a2> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/weather-site-temperature/1>
    a tern:Observation ;
    rdfs:label "weather- site temperature" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/climate> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Hot" ;
            rdf:value <https://linked.data.gov.au/def/nrm/bfee24b3-f82c-5ae0-b6b4-642b697f0bc8>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/bfee24b3-f82c-5ae0-b6b4-642b697f0bc8> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a30248c3-33ce-4ffe-8130-7b03aa4e5322> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/weather-site-wind/1>
    a tern:Observation ;
    rdfs:label "weather-site wind" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/climate> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Strong gale" ;
            rdf:value <https://linked.data.gov.au/def/nrm/786f0acf-ea07-5c51-a173-f456f541e28d>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/786f0acf-ea07-5c51-a173-f456f541e28d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e8f03cc8-33a3-4c2f-9a0d-95a40c34523d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/habitat>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-05-10T06:38:02"^^xsd:dateTime ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasAttribute
        [
            rdfs:label "number of observers" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/687b7f67-9fbc-4135-845b-4fb5b8786f0d> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a
                        tern:Integer ,
                        tern:Value ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "equipment used" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/de6821ec-e2aa-4b12-8c8e-57251bec1b9d> ;
            tern:hasSimpleValue "Camera traps are used."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Camera traps are used."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "methods description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/79709363-0f11-4f26-a3ad-f758daf37fa6> ;
            tern:hasSimpleValue "The method is active search."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The method is active search."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "survey duration" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e06e4787-8bd3-4ee5-acb2-1457b1fa71ad> ;
            tern:hasSimpleValue "60 minutes."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "60 minutes."^^xsd:string
                ]
        ] ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/Sample/climate>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/6d40d71e-58cd-4f75-8304-40c01fe5f74c> ;
.

<https://example.com/Site/site>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "site" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/Sample/animal-population>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "animal population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8a68b4a9-167b-40f0-9222-293a2d20ffee> ;
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

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

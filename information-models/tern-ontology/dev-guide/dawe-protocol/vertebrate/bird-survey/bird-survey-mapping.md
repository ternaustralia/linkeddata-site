---
sidebar_position: 2
---

# Vertebrate Fauna - Bird Survey protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Bird survey protocol](https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382) protocol in [Vertebrate Fauna](https://linked.data.gov.au/def/nrm/0771a99f-27f4-4ff7-bf6d-aa70fe22ae51) module.

Mentions of observable properties should refer to [bird-survey/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/vertebrate/bird-survey/overview) for the feature type and value type information.

## Conceptual modelling

The Bird survey records data about the site for the following feature types:

- bird population
- climate

These observations are recorded for each site during a site visit.

### Diagram

The following diagram is colour-coded to show the related things by feature type. The blue nodes are things related to the bird population feature type and the green nodes are things related to the climate feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1qR61EM74943f1HAO6BIc6-YsD_GreZM5&layers=1&nav=1&title=vertebrate-fauna-bird-survey-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1qR61EM74943f1HAO6BIc6-YsD_GreZM5%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1qR61EM74943f1HAO6BIc6-YsD_GreZM5&layers=1&nav=1&title=vertebrate-fauna-bird-survey-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1qR61EM74943f1HAO6BIc6-YsD_GreZM5%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Bird survey` protocol surveys:

- [OpenAPI docs for bird survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Bird-survey/post%2Fbird-surveys)

```json
{
  "playback_used": true,
  "plot_visit": 0,
  "location": {
    "lat": 0,
    "lng": 0
  },
  "plot_layout": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

<!-- #### `start_date`

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

#### `survey_type`

The `survey_type` key maps to the attribute `bird survey area search boundary` in [Bird survey Attributes](https://linked.data.gov.au/def/nrm/7717e0ae-aea0-434d-892f-45bc3a40e0b4), and is linked to site visit by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "bird survey area search boundary" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/3ae7ffd2-748c-4551-be3b-b71cae26f980> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/dc6cae53-5838-5d03-8332-a463bdecbcb3> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "20 minute, 2ha" ;
            rdf:value <https://linked.data.gov.au/def/nrm/dc6cae53-5838-5d03-8332-a463bdecbcb3> ;
        ] ;
    ] ;
.
``` -->

#### `playback_used`

The `playback_used` key maps to the attribute `playback used` in [Bird survey Attributes](https://linked.data.gov.au/def/nrm/7717e0ae-aea0-434d-892f-45bc3a40e0b4), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/bird-activity-type/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "playback used" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/60cd3fa2-ba03-4212-922d-8b0dc04e7176> ;
        tern:hasSimpleValue true ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value true ;
        ] ;
    ] ;
.
```

<!-- #### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
``` -->

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `plot_layout`

The `plot_layout` key maps to the `tern:Site` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping bird survey measurements

- [OpenAPI docs for bird survey measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Bird-survey-observation/post%2Fbird-survey-observations)

```json
{
  "bird_survey": 0,
  "species": "string",
  "count": 0,
  "observation_type": "S",
  "activity_type": "FO",
  "sex": "M",
  "observation_location_type": "WS",
  "breeding_type": "NO",
  "fauna_maturity": "U",
  "location": {
    "lat": 0,
    "lng": 0
  },
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `bird_survey`

The `bird_survey` key maps to the `tern:SiteVisit` class.

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `count`

The `count` key maps to a `tern:Observation` with the observable property 'number of observers'.

#### `observation_type`

The `observation_type` key maps to the attribute `bird observation type` in [Bird survey Attributes](https://linked.data.gov.au/def/nrm/7717e0ae-aea0-434d-892f-45bc3a40e0b4), and is linked to observation collection by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/observationCollection/1> a tern:ObservationCollection ;
    tern:hasAttribute [
        rdfs:label "bird observation type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/a73875fe-0fbb-4055-905b-eb0ee0f0660f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ffb1c491-bbb1-5823-ac03-0543f9a9627a> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Heard" ;
            rdf:value <https://linked.data.gov.au/def/nrm/ffb1c491-bbb1-5823-ac03-0543f9a9627a> ;
        ] ;
    ] ;
.
```

#### `activity_type`

The `activity_type` key maps to a `tern:Observation` with the observable property 'bird activity type'.

#### `sex`

The `sex` key maps to a `tern:Observation` with the observable property 'sex'.

#### `observation_location_type`

The `observation_location_type` key maps to the attribute `observation location type` in [Bird survey Attributes](https://linked.data.gov.au/def/nrm/7717e0ae-aea0-434d-892f-45bc3a40e0b4), and is linked to observation collection by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/observationCollection/1> a tern:ObservationCollection ;
    tern:hasAttribute [
        rdfs:label "observation location type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/61b06e07-39c4-44d8-bb45-fe6a6740fe51> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/af32eb38-5a65-5736-9e62-e47c85bdecef> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Outside Survey - Same Habitat" ;
            rdf:value <https://linked.data.gov.au/def/nrm/af32eb38-5a65-5736-9e62-e47c85bdecef> ;
        ] ;
    ] ;
.
```

#### `breeding_type`

The `breeding_type` key maps to a `tern:Observation` with the observable property 'bird breeding activity'.

#### `fauna_maturity`

The `fauna_maturity` key maps to a `tern:Observation` with the observable property 'maturity'.

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:ObservationCollection` class.

##### Example

```turtle
<https://example.com/observationCollection/1> a tern:ObservationCollection ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Vertebrate Fauna - Bird survey protocol` are in [Vertebrate Fauna - Bird survey protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#vertebrate_fauna_bird_survey_protocol_conformance_class_requirements).

Validator is [Vertebrate fauna - bird survey protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/vertebrate-fauna-bird-survey-protocol-shapes/shapes.ttl).

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

Save the [Vertebrate Fauna shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/shapes.ttl) in a file named `vertebrate-shapes.ttl` in the Turtle RDF format.

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

Save the [Vertebrate fauna - bird survey shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/vertebrate-fauna-bird-survey-protocol-shapes/shapes.ttl) in a file named `bird-survey-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Vertebrate fauna - bird survey protocol**, run the following command to validate the data:

```bash
pyshacl -s bird-survey-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [sex shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/vertebrate-fauna/vertebrate-fauna-bird-survey-protocol-shapes/sex/shapes.ttl) in a file named `sex-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for sex in Vertebrate fauna - bird survey protocol**, run the following command to validate the data:

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
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on bird population" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.292085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/bird-activity-type/1> ,
        <https://example.com/observation/bird-breeding-activity/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/maturity/1> ,
        <https://example.com/observation/number-of-individuals/1> ,
        <https://example.com/observation/sex/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-12-02T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:hasAttribute
        [
            rdfs:label "bird observation type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a73875fe-0fbb-4055-905b-eb0ee0f0660f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ffb1c491-bbb1-5823-ac03-0543f9a9627a> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Heard" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ffb1c491-bbb1-5823-ac03-0543f9a9627a>
                ]
        ] ,
        [
            rdfs:label "number of observers" ;
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
            rdfs:label "observation location type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/61b06e07-39c4-44d8-bb45-fe6a6740fe51> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8cf3f3eb-a056-52df-9367-92196de1f2f1> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Outside survey - Different Habitat" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8cf3f3eb-a056-52df-9367-92196de1f2f1>
                ]
        ] ,
        [
            rdfs:label "observation notes" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "Playback is used." ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Playback is used."
                ]
        ] ,
        [
            rdfs:label "playback used" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/60cd3fa2-ba03-4212-922d-8b0dc04e7176> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-02T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember
        <https://example.com/observation/cloud-cover/1> ,
        <https://example.com/observation/precipitation/1> ,
        <https://example.com/observation/air-temperature/1> ,
        <https://example.com/observation/wind-description/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-12-02T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:hasAttribute
        [
            rdfs:label "number of observers" ;
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
            rdfs:label "observation location type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/61b06e07-39c4-44d8-bb45-fe6a6740fe51> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8cf3f3eb-a056-52df-9367-92196de1f2f1> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Outside survey - Different Habitat" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8cf3f3eb-a056-52df-9367-92196de1f2f1>
                ]
        ] ,
        [
            rdfs:label "observation notes" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "The weather is sunny." ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The weather is sunny."
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-02T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/bird-activity-type/1>
    a tern:Observation ;
    rdfs:label "bird activity type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Resting on shrub" ;
            rdf:value <https://linked.data.gov.au/def/nrm/bc097808-d785-5269-a642-c7ac57d53dd5>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/bc097808-d785-5269-a642-c7ac57d53dd5> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/045fa754-487a-4346-8128-403c646a903b> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/bird-breeding-activity/1>
    a tern:Observation ;
    rdfs:label "bird breeding activity" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Unknown" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/72cca5e4-2dc6-4a96-92e3-6f1e844b243c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
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
            rdf:value "Mallard"^^xsd:string
        ] ;
    sosa:hasSimpleResult "Mallard"^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/maturity/1>
    a tern:Observation ;
    rdfs:label "maturity" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Juvenile" ;
            rdf:value <https://linked.data.gov.au/def/nrm/6de1f874-fdcb-520a-9ff8-481a7968e76c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/6de1f874-fdcb-520a-9ff8-481a7968e76c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0bc0fae9-6243-4d9f-a547-ef4c36244b5d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/number-of-individuals/1>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/sex/1>
    a tern:Observation ;
    rdfs:label "sex" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/cloud-cover/1>
    a tern:Observation ;
    rdfs:label "cloud cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/precipitation/1>
    a tern:Observation ;
    rdfs:label "precipitation" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/air-temperature/1>
    a tern:Observation ;
    rdfs:label "air temperature" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/wind-description/1>
    a tern:Observation ;
    rdfs:label "wind description" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-12-02T03:18:42.783000+00:00"^^xsd:dateTime ;
    prov:startedAtTime "2022-12-02T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasAttribute
        [
            rdfs:label "bird survey area search boundary" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/3ae7ffd2-748c-4551-be3b-b71cae26f980> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ede4dc92-4734-5bc3-9ac1-f892db4f1470> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "500m area search" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ede4dc92-4734-5bc3-9ac1-f892db4f1470>
                ]
        ] ,
        [
            rdfs:label "survey notes" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/97387d96-e90c-4cf8-9268-7ed59c95738c> ;
            tern:hasSimpleValue "The weather is sunny." ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The weather is sunny."
                ]
        ] ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    dcterms:identifier "site001"^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.292085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
    tern:hasAttribute [
            rdfs:label "plot name" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
            tern:hasSimpleValue "The Jones Stream Study Plot" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The Jones Stream Study Plot"
                ]
        ] ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "climate 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/6d40d71e-58cd-4f75-8304-40c01fe5f74c> ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "bird population 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/62a51999-f3ca-41d2-8576-3a053dd116a6> ;
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

---
sidebar_position: 2
---

# Targeted survey - General field survey details protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [General field survey details protocol](https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33) protocol in [Targeted survey](https://linked.data.gov.au/def/nrm/420ce0a7-9364-4bf4-861c-ef5f710e31b9) module.

Mentions of observable properties should refer to [general-field-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/general-field-protocol/overview) for the feature type and value type information.

## Conceptual modelling

The General field survey details protocol records data about the site for the feature type 'climate'.

These observations are recorded for each site during a site visit.

### Diagram

The following diagram shows the General field survey details protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3&layers=1&nav=1&title=targeted-survey-general-field-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3&layers=1&nav=1&title=targeted-survey-general-field-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3%26export%3Ddownload">View diagram in new tab.</a>

## Survey data and Observation data

The following is dummy data:

```json
{
  "target_habitats": "string",
  "experience": "string",
  "lat": 0,
  "lng": 0,
  "plot_visit": 0,
  "weather": {
    "precipitation": "NO",
    "precipitation_duration": "I",
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
``` -->

#### `target_habitats`

The `target_habitats` key maps to the attribute `target habitats` in [Targeted survey module - General field protocol Attributes](https://linked.data.gov.au/def/nrm/5711a30b-d89f-4984-b488-af9943658f7a), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/create-survey-area/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "target habitats" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/ae2c88be-63d5-44d3-95ac-54b14c4a4b28> ;
        tern:hasSimpleValue "There are 2 snakes."^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "There are 2 snakes."^^xsd:string ;
        ] ;
    ] ;
.
```

#### `experience`

The `experience` key maps to the attribute `survey observers and experience` in [Targeted survey module - General field protocol Attributes](https://linked.data.gov.au/def/nrm/5711a30b-d89f-4984-b488-af9943658f7a), and is linked to site visit by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "survey observers and experience" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/e3ff756d-7363-4bd1-8d8f-fd95cd941d97> ;
        tern:hasSimpleValue "Experienced"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Experienced"^^xsd:string ;
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

#### `precipitation`

The `precipitation` key maps to a `tern:Observation` with the observable property 'precipitation'.

#### `precipitation_duration`

The `precipitation_duration` key maps to a `tern:Observation` with the observable property 'precipitation duration'.

#### `wind_description`

The `wind_description` key maps to a `tern:Observation` with the observable property 'wind description'.

#### `cloud_cover`

The `cloud_cover` key maps to a `tern:Observation` with the observable property 'cloud cover'.

#### `temperature`

The `temperature` key maps to a `tern:Observation` with the observable property 'air temperature'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Targeted survey - general field protocol` are in [Targeted Survey - General Field protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#targeted_survey_general_field_protocol_conformance_class_requirements).

Validator is [Targeted survey - general field protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-general-field-protocol-shapes/shapes.ttl).

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

Save the [Targeted survey shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/shapes.ttl) in a file named `targeted-survey-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Targeted survey protocol**, run the following command to validate the data:

```bash
pyshacl -s targeted-survey-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Targeted survey - general field shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-general-field-protocol-shapes/shapes.ttl) in a file named `general-field-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Targeted survey - general field protocol**, run the following command to validate the data:

```bash
pyshacl -s general-field-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [cloud cover shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-general-field-protocol-shapes/cloud-cover/shapes.ttl) in a file named `cloud-cover-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for cloud cover in Targeted survey - general field protocol**, run the following command to validate the data:

```bash
pyshacl -s cloud-cover-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

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

<https://example.com/ObservationCollection/observations-on-climate>
    a tern:ObservationCollection ;
    rdfs:label "observations on climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/climate> ;
    sosa:hasMember
        <https://example.com/observation/precipitation-duration/1> ,
        <https://example.com/observation/cloud-cover/1> ,
        <https://example.com/observation/precipitation/1> ,
        <https://example.com/observation/air-temperature/1> ,
        <https://example.com/observation/wind-description/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/creating-the-survey-area>
    a tern:Sampling ;
    rdfs:label "creating the survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/AustralianLand> ;
    sosa:hasResult <https://example.com/Site/survey-area> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:hasAttribute [
            rdfs:label "target habitats" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ae2c88be-63d5-44d3-95ac-54b14c4a4b28> ;
            tern:hasSimpleValue "These habitats are ideal for survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "These habitats are ideal for survey."^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/precipitation-duration/1>
    a tern:Observation ;
    rdfs:label "precipitation duration" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/climate> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Continuous" ;
            rdf:value <https://linked.data.gov.au/def/nrm/d7f71bef-4a91-598b-b141-f44115ad402e>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/d7f71bef-4a91-598b-b141-f44115ad402e> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/25d4c7b7-4cdf-4b69-8774-064055c74e23> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/cloud-cover/1>
    a tern:Observation ;
    rdfs:label "cloud cover" ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/precipitation/1>
    a tern:Observation ;
    rdfs:label "precipitation" ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/air-temperature/1>
    a tern:Observation ;
    rdfs:label "air temperature" ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/wind-description/1>
    a tern:Observation ;
    rdfs:label "wind description" ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/AustralianLand>
    a tern:FeatureOfInterest ;
    rdfs:label "Australian Land" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasAttribute
        [
            rdfs:label "survey observers and experience" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e3ff756d-7363-4bd1-8d8f-fd95cd941d97> ;
            tern:hasSimpleValue "Experienced."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Experienced."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "survey objectives" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6546ac62-85a4-4d00-a72e-79bbd03d13ac> ;
            tern:hasSimpleValue "Set up the survey area."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Set up the survey area."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "survey design and justification" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d1d58bb4-6da2-4ab7-b9c8-999330fc8a9b> ;
            tern:hasSimpleValue "Designed by experienced observers."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Designed by experienced observers."^^xsd:string
                ]
        ] ;
    tern:hasSite <https://example.com/Site/survey-area> ;
.

<https://example.com/Site/survey-area>
    a
        tern:FeatureOfInterest ,
        tern:Sample ,
        tern:Site ;
    rdfs:label "survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:isSampleOf <https://example.com/AustralianLand> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
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

<https://example.com/Sample/climate>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/6d40d71e-58cd-4f75-8304-40c01fe5f74c> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

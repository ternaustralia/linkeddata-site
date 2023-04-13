---
sidebar_position: 2
---

# Targeted survey - General field survey details protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [General field survey details protocol](https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33) protocol.

Mentions of observable properties should refer to [general-field-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/general-field-protocol/overview) for the feature type and value type information.

## Conceptual modelling

The General field survey details protocol records data about the site for the feature type 'climate'.

These observations are recorded for each site during a site visit.

### Diagram

The following diagram shows the General field survey details protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3&layers=1&nav=1&title=targeted-survey-general-field-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3&layers=1&nav=1&title=targeted-survey-general-field-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1e7Wtip-yW2pQNelOaW6oDbmP9TI5l6A3%26export%3Ddownload">View diagram in new tab.</a>

### Survey data from targeted survey - General field survey details protocol:

The following is dummy data:

```json
{
  "start_date": "2023-04-11T06:03:58.525Z",
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

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/visit/1> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

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

The `precipitation` key maps to a `tern:Observation` with the observable property 'weather- site precipitation'.

#### `precipitation_duration`

The `precipitation_duration` key maps to a `tern:Observation` with the observable property 'weather- duration of precipitation'.

#### `wind_description`

The `wind_description` key maps to a `tern:Observation` with the observable property 'weather-site wind'.

#### `cloud_cover`

The `cloud_cover` key maps to a `tern:Observation` with the observable property 'weather- site cloud cover'.

#### `temperature`

The `temperature` key maps to a `tern:Observation` with the observable property 'weather- site temperature'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

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
        <https://example.com/observation/weather-duration-of-precipitation/1> ,
        <https://example.com/observation/weather-site-cloud-cover/1> ,
        <https://example.com/observation/weather-site-precipitation/1> ,
        <https://example.com/observation/weather-site-temperature/1> ,
        <https://example.com/observation/weather-site-wind/1> ;
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
    sosa:hasResult <https://example.com/Site/survey-area> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/33544e85-741a-4646-ba32-c820486f0a33> ;
    tern:hasAttribute [
            rdfs:label "target habitats" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ae2c88be-63d5-44d3-95ac-54b14c4a4b28> ;
            tern:hasSimpleValue "These habitats are ideal for survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "These habitats are ideal for survey."^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/climate>
    a tern:Sample ;
    rdfs:label "climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/6d40d71e-58cd-4f75-8304-40c01fe5f74c> ;
.

<https://example.com/observation/weather-duration-of-precipitation/1>
    a tern:Observation ;
    rdfs:label "weather- duration of precipitation" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Continuous" ;
            rdf:value <https://linked.data.gov.au/def/nrm/043224b6-b49b-519c-b1cf-687fd889398f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/043224b6-b49b-519c-b1cf-687fd889398f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/25d4c7b7-4cdf-4b69-8774-064055c74e23> ;
.

<https://example.com/observation/weather-site-cloud-cover/1>
    a tern:Observation ;
    rdfs:label "weather- site cloud cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Partly Cloudy" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1fe9c3c7-c3aa-5378-80f4-871b04bc7973>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1fe9c3c7-c3aa-5378-80f4-871b04bc7973> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/111a2971-f7c3-4d9d-b079-d9afa0bcc8b0> ;
.

<https://example.com/observation/weather-site-precipitation/1>
    a tern:Observation ;
    rdfs:label "weather- site precipitation" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "None observed" ;
            rdf:value <https://linked.data.gov.au/def/nrm/155cb54c-14b9-5c7b-a87d-217f3b21728d>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/155cb54c-14b9-5c7b-a87d-217f3b21728d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b7e7f67b-d983-4167-baca-57cab6dd89a2> ;
.

<https://example.com/observation/weather-site-temperature/1>
    a tern:Observation ;
    rdfs:label "weather- site temperature" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Hot" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0077545f-6f5f-5927-a199-c32aa4f7b5cb>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0077545f-6f5f-5927-a199-c32aa4f7b5cb> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a30248c3-33ce-4ffe-8130-7b03aa4e5322> ;
.

<https://example.com/observation/weather-site-wind/1>
    a tern:Observation ;
    rdfs:label "weather-site wind" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Strong gale" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1e01961c-4b0c-58a5-89b9-65b23541404a>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1e01961c-4b0c-58a5-89b9-65b23541404a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e8f03cc8-33a3-4c2f-9a0d-95a40c34523d> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasAttribute
        [
            rdfs:label "survey objectives" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6546ac62-85a4-4d00-a72e-79bbd03d13ac> ;
            tern:hasSimpleValue "Set up the survey area."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Set up the survey area."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "survey design and justification" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d1d58bb4-6da2-4ab7-b9c8-999330fc8a9b> ;
            tern:hasSimpleValue "Designed by experienced observers."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Designed by experienced observers."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "survey observers and experience" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e3ff756d-7363-4bd1-8d8f-fd95cd941d97> ;
            tern:hasSimpleValue "Experienced."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Experienced."^^xsd:string
                ]
        ] ;
    tern:hasSite <https://example.com/Site/survey-area> ;
.

<https://example.com/Site/survey-area>
    a tern:Site ;
    rdfs:label "survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
.

```

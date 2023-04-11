---
sidebar_position: 2
---

# Malaise trapping protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Malaise trapping protocol](https://linked.data.gov.au/def/nrm/4a2c4309-da43-4ad4-b1eb-637d2e70580d) protocol.

Mentions of observable properties should refer to [malaise-trapping/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/invertebrate/malaise-trapping/overview) for the feature type and value type information.

## Conceptual modelling

The Malaise trapping protocol records data about the site for the following feature types:

- climate

These observations are recorded for each site during a site visit.

The focus of this protocol is the field collection of bulk invertebrate samples preserved for long-term storage and future DNA analysis.

### Diagram

The following diagram shows the Malaise trapping protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1BSFAClQ4b9gLg6fAm9B1mBd4cwGjdD5A&layers=1&nav=1&title=invertebrate-fauna-malaise-trapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1BSFAClQ4b9gLg6fAm9B1mBd4cwGjdD5A%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1BSFAClQ4b9gLg6fAm9B1mBd4cwGjdD5A&layers=1&nav=1&title=invertebrate-fauna-malaise-trapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1BSFAClQ4b9gLg6fAm9B1mBd4cwGjdD5A%26export%3Ddownload">View diagram in new tab.</a>

1. Survey data from invertebrate malaise samples:

- [OpenAPI docs for invertebrate malaise samples](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-malaise-sample/post%2Finvertebrate-malaise-samples)

```json
{
  "sample_collection_date": "2023-04-11T03:59:03.820Z",
  "voucher_type": "LP",
  "trap_preservative": "DS",
  "undiluted_preservative": true,
  "preservative_concentration": 100,
  "replace_collection_bottle": true,
  "empty_filter_weight": 0,
  "filter_weight_with_sample": 0,
  "sample_biomass": 0,
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

#### `sample_collection_date`

The `sample_collection_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/fauna-vouchering-and-trap-removal/456> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher collection type` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/fauna-voucher-specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher collection type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/504237df-028c-4e4d-8e01-b5c44f7d8d50> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/32639aa6-c07b-5de0-95d9-4ea7d3792c06> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Liquid Preservation" ;
            rdf:value <https://linked.data.gov.au/def/nrm/32639aa6-c07b-5de0-95d9-4ea7d3792c06> ;
        ] ;
    ] ;
.
```

#### `trap_preservative` and `undiluted_preservative`

These 2 keys map to the attribute `trap preservative type` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/fauna-voucher-specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "trap preservative type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1ab7fdbb-e597-4aa6-bf55-fb5cb5f7c394> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/9bedf3eb-b24f-57bd-9ebd-57112f9a05df> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Undiluted propylene glycol" ;
            rdf:value <https://linked.data.gov.au/def/nrm/9bedf3eb-b24f-57bd-9ebd-57112f9a05df> ;
        ] ;
    ] ;
.
```

#### `replace_collection_bottle`

The `replace_collection_bottle` key maps to the attribute `replace collection bottle` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/fauna-voucher-specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "replace collection bottle" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/2ba9aa0e-3eb5-4f33-9ff5-4191b0a6b6c2> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

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

2. Survey data from invertebrate malaise trap:

- [OpenAPI docs for invertebrate malaise trap](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-malaise-trap/post%2Finvertebrate-malaise-traps)

```json
{
  "malaise-trapping": 0,
  "trapId": "string",
  "start_date": "2023-04-11T04:00:55.661Z",
  "direction": "S",
  "moth_excluder": true,
  "location": {
    "lat": 0,
    "lng": 0
  },
  "trap_photo": [
    {
      "photo": 0,
      "direction": "S",
      "description": "string"
    }
  ],
  "habitat_description": "string",
  "weather": {
    "precipitation": "NO",
    "precipitation_duration": "I",
    "wind_description": "C",
    "cloud_cover": "SU",
    "temperature": 0
  },
  "comment": "string",
  "duration": 0,
  "end_date": "2023-04-11T04:00:55.661Z",
  "barcode": "string",
  "sample_photo": [
    {
      "media": 0,
      "comment": "string"
    }
  ],
  "samples": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `malaise-trapping`

The `malaise-trapping` key maps to the `tern:SiteVisit` class.

#### `trapId`

The `trapId` key maps to the property `dcterms:identifier` on the `tern:Sampler` class.

##### Example

```
<https://example.com/trap/1> a tern:Sampler ;
    dcterms:identifier "trap001" .
```

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:Deployment` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/trap-set-up/456> a tern:Deployment ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `direction`

The `direction` key maps to the attribute `malaise trap head direction` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "malaise trap head direction" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/372832bd-9030-477f-b48b-83853c2d43d3> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/39fd9d7b-61d7-5ba6-b7b2-1031d82f738f> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "South" ;
            rdf:value <https://linked.data.gov.au/def/nrm/39fd9d7b-61d7-5ba6-b7b2-1031d82f738f> ;
        ] ;
    ] ;
.
```

#### `moth_excluder`

The `moth_excluder` key maps to the attribute `moth excluder use` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "moth excluder use" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1b734b70-6060-4e75-8760-1969b38b164d> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Deployment` class.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `photo` in `trap_photo`

The `photo` key maps to the property `dcterms:identifier` on the `tern:Sample` class.

##### Example

```
<https://example.com/photo/1> a tern:Sample ;
    dcterms:identifier "photo001" .
```

#### `direction` in `trap_photo`

The `direction` key maps to the attribute `photo direction` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to sample by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/photo/1> a tern:Sample ;
    tern:hasAttribute [
        rdfs:label "photo direction" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/92650dea-b8f2-4e48-bb20-95ca9aa80308> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/7dc6f7da-2913-5088-9d12-17bc3a289935> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "East" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7dc6f7da-2913-5088-9d12-17bc3a289935> ;
        ] ;
    ] ;
.
```

#### `description` in `trap_photo`

The `description` key maps to the attribute `photo description` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to sample by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/photo/1> a tern:Sample ;
    tern:hasAttribute [
        rdfs:label "photo description" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
        tern:hasSimpleValue "Direction is east."^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Direction is east."^^xsd:string ;
        ] ;
    ] ;
.
```

#### `habitat_description`

The `habitat_description` key maps to a `tern:Observation` with the observable property 'habitat description'.

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

#### `comment`

The `comment` key maps to the attribute `malaise trap comments` in [Invertebrate fauna module - Malaise trapping protocol Attributes](https://linked.data.gov.au/def/nrm/dac32537-fa2a-4a58-a1f8-70715e7e4eb4), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "malaise trap comments" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/d507600b-066e-4f0b-9afe-23c1fa0b384a> ;
        tern:hasSimpleValue "Set up in the morning."^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Set up in the morning."^^xsd:string ;
        ] ;
    ] ;
.
```

#### `end_date`

The `end_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/fauna-vouchering-and-trap-removal/456> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `duration`

The `duration` can be calculated by values of `start_date` and `end_date`.

#### `barcode`

The `barcode` key maps to the property `dcterms:identifier` on the `tern:Sampler` class.

##### Example

```
<https://example.com/trap/1> a tern:Sampler ;
    dcterms:identifier "trap001" .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

3. Survey data from invertebrate malaise trapping:

- [OpenAPI docs for invertebrate malaise trapping](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-malaise-trapping/post%2Finvertebrate-malaise-trappings)

```json
{
  "surveyId": "string",
  "plot_visit": 0,
  "observers": "string",
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

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `observers`

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Sampling` class.

##### Example

```
<https://example.com/fauna-vouchering-and-trap-removal/1> a tern:Sampling ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX ssn: <http://www.w3.org/ns/ssn/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/Deployment/trap-set-up>
    a tern:Deployment ;
    rdfs:label "trap set up" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    ssn:deployedOnPlatform <https://example.com/Site/site> ;
    ssn:deployedSystem <https://example.com/Sampler/traps> ;
    tern:hasAttribute
        [
            rdfs:label "malaise trap head direction" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/372832bd-9030-477f-b48b-83853c2d43d3> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/18d6d662-5fbf-5848-8f5a-69523188c769> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "South East" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/18d6d662-5fbf-5848-8f5a-69523188c769>
                ]
        ] ,
        [
            rdfs:label "moth excluder use" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1b734b70-6060-4e75-8760-1969b38b164d> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "malaise trap comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d507600b-066e-4f0b-9afe-23c1fa0b384a> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
.

<https://example.com/ObservationCollection/observations-on-climate>
    a tern:ObservationCollection ;
    rdfs:label "observations on climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember
        <https://example.com/observation/weather-site-cloud-cover/1> ,
        <https://example.com/observation/weather-site-precipitation/1> ,
        <https://example.com/observation/weather-site-temperature/1> ,
        <https://example.com/observation/weather-site-wind/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4a2c4309-da43-4ad4-b1eb-637d2e70580d> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/Sampling/fauna-vouchering-and-trap-removal>
    a tern:Sampling ;
    rdfs:label "fauna vouchering and trap removal" ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photo is taken." ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasResult <https://example.com/MaterialSample/fauna-voucher-specimen> ;
    sosa:madeBySampler <https://example.com/Sampler/traps> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4a2c4309-da43-4ad4-b1eb-637d2e70580d> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4a2c4309-da43-4ad4-b1eb-637d2e70580d> ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/MaterialSample/fauna-voucher-specimen> ,
        <https://example.com/Sample/habitat> ,
        <https://example.com/Sampler/traps> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4a2c4309-da43-4ad4-b1eb-637d2e70580d> ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/habitat> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Isolated clump of tussock grasses" ;
            rdf:value <https://linked.data.gov.au/def/nrm/01a85e08-b223-50e9-92d2-98d8b71d6092>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/01a85e08-b223-50e9-92d2-98d8b71d6092> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-11T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4a2c4309-da43-4ad4-b1eb-637d2e70580d> ;
.

<https://example.com/Sample/photos>
    a tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
    tern:hasAttribute
        [
            rdfs:label "photo direction" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/92650dea-b8f2-4e48-bb20-95ca9aa80308> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/18d6d662-5fbf-5848-8f5a-69523188c769> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "South East" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/18d6d662-5fbf-5848-8f5a-69523188c769>
                ]
        ] ,
        [
            rdfs:label "photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
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

<https://example.com/MaterialSample/fauna-voucher-specimen>
    a tern:MaterialSample ;
    rdfs:label "fauna voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/fauna> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute
        [
            rdfs:label "trap preservative type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1ab7fdbb-e597-4aa6-bf55-fb5cb5f7c394> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167>
                ]
        ] ,
        [
            rdfs:label "replace collection bottle" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2ba9aa0e-3eb5-4f33-9ff5-4191b0a6b6c2> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "voucher type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/318227b7-6ab5-507a-86d9-3ff8030dfb5d> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Plant Tissue Voucher" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/318227b7-6ab5-507a-86d9-3ff8030dfb5d>
                ]
        ] ;
.

<https://example.com/Sample/fauna>
    a tern:Sample ;
    rdfs:label "fauna" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/Sample/habitat>
    a tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/Sampler/traps>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ;
    rdfs:label "traps" ;
    dcterms:identifier "sampler-traps-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/4a2c4309-da43-4ad4-b1eb-637d2e70580d> ;
.

<https://example.com/Site/site>
    a tern:Site ;
    rdfs:label "site" ;
    dcterms:identifier "site-site-001" ;
    void:inDataset <https://example.com/dataset/1> ;
.

```

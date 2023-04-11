---
sidebar_position: 2
---

# Active search (hand collecting) protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Active search (hand collecting) protocol](https://linked.data.gov.au/def/nrm/e76e99ef-de1d-4387-9b2e-3455b9f9ff78) protocol.

Mentions of observable properties should refer to [active-sampling/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/invertebrate/active-sampling/overview) for the feature type and value type information.

## Conceptual modelling

The Active search (hand collecting) protocol records data about the site for the following feature types:

- climate
- habitat

These observations are recorded for each site during a site visit.

The active search protocol provides the instructions and guidelines for conducting diurnal searches and nocturnal searches for invertebrates within fauna plots, and ensures that potential disturbance through active searching techniques is minimised.

### Diagram

The following diagram shows the Active search (hand collecting) protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1af0JdQrhRLNvHBKzMH-rvugtKCvN5K4R&layers=1&nav=1&title=invertebrate-fauna-active-sampling-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1af0JdQrhRLNvHBKzMH-rvugtKCvN5K4R%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1af0JdQrhRLNvHBKzMH-rvugtKCvN5K4R&layers=1&nav=1&title=invertebrate-fauna-active-sampling-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1af0JdQrhRLNvHBKzMH-rvugtKCvN5K4R%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Active search (hand collecting) protocol` protocol surveys:

1. Survey data from active search:

- [OpenAPI docs for invertebrate active search](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-active-search/post%2Finvertebrate-active-searches)

```json
{
  "surveyId": "string",
  "plot_visit": 0,
  "search_method": "DAS",
  "observers": "string",
  "number_of_observers": 0,
  "search_time": 0,
  "weather": {
    "precipitation": "NO",
    "precipitation_duration": "I",
    "wind_description": "C",
    "cloud_cover": "SU",
    "temperature": 0
  },
  "start_time": "2023-04-11T01:00:17.903Z",
  "end_time": "2023-04-11T01:00:17.904Z",
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

#### `search_method`

The `search_method` key maps to the attribute `search method` in [Invertebrate fauna module - active sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8128a20c-e8c7-45ba-9d8d-4d3347a6c34f), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/active-search-sampling/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "search method" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/b534763f-6645-41df-bd21-9a09e907b833> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/2c803444-74a3-55ad-b452-d43a4ef5923b> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Breaking CWD" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2c803444-74a3-55ad-b452-d43a4ef5923b> ;
        ] ;
    ] ;
.
```

#### `observers`

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Sampling` class.

##### Example

```
<https://example.com/active-search-sampling/1> a tern:Sampling ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `search_time`

The `search_time` key maps to the property `prov:startedAtTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/active-sampling-sampling/456> a tern:Sampling ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
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

#### `start_time`

The `start_time` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_time`

The `end_time` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T08:16:42.783Z"^^xsd:dateTime .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

2. Survey data from active search apparatus:

- [OpenAPI docs for invertebrate active search apparatus](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-active-search-apparatus/post%2Finvertebrate-active-search-apparatuses)

```json
{
  "equipment": "SN",
  "photo": 0,
  "description": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `equipment`

The `equipment` key maps to the attribute `capture equipment used` in [Invertebrate fauna module - active sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8128a20c-e8c7-45ba-9d8d-4d3347a6c34f), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/active-search-sampling/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "capture equipment used" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/cc3fe6fd-64cd-44a5-ba22-ec0115d6f648> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/6fe403bc-2b69-5893-b334-542ed689a0ca> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Aerial Net" ;
            rdf:value <https://linked.data.gov.au/def/nrm/6fe403bc-2b69-5893-b334-542ed689a0ca> ;
        ] ;
    ] ;
.
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `description`

The `description` key maps to the attribute `equipment description` in [Invertebrate fauna module - active sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8128a20c-e8c7-45ba-9d8d-4d3347a6c34f), and is linked to photos by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/photo/1> a tern:Sample ;
    tern:hasAttribute [
        rdfs:label "equipment description" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1d5c78e5-76ef-4ac5-b1f0-b92d7978a979> ;
        tern:hasSimpleValue "Aerial Net used"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Aerial Net used"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

3. Survey data from active search photo:

- [OpenAPI docs for invertebrate active search photo](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-active-search-photo/post%2Finvertebrate-active-search-photos)

```json
{
  "photo": 0,
  "description": "string",
  "lat": 0,
  "lng": 0,
  "location_id": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `photo`

The `photo` key maps to the property `dcterms:identifier` on the `tern:Sample` class.

##### Example

```
<https://example.com/photo/1> a tern:Sample ;
    dcterms:identifier "photo001" .
```

#### `description`

The `description` key maps to the attribute `field photo description` in [Invertebrate fauna module - active sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8128a20c-e8c7-45ba-9d8d-4d3347a6c34f), and is linked to photos by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/photo/1> a tern:Sample ;
    tern:hasAttribute [
        rdfs:label "field photo description" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/d0a6c08c-bde2-4cf3-8e4d-8193f80551a8> ;
        tern:hasSimpleValue "Equipment included"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Equipment included"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `lat`, `lng`, `location_id`

These keys map to the attribute `geo:hasGeometry` on the `tern:Sampling` class.

##### Example

```turtle
<https://example.com/taking-photos/1> a tern:Sampling ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

4. Survey data from active search sample:

- [OpenAPI docs for invertebrate active search sample](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-active-search-sample/post%2Finvertebrate-active-search-samples)

```json
{
  "barcode": "string",
  "preservation_type": "DS",
  "sample_photo": 0,
  "photo_description": "string",
  "comment": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `barcode`

The `barcode` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-sample/1> a tern:MaterialSample ;
    dwc:materialSampleID "materialSample001" .
```

#### `preservation_type`

The `preservation_type` key maps to the attribute `preservation type` in [Invertebrate fauna module - active sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8128a20c-e8c7-45ba-9d8d-4d3347a6c34f), and is linked to material sample by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/fauna-sample/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "preservation type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0f16c593-df2d-462f-ab01-87b4bc0a223f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8cd2bd57-f4f0-570c-a388-68fa108bb0a1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Dried and stored" ;
            rdf:value <https://linked.data.gov.au/def/nrm/8cd2bd57-f4f0-570c-a388-68fa108bb0a1> ;
        ] ;
    ] ;
.
```

#### `sample_photo`

The `sample_photo` key maps to the property `dcterms:identifier` on the `tern:Sample` class.

##### Example

```
<https://example.com/photo/1> a tern:Sample ;
    dcterms:identifier "photo001" .
```

#### `photo_description`

The `photo_description` key maps to the attribute `photo description` in [Invertebrate fauna module - active sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8128a20c-e8c7-45ba-9d8d-4d3347a6c34f), and is linked to photos by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/photo/1> a tern:Sample ;
    tern:hasAttribute [
        rdfs:label "photo description" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
        tern:hasSimpleValue "Equipment included"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Equipment included"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `comment`

The `comment` key maps to the property `rdfs:comment` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-sample/1> a tern:MaterialSample ;
    rdfs:comment "Preservation used" .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
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
    sosa:hasMember
        <https://example.com/observation/weather-site-cloud-cover/1> ,
        <https://example.com/observation/weather-site-precipitation/1> ,
        <https://example.com/observation/weather-site-temperature/1> ,
        <https://example.com/observation/weather-site-wind/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/e76e99ef-de1d-4387-9b2e-3455b9f9ff78> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/e76e99ef-de1d-4387-9b2e-3455b9f9ff78> ;
.

<https://example.com/Sampling/searching-animals>
    a tern:Sampling ;
    rdfs:label "searching animals" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    prov:endedAtTime "2022-05-10T06:38:02"^^xsd:dateTime ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/MaterialSample/invertebrate-fauna> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/e76e99ef-de1d-4387-9b2e-3455b9f9ff78> ;
    tern:hasAttribute
        [
            rdfs:label "equipment description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1d5c78e5-76ef-4ac5-b1f0-b92d7978a979> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "methods description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/79709363-0f11-4f26-a3ad-f758daf37fa6> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "search method" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b534763f-6645-41df-bd21-9a09e907b833> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0907dd46-d0d0-510f-81e8-26159567ffd5> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Torch" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0907dd46-d0d0-510f-81e8-26159567ffd5>
                ]
        ] ,
        [
            rdfs:label "capture equipment used" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/cc3fe6fd-64cd-44a5-ba22-ec0115d6f648> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/141f3bb7-4d75-58b4-b8ad-677957847a03> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Sweep Net" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/141f3bb7-4d75-58b4-b8ad-677957847a03>
                ]
        ] ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/MaterialSample/invertebrate-fauna> ,
        <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/e76e99ef-de1d-4387-9b2e-3455b9f9ff78> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/e76e99ef-de1d-4387-9b2e-3455b9f9ff78> ;
.

<https://example.com/Sample/photos>
    a tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
    tern:hasAttribute [
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

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute [
            rdfs:label "search type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/68d5a41b-ed4e-4fb6-8d18-ff9c24970c9e> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/68e75fc3-c72f-5c32-bf75-1cce6494c519> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Nocturnal" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/68e75fc3-c72f-5c32-bf75-1cce6494c519>
                ]
        ] ;
    tern:hasSite <https://example.com/Site/site> ;
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

<https://example.com/MaterialSample/invertebrate-fauna>
    a tern:MaterialSample ;
    rdfs:label "invertebrate fauna" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "materialsample-invertebrate-fauna-001" ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:hasAttribute [
            rdfs:label "preservation type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0f16c593-df2d-462f-ab01-87b4bc0a223f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167>
                ]
        ] ;
.

<https://example.com/Sample/habitat>
    a tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/Site/site>
    a tern:Site ;
    rdfs:label "site" ;
    dcterms:identifier "site-site-001" ;
    void:inDataset <https://example.com/dataset/1> ;
.

```

---
sidebar_position: 2
---

# Soil Bulk Density mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Soil bulk density protocol](https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/soil-bulk-density-submodule/overview) for the feature type and value type information.

## Conceptual modelling

The Soil bulk density module records data about the site for the following feature types:

- soil specimen

These observations are recorded for each site during a site visit.

Collection of soil core samples at 0–10, 10–20, and 20–30 cm increments from the edge of the soil pit, sealing the core samples or storing them in zip lock bags, and post-field survey processing of soil core samples. Soil bulk density measures are collected so important soil parameters can be quantified, particularly carbon content.

### Diagram

The following diagram shows the Soil bulk density protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa&layers=1&nav=1&title=soil-soil-bulk-density-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa&layers=1&nav=1&title=soil-soil-bulk-density-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Soil bulk density` protocol surveys:

- [OpenAPI docs for soil bulk density survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-bulk-density-survey/post%2Fsoil-bulk-density-surveys)

```json
{
  "surveyId": "string",
  "start_date_time": "2023-01-24T00:12:29.945Z",
  "end_date_time": "2023-01-24T00:12:29.945Z",
  "plot_visit": 0,
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

#### `start_date_time`

The `start_date_time` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date_time`

The `end_date_time` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Soil bulk density measurements

- [OpenAPI docs for soil bulk density](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-bulk-density-survey/post%2Fsoil-bulk-density-surveys)

```json
{
  "surveyId": "string",
  "start_date_time": "2023-01-13T06:30:21.614Z",
  "end_date_time": "2023-01-13T06:30:21.614Z",
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `start_date_time`

The `start_date_time` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date_time`

The `end_date_time` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix schema: <https://schema.org/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix tern-loc: <https://w3id.org/tern/ontologies/loc/> .
@prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix dwc: <http://rs.tdwg.org/dwc/terms/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix geo: <http://www.opengis.net/ont/geosparql#> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .

<https://example.com/site/1>
    a tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    dcterms:identifier "site001"^^xsd:string ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    tern:locationDescription "The weather is sunny."^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSite <https://example.com/site/1> ;
    prov:startedAtTime "2022-11-06T03:16:42.783Z" ;
    prov:endedAtTime "2022-11-06T03:18:42.783Z" ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "soil specimen 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/d738a3f9-9b00-4adf-9dc8-0577269b691d> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat "-30.920855"^^xsd:double ;
        wgs84:long "152.242414"^^xsd:double ;
    ] ;
    sosa:hasMember <https://example.com/observation/fine-earth-bulk-density/1> ,
        <https://example.com/observation/gross-bulk-density/1> ,
        <https://example.com/observation/soil-bulk-density/1> ;
.

<https://example.com/observation/fine-earth-bulk-density/1>
    a tern:Observation ;
    rdfs:label "fine earth bulk density" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "1.56"^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/GM-PER-CentiM3>
        ] ;
    sosa:hasSimpleResult "1.56"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/460784be-8ad5-4c32-b171-93d69984c0b9> ;
.

<https://example.com/observation/gross-bulk-density/1>
    a tern:Observation ;
    rdfs:label "gross bulk density" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "1.56"^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/GM-PER-CentiM3>
        ] ;
    sosa:hasSimpleResult "1.56"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a344d029-4b47-455e-89d9-a1040877a5ce> ;
.

<https://example.com/observation/soil-bulk-density/1>
    a tern:Observation ;
    rdfs:label "soil bulk density" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "1.56"^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/GM-PER-CentiM3>
        ] ;
    sosa:hasSimpleResult "1.56"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ec510708-9ac1-4c8a-bfe2-31ba5bb693da> ;
.

```

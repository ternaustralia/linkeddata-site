---
sidebar_position: 2
---

# Floristics full and lite protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Floristics](https://linked.data.gov.au/def/nrm/2b5c2281-e0f4-4ef5-8ae0-8ae745af9a7e) protocol.

Mentions of observable properties should refer to [full-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/floristics-module/full-protocol/overview) and [lite-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/floristics-module/lite-protocol/overview) for the feature type and value type information.

## Conceptual modelling

The Floristics module records data about the site for the following feature types:

- plant occurrence

These observations are recorded for each site during a site visit.

Specimens will be collected for each flora species present within the plot, and each specimen has an identifier. If required, photos will be taken of the specimen or an individual, and each photo has an identifier. Record the second `growth form` if there is one for a species.

### Diagram

The following diagram show the floristics mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=floristics-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1a0ZGzEnetJHZDp6pwqBHzqDNj-9rLURE%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=floristics-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1a0ZGzEnetJHZDp6pwqBHzqDNj-9rLURE%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Floristics` protocol surveys:

- [OpenAPI docs for floristics - full](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-survey-full/post%2Ffloristics-veg-survey-fulls)
- [OpenAPI docs for floristics - lite](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-survey-lite/post%2Ffloristics-veg-survey-lites)

Survey data from floristics:

```json
{
  "surveyId": "string",
  "start_date_time": "2022-12-13T08:12:53.326Z",
  "end_date_time": "2022-12-13T08:12:53.326Z",
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

### Mapping full and lite measurements

- [OpenAPI docs for full measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-voucher-full/post%2Ffloristics-veg-voucher-fulls)
- [OpenAPI docs for lite measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-voucher-lite/post%2Ffloristics-veg-voucher-lites)

```json
{
  "field_name": "string",
  "voucher_barcode": "string",
  "growth_form_1": "V",
  "growth_form_2": "V",
  "floristics_veg_survey_full": 0,
  "photos": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. Since majority of the properties on these observations share the same values (feature of interest, site visit, result and phenomenon time) they can be recorded as observation members of an observation collection.

The feature of interest for all the observations is plant occurrence modelled as a `tern:Sample` with the feature type as 'plant occurrence'.

#### `field_name`

The `field_name` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `voucher_barcode`

The `voucher_barcode` key maps to the property `dwc:materialSampleID` in `tern:MaterialSample` class. It is the identifier of specimen collected during `tern:Sampling` 'plant tissue vouchering'.

##### Example

```turtle
<https://example.com/site/1/plant-tissue-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "flora vouchering specimen 1" ;
    dwc:materialSampleID "materialSample1" ;
.
```

#### `growth_form_1` & `growth_form_2`

The `growth_form_1` and `growth_form_2` map to a `tern:Observation` with the observable property 'growth form'.

#### `floristics_veg_survey_full`

The `floristics_veg_survey_full` is protocol selection in the app, not mapping to TERN Ontology.

#### `photos`

The `photos` key maps to photos(`tern:Sample`) taken during 'taking photos'(`tern:Sampling`) for specimen(`tern:MaterialSample`) and individual(`tern:Sample`). Each photo has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
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
    tern:hasAttribute [
        rdfs:label "plot name" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
        tern:hasSimpleValue "The Jones Stream Study Plot" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The Jones Stream Study Plot" ;
        ] ;
    ] ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "site001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z" ;
    prov:endedAtTime "2022-11-02T03:18:42.783Z" ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/35175f0d-bdd7-4e32-908f-17f7239e78fa> ;
    sosa:hasMember <https://example.com/observation/field-species-name/1>,
        <https://example.com/observation/growth-form/1>,
        <https://example.com/observation/growth-form/2> ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Pine" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Pine" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5b669769-cfda-5e2f-a311-acc06cd1ff02> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Fern" ;
            rdf:value <https://linked.data.gov.au/def/nrm/5b669769-cfda-5e2f-a311-acc06cd1ff02> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
.

<https://example.com/observation/growth-form/2>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/8f4fd07c-a8a8-5e6f-81b3-4506a6a2d629> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Forb" ;
            rdf:value <https://linked.data.gov.au/def/nrm/8f4fd07c-a8a8-5e6f-81b3-4506a6a2d629> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
.

<https://example.com/plant-tissue-vouchering/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/35175f0d-bdd7-4e32-908f-17f7239e78fa> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T05:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/site/1> ;
.

<https://example.com/site/1/plant-tissue-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "flora vouchering specimen 1" ;
    sosa:isResultOf <https://example.com/plant-tissue-vouchering/1> ;
    dwc:materialSampleID "materialSample1" ;
    sosa:isSampleOf <https://example.com/feature-of-interest/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2e122e23-881c-43fa-a921-a8745f016ceb> ;
.

<https://example.com/site/1/image/1/sampling> a tern:Sampling ;
    rdfs:label "taking photos" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1/plant-tissue-vouchering/specimen/1> , <https://example.com/feature-of-interest/1> ;
    sosa:resultTime "2021-11-11T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/35175f0d-bdd7-4e32-908f-17f7239e78fa> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/image/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:madeBySampler [
        a tern:Sampler ;
        rdfs:label "Canon EOS 550D DSLR cropped sensor camera" ;
        tern:samplerType <http://linked.data.gov.au/def/tern-cv/11e03f36-7ada-4333-88e2-38c9205f2749> ;
        void:inDataset <https://example.com/dataset/1> ;
        tern:hasAttribute [
            a tern:Attribute ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute "focal length" ;
            tern:hasSimpleValue 24 ;
            tern:hasValue [
                a tern:Integer ;
                rdf:value 24 ;
                tern:unit <http://qudt.org/vocab/unit/MilliM> ;
            ]
        ] ;
    ] ;
.

<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
    sosa:isResultOf <https://example.com/site/1/image/1/sampling> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
.

```

---
sidebar_position: 2
---

# Soil Sub-site Samples protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Soil sub-site samples protocol](https://linked.data.gov.au/def/nrm/e3ad3e5b-7c1c-4b59-bdb1-297f707d2ca3) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/soil-subsite-sampling/overview) for the feature type and value type information.

## Conceptual modelling

The Soil sub-site samples module records data about the site for the following feature types:

- soil horizon
- soil specimen

These observations are recorded for each site during a site visit.

If a depth of 30 cm cannot be achieved after three attempts, record what digging was Stopped by and sample down to the depth achieved.

Record if the horizon is ‘Typical’ or ‘Atypical’ of the 1 m+ soil pit observations. If it is atypical, record Atypicality comments.

### Diagram

The following diagram shows the Soil sub-site samples protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3&layers=1&nav=1&title=soil-soil-sub-site-sampling-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3&layers=1&nav=1&title=soil-soil-sub-site-sampling-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Soil sub-site samples measurements

- [OpenAPI docs for Soil sub-site samples](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-sub-site-samples-survey/post%2Fsoil-sub-site-samples-surveys)

```json
{
  "start_date": "2023-01-13T07:33:12.271Z",
  "end_date": "2023-01-13T07:33:12.271Z",
  "microhabitat_photo": [0],
  "soil_pit_depth": 0,
  "digging_stopped_by": "N/A",
  "soil_pit_photo": [0],
  "soil_horizon_observations": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

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

#### `microhabitat_photo` and `soil_pit_photo`

These 2 keys map to photos(`tern:Sample`) taken during 'taking photos'(`tern:Sampling`) for observations on site. Each photo has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `soil_pit_depth`

The `soil_pit_depth` key maps to a `tern:Observation` with the observable property 'soil pit depth'.

#### `digging_stopped_by`

The `digging_stopped_by` key maps to the attribute `digging stopped by` in [Soil module - Soil subsite sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8981bb19-3158-48ed-9a91-aae67e358256), and is linked to `tern:Observation` by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "digging stopped by" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5cb6df41-5411-44b7-b70f-0209ee91cf06> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/58a3e45d-694a-5959-80ff-74c352ed3e7a> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Gravel" ;
            rdf:value <https://linked.data.gov.au/def/nrm/58a3e45d-694a-5959-80ff-74c352ed3e7a> ;
        ] ;
    ] ;
```

### `soil_horizon_observations`

#### The `soil_horizon_observations` key maps to the soil horizon observations in [OpenAPI docs for Soil pit characterisation](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-observation/post%2Fsoil-horizon-observations)

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
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat "-29.920860"^^xsd:double ;
        wgs84:long "151.242410"^^xsd:double ;
    ] ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    tern:locationDescription "The weather is sunny."^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "soil horizon 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/de1e18e4-6cfd-4c78-b389-a5b1dd04b899> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/2>, <https://example.com/feature-of-interest/3> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/2>
    a tern:Sample ;
    rdfs:label "1st 30 cm depth subsites in site (4 in total)" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b9a72809-6d53-4dad-bac6-bfe4dc76be31> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/3>
    a tern:Sample ;
    rdfs:label "1st 30 cm depth subsites in the SW corner of site (5 in total)" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b9a72809-6d53-4dad-bac6-bfe4dc76be31> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/4> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/4>
    a tern:Sample ;
    rdfs:label "25m x 25m sub site at the sw corner" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b9a72809-6d53-4dad-bac6-bfe4dc76be31> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/soil-sample-collection/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/eaf5a55e-e053-4818-a808-4722b1da4d17> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    tern:resultDateTime "2022-12-07T10:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/site/1/soil/specimen/1> ;
    prov:wasAssociatedWith [
        a <https://w3id.org/tern/ontologies/org/Person> ;
        schema:name "Paul Green" ;
    ] ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat "-30.920852"^^xsd:double ;
        wgs84:long "152.242405"^^xsd:double ;
    ] ;
.

<https://example.com/site/1/soil/specimen/1>
    a tern:MaterialSample ;
    rdfs:label "soil specimen 1" ;
    dwc:materialSampleID "soilSpecimen001" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/d738a3f9-9b00-4adf-9dc8-0577269b691d> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute
      [
          rdfs:label "soil sample depth - lower" ;
          tern:attribute <https://linked.data.gov.au/def/nrm/5040cfbe-eb65-4ce8-899c-f13ab841e7c3> ;
          tern:hasSimpleValue "33.81"^^xsd:float ;
          tern:hasValue [
              a tern:Float ;
              rdf:value "33.81"^^xsd:float ;
          ] ;
      ],
      [
          rdfs:label "soil sample depth - upper" ;
          tern:attribute <https://linked.data.gov.au/def/nrm/2729becc-9e41-4303-9311-ec2a506e62e5> ;
          tern:hasSimpleValue "26.01"^^xsd:float ;
          tern:hasValue [
              a tern:Float ;
              rdf:value "26.01"^^xsd:float ;
          ] ;
      ] ;
.

<https://example.com/establishing-the-sw-corner-of-the-plot/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/eaf5a55e-e053-4818-a808-4722b1da4d17> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    tern:resultDateTime "2022-12-10T10:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/feature-of-interest/4> ;
.

<https://example.com/locating-5-soil-sub-sites-in-the-sw-corner/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/eaf5a55e-e053-4818-a808-4722b1da4d17> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    tern:resultDateTime "2022-12-10T11:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/feature-of-interest/3> ;
    tern:hasAttribute [
        rdfs:label "type of soil observation" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/dcebbffe-bd0b-461f-8b6d-cc43a64248b6> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/87e0e0a3-b7f5-573e-ace6-0dc0d0e4f6a2> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Soil pit" ;
            rdf:value <https://linked.data.gov.au/def/nrm/87e0e0a3-b7f5-573e-ace6-0dc0d0e4f6a2> ;
        ] ;
    ] ;
.

<https://example.com/locating-4-soil-sub-sites-in-the-plot-excluding-the-sw-corner/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/eaf5a55e-e053-4818-a808-4722b1da4d17> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    tern:resultDateTime "2022-12-10T11:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/feature-of-interest/2> ;
    tern:hasAttribute [
        rdfs:label "type of soil observation" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/dcebbffe-bd0b-461f-8b6d-cc43a64248b6> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/87e0e0a3-b7f5-573e-ace6-0dc0d0e4f6a2> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Soil pit" ;
            rdf:value <https://linked.data.gov.au/def/nrm/87e0e0a3-b7f5-573e-ace6-0dc0d0e4f6a2> ;
        ] ;
    ] ;
.

<https://example.com/site/1/image/1/sampling> a tern:Sampling ;
    rdfs:label "taking photos" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2>, <https://example.com/feature-of-interest/3> ;
    sosa:resultTime "2022-12-11T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/eaf5a55e-e053-4818-a808-4722b1da4d17> ;
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

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil subsite" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2>, <https://example.com/feature-of-interest/3> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-12-12T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-12-12T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/eaf5a55e-e053-4818-a808-4722b1da4d17> ;
    sosa:hasMember <https://example.com/observation/soil-pit-depth/1>,
        <https://example.com/observation/soil-sub-site-microhabitat/1> ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil horizon" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-12-12T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-12-12T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/eaf5a55e-e053-4818-a808-4722b1da4d17> ;
    sosa:hasMember <https://example.com/observation/horizon-boundary-distinctness/1> ,
        <https://example.com/observation/horizon-boundary-shape/1> ,
        <https://example.com/observation/soil-horizon-depth-lower/1> ,
        <https://example.com/observation/soil-horizon-depth-upper/1> ,
        <https://example.com/observation/soil-horizon-suffix/1> ,
        <https://example.com/observation/soil-horizon-typical/1> ,
        <https://example.com/observation/soil-horizon/1> ;
.

<https://example.com/observation/horizon-boundary-distinctness/1>
    a tern:Observation ;
    rdfs:label "horizon boundary distinctness" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Clear (20-50mm)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/09d19fbc-263b-5363-80cb-020a6fa6d721>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/09d19fbc-263b-5363-80cb-020a6fa6d721> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/181f2d40-8cb7-4b0e-83cb-90ca77b6327f> ;
.

<https://example.com/observation/horizon-boundary-shape/1>
    a tern:Observation ;
    rdfs:label "horizon boundary shape" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Tongued" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2da7ccbc-49a7-5147-89c9-c9dc87f58dfb>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2da7ccbc-49a7-5147-89c9-c9dc87f58dfb> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ee03aeec-28ef-4910-94af-338a981bb40d> ;
.

<https://example.com/observation/soil-horizon-depth-lower/1>
    a tern:Observation ;
    rdfs:label "soil horizon depth - lower" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "33.81"^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult "33.81"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/66f227c3-6267-4068-9493-dfd909592aaf> ;
.

<https://example.com/observation/soil-horizon-depth-upper/1>
    a tern:Observation ;
    rdfs:label "soil horizon depth - upper" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "10.81"^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult "10.81"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3b693f41-50b2-4469-bdbb-3b5b877fa2a9> ;
.

<https://example.com/observation/soil-horizon-suffix/1>
    a tern:Observation ;
    rdfs:label "soil horizon suffix" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "s" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2d113077-d092-5317-a4b4-bd7385411c7f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2d113077-d092-5317-a4b4-bd7385411c7f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/224075e9-0998-4cac-95c4-babe5b63e3bf> ;
.

<https://example.com/observation/soil-horizon-typical/1>
    a tern:Observation ;
    rdfs:label "soil horizon typical" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute [
        rdfs:label "soil horizon atypicality comments" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/758dbe30-f29f-4b86-8940-a4ab2f3bb93f> ;
        tern:hasSimpleValue "There has been the excavation of sand for construction." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "There has been the excavation of sand for construction." ;
        ] ;
    ] ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Typical" ;
            rdf:value <https://linked.data.gov.au/def/nrm/cc38d5d7-93c3-5f14-8ff2-fde502a0ca80>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/cc38d5d7-93c3-5f14-8ff2-fde502a0ca80> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7b17107e-b722-4777-8164-33a56c53ec8d> ;
.

<https://example.com/observation/soil-horizon/1>
    a tern:Observation ;
    rdfs:label "soil horizon" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "A" ;
            rdf:value <https://linked.data.gov.au/def/nrm/06d28ee7-3dbc-505a-981b-2c4df4b55a42>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/06d28ee7-3dbc-505a-981b-2c4df4b55a42> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7761c9df-0ce5-4de6-9c92-f1a8965b9481> ;
.

<https://example.com/observation/soil-pit-depth/1>
    a tern:Observation ;
    rdfs:label "soil pit depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute [
        rdfs:label "digging stopped by" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5cb6df41-5411-44b7-b70f-0209ee91cf06> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/199e72de-f835-5eea-b0cb-f7b13c2e3d0b> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Hard pan" ;
            rdf:value <https://linked.data.gov.au/def/nrm/199e72de-f835-5eea-b0cb-f7b13c2e3d0b> ;
        ] ;
    ] ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "33.81"^^xsd:float ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult "33.81"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cc960a7d-33a1-446a-85dc-8d1f8fda9996> ;
.

<https://example.com/observation/soil-sub-site-microhabitat/1>
    a tern:Observation ;
    rdfs:label "soil sub-site microhabitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "A small stream that runs through the woods."^^xsd:string
        ] ;
    sosa:hasSimpleResult "A small stream that runs through the woods."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/eb69a524-0aa1-4166-a596-d43dbe5ae08f> ;
.

```

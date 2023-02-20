---
sidebar_position: 2
---

# Active and passive searching protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Active and passive searching protocol](https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24) protocol.

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
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/03f54727-57c0-593f-849c-f56319c5660e> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "OB" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/03f54727-57c0-593f-849c-f56319c5660e>
                ]
        ] ,
        [
            rdfs:label "observation notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "The are both males and females."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
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
    rdfs:comment "Photo is taken." ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-population> ;
    sosa:hasResult <https://example.com/MaterialSample/fauna-voucher-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:hasAttribute [
            rdfs:label "search method" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b534763f-6645-41df-bd21-9a09e907b833> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0907dd46-d0d0-510f-81e8-26159567ffd5> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Torch" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0907dd46-d0d0-510f-81e8-26159567ffd5>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/MaterialSample/fauna-voucher-specimen> ,
        <https://example.com/Sample/animal-population> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/37ed2dbb-b990-430c-9010-d0452588cf24> ;
    tern:resultDateTime "2022-05-10T10:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/climate>
    a tern:Sample ;
    rdfs:label "climate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/6d40d71e-58cd-4f75-8304-40c01fe5f74c> ;
.

<https://example.com/Sample/photos>
    a tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
.

<https://example.com/observation/age-class/1>
    a tern:Observation ;
    rdfs:label "age class" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Adult" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2befa1d5-33f2-5bc1-bc4c-0609b8dad9b9>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2befa1d5-33f2-5bc1-bc4c-0609b8dad9b9> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/59df7c05-1521-4161-86e4-8e6a8feb4002> ;
.

<https://example.com/observation/fauna-behaviour/1>
    a tern:Observation ;
    rdfs:label "fauna behaviour" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Roosting" ;
            rdf:value <https://linked.data.gov.au/def/nrm/61094d53-8c8c-57d1-ab0a-ba2578a368c1>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/61094d53-8c8c-57d1-ab0a-ba2578a368c1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dfaf2438-6019-4632-85d8-0efc91930768> ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "Snake."^^xsd:string
        ] ;
    sosa:hasSimpleResult "Snake."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    tern:hasAttribute
        [
            rdfs:label "source of identification" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0e2ceb33-f68e-51fa-804f-76b564c7bd2e> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Expert (museum/herbarium)" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0e2ceb33-f68e-51fa-804f-76b564c7bd2e>
                ]
        ] ,
        [
            rdfs:label "is confident" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/adb8ec51-3f23-448b-9c80-3e8f2e4bb584> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ;
.

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
                    tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/e00fa8eb-1f72-58c5-9f2d-6e5301319d5a> ;
                    tern:hasValue [
                            a tern:IRI ;
                            rdfs:label "Exact" ;
                            rdf:value <https://linked.data.gov.au/def/nrm/e00fa8eb-1f72-58c5-9f2d-6e5301319d5a>
                        ]
                ]
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
.

<https://example.com/observation/reproductive-status/1>
    a tern:Observation ;
    rdfs:label "reproductive status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Nesting" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1cb9886b-fd8e-53ae-bab8-a219472a6850>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1cb9886b-fd8e-53ae-bab8-a219472a6850> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e8659dca-7861-407f-b405-55576ddcc276> ;
.

<https://example.com/observation/sex/1>
    a tern:Observation ;
    rdfs:label "sex" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "NA" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2aa05451-2566-5148-b727-276e38e326a0>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2aa05451-2566-5148-b727-276e38e326a0> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/40b39732-e10b-4c4e-968b-3404663a094d> ;
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
    sosa:isSampleOf <https://example.com/Sample/animal-population> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute
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
        ] ,
        [
            rdfs:label "condition of specimen" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7f58d26c-a851-4cc4-a278-0d057808d4f7> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0acf0ade-05e1-515d-a8c6-ba747e0d4e20> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Fresh (estimate 24 houts - <48 hours)" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0acf0ade-05e1-515d-a8c6-ba747e0d4e20>
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
                    a tern:Integer ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "equipment used" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/de6821ec-e2aa-4b12-8c8e-57251bec1b9d> ;
            tern:hasSimpleValue "Camera traps are used."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Camera traps are used."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "methods description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/79709363-0f11-4f26-a3ad-f758daf37fa6> ;
            tern:hasSimpleValue "The method is active search."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The method is active search."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "survey duration" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e06e4787-8bd3-4ee5-acb2-1457b1fa71ad> ;
            tern:hasSimpleValue "60 minutes."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "60 minutes."^^xsd:string
                ]
        ] ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/Sample/animal-population>
    a tern:Sample ;
    rdfs:label "animal population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8a68b4a9-167b-40f0-9222-293a2d20ffee> ;
.

<https://example.com/Site/site>
    a tern:Site ;
    rdfs:label "site" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
.

```

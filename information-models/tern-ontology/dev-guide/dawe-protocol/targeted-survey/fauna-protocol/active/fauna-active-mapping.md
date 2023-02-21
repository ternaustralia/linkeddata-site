---
sidebar_position: 2
---

# Targeted survey - Fauna - active protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Fauna - active protocol](https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61) protocol.

Mentions of observable properties should refer to [fauna-active/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/fauna-protocol/active/overview) for the feature type and value type information.

## Conceptual modelling

The Fauna - active protocol records data about the site for the feature type:

- habitat
- animal population

These observations are recorded for each site during a site visit.

This protocol is to record survey type, survey effort and any observations of target fauna species or suitable habitat within the project area using active search.

### Diagram

The following diagram shows the Fauna - active protocol mapping. Blue nodes are things related to the sampling 'taking photos'. Green nodes are things related to the sampling 'fauna vouchering'. Red nodes are things related to the sampling 'habitat sampling'. Purple nodes are things related to the animal population feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1_GlyBqLbj6O2sOpVJWZ2I1a6z6ICRCYm&layers=1&nav=1&title=targeted-survey-fauna-active-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1_GlyBqLbj6O2sOpVJWZ2I1a6z6ICRCYm%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1_GlyBqLbj6O2sOpVJWZ2I1a6z6ICRCYm&layers=1&nav=1&title=targeted-survey-fauna-active-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1_GlyBqLbj6O2sOpVJWZ2I1a6z6ICRCYm%26export%3Ddownload">View diagram in new tab.</a>

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
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

<https://example.com/ObservationCollection/observations-on-fauna>
    a tern:ObservationCollection ;
    rdfs:label "observations on fauna" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasMember <https://example.com/observation/number-of-individuals/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:hasAttribute
        [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Laughing Kookaburra."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Laughing Kookaburra."^^xsd:string
            ] ;
        ] ,
        [
            rdfs:label "observation method" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a5611033-d558-46c4-94b6-cd36885aa7f1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/03f54727-57c0-593f-849c-f56319c5660e> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "OB" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/03f54727-57c0-593f-849c-f56319c5660e>
            ] ;
        ] ,
        [
            rdfs:label "behaviour observation" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d07b87f0-72f0-4476-99a6-85d9a385f1a7> ;
            tern:hasSimpleValue "Birds are flying."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Birds are flying."^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/fauna-vouchering>
    a tern:Sampling ;
    rdfs:label "fauna vouchering" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    rdfs:comment "Photo is taken." ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasResult <https://example.com/MaterialSample/fauna-voucher-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Site/survey-area> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:hasAttribute [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Laughing Kookaburra."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Laughing Kookaburra."^^xsd:string
            ] ;
        ] ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/Sample/fauna> ,
        <https://example.com/Sample/habitat> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
.

<https://example.com/MaterialSample/fauna-voucher-specimen>
    a tern:MaterialSample ;
    rdfs:label "fauna voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/fauna> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute [
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

<https://example.com/Sample/photos>
    a tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
    tern:hasAttribute [
            rdfs:label "observation photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0782780b-b137-480f-97b1-32af49d1bb5f> ;
            tern:hasSimpleValue "Photo is labelled."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Photo is labelled."^^xsd:string
                ]
        ] ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photo is taken." ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasAttribute [
            rdfs:label "fauna survey type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/fdaf6f56-def5-43bf-9f38-80e4d196446d> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3b930857-8564-5148-a219-2b89e7a5a011> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Birds" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/3b930857-8564-5148-a219-2b89e7a5a011>
                ]
        ] ;
    tern:hasSite <https://example.com/Site/survey-area> ;
.

<https://example.com/observation/number-of-individuals/1>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
.

<https://example.com/Sample/fauna>
    a tern:Sample ;
    rdfs:label "fauna" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf
        <https://example.com/Sample/habitat> ,
        <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8a68b4a9-167b-40f0-9222-293a2d20ffee> ;
.

<https://example.com/Sample/habitat>
    a tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/Site/survey-area>
    a tern:Site ;
    rdfs:label "survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
.

```

---
sidebar_position: 2
---

# Recruitment module - Age class protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Recruitment module - Age class protocol](https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f) protocol.

Mentions of observable properties should refer to [recruitment-age/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/recruitment/recruitment-age/overview) for the feature type and value type information.

## Conceptual modelling

The Recruitment module - Age class protocol records data about the site for the following feature types:

- plant individual
- plant population

These observations are recorded for each site during a site visit.

This protocol consists of 3 sub-protocols to undertake (1) growth stage and life-stage surveys at the plot level, (2) seedling and sapling counts within belt transects and (3) small trees surveys within belt transects.

### Diagram

The following diagram shows the Recruitment module - Age class protocol mapping. Blue nodes are things related to the plant individual feature type. Green nodes are things related to the plant population feature type. Purple nodes are things related to both plant individual and plant population.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO&layers=1&nav=1&title=recruitment-age-class-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO&layers=1&nav=1&title=recruitment-age-class-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1G5QIopmhPyT_dYqFvwm0Xfhe6TE679BO%26export%3Ddownload">View diagram in new tab.</a>

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
PREFIX unit: <http://qudt.org/vocab/unit/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/ObservationCollection/observations-on-plant-individual>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasMember
        <https://example.com/observation/diameter-at-breast-height-(dbh)/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/life-stage/1> ,
        <https://example.com/observation/plant-height/1> ,
        <https://example.com/observation/plant-status/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/ObservationCollection/observations-on-plant-population>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
    sosa:hasMember
        <https://example.com/observation/adequate-recruitment/1> ,
        <https://example.com/observation/field-species-name/2> ,
        <https://example.com/observation/juvenile-count/1> ,
        <https://example.com/observation/life-stage/2> ,
        <https://example.com/observation/sapling-count/1> ,
        <https://example.com/observation/seedling-count/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c93922b2-3b0e-4ee1-b1ef-c9719d039f5f> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/Sample/plant-individual>
    a tern:Sample ;
    rdfs:label "plant individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
    tern:featureType "plant individual" ;
.

<https://example.com/Sample/plant-population>
    a tern:Sample ;
    rdfs:label "plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
.

<https://example.com/observation/adequate-recruitment/1>
    a tern:Observation ;
    rdfs:label "adequate recruitment" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Boolean ;
            rdf:value true
        ] ;
    sosa:hasSimpleResult true ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0f6d5b8e-4c3c-41b9-a8c0-99039718b59c> ;
.

<https://example.com/observation/diameter-at-breast-height-(dbh)/1>
    a tern:Observation ;
    rdfs:label "diameter at breast height (dbh)" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:CentiM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6e1c8b97-3655-4a22-9647-02f2c756e789> ;
    tern:hasAttribute [
            rdfs:label "point of measurement" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/9faeafe6-0d01-41aa-b38b-a6b56eda0dda> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:CentiM
                ]
        ] ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
.

<https://example.com/observation/field-species-name/2>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
.

<https://example.com/observation/juvenile-count/1>
    a tern:Observation ;
    rdfs:label "juvenile count" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a42dbbca-7dbe-469e-adfc-9012d01ff43d> ;
.

<https://example.com/observation/life-stage/1>
    a tern:Observation ;
    rdfs:label "life stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Immature Fruit" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ce3fd96d-e68d-4b14-b3fd-27690c566440> ;
.

<https://example.com/observation/life-stage/2>
    a tern:Observation ;
    rdfs:label "life stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Immature Fruit" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1dc72c77-4a4b-5cac-adbf-11f5704e3827> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ce3fd96d-e68d-4b14-b3fd-27690c566440> ;
.

<https://example.com/observation/plant-height/1>
    a tern:Observation ;
    rdfs:label "plant height" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:M
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e9da717-6c8e-4194-9385-c995d54702e4> ;
.

<https://example.com/observation/plant-status/1>
    a tern:Observation ;
    rdfs:label "plant status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Alive" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1a57c444-66a7-5746-bebc-2be757ee54c8>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1a57c444-66a7-5746-bebc-2be757ee54c8> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ddd0c631-bfdd-4b0f-88de-a5eb1a0181c6> ;
.

<https://example.com/observation/sapling-count/1>
    a tern:Observation ;
    rdfs:label "sapling count" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0f342ac9-800a-4298-a148-ffc953ecd393> ;
.

<https://example.com/observation/seedling-count/1>
    a tern:Observation ;
    rdfs:label "seedling count" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b6a5d847-0698-4cce-8a5e-f2719e142208> ;
.

<https://example.com/Site/site>
    a tern:Site ;
    rdfs:label "site" ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    dcterms:identifier "sitevisit-site-visit-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-05-10T06:38:02"^^xsd:dateTime ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/Transect/transect>
    a tern:Transect ;
    rdfs:label "transect" ;
    dcterms:identifier "transect-transect-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:transectDirection "West" ;
.

```

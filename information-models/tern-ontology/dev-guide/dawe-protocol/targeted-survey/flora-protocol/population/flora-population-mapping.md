---
sidebar_position: 2
---

# Targeted survey - Flora - population protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Flora - population protocol](https://linked.data.gov.au/def/nrm/9f951d93-7b0a-4f63-9f8c-d63b89718faf) protocol.

Mentions of observable properties should refer to [flora-population/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/flora-protocol/population/overview) for the feature type and value type information.

## Conceptual modelling

The Flora - population protocol records data about the site for the feature type:

- habitat
- plant population

These observations are recorded for each site during a site visit.

This protocol is to record survey effort and any populations or suitable habitat within the project area.

### Diagram

The following diagram shows the Flora - population protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G138fG0xrNVtlt6crJ6JVeprQes7kvQEq0&layers=1&nav=1&title=targeted-survey-flora-population-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D138fG0xrNVtlt6crJ6JVeprQes7kvQEq0%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G138fG0xrNVtlt6crJ6JVeprQes7kvQEq0&layers=1&nav=1&title=targeted-survey-flora-population-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D138fG0xrNVtlt6crJ6JVeprQes7kvQEq0%26export%3Ddownload">View diagram in new tab.</a>

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

<https://example.com/ObservationCollection/observations-on-flora>
    a tern:ObservationCollection ;
    rdfs:label "observations on flora" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/flora> ;
    sosa:hasMember
        <https://example.com/observation/growth-form/1> ,
        <https://example.com/observation/growth-stage/1> ,
        <https://example.com/observation/life-stage/1> ,
        <https://example.com/observation/number-of-individuals/1> ,
        <https://example.com/observation/vegetation-health/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/9f951d93-7b0a-4f63-9f8c-d63b89718faf> ;
    tern:hasAttribute
        [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Oak."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Oak."^^xsd:string ;
            ] ;
        ] ,
        [
            rdfs:label "observation notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "On group of plants."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "On group of plants."^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/survey-area> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/9f951d93-7b0a-4f63-9f8c-d63b89718faf> ;
    tern:hasAttribute [
        rdfs:label "target species" ;
        void:inDataset <https://example.com/dataset/1> ;
        tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
        tern:hasSimpleValue "Oak."^^xsd:string ;
        tern:hasValue [
                a tern:Text ;
                rdf:value "Oak."^^xsd:string ;
        ] ;
    ] ;
.

<https://example.com/Sampling/plant-vouchering>
    a tern:Sampling ;
    rdfs:label "plant vouchering" ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photo is taken." ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/flora> ;
    sosa:hasResult <https://example.com/MaterialSample/flora-voucher-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/9f951d93-7b0a-4f63-9f8c-d63b89718faf> ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/Sample/flora> ,
        <https://example.com/Sample/habitat> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/9f951d93-7b0a-4f63-9f8c-d63b89718faf> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/9f951d93-7b0a-4f63-9f8c-d63b89718faf> ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/MaterialSample/flora-voucher-specimen>
    a tern:MaterialSample ;
    rdfs:label "flora voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/flora> ;
    tern:featureType "plant specimen" ;
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
            rdfs:label "photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
            tern:hasSimpleValue "For oak."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "For oak."^^xsd:string
                ]
        ] ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    rdfs:comment "Photo is taken." ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasSite <https://example.com/Site/survey-area> ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Grass-tree" ;
            rdf:value <https://linked.data.gov.au/def/nrm/062132e9-426e-56c8-9c92-2781692bdd0c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/062132e9-426e-56c8-9c92-2781692bdd0c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
.

<https://example.com/observation/growth-stage/1>
    a tern:Observation ;
    rdfs:label "growth stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Dead" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1215ec81-a8a8-5100-b846-c50931e6fa27>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1215ec81-a8a8-5100-b846-c50931e6fa27> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fcfda2f7-84f0-4c26-9f80-c051d129a094> ;
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

<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    rdfs:label "vegetation health" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Grazing" ;
            rdf:value <https://linked.data.gov.au/def/nrm/118698b1-44f4-5159-a32a-79f7fd335682>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/118698b1-44f4-5159-a32a-79f7fd335682> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7d4eaa80-0f2a-4828-886e-34cd5a4e2746> ;
.

<https://example.com/Site/survey-area>
    a tern:Site ;
    rdfs:label "survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/Sample/flora>
    a tern:Sample ;
    rdfs:label "flora" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/habitat> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
.

<https://example.com/Sample/habitat>
    a tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

```

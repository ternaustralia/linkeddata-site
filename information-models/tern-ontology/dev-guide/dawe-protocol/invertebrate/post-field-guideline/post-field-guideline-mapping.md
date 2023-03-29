---
sidebar_position: 2
---

# Post-field guidelines protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Post-field guidelines protocol](https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499) protocol.

Mentions of observable properties should refer to [post-field-guideline/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/invertebrate/post-field-guideline/overview) for the feature type and value type information.

## Conceptual modelling

The Post-field guidelines protocol records data about the site for the following feature types:

- animal specimen

This section provides general instructions and guidelines for the management of the invertebrate specimens that are collected, including how to preserve, sort, identify, count, photograph, and store them.

### Diagram

The following diagram shows the Post-field guidelines protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI&layers=1&nav=1&title=invertebrate-fauna-post-field-guidelines-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI&layers=1&nav=1&title=invertebrate-fauna-post-field-guidelines-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI%26export%3Ddownload">View diagram in new tab.</a>

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX unit: <http://qudt.org/vocab/unit/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/ObservationCollection/observations-on-animal-specimen>
    a tern:ObservationCollection ;
    rdfs:label "observations on animal specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasMember
        <https://example.com/observation/invertebrate-group/1> ,
        <https://example.com/observation/invertebrate-individual-life-stage-count/1> ,
        <https://example.com/observation/invertebrate-life-stage-average-length/1> ,
        <https://example.com/observation/invertebrate-life-stage/1> ,
        <https://example.com/observation/specimen-count/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
    tern:hasAttribute [
            rdfs:label "post field guide comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0c2f0c19-3e15-4e3c-9773-7be6fc075c1f> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
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

<https://example.com/observation/invertebrate-group/1>
    a tern:Observation ;
    rdfs:label "invertebrate group" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "IS" ;
            rdf:value <https://linked.data.gov.au/def/nrm/05165e20-e55d-5f01-8424-06e7687e5c42>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/05165e20-e55d-5f01-8424-06e7687e5c42> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/31347751-82bd-4be8-bbae-ff0d80e319b5> ;
.

<https://example.com/observation/invertebrate-individual-life-stage-count/1>
    a tern:Observation ;
    rdfs:label "invertebrate- individual life stage count" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ece0e09e-9e77-499c-b130-27d9c1d855bd> ;
.

<https://example.com/observation/invertebrate-life-stage-average-length/1>
    a tern:Observation ;
    rdfs:label "invertebrate- life stage average length" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:MilliM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f2a11bc9-cc3c-4f8f-8ded-50ab46f73818> ;
.

<https://example.com/observation/invertebrate-life-stage/1>
    a tern:Observation ;
    rdfs:label "invertebrate life stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Pupa" ;
            rdf:value <https://linked.data.gov.au/def/nrm/140b32fb-df93-552b-ad1f-ce682349c55b>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/140b32fb-df93-552b-ad1f-ce682349c55b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1f3ac845-902a-435d-a404-4b6b3ed02764> ;
.

<https://example.com/observation/specimen-count/1>
    a tern:Observation ;
    rdfs:label "specimen count" ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/50da4103-111d-4876-800f-382d5033f1b4> ;
.

<https://example.com/MaterialSample/animal-specimen>
    a tern:MaterialSample ;
    rdfs:label "animal specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "materialsample-animal-specimen-001" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute [
            rdfs:label "trap preservative type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1ab7fdbb-e597-4aa6-bf55-fb5cb5f7c394> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167>
                ]
        ] ;
.

```

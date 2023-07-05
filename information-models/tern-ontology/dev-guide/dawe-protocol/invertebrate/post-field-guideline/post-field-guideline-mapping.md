---
sidebar_position: 2
---

# Post-field guidelines protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Post-field guidelines protocol](https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499) protocol in [Invertebrate Fauna](https://linked.data.gov.au/def/nrm/0ad98270-707f-4a78-acd1-666faa2c124e) module.

Mentions of observable properties should refer to [post-field-guideline/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/invertebrate/post-field-guideline/overview) for the feature type and value type information.

## Conceptual modelling

The Post-field guidelines protocol records data about the site for the following feature types:

- animal specimen

This section provides general instructions and guidelines for the management of the invertebrate specimens that are collected, including how to preserve, sort, identify, count, photograph, and store them.

### Diagram

The following diagram shows the Post-field guidelines protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI&layers=1&nav=1&title=invertebrate-fauna-post-field-guidelines-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI&layers=1&nav=1&title=invertebrate-fauna-post-field-guidelines-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-_-iFYlAofbcbQNWfHXvrHoc2grUnqXI%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

The following dummy data:

```json
{
  "trap_photo": [0],
  "samples": {
    "sample_id": "string",
    "preservation_type": "DS"
  },
  "observation_time": "2023-04-11T06:03:58.525Z",
  "observers": "Paul Green",
  "group": "string",
  "life_stage": "string",
  "life_stage_count": "string",
  "average_length": "string",
  "count": 2,
  "exact_or_estimate": "Exact",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `trap_photo`

The `trap_photo` key maps to the `tern:Sample` class.

#### `sample_id`

The `sample_id` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/animal-specimen/1> a tern:MaterialSample ;
    dwc:materialSampleID "specimen001" .
```

#### `preservation_type`

The `preservation_type` key maps to the attribute `trap preservative type` in [Invertebrate fauna module - post-field guideline protocol Attributes](https://linked.data.gov.au/def/nrm/9d643bf1-67b0-4f7d-9e74-c2dba44678dd), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/animal-specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "trap preservative type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1ab7fdbb-e597-4aa6-bf55-fb5cb5f7c394> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Undiluted propylene glycol" ;
            rdf:value <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af> ;
        ] ;
    ] ;
.
```

#### `observation_time`

The `observation_time` key maps to the property `tern:resultDateTime` on the `tern:Observation` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/invertebrate-group/1> a tern:Observation ;
    tern:resultDateTime "2023-04-11T06:03:58.525Z"^^xsd:dateTime .
```

#### `observers`

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Observation` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/invertebrate-group/1> a tern:Observation ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `group`

The `group` key maps to a `tern:Observation` with the observable property 'invertebrate group'.

#### `life_stage`

The `life_stage` key maps to a `tern:Observation` with the observable property 'invertebrate life stage'.

#### `life_stage_count`

The `life_stage_count` key maps to a `tern:Observation` with the observable property 'invertebrate- individual life stage count'.

#### `average_length`

The `average_length` key maps to a `tern:Observation` with the observable property 'invertebrate- life stage average length'.

#### `count`

The `count` key maps to a `tern:Observation` with the observable property 'specimen count'.

#### `exact_or_estimate`

The `exact_or_estimate` key maps to the attribute `count exact or estimate` in [Invertebrate fauna module - post-field guideline protocol Attributes](https://linked.data.gov.au/def/nrm/9d643bf1-67b0-4f7d-9e74-c2dba44678dd), and is linked to values by `tern:hasAttribute`.

##### Example

```turtle
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
                    tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8c1c83f2-66b1-5651-ba3c-adbbf3806433> ;
                    tern:hasValue [
                            a tern:IRI ;
                            rdfs:label "Exact" ;
                            rdf:value <https://linked.data.gov.au/def/nrm/8c1c83f2-66b1-5651-ba3c-adbbf3806433>
                        ]
                ]
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/50da4103-111d-4876-800f-382d5033f1b4> ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Invertebrate fauna - Post-field guidelines protocol` are in [Invertebrate Fauna - Post-field guidelines protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#invertebrate_fauna_post_field_guidelines_protocol_conformance_class_requirements).

Validator is [Invertebrate fauna - Post-field guidelines protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/invertebrate-fauna-post-field-guideline-protocol-shapes/shapes.ttl).

The following are examples of validating data at the project, protocol, sub-protocol, and observation levels:

### Example usage with PySHACL - project level

Save the [DCCEEW RLP shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/shapes.ttl) in a file named `dcceew-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for all DCCEEW protocols**, run the following command to validate the data:

```bash
pyshacl -s dcceew-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - protocol level

Save the [Invertebrate fauna shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/shapes.ttl) in a file named `invertebrate-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Invertebrate fauna protocol**, run the following command to validate the data:

```bash
pyshacl -s invertebrate-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Invertebrate fauna - Post-field guidelines protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/invertebrate-fauna-post-field-guideline-protocol-shapes/shapes.ttl) in a file named `invertebrate-postfield-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Invertebrate fauna - Post-field guidelines protocol**, run the following command to validate the data:

```bash
pyshacl -s invertebrate-postfield-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [specimen count shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/invertebrate-fauna-post-field-guideline-protocol-shapes/specimen-count/shapes.ttl) in a file named `specimen-count-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for specimen count in Invertebrate fauna - Post-field guidelines protocol**, run the following command to validate the data:

```bash
pyshacl -s specimen-count-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

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
PREFIX unit: <http://qudt.org/vocab/unit/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
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
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/photos>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/MaterialSample/animal-specimen> ;
    tern:featureType <https://example.com/non-created-feature-type/photos/1> ;
    tern:hasAttribute [
            rdfs:label "photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
.

<https://example.com/animals/1>
    a tern:FeatureOfInterest ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
.

<https://example.com/observation/invertebrate-group/1>
    a tern:Observation ;
    rdfs:label "invertebrate group" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "IS" ;
            rdf:value <https://linked.data.gov.au/def/nrm/d063a084-a879-5483-a686-00c7fdc653f0>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/d063a084-a879-5483-a686-00c7fdc653f0> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/31347751-82bd-4be8-bbae-ff0d80e319b5> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/invertebrate-individual-life-stage-count/1>
    a tern:Observation ;
    rdfs:label "invertebrate- individual life stage count" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ece0e09e-9e77-499c-b130-27d9c1d855bd> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/invertebrate-life-stage-average-length/1>
    a tern:Observation ;
    rdfs:label "invertebrate- life stage average length" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit unit:MilliM
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f2a11bc9-cc3c-4f8f-8ded-50ab46f73818> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/invertebrate-life-stage/1>
    a tern:Observation ;
    rdfs:label "invertebrate life stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Unknown" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1f3ac845-902a-435d-a404-4b6b3ed02764> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/specimen-count/1>
    a tern:Observation ;
    rdfs:label "specimen count" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2 ;
            tern:hasAttribute [
                    rdfs:label "count exact or estimate" ;
                    void:inDataset <https://example.com/dataset/1> ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/ca245b0d-b3e2-4dbc-8a72-d8cd1868a1ce> ;
                    tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/68c919a7-5759-5169-92dd-a99b6b7be407> ;
                    tern:hasValue [
                            a
                                tern:IRI ,
                                tern:Value ;
                            rdfs:label "Estimate" ;
                            rdf:value <https://linked.data.gov.au/def/nrm/68c919a7-5759-5169-92dd-a99b6b7be407>
                        ]
                ]
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/50da4103-111d-4876-800f-382d5033f1b4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/79296cab-a02f-420d-b260-17c0e8691499> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs:lat -3.092085e+01 ;
    wgs:long 1.522424e+02 ;
.

<https://example.com/MaterialSample/animal-specimen>
    a
        tern:FeatureOfInterest ,
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "animal specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "materialsample-animal-specimen-001" ;
    sosa:isSampleOf <https://example.com/animals/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute [
            rdfs:label "trap preservative type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1ab7fdbb-e597-4aa6-bf55-fb5cb5f7c394> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585>
                ]
        ] ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

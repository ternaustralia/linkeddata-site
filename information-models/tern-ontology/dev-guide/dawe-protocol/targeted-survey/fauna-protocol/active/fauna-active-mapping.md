---
sidebar_position: 2
---

# Targeted survey - Fauna - active protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Fauna - active protocol](https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61) protocol in [Targeted survey](https://linked.data.gov.au/def/nrm/420ce0a7-9364-4bf4-861c-ef5f710e31b9) module.

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

## Survey data and Observation data

The following is dummy data:

```json
{
  "lat": 0,
  "lng": 0,
  "plot_visit": 0,
  "observers": "Paul Green",
  "sample_id": "materialSample001",
  "collection_date": "2023-04-11T06:03:58.525Z",
  "voucher_type": "skin",
  "photo": [0],
  "habitat_description": "There are two habitats.",
  "count": 2,
  "target_species": "snake",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

<!-- #### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/visit/1> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
``` -->

#### `lat`, `lng`

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:ObservationCollection` or `tern:Sampling` class.

##### Example

```turtle
<https://example.com/fauna-vouchering/1> a tern:Sampling ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `observers`

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:ObservationCollection` class.

##### Example

```
<https://example.com/observation/1> a tern:Observation ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `sample_id`

The `sample_id` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-sample/1> a tern:MaterialSample ;
    dwc:materialSampleID "materialSample001" .
```

#### `collection_date`

The `collection_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/fauna-vouchering/1> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher type` in [Targeted survey module - Fauna - active protocol Attributes](https://linked.data.gov.au/def/nrm/ce60bba4-736f-4ce3-b0ae-61d083d67a05), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0be3f40a-ff52-55e9-9131-defdfbd88a52> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Animal tissue (skin)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0be3f40a-ff52-55e9-9131-defdfbd88a52> ;
        ] ;
    ] ;
.
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `habitat_description`

The `habitat_description` key maps to a `tern:Observation` with the observable property 'habitat description'.

#### `count`

The `count` key maps to a `tern:Observation` with the observable property 'number of individuals'.

#### `target_species`

The `target_species` key maps to the attribute `target species` in [Targeted survey module - Fauna protocol Attributes](https://linked.data.gov.au/def/nrm/2881bb3f-2c60-42f8-a812-b579f9f7c5e9), and is linked to sampling or observation by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/ObservationCollection/1> a tern:ObservationCollection ;
    tern:hasAttribute [
        rdfs:label "target species" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
        tern:hasSimpleValue "snake"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "snake"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Targeted survey - fauna active protocol` are in [Targeted Survey - Fauna Active protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#targeted_survey_fauna_active_protocol_conformance_class_requirements).

Validator is [Targeted survey - fauna active protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-fauna/targeted-survey-fauna-active-protocol-shapes/shapes.ttl).

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

Save the [Targeted survey shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/shapes.ttl) in a file named `targeted-survey-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Targeted survey protocol**, run the following command to validate the data:

```bash
pyshacl -s targeted-survey-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Targeted survey - fauna shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-fauna/shapes.ttl) in a file named `targeted-survey-fauna-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Targeted survey - fauna protocol**, run the following command to validate the data:

```bash
pyshacl -s targeted-survey-fauna-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol of sub protocol level

Save the [Targeted survey - fauna active shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-fauna/targeted-survey-fauna-active-protocol-shapes/shapes.ttl) in a file named `targeted-survey-fauna-active-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Targeted survey - fauna active protocol**, run the following command to validate the data:

```bash
pyshacl -s targeted-survey-fauna-active-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [number of individuals shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-fauna/targeted-survey-fauna-active-protocol-shapes/number-of-individuals/shapes.ttl) in a file named `number-of-individuals-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for number of individuals in Targeted survey - fauna active protocol**, run the following command to validate the data:

```bash
pyshacl -s number-of-individuals-shapes.ttl -m -i rdfs -a -j -f human data.ttl
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
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasMember <https://example.com/observation/number-of-individuals/1> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:hasAttribute
        [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Laughing Kookaburra."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Laughing Kookaburra."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "observation method" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a5611033-d558-46c4-94b6-cd36885aa7f1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/e8006b91-390c-557b-8945-93db9aff0b89> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "OB" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/e8006b91-390c-557b-8945-93db9aff0b89>
                ]
        ] ,
        [
            rdfs:label "behaviour observation" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d07b87f0-72f0-4476-99a6-85d9a385f1a7> ;
            tern:hasSimpleValue "Birds are flying."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
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
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
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
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
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
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Laughing Kookaburra."^^xsd:string
                ]
        ] ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/habitat> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Isolated clump of tussock grasses" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f51c20dd-6026-5b24-9f5f-a705b8d88a95>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f51c20dd-6026-5b24-9f5f-a705b8d88a95> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
.

<https://example.com/MaterialSample/fauna-voucher-specimen>
    a
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "fauna voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/fauna> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute [
            rdfs:label "voucher type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Plant Tissue Voucher" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4>
                ]
        ] ;
.

<https://example.com/Sample/photos>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <https://example.com/non-created-feature-type/photos/1> ;
    tern:hasAttribute [
            rdfs:label "observation photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0782780b-b137-480f-97b1-32af49d1bb5f> ;
            tern:hasSimpleValue "Photo is labelled."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
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
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/f4800a80-c8cf-534a-8d66-77c2e5c10960> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Birds" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/f4800a80-c8cf-534a-8d66-77c2e5c10960>
                ]
        ] ;
    tern:hasSite <https://example.com/Site/survey-area> ;
.

<https://example.com/observation/number-of-individuals/1>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4bfc4796-a02f-461f-b17d-383aad328e61> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs84:lat -3.092085e+01 ;
    wgs84:long 1.522424e+02 ;
.

<https://example.com/Sample/habitat>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/Sample/fauna>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "fauna" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf
        <https://example.com/Sample/habitat> ,
        <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8a68b4a9-167b-40f0-9222-293a2d20ffee> ;
.

<https://example.com/Site/survey-area>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

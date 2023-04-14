---
sidebar_position: 2
---

# Targeted survey - Fauna - passive protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Fauna - passive protocol](https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911) protocol.

Mentions of observable properties should refer to [fauna-passive/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/fauna-protocol/passive/overview) for the feature type and value type information.

## Conceptual modelling

The Fauna - passive protocol records data about the site for the feature type:

- traps / equipment
- animal individual

These observations are recorded for each site during a site visit.

This protocol is to record survey type, survey effort and any observations of target fauna species or suitable habitat within the project area using passive search.

### Diagram

The following diagram shows the Fauna - passive protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G192Woh31_wO_Gjs3GclheerlLq3NHKRj1&layers=1&nav=1&title=targeted-survey-fauna-passive-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D192Woh31_wO_Gjs3GclheerlLq3NHKRj1%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G192Woh31_wO_Gjs3GclheerlLq3NHKRj1&layers=1&nav=1&title=targeted-survey-fauna-passive-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D192Woh31_wO_Gjs3GclheerlLq3NHKRj1%26export%3Ddownload">View diagram in new tab.</a>

### Survey data from targeted survey - Fauna - passive protocol:

The following is dummy data:

```json
{
  "start_date": "2023-04-11T06:03:58.525Z",
  "lat": 0,
  "lng": 0,
  "plot_visit": 0,
  "observers": "Paul Green",
  "sample_id": "materialSample001",
  "voucher_type": "skin",
  "photo": [0],
  "target_species": "snake",
  "battery": "70%",
  "bait": "fish",
  "dimentions": "2 meters long and 2.5 meters high",
  "equipment": "Camera Trap",
  "microhabitat": "2 microhabitats",
  "sex": "male",
  "age": "Adult",
  "animal_length": 50,
  "animal_weight": 100,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/visit/1> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `lat`, `lng`

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:Deployment` class.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
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

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Deployment` or `tern:Sampling` class.

##### Example

```
<https://example.com/trap-set-up/1> a tern:Deployment ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `sample_id`

The `sample_id` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-sample/1> a tern:MaterialSample ;
    dwc:materialSampleID "materialSample001" .
```

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher type` in [Targeted survey module - Fauna - passive protocol Attributes](https://linked.data.gov.au/def/nrm/3789322d-6295-4efd-9c94-de60322c0ae1), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/36d484d2-05fb-548f-a939-740e4bf27fae> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Animal tissue (skin)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/36d484d2-05fb-548f-a939-740e4bf27fae> ;
        ] ;
    ] ;
.
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `target_species`

The `target_species` key maps to the attribute `target species` in [Targeted survey module - Fauna protocol Attributes](https://linked.data.gov.au/def/nrm/2881bb3f-2c60-42f8-a812-b579f9f7c5e9), and is linked to observation by `tern:hasAttribute`.

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

#### `battery`

The `battery` key maps to the attribute `battery details` in [Targeted survey module - Fauna - passive protocol Attributes](https://linked.data.gov.au/def/nrm/3789322d-6295-4efd-9c94-de60322c0ae1), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/collecting-recordings/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "battery details" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/c91869fd-09bf-4649-86f5-c62478af8287> ;
        tern:hasSimpleValue "70%"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "70%"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `bait`

The `bait` key maps to the attribute `bait` in [Targeted survey module - Fauna - passive protocol Attributes](https://linked.data.gov.au/def/nrm/3789322d-6295-4efd-9c94-de60322c0ae1), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "bait" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/908502e0-8c35-4ca9-b97a-b852fb85bfb4> ;
        tern:hasSimpleValue "fish"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "fish"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `dimensions`

The `dimensions` key maps to the attribute `equipment dimensions` in [Targeted survey module - Fauna - passive protocol Attributes](https://linked.data.gov.au/def/nrm/3789322d-6295-4efd-9c94-de60322c0ae1), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "equipment dimensions" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5921add6-57e8-4120-8f1a-6852b6854b40> ;
        tern:hasSimpleValue "2 meters long and 2.5 meters high"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "2 meters long and 2.5 meters high"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `equipment`

The `equipment` key maps to the attribute `equipment type` in [Targeted survey module - Fauna - passive protocol Attributes](https://linked.data.gov.au/def/nrm/3789322d-6295-4efd-9c94-de60322c0ae1), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "equipment type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/eb30ef87-1b96-4e16-ba53-494b9fbdd5c2> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/a44098ed-b6a8-5c37-a382-2f8baf86c2d8> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Camera Trap" ;
            rdf:value <https://linked.data.gov.au/def/nrm/a44098ed-b6a8-5c37-a382-2f8baf86c2d8> ;
        ] ;
    ] ;
.
```

#### `microhabitat`

The `microhabitat` key maps to a `tern:Observation` with the observable property 'microhabitat'.

#### `sex`

The `sex` key maps to a `tern:Observation` with the observable property 'sex'.

#### `age`

The `age` key maps to a `tern:Observation` with the observable property 'age class'.

#### `animal_length`

The `animal_length` key maps to a `tern:Observation` with the observable property 'fauna length'.

#### `animal_weight`

The `animal_weight` key maps to a `tern:Observation` with the observable property 'animal weight'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX ssn: <http://www.w3.org/ns/ssn/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX unit: <http://qudt.org/vocab/unit/>

<https://example.com/Deployment/traps-equipment-set-up>
    a tern:Deployment ;
    rdfs:label "traps equipment set up" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    rdfs:comment "Photo is taken." ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    ssn:deployedOnPlatform <https://example.com/Site/survey-area> ;
    ssn:deployedSystem <https://example.com/Sampler/traps-equipment> ;
    tern:hasAttribute
        [
            rdfs:label "bait" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/908502e0-8c35-4ca9-b97a-b852fb85bfb4> ;
            tern:hasSimpleValue "Butter."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Butter."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "equipment dimensions" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5921add6-57e8-4120-8f1a-6852b6854b40> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a tern:Integer ;
                    rdf:value 2
                ]
        ] ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
.

<https://example.com/ObservationCollection/observations-on-fauna>
    a tern:ObservationCollection ;
    rdfs:label "observations on fauna" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasMember
        <https://example.com/observation/age-class/1> ,
        <https://example.com/observation/fauna-length/1> ,
        <https://example.com/observation/fauna-weight/1> ,
        <https://example.com/observation/sex/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911> ;
    tern:hasAttribute
        [
            rdfs:label "observation notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "Both males and females."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Both males and females."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Snake."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Snake."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "observation type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0852cb79-0d48-460e-902a-e368758563d6> ;
            tern:hasSimpleValue "Trap."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Trap."^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/checking-traps-and-equipment>
    a tern:Sampling ;
    rdfs:label "checking traps and equipment" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Site/survey-area> ;
    sosa:hasResult <https://example.com/Sampler/traps-equipment> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911> ;
    tern:resultDateTime "2022-05-10T10:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/collecting-recordings>
    a tern:Sampling ;
    rdfs:label "collecting recordings" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/traps-equipment> ;
    sosa:hasResult <https://example.com/Sample/sd-card> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911> ;
    tern:hasAttribute
        [
            rdfs:label "collection notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d749942f-299d-4673-b32b-58d29d78eaf9> ;
            tern:hasSimpleValue "The recording is 3 days."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The recording is 3 days."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "battery details" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/c91869fd-09bf-4649-86f5-c62478af8287> ;
            tern:hasSimpleValue "The battery is dead."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The battery is dead."^^xsd:string
                ]
        ] ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/traps-equipment> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911> ;
.

<https://example.com/Sampling/voucher-specimen-sampling>
    a tern:Sampling ;
    rdfs:label "voucher specimen sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photo is taken." ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/fauna> ;
    sosa:hasResult <https://example.com/MaterialSample/voucher-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911> ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/microhabitat/1>
    a tern:Observation ;
    rdfs:label "microhabitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/traps-equipment> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Rock" ;
            rdf:value <https://linked.data.gov.au/def/nrm/04e42790-e9d5-569d-b716-cf00760b652b>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/04e42790-e9d5-569d-b716-cf00760b652b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6ca76175-3404-41d4-8ca7-2ade3947f00e> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-11T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911> ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/MaterialSample/voucher-specimen>
    a tern:MaterialSample ;
    rdfs:label "voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/fauna> ;
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
.

<https://example.com/Sample/sd-card>
    a tern:Sample ;
    rdfs:label "sd card" ;
    dcterms:identifier "sample-sd-card-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "sd card" ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasAttribute
        [
            rdfs:label "fauna survey type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/fdaf6f56-def5-43bf-9f38-80e4d196446d> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3b930857-8564-5148-a219-2b89e7a5a011> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Birds" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/3b930857-8564-5148-a219-2b89e7a5a011>
                ]
        ] ,
        [
            rdfs:label "survey notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/97387d96-e90c-4cf8-9268-7ed59c95738c> ;
            tern:hasSimpleValue "Using passive search."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Using passive search."^^xsd:string
                ]
        ] ;
    tern:hasSite <https://example.com/Site/survey-area> ;
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

<https://example.com/observation/fauna-length/1>
    a tern:Observation ;
    rdfs:label "fauna length" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:M
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7905c3ec-3901-4fb9-a042-b83066bee975> ;
.

<https://example.com/observation/fauna-weight/1>
    a tern:Observation ;
    rdfs:label "fauna weight" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:GM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/375a2c90-71d6-4ff4-99e4-bc033f2bb03c> ;
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

<https://example.com/Sample/fauna>
    a tern:Sample ;
    rdfs:label "fauna" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ecb855ed-50e1-4299-8491-861759ef40b7> ;
.

<https://example.com/Sampler/traps-equipment>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ;
    rdfs:label "traps equipment" ;
    dcterms:identifier "sampler-traps-equipment-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/4741800d-1b44-4805-a849-4436c80ff911> ;
    tern:featureType "traps equipment" ;
    tern:hasAttribute [
            rdfs:label "equipment type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/eb30ef87-1b96-4e16-ba53-494b9fbdd5c2> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0fc2eb92-b53d-5a27-8ef2-932dc835579f> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Pan Trap" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0fc2eb92-b53d-5a27-8ef2-932dc835579f>
                ]
        ] ;
.

<https://example.com/Site/survey-area>
    a tern:Site ;
    rdfs:label "survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
.

```

---
sidebar_position: 2
---

# Targeted survey - Flora - observation protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Flora - observation protocol](https://linked.data.gov.au/def/nrm/015efdae-93af-48c5-9564-0cde72593d59) protocol.

Mentions of observable properties should refer to [flora-observation/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/flora-protocol/observation/overview) for the feature type and value type information.

## Conceptual modelling

The Flora - observation protocol records data about the site for the feature type:

- habitat
- plant individual
- plant population

These observations are recorded for each site during a site visit.

This protocol is to record survey effort and any observations of target flora species.

### Diagram

The following diagram shows the Flora - observation protocol mapping. Orange nodes are things related to the sampling 'plant vouchering'. Red nodes are things related to the sampling 'taking photos'. Purple nodes are things related to the sampling 'habitat sampling'. Blue nodes are things related to the plant individual feature type. Yellow nodes are things related to the plant population feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1hZtM_PIbuSGyFhemdhDqmqzFqU4PxKrC&layers=1&nav=1&title=targeted-survey-flora-observation-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1hZtM_PIbuSGyFhemdhDqmqzFqU4PxKrC%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1hZtM_PIbuSGyFhemdhDqmqzFqU4PxKrC&layers=1&nav=1&title=targeted-survey-flora-observation-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1hZtM_PIbuSGyFhemdhDqmqzFqU4PxKrC%26export%3Ddownload">View diagram in new tab.</a>

### Survey data from targeted survey - Flora observation protocol:

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
  "collection_date": "2023-04-11T06:03:58.525Z",
  "photo": [0],
  "species": "snake",
  "habitat": "There are grasses aound.",
  "dbh": 50,
  "height": 100,
  "width": 30,
  "health": "Grazing",
  "growth_form": "Fern",
  "growth_stage": "Recruiting",
  "life_stage": "Seedling",
  "count": 2,
  "exact_or_estimate": "exact",
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

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://example.com/site/visit/1> a tern:SiteVisit ;
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
<https://example.com/ObservationCollection/1> a tern:ObservationCollection ;
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

The `voucher_type` key maps to the attribute `voucher type` in [Targeted survey module - Flora protocol - Observation Attributes](https://linked.data.gov.au/def/nrm/f80e7296-e386-4bb5-b8c3-3cf8823050f5), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/318227b7-6ab5-507a-86d9-3ff8030dfb5d> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Plant Tissue Voucher" ;
            rdf:value <https://linked.data.gov.au/def/nrm/318227b7-6ab5-507a-86d9-3ff8030dfb5d> ;
        ] ;
    ] ;
.
```

#### `collection_date`

The `collection_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/plant-vouchering> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `species`

The `species` key maps to the attribute `target species` in [Targeted survey module - Flora protocol Attributes](https://linked.data.gov.au/def/nrm/2a8b14a7-6685-4103-8078-2f82acb74be8), and is linked to observation or sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/ObservationCollection/1> a tern:ObservationCollection ;
    tern:hasAttribute [
        rdfs:label "target species" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
        tern:hasSimpleValue "Pine"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Pine"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `habitat`

The `habitat` key maps to a `tern:Observation` with the observable property 'habitat description'.

#### `dbh`

The `dbh` key maps to a `tern:Observation` with the observable property 'diameter at breast height (dbh)'.

#### `height`

The `height` key maps to a `tern:Observation` with the observable property 'plant height'.

#### `width`

The `width` key maps to a `tern:Observation` with the observable property 'plant size- width'.

#### `health`

The `health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

#### `growth_form`

The `growth_form` key maps to a `tern:Observation` with the observable property 'growth form'.

#### `growth_stage`

The `growth_stage` key maps to a `tern:Observation` with the observable property 'growth stage'.

#### `life_stage`

The `life_stage` key maps to a `tern:Observation` with the observable property 'life stage'.

#### `count`

The `count` key maps to a `tern:Observation` with the observable property 'number of individuals'.

#### `exact_or_estimate`

The `exact_or_estimate` key maps to the attribute `count exact or estimate` in [Targeted survey module - Flora protocol - Observation Attributes](https://linked.data.gov.au/def/nrm/f80e7296-e386-4bb5-b8c3-3cf8823050f5), and is linked to observation values by `tern:hasAttribute`.

##### Example

```turtle
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
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX unit: <http://qudt.org/vocab/unit/>

<https://example.com/ObservationCollection/observations-on-plant-individual>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasMember
        <https://example.com/observation/diameter-at-breast-height-(dbh)/1> ,
        <https://example.com/observation/plant-height/1> ,
        <https://example.com/observation/plant-size-width/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/015efdae-93af-48c5-9564-0cde72593d59> ;
    tern:hasAttribute
        [
            rdfs:label "observation notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "On a single plant."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "On a single plant."^^xsd:string ;
            ] ;
        ],
        [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Oak."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Oak."^^xsd:string ;
            ] ;
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/ObservationCollection/observations-on-plant-population>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-population> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/015efdae-93af-48c5-9564-0cde72593d59> ;
    tern:hasAttribute
        [
            rdfs:label "observation notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "On group of plants."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "On group of plants."^^xsd:string ;
            ] ;
        ],
        [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Oak."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Oak."^^xsd:string ;
            ] ;
        ] ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/survey-area> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/015efdae-93af-48c5-9564-0cde72593d59> ;
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
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-individual> ;
    sosa:hasResult <https://example.com/MaterialSample/flora-voucher-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/015efdae-93af-48c5-9564-0cde72593d59> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/Sample/habitat> ,
        <https://example.com/Sample/plant-individual> ,
        <https://example.com/Sample/plant-population> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/015efdae-93af-48c5-9564-0cde72593d59> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/015efdae-93af-48c5-9564-0cde72593d59> ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/MaterialSample/flora-voucher-specimen>
    a tern:MaterialSample ;
    rdfs:label "flora voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photo is taken." ;
    sosa:isSampleOf <https://example.com/Sample/plant-individual> ;
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
            rdfs:label "observation photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0782780b-b137-480f-97b1-32af49d1bb5f> ;
            tern:hasSimpleValue "For group of plants."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "For group of plants."^^xsd:string
                ]
        ] ;
.

<https://example.com/observation/diameter-at-breast-height-(dbh)/1>
    a tern:Observation ;
    rdfs:label "diameter at breast height (dbh)" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:M
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6e1c8b97-3655-4a22-9647-02f2c756e789> ;
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

<https://example.com/observation/plant-size-width/1>
    a tern:Observation ;
    rdfs:label "plant size- width" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:M
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9a73de99-19c7-438e-829d-c363ac86b570> ;
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

<https://example.com/Sample/habitat>
    a tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/Sample/plant-population>
    a tern:Sample ;
    rdfs:label "plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/survey-area> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
.

<https://example.com/Site/survey-area>
    a tern:Site ;
    rdfs:label "survey area" ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/Sample/plant-individual>
    a tern:Sample ;
    rdfs:label "plant individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/plant-population> ;
    tern:featureType "plant individual" ;
.

```

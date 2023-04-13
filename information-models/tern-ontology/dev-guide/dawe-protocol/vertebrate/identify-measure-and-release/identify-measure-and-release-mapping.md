---
sidebar_position: 2
---

# Identify, measure and release protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Identify, measure and release protocol](https://linked.data.gov.au/def/nrm/7942c1d3-8cfc-4d74-931d-850cacfa5a63) protocol.

Mentions of observable properties should refer to [identify-measure-and-release/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/vertebrate/identify-measure-and-release/overview) for the feature type and value type information.

## Conceptual modelling

The Identify, measure and release protocol records data about the site for the following feature types:

- animal individual

These observations are recorded for each site during a site visit.

### Diagram

The following diagram shows the Identify, measure and release protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1fXuswH2XmunmjAsCLLM2hH7_qHUl2-sP&layers=1&nav=1&title=vertebrate-fauna-identify-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1fXuswH2XmunmjAsCLLM2hH7_qHUl2-sP%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1fXuswH2XmunmjAsCLLM2hH7_qHUl2-sP&layers=1&nav=1&title=vertebrate-fauna-identify-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1fXuswH2XmunmjAsCLLM2hH7_qHUl2-sP%26export%3Ddownload">View diagram in new tab.</a>

1. Survey data from vertebrate identify, measure and release protocol:

The following is dummy data:

```json
{
  "start_date": "2023-04-11T06:03:58.525Z",
  "lat": 0,
  "lng": 0,
  "plot_visit": 0,
  "observers": "Paul Green",
  "photo": [0],
  "samples": {
    "sample_id": "materialSample001",
    "mark_colour": "Black",
    "capture_status": "Fresh (estimate 24 houts - <48 hours)",
    "collection_date": "2023-04-11T06:03:58.525Z"
  },
  "trapID": "trap001",
  "type": "Elliot Trap",
  "elliot_false_trigger": true,
  "cage_false_trigger": false,
  "damaged": false,
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

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
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

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Sampling` class.

##### Example

```
<https://example.com/checking-traps/1> a tern:Sampling ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `sample_id`

The `sample_id` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-voucher-specimen/1> a tern:MaterialSample ;
    dwc:materialSampleID "materialSample001" .
```

#### `mark_colour`

The `mark_colour` key maps to the attribute `recapture temporary texta mark colour` in [Vertebrate fauna module - identify, measure and release protocol Attributes](https://linked.data.gov.au/def/nrm/54fd720c-456f-4173-b4c0-610f3c97760b), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/record-captures/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "recapture temporary texta mark colour" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/bfab8eb0-d652-47c3-b178-736323e0f896> ;
        tern:hasSimpleValue "Black"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Black"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `capture_status`

The `capture_status` key maps to the attribute `vertebrate capture status` in [Vertebrate fauna module - identify, measure and release protocol Attributes](https://linked.data.gov.au/def/nrm/54fd720c-456f-4173-b4c0-610f3c97760b), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/record-captures/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "vertebrate capture status" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/ec1b061e-a737-4596-b675-c074ed320ac6> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `collection_date`

The `collection_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/record-captures> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `trapID`

The `trapID` key maps to the property `dcterms:identifier` on the `tern:Sampler` class.

##### Example

```
<https://example.com/trap/1> a tern:Sampler ;
    dcterms:identifier "trap001" .
```

#### `type`

The `type` key maps to the attribute `trap type` in [Vertebrate fauna module - identify, measure and release protocol Attributes](https://linked.data.gov.au/def/nrm/54fd720c-456f-4173-b4c0-610f3c97760b), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/traps/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "trap type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/fabf23b1-3828-4448-93f5-67a1b6fbdd5f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/be7f9b1a-a08e-5196-9762-1ddd335ac027> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Elliot Trap" ;
            rdf:value <https://linked.data.gov.au/def/nrm/be7f9b1a-a08e-5196-9762-1ddd335ac027> ;
        ] ;
    ] ;
.
```

#### `elliot_false_trigger`

The `elliot_false_trigger` key maps to the attribute `elliot trap false trigger` in [Vertebrate fauna module - identify, measure and release protocol Attributes](https://linked.data.gov.au/def/nrm/54fd720c-456f-4173-b4c0-610f3c97760b), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/checking-traps/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "elliot trap false trigger" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/f575f6e9-a327-4581-a71f-b7150a687292> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `cage_false_trigger`

The `cage_false_trigger` key maps to the attribute `cage trap false trigger` in [Vertebrate fauna module - identify, measure and release protocol Attributes](https://linked.data.gov.au/def/nrm/54fd720c-456f-4173-b4c0-610f3c97760b), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/checking-traps/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "cage trap false trigger" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/6be5f9e9-97c1-49ea-9388-119058244314> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `damaged`

The `damaged` key maps to the attribute `trap disturbed/damaged` in [Vertebrate fauna module - identify, measure and release protocol Attributes](https://linked.data.gov.au/def/nrm/54fd720c-456f-4173-b4c0-610f3c97760b), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/checking-traps/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "trap disturbed/damaged" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/b176932e-bd52-4f33-96db-ba17b311512f> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

2. Observation data from vertebrate identify, measure and release protocol:

The following is dummy data:

```json
{
  "age": "Adult",
  "weight": 100,
  "body_condition": "Good",
  "body_length": 50,
  "species_name": "Snake",
  "head_length": 10,
  "testes_position": "Abdominal",
  "pouch_development": "Haired",
  "pouch_number": 2,
  "pouch_size": 100,
  "sex": "male",
  "pregnancy_sign": "No",
  "tail_length": 5,
  "teat_status": "Button",
  "testes_length": 5,
  "testes_width": 5,
  "vertebrate": "vertebrate",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `age`

The `age` key maps to a `tern:Observation` with the observable property 'age class'.

#### `weight`

The `weight` key maps to a `tern:Observation` with the observable property 'animal weight'.

#### `body_condition`

The `body_condition` key maps to a `tern:Observation` with the observable property 'body condition'.

#### `body_length`

The `body_length` key maps to a `tern:Observation` with the observable property 'body length'.

#### `species_name`

The `species_name` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `head_length`

The `head_length` key maps to a `tern:Observation` with the observable property 'head length'.

#### `testes_position`

The `testes_position` key maps to a `tern:Observation` with the observable property 'position of testes'.

#### `pouch_development`

The `pouch_development` key maps to a `tern:Observation` with the observable property 'pouch young development class'.

#### `pouch_number`

The `pouch_number` key maps to a `tern:Observation` with the observable property 'pouch young number'.

#### `pouch_size`

The `pouch_size` key maps to a `tern:Observation` with the observable property 'pouch young size'.

#### `sex`

The `sex` key maps to a `tern:Observation` with the observable property 'sex'.

#### `pregnancy_sign`

The `pregnancy_sign` key maps to a `tern:Observation` with the observable property 'signs of pregnancy'.

#### `tail_length`

The `tail_length` key maps to a `tern:Observation` with the observable property 'tail length'.

#### `teat_status`

The `teat_status` key maps to a `tern:Observation` with the observable property 'teat status'.

#### `testes_length`

The `testes_length` key maps to a `tern:Observation` with the observable property 'testes length'.

#### `testes_width`

The `testes_width` key maps to a `tern:Observation` with the observable property 'testes width'.

#### `vertebrate`

The `vertebrate` key maps to a `tern:Observation` with the observable property 'vertebrate class'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

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
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX unit: <http://qudt.org/vocab/unit/>

<https://example.com/ObservationCollection/observations-on-animal-individual>
    a tern:ObservationCollection ;
    rdfs:label "observations on animal individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-individual> ;
    sosa:hasMember
        <https://example.com/observation/age-class/1> ,
        <https://example.com/observation/animal-weight/1> ,
        <https://example.com/observation/body-condition/1> ,
        <https://example.com/observation/body-length/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/head-length/1> ,
        <https://example.com/observation/position-of-testes/1> ,
        <https://example.com/observation/pouch-young-development-class/1> ,
        <https://example.com/observation/pouch-young-number/1> ,
        <https://example.com/observation/pouch-young-size/1> ,
        <https://example.com/observation/sex/1> ,
        <https://example.com/observation/signs-of-pregnancy/1> ,
        <https://example.com/observation/tail-length/1> ,
        <https://example.com/observation/teat-status/1> ,
        <https://example.com/observation/testes-length/1> ,
        <https://example.com/observation/testes-width/1> ,
        <https://example.com/observation/vertebrate-class/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7942c1d3-8cfc-4d74-931d-850cacfa5a63> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/checking-traps>
    a tern:Sampling ;
    rdfs:label "checking traps" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/traps> ;
    sosa:hasResult <https://example.com/Sample/animal-individual> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7942c1d3-8cfc-4d74-931d-850cacfa5a63> ;
    tern:hasAttribute
        [
            rdfs:label "trap left" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d758f5c6-b224-45fa-a7e6-fc418fd4333c> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "trap notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/51d7e58a-e122-4f30-a313-228ec612d033> ;
            tern:hasSimpleValue "Bait is oats."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Bait is oats."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "trap disturbed/damaged" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b176932e-bd52-4f33-96db-ba17b311512f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3e8e9118-750e-5895-8f61-37920e134afe> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Disturbed" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/3e8e9118-750e-5895-8f61-37920e134afe>
                ]
        ] ,
        [
            rdfs:label "elliot trap false trigger" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/f575f6e9-a327-4581-a71f-b7150a687292> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "cage trap false trigger" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6be5f9e9-97c1-49ea-9388-119058244314> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ;
    tern:resultDateTime "2022-05-10T07:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/record-captures>
    a tern:Sampling ;
    rdfs:label "record captures" ;
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
    sosa:hasFeatureOfInterest <https://example.com/Sample/animal-individual> ;
    sosa:hasResult <https://example.com/MaterialSample/animal-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7942c1d3-8cfc-4d74-931d-850cacfa5a63> ;
    tern:hasAttribute
        [
            rdfs:label "recapture temporary texta mark colour" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/bfab8eb0-d652-47c3-b178-736323e0f896> ;
            tern:hasSimpleValue "White."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "White."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "vertebrate capture status" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ec1b061e-a737-4596-b675-c074ed320ac6> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ;
    tern:resultDateTime "2022-05-10T08:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/animal-specimen> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7942c1d3-8cfc-4d74-931d-850cacfa5a63> ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/photos>
    a tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/MaterialSample/animal-specimen> ;
    tern:featureType "photos" ;
.

<https://example.com/Sampler/traps>
    a tern:Sampler ;
    rdfs:label "traps" ;
    dcterms:identifier "sample-traps-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    tern:featureType "traps" ;
    tern:hasAttribute [
            rdfs:label "trap type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/fabf23b1-3828-4448-93f5-67a1b6fbdd5f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/6826f1d9-4874-564d-b04e-46627860f05e> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Cage Trap" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/6826f1d9-4874-564d-b04e-46627860f05e>
                ]
        ] ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasSite <https://example.com/Site/site> ;
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

<https://example.com/observation/animal-weight/1>
    a tern:Observation ;
    rdfs:label "animal weight" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:GM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d78e0ad6-9ac8-4adc-a796-61ad458726b3> ;
.

<https://example.com/observation/body-condition/1>
    a tern:Observation ;
    rdfs:label "body condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "Good."^^xsd:string
        ] ;
    sosa:hasSimpleResult "Good."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a0bf61f1-56fa-4653-8f68-be2f732357c8> ;
.

<https://example.com/observation/body-length/1>
    a tern:Observation ;
    rdfs:label "body length" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:M
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e9b8207-3282-4b42-b68c-c33951539016> ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "Reptile."^^xsd:string
        ] ;
    sosa:hasSimpleResult "Reptile."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
.

<https://example.com/observation/head-length/1>
    a tern:Observation ;
    rdfs:label "head length" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:MilliM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/96ccc2b7-7b7f-4e5c-b11f-d5e5c88e245a> ;
.

<https://example.com/observation/position-of-testes/1>
    a tern:Observation ;
    rdfs:label "position of testes" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Abdominal" ;
            rdf:value <https://linked.data.gov.au/def/nrm/525b4983-85c3-5d24-8509-e62651c663db>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/525b4983-85c3-5d24-8509-e62651c663db> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0c87c594-0002-479f-8a4b-6f63743065b8> ;
.

<https://example.com/observation/pouch-young-development-class/1>
    a tern:Observation ;
    rdfs:label "pouch young development class" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Haired" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7cf0bda6-8e32-570f-86ae-70e5625b3bea>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7cf0bda6-8e32-570f-86ae-70e5625b3bea> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/c3b58f60-7166-4855-bb3a-2d8553903a99> ;
.

<https://example.com/observation/pouch-young-number/1>
    a tern:Observation ;
    rdfs:label "pouch young number" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/88353d7b-8a2c-4b84-b034-71395f4edb93> ;
.

<https://example.com/observation/pouch-young-size/1>
    a tern:Observation ;
    rdfs:label "pouch young size" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:MilliM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fe18c3aa-7af1-4fe8-bf5f-dcec29a3bea9> ;
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

<https://example.com/observation/signs-of-pregnancy/1>
    a tern:Observation ;
    rdfs:label "signs of pregnancy" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "Pregnant."^^xsd:string
        ] ;
    sosa:hasSimpleResult "Pregnant."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/88472a97-fd55-4382-9d6e-793164c574f1> ;
.

<https://example.com/observation/tail-length/1>
    a tern:Observation ;
    rdfs:label "tail length" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:MilliM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/38d1419f-7f3b-4d0e-a2f6-4b152e2d91f7> ;
.

<https://example.com/observation/teat-status/1>
    a tern:Observation ;
    rdfs:label "teat status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Distended" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0a36dfcf-fd79-572f-8dae-3b212b15f87d>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0a36dfcf-fd79-572f-8dae-3b212b15f87d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2ad2e5ec-ec5c-4541-a98c-85278e93ad67> ;
.

<https://example.com/observation/testes-length/1>
    a tern:Observation ;
    rdfs:label "testes length" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:MilliM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/93486f3f-bef9-42ee-b3b9-eacaaf9324cf> ;
.

<https://example.com/observation/testes-width/1>
    a tern:Observation ;
    rdfs:label "testes width" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Float ;
            rdf:value "2.22"^^xsd:float ;
            tern:unit unit:MilliM
        ] ;
    sosa:hasSimpleResult "2.22"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3d011f97-5d22-409c-a382-36b378db8a14> ;
.

<https://example.com/observation/vertebrate-class/1>
    a tern:Observation ;
    rdfs:label "vertebrate class" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "Bird."^^xsd:string
        ] ;
    sosa:hasSimpleResult "Bird."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8997be1e-cf91-4ca6-a641-eb57aa10d9e6> ;
.

<https://example.com/Site/site>
    a tern:Site ;
    rdfs:label "site" ;
    dcterms:identifier "site-site-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute [
            rdfs:label "plot name" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
            tern:hasSimpleValue "Oak Ridge South."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "Oak Ridge South."^^xsd:string
                ]
        ] ;
.

<https://example.com/MaterialSample/animal-specimen>
    a tern:MaterialSample ;
    rdfs:label "animal specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "materialsample-animal-specimen-001" ;
    sosa:isSampleOf <https://example.com/Sample/animal-individual> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
.

<https://example.com/Sample/animal-individual>
    a tern:Sample ;
    rdfs:label "animal individual" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ecb855ed-50e1-4299-8491-861759ef40b7> ;
.

```

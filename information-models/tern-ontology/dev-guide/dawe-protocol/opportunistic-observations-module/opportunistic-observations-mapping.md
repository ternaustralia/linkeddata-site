---
sidebar_position: 2
---

# Opportunistic Observations protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Opportunistic observations protocol](https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/opportunistic-observations-module/overview) for the feature type and value type information.

## Conceptual modelling

The Opportunistic Observations module records data about the site for the following feature types:

- habitat
- plant occurrence
- animal occurrence

These observations are recorded for each site during a site visit.

Opportunistic observations are unplanned (no defined survey effort) and made while undertaking other activities, at any stage of a project. Observations often occur while travelling between plots and while undertaking other modules.

`voucher condition` is only recorded for fauna specimens.

### Diagram

The following diagram show the Opportunistic Observations protocol mapping. The blue nodes are related to 'habitat sampling' on site. Light green nodes are things related to 'animal occurrence' feature type and green nodes are 'fauna vouchering' sampling on 'animal occurrence'. Light purple nodes are things related to 'plant occurrence' feature type and purple nodes are 'plant vouchering' sampling on 'plant occurrence'. Yellow nodes are 'taking representative media' sampling on observations. Orange nodes are things related to both 'animal occurrence' and 'plant occurrence' feature types.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=opportunistic-observations-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=opportunistic-observations-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Opportunistic Observations measurements

- [OpenAPI docs for opportunistic observations](https://beta.core-api.paratoo.tern.org.au/documentation#/Opportunistic-observation/post%2Fopportunistic-observations)

```json
{
  "observation_id": "string",
  "representative_media": [0],
  "location": {
    "lat": 0,
    "lng": 0
  },
  "plot_location": 0,
  "taxa_type": "VP",
  "species": "string",
  "confident": true,
  "identification_source": "F",
  "date_time": "2022-12-20T06:28:21.298Z",
  "number_of_individuals": 0,
  "observation_method": "OB",
  "habitat_description": "CD",
  "observation_notes": "string",
  "veg_growth_form": "V",
  "vouchered_specimens": [
    {
      "voucher_barcode": "string",
      "voucher_comment": "string",
      "voucher_type": "Animal tissue (skin)",
      "voucher_condition": "F"
    }
  ],
  "fauna_behaviour": "FE",
  "fauna_age_class": "AD",
  "fauna_sex": "M",
  "fauna_breeding_code": "UK",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `observation_id`

The `observation_id` key maps to the property `dcterms:identifier` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    dcterms:identifier "observation001"^^xsd:string ;
.
```

#### `representative_media`

The `representative_media` key maps to photos, videos, and audio(`tern:Sample`) taken during 'taking representative media'(`tern:Sampling`) for observations on site. Each representative media has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `plot_location`

The `plot_location` key map sto the attribute `geo:hasGeometry` on the `tern:Site` class.

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

#### `taxa_type`

The `taxa_type` key maps to a `tern:Observation` with the observable property 'taxa type'.

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `confident`

The `confident` key maps to the attribute `species name confidence` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/field-species-name/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "species name confidence" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/6f6a3655-4347-4219-bfe1-9e4023d3a80f> ;
        tern:hasSimpleValue True ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value True ;
        ] ;
    ] ;
.
```

#### `identification_source`

The `identification_source` key maps to the attribute `source of identification` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/field-species-name/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "source of identification" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/b1bde41c-b656-51c3-9da0-944734a14077> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Field observer" ;
            rdf:value <https://linked.data.gov.au/def/nrm/b1bde41c-b656-51c3-9da0-944734a14077> ;
        ] ;
    ] ;
.
```

#### `date_time`

The `date_time` key maps to the property `tern:resultDateTime` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `number_of_individuals`

The `number_of_individuals` key maps to a `tern:Observation` with the observable property 'number of individuals'.

#### `observation_method`

The `observation_method` key maps to attributes `observation method tier 1` and `observation method tier 2` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "observation method tier 1" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/6b1b5d93-a0cf-47bc-959d-d9bdb6b8248b> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/25ce7137-31b7-5395-a237-a1ff153ff049> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Heard" ;
            rdf:value <https://linked.data.gov.au/def/nrm/25ce7137-31b7-5395-a237-a1ff153ff049> ;
        ] ;
    ] ;
.
```

#### `habitat_description`

The `habitat_description` key maps to a `tern:Observation` with the observable property 'habitat description'.

#### `observation_notes`

The `observation_notes` key maps to the attribute `observation notes` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "observation notes" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
        tern:hasSimpleValue "Observed on bird groups." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Observed on bird groups." ;
        ] ;
    ] ;
.
```

#### `veg_growth_form`

The `veg_growth_form` key maps to a `tern:Observation` with the observable property 'growth form'.

#### `voucher_barcode`

The `voucher_barcode` key maps to the property `dwc:materialSampleID` in `tern:MaterialSample` class. It is the identifier of specimen collected during `tern:Sampling`.

##### Example

```turtle
<https://example.com/site/1/plant-tissue-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "flora vouchering specimen 1" ;
    dwc:materialSampleID "materialSample1" ;
.
```

#### `voucher_comment`

The `voucher_comment` key maps to the property `rdfs:comment` on the `tern:Sampling` class.

##### Example

```turtle
<https://example.com/fauna-vouchering/1>
    a tern:Sampling ;
    rdfs:comment "Hair taken."^^xsd:string ;
.
```

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher type` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to samples by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/material-sample/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/5b005b04-431e-54b1-a2f1-b9a2f0776079> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Animal tissue (fur/hair)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/5b005b04-431e-54b1-a2f1-b9a2f0776079> ;
        ] ;
    ] ;
.
```

#### `voucher_condition`

The `voucher_condition` key maps to the attribute `voucher condition` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to samples by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/material-sample/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher condition" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/010ee3c8-bfbe-47c5-adc8-068ca664173d> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/01a2e203-48ca-5ed0-b166-83a48d8a6d9d> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Decomposed" ;
            rdf:value <https://linked.data.gov.au/def/nrm/01a2e203-48ca-5ed0-b166-83a48d8a6d9d> ;
        ] ;
    ] ;
.
```

#### `fauna_behaviour`

The `fauna_behaviour` key maps to a `tern:Observation` with the observable property 'fauna behaviour'.

#### `fauna_age_class`

The `fauna_age_class` key maps to a `tern:Observation` with the observable property 'age class'.

#### `fauna_sex`

The `fauna_sex` key maps to a `tern:Observation` with the observable property 'sex'.

#### `fauna_breeding_code`

The `fauna_breeding_code` key maps to a `tern:Observation` with the observable property 'breeding status'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix geo: <http://www.opengis.net/ont/geosparql#> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .


<https://example.com/site/1>
    a tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    dcterms:identifier "site001"^^xsd:string ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    rdfs:comment "The weather is sunny."^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z" ;
    prov:endedAtTime "2022-11-02T03:18:42.783Z" ;
    tern:hasSite <https://example.com/site/1> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920849^^xsd:double ;
        wgs84:long 152.242400^^xsd:double ;
    ] ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "animal occurrence 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2361dea8-598c-4b6f-a641-2b98ff199e9e> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/2>
    a tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/3>
    a tern:Sample ;
    rdfs:label "habitat 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920848^^xsd:double ;
        wgs84:long 152.242401^^xsd:double ;
    ] ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on animal occurrence" ;
    dcterms:identifier "observationCollection001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920849^^xsd:double ;
        wgs84:long 152.242402^^xsd:double ;
    ] ;
    prov:wasAssociatedWith [
        a <https://w3id.org/tern/ontologies/org/Person> ;
        schema:name "Paul Green" ;
    ] ;
    tern:hasAttribute
        [
            rdfs:label "observation method tier 1" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6b1b5d93-a0cf-47bc-959d-d9bdb6b8248b> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/787ded06-04e5-5c67-99a2-687fa5943db3> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Observed" ;
                rdf:value <https://linked.data.gov.au/def/nrm/787ded06-04e5-5c67-99a2-687fa5943db3> ;
            ] ;
        ],
        [
            rdfs:label "observation method tier 2" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/19835fac-2edc-4960-89ad-7e5981dcc8f1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/776ef1cb-c4eb-5594-a72c-d800da256082> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Feather" ;
                rdf:value <https://linked.data.gov.au/def/nrm/776ef1cb-c4eb-5594-a72c-d800da256082> ;
            ] ;
        ],
        [
            rdfs:label "observation notes" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "Taken photos." ;
            tern:hasValue [
                a tern:Text ;
                rdf:value "Taken photos." ;
            ] ;
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    sosa:hasMember <https://example.com/observation/field-species-name/1>,
        <https://example.com/observation/habitat-description/1>,
        <https://example.com/observation/number-of-individuals/1>,
        <https://example.com/observation/taxa-type/1>,
        <https://example.com/observation/animal-pouch-condition/1>,
        <https://example.com/observation/age-class/1>,
        <https://example.com/observation/vaginal-condition/1>,
        <https://example.com/observation/teat-status/1>,
        <https://example.com/observation/sex/1>,
        <https://example.com/observation/fauna-behaviour/1>,
        <https://example.com/observation/breeding-status/1>,
        <https://example.com/observation/animal-testes-condition/1> ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    dcterms:identifier "observationCollection002" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T08:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920850^^xsd:double ;
        wgs84:long 152.242403^^xsd:double ;
    ] ;
    prov:wasAssociatedWith [
        a <https://w3id.org/tern/ontologies/org/Person> ;
        schema:name "Paul Green" ;
    ] ;
    tern:hasAttribute
        [
            rdfs:label "observation method tier 1" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6b1b5d93-a0cf-47bc-959d-d9bdb6b8248b> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/787ded06-04e5-5c67-99a2-687fa5943db3> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Observed" ;
                rdf:value <https://linked.data.gov.au/def/nrm/787ded06-04e5-5c67-99a2-687fa5943db3> ;
            ] ;
        ],
        [
            rdfs:label "observation method tier 2" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/19835fac-2edc-4960-89ad-7e5981dcc8f1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/776ef1cb-c4eb-5594-a72c-d800da256082> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Feather" ;
                rdf:value <https://linked.data.gov.au/def/nrm/776ef1cb-c4eb-5594-a72c-d800da256082> ;
            ] ;
        ],
        [
            rdfs:label "observation notes" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "Taken photos." ;
            tern:hasValue [
                a tern:Text ;
                rdf:value "Taken photos." ;
            ] ;
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    sosa:hasMember <https://example.com/observation/field-species-name/2>,
        <https://example.com/observation/habitat-description/2>,
        <https://example.com/observation/number-of-individuals/2>,
        <https://example.com/observation/taxa-type/2>,
        <https://example.com/observation/growth-form/1>,
        <https://example.com/observation/plant-phenology/1>,
        <https://example.com/observation/vegetation-type/1> ;
.

<https://example.com/fauna-vouchering/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photos are taken for this sample" ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T10:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/site/1/fauna-vouchering/specimen/1> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920851^^xsd:double ;
        wgs84:long 152.242404^^xsd:double ;
    ] ;
.

<https://example.com/site/1/fauna-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "fauna vouchering specimen 1" ;
    sosa:isResultOf <https://example.com/fauna-tissue-vouchering/1> ;
    dwc:materialSampleID "faunaMaterialSample1" ;
    sosa:isSampleOf <https://example.com/feature-of-interest/1> ;
    tern:hasAttribute
        [
            rdfs:label "preservation type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0f16c593-df2d-462f-ab01-87b4bc0a223f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/b92003ad-7a9a-59cc-a508-e5c674cb3b01> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Ethanol 70%" ;
                rdf:value <https://linked.data.gov.au/def/nrm/b92003ad-7a9a-59cc-a508-e5c674cb3b01> ;
            ] ;
        ],
        [
            rdfs:label "voucher condition" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/010ee3c8-bfbe-47c5-adc8-068ca664173d> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/01a2e203-48ca-5ed0-b166-83a48d8a6d9d> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Decomposed" ;
                rdf:value <https://linked.data.gov.au/def/nrm/01a2e203-48ca-5ed0-b166-83a48d8a6d9d> ;
            ] ;
        ],
        [
            rdfs:label "voucher type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/006b0590-da0b-5ae3-8628-088e956bc7e8> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Blood" ;
                rdf:value <https://linked.data.gov.au/def/nrm/006b0590-da0b-5ae3-8628-088e956bc7e8> ;
            ] ;
        ] ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
.

<https://example.com/plant-vouchering/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photos are taken for this sample" ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T12:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/site/1/flora-vouchering/specimen/1> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920852^^xsd:double ;
        wgs84:long 152.242405^^xsd:double ;
    ] ;
.

<https://example.com/site/1/flora-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "plant vouchering specimen 1" ;
    sosa:isResultOf <https://example.com/plant-tissue-vouchering/1> ;
    dwc:materialSampleID "floraMaterialSample1" ;
    sosa:isSampleOf <https://example.com/feature-of-interest/2> ;
    tern:hasAttribute
        [
            rdfs:label "preservation type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0f16c593-df2d-462f-ab01-87b4bc0a223f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/b92003ad-7a9a-59cc-a508-e5c674cb3b01> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Ethanol 70%" ;
                rdf:value <https://linked.data.gov.au/def/nrm/b92003ad-7a9a-59cc-a508-e5c674cb3b01> ;
            ] ;
        ],
        [
            rdfs:label "voucher type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/51f44f33-379b-59f5-8de8-590799f846cc> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Plant Voucher" ;
                rdf:value <https://linked.data.gov.au/def/nrm/51f44f33-379b-59f5-8de8-590799f846cc> ;
            ] ;
        ] ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2e122e23-881c-43fa-a921-a8745f016ceb> ;
.

<https://example.com/site/1/habitat/1/sampling> a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:resultTime "2022-11-11T12:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/3> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute [
        rdfs:label "target species" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
        tern:hasSimpleValue "Pine" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Pine" ;
        ] ;
    ] ;
.

<https://example.com/observation/microhabitat-tier-1/1>
    a tern:Observation ;
    rdfs:label "microhabitat tier 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/dcc4ea60-00cf-5c51-8030-d155246bdead> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
                a tern:IRI ;
                rdfs:label "around" ;
                rdf:value <https://linked.data.gov.au/def/nrm/dcc4ea60-00cf-5c51-8030-d155246bdead> ;
            ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/71e15d2a-53d0-4c79-91a8-4746958703cb> ;
.

<https://example.com/observation/microhabitat-tier-2/1>
    a tern:Observation ;
    rdfs:label "microhabitat tier 2" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/8f1666f3-b35f-5d1a-9502-ab3a62706599> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
                a tern:IRI ;
                rdfs:label "Forest" ;
                rdf:value <https://linked.data.gov.au/def/nrm/8f1666f3-b35f-5d1a-9502-ab3a62706599> ;
            ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/664bd7cf-1cc4-4d19-8c33-8173471638c2> ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/d88dfef4-93a1-5fb7-b0b8-fe619ddef1fb> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
                a tern:IRI ;
                rdfs:label "Beach" ;
                rdf:value <https://linked.data.gov.au/def/nrm/d88dfef4-93a1-5fb7-b0b8-fe619ddef1fb> ;
            ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
.

<https://example.com/site/1/representative-media/1/sampling> a tern:Sampling ;
    rdfs:label "taking representative media" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:resultTime "2022-11-11T15:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/image/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:madeBySampler [
        a tern:Sampler ;
        rdfs:label "Canon EOS 550D DSLR cropped sensor camera" ;
        tern:samplerType <http://linked.data.gov.au/def/tern-cv/11e03f36-7ada-4333-88e2-38c9205f2749> ;
        void:inDataset <https://example.com/dataset/1> ;
        tern:hasAttribute [
            a tern:Attribute ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute "focal length" ;
            tern:hasSimpleValue 24 ;
            tern:hasValue [
                a tern:Integer ;
                rdf:value 24 ;
                tern:unit <http://qudt.org/vocab/unit/MilliM> ;
            ]
        ] ;
    ] ;
.

<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
    sosa:isResultOf <https://example.com/site/1/representative-media/1/sampling> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photo, video, audio" ;
    sosa:hasFeatureOfInterest <https://example.com/observation-collection/1>, <https://example.com/observation-collection/2> ;
    tern:hasAttribute [
        rdfs:label "media description" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/ed32558e-8bd5-4809-8104-93d662432ef5> ;
        tern:hasSimpleValue "The photo is kind of blur." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The photo is kind of blur." ;
        ] ;
    ] ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Snake" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Snake" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    tern:hasAttribute
        [
            rdfs:label "species name confidence" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6f6a3655-4347-4219-bfe1-9e4023d3a80f> ;
            tern:hasSimpleValue True ;
            tern:hasValue [
                a tern:Boolean ;
                rdf:value True ;
            ] ;
        ],
        [
            rdfs:label "source of identification" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0e2ceb33-f68e-51fa-804f-76b564c7bd2e> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Expert (museum/herbarium)" ;
                rdf:value <https://linked.data.gov.au/def/nrm/0e2ceb33-f68e-51fa-804f-76b564c7bd2e> ;
            ] ;
        ] ;
.

<https://example.com/observation/field-species-name/2>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Pine" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Pine" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    tern:hasAttribute
        [
            rdfs:label "species name confidence" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6f6a3655-4347-4219-bfe1-9e4023d3a80f> ;
            tern:hasSimpleValue True ;
            tern:hasValue [
                a tern:Boolean ;
                rdf:value True ;
            ] ;
        ],
        [
            rdfs:label "source of identification" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0e2ceb33-f68e-51fa-804f-76b564c7bd2e> ;
            tern:hasValue [
                a tern:IRI ;
                rdfs:label "Expert (museum/herbarium)" ;
                rdf:value <https://linked.data.gov.au/def/nrm/0e2ceb33-f68e-51fa-804f-76b564c7bd2e> ;
            ] ;
        ] ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Near a lake." ;
    ] ;
    sosa:hasSimpleResult "Near a lake." ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
.

<https://example.com/observation/habitat-description/2>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Near the forest." ;
    ] ;
    sosa:hasSimpleResult "Near the forest." ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
.

<https://example.com/observation/number-of-individuals/1>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Integer ;
        rdf:value 5 ;
    ] ;
    sosa:hasSimpleResult 5 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
.

<https://example.com/observation/number-of-individuals/2>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Integer ;
        rdf:value 6 ;
    ] ;
    sosa:hasSimpleResult 6 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
.

<https://example.com/observation/taxa-type/1>
    a tern:Observation ;
    rdfs:label "taxa type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
                a tern:IRI ;
                rdfs:label "Bird" ;
                rdf:value <https://linked.data.gov.au/def/nrm/7b0b3837-0466-50bb-9958-cc06b2784d12> ;
            ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7b0b3837-0466-50bb-9958-cc06b2784d12> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1b3904f4-df8c-49ba-a234-3b406fe11fa9> ;
.

<https://example.com/observation/taxa-type/2>
    a tern:Observation ;
    rdfs:label "taxa type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
                a tern:IRI ;
                rdfs:label "Vascular plant" ;
                rdf:value <https://linked.data.gov.au/def/nrm/0ac5b570-822b-5b0e-9746-a71faf85540d> ;
            ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0ac5b570-822b-5b0e-9746-a71faf85540d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1b3904f4-df8c-49ba-a234-3b406fe11fa9> ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5b669769-cfda-5e2f-a311-acc06cd1ff02> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Fern" ;
            rdf:value <https://linked.data.gov.au/def/nrm/5b669769-cfda-5e2f-a311-acc06cd1ff02> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
.

<https://example.com/observation/plant-phenology/1>
    a tern:Observation ;
    rdfs:label "plant phenology" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/89ef338f-7206-515e-8cd7-0d5fd2b78db2> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Breeding present" ;
            rdf:value <https://linked.data.gov.au/def/nrm/89ef338f-7206-515e-8cd7-0d5fd2b78db2> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/33c1752f-b5f3-4ac9-9090-e9a4dd3096d1> ;
.

<https://example.com/observation/vegetation-type/1>
    a tern:Observation ;
    rdfs:label "vegetation type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/92f9c954-3f9e-5f78-a85b-37842ddc509d> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Garden" ;
            rdf:value <https://linked.data.gov.au/def/nrm/92f9c954-3f9e-5f78-a85b-37842ddc509d> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a9a73dfe-9165-4ad3-bccb-f1fa0a18e0be> ;
.

<https://example.com/observation/animal-pouch-condition/1>
    a tern:Observation ;
    rdfs:label "animal pouch condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/3ad9ef60-99d0-5901-9e25-a47db89d11a6> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Developed" ;
            rdf:value <https://linked.data.gov.au/def/nrm/3ad9ef60-99d0-5901-9e25-a47db89d11a6> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5ccfd7ed-12e4-42ed-83a1-1b85445f92d6> ;
.

<https://example.com/observation/age-class/1>
    a tern:Observation ;
    rdfs:label "age class" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2befa1d5-33f2-5bc1-bc4c-0609b8dad9b9> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Adult" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2befa1d5-33f2-5bc1-bc4c-0609b8dad9b9> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/59df7c05-1521-4161-86e4-8e6a8feb4002> ;
.

<https://example.com/observation/vaginal-condition/1>
    a tern:Observation ;
    rdfs:label "vaginal condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/8c2817bb-bf22-5a00-a8c0-f841c355e17b> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Imperforate" ;
            rdf:value <https://linked.data.gov.au/def/nrm/8c2817bb-bf22-5a00-a8c0-f841c355e17b> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/56059af9-44ff-4722-9cfc-6af2c69a5ed5> ;
.

<https://example.com/observation/teat-status/1>
    a tern:Observation ;
    rdfs:label "teat status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1785e4d9-ef24-594a-9103-f5b709980d0a> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Button" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1785e4d9-ef24-594a-9103-f5b709980d0a> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2ad2e5ec-ec5c-4541-a98c-85278e93ad67> ;
.

<https://example.com/observation/sex/1>
    a tern:Observation ;
    rdfs:label "sex" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7f2c732f-a6cd-5b72-bfbb-d349dd85d32d> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Female" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7f2c732f-a6cd-5b72-bfbb-d349dd85d32d> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/40b39732-e10b-4c4e-968b-3404663a094d> ;
.

<https://example.com/observation/fauna-behaviour/1>
    a tern:Observation ;
    rdfs:label "fauna behaviour" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/b7d598c7-a0e8-5aab-8ccc-e2f56fd5d763> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Flying" ;
            rdf:value <https://linked.data.gov.au/def/nrm/b7d598c7-a0e8-5aab-8ccc-e2f56fd5d763> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dfaf2438-6019-4632-85d8-0efc91930768> ;
.

<https://example.com/observation/breeding-status/1>
    a tern:Observation ;
    rdfs:label "breeding status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/ad9d60c2-8e9f-57ae-8fa0-935daadf73e6> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Breeding" ;
            rdf:value <https://linked.data.gov.au/def/nrm/ad9d60c2-8e9f-57ae-8fa0-935daadf73e6> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d8ed3241-8d97-4a63-be3a-5f610a4b8739> ;
.

<https://example.com/observation/animal-testes-condition/1>
    a tern:Observation ;
    rdfs:label "animal testes condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/38c6702d-d77f-55ee-913d-7a79a07bd097> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Abdominal" ;
            rdf:value <https://linked.data.gov.au/def/nrm/38c6702d-d77f-55ee-913d-7a79a07bd097> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ff9c9d4e-5c91-42ea-9278-f7c9ed82569f> ;
.

```

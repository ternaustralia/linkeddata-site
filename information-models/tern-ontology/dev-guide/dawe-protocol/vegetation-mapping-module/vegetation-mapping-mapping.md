---
sidebar_position: 2
---

# Vegetation Mapping protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Vegetation Mapping protocol](https://linked.data.gov.au/def/nrm/15361f98-7669-410e-9b04-e9be069c7508) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/vegetation-mapping-module/overview) for the feature type and value type information.

## Conceptual modelling

The Vegetation Mapping module records data about the site for the following feature types:

- land surface disturbance
- plant population
- vegetation disturbance
- land surface substrate
- plant community

These observations are recorded for each site during a site visit.

This module provides a standardised approach to vegetation classification, which can be used to inform downstream vegetation mapping, reporting and analysis.

### Diagram

The following diagram show the Vgetation Mapping protocol mapping. The blue nodes are things related to 'land surface disturbance' feature type. Light green nodes are things related to 'plant population' feature type and greens nodes are 'plant vouchering' sampling on 'plant population'. Orange nodes are things related to 'vegetation disturbance' feature type. Yellow nodes are things related to 'land surface substrate' feature type. Pink nodes are things related to 'plant community' feature type. Purple nodes are 'taking photos' sampling on any materials from site.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G16CzfsvBI087OVKooSSVyb02kfKo4hlf3&layers=1&nav=1&title=vegetation-mapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D16CzfsvBI087OVKooSSVyb02kfKo4hlf3%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G16CzfsvBI087OVKooSSVyb02kfKo4hlf3&layers=1&nav=1&title=vegetation-mapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D16CzfsvBI087OVKooSSVyb02kfKo4hlf3%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Vegetation Mapping` protocol surveys:

- [OpenAPI docs for vegetation mapping survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Vegetation-mapping-survey/post%2Fvegetation-mapping-surveys)

Survey data from Vegetation Mapping:

```json
{
  "start_date_time": "2022-12-19T03:07:13.104Z",
  "surveyId": "string",
  "location": {
    "lat": 0,
    "lng": 0
  },
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `start_date_time`

The `start_date_time` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Vegetation Mapping measurements

- [OpenAPI docs for vegetation mapping observations](https://beta.core-api.paratoo.tern.org.au/documentation#/Vegetation-mapping-observation/post%2Fvegetation-mapping-observations)

```json
{
  "observation_id": "string",
  "position": {
    "lat": 0,
    "lng": 0
  },
  "photos": [0],
  "veg_growth_stage": "ER",
  "disturbance": "0",
  "fire_history": "UB",
  "comment": "string",
  "vegetation_mapping_survey": 0,
  "homogeneity_measure_metres": 0,
  "vegetation_mapping_substrate_cover": 0,
  "vegetation_mapping_species_covers": [0],
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

#### `position`

The `position` key maps to the attribute `geo:hasGeometry` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `photos`

The `photos` key maps to photos(`tern:Sample`) taken during 'taking photos'(`tern:Sampling`) for materials on site. Each photo has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `veg_growth_stage`

The `veg_growth_stage` key maps to a `tern:Observation` with the observable property 'growth stage'.

#### `disturbance`

The `disturbance` key maps to a `tern:Observation` with the observable property 'disturbance type'.

#### `fire_history`

The `fire_history` key maps to a `tern:Observation` with the observable property 'fire history'.

#### `comment`

The `comment` key maps to the property `rdfs:comment` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/1>
    a tern:Observation ;
    rdfs:comment "The measure is confident."^^xsd:string ;
.
```

#### `vegetation_mapping_survey`

The `vegetation_mapping_survey` key maps to the `tern:SiteVisit` class.

#### `homogeneity_measure_metres`

The `homogeneity_measure_metres` key maps to a `tern:Observation` with the observable property 'homogeneity measure'.

#### `vegetation_mapping_substrate_cover`

The `vegetation_mapping_substrate_cover` key maps to a `tern:ObservationCollection` with a list of `tern:Observation` on substrate cover observations, for example, `bare cover percent` and `litter cover percent`.

##### Example

```turtle
<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "Collection of observations on substrate cover."^^xsd:string ;
    sosa:hasMember <https://example.com/observation/bare-cover-percent/1>, <https://example.com/observation/litter-cover-percent/1> ;
.
```

#### `vegetation_mapping_species_covers`

The `vegetation_mapping_species_covers` key maps to a `tern:ObservationCollection` with a list of `tern:Observation` on plant population observations, for example, `field species name` and `maximum height`.

##### Example

```turtle
<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "Collection of observations on plant population."^^xsd:string ;
    sosa:hasMember <https://example.com/observation/field-species-name/1>, <https://example.com/observation/maximum-height/1> ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Vegetation Mapping species cover measurements

- [OpenAPI docs for vegetation mapping species cover observations](https://beta.core-api.paratoo.tern.org.au/documentation#/Vegetation-mapping-species-cover/post%2Fvegetation-mapping-species-covers)

```json
{
  "species_name": "string",
  "percentage_cover": 0,
  "growth_form": "V",
  "height_metres": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. The feature of interest is plant population with the feature type `plant population`.

#### `species_name`

The `species_name` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `percentage_cover`

The `percentage_cover` key maps to a `tern:Observation` with the observable property 'foliage projective cover'.

#### `growth_form`

The `growth_form` key maps to a `tern:Observation` with the observable property 'dominant growth form'.

#### `height_metres`

The `height_metres` key maps to a `tern:Observation` with the observable property 'maximum height'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Vegetation Mapping substrate cover measurements

- [OpenAPI docs for vegetation mapping substrate cover observations](https://beta.core-api.paratoo.tern.org.au/documentation#/Vegetation-mapping-substrate-cover/post%2Fvegetation-mapping-substrate-covers)

```json
{
  "bare_cover_percent": 0,
  "cryptogam_cover_percent": 0,
  "outcrop_cover_percent": 0,
  "litter_cover_percent": 0,
  "rock_cover_percent": 0,
  "coarse_woody_debris_cover_percent": 0,
  "gravel_cover_percent": 0,
  "unknown_cover_percent": 0,
  "vegetation_mapping_observation": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. The feature of interest is land surface substrate with the feature type `land surface substrate`.

#### `bare_cover_percent`

The `bare_cover_percent` key maps to a `tern:Observation` with the observable property 'bare cover percent'.

#### `cryptogam_cover_percent`

The `cryptogam_cover_percent` key maps to a `tern:Observation` with the observable property 'cryptogam cover percent'.

#### `outcrop_cover_percent`

The `outcrop_cover_percent` key maps to a `tern:Observation` with the observable property 'outcrop cover percent'.

#### `litter_cover_percent`

The `litter_cover_percent` key maps to a `tern:Observation` with the observable property 'litter cover percent'.

#### `rock_cover_percent`

The `rock_cover_percent` key maps to a `tern:Observation` with the observable property 'rock cover percent'.

#### `coarse_woody_debris_cover_percent`

The `coarse_woody_debris_cover_percent` key maps to a `tern:Observation` with the observable property 'coarse woody debris cover percent'.

#### `gravel_cover_percent`

The `gravel_cover_percent` key maps to a `tern:Observation` with the observable property 'gravel cover percent'.

#### `unknown_cover_percent`

The `unknown_cover_percent` key maps to a `tern:Observation` with the observable property 'unknown cover percent'.

#### `vegetation_mapping_observation`

The `vegetation_mapping_observation` key maps to the `tern:Observation` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix tern-loc: <https://w3id.org/tern/ontologies/loc/> .
@prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix dwc: <http://rs.tdwg.org/dwc/terms/> .
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
    tern:hasAttribute [
        rdfs:label "plot name" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
        tern:hasSimpleValue "The Jones Stream Study Plot" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The Jones Stream Study Plot" ;
        ] ;
    ] ;
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
        wgs84:lat "-30.920849"^^xsd:double ;
        wgs84:long "152.242400"^^xsd:double ;
    ] ;
.

<https://example.com/site/1/image/1/sampling> a tern:Sampling ;
    rdfs:label "taking photos" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:resultTime "2022-11-11T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/15361f98-7669-410e-9b04-e9be069c7508> ;
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
    sosa:isResultOf <https://example.com/site/1/image/1/sampling> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
    tern:hasAttribute [
        rdfs:label "photo description" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
        tern:hasSimpleValue "The photo is kind of blur." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The photo is kind of blur." ;
        ] ;
    ] ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "land surface disturbance 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/7e256d28-e686-4b6a-b64a-ac1b1a8f164d> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/2>
    a tern:Sample ;
    rdfs:label "plant population 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/3>
    a tern:Sample ;
    rdfs:label "vegetation disturbance 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/d4fc54b1-0ad3-4512-86b7-d42b121ece45> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/4>
    a tern:Sample ;
    rdfs:label "land surface substrate 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/aef12cd6-3826-4988-a54c-8578d3fb4c8d> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/5>
    a tern:Sample ;
    rdfs:label "plant community 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation/disturbance-type/1>
    a tern:Observation ;
    rdfs:label "disturbance type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Complete clearing; pasture; has been cultivated" ;
        rdf:value <https://linked.data.gov.au/def/nrm/ce421b31-7cbe-55e2-9380-d8985c1817e3> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/ce421b31-7cbe-55e2-9380-d8985c1817e3> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/632e4c3c-0e73-4b3d-b1d6-7b38897da5e8> ;
.

<https://example.com/observation/fire-history/1>
    a tern:Observation ;
    rdfs:label "fire history" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Unburnt" ;
        rdf:value <https://linked.data.gov.au/def/nrm/f757667d-3e74-53f6-8b35-08d286d1ed26> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f757667d-3e74-53f6-8b35-08d286d1ed26> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cf1aef8a-a782-4480-9c41-a7f6d170d7fc> ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/15361f98-7669-410e-9b04-e9be069c7508> ;
    sosa:hasMember <https://example.com/observation/field-species-name/1>,
        <https://example.com/observation/maximum-height/1>,
        <https://example.com/observation/dominant-growth-form/1>,
        <https://example.com/observation/foliage-projective-cover/1> ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface substrate" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/15361f98-7669-410e-9b04-e9be069c7508> ;
    sosa:hasMember <https://example.com/observation/physical-substrate-cover/1>,
        <https://example.com/observation/bare-cover-percent/1>,
        <https://example.com/observation/cryptogam-cover-percent/1>,
        <https://example.com/observation/litter-cover-percent/1>,
        <https://example.com/observation/coarse-woody-debris-cover-percent/1>,
        <https://example.com/observation/unknown-cover-percent/1>,
        <https://example.com/observation/gravel-cover-percent/1>,
        <https://example.com/observation/rock-cover-percent/1>,
        <https://example.com/observation/outcrop-cover-percent/1> ;
.

<https://example.com/observation-collection/3>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant community" ;
    dcterms:identifier "observationCollection3"^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/15361f98-7669-410e-9b04-e9be069c7508> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat -30.920849^^xsd:double ;
        wgs84:long 152.242400^^xsd:double ;
    ] ;
    sosa:hasMember <https://example.com/observation/growth-stage/1>,
        <https://example.com/observation/homogeneity-measure/1> ;
.

<https://example.com/plant-vouchering/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photos are taken for this sample" ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/15361f98-7669-410e-9b04-e9be069c7508> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T05:38:02"^^xsd:dateTime ;
    sosa:hasResult <https://example.com/site/1/plant-vouchering/specimen/1> ;
.

<https://example.com/site/1/plant-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "flora vouchering specimen 1" ;
    sosa:isResultOf <https://example.com/plant-tissue-vouchering/1> ;
    dwc:materialSampleID "materialSample1" ;
    sosa:isSampleOf <https://example.com/feature-of-interest/2> ;
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
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2e122e23-881c-43fa-a921-a8745f016ceb> ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Pine" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Pine" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
.

<https://example.com/observation/dominant-growth-form/1>
    a tern:Observation ;
    rdfs:label "dominant growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/d844b23f-3d82-53b0-8d1f-128fc729d3bb> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Ferns" ;
            rdf:value <https://linked.data.gov.au/def/nrm/d844b23f-3d82-53b0-8d1f-128fc729d3bb> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4a550407-5158-497c-982a-9f1b662b73e9> ;
.

<https://example.com/observation/maximum-height/1>
    a tern:Observation ;
    rdfs:label "maximum height" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/da5bd3cd-e52c-4cfe-9ab6-ac9474eb94ff> ;
.

<https://example.com/observation/foliage-projective-cover/1>
    a tern:Observation ;
    rdfs:label "foliage projective cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0378976a-0018-4604-826d-1886ca5f38c3> ;
.

<https://example.com/observation/growth-stage/1>
    a tern:Observation ;
    rdfs:label "growth stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Mature" ;
        rdf:value <https://linked.data.gov.au/def/nrm/5bce18a8-4e8c-574f-881b-625bd9240cbc> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5bce18a8-4e8c-574f-881b-625bd9240cbc> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fcfda2f7-84f0-4c26-9f80-c051d129a094> ;
.

<https://example.com/observation/homogeneity-measure/1>
    a tern:Observation ;
    rdfs:label "homogeneity measure" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 12.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 12.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/325d5ff2-8c81-484a-a422-c13ff29666a9> ;
.

<https://example.com/observation/physical-substrate-cover/1>
    a tern:Observation ;
    rdfs:label "physical substrate cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cbea81bc-2447-4c78-bab8-54d6637e2178> ;
.

<https://example.com/observation/bare-cover-percent/1>
    a tern:Observation ;
    rdfs:label "bare cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3f03e64f-5f56-48dc-8905-c1bf55beab85> ;
.

<https://example.com/observation/cryptogam-cover-percent/1>
    a tern:Observation ;
    rdfs:label "cryptogam cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d3a83bd2-3d18-4a9a-8afd-d87b621ba9e4> ;
.

<https://example.com/observation/outcrop-cover-percent/1>
    a tern:Observation ;
    rdfs:label "outcrop cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5fa7e967-0a35-4358-a0ca-e3aede246cc9> ;
.

<https://example.com/observation/litter-cover-percent/1>
    a tern:Observation ;
    rdfs:label "litter cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/37e674fc-4a9c-4865-86e3-428926093ec9> ;
.

<https://example.com/observation/rock-cover-percent/1>
    a tern:Observation ;
    rdfs:label "rock cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6539982d-2792-461e-82c8-dbe55e985d45> ;
.

<https://example.com/observation/unknown-cover-percent/1>
    a tern:Observation ;
    rdfs:label "unknown cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cfb18d54-16ba-48f4-8eef-b5aa3cf7db2f> ;
.

<https://example.com/observation/coarse-woody-debris-cover-percent/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e73e3079-9858-42c6-b418-36326a6d0ddd> ;
.

<https://example.com/observation/gravel-cover-percent/1>
    a tern:Observation ;
    rdfs:label "gravel cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 13.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 13.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6b291f9f-3ab0-47c6-ac28-991d5009de71> ;
.

```

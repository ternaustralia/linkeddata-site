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

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=vegetation-mapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D16CzfsvBI087OVKooSSVyb02kfKo4hlf3%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=vegetation-mapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D16CzfsvBI087OVKooSSVyb02kfKo4hlf3%26export%3Ddownload">View diagram in new tab.</a>

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

The `location` key map sto the attribute `geo:hasGeometry` on the `tern:Site` class.

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

The `position` key map sto the attribute `geo:hasGeometry` on the `tern:Observation` class.

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

The `vegetation_mapping_species_covers` key maps to a `tern:Observation` with an observable property related to substrate cover, for example, `bare cover percent` and `litter cover percent`.

##### Example

```turtle
<https://example.com/observation/bare-cover-percent/1>
    a tern:Observation ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 33.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 33.81^^xsd:float ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

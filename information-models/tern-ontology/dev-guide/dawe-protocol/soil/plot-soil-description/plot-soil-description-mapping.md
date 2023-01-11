---
sidebar_position: 2
---

# Plot Soil Description protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot soil description protocol](https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/plot-soil-description/overview) for the feature type and value type information.

## Conceptual modelling

The Plot soil description module records data about the site for the following feature types:

- landform
- land surface
- land surface substrate
- land surface disturbance
- soil profile

These observations are recorded for each site during a site visit.

This module describes important aspects of the soil surface within the plot in accordance with the Australian Soil and Land Survey Handbook (The National Committee on Soil and Terrain 2009), including plot identification and location details, slope, landform element and pattern, erosion, microrelief, drainage, disturbance, and soil surface condition (when dry). Critical to describe, measure and sample the soil profile, and assign an Australian Soil Classification.

### Diagram

The following diagram shows the Plot Soil Description protocol mapping. Purple nodes are things related to 'land surface' feature type. Yellow nodes are things related to 'landform' feature type. Orange nodes are things related to 'land surface substrate' feature type. Green nodes are things related to 'soil profile' feature type. Blue nodes are things related to 'land surface disturbance' feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy&layers=1&nav=1&title=soil-plot-soil-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy&layers=1&nav=1&title=soil-plot-soil-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Plot Soil Description measurements

- [OpenAPI docs for plot soil description](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-soil-description-survey/post%2Fplot-soil-description-surveys)

```json
{
  "start_date_time": "2023-01-10T01:07:56.944Z",
  "end_date_time": "2023-01-10T01:07:56.944Z",
  "surveyId": "string",
  "plot_visit": 0,
  "slope_percent": 0,
  "slope_aspect": 0,
  "evaluation_means": "T",
  "slope_class": "LE",
  "morphological_type": "C",
  "inclination_of_slope_element": "X",
  "relief": "M",
  "modal_slope": "LE",
  "runoff": "0",
  "permeability": "1",
  "coarse_frag_abundance": "0",
  "coarse_frag_size": "1",
  "coarse_frag_shape": "n/a",
  "coarse_frag_lithology": "NA",
  "coarse_frag_strength": "VW",
  "coarse_frag_alteration": "F",
  "rock_outcrop_abundance": "0",
  "rock_outcrop_lithology": "NA",
  "surface_soil_condition": "C",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `start_date_time`

The `start_date_time` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date_time`

The `end_date_time` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `slope_percent`

The `slope_percent` key maps to a `tern:Observation` with the observable property 'slope'.

#### `slope_aspect`

The `slope_aspect` key maps to a `tern:Observation` with the observable property 'aspect'.

#### `evaluation_means`

The `evaluation_means` key maps to the attribute `slope- means of evaluation` in [Soil module - Plot soil description protocol Attributes](https://linked.data.gov.au/def/nrm/16a1a45f-b4a4-4eef-af45-2b72477a4178), and is linked to `tern:Observation` by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "slope- means of evaluation" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/2c26a8c4-757f-4889-a94d-1f9a0a19574a> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/13bbc385-e992-5b63-b860-99310238f15f> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Abney level or clinometer and tape" ;
            rdf:value <https://linked.data.gov.au/def/nrm/13bbc385-e992-5b63-b860-99310238f15f> ;
        ] ;
    ] ;
```

#### `slope_class`

The `slope_class` key maps to a `tern:Observation` with the observable property 'slope class'.

#### `morphological_type`

The `morphological_type` key maps to a `tern:Observation` with the observable property 'slope morphology type'.

#### `inclination_of_slope_element`

The `inclination_of_slope_element` key maps to a `tern:Observation` with the observable property 'relative inclination of slope elements'.

#### `relief`

The `relief` key maps to a `tern:Observation` with the observable property 'landform relief'.

#### `modal_slope`

The `modal_slope` key maps to a `tern:Observation` with the observable property 'modal slope'.

#### `runoff`

The `runoff` key maps to a `tern:Observation` with the observable property 'soil runoff'.

#### `permeability`

The `permeability` key maps to a `tern:Observation` with the observable property 'soil permeability'.

#### `coarse_frag_abundance`

The `coarse_frag_abundance` key maps to a `tern:Observation` with the observable property 'coarse fragments abundance'.

#### `coarse_frag_size`

The `coarse_frag_size` key maps to a `tern:Observation` with the observable property 'size of coarse fragments'.

#### `coarse_frag_shape`

The `coarse_frag_shape` key maps to a `tern:Observation` with the observable property 'shape of coarse fragments'.

#### `coarse_frag_lithology`

The `coarse_frag_lithology` key maps to a `tern:Observation` with the observable property 'coarse fragments lithology'.

#### `coarse_frag_strength`

The `coarse_frag_strength` key maps to a `tern:Observation` with the observable property 'soil- coarse fragment strength'.

#### `coarse_frag_alteration`

The `coarse_frag_alteration` key maps to a `tern:Observation` with the observable property 'soil- coarse fragment alteration'.

#### `rock_outcrop_abundance`

The `rock_outcrop_abundance` key maps to a `tern:Observation` with the observable property 'rock outcrop abundance'.

#### `rock_outcrop_lithology`

The `rock_outcrop_lithology` key maps to a `tern:Observation` with the observable property 'rock outcrop lithology'.

#### `surface_soil_condition`

The `surface_soil_condition` key maps to a `tern:Observation` with the observable property 'condition of soil surface when dry'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix schema: <https://schema.org/> .
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



```

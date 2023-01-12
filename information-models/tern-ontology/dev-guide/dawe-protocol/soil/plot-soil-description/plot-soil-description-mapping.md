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

<https://example.com/site/1>
    a tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    dcterms:identifier "site001"^^xsd:string ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat "-29.920855"^^xsd:double ;
        wgs84:long "151.242405"^^xsd:double ;
        tern-loc:pointType "south west" ;
        tern:hasAttribute [
            rdfs:label "plot sw corner dsecription" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/65ffa9ec-e16e-42d9-9fb1-e7d869f2f01f> ;
            tern:hasSimpleValue "There are some trees."^^xsd:string ;
            tern:hasValue [
                a tern:Text ;
                rdf:value "There are some trees."^^xsd:string ;
            ] ;
        ] ;
    ] ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    tern:locationDescription "The weather is sunny."^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-05T03:16:42.783Z" ;
    prov:endedAtTime "2022-11-05T03:18:42.783Z" ;
    tern:hasSite <https://example.com/site/1> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs84:lat "-29.920849"^^xsd:double ;
        wgs84:long "151.242400"^^xsd:double ;
    ] ;
    prov:wasAssociatedWith [
        a <https://w3id.org/tern/ontologies/org/Person> ;
        schema:name "Paul Green" ;
    ] ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "landform 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/2>
    a tern:Sample ;
    rdfs:label "land surface substrate 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/aef12cd6-3826-4988-a54c-8578d3fb4c8d> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/3>
    a tern:Sample ;
    rdfs:label "soil profile 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/80c39b95-0912-4267-bb66-2fa081683723> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/4>
    a tern:Sample ;
    rdfs:label "land surface disturbance 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/7e256d28-e686-4b6a-b64a-ac1b1a8f164d> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/5>
    a tern:Sample ;
    rdfs:label "land surface 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8282fb22-4135-415c-8ca2-317860d102fb> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on landform" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    sosa:hasMember <https://example.com/observation/slope/1>,
        <https://example.com/observation/slope-class/1>,
        <https://example.com/observation/landform-pattern/1>,
        <https://example.com/observation/landform-element/1>,
        <https://example.com/observation/relative-inclination-of-slope-elements/1>,
        <https://example.com/observation/slope-morphology-type/1>,
        <https://example.com/observation/landform-relief/1>,
        <https://example.com/observation/modal-slope/1>,
        <https://example.com/observation/slope-percent-tangent/1>,
        <https://example.com/observation/aspect/1> ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface substrate" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    sosa:hasMember <https://example.com/observation/coarse-fragments-abundance/1>,
        <https://example.com/observation/soil-coarse-fragment-strength/1>,
        <https://example.com/observation/size-of-coarse-fragments/1>,
        <https://example.com/observation/coarse-fragments-lithology/1>,
        <https://example.com/observation/shape-of-coarse-fragments/1>,
        <https://example.com/observation/surface-strew-lithology/1>,
        <https://example.com/observation/soil-coarse-fragment-alteration/1> ;
.

<https://example.com/observation-collection/3>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil profile" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    sosa:hasMember <https://example.com/observation/soil-drainage/1>,
        <https://example.com/observation/soil-permeability/1> ;
.

<https://example.com/observation-collection/4>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface disturbance" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    sosa:hasMember <https://example.com/observation/disturbance-type/1>,
        <https://example.com/observation/erosion-type/1>,
        <https://example.com/observation/gully-depth/1>,
        <https://example.com/observation/scald-erosion-degree/1>,
        <https://example.com/observation/water-mass-movement-erosion-degree/1>,
        <https://example.com/observation/water-stream-bank-erosion-degree/1>,
        <https://example.com/observation/water-tunnel-erosion-degree/1>,
        <https://example.com/observation/water-gully-erosion-degree/1>,
        <https://example.com/observation/water-wave-erosion-degree/1>,
        <https://example.com/observation/water-sheet-erosion-degree/1>,
        <https://example.com/observation/wind-erosion-degree/1>,
        <https://example.com/observation/water-rill-erosion-degree/1>,
        <https://example.com/observation/state-of-erosion/1> ;
.

<https://example.com/observation-collection/5>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    sosa:hasMember <https://example.com/observation/component-of-microrelief/1>,
        <https://example.com/observation/microrelief-horizontal-interval-distance/1>,
        <https://example.com/observation/microrelief-biotic-agent/1>,
        <https://example.com/observation/rock-outcrop-lithology/1>,
        <https://example.com/observation/condition-of-soil-surface-when-dry/1>,
        <https://example.com/observation/microrelief-vertical-interval-distance/1>,
        <https://example.com/observation/rock-outcrop-abundance/1>,
        <https://example.com/observation/soil-microrelief-hummocky/1>,
        <https://example.com/observation/soil-microrelief-proportion-of-gilgai-components/1>,
        <https://example.com/observation/soil-runoff/1>,
        <https://example.com/observation/soil-microrelief-type/1>,
        <https://example.com/observation/soil-microrelief-gilgai/1> ;
.

<https://example.com/observation/slope/1>
    a tern:Observation ;
    rdfs:label "slope" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value "33.81"^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/DEG> ;
    ] ;
    sosa:hasSimpleResult "33.81"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b036ba09-d061-4a1c-99a8-890efc462a2c> ;
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
.

<https://example.com/observation/slope-class/1>
    a tern:Observation ;
    rdfs:label "slope class" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasInformedBy <https://example.com/observation/slope/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Steep" ;
        rdf:value <https://linked.data.gov.au/def/nrm/c7a54110-88db-5334-8ff4-cd3ef319ba79> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c7a54110-88db-5334-8ff4-cd3ef319ba79> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/132a1452-4fd7-473c-956b-3183dd315b67> ;
.

<https://example.com/observation/landform-pattern/1>
    a tern:Observation ;
    rdfs:label "landform pattern" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasInformedBy <https://example.com/observation/slope-class/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Hills" ;
        rdf:value <https://linked.data.gov.au/def/nrm/f19b8f62-9cc0-5c39-af77-3d198e05844c> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f19b8f62-9cc0-5c39-af77-3d198e05844c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/58e4aba5-78c3-4361-b08a-ae39a93c8cb0> ;
.

<https://example.com/observation/aspect/1>
    a tern:Observation ;
    rdfs:label "aspect" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value "15.6"^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/DEG> ;
    ] ;
    sosa:hasSimpleResult "15.6"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e0423c6-0dc3-40aa-9776-410a94299256> ;
.

<https://example.com/observation/landform-element/1>
    a tern:Observation ;
    rdfs:label "landform element" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Beach" ;
        rdf:value <https://linked.data.gov.au/def/nrm/7987ec07-7798-58e6-ba90-d1eef7ccca57> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7987ec07-7798-58e6-ba90-d1eef7ccca57> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9d4f8a2d-8e77-42dd-857b-0ecbc9c85696> ;
.

<https://example.com/observation/relative-inclination-of-slope-elements/1>
    a tern:Observation ;
    rdfs:label "relative inclination of slope elements" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Maximal" ;
        rdf:value <https://linked.data.gov.au/def/nrm/67972070-9144-5353-912e-4c9eba951d04> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/67972070-9144-5353-912e-4c9eba951d04> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/30453b41-80b6-42d8-a388-893188414738> ;
.

<https://example.com/observation/slope-morphology-type/1>
    a tern:Observation ;
    rdfs:label "slope morphology type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Flat" ;
        rdf:value <https://linked.data.gov.au/def/nrm/5b64674f-c553-5422-b5a1-e97b4d380c98> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5b64674f-c553-5422-b5a1-e97b4d380c98> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b023d177-2c9b-4d58-86e6-099b742fcf1c> ;
.

<https://example.com/observation/landform-relief/1>
    a tern:Observation ;
    rdfs:label "landform relief" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Extremely low ( <9m)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/d9c0eb4d-858e-54f6-8b6c-f67939e3fb40> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/d9c0eb4d-858e-54f6-8b6c-f67939e3fb40> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/148f60c9-92c5-4324-81b6-61b59bccdb4c> ;
.

<https://example.com/observation/modal-slope/1>
    a tern:Observation ;
    rdfs:label "modal slope" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Gently inclined (3-10%)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/1166f6bb-c689-59a5-aa2e-c8e03c649f4b> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1166f6bb-c689-59a5-aa2e-c8e03c649f4b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3f1ae206-0be8-4284-bce5-9f3a787a9baa> ;
.

<https://example.com/observation/slope-percent-tangent/1>
    a tern:Observation ;
    rdfs:label "slope percent tangent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value "33.81"^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult "33.81"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/bc537f95-6721-4a87-bd30-62d6377424ef> ;
.

<https://example.com/observation/coarse-fragments-abundance/1>
    a tern:Observation ;
    rdfs:label "coarse fragments abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Extremely or abundant (> 90%)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/7a8698da-4624-5b9d-83db-8b384a00fb52> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7a8698da-4624-5b9d-83db-8b384a00fb52> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b3dd4df5-589b-476e-8e9e-0af6a7155759> ;
.

<https://example.com/observation/coarse-fragments-lithology/1>
    a tern:Observation ;
    rdfs:label "coarse fragments lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Adamellite" ;
        rdf:value <https://linked.data.gov.au/def/nrm/17f2a1b5-8e0a-558e-994e-79f92dd07610> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/17f2a1b5-8e0a-558e-994e-79f92dd07610> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4062f093-424b-441e-86fc-648d820ae1fb> ;
.

<https://example.com/observation/soil-coarse-fragment-strength/1>
    a tern:Observation ;
    rdfs:label "soil- coarse fragment strength" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Moderately strong rock (50-100 MPa)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/e2195e41-5b55-5ebe-a213-e73a57e2352b> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/e2195e41-5b55-5ebe-a213-e73a57e2352b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7739f6d5-06dd-42da-82ae-763fd62ff0f0> ;
.

<https://example.com/observation/size-of-coarse-fragments/1>
    a tern:Observation ;
    rdfs:label "size of coarse fragments" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Bouldery or boulders (600-2000mm)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/d713e14a-f329-551b-9d57-3930f0bf40ea> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/d713e14a-f329-551b-9d57-3930f0bf40ea> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5e84255c-6207-4bda-88c7-ed0d2a400519> ;
.

<https://example.com/observation/shape-of-coarse-fragments/1>
    a tern:Observation ;
    rdfs:label "shape of coarse fragments" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Angular" ;
        rdf:value <https://linked.data.gov.au/def/nrm/3f14295f-a658-5836-90e8-00f40e161059> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/3f14295f-a658-5836-90e8-00f40e161059> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/13c64e0f-4e24-4081-9744-2744599914c9> ;
.

<https://example.com/observation/surface-strew-lithology/1>
    a tern:Observation ;
    rdfs:label "surface strew lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Adamellite" ;
        rdf:value <https://linked.data.gov.au/def/nrm/17f2a1b5-8e0a-558e-994e-79f92dd07610> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/17f2a1b5-8e0a-558e-994e-79f92dd07610> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6ee380ca-e9dc-4a9b-91c3-758b54e751eb> ;
.

<https://example.com/observation/soil-coarse-fragment-alteration/1>
    a tern:Observation ;
    rdfs:label "soil- coarse fragment alteration" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Calcified" ;
        rdf:value <https://linked.data.gov.au/def/nrm/77eb0db7-56bc-5cdf-b1ef-aae71c3d2e9c> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/77eb0db7-56bc-5cdf-b1ef-aae71c3d2e9c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e38d6585-30f4-4a50-bb3f-f9481ce9c595> ;
.

<https://example.com/observation/soil-drainage/1>
    a tern:Observation ;
    rdfs:label "soil drainage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Imperfect" ;
        rdf:value <https://linked.data.gov.au/def/nrm/16413e7c-aadb-5dc0-8f3d-2425e96bde1a> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/16413e7c-aadb-5dc0-8f3d-2425e96bde1a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/c4ae89f9-49cb-4be8-b5f2-5f08177b8093> ;
.

<https://example.com/observation/soil-permeability/1>
    a tern:Observation ;
    rdfs:label "soil permeability" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Moderately permeable" ;
        rdf:value <https://linked.data.gov.au/def/nrm/5d248ba2-5b21-5cd0-acde-899f913d94e1> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5d248ba2-5b21-5cd0-acde-899f913d94e1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3f431e7a-6f1c-4dcd-b452-1cb14226a56d> ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/632e4c3c-0e73-4b3d-b1d6-7b38897da5e8> ;
.

<https://example.com/observation/erosion-type/1>
    a tern:Observation ;
    rdfs:label "erosion type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Gully" ;
        rdf:value <https://linked.data.gov.au/def/nrm/fc383f20-7247-508a-b3eb-a9efa4ccc786> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/fc383f20-7247-508a-b3eb-a9efa4ccc786> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9fc1503b-e690-41f0-a824-99f0e69699f1> ;
.

<https://example.com/observation/gully-depth/1>
    a tern:Observation ;
    rdfs:label "gully depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "1.5-3.0m" ;
        rdf:value <https://linked.data.gov.au/def/nrm/ea29e1f6-541c-5265-9600-b2e2f6f4dffd> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/ea29e1f6-541c-5265-9600-b2e2f6f4dffd> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4aa9e813-8c4c-4fa6-953b-32c59fdd97be> ;
.

<https://example.com/observation/scald-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "scald erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Minor scalding (<5%)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/a8f8fcbe-12d1-5c74-bbb3-b31fb551b96a> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/a8f8fcbe-12d1-5c74-bbb3-b31fb551b96a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9c8486f2-d97e-40cf-aadb-66082452af54> ;
.

<https://example.com/observation/water-mass-movement-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water - mass movement erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "No mass movement" ;
        rdf:value <https://linked.data.gov.au/def/nrm/c4684611-67f1-5896-b91a-4ff80902e04a> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c4684611-67f1-5896-b91a-4ff80902e04a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5af56582-cc92-4892-98f6-793047e7b5c2> ;
.

<https://example.com/observation/water-stream-bank-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water- stream bank erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "No stream bank erosion" ;
        rdf:value <https://linked.data.gov.au/def/nrm/1d55b317-1819-5bb7-ac2c-9e3cc510e9c7> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1d55b317-1819-5bb7-ac2c-9e3cc510e9c7> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6495fa13-99a9-4947-9ac7-913bb6e9e625> ;
.

<https://example.com/observation/water-tunnel-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water- tunnel erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "No tunnel erosion" ;
        rdf:value <https://linked.data.gov.au/def/nrm/639164f3-3d1a-5fb3-a631-189ff3f418ca> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/639164f3-3d1a-5fb3-a631-189ff3f418ca> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4528bf7c-5182-49a8-bedc-53c70f5e0dcd> ;
.

<https://example.com/observation/water-gully-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-gully erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Minor" ;
        rdf:value <https://linked.data.gov.au/def/nrm/88fe2081-a6a9-55f1-98a6-86814234170b> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/88fe2081-a6a9-55f1-98a6-86814234170b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a43e0dc9-b886-41ba-84df-22225879b05f> ;
.

<https://example.com/observation/water-wave-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-wave erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "No wave erosion" ;
        rdf:value <https://linked.data.gov.au/def/nrm/0814bacb-1865-5ddc-beba-9662eb2e4136> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0814bacb-1865-5ddc-beba-9662eb2e4136> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3496cdd1-9c4a-47c6-a949-83f5c2724ed9> ;
.

<https://example.com/observation/water-sheet-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-sheet erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Minor" ;
        rdf:value <https://linked.data.gov.au/def/nrm/1fe5ec06-6e8f-5514-9e81-1f9a41f90e24> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1fe5ec06-6e8f-5514-9e81-1f9a41f90e24> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5f39a69f-c740-47e6-96d6-4ae18548830f> ;
.

<https://example.com/observation/wind-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "wind erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Not apparent" ;
        rdf:value <https://linked.data.gov.au/def/nrm/e0454763-6bf1-5e97-a82d-2eb8f476242e> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/e0454763-6bf1-5e97-a82d-2eb8f476242e> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9dc64e42-c670-4682-8314-fcb35e3d74f4> ;
.

<https://example.com/observation/water-rill-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-rill erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "No rill erosion" ;
        rdf:value <https://linked.data.gov.au/def/nrm/4c160cbf-02da-59fa-afff-f7bda26081e0> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4c160cbf-02da-59fa-afff-f7bda26081e0> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5b9b43b7-6d79-4e92-bbbf-f9ec71a9e1d9> ;
.

<https://example.com/observation/state-of-erosion/1>
    a tern:Observation ;
    rdfs:label "state of erosion" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Absent" ;
        rdf:value <https://linked.data.gov.au/def/nrm/4b24ea88-1a04-5cd5-ab31-fc61cd4b5a45> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4b24ea88-1a04-5cd5-ab31-fc61cd4b5a45> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3c5263b7-8104-46a9-af05-a0c33aadde07> ;
.

<https://example.com/observation/component-of-microrelief/1>
    a tern:Observation ;
    rdfs:label "component of microrelief" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Depression" ;
        rdf:value <https://linked.data.gov.au/def/nrm/cce656da-7f5d-54b3-8a83-09e80b4d79d9> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/cce656da-7f5d-54b3-8a83-09e80b4d79d9> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7f023c76-32e1-4c08-a52f-b900343b4b92> ;
.

<https://example.com/observation/condition-of-soil-surface-when-dry/1>
    a tern:Observation ;
    rdfs:label "condition of soil surface when dry" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Cracking" ;
        rdf:value <https://linked.data.gov.au/def/nrm/e9973051-e696-5ea2-bb11-3e57e0f9acdc> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/e9973051-e696-5ea2-bb11-3e57e0f9acdc> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3a1ccb70-41dc-4f57-a74c-62e05aa02c61> ;
.

<https://example.com/observation/soil-microrelief-proportion-of-gilgai-components/1>
    a tern:Observation ;
    rdfs:label "soil microrelief- proportion of gilgai components" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Equal mounds and depressions; no shelf present" ;
        rdf:value <https://linked.data.gov.au/def/nrm/1455fcc0-d069-50d5-ba83-b372c5227f98> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1455fcc0-d069-50d5-ba83-b372c5227f98> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e2c87884-5edf-4d87-a67d-6a13cf59e051> ;
.

<https://example.com/observation/microrelief-horizontal-interval-distance/1>
    a tern:Observation ;
    rdfs:label "microrelief horizontal interval distance" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value "15.6"^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult "15.6"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/22caefc0-0201-4bf2-a108-ef173d607bf4> ;
.

<https://example.com/observation/microrelief-vertical-interval-distance/1>
    a tern:Observation ;
    rdfs:label "microrelief vertical interval distance" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value "15.6"^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult "15.6"^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2f87b7cc-c029-4784-92cf-c32055b5c9b7> ;
.

<https://example.com/observation/soil-runoff/1>
    a tern:Observation ;
    rdfs:label "soil runoff" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Moderately rapid" ;
        rdf:value <https://linked.data.gov.au/def/nrm/652968b5-2955-5691-8621-f1f5087a5be5> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/652968b5-2955-5691-8621-f1f5087a5be5> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/054d2441-05fd-45d5-9480-ed7618005642> ;
.

<https://example.com/observation/microrelief-biotic-agent/1>
    a tern:Observation ;
    rdfs:label "microrelief- biotic agent" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Animal" ;
        rdf:value <https://linked.data.gov.au/def/nrm/99a61920-4b56-5c48-8b4d-094db3ecdd4a> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/99a61920-4b56-5c48-8b4d-094db3ecdd4a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e3dc0901-0bad-4157-bcb3-58aaffda313c> ;
.

<https://example.com/observation/rock-outcrop-abundance/1>
    a tern:Observation ;
    rdfs:label "rock outcrop abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "No rock outcrop (no bedrock exposed)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/a7462127-0fb2-5baa-ab18-4439ec020df1> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/a7462127-0fb2-5baa-ab18-4439ec020df1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fc03df84-7ac9-47c6-9b7b-1da3dcb36364> ;
.

<https://example.com/observation/soil-microrelief-type/1>
    a tern:Observation ;
    rdfs:label "soil microrelief type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Biotic" ;
        rdf:value <https://linked.data.gov.au/def/nrm/1652b8df-f21d-55c2-bd0d-9cd6014fe01d> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1652b8df-f21d-55c2-bd0d-9cd6014fe01d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3014409e-fa76-4159-8bd7-0a3bae695545> ;
.

<https://example.com/observation/rock-outcrop-lithology/1>
    a tern:Observation ;
    rdfs:label "rock outcrop lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Adamellite" ;
        rdf:value <https://linked.data.gov.au/def/nrm/17f2a1b5-8e0a-558e-994e-79f92dd07610> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/17f2a1b5-8e0a-558e-994e-79f92dd07610> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5af5cef1-179c-4bae-9037-42196668deff> ;
.

<https://example.com/observation/soil-microrelief-hummocky/1>
    a tern:Observation ;
    rdfs:label "soil microrelief- hummocky" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Debil-debil" ;
        rdf:value <https://linked.data.gov.au/def/nrm/4abcc303-545e-5276-bc31-8773dc655a28> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4abcc303-545e-5276-bc31-8773dc655a28> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/af8cc482-f896-4627-812a-9567af4662df> ;
.

<https://example.com/observation/soil-microrelief-gilgai/1>
    a tern:Observation ;
    rdfs:label "soil microrelief- gilgai" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Contour gilgai" ;
        rdf:value <https://linked.data.gov.au/def/nrm/196622c6-944f-57d0-818f-df63f27558a4> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/196622c6-944f-57d0-818f-df63f27558a4> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/46dc0c67-027b-4a79-bbf5-d12d39fe01f0> ;
.

```

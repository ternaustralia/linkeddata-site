---
sidebar_position: 2
---

# Plot Description protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot Description](https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32) protocol.

Mentions of observable properties should refer to [plot-description/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/plot-description-module/overview) for the feature type and value type information.

## Conceptual modelling

The Plot Description module records data about the site for the following feature types:

- climate
- landform
- land surface
- plant community
- vegetation stratum

These observations are recorded for each site during a site visit.

An NVIS Level 5 description will be automatically generated based on the entered vegetation information. The value of `structural formation` aligns with NVIS and is generated from the `growth form`, `height class`, and `cover` values.

The `slope` value is used to automatically calculate the `slope class` and help determine the `landform element`.

### Diagram

The following diagram is colour-coded to show the related things by feature type. The orange nodes are things related to the landform feature type and the yellow nodes are things related to the land surface feature type. Blue is for the climate feature type and green is for the vegetation stratum feature type. Lastly, purple is for the plant community feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Plot Description` protocol surveys:

- [OpenAPI docs for plot location](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-location/post%2Fplot-locations)
- [OpenAPI docs for plot visit](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-visit/post%2Fplot-visits)

1. Survey data from plot location:

```json
{
  "plot_label": "string",
  "comment": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `plot_label`

The `plot_label` key maps to the attribute `plot name` in [Plot Description Attributes](https://linked.data.gov.au/def/nrm/0183ecf9-7e7a-4481-ba43-a926dfc638f9), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
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
```

#### `comment`

The `comment` key maps to the property `rdfs:comment` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    rdfs:comment "The weather is sunny."^^xsd:string .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

2. Survey data from plot visit:

```json
{
  "start_date": "2022-12-08T09:10:08.112Z",
  "end_date": "2022-12-08T09:10:08.112Z",
  "plot_location": 0,
  "plot_physical_state_comments": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date`

The `end_date` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `plot_location`

The `plot_location` key maps to the attribute `geo:hasGeometry` on the `tern:Site` class.

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

#### `plot_physical_state_comments`

The `plot_physical_state_comments` key maps to the property `rdfs:comment` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    rdfs:comment "The weather is sunny."^^xsd:string .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping plot location measurements

- [OpenAPI docs for plot location measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-location/post%2Fplot-locations)

```json
{
  "plot_label": "string",
  "slope": 0,
  "slope_class": "LE",
  "aspect": 0,
  "landform_pattern": "FLO",
  "landform_element": "ALC",
  "outcrop_lithology": "NA",
  "surface_strew_lithology": "NA",
  "surface_strew_size": "0",
  "disturbance": "0",
  "comment": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. The feature of interest for 'slope', 'slope_class', 'aspect', 'landform_pattern', 'landform_element' is landform modelled as a `tern:Sample` with the feature type as 'landform'. The feature of interest for 'outcrop_lithology', 'surface_strew_lithology', 'surface_strew_size', 'disturbance' is land surface modelled as a `tern:Sample` with the feature type as 'land surface'.

#### `slpoe`

The `slope` key maps to a `tern:Observation` with the observable property 'slope'.

#### `slpoe_class`

The `slope_class` key maps to a `tern:Observation` with the observable property 'slope class'.

#### `aspect`

The `aspect` key maps to a `tern:Observation` with the observable property 'aspect'.

#### `landform_pattern`

The `landform_pattern` key maps to a `tern:Observation` with the observable property 'landform pattern'.

#### `landform_element`

The `landform_element` key maps to a `tern:Observation` with the observable property 'landform element'.

#### `outcrop_lithology`

The `outcrop_lithology` key maps to a `tern:Observation` with the observable property 'rock outcrop lithology'.

#### `surface_strew_lithology`

The `surface_strew_lithology` key maps to a `tern:Observation` with the observable property 'surface strew lithology'.

#### `surface_strew_size`

The `surface_strew_size` key maps to a `tern:Observation` with the observable property 'surface strew size'.

#### `disturbance`

The `disturbance` key maps to a `tern:Observation` with the observable property 'disturbance type'.

### Mapping plot visit measurements

- [OpenAPI docs for plot visit measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-visit/post%2Fplot-visits)

```json
{
  "start_date": "2022-12-09T00:58:25.299Z",
  "end_date": "2022-12-09T00:58:25.299Z",
  "plot_location": 0,
  "climatic_condition": "Wet",
  "veg_growth_stage": "ER",
  "fire_history": "UB",
  "homogeneity_measure": 0,
  "disturbance": "0",
  "plot_physical_state_comments": "string",
  "veg_structural_formation": "CFOR",
  "visit_field_name": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. The feature of interest for 'climatic_condition' is climate modelled as a `tern:Sample` with the feature type as 'climate'. The feature of interest for 'veg_growth_stage', 'fire_history', 'homogeneity_measure' is plant community modelled as a `tern:Sample` with the feature type as 'plant community'. The feature of interest for 'disturbance' is land surface modelled as a `tern:Sample` with the feature type as 'land surface'. The feature of interest for 'veg_structural_formation' and 'visit_field_name' is vegetation stratum modelled as a `tern:Sample` with the feature type as 'vegetation stratum'.

#### `climatic_condition`

The `climatic_condition` key maps to a `tern:Observation` with the observable property 'climatic condition'.

#### `veg_growth_stage`

The `veg_growth_stage` key maps to a `tern:Observation` with the observable property 'growth stage'.

#### `fire_history`

The `fire_history` key maps to a `tern:Observation` with the observable property 'fire history'.

#### `homogeneity_measure`

The `homogeneity_measure` key maps to a `tern:Observation` with the observable property 'homogeneity measure'.

#### `disturbance`

The `disturbance` key maps to a `tern:Observation` with the observable property 'disturbance type'.

#### `veg_structural_formation`

The `veg_structural_formation` key maps to a `tern:Observation` with the observable property 'structural formation'.

#### `visit_field_name`

The `visit_field_name` key maps to the observable property `dominant species`, `second dominant species`, and `thrid dominant species` in [Plot Description Observable Properties](https://linked.data.gov.au/def/nrm/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312), and is linked to `tern:ObservationCollection` by `skos:member`. For each of the three vegetation strata (Upper [U], Mid [M], Ground [G]) nominate in descending order the dominant species (up to 3 species per stratum) for each stratum, where present.

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
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z" ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "climate 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/6d40d71e-58cd-4f75-8304-40c01fe5f74c> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/2>
    a tern:Sample ;
    rdfs:label "vegetation stratum 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/32834f36-a478-45be-97f4-ff2ff51e9f5c> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/3>
    a tern:Sample ;
    rdfs:label "plant community 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/4>
    a tern:Sample ;
    rdfs:label "land surface 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8282fb22-4135-415c-8ca2-317860d102fb> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/5>
    a tern:Sample ;
    rdfs:label "landform 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on landform" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    sosa:hasMember <https://example.com/observation/aspect/1>,
        <https://example.com/observation/landform-pattern/1>,
        <https://example.com/observation/slope/1>,
        <https://example.com/observation/slope-class/1>,
        <https://example.com/observation/landform-element/1> ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    sosa:hasMember <https://example.com/observation/surface-strew-size/1>,
        <https://example.com/observation/surface-strew-lithology/1>,
        <https://example.com/observation/rock-outcrop-lithology/1>,
        <https://example.com/observation/disturbance-type/1> ;
.

<https://example.com/observation-collection/3>
    a tern:ObservationCollection ;
    rdfs:label "observations on vegetation stratum" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    sosa:hasMember <https://example.com/observation/cover/1>,
        <https://example.com/observation/cover-class/1>,
        <https://example.com/observation/growth-form/1>,
        <https://example.com/observation/height-class/1>,
        <https://example.com/observation/structural-formation/1>,
        <https://example.com/observation/dominant-species/1>,
        <https://example.com/observation/second-dominant-species/1>,
        <https://example.com/observation/third-dominant-species/1> ;
.

<https://example.com/observation-collection/4>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant community" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    sosa:hasMember <https://example.com/observation/fire-history/1>,
        <https://example.com/observation/growth-stage/1>,
        <https://example.com/observation/homogeneity-measure/1> ;
.

<https://example.com/observation/climatic-condition/1>
    a tern:Observation ;
    rdfs:label "climatic condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Dry" ;
        rdf:value <https://linked.data.gov.au/def/nrm/1050727c-1d88-5639-8b69-60c8c69994b9> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1050727c-1d88-5639-8b69-60c8c69994b9> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dee23df7-4445-424f-b361-b2e0182be950> ;
.

<https://example.com/observation/aspect/1>
    a tern:Observation ;
    rdfs:label "aspect" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 15.6^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/DEG> ;
    ] ;
    sosa:hasSimpleResult 15.6^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e0423c6-0dc3-40aa-9776-410a94299256> ;
.

<https://example.com/observation/landform-pattern/1>
    a tern:Observation ;
    rdfs:label "landform pattern" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Hills" ;
        rdf:value <https://linked.data.gov.au/def/nrm/f19b8f62-9cc0-5c39-af77-3d198e05844c> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f19b8f62-9cc0-5c39-af77-3d198e05844c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/58e4aba5-78c3-4361-b08a-ae39a93c8cb0> ;
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

<https://example.com/observation/slope/1>
    a tern:Observation ;
    rdfs:label "slope" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 33.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/DEG> ;
    ] ;
    sosa:hasSimpleResult 33.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b036ba09-d061-4a1c-99a8-890efc462a2c> ;
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

<https://example.com/observation/surface-strew-size/1>
    a tern:Observation ;
    rdfs:label "surface strew size" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Boulder (250mm +)" ;
        rdf:value <https://linked.data.gov.au/def/nrm/abea0b0e-333b-574c-87db-cbf59ae11a20> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/abea0b0e-333b-574c-87db-cbf59ae11a20> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3eeef779-d4d9-4019-9543-be0abe54cc5c> ;
.

<https://example.com/observation/surface-strew-lithology/1>
    a tern:Observation ;
    rdfs:label "surface strew lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Clay" ;
        rdf:value <https://linked.data.gov.au/def/nrm/58168015-2625-534a-a70b-e7fba1c07369> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/58168015-2625-534a-a70b-e7fba1c07369> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6ee380ca-e9dc-4a9b-91c3-758b54e751eb> ;
.

<https://example.com/observation/rock-outcrop-lithology/1>
    a tern:Observation ;
    rdfs:label "rock outcrop lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Coal" ;
        rdf:value <https://linked.data.gov.au/def/nrm/cb2c5f31-9531-563a-95a1-5f60385f061f> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/cb2c5f31-9531-563a-95a1-5f60385f061f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5af5cef1-179c-4bae-9037-42196668deff> ;
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

<https://example.com/observation/cover/1>
    a tern:Observation ;
    rdfs:label "cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult 22.11^^xsd:float ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 22.11^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/60c714fa-4e8d-454d-b4cd-7fe77da7f47e> ;
    tern:hasAttribute [
        rdfs:label "stratum type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Upper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        ] ;
    ] ;
.

<https://example.com/observation/cover-class/1>
    a tern:Observation ;
    rdfs:label "cover class" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasInformedBy <https://example.com/observation/cover/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/05d80e80-003c-5791-bf43-4b52086f990b> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "bc" ;
            rdf:value <https://linked.data.gov.au/def/nrm/05d80e80-003c-5791-bf43-4b52086f990b> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f3e6e19b-ba79-4260-b493-8a2561033f9b> ;
    tern:hasAttribute [
        rdfs:label "stratum type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Upper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        ] ;
    ] ;
.

<https://example.com/observation/dominant-species/1>
    a tern:Observation ;
    rdfs:label "dominant species" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Pine" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Pine" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8e782307-4e4d-4cdf-9b10-8d79794065a4> ;
    tern:hasAttribute [
        rdfs:label "stratum type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Upper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        ] ;
    ] ;
.

<https://example.com/observation/second-dominant-species/1>
    a tern:Observation ;
    rdfs:label "second dominant species" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Oak" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Oak" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/909557e9-782f-45ea-8e89-8cf17a2c6ca6> ;
    tern:hasAttribute [
        rdfs:label "stratum type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Upper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        ] ;
    ] ;
.

<https://example.com/observation/third-dominant-species/1>
    a tern:Observation ;
    rdfs:label "third dominant species" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Ash" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Ash" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fadc6db3-9474-45f5-a052-5b5002580c0a> ;
    tern:hasAttribute [
        rdfs:label "stratum type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Upper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        ] ;
    ] ;
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
    tern:hasAttribute [
        rdfs:label "stratum type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Upper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        ] ;
    ] ;
.

<https://example.com/observation/height-class/1>
    a tern:Observation ;
    rdfs:label "height class" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1e5241d5-b717-5908-a26d-297ef3c636d8> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "5" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1e5241d5-b717-5908-a26d-297ef3c636d8> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/242d081b-b3f4-4206-bc39-7aa42e9972ee> ;
    tern:hasAttribute [
        rdfs:label "stratum type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Upper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/523c2f7a-1679-5576-bda0-a1985bac99b1> ;
        ] ;
    ] ;
.

<https://example.com/observation/structural-formation/1>
    a tern:Observation ;
    rdfs:label "structural formation" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasInformedBy <https://example.com/observation/cover/1> , <https://example.com/observation/growth-form/1> , <https://example.com/observation/height-class/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Bryophtyes" ;
        rdf:value <https://linked.data.gov.au/def/nrm/77732130-2460-5829-b51f-3d777c3ca3a8> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/77732130-2460-5829-b51f-3d777c3ca3a8> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/103f26cb-0194-45d2-8b1a-e18e1da6df2b> ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cf1aef8a-a782-4480-9c41-a7f6d170d7fc> ;
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

```

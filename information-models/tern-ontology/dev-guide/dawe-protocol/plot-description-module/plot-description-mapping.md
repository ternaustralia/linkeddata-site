---
sidebar_position: 2
---

# Plot Description protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot Description](https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32) protocol.

Mentions of observable properties should refer to [enhanced-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/plot-description-module/enhanced-protocol/overview) and [standard-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/plot-description-module/standard-protocol/overview) for the feature type and value type information.

## Conceptual modelling

The Plot Description module records data about the site for the following feature types:

- weather
- landform
- land surface
- plant community
- vegetation stratum
- plant occurrence
- disturbance

These observations are recorded for each site during a site visit.

An NVIS Level 5 description will be automatically generated based on the entered vegetation information. The value of `structural formation` aligns with NVIS and is generated from the `growth form`, `height class`, and `cover` values.

The `slope` value is used to automatically calculate the `slope class` and help determine the `landform element`.

### Diagram

The following diagram is colour-coded to show the related things by feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Plot Description` protocol surveys:

- [OpenAPI docs for plot location](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-location/post%2Fplot-locations)
- [OpenAPI docs for plot visit](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-visit/post%2Fplot-visits)

### Survey data from plot location:

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

The `comment` key maps to the property `rdfs:comment` on the `tern:SiteVisit` or `tern:Observation` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    rdfs:comment "The weather is sunny."^^xsd:string .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from plot visit:

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

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

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

The data are observations recorded during a site visit.

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

#### `slope`

The `slope` key maps to a `tern:Observation` with the observable property 'slope'.

#### `slope_class`

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

#### `comment`

The `comment` key maps to the property `rdfs:comment` on the `tern:ObservationCollection` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456/observationCollection/789> a tern:ObservationCollection ;
    rdfs:comment "It has observations for landform."^^xsd:string .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

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

The data are observations recorded during a site visit.

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

#### `plot_physical_state_comments`

The `plot_physical_state_comments` key maps to the property `rdfs:comment` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    rdfs:comment "It has observations for plant."^^xsd:string .
```

#### `veg_structural_formation`

The `veg_structural_formation` key maps to a `tern:Observation` with the observable property 'structural formation'.

#### `visit_field_name`

The `visit_field_name` key maps to the observable property `dominant species`, `second dominant species`, and `third dominant species` in [Plot Description Observable Properties](https://linked.data.gov.au/def/nrm/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312), and is linked to `tern:ObservationCollection` by `skos:member`. For each of the three vegetation strata (Upper [U], Mid [M], Ground [G]) nominate in descending order the dominant species (up to 3 species per stratum) for each stratum, where present.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Plot Description protocol` are in [Plot Description Module Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#plot_description_module_conformance_class_requirements).

Validator is [Plot description protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/plot-description-protocol-shapes/shapes.ttl).

The following are examples of validating data at the project, protocol, and observation levels:

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

Save the [Plot description shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/plot-description-protocol-shapes/shapes.ttl) in a file named `plot-description-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Plot Description protocol**, run the following command to validate the data:

```bash
pyshacl -s plot-description-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [aspect shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/plot-description-protocol-shapes/aspect/shapes.ttl) in a file named `aspect-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for aspect in Plot description protocol**, run the following command to validate the data:

```bash
pyshacl -s aspect-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on landform" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasMember
        <https://example.com/observation/landform-element/1> ,
        <https://example.com/observation/landform-pattern/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasMember
        <https://example.com/observation/rock-outcrop-lithology/1> ,
        <https://example.com/observation/surface-strew-lithology/1> ,
        <https://example.com/observation/surface-strew-size/1> ,
        <https://example.com/observation/slope-class/1> ,
        <https://example.com/observation/slope/1> ,
        <https://example.com/observation/aspect/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/3>
    a tern:ObservationCollection ;
    rdfs:label "observations on vegetation stratum" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember
        <https://example.com/observation/cover-class/1> ,
        <https://example.com/observation/cover/1> ,
        <https://example.com/observation/dominant-species/1> ,
        <https://example.com/observation/growth-form/1> ,
        <https://example.com/observation/height-class/1> ,
        <https://example.com/observation/second-dominant-species/1> ,
        <https://example.com/observation/structural-formation/1> ,
        <https://example.com/observation/third-dominant-species/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/4>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant community" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasMember
        <https://example.com/observation/growth-stage/1> ,
        <https://example.com/observation/structural-formation/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/5>
    a tern:ObservationCollection ;
    rdfs:label "observations on disturbance" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/6> ;
    sosa:hasMember
        <https://example.com/observation/fire-history/1> ,
        <https://example.com/observation/disturbance-type/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/climatic-condition/1>
    a tern:Observation ;
    rdfs:label "climatic condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Dry" ;
            rdf:value <https://linked.data.gov.au/def/nrm/84b551fd-c4f0-5d63-a160-9c6668d4b1de>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/84b551fd-c4f0-5d63-a160-9c6668d4b1de> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dee23df7-4445-424f-b361-b2e0182be950> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "weather 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e196c39e-959f-4dd4-8816-d0a58b7cc630> ;
.

<https://example.com/observation/aspect/1>
    a tern:Observation ;
    rdfs:label "aspect" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.56e+01 ;
            tern:unit <http://qudt.org/vocab/unit/DEG>
        ] ;
    sosa:hasSimpleResult 1.56e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0e0423c6-0dc3-40aa-9776-410a94299256> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/cover-class/1>
    a tern:Observation ;
    rdfs:label "cover class" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy <https://example.com/observation/cover/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "bc" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4ea8adb8-00df-51fe-b0d6-245fde6c9efb>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4ea8adb8-00df-51fe-b0d6-245fde6c9efb> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f3e6e19b-ba79-4260-b493-8a2561033f9b> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasAttribute [
            rdfs:label "stratum type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Upper" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/disturbance-type/1>
    a tern:Observation ;
    rdfs:label "disturbance type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/6> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/632e4c3c-0e73-4b3d-b1d6-7b38897da5e8> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/dominant-species/1>
    a tern:Observation ;
    rdfs:label "dominant species" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Pine"
        ] ;
    sosa:hasSimpleResult "Pine" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8e782307-4e4d-4cdf-9b10-8d79794065a4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasAttribute [
            rdfs:label "stratum type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Upper" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/fire-history/1>
    a tern:Observation ;
    rdfs:label "fire history" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Past burn" ;
            rdf:value <https://linked.data.gov.au/def/nrm/b537013e-17bb-5c0c-aa7b-279bcd0e52df>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/b537013e-17bb-5c0c-aa7b-279bcd0e52df> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cf1aef8a-a782-4480-9c41-a7f6d170d7fc> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/growth-stage/1>
    a tern:Observation ;
    rdfs:label "growth stage" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Dead" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2fd1ed97-3e7b-59a0-8d93-9be76f276071>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2fd1ed97-3e7b-59a0-8d93-9be76f276071> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fcfda2f7-84f0-4c26-9f80-c051d129a094> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/homogeneity-measure/1>
    a tern:Observation ;
    rdfs:label "homogeneity measure" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/7> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.281e+01 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 1.281e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/325d5ff2-8c81-484a-a422-c13ff29666a9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/landform-element/1>
    a tern:Observation ;
    rdfs:label "landform element" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Prior stream" ;
            rdf:value <https://linked.data.gov.au/def/nrm/e705f231-3807-5f0b-9afd-59a1c9093a36>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/e705f231-3807-5f0b-9afd-59a1c9093a36> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9d4f8a2d-8e77-42dd-857b-0ecbc9c85696> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/landform-pattern/1>
    a tern:Observation ;
    rdfs:label "landform pattern" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/58e4aba5-78c3-4361-b08a-ae39a93c8cb0> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/rock-outcrop-lithology/1>
    a tern:Observation ;
    rdfs:label "rock outcrop lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5af5cef1-179c-4bae-9037-42196668deff> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/second-dominant-species/1>
    a tern:Observation ;
    rdfs:label "second dominant species" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Oak"
        ] ;
    sosa:hasSimpleResult "Oak" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/909557e9-782f-45ea-8e89-8cf17a2c6ca6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasAttribute [
            rdfs:label "stratum type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Upper" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/slope-class/1>
    a tern:Observation ;
    rdfs:label "slope class" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy <https://example.com/observation/slope/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Moderately inclined" ;
            rdf:value <https://linked.data.gov.au/def/nrm/43c0c157-aa65-5101-a0e9-f12e47e91cc1>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/43c0c157-aa65-5101-a0e9-f12e47e91cc1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/132a1452-4fd7-473c-956b-3183dd315b67> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/structural-formation/1>
    a tern:Observation ;
    rdfs:label "structural formation" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy
        <https://example.com/observation/cover/1> ,
        <https://example.com/observation/growth-form/1> ,
        <https://example.com/observation/height-class/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Hummock grassland" ;
            rdf:value <https://linked.data.gov.au/def/nrm/b77c7b89-0dd2-52cb-9eb3-7319d4465cfe>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/b77c7b89-0dd2-52cb-9eb3-7319d4465cfe> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/103f26cb-0194-45d2-8b1a-e18e1da6df2b> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/surface-strew-lithology/1>
    a tern:Observation ;
    rdfs:label "surface strew lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6ee380ca-e9dc-4a9b-91c3-758b54e751eb> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/surface-strew-size/1>
    a tern:Observation ;
    rdfs:label "surface strew size" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3eeef779-d4d9-4019-9543-be0abe54cc5c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/third-dominant-species/1>
    a tern:Observation ;
    rdfs:label "third dominant species" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Ash"
        ] ;
    sosa:hasSimpleResult "Ash" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fadc6db3-9474-45f5-a052-5b5002580c0a> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasAttribute [
            rdfs:label "stratum type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Upper" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Grass-tree" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1be47880-4ee6-5df9-8eda-551c58078771>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1be47880-4ee6-5df9-8eda-551c58078771> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasAttribute [
            rdfs:label "stratum type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Upper" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/height-class/1>
    a tern:Observation ;
    rdfs:label "height class" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "9" ;
            rdf:value <https://linked.data.gov.au/def/nrm/b756dcb0-3600-525d-bacb-285c0f1a07e2>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/b756dcb0-3600-525d-bacb-285c0f1a07e2> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/242d081b-b3f4-4206-bc39-7aa42e9972ee> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasAttribute [
            rdfs:label "stratum type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Upper" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/slope/1>
    a tern:Observation ;
    rdfs:label "slope" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.381e+01 ;
            tern:unit <http://qudt.org/vocab/unit/DEG>
        ] ;
    sosa:hasSimpleResult 3.381e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b036ba09-d061-4a1c-99a8-890efc462a2c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/cover/1>
    a tern:Observation ;
    rdfs:label "cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.211e+01 ;
            tern:unit <http://qudt.org/vocab/unit/PERCENT>
        ] ;
    sosa:hasSimpleResult 2.211e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/60c714fa-4e8d-454d-b4cd-7fe77da7f47e> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32> ;
    tern:hasAttribute [
            rdfs:label "stratum type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5871b3a2-b475-4432-9f15-65424f21a878> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Upper" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/ea960328-db99-51fd-843c-61c6c5b6117b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/feature-of-interest/3>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant community 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
.

<https://example.com/feature-of-interest/4>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "land surface 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8282fb22-4135-415c-8ca2-317860d102fb> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/feature-of-interest/5>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "landform 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd> ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
    tern:hasAttribute [
            rdfs:label "plot name" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
            tern:hasSimpleValue "The Jones Stream Study Plot" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The Jones Stream Study Plot"
                ]
        ] ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "vegetation stratum 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/32834f36-a478-45be-97f4-ff2ff51e9f5c> ;
.

<https://example.com/feature-of-interest/6>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "disturbance 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/7e256d28-e686-4b6a-b64a-ac1b1a8f164d> ;
.

<https://example.com/feature-of-interest/7>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs:lat -3.092085e+01 ;
    wgs:long 1.522424e+02 ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

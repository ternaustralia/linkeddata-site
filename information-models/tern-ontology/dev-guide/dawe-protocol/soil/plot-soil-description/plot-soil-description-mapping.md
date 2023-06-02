---
sidebar_position: 2
---

# Plot Soil Description protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot soil description protocol](https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4) protocol in [Soil](https://linked.data.gov.au/def/nrm/6fd9d31f-9a77-4fc1-9eee-23ea8af32b95) module.

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

<!-- #### `start_date_time`

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
``` -->

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
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/cb8b5468-2ca2-5687-9801-61b90967ffd4> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Abney level or clinometer and tape" ;
            rdf:value <https://linked.data.gov.au/def/nrm/cb8b5468-2ca2-5687-9801-61b90967ffd4> ;
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

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Soil - Plot soil description protocol` are in [Soil - Plot soil description protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#soil_plot_soil_description_protocol_conformance_class_requirements).

Validator is [Soil - Plot soil description protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-plot-soil-description-protocol-shapes/shapes.ttl).

The following are examples of validating data at the project, protocol, sub-protocol, and observation levels:

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

Save the [Soil shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/shapes.ttl) in a file named `soil-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Soil protocol**, run the following command to validate the data:

```bash
pyshacl -s soil-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Soil - Plot soil description shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-plot-soil-description-protocol-shapes/shapes.ttl) in a file named `plot-soil-description-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Plot soil description protocol**, run the following command to validate the data:

```bash
pyshacl -s plot-soil-description-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [aspect shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-plot-soil-description-protocol-shapes/aspect/shapes.ttl) in a file named `aspect-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for aspect in Soil - Plot soil description protocol**, run the following command to validate the data:

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

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on landform" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/aspect/1> ,
        <https://example.com/observation/landform-element/1> ,
        <https://example.com/observation/landform-pattern/1> ,
        <https://example.com/observation/landform-relief/1> ,
        <https://example.com/observation/modal-slope/1> ,
        <https://example.com/observation/relative-inclination-of-slope-elements/1> ,
        <https://example.com/observation/slope-class/1> ,
        <https://example.com/observation/slope-morphology-type/1> ,
        <https://example.com/observation/slope-percent-tangent/1> ,
        <https://example.com/observation/slope/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface substrate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember
        <https://example.com/observation/coarse-fragments-abundance/1> ,
        <https://example.com/observation/coarse-fragments-lithology/1> ,
        <https://example.com/observation/shape-of-coarse-fragments/1> ,
        <https://example.com/observation/size-of-coarse-fragments/1> ,
        <https://example.com/observation/soil-coarse-fragment-alteration/1> ,
        <https://example.com/observation/soil-coarse-fragment-strength/1> ,
        <https://example.com/observation/surface-strew-lithology/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/3>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil profile" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasMember
        <https://example.com/observation/soil-drainage/1> ,
        <https://example.com/observation/soil-permeability/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/4>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface disturbance" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasMember
        <https://example.com/observation/disturbance-type/1> ,
        <https://example.com/observation/erosion-type/1> ,
        <https://example.com/observation/gully-depth/1> ,
        <https://example.com/observation/scald-erosion-degree/1> ,
        <https://example.com/observation/state-of-erosion/1> ,
        <https://example.com/observation/water-gully-erosion-degree/1> ,
        <https://example.com/observation/water-mass-movement-erosion-degree/1> ,
        <https://example.com/observation/water-rill-erosion-degree/1> ,
        <https://example.com/observation/water-sheet-erosion-degree/1> ,
        <https://example.com/observation/water-stream-bank-erosion-degree/1> ,
        <https://example.com/observation/water-tunnel-erosion-degree/1> ,
        <https://example.com/observation/water-wave-erosion-degree/1> ,
        <https://example.com/observation/wind-erosion-degree/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/5>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasMember
        <https://example.com/observation/component-of-microrelief/1> ,
        <https://example.com/observation/condition-of-soil-surface-when-dry/1> ,
        <https://example.com/observation/microrelief-biotic-agent/1> ,
        <https://example.com/observation/microrelief-horizontal-interval-distance/1> ,
        <https://example.com/observation/microrelief-vertical-interval-distance/1> ,
        <https://example.com/observation/rock-outcrop-abundance/1> ,
        <https://example.com/observation/rock-outcrop-lithology/1> ,
        <https://example.com/observation/soil-microrelief-gilgai/1> ,
        <https://example.com/observation/soil-microrelief-hummocky/1> ,
        <https://example.com/observation/soil-microrelief-proportion-of-gilgai-components/1> ,
        <https://example.com/observation/soil-microrelief-type/1> ,
        <https://example.com/observation/soil-runoff/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/agent/1>
    a
        prov:Agent ,
        <https://w3id.org/tern/ontologies/org/Person> ;
    schema:name "Paul Green" ;
.

<https://example.com/observation/aspect/1>
    a tern:Observation ;
    rdfs:label "aspect" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-fragments-abundance/1>
    a tern:Observation ;
    rdfs:label "coarse fragments abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b3dd4df5-589b-476e-8e9e-0af6a7155759> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-fragments-lithology/1>
    a tern:Observation ;
    rdfs:label "coarse fragments lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4062f093-424b-441e-86fc-648d820ae1fb> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/component-of-microrelief/1>
    a tern:Observation ;
    rdfs:label "component of microrelief" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Elongate mound" ;
            rdf:value <https://linked.data.gov.au/def/nrm/cc0028c4-945d-5f2e-8368-9dda9d3a525a>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/cc0028c4-945d-5f2e-8368-9dda9d3a525a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7f023c76-32e1-4c08-a52f-b900343b4b92> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/condition-of-soil-surface-when-dry/1>
    a tern:Observation ;
    rdfs:label "condition of soil surface when dry" ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3a1ccb70-41dc-4f57-a74c-62e05aa02c61> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/disturbance-type/1>
    a tern:Observation ;
    rdfs:label "disturbance type" ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/632e4c3c-0e73-4b3d-b1d6-7b38897da5e8> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/erosion-type/1>
    a tern:Observation ;
    rdfs:label "erosion type" ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9fc1503b-e690-41f0-a824-99f0e69699f1> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/gully-depth/1>
    a tern:Observation ;
    rdfs:label "gully depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label ">3.0m" ;
            rdf:value <https://linked.data.gov.au/def/nrm/154d0033-7bfa-5d26-ae59-c9dee8c52a18>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/154d0033-7bfa-5d26-ae59-c9dee8c52a18> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4aa9e813-8c4c-4fa6-953b-32c59fdd97be> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/landform-element/1>
    a tern:Observation ;
    rdfs:label "landform element" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/landform-pattern/1>
    a tern:Observation ;
    rdfs:label "landform pattern" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy <https://example.com/observation/slope-class/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/landform-relief/1>
    a tern:Observation ;
    rdfs:label "landform relief" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Very low (9-30m)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/6d965989-08e3-5605-852d-c1bbc392064b>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/6d965989-08e3-5605-852d-c1bbc392064b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/148f60c9-92c5-4324-81b6-61b59bccdb4c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/microrelief-biotic-agent/1>
    a tern:Observation ;
    rdfs:label "microrelief- biotic agent" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Other" ;
            rdf:value <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e3dc0901-0bad-4157-bcb3-58aaffda313c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/microrelief-horizontal-interval-distance/1>
    a tern:Observation ;
    rdfs:label "microrelief horizontal interval distance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.56e+01 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 1.56e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/22caefc0-0201-4bf2-a108-ef173d607bf4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/microrelief-vertical-interval-distance/1>
    a tern:Observation ;
    rdfs:label "microrelief vertical interval distance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.56e+01 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 1.56e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2f87b7cc-c029-4784-92cf-c32055b5c9b7> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/modal-slope/1>
    a tern:Observation ;
    rdfs:label "modal slope" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Level (<1%)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c27d412c-9602-5abc-a950-ad68783e8fab>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c27d412c-9602-5abc-a950-ad68783e8fab> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3f1ae206-0be8-4284-bce5-9f3a787a9baa> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/relative-inclination-of-slope-elements/1>
    a tern:Observation ;
    rdfs:label "relative inclination of slope elements" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Waxing" ;
            rdf:value <https://linked.data.gov.au/def/nrm/88732f8a-9fb1-5076-a4fd-560002bf49c5>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/88732f8a-9fb1-5076-a4fd-560002bf49c5> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/30453b41-80b6-42d8-a388-893188414738> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/rock-outcrop-abundance/1>
    a tern:Observation ;
    rdfs:label "rock outcrop abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Rocky (10-20% bedrock exposed)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/acfa557b-cc6c-52ba-a316-820b6c258009>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/acfa557b-cc6c-52ba-a316-820b6c258009> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fc03df84-7ac9-47c6-9b7b-1da3dcb36364> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/rock-outcrop-lithology/1>
    a tern:Observation ;
    rdfs:label "rock outcrop lithology" ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5af5cef1-179c-4bae-9037-42196668deff> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/scald-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "scald erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Moderate scalding (5-50%)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/056e4b3a-d26a-5061-8bcd-3d25f2cfb2f3>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/056e4b3a-d26a-5061-8bcd-3d25f2cfb2f3> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9c8486f2-d97e-40cf-aadb-66082452af54> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/shape-of-coarse-fragments/1>
    a tern:Observation ;
    rdfs:label "coarse fragments shape" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d83560e6-0356-446e-a8b5-e64b82e3c362> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/size-of-coarse-fragments/1>
    a tern:Observation ;
    rdfs:label "coarse fragments size" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/92ae6036-50a8-446c-8df8-573860011b79> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/slope-morphology-type/1>
    a tern:Observation ;
    rdfs:label "slope morphology type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Open depression (vale)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/de3a894e-9dc3-5841-b43a-92cff5e10662>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/de3a894e-9dc3-5841-b43a-92cff5e10662> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b023d177-2c9b-4d58-86e6-099b742fcf1c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/slope-percent-tangent/1>
    a tern:Observation ;
    rdfs:label "slope percent tangent" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.381e+01 ;
            tern:unit <http://qudt.org/vocab/unit/PERCENT>
        ] ;
    sosa:hasSimpleResult 3.381e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/bc537f95-6721-4a87-bd30-62d6377424ef> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-coarse-fragment-alteration/1>
    a tern:Observation ;
    rdfs:label "soil- coarse fragment alteration" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Other" ;
            rdf:value <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e38d6585-30f4-4a50-bb3f-f9481ce9c595> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-coarse-fragment-strength/1>
    a tern:Observation ;
    rdfs:label "soil- coarse fragment strength" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Weak rock (25-50 MPa)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/838bb2eb-5344-5a01-af94-59be8bf8a54e>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/838bb2eb-5344-5a01-af94-59be8bf8a54e> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7739f6d5-06dd-42da-82ae-763fd62ff0f0> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-drainage/1>
    a tern:Observation ;
    rdfs:label "soil drainage" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/c4ae89f9-49cb-4be8-b5f2-5f08177b8093> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-microrelief-gilgai/1>
    a tern:Observation ;
    rdfs:label "soil microrelief- gilgai" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Contour gilgai" ;
            rdf:value <https://linked.data.gov.au/def/nrm/8fb86eca-3038-5378-937b-6acd0744e815>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/8fb86eca-3038-5378-937b-6acd0744e815> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/46dc0c67-027b-4a79-bbf5-d12d39fe01f0> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-microrelief-hummocky/1>
    a tern:Observation ;
    rdfs:label "soil microrelief- hummocky" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Debil-debil" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c1676b68-74ec-5dba-8485-50474e766953>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c1676b68-74ec-5dba-8485-50474e766953> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/af8cc482-f896-4627-812a-9567af4662df> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-microrelief-proportion-of-gilgai-components/1>
    a tern:Observation ;
    rdfs:label "soil microrelief- proportion of gilgai components" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Equal mounds and depressions; no shelf present" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4268c09d-3ae4-56f3-9ea6-f09375ff76f1>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4268c09d-3ae4-56f3-9ea6-f09375ff76f1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e2c87884-5edf-4d87-a67d-6a13cf59e051> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-microrelief-type/1>
    a tern:Observation ;
    rdfs:label "soil microrelief type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Other" ;
            rdf:value <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3014409e-fa76-4159-8bd7-0a3bae695545> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-permeability/1>
    a tern:Observation ;
    rdfs:label "soil permeability" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Very slowly permeable" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4c4746ba-b5d2-59ba-989b-a643b3a784ef>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4c4746ba-b5d2-59ba-989b-a643b3a784ef> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3f431e7a-6f1c-4dcd-b452-1cb14226a56d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-runoff/1>
    a tern:Observation ;
    rdfs:label "soil runoff" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/5> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "No runoff" ;
            rdf:value <https://linked.data.gov.au/def/nrm/30e48ea4-ed6f-5f18-9e5e-8abe43bb1d17>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/30e48ea4-ed6f-5f18-9e5e-8abe43bb1d17> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/054d2441-05fd-45d5-9480-ed7618005642> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/state-of-erosion/1>
    a tern:Observation ;
    rdfs:label "state of erosion" ;
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
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3c5263b7-8104-46a9-af05-a0c33aadde07> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/surface-strew-lithology/1>
    a tern:Observation ;
    rdfs:label "surface strew lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/water-gully-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-gully erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Severe" ;
            rdf:value <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a43e0dc9-b886-41ba-84df-22225879b05f> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/water-mass-movement-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water - mass movement erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Present" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1c8dd05b-b95c-5356-ae2a-9904e3410edd>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1c8dd05b-b95c-5356-ae2a-9904e3410edd> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5af56582-cc92-4892-98f6-793047e7b5c2> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/water-rill-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-rill erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Severe" ;
            rdf:value <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5b9b43b7-6d79-4e92-bbbf-f9ec71a9e1d9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/water-sheet-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-sheet erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Severe" ;
            rdf:value <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5f39a69f-c740-47e6-96d6-4ae18548830f> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/water-stream-bank-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water- stream bank erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not apparent" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c0d13b13-f66d-5a37-8c9c-f782e8b4d287>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c0d13b13-f66d-5a37-8c9c-f782e8b4d287> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6495fa13-99a9-4947-9ac7-913bb6e9e625> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/water-tunnel-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water- tunnel erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not apparent" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c0d13b13-f66d-5a37-8c9c-f782e8b4d287>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c0d13b13-f66d-5a37-8c9c-f782e8b4d287> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4528bf7c-5182-49a8-bedc-53c70f5e0dcd> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/water-wave-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "water-wave erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not apparent" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c0d13b13-f66d-5a37-8c9c-f782e8b4d287>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c0d13b13-f66d-5a37-8c9c-f782e8b4d287> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3496cdd1-9c4a-47c6-a949-83f5c2724ed9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/wind-erosion-degree/1>
    a tern:Observation ;
    rdfs:label "wind erosion degree" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Severe" ;
            rdf:value <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/be5972d6-8635-5e4b-8465-66984d81d993> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9dc64e42-c670-4682-8314-fcb35e3d74f4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/slope-class/1>
    a tern:Observation ;
    rdfs:label "slope class" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy <https://example.com/observation/slope/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/slope/1>
    a tern:Observation ;
    rdfs:label "slope" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
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
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:hasAttribute [
            rdfs:label "slope- means of evaluation" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2c26a8c4-757f-4889-a94d-1f9a0a19574a> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/cb8b5468-2ca2-5687-9801-61b90967ffd4> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Abney level or clinometer and tape" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/cb8b5468-2ca2-5687-9801-61b90967ffd4>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/feature-of-interest/3>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "soil profile 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/80c39b95-0912-4267-bb66-2fa081683723> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -2.992085e+01 ;
            wgs:long 1.512424e+02
        ] ;
    prov:endedAtTime "2022-11-05T03:18:42.783000+00:00"^^xsd:dateTime ;
    prov:startedAtTime "2022-11-05T03:16:42.783000+00:00"^^xsd:dateTime ;
    prov:wasAssociatedWith <https://example.com/agent/1> ;
    tern:hasSite <https://example.com/site/1> ;
    tern:locationDescription "The weather is sunny."^^xsd:string ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    dcterms:identifier "site001"^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -2.992085e+01 ;
            wgs:long 1.512424e+02 ;
            tern-loc:pointType "south west" ;
            tern:hasAttribute [
                    rdfs:label "plot sw corner description" ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/65ffa9ec-e16e-42d9-9fb1-e7d869f2f01f> ;
                    tern:hasSimpleValue "There are some trees."^^xsd:string ;
                    tern:hasValue [
                            a
                                tern:Text ,
                                tern:Value ;
                            rdf:value "There are some trees."^^xsd:string
                        ]
                ]
        ] ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "land surface substrate 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/aef12cd6-3826-4988-a54c-8578d3fb4c8d> ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "landform 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd> ;
.

<https://example.com/feature-of-interest/5>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "land surface 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8282fb22-4135-415c-8ca2-317860d102fb> ;
.

<https://example.com/feature-of-interest/4>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "land surface disturbance 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/7e256d28-e686-4b6a-b64a-ac1b1a8f164d> ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        tern-loc:Point ;
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

---
sidebar_position: 1
---

# Plot Selection protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot Selection and Layout](https://linked.data.gov.au/def/nrm/d15d05db-5007-411e-b257-105ef4f76821) protocol.

## Conceptual modelling

The Plot selection and layout module outlines the steps to:

- Stratify the project area and identify key areas of interest and potential plot locations based on a desktop assessment of environmental, scientific, historical, and logistical information.

- Finalize plot selection and plot layout in the field based on the results of the desktop stratification process combined with an on-ground assessment of the project area.

If the plot is permanently labelled (`permanent plot` is `True`) with the `plot name`, record the `plot label location` (which iron dropper).

As a standard, the plot aligns in a north-south direction with the grid. If necessary, `plot orientation` can be altered.

### Diagram

The following diagram is showing plot selection

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G18Yd5ziqqOdqxL0vVZvr7DlVGCxrcVsOd&layers=1&nav=1&title=plot-selection-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D18Yd5ziqqOdqxL0vVZvr7DlVGCxrcVsOd%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G18Yd5ziqqOdqxL0vVZvr7DlVGCxrcVsOd&layers=1&nav=1&title=plot-selection-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D18Yd5ziqqOdqxL0vVZvr7DlVGCxrcVsOd%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Plot Selection and Layout` protocol surveys:

- [OpenAPI docs for plot layout](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-layout/post%2Fplot-layouts)

Survey data from plot layout:

```json
{
  "plot_location": 0,
  "control": true,
  "impact": true,
  "permanent": true,
  "replicate": 0,
  "plot_dimension": "100m",
  "orientation": 0,
  "plot_points": [
    {
      "lat": 0,
      "lng": 0,
      "name": "C"
    }
  ],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `plot_location`

The `plot_location` and `plot_points` keys map to the attribute `geo:hasGeometry` on the `tern:Site` class.

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

#### `name`

The `name` key in `plot_points` maps to the attribute `plot name` in [Plot Selection Attributes](https://linked.data.gov.au/def/nrm/d1e0ed8d-04a4-43de-87be-e6863de148cb), and is linked to site by `tern:hasAttribute`.

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

#### `control`

The `control` key maps to the attribute `control plot` in [Plot Selection Attributes](https://linked.data.gov.au/def/nrm/d1e0ed8d-04a4-43de-87be-e6863de148cb), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    tern:hasAttribute [
        rdfs:label "control plot" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/43772009-8897-4883-8e96-3a892fdd614b> ;
        tern:hasSimpleValue True^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value True^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `impact`

The `impact` key maps to the attribute `impact plot` in [Plot Selection Attributes](https://linked.data.gov.au/def/nrm/d1e0ed8d-04a4-43de-87be-e6863de148cb), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    tern:hasAttribute [
        rdfs:label "impact plot" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/8e4baa4a-510a-46c9-9374-49466f3e8866> ;
        tern:hasSimpleValue True^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value True^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `permanent`

The `permanent` key maps to the attribute `permanent plot` in [Plot Selection Attributes](https://linked.data.gov.au/def/nrm/d1e0ed8d-04a4-43de-87be-e6863de148cb), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    tern:hasAttribute [
        rdfs:label "permanent plot" ;
        tern:attribute <https://linnked.data.gov.au/def/test/dawe-cv/0994a5bb-5f3f-482f-bac2-d5687c031ff3> ;
        tern:hasSimpleValue True^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value True^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `replicate`

The `replicate` key maps to the attribute `replicate number` in [Plot Selection Attributes](https://linked.data.gov.au/def/nrm/d1e0ed8d-04a4-43de-87be-e6863de148cb), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    tern:hasAttribute [
        rdfs:label "replicate number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/81cc5c4b-179b-4483-861a-65008517bd32> ;
        tern:hasSimpleValue 3 ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value 3 ;
        ] ;
    ] ;
.
```

#### `plot_dimension`

The `plot_dimension` key maps to the property `tern:dimension` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    tern:dimension "100m"^^xsd:string .
```

#### `orientation`

The `orientation` key maps to the attribute `plot orientation` in [Plot Selection Attributes](https://linked.data.gov.au/def/nrm/d1e0ed8d-04a4-43de-87be-e6863de148cb), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    tern:hasAttribute [
        rdfs:label "plot orientation" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/638aae02-cfe8-472d-ae9d-252fe73cb7c4> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/7dc6f7da-2913-5088-9d12-17bc3a289935> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "East" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7dc6f7da-2913-5088-9d12-17bc3a289935> ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

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

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/plot-labelling/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:hasResult <https://example.com/iron-dropper/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/d15d05db-5007-411e-b257-105ef4f76821> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T05:38:02"^^xsd:dateTime ;
.

<https://example.com/plot-selection/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:hasResult <https://example.com/site/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/d15d05db-5007-411e-b257-105ef4f76821> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T05:38:02"^^xsd:dateTime ;
.

<https://example.com/AustraliaLand/1>
    a tern:FeatureOfInterest ;
    rdfs:label "Australia Land" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <https://example.com/noncreated-feature-type/Australia-Land/1> ;
.

<https://example.com/Equipments/1>
    a tern:FeatureOfInterest ;
    rdfs:label "Equipments" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <https://example.com/noncreated-feature-type/equipment/1> ;
.

<https://example.com/iron-dropper/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ,
        tern:Value ;
    rdfs:label "iron dropper 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Equipments/1> ;
    tern:featureType <https://example.com/noncreated-feature-type/iron-dropper/1> ;
.

<https://example.com/survey-data/control-plot/1>
    a tern:Attribute ;
    rdfs:label "control plot" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:attribute <https://linked.data.gov.au/def/nrm/43772009-8897-4883-8e96-3a892fdd614b> ;
    tern:hasSimpleValue false ;
    tern:hasValue [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value false
        ] ;
.

<https://example.com/survey-data/impact-plot/1>
    a tern:Attribute ;
    rdfs:label "impact plot" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:attribute <https://linked.data.gov.au/def/nrm/8e4baa4a-510a-46c9-9374-49466f3e8866> ;
    tern:hasSimpleValue true ;
    tern:hasValue [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value true
        ] ;
.

<https://example.com/survey-data/permanent-plot/1>
    a tern:Attribute ;
    rdfs:label "permanent plot" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:attribute <https://linnked.data.gov.au/def/test/dawe-cv/0994a5bb-5f3f-482f-bac2-d5687c031ff3> ;
    tern:hasSimpleValue true ;
    tern:hasValue [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value true
        ] ;
.

<https://example.com/survey-data/plot-name/1>
    a tern:Attribute ;
    rdfs:label "plot name" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
    tern:hasSimpleValue "The Jones Stream Study Plot" ;
    tern:hasValue [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The Jones Stream Study Plot"
        ] ;
.

<https://example.com/survey-data/plot-orientation/1>
    a tern:Attribute ;
    rdfs:label "plot orientation" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:attribute <https://linked.data.gov.au/def/nrm/638aae02-cfe8-472d-ae9d-252fe73cb7c4> ;
    tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/7dc6f7da-2913-5088-9d12-17bc3a289935> ;
    tern:hasValue [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "East" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7dc6f7da-2913-5088-9d12-17bc3a289935>
        ] ;
.

<https://example.com/survey-data/replicate-number/1>
    a tern:Attribute ;
    rdfs:label "replicate number" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:attribute <https://linked.data.gov.au/def/nrm/81cc5c4b-179b-4483-861a-65008517bd32> ;
    tern:hasSimpleValue 3 ;
    tern:hasValue [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 3
        ] ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ,
        tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:isSampleOf <https://example.com/AustraliaLand/1> ;
    tern:dimension "100m"^^xsd:string ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
    tern:hasAttribute
        <https://example.com/survey-data/control-plot/1> ,
        <https://example.com/survey-data/impact-plot/1> ,
        <https://example.com/survey-data/permanent-plot/1> ,
        <https://example.com/survey-data/plot-name/1> ,
        <https://example.com/survey-data/plot-orientation/1> ,
        <https://example.com/survey-data/replicate-number/1> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

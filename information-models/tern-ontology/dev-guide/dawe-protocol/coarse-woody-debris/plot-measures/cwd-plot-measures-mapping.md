---
sidebar_position: 2
---

# Coarse Woody Debris Plot Measures protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plots measures protocol](https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831) protocol.

Mentions of observable properties should refer to [cwd-plots/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/coarse-woody-debris/plot-measures/overview) for the feature type and value type information.

## Conceptual modelling

The Plots measures module records data about the site for the feature type 'coarse woody debris'.

These observations are recorded for each site during a site visit.

Systematically search the plot for any CWD that occurs within the plot. Measure any CWD within the plot if it is ≥10 cm diameter (or ≥5 cm for eligible systems) at any point along its length.

### Diagram

The following diagram shows the Coarse Woody Debris Plot Measures protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1WaPzLh0U8nlpfhELrPb5yglqgYXjq0mw&layers=1&nav=1&title=coarse-woody-debris-plot-measures-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1WaPzLh0U8nlpfhELrPb5yglqgYXjq0mw%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1WaPzLh0U8nlpfhELrPb5yglqgYXjq0mw&layers=1&nav=1&title=coarse-woody-debris-plot-measures-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1WaPzLh0U8nlpfhELrPb5yglqgYXjq0mw%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Coarse Woody Debris - Plots measures` protocol surveys:

- [OpenAPI docs for coarse woody debris survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Coarse-woody-debris-survey/post%2Fcoarse-woody-debris-surveys)

```json
{
  "start_date": "2023-01-24T06:13:59.936Z",
  "surveyId": "string",
  "sampling_survey_method": "P50",
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

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `sampling_survey_method`

The `sampling_survey_method` key maps to the sampling method used - `Plots' or 'Transects'. Sub module 'Coarse Woody Debris - Transects measures' is removed. By default, the value is 'Plots measures'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping coarse woody debris plot measures measurements

- [OpenAPI docs for coarse woody debris plots measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Coarse-woody-debris-observation/post%2Fcoarse-woody-debris-observations)

```json
{
  "Location": {
    "lat": 0,
    "lng": 0
  },
  "transect": {
    "transect_start_point": "N1",
    "closest_metre": 0
  },
  "widest_diameter_cm": 0,
  "narrowest_diameter_cm": 0,
  "length_metres": 0,
  "decay_class": "1",
  "coarse_woody_debris_survey": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Observation` class.

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

#### `transect`

The `transect` key maps to the `tern:Transect` class.

#### `transect_start_point`

The `transect_start_point` key maps to the attribute `tern:transectStartPoint` on the `tern:Transect` class.

##### Example

```turtle
<https://example.com/transect/1> a tern:Transect ;
    tern:transectStartPoint [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `widest_diameter_cm`

The `widest_diameter_cm` key maps to a `tern:Observation` with the observable property 'coarse woody debris widest diameter'.

#### `narrowest_diameter_cm`

The `narrowest_diameter_cm` key maps to a `tern:Observation` with the observable property 'coarse woody debris narrowest diameter'.

#### `length_metres`

The `length_metres` key maps to a `tern:Observation` with the observable property 'coarse woody debris length'.

#### `decay_class`

The `decay_class` key maps to a `tern:Observation` with the observable property 'cwd decay class'.

#### `coarse_woody_debris_survey`

The `coarse_woody_debris_survey` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/finding-cwd/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.192085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:resultDateTime "2022-12-10T10:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on coarse woody debris" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/coarse-woody-debris-length/1> ,
        <https://example.com/observation/coarse-woody-debris-narrowest-diameter/1> ,
        <https://example.com/observation/coarse-woody-debris-per-hectare-(cwd-volume-per-hectare)/1> ,
        <https://example.com/observation/coarse-woody-debris-volume-individual-(cwd-volume)/1> ,
        <https://example.com/observation/coarse-woody-debris-widest-diameter/1> ,
        <https://example.com/observation/cwd-abundance-per-hectare/1> ,
        <https://example.com/observation/cwd-cover-percent/1> ,
        <https://example.com/observation/cwd-decay-class/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-12-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-woody-debris-length/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris length" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b15f883b-c2e7-408e-8146-3754bbd5693f> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-woody-debris-narrowest-diameter/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris narrowest diameter" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.222e+01 ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult 2.222e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e73af424-f20d-49b8-81e3-cd30afb5b267> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-woody-debris-per-hectare-(cwd-volume-per-hectare)/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris per hectare (cwd volume per hectare)" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M3-PER-HA>
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/74b6493b-8dfe-42f6-acb2-0dda5652cf54> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-woody-debris-volume-individual-(cwd-volume)/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris volume individual (cwd volume)" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M3>
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/9ce420b8-8070-498c-974f-0eee82f23fd2> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-woody-debris-widest-diameter/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris widest diameter" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.222e+01 ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult 3.222e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ee4d10cb-4245-496c-a72c-0696e2014f90> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/cwd-abundance-per-hectare/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris abundance per hectare" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.22e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M3-PER-HA>
        ] ;
    sosa:hasSimpleResult 2.22e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6cabde11-a74f-408e-84fb-c320f6c72034> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/cwd-cover-percent/1>
    a tern:Observation ;
    rdfs:label "coarse woody debris cover percent" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.222e+01 ;
            tern:unit <http://qudt.org/vocab/unit/PERCENT>
        ] ;
    sosa:hasSimpleResult 2.222e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e73e3079-9858-42c6-b418-36326a6d0ddd> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/cwd-decay-class/1>
    a tern:Observation ;
    rdfs:label "cwd decay class" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Class 4" ;
            rdf:value <https://linked.data.gov.au/def/nrm/93a9ea83-e535-5bf6-82da-3a730ad83d4c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/93a9ea83-e535-5bf6-82da-3a730ad83d4c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/fa986148-e44a-4cd3-8ac3-17748eb013f3> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "20" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "20"
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-12-10T03:16:42.783000+00:00"^^xsd:dateTime ;
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
            wgs:lat -3.192086e+01 ;
            wgs:long 1.512424e+02
        ] ;
    tern:dimension "50m x 50m" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
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

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "coarse woody debris 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/c001183f-c6b5-4162-8de9-0c7ed0eb3bfe> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

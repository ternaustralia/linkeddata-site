---
sidebar_position: 2
---

# Cover full and lite protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Cover](https://linked.data.gov.au/def/nrm/c3403517-fcc6-4389-9c09-f1e1ee8b0f3b) protocol.

Mentions of observable properties should refer to [full-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/cover-module/full-protocol/overview) and [lite-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/cover-module/lite-protocol/overview) for the feature type and value type information.

## Conceptual modelling

The Cover module records data about the site for the following feature types:

- plant occurrence
- land surface

These observations are recorded for each site during a site visit.

The Cover module involves the collection of quantitative, accurate and repeatable measures of vegetation and substrate cover within the plot, using the point-intercept method.

### Diagram

The following diagram show the Cover mapping. The orange nodes are things related to the plant occurrence feature type and the yellow nodes are things related to the land surface feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=cover-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1bl7zq2xWibhnyqvAFFham3fIvyv23lpV%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=cover-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1bl7zq2xWibhnyqvAFFham3fIvyv23lpV%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Cover` protocol surveys:

- [OpenAPI docs for cover](https://beta.core-api.paratoo.tern.org.au/documentation#/Cover-point-intercept-survey/post%2Fcover-point-intercept-surveys)

Survey data from Cover point intercept:

```json
{
  "start_date_time": "2022-12-15T05:45:24.392Z",
  "end_date_time": "2022-12-15T05:45:24.392Z",
  "protocol_variant": "lite",
  "surveyId": "string",
  "plot_visit": 0,
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

#### `end_date_time`

The `end_date_time` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `protocol_variant`

The `protocol_variant` key is protocol selection in the app, not mapping to TERN Ontology.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Cover poinr intercept point measurements

- [OpenAPI docs for cover poinr intercept point](https://beta.core-api.paratoo.tern.org.au/documentation#/Cover-point-intercept-point/post%2Fcover-point-intercept-points)

```json
{
  "point_number": 0,
  "soils_substrate": "BR",
  "cover_transect_start_point": "N1",
  "cover_point_intercept_survey": 0,
  "species_intercepts": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `point_number`

The `point_number` key maps to the attribute `point intercept number` in [Cover Attributes](https://linked.data.gov.au/def/nrm/08184439-7631-45b8-b3a1-0ed06d9c5566), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "12"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "12"^^xsd:string ;
        ] ;
    ] ;
```

#### `soils_substrate`

The `soils_substrate` key maps to a `tern:Observation` with the observable property 'substrate type'.

#### `cover_transect_start_point`

The `cover_transect_start_point` key maps to the property `tern:transectStartPoint` on the `tern:Transect` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/transect/456> a tern:Transect ;
    tern:transectStartPoint <https://example.com/site/1/geometry/1> .

<https://example.com/site/1/geometry/1> a tern-loc:Point ;
    rdfs:label "Position 1" ;
    wgs84:lat -34 ;
    wgs84:long 150.3 ;
    geosparql:asWKT "POINT(150.3 -34.0)"^^geosparql:wktLiteral ;
.
```

#### `cover_point_intercept_survey`

The `cover_point_intercept_survey` key maps to the `tern:SiteVisit` class.

#### `species_intercepts`

The `species_intercepts` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

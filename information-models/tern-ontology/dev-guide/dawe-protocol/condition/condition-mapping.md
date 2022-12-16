---
sidebar_position: 2
---

# Condition Point Intercept protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Condition point intercept protocol](https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6) protocol.

Mentions of observable properties should refer to [point-intercept/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/condition/point-intercept/overview) for the feature type and value type information.

## Conceptual modelling

The Condition point intercept module records data about the site for the following feature types:

- plant occurrence
- plant litter

These observations are recorded for each site during a site visit.

The Condition module involves the collection of quantitative, accurate and repeatable measures of condition attributes within the plot, using a combination of point-intercept, transect, belt-transect and plot-based methods. The primary aim of the Condition module is to collect baseline and revisit data for Regional Land Partnerships (RLP) projects, so any changes in condition following interventions can be evaluated.

Condition point-intercept is used to collect the condition point-intercept measures using four point-intercept transects, aligned with a subset of the existing plot layout described in the Cover module.

### Diagram

The following diagram show the Condition point-intercept mapping. The orange nodes are things related to the plant occurrence feature type and the yellow nodes are things related to the plant litter feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=condition-point-intercept-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AZ_g1o36UI0PmGDd4dF9-hQ9MjaUEGg1%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=condition-point-intercept-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AZ_g1o36UI0PmGDd4dF9-hQ9MjaUEGg1%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Condition point intercept` protocol surveys:

- [OpenAPI docs for condition point intercept survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Condition-point-intercept-survey/post%2Fcondition-point-intercept-surveys)

Survey data from Condition point intercept:

```json
{
  "surveyId": "string",
  "start_date": "2022-12-16T02:00:23.624Z",
  "end_date": "2022-12-16T02:00:23.624Z",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

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

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Condition point intercept measurements

- [OpenAPI docs for condition point intercept](https://beta.core-api.paratoo.tern.org.au/documentation#/Condition-point-intercept/post%2Fcondition-point-intercepts)

```json
{
  "lut_condition_species": "foo",
  "lut_condition_vegeatation_health": "CH",
  "lut_condition_vertebrate_pest_type": "CAT",
  "leaf_litter_depth_mm": 0,
  "mistletoe_number": 0,
  "comment": "string",
  "point_number": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `lut_condition_species`

The `lut_condition_species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `lut_condition_vegeatation_health`

The `lut_condition_vegeatation_health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

#### `lut_condition_vertebrate_pest_type`

The `lut_condition_vertebrate_pest_type` key should be deleted because sub module 'Vertebrate pest presence (plot)' has been removed.

#### `leaf_litter_depth_mm`

The `leaf_litter_depth_mm` key maps to a `tern:Observation` with the observable property 'leaf litter depth'.

#### `mistletoe_number`

The `mistletoe_number` key maps to a `tern:Observation` with the observable property 'mistletoe count'.

#### `comment`

The `comment` key maps to the property `rdfs:comment` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    rdfs:comment "The measure is confident."^^xsd:string ;
.
```

#### `point_number`

The `point_number` key maps to the attribute `point intercept number` in [Condition Attributes](https://linked.data.gov.au/def/nrm/ce3412d6-a99e-482c-9651-5b2b5ac42456), and is linked to site by `tern:hasAttribute`.

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

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

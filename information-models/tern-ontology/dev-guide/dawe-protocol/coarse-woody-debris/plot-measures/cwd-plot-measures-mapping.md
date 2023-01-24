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

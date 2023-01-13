---
sidebar_position: 2
---

# Soil Bulk Density mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Soil bulk density protocol](https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/soil-bulk-density-submodule/overview) for the feature type and value type information.

## Conceptual modelling

The Soil bulk density module records data about the site for the following feature types:

- soil specimen

These observations are recorded for each site during a site visit.

Collection of soil core samples at 0–10, 10–20, and 20–30 cm increments from the edge of the soil pit, sealing the core samples or storing them in zip lock bags, and post-field survey processing of soil core samples. Soil bulk density measures are collected so important soil parameters can be quantified, particularly carbon content.

### Diagram

The following diagram shows the Soil bulk density protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa&layers=1&nav=1&title=soil-soil-bulk-density-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa&layers=1&nav=1&title=soil-soil-bulk-density-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Soil bulk density measurements

- [OpenAPI docs for soil bulk density](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-bulk-density-survey/post%2Fsoil-bulk-density-surveys)

```json
{
  "surveyId": "string",
  "start_date_time": "2023-01-13T06:30:21.614Z",
  "end_date_time": "2023-01-13T06:30:21.614Z",
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

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

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

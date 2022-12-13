---
sidebar_position: 2
---

# Floristics full and lite protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Floristics](https://linked.data.gov.au/def/nrm/2b5c2281-e0f4-4ef5-8ae0-8ae745af9a7e) protocol.

Mentions of observable properties should refer to [full-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/floristics-module/full-protocol/overview) and [lite-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/floristics-module/lite-protocol/overview) for the feature type and value type information.

## Conceptual modelling

The Plot Description module records data about the site for the following feature types:

- plant occurrence

These observations are recorded for each site during a site visit.

Specimens will be collected for each flora species present within the plot, and each specimen has an identifier. If required, photos will be taken of the specimen or an individual, and each photo has an identifier. Record the second `growth form` if there is one for a species.

### Diagram

The following diagram show the floristics mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=floristics-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1a0ZGzEnetJHZDp6pwqBHzqDNj-9rLURE%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=floristics-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1a0ZGzEnetJHZDp6pwqBHzqDNj-9rLURE%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Floristics` protocol surveys:

- [OpenAPI docs for floristics - full](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-survey-full/post%2Ffloristics-veg-survey-fulls)
- [OpenAPI docs for floristics - lite](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-survey-lite/post%2Ffloristics-veg-survey-lites)

Survey data from floristics:

```json
{
  "surveyId": "string",
  "start_date_time": "2022-12-13T08:12:53.326Z",
  "end_date_time": "2022-12-13T08:12:53.326Z",
  "plot_visit": 0,
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

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping full and lite measurements

- [OpenAPI docs for full measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-voucher-full/post%2Ffloristics-veg-voucher-fulls)
- [OpenAPI docs for lite measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-voucher-lite/post%2Ffloristics-veg-voucher-lites)

```json
{
  "field_name": "string",
  "voucher_barcode": "string",
  "growth_form_1": "V",
  "growth_form_2": "V",
  "floristics_veg_survey_full": 0,
  "photos": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. Since majority of the properties on these observations share the same values (feature of interest, site visit, result and phenomenon time) they can be recorded as observation members of an observation collection.

The feature of interest for all the observations is plant occurrence modelled as a `tern:Sample` with the feature type as 'plant occurrence'.

#### `field_name`

The `field_name` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `voucher_barcode`

The `voucher_barcode` key maps to the property `dwc:materialSampleID` in `tern:MaterialSample` class. It is the identifier of specimen collected during `tern:Sampling` 'plant tissue vouchering'.

#### `growth_form_1` & `growth_form_2`

The `growth_form_1` and `growth_form_2` map to a `tern:Observation` with the observable property 'growth form'.

#### `floristics_veg_survey_full`

The `floristics_veg_survey_full` is protocol selection in the app, not mapping to TERN Ontology. 

#### `photos`

The `photos` key maps to photos(`tern:Sample`) taken during 'taking photos'(`tern:Sampling`) for specimen(`tern:MaterialSample`) and individual(`tern:Sample`). Each photo has the property `dcterms:identifier`.

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

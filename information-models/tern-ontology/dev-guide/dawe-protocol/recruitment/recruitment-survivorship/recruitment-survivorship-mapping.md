---
sidebar_position: 2
---

# Recruitment module - Survivorship protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Recruitment module - Survivorship protocol](https://linked.data.gov.au/def/nrm/f470e27d-20ed-46dc-b64a-d67b39a9dffc) protocol.

Mentions of observable properties should refer to [recruitment-survivorship/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/recruitment/recruitment-survivorship/overview) for the feature type and value type information.

## Conceptual modelling

The Recruitment module - Survivorship protocol records data about the site for the following feature types:

- plant individual

These observations are recorded for each site during a site visit.

This protocol allows users to tag individual plants with a unique ID, record location, health and life-stage, and record size measurements for individual plants.

### Diagram

The following diagram shows the Recruitment module - Survivorship protocol mapping. The orange node `plant missing status` is only recorded when revisit.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L&layers=1&nav=1&title=recruitment-survivorship-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L&layers=1&nav=1&title=recruitment-survivorship-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1wMwY9wH09NE9SUgg2jwuM7FpWJgQKs8L%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Recruitment - survivorship` protocol surveys:

- [OpenAPI docs for recruitment survivorship survey](https://dev.core-api.paratoo.tern.org.au/documentation#/Recruitment-survivorship-survey/post%2Frecruitment-survivorship-surveys)
- [OpenAPI docs for recruitment survivorship visit](https://dev.core-api.paratoo.tern.org.au/documentation#/Recruitment-survivorship-visit/post%2Frecruitment-survivorship-visits)

1. Survey data from recruitment survivorship survey:

```json
{
  "surveyId": "string",
  "start_date": "2023-03-13T07:38:15.420Z",
  "end_date": "2023-03-13T07:38:15.420Z",
  "plot_visit": 0,
  "visit_type": true,
  "study_area_type": "Belt transect",
  "species": [
    {
      "species": "string"
    }
  ],
  "comments": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

2. Survey data from recruitment survivorship visit:

```json
{
  "study_area_type": "Belt transect",
  "visit_type": true,
  "species": "string",
  "comments": "string",
  "survivorship_survey": 0,
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

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `visit_type`

The `visit_type` key maps to the attribute `visit type` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "visit type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/bfa185a3-7e96-47ef-be9b-4fdfb699821e> ;
        tern:hasSimpleValue true ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value true ;
        ] ;
    ] ;
.
```

#### `study_area_type`

The `study_area_type` key maps to the attribute `study area type` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "study area type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/9805d35e-2844-4e2a-bc59-e6560cc4efb5> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/501885ea-655a-5b86-b148-e4c51625526c> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Plot" ;
            rdf:value <https://linked.data.gov.au/def/nrm/501885ea-655a-5b86-b148-e4c51625526c> ;
        ] ;
    ] ;
.
```

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `comments`

The `comments` key maps to the attribute `recruitment comments` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "recruitment comments" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/75228732-5776-4972-8534-84496bfaede9> ;
        tern:hasSimpleValue "The weather is sunny." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The weather is sunny." ;
        ] ;
    ] ;
.
```

#### `survivorship_survey`

The `survivorship_survey` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Recruitment survivorship measurements

- [OpenAPI docs for recruitment survivorship measurements](https://dev.core-api.paratoo.tern.org.au/documentation#/Recruitment-survivorship-observation/post%2Frecruitment-survivorship-observations)

```json
{
  "species": "string",
  "location": {
    "lat": 0,
    "lng": 0
  },
  "label": "string",
  "tree_status": "Alive",
  "veg_growth_stage": "ER",
  "life_stage": "Seedling",
  "health": "Canopy health",
  "plant_height": 0,
  "average_canopy_width": 0,
  "dbh_measurement": 0,
  "photo": 0,
  "comments": "string",
  "survivor_survey": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. Since majority of the properties on these observations share the same values (feature of interest, site visit, result and phenomenon time) they can be recorded as observation members of an observation collection.

The feature of interest for all the observations is plant individual modelled as a `tern:Sample` with the feature type as 'plant individual'.

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:ObservationCollection` class.

##### Example

```turtle
<https://example.com/observation-collection/1> a tern:ObservationCollection ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `label`

The `label` key maps to the property `dcterms:identifier` on the `tern:Sample` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/sample/1> a tern:Sample ;
    dcterms:identifier "plant-individual-001" .
```

#### `tree_status`

The `tree_status` key maps to a `tern:Observation` with the observable property 'plant status'.

#### `veg_growth_stage`

The `veg_growth_stage` key maps to a `tern:Observation` with the observable property 'growth stage'.

#### `life_stage`

The `life_stage` key maps to a `tern:Observation` with the observable property 'life stage'.

#### `health`

The `health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

#### `plant_height`

The `plant_height` key maps to a `tern:Observation` with the observable property 'plant height'.

#### `average_canopy_width`

The `average_canopy_width` key maps to a `tern:Observation` with the observable property 'average canopy width'.

#### `dbh_measurement`

The `dbh_measurement` key maps to a `tern:Observation` with the observable property 'diameter at breast height (dbh)'.

#### `photo`

The `photo` key maps to photos(`tern:Sample`) taken during 'taking photos'(`tern:Sampling`) for observations on site. Each photo has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `comments`

The `comments` key maps to the attribute `recruitment comments` in [Recruitment module -Survivorship protocol Attributes](https://linked.data.gov.au/def/nrm/fd311a29-d15b-497a-9ddd-ce00f1259fac), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1/site-visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "recruitment comments" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/75228732-5776-4972-8534-84496bfaede9> ;
        tern:hasSimpleValue "The weather is sunny." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The weather is sunny." ;
        ] ;
    ] ;
.
```

#### `survivorship_survey`

The `survivorship_survey` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

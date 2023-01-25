---
sidebar_position: 2
---

# Vertebrate Fauna - Bird Survey protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Bird survey protocol](https://linked.data.gov.au/def/nrm/98db8232-2c51-4907-99a7-0ccb8b825382) protocol.

Mentions of observable properties should refer to [bird-survey/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/vertebrate/bird-survey/overview) for the feature type and value type information.

## Conceptual modelling

The Bird survey records data about the site for the following feature types:

- bird population
- climate

These observations are recorded for each site during a site visit.

### Diagram

The following diagram is colour-coded to show the related things by feature type. The blue nodes are things related to the bird population feature type and the green nodes are things related to the climate feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1qR61EM74943f1HAO6BIc6-YsD_GreZM5&layers=1&nav=1&title=vertebrate-fauna-bird-survey-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1qR61EM74943f1HAO6BIc6-YsD_GreZM5%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1qR61EM74943f1HAO6BIc6-YsD_GreZM5&layers=1&nav=1&title=vertebrate-fauna-bird-survey-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1qR61EM74943f1HAO6BIc6-YsD_GreZM5%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Bird survey` protocol surveys:

- [OpenAPI docs for bird survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Bird-survey/post%2Fbird-surveys)

```json
{
  "start_date": "2023-01-24T08:32:55.588Z",
  "end_date": "2023-01-24T08:32:55.589Z",
  "survey_type": "202",
  "playback_used": true,
  "surveyId": "string",
  "plot_visit": 0,
  "location": {
    "lat": 0,
    "lng": 0
  },
  "plot_layout": 0,
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

#### `survey_type`

The `survey_type` key maps to the attribute `bird survey type` in [Bird survey Attributes](https://linked.data.gov.au/def/nrm/7717e0ae-aea0-434d-892f-45bc3a40e0b4), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "bird survey type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/c079efc5-5e96-4460-9323-e2f5eee7eb8f> ;
        tern:hasSimpleValue "20"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "20"^^xsd:float ;
        ] ;
    ] ;
.
```

#### `playback_used`

The `playback_used` key maps to the attribute `playback used` in [Bird survey Attributes](https://linked.data.gov.au/def/nrm/7717e0ae-aea0-434d-892f-45bc3a40e0b4), and is linked to site visit by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/visit/1> a tern:SiteVisit ;
    tern:hasAttribute [
        rdfs:label "playback used" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/60cd3fa2-ba03-4212-922d-8b0dc04e7176> ;
        tern:hasSimpleValue true ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value true ;
        ] ;
    ] ;
.
```

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `plot_layout`

The `plot_layout` key maps to the `tern:Site` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

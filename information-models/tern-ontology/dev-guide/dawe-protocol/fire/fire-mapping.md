---
sidebar_position: 2
---

# Fire protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Fire](https://linked.data.gov.au/def/nrm/91a54c7c-48ff-402d-a761-ed4fd4ad4a4b) protocol.

Mentions of observable properties should refer to [fire/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/fire/overview) for the feature type and value type information.

## Conceptual modelling

The Fire module records data about the site for the following feature types:

- plant occurrence
- land surface substrate

These observations are recorded for each site during a site visit.

Lay out the N2/S2, N4/S4, E2/W2 and E4/W4 transects before doing survey.

### Diagram

The following diagram is colour-coded to show the related things by feature type. The blue nodes are things related to the land surface substrate feature type and the green nodes are things related to the plant occurrence feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M&layers=1&nav=1&title=fire-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M&layers=1&nav=1&title=fire-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1pkFUIXIC3u1qEEmX40KGcSczRTqM7o9M%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Fire` protocol surveys:

- [OpenAPI docs for fire survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Fire-survey/post%2Ffire-surveys)

```json
{
  "surveyId": "string",
  "start_date": "2023-01-24T00:19:39.024Z",
  "plot_visit": 0,
  "last_fire": "2023-01-24T00:19:39.024Z",
  "last_fire_accuracy_days": 0,
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

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `last_fire`

The `last_fire` key maps to the date and time of last fire event recorded in data type `xsd:dateTime`.

#### `last_fire_accuracy_days`

The `last_fire_accuracy_days` key maps to the attribute `time since fire` in [Fire Attributes](https://linked.data.gov.au/def/nrm/e8f2ee06-9943-49a4-b113-064f8e195dca), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "time since fire" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/c079efc5-5e96-4460-9323-e2f5eee7eb8f> ;
        tern:hasSimpleValue "20"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "20"^^xsd:float ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

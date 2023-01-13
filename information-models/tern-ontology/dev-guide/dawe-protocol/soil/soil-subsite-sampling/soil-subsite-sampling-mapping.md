---
sidebar_position: 2
---

# Soil Sub-site Samples protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Soil sub-site samples protocol](https://linked.data.gov.au/def/nrm/e3ad3e5b-7c1c-4b59-bdb1-297f707d2ca3) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/soil-subsite-sampling/overview) for the feature type and value type information.

## Conceptual modelling

The Soil sub-site samples module records data about the site for the following feature types:

- soil horizon
- soil specimen

These observations are recorded for each site during a site visit.

If a depth of 30 cm cannot be achieved after three attempts, record what digging was Stopped by and sample down to the depth achieved.

Record if the horizon is ‘Typical’ or ‘Atypical’ of the 1 m+ soil pit observations. If it is atypical, record Atypicality comments.

### Diagram

The following diagram shows the Soil sub-site samples protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3&layers=1&nav=1&title=soil-soil-sub-site-sampling-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3&layers=1&nav=1&title=soil-soil-sub-site-sampling-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ZrMu8nU9TM13KTex3KPF6AamSBPXbLB3%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Soil sub-site samples measurements

- [OpenAPI docs for Soil sub-site samples](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-sub-site-samples-survey/post%2Fsoil-sub-site-samples-surveys)

```json
{
  "start_date": "2023-01-13T07:33:12.271Z",
  "end_date": "2023-01-13T07:33:12.271Z",
  "microhabitat_photo": [0],
  "soil_pit_depth": 0,
  "digging_stopped_by": "N/A",
  "soil_pit_photo": [0],
  "soil_horizon_observations": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

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

#### `microhabitat_photo` and `soil_pit_photo`

These 2 keys map to photos(`tern:Sample`) taken during 'taking photos'(`tern:Sampling`) for observations on site. Each photo has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `soil_pit_depth`

The `soil_pit_depth` key maps to a `tern:Observation` with the observable property 'soil pit depth'.

#### `digging_stopped_by`

The `digging_stopped_by` key maps to the attribute `digging stopped by` in [Soil module - Soil subsite sampling protocol Attributes](https://linked.data.gov.au/def/nrm/8981bb19-3158-48ed-9a91-aae67e358256), and is linked to `tern:Observation` by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "digging stopped by" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5cb6df41-5411-44b7-b70f-0209ee91cf06> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/58a3e45d-694a-5959-80ff-74c352ed3e7a> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Gravel" ;
            rdf:value <https://linked.data.gov.au/def/nrm/58a3e45d-694a-5959-80ff-74c352ed3e7a> ;
        ] ;
    ] ;
```

### `soil_horizon_observations`

#### The `soil_horizon_observations` key maps to the soil horizon observations in [OpenAPI docs for Soil pit characterisation](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-observation/post%2Fsoil-horizon-observations)

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

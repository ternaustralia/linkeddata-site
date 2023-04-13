---
sidebar_position: 2
---

# Targeted survey - Ecological community protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Ecological community protocol](https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c) protocol.

Mentions of observable properties should refer to [ecological-community/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/ecological-community/overview) for the feature type and value type information.

## Conceptual modelling

The Ecological community protocol records data about the site for the feature type 'plant community'.

These observations are recorded for each site during a site visit.

### Diagram

The following diagram shows the Ecological community protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8&layers=1&nav=1&title=targeted-survey-ecological-community-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8&layers=1&nav=1&title=targeted-survey-ecological-community-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8%26export%3Ddownload">View diagram in new tab.</a>

### Survey data from targeted survey - Ecological community protocol:

The following is dummy data:

```json
{
  "start_date": "2023-04-11T06:03:58.525Z",
  "lat": 0,
  "lng": 0,
  "plot_visit": 0,
  "observers": "Paul Green",
  "sample_id": "materialSample001",
  "photo": [0],
  "voucher_type": "skin",
  "condition_thresholds": "string",
  "disturbance": "Cultivated; rain fed",
  "species_and_cover": "20%",
  "weeds": "weed species",
  "health": "Healthy",
  "diagnostic_characteristics": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/visit/1> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `lat`, `lng`

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `observers`

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Observation` class.

##### Example

```
<https://example.com/observation/1> a tern:Observation ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `sample_id`

The `sample_id` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-sample/1> a tern:MaterialSample ;
    dwc:materialSampleID "materialSample001" .
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher type` in [Targeted survey module - Ecological Community protocol Attributes](https://linked.data.gov.au/def/nrm/228ecdc5-9982-4049-9c15-db781d7e6e0f), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/36d484d2-05fb-548f-a939-740e4bf27fae> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Animal tissue (skin)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/36d484d2-05fb-548f-a939-740e4bf27fae> ;
        ] ;
    ] ;
.
```

#### `condition_thresholds`

The `condition_thresholds` key maps to a `tern:Observation` with the observable property 'condition thresholds'.

#### `disturbance`

The `disturbance` key maps to a `tern:Observation` with the observable property 'disturbance type'.

#### `species_and_cover`

The `species_and_cover` key maps to a `tern:Observation` with the observable property 'species and cover'.

#### `weeds`

The `weeds` key maps to a `tern:Observation` with the observable property 'weeds'.

#### `health`

The `health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

#### `diagnostic_characteristics`

The `diagnostic_characteristics` key maps to a `tern:Observation` with the observable property 'diagnostic characteristics'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

```

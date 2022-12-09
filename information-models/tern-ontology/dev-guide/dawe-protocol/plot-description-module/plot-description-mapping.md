---
sidebar_position: 2
---

# Plot Description protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot Description](https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32) protocol.

Mentions of observable properties should refer to [plot-description/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/plot-description-module/overview) for the feature type and value type information.

## Conceptual modelling

The Plot Description module records data about the site for the following feature types:

- climate
- landform
- land surface
- plant community
- vegetation stratum

These observations are recorded for each site during a site visit.

A NVIS Level 5 description will be automatically generated based on entered vegetation information. The value of `structural formation` aligns with NVIS and is based on `growth form`, `height class`, and `cover`.

The value of `slope class` is automatically generated from a list of 8 values once `slope` is entered – this information can help determine `landform element` (generated based on `slope` (degrees) value).

### Diagram

The following diagram is colour-coded to show the related things by feature type. The orange nodes are things related to the landform feature type and the yellow nodes are things related to the land surface feature type. Blue is for the climate feature type and green is for the vegetation stratum feature type. Lastly, purple is for the plant community feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Plot Description` protocol surveys:

- [OpenAPI docs for plot location](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-location/post%2Fplot-locations)
- [OpenAPI docs for plot visit](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-visit/post%2Fplot-visits)

1. Survey data from plot location:

```json
{
  "plot_label": "string",
  "comment": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `plot_label`

The `plot_label` key maps to the attribute `plot name` in [Plot Description Attributes](https://linked.data.gov.au/def/nrm/0183ecf9-7e7a-4481-ba43-a926dfc638f9), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    tern:hasAttribute [
        rdfs:label "plot name" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/8a4f71cc-7572-4b97-a3ef-c8061551b1fe> ;
        tern:hasSimpleValue "The Jones Stream Study Plot" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "The Jones Stream Study Plot" ;
        ] ;
    ] ;
.
```

#### `comment`

The `comment` key maps to the property `rdfs:comment` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    rdfs:comment "The weather is sunny."^^xsd:string .
```

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

2. Survey data from plot visit:

```json
{
  "start_date": "2022-12-08T09:10:08.112Z",
  "end_date": "2022-12-08T09:10:08.112Z",
  "plot_location": 0,
  "plot_physical_state_comments": "string",
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

#### `plot_location`

The `plot_location` key maps to the attribute `geo:hasGeometry` on the `tern:Site` class.

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

#### `plot_physical_state_comments`

The `plot_physical_state_comments` key maps to the property `rdfs:comment` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    rdfs:comment "The weather is sunny."^^xsd:string .
```

#### `visit_field_name`

The `visit_field_name` key maps to the observable property `dominant species`, `second dominant species`, and `thrid dominant species` in [Plot Description Observable Properties](https://linked.data.gov.au/def/nrm/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312), and is linked to `tern:ObservationCollection` by `skos:member`. For each of the three vegetation strata (Upper [U], Mid [M], Ground [G]) nominate in descending order the dominant species (up to 3 species per stratum) for each stratum, where present.

##### Example

```turtle
<https://example.com/observation/dominant-species/1>
    a tern:Observation ;
    rdfs:label "dominant species" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Melaleuca citrolens" ;
    ] ;
    sosa:hasSimpleResult "Melaleuca citrolens" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8e782307-4e4d-4cdf-9b10-8d79794065a4> ;
.
```

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

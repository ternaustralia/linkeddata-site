---
sidebar_position: 2
---

# Opportunistic Observations protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Opportunistic observations protocol](https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/opportunistic-observations-module/overview) for the feature type and value type information.

## Conceptual modelling

The Opportunistic Observations module records data about the site for the following feature types:

- habitat
- plant occurrence
- animal occurrence

These observations are recorded for each site during a site visit.

Opportunistic observations are unplanned (no defined survey effort) and made while undertaking other activities, at any stage of a project. Observations often occur while travelling between plots and while undertaking other modules.

`voucher condition` is only recorded for fauna specimens.

### Diagram

The following diagram show the Opportunistic Observations protocol mapping. The blue nodes are related to 'habitat sampling' on site. Light green nodes are things related to 'animal occurrence' feature type and green nodes are 'fauna vouchering' sampling on 'animal occurrence'. Light purple nodes are things related to 'plant occurrence' feature type and purple nodes are 'plant vouchering' sampling on 'plant occurrence'. Yellow nodes are 'taking representative media' sampling on observations. Orange nodes are things related to both 'animal occurrence' and 'plant occurrence' feature types.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=opportunistic-observations-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=opportunistic-observations-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Opportunistic Observations measurements

- [OpenAPI docs for opportunistic observations](https://beta.core-api.paratoo.tern.org.au/documentation#/Opportunistic-observation/post%2Fopportunistic-observations)

```json
{
  "observation_id": "string",
  "representative_media": [0],
  "location": {
    "lat": 0,
    "lng": 0
  },
  "plot_location": 0,
  "taxa_type": "VP",
  "species": "string",
  "confident": true,
  "identification_source": "F",
  "date_time": "2022-12-20T06:28:21.298Z",
  "number_of_individuals": 0,
  "observation_method": "OB",
  "habitat_description": "CD",
  "observation_notes": "string",
  "veg_growth_form": "V",
  "vouchered_specimens": [
    {
      "voucher_barcode": "string",
      "voucher_comment": "string",
      "voucher_type": "Animal tissue (skin)",
      "voucher_condition": "F"
    }
  ],
  "fauna_behaviour": "FE",
  "fauna_age_class": "AD",
  "fauna_sex": "M",
  "fauna_breeding_code": "UK",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `observation_id`

The `observation_id` key maps to the property `dcterms:identifier` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    dcterms:identifier "observation001"^^xsd:string ;
.
```

#### `representative_media`

The `representative_media` key maps to photos, videos, and audio(`tern:Sample`) taken during 'taking representative media'(`tern:Sampling`) for observations on site. Each representative media has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `plot_location`

The `plot_location` key map sto the attribute `geo:hasGeometry` on the `tern:Site` class.

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

#### `taxa_type`

The `taxa_type` key maps to a `tern:Observation` with the observable property 'taxa type'.

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `confident`

The `confident` key maps to the attribute `species name confidence` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/field-species-name/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "species name confidence" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/6f6a3655-4347-4219-bfe1-9e4023d3a80f> ;
        tern:hasSimpleValue True ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value True ;
        ] ;
    ] ;
.
```

---
sidebar_position: 2
---

# Pan trapping protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Pan trapping protocol](https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303) protocol in [Invertebrate Fauna](https://linked.data.gov.au/def/nrm/0ad98270-707f-4a78-acd1-666faa2c124e) module.

Mentions of observable properties should refer to [pan-trapping/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/invertebrate/pan-trapping/overview) for the feature type and value type information.

## Conceptual modelling

The Pan trapping protocol records data about the site for the following feature types:

- plant community
- animal specimen

These observations are recorded for each site during a site visit.

The method involves the use of small coloured bowls or ‘pans’ which are either filled with water and a small amount of dish washing liquid for rapid sampling over one day, or undiluted propylene glycol for sampling over a longer duration.

### Diagram

The following diagram shows the Pan trapping protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d&layers=1&nav=1&title=invertebrate-fauna-pan-trapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d&layers=1&nav=1&title=invertebrate-fauna-pan-trapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

### Survey data from invertebrate pan trap

- [OpenAPI docs for invertebrate pan trap](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-pan-trap/post%2Finvertebrate-pan-traps)

```json
{
  "barcode": "string",
  "start_date": "2023-04-11T06:03:58.525Z",
  "proposed_duration": 0,
  "end_date": "2023-04-11T06:03:58.525Z",
  "duration": 0,
  "lat": 0,
  "lng": 0,
  "trapId": "string",
  "trap_photo": [0],
  "inside_pan_colour": "W",
  "outside_pan_colour": "W",
  "pan_diameter": 0,
  "pan_depth": 0,
  "pan_capacity": 0,
  "pan_placement": "OG",
  "pan_height_above_ground": 0,
  "liquid_type": "WDS",
  "liquid_amount(estimated)": 0,
  "stakes_used": true,
  "trap_not_found": true,
  "trap_evaporated": true,
  "rain_impacted": true,
  "trap_upended": true,
  "trap_damaged": true,
  "no_catch": true,
  "samples": {
    "media": [
      {
        "media": "string or id",
        "comment": "string"
      }
    ],
    "preservation_type": "DS",
    "collection_date": [
      {
        "collection_date": "2023-04-11T06:03:58.525Z"
      }
    ]
  },
  "dominant_species_in_flower": [
    {
      "species_name": "string"
    }
  ],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `barcode`

The `barcode` key maps to the property `dcterms:identifier` on the `tern:Sampler` class.

##### Example

```
<https://example.com/pan-trap/1> a tern:Sampler ;
    dcterms:identifier "trap001" .
```

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:Deployment` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/trap-set-up/456> a tern:Deployment ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `proposed_duration`

The `proposed_duration` key maps to the attribute `proposed pan trapping duration` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "proposed pan trapping duration" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/51abbe2c-0108-4def-95ec-39d574593a52> ;
        tern:hasSimpleValue "2h"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "2h"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `end_date`

The `end_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/sample-collection-and-trap-removal/456> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `duration`

The `duration` can be calculated by values of `start_date` and `end_date`.

#### `lat`, `lng`

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:Deployment` class.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `trapId`

The `trapId` key maps to the property `dcterms:identifier` on the `tern:Sampler` class.

##### Example

```
<https://example.com/trap/1> a tern:Sampler ;
    dcterms:identifier "trap001" .
```

#### `trap_photo`

The `trap_photo` key maps to the `tern:Sample` class.

#### `inside_pan_colour`

The `inside_pan_colour` key maps to the attribute `pan trap inside colour` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "pan trap inside colour" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/4a6ae834-08bf-4f80-b219-fbe9c56e4e1a> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/dc9540f6-9933-51bf-9d19-347656e32236> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Blue" ;
            rdf:value <https://linked.data.gov.au/def/nrm/dc9540f6-9933-51bf-9d19-347656e32236> ;
        ] ;
    ] ;
.
```

#### `outside_pan_colour`

The `outside_pan_colour` key maps to the attribute `pan trap outside colour` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "pan trap outside colour" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/7b3a55fa-7d3e-44f5-9042-897b624c4273> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/4a97644d-9c42-5e78-a586-eea5bf16fdad> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "White" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4a97644d-9c42-5e78-a586-eea5bf16fdad> ;
        ] ;
    ] ;
.
```

#### `pan_diameter`

The `pan_diameter` key maps to the attribute `pan diameter` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "pan diameter" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/2b0aac4a-a79a-4ce9-aa34-f8e0cee4770f> ;
        tern:hasSimpleValue "10"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "10"^^xsd:float ;
            tern:unit unit:CentiM ;
        ] ;
    ] ;
.
```

#### `pan_capacity`

The `pan_capacity` key maps to the attribute `pan trap capacity` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "pan trap capacity" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/498a0a7e-9a0f-4ebe-9775-a414caa7a80d> ;
        tern:hasSimpleValue "100"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "100"^^xsd:float ;
            tern:unit unit:MilliL ;
        ] ;
    ] ;
.
```

#### `pan_placement`

The `pan_placement` key maps to the attribute `pan placement` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "pan placement" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/b5e04630-0013-4cc2-8515-02fdc1e952fc> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `pan_height_above_ground`

The `pan_height_above_ground` key maps to the attribute `pan height above ground` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "pan height above ground" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/6c5e9c30-6924-468d-be8e-481aa68fa1f6> ;
        tern:hasSimpleValue "20"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "20"^^xsd:float ;
            tern:unit unit:CentiM ;
        ] ;
    ] ;
.
```

#### `liquid_type`

The `liquid_type` key maps to the attribute `liquid type` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "liquid type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/d423df1b-aac6-42c2-be3e-43ab27eaf745> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Undiluted Propylene Glycol" ;
            rdf:value <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af> ;
        ] ;
    ] ;
.
```

#### `liquid_amount(estimated)`

The `liquid_amount(estimated)` key maps to the attribute `liquid amount` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "liquid amount" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/e760902f-b01c-4b11-aaab-1f965f292352> ;
        tern:hasSimpleValue "20"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "20"^^xsd:float ;
            tern:unit unit:MilliL ;
        ] ;
    ] ;
.
```

#### `stakes_used`

The `stakes_used` key maps to the attribute `stakes used to hold pan` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "stakes used to hold pan" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/309ff0e0-f17b-4c05-8d11-5ca1b700a35c> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `trap_not_found`

The `trap_not_found` key maps to the attribute `pan trap not found` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap not found" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/03da222d-f463-4d4e-a892-fe19b70a9bed> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `trap_evaporated`

The `trap_evaporated` key maps to the attribute `pan trap evaporated` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap evaporated" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/fb2ef80e-52c1-4391-88a4-355857cc5edb> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `rain_impacted`

The `rain_impacted` key maps to the attribute `pan trap rain impacted` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap rain impacted" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/59b22e0b-b01d-4464-840b-37a538dbb272> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `trap_upended`

The `trap_upended` key maps to the attribute `pan trap upended` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap upended" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/2d17cd6e-da13-4544-83a5-0a6900cd1ba1> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `trap_damaged`

The `trap_damaged` key maps to the attribute `pan trap damaged` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap damaged" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/c7f352f9-eeb9-428b-b54a-9e726bee3b4c> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `no_catch`

The `no_catch` key maps to the attribute `pan trap no catch` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap no catch" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/ea52a346-b6d3-41dc-9f0d-d5d74d48fdbd> ;
        tern:hasSimpleValue "false"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "false"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `comment`

The `comment` key maps to the attribute `pan trap completion comments` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap completion comments" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/a959af6d-890b-4e49-984d-827ac88a38fb> ;
        tern:hasSimpleValue "Sample collected"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Sample collected"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `preservation_type`

The `preservation_type` key maps to the attribute `pan trap preservation type` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to sampling by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/sample-collection-and-trap-removal/1> a tern:Sampling ;
    tern:hasAttribute [
        rdfs:label "pan trap preservation type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5f261bed-d7d9-413e-8685-68ea548c5c64> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Undiluted propylene glycol" ;
            rdf:value <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af> ;
        ] ;
    ] ;
.
```

#### `collection_date`

The `collection_date` key maps to the property `tern:resultDateTime` on the `tern:Sampling` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/sample-collection-and-trap-removal> a tern:Sampling ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `species_name` in `dominant_species_in_flower`

The `species_name` key maps to a `tern:Observation` with the observable property 'plant species in flower'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from invertebrate pan trapping

- [OpenAPI docs for invertebrate pan trapping](https://dev.core-api.paratoo.tern.org.au/documentation#/Invertebrate-pan-trapping/post%2Finvertebrate-pan-trappings)

```json
{
  "plot_visit": 0,
  "monitoring_duration": "Short",
  "repeat_monitoring": true,
  "observers": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

<!-- #### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
``` -->

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `monitoring_duration`

The `monitoring_duration` key maps to the attribute `pan trap monitoring duration` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "pan trap monitoring duration" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/a1556af0-814e-4b1f-b296-9d42a9186dd8> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/d674b843-5c2c-5e16-b9dc-c46bfd8bf76b> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Full Duration" ;
            rdf:value <https://linked.data.gov.au/def/nrm/d674b843-5c2c-5e16-b9dc-c46bfd8bf76b> ;
        ] ;
    ] ;
.
```

#### `repeat_monitoring`

The `repeat_monitoring` key maps to the attribute `pan trap repeat monitoring` in [Invertebrate fauna module - pan trapping protocol Attributes](https://linked.data.gov.au/def/nrm/ef22b1a2-87a9-4ac7-b98a-c4297e12de04), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/trap-set-up/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "pan trap repeat monitoring" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/e8b25478-caba-4ae1-95af-4bb24e9fbb5a> ;
        tern:hasSimpleValue "true"^^xsd:boolean ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value "true"^^xsd:boolean ;
        ] ;
    ] ;
.
```

#### `observers`

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Deployment` class.

##### Example

```
<https://example.com/trap-set-up/1> a tern:Deployment ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Invertebrate fauna - Pan Trapping protocol` are in [Invertebrate Fauna - Pan Trapping protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#invertebrate_fauna_pan_trapping_protocol_conformance_class_requirements).

Validator is [Invertebrate fauna - Pan trapping protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/invertebrate-fauna-pan-trapping-protocol-shapes/shapes.ttl).

The following are examples of validating data at the project, protocol, sub-protocol, and observation levels:

### Example usage with PySHACL - project level

Save the [DCCEEW RLP shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/shapes.ttl) in a file named `dcceew-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for all DCCEEW protocols**, run the following command to validate the data:

```bash
pyshacl -s dcceew-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - protocol level

Save the [Invertebrate fauna shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/shapes.ttl) in a file named `invertebrate-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Invertebrate fauna protocol**, run the following command to validate the data:

```bash
pyshacl -s invertebrate-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Invertebrate fauna - Pan trapping protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/invertebrate-fauna-pan-trapping-protocol-shapes/shapes.ttl) in a file named `invertebrate-pan-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Invertebrate fauna - Pan trapping protocol**, run the following command to validate the data:

```bash
pyshacl -s invertebrate-pan-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [plant species in flower shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/invertebrate-fauna/invertebrate-fauna-pan-trapping-protocol-shapes/plant-species-in-flower/shapes.ttl) in a file named `plant-species-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for plant species in flower in Invertebrate fauna - Pan trapping protocol**, run the following command to validate the data:

```bash
pyshacl -s plant-species-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX ssn: <http://www.w3.org/ns/ssn/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX unit: <http://qudt.org/vocab/unit/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/Deployment/trap-set-up>
    a tern:Deployment ;
    rdfs:label "trap set up" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    prov:wasAssociatedWith <https://example.com/agent/1> ;
    ssn:deployedOnPlatform <https://example.com/Transect/transect> ;
    ssn:deployedSystem <https://example.com/Sampler/pan-traps> ;
    tern:hasAttribute
        [
            rdfs:label "pan placement" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b5e04630-0013-4cc2-8515-02fdc1e952fc> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/41881d6e-2e4c-45c6-8f9c-f8c0d82ce0b6> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "liquid amount" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e760902f-b01c-4b11-aaab-1f965f292352> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:MilliL
                ]
        ] ,
        [
            rdfs:label "proposed pan trapping duration" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/51abbe2c-0108-4def-95ec-39d574593a52> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "liquid type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d423df1b-aac6-42c2-be3e-43ab27eaf745> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Undiluted propylene glycol" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/3b89ecaf-3ceb-510c-83c6-11242a89c8af>
                ]
        ] ,
        [
            rdfs:label "pan height above ground" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6c5e9c30-6924-468d-be8e-481aa68fa1f6> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "stakes used to hold pan" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/309ff0e0-f17b-4c05-8d11-5ca1b700a35c> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap monitoring duration" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a1556af0-814e-4b1f-b296-9d42a9186dd8> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/46bc78d4-672d-555d-b024-b87175cb81d6> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Lite Duration" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/46bc78d4-672d-555d-b024-b87175cb81d6>
                ]
        ] ,
        [
            rdfs:label "pan trap repeat monitoring" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e8b25478-caba-4ae1-95af-4bb24e9fbb5a> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ;
.

<https://example.com/Sampling/sample-collection-and-trap-removal>
    a tern:Sampling ;
    rdfs:label "sample collection and trap removal" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:endedAtTime "2022-05-10T07:38:02"^^xsd:dateTime ;
    prov:wasAssociatedWith <https://example.com/agent/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/pan-traps> ;
    sosa:hasResult <https://example.com/MaterialSample/invertebrate-animals> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
    tern:hasAttribute
        [
            rdfs:label "pan trap refilled" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ba740b63-219b-4832-baa9-5f6ab1799c3f> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap upended" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2d17cd6e-da13-4544-83a5-0a6900cd1ba1> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap no catch" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ea52a346-b6d3-41dc-9f0d-d5d74d48fdbd> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap damaged" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/c7f352f9-eeb9-428b-b54a-9e726bee3b4c> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap completion comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a959af6d-890b-4e49-984d-827ac88a38fb> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "pan trap not found" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/03da222d-f463-4d4e-a892-fe19b70a9bed> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap rain impacted" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/59b22e0b-b01d-4464-840b-37a538dbb272> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap evaporated" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/fb2ef80e-52c1-4391-88a4-355857cc5edb> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap preservation type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5f261bed-d7d9-413e-8685-68ea548c5c64> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/invertebrate-animals> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/pan-trap-count-estimate/1>
    a tern:Observation ;
    rdfs:label "pan trap count estimate" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/invertebrate-animals> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e4fa718e-76d1-47a2-87c9-b683a3ff3c18> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-species-in-flower/1>
    a tern:Observation ;
    rdfs:label "plant species in flower" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2d95624b-e04e-4826-b97d-b74b90db4d56> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/photos>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <https://example.com/non-created-feature-type/photos/1> ;
    tern:hasAttribute
        [
            rdfs:label "photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "photo direction" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/92650dea-b8f2-4e48-bb20-95ca9aa80308> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/13fc6fb2-3e65-5776-8eed-25735fcfdde0> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "North" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/13fc6fb2-3e65-5776-8eed-25735fcfdde0>
                ]
        ] ;
.

<https://example.com/Sample/plant-community>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant community" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/Sampler/pan-traps>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ,
        tern:System ;
    rdfs:label "pan traps" ;
    dcterms:identifier "sampler-pan-traps-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
    tern:featureType <https://example.com/non-created-feature-type/pan-traps/1> ;
    tern:hasAttribute
        [
            rdfs:label "pan height" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/51fd3f49-e302-4b68-af86-431f64b1a540> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "pan diameter" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2b0aac4a-a79a-4ce9-aa34-f8e0cee4770f> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "pan trap inside colour" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/4a6ae834-08bf-4f80-b219-fbe9c56e4e1a> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/4a97644d-9c42-5e78-a586-eea5bf16fdad> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "White" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/4a97644d-9c42-5e78-a586-eea5bf16fdad>
                ]
        ] ,
        [
            rdfs:label "pan trap outside colour" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b3a55fa-7d3e-44f5-9042-897b624c4273> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/4a97644d-9c42-5e78-a586-eea5bf16fdad> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "White" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/4a97644d-9c42-5e78-a586-eea5bf16fdad>
                ]
        ] ,
        [
            rdfs:label "pan trap capacity" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/498a0a7e-9a0f-4ebe-9775-a414caa7a80d> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:MilliL
                ]
        ] ;
.

<https://example.com/agent/1>
    a
        prov:Agent ,
        <https://w3id.org/tern/ontologies/org/Person> ;
    schema:name "Paul Green" ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/MaterialSample/invertebrate-animals>
    a
        tern:FeatureOfInterest ,
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "invertebrate animals" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "materialsample-invertebrate-animals-001" ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
.

<https://example.com/Site/site>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "site" ;
    dcterms:identifier "site-site-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/Transect/transect>
    a
        tern:FeatureOfInterest ,
        tern:Platform ,
        tern:Transect ;
    rdfs:label "transect" ;
    dcterms:identifier <https://example.com/Transect/transect-line-001> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/de46fa49-d1c9-4bef-8462-d7ee5174e1e1> ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs84:lat -3.092085e+01 ;
    wgs84:long 1.522424e+02 ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

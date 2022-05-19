# Point Intercept Protocol

:::note
At the time of writing, only the condition point-intercept and vertebrate pest presence protocol had example data available from the app.
:::

Walking along a transect, a staff with a laser pointer is used to provide hits on shrubs and trees. This process is repeated for each point along the 4 transects. At each point, observations are made on each tree or shrub that intersects with the laser pointer.

Example data from source:

```json
{
  "lut_condition_species": "foo",
  "lut_condition_vegeatation_health": "CH",
  "lut_condition_vertebrate_pest_type": "CAT",
  "leaf_litter_depth_mm": 0,
  "mistletoe_number": 0,
  "comment": "string",
  "point_number": 0,
  "canopy_health": 0,
  "lut_condition_growth_stage_shrub": "RC",
  "lut_condition_growth_stage_tree": "RC",
  "photo": [0],
  "condition_point_intercept_survey": 0,
  "created_by": 0,
  "updated_by": 0
}
```

All fields except the `lut_condition_vertebrate_pest_type` field is relevant to the point-intercept sub-protocol.

The example data below are for the activities that occur at a single transect point. The below example showcases observations made at the transect point.

```turtle
<https://example.com/sampling/c95f7168-93ac-49d8-b850-db06f2eadd4a>
    a tern:Sampling ;
    rdfs:label "Sampling activity for the transect point" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/a3e3c615-ccb1-43f3-a0ea-cd68d08c454c> ;
.

<https://example.com/feature-of-interest/a3e3c615-ccb1-43f3-a0ea-cd68d08c454c>
    a tern:Sample ;
    rdfs:label "transect point" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/13dec53e-1062-4060-9281-f133c8269afb> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:hasAttribute [
        a tern:Attribute ;
        rdfs:label "transect name" ;
        tern:attribute <https://linked.data.gov.au/def/test/dawe-cv/9beaf2dc-c53d-4e6e-b699-c1786f04f1f6> ;
        tern:hasSimpleValue "N1" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "N1" ;
        ] ;
    ], [
        a tern:Attribute ;
        rdfs:label "transect point number" ;
        tern:attribute <https://linked.data.gov.au/def/test/dawe-cv/f3c1916e-a6e1-4b03-9950-f364bcd91507> ;
        tern:hasSimpleValue "1" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "1" ;
        ] ;
    ]
.

<https://example.com/observation-collection/282525fa-2c47-4bb1-95d8-80b8ccf61af5>
    a tern:ObservationCollection ;
    rdfs:label "transect point observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/a3e3c615-ccb1-43f3-a0ea-cd68d08c454c> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <> ;
.

<https://example.com/observation/a75d8766-1bab-4b13-b109-7811ab4169cd>
    a tern:Observation ;
    rdfs:label "leaf litter depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdfs:label "47.2 mm" ;
        rdf:value 47.2 ;
        tern:unit <http://qudt.org/vocab/unit/MilliM> ;
    ] ;
    sosa:hasSimpleResult 47.2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/f6af2c5e-d193-4337-b845-44550f661854> ;
.

<https://example.com/observation/becf2e14-aadf-4b65-ac64-11607e048e63>
    a tern:Observation ;
    rdfs:label "canopy health" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdfs:label "63.3%" ;
        rdf:value 63.3 ;
        tern:unit <http://qudt.org/vocab/unit/PERCENT> ;
    ] ;
    sosa:hasSimpleResult 63.3 ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/d0a31d21-b475-490e-a8d6-fbe374fc7391> ;
.
```

Trees or shrubs that intersect with the laser pointer at each transect point become the feature of interest of further observations. Below is an example of a sampled tree with observations made on it.

```turtle
<https://example.com/sampling/13f2433f-1660-4ca8-8eed-f3694d734219>
    a tern:Sampling ;
    rdfs:label "Sampling activity for the tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/a3e3c615-ccb1-43f3-a0ea-cd68d08c454c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/2c9f18e8-ac0e-46f2-af03-914fbbad1692> ;
.

<https://example.com/feature-of-interest/2c9f18e8-ac0e-46f2-af03-914fbbad1692>
    a tern:Sample ;
    rdfs:label "tree" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/a3e3c615-ccb1-43f3-a0ea-cd68d08c454c> ;
.

<https://example.com/observation-collection/d12220db-eb9b-487a-98ca-3e2aa6f3c131>
    a tern:ObservationCollection ;
    rdfs:label "tree observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2c9f18e8-ac0e-46f2-af03-914fbbad1692> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <> ;
.

<https://example.com/observation/b25cedc7-0fd4-4285-a046-dec5d51a9290>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Melaleuca citrolens" ;
    ] ;
    sosa:hasSimpleResult "Melaleuca citrolens" ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
.

<https://example.com/observation/b34739cf-1b69-4a4a-bbf7-86edee8d89bf>
    a tern:Observation ;
    rdfs:label "epicormic growth" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/cacfba72-ae93-4f92-9cc3-bf656d7ab5f0> ;
.

<https://example.com/observation/e57e1f7e-3563-4408-92ba-985bc96b66d1>
    a tern:Observation ;
    rdfs:label "galls and lerps" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/28131f08-1ae4-422f-99cb-3b5bafc7761d> ;
.

<https://example.com/observation/a9a48256-64f5-400a-9b83-f7f6a12e6858>
    a tern:Observation ;
    rdfs:label "galls and lerps" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/28131f08-1ae4-422f-99cb-3b5bafc7761d> ;
.

<https://example.com/observation/9dea396e-47f6-4f64-941d-6439b66d6c1f>
    a tern:Observation ;
    rdfs:label "grazing" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/cd905dda-06df-4f0e-85eb-b50f9ed2af91> ;
.

<https://example.com/observation/992dd32c-cfc7-4bc2-8d5d-910f32d1199b>
    a tern:Observation ;
    rdfs:label "dieback from disease" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/0685299e-d22a-4efa-a507-a7614e58a500> ;
.

<https://example.com/observation/080f7ceb-fa62-428b-8ceb-503b8237b032>
    a tern:Observation ;
    rdfs:label "insect damage" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value false ;
    ] ;
    sosa:hasSimpleResult false ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/33e79578-0946-4f21-9607-ca501e1500c7> ;
.

<https://example.com/observation/15eaf835-ae7e-4004-900b-3a1d3296bccb>
    a tern:Observation ;
    rdfs:label "mistletoe count" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Integer ;
        rdf:value 2 ;
    ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/6a1d703f-6622-4804-8b78-4c2ac93c97ba> ;
.
```

An observation for the plant's growth stage is performed. The growth stage values is different depending whether the plant is a tree or a shrub.

Growth stage for a tree:

```turtle
<https://example.com/observation/5d58f2cf-f829-4591-a3c6-fb758553f4b3>
    a tern:Observation ;
    rdfs:label "growth stage - tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "recruiting" ;
        rdf:value <https://linked.data.gov.au/def/test/dawe-cv/bdbd8d86-72d2-5d71-8d55-df9cd859c270> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/test/dawe-cv/bdbd8d86-72d2-5d71-8d55-df9cd859c270> ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/32bcd319-26e5-4b4d-8ea0-9fbaf7cb2064> ;
.
```

Growth stage for a shrub:

```turtle
<https://example.com/observation/db0a7d35-6c44-4173-bb16-4af41e1ffd13>
    a tern:Observation ;
    rdfs:label "growth stage - shrub" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "mature" ;
        rdf:value <https://linked.data.gov.au/def/test/dawe-cv/f0f6de97-c586-51a2-ba25-39468ccc1af8> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/test/dawe-cv/f0f6de97-c586-51a2-ba25-39468ccc1af8> ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/468e4932-c7a7-4fe1-95d3-ba6e6de29bed> ;
.
```

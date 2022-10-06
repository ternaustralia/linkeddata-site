# Fire Protocol

The Fire module is linked directly to the Cover module and Condition module and can be undertaken simultaneously with those modules when the effects of fire is present.

Observations in the Fire module are carried out along the transect points of each transect where the state of the transect point's burned status is observed along with the status of each intersecting plant.

Example data from source:

State of the transect point.

```json
{
  "plot_burned_status": "U",
  "substrate_type": "BR",
  "cover_point_intercept_point": 0,
  "soil_char_depth": 0,
  "soil_char_surface": 0,
  "created_by": 0,
  "updated_by": 0
}
```

State of the intersecting plant.

```json
{
  "species_intercept": 0,
  "regeneration_status": "B",
  "regenerating_height": 0,
  "plant_alive_status": "D",
  "created_by": 0,
  "updated_by": 0
}
```

Below is an encoding of the source data in RDF for the observations made on the transect point.

```turtle
<https://example.com/sampling/26f0b4fa-cf62-4886-af31-128fc8a43959>
    a tern:Sampling ;
    rdfs:label "Sampling activity for the transect point" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/4cd86020-137e-4394-8359-ffab7f8090aa> ;
.

<https://example.com/feature-of-interest/4cd86020-137e-4394-8359-ffab7f8090aa>
    a tern:Sample ;
    rdfs:label "transect point" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/13dec53e-1062-4060-9281-f133c8269afb> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:hasAttribute [
        a tern:Attribute ;
        rdfs:label "transect name" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/9beaf2dc-c53d-4e6e-b699-c1786f04f1f6> ;
        tern:hasSimpleValue "N1" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "N1" ;
        ] ;
    ], [
        a tern:Attribute ;
        rdfs:label "transect point number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/f3c1916e-a6e1-4b03-9950-f364bcd91507> ;
        tern:hasSimpleValue "1" ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "1" ;
        ] ;
    ]
.

<https://example.com/observation-collection/6fff6fd4-5db1-4978-8b84-52d83c563f5f>
    a tern:ObservationCollection ;
    rdfs:label "transect point observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4cd86020-137e-4394-8359-ffab7f8090aa> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <https://example.com/observation/c2d58d76-9d77-4a70-856f-79e93aa29abc>,
        <https://example.com/observation/e7e6b4db-f484-4c1c-8ddd-2bc598c9aef0>,
        <https://example.com/observation/9c2f39be-e718-434b-96d8-e7f403fe9350> ;
.

<https://example.com/observation/c2d58d76-9d77-4a70-856f-79e93aa29abc>
    a tern:Observation ;
    rdfs:label "plot burned status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "recently burned" ;
        rdf:value <https://linked.data.gov.au/def/nrm/136448b4-1c18-5e07-8b5f-837624e90907> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/136448b4-1c18-5e07-8b5f-837624e90907> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8eb830f7-a0ec-42d6-8170-dbe2f4d56db2> ;
.

<https://example.com/observation/e7e6b4db-f484-4c1c-8ddd-2bc598c9aef0>
    a tern:Observation ;
    rdfs:label "fire substrate type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "black ash" ;
        rdf:value <https://linked.data.gov.au/def/nrm/ab1c884d-be02-5cba-b873-fc02ab2efc71> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/ab1c884d-be02-5cba-b873-fc02ab2efc71> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/56efb36f-d3bc-475d-80d3-990f910f8488> ;
.

<https://example.com/observation/9c2f39be-e718-434b-96d8-e7f403fe9350>
    a tern:Observation ;
    rdfs:label "soil char depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdfs:label "12.1 mm" ;
        rdf:value 12.1 ;
        tern:unit <http://qudt.org/vocab/unit/MilliM> ;
    ] ;
    sosa:hasSimpleResult 12.1 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d88be090-97b9-40a1-9251-65f5c945b50e> ;
.
```

Below is an encoding of the source data in RDF for the observations made on the intercepted plant.

```turtle
<https://example.com/sampling/724317db-78b5-4009-b1a1-380804713984>
    a tern:Sampling ;
    rdfs:label "Sampling activity for the tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4cd86020-137e-4394-8359-ffab7f8090aa> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/bfdc978d-fbee-4b8f-b4a3-1b101bbe116a> ;
.

<https://example.com/feature-of-interest/bfdc978d-fbee-4b8f-b4a3-1b101bbe116a>
    a tern:Sample ;
    rdfs:label "tree" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/4cd86020-137e-4394-8359-ffab7f8090aa> ;
.

<https://example.com/observation/7a3e598c-9447-4079-82a1-a6c1bf74fe6b>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Melaleuca citrolens" ;
    ] ;
    sosa:hasSimpleResult "Melaleuca citrolens" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
.

<https://example.com/observation/ab1f9f7e-8d71-4955-8eb6-734f11d8e907>
    a tern:Observation ;
    rdfs:label "regeneration status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "basal" ;
        rdf:value <https://linked.data.gov.au/def/nrm/f6c7fb7c-578d-5191-9041-6ea0975ea757> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f6c7fb7c-578d-5191-9041-6ea0975ea757> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/50239f29-a693-49ef-98e8-4ee11d1758ea> ;
.

<https://example.com/observation/2bab6320-7406-4834-b1e0-b1f7183189a6>
    a tern:Observation ;
    rdfs:label "plant regenerating height" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdfs:label "2.3 m" ;
        rdf:value 2.3 ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 2.3 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/936f6c7d-9432-41d2-8214-00ed64e8f0c4> ;
.

<https://example.com/observation/aeb08e12-05f7-4d4c-ae92-9e8f221393c0>
    a tern:Observation ;
    rdfs:label "plant alive status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "charred" ;
        rdf:value <https://linked.data.gov.au/def/nrm/7f428b02-abfa-52dc-a702-ca310fd2447d> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7f428b02-abfa-52dc-a702-ca310fd2447d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e9891e08-d5a2-45ba-a644-c3f5bf347918> ;
.
```

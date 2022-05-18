# Full and Lite DBH protocol

The below example is applicable to both the Full DBH and Lite DBH protocols. 

A specific species population is targeted where multiple observations are made on individuals.

The diameter at breast height observation is made at a specific point of measurement on a tree. This point of measurement value is captured as an attribute on the observation.

Depending on the tree trunk type of a tree, additional observations may be required. For example, if the tree trunk type is 'buttress', then an additional diameter measurement is made 50 cm above the top of the buttress. 

If the tree trunk type of a tree is 'multi-stemmed', then additional measurements of the diameter are made for each stem. Each individual stem is a `tern:Sample` where they are related to the tree via a `sosa:isSampleOf` relationship.

Example data from source:

```json
{
  "species": "string",
  "lut_basal_tree_status": "A",
  "point_of_measurement_metres": 0,
  "diameter_breast_height_centimetres": 0,
  "lut_basal_tree_trunk_type": "S",
  "diameter_breast_height_2_centimetres": 0,
  "basal_area_dbh_measure_observation_stems": [
    {
      "species": "string",
      "lut_basal_tree_status": "A",
      "point_of_measurement": 0,
      "diameter_breast_height": 0,
      "lut_basal_tree_trunk_type": "S",
      "diameter_breast_height_2": 0,
      "basal_area_dbh_measure_observation_tree": 0,
      "created_by": 0,
      "updated_by": 0
    }
  ],
  "basal_area_dbh_measure_survey_full": 0,
  "basal_area_dbh_measure_survey_lite": 0,
  "created_by": 0,
  "updated_by": 0
}
```

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .

<https://example.com/sampling/95b62f1e-494e-4e6f-9761-0e19f654fd0c>
    a tern:Sampling ;
    rdfs:label "Sampling activity for the plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2> ;
.

<https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2>
    a tern:Sample ;
    rdfs:label "Melaleuca citrolens plant population" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation-collection/1e94b80a-f299-418a-9e89-963b5a999fb8>
    a sosa:ObservationCollection ;
    rdfs:label "Plant population observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <https://example.com/observation/field-species-name/8f3b2aab-eda8-47dd-afd1-7f9d23fed33c> ;
.

<https://example.com/observation/field-species-name/8f3b2aab-eda8-47dd-afd1-7f9d23fed33c>
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

<https://example.com/sampling/22248011-8ecb-4d61-a6c3-4982561d63ee>
    a tern:Sampling ;
    rdfs:label "Sampling activity for the tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/e71916a5-45be-454e-aa41-f3d4bccbd83a> ;
.

<https://example.com/feature-of-interest/e71916a5-45be-454e-aa41-f3d4bccbd83a>
    a tern:Sample ;
    rdfs:label "tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2> ;
.

<https://example.com/observation-collection/a9d8d5f6-5b8a-4f34-aeca-9ee41121b07f>
    a sosa:ObservationCollection ;
    rdfs:label "tree observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/e71916a5-45be-454e-aa41-f3d4bccbd83a> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <https://example.com/observation/field-species-name/4b62d82a-4aae-45ef-8b0e-24c38b275470>,
        <https://example.com/observation/tree-status/db28a73c-25e5-431b-84a1-f785ed44cf33>,
        <https://example.com/observation/dbh/aabb7727-376e-4024-93b8-76ae126385c9>,
        <https://example.com/observation/tree-trunk-type/4f8344d0-bcb9-4669-916e-32cb6c706753> ;
.

<https://example.com/observation/field-species-name/4b62d82a-4aae-45ef-8b0e-24c38b275470>
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

<https://example.com/observation/tree-status/db28a73c-25e5-431b-84a1-f785ed44cf33>
    a tern:Observation ;
    rdfs:label "tree status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/test/dawe-cv/9667b324-6488-5e83-9528-0be628eb8907> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "alive" ;
        rdf:value <https://linked.data.gov.au/def/test/dawe-cv/9667b324-6488-5e83-9528-0be628eb8907> ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/e51ced21-4442-465d-8be9-8b5bba76d4d8> ;
.

<https://example.com/observation/dbh/aabb7727-376e-4024-93b8-76ae126385c9>
    a tern:Observation ;
    rdfs:label "diameter at breast height" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult 4.3 ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 4.3 ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/6e1c8b97-3655-4a22-9647-02f2c756e789> ;
    tern:hasAttribute [
        rdfs:label "point of measurement" ;
        tern:attribute <https://linked.data.gov.au/def/test/dawe-cv/9faeafe6-0d01-41aa-b38b-a6b56eda0dda> ;
        tern:hasSimpleValue 1.3 ;
        tern:hasValue [
            a tern:Float ;
            rdf:value 1.3 ;
            tern:unit <http://qudt.org/vocab/unit/M> ;
        ] ;
    ] ;
.

<https://example.com/observation/tree-trunk-type/4f8344d0-bcb9-4669-916e-32cb6c706753>
    a tern:Observation ;
    rdfs:label "tree trunk type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/test/dawe-cv/cf394183-2d9f-5c98-b0ef-a2d831061192> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "smooth" ;
        rdf:value <https://linked.data.gov.au/def/test/dawe-cv/cf394183-2d9f-5c98-b0ef-a2d831061192> ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/3da2a8ca-c0a3-4761-8736-507255eeee68> ;
.

```
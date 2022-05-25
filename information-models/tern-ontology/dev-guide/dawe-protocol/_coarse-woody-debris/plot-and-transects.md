# Plots and Transects Protocols

The following examples are applicable to both the 'plots' and 'transects' sub-protocols of the Coarse Woody Debris module.

Example data from source:

```json
{
  "Location": {
    "lat": 0,
    "lng": 0
  },
  "transect": {
    "transect_start_point": "N1",
    "closest_metre": 0
  },
  "widest_diameter_cm": 0,
  "narrowest_diameter_cm": 0,
  "length_metres": 0,
  "decay_class": "1",
  "coarse_woody_debris_survey": 0,
  "created_by": 0,
  "updated_by": 0
}
```

The below example is for the 'transects' sub-protocol.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .
@prefix geo: <http://www.opengis.net/ont/geosparql#> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .

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
    ], [
        a tern:Attribute ;
        rdfs:label "closest metre" ;
        tern:attribute <https://linked.data.gov.au/def/test/dawe-cv/61147f22-069f-4195-aba7-d3d971be09be> ;
        tern:hasSimpleValue 0.7 ;
        tern:hasValue [
            a tern:Float ;
            rdf:value 0.7 ;
            tern:unit <http://qudt.org/vocab/unit/M> ;
        ] ;
    ] ;
.
```

The below example is for the 'transects' sub-protocol. For the 'plots' sub-protocol, the `sosa:hasFeatureOfInterest` value will be the site (`https://example.com/site/1`) instead of the transect point.

```turtle
<https://example.com/sampling/2dd9dab1-9d86-40c2-ac6b-26f8661e184f>
    a tern:Sampling ;
    rdfs:label "Sampling activity for the coarse woody debris" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/a3e3c615-ccb1-43f3-a0ea-cd68d08c454c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2> ;
    geo:hasGeometry [
        a geo:Geometry,
            wgs:Point ;
        rdfs:label "spatial point" ;
        geo:asWKT "POINT(119.064722 -21.450278)" ;
        wgs:lat -21.450278 ;
        wgs:long 119.064722 ;
    ] ;
.
```

The coarse woody debris encoded as RDF Turtle.

```turtle
<https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2>
    a tern:Sample ;
    rdfs:label "A piece of coarse woody debris" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/c001183f-c6b5-4162-8de9-0c7ed0eb3bfe> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.
```

The observations made on the coarse woody debris.

```turtle
<https://example.com/observation-collection/46f093ec-d3cc-41b2-ae8f-3d44d05e83d6>
    a tern:ObservationCollection ;
    rdfs:label "Coarse woody debris observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/e59145ab-7963-4241-82bc-d981c441a2a2> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/7d50794a-8784-4ab9-99ff-a324bb6e0831> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <https://example.com/observation/widest-diameter/dfce14ff-aa54-48eb-a6fb-699b4197e529>,
        <https://example.com/observation/narrowest-diameter/419c04bd-b968-4975-8001-92d870aaa173>,
        <https://example.com/observation/length/c24c657f-0c2c-448d-be53-51108f337336>,
        <https://example.com/observation/decay-class/49150ce2-fa85-4f0a-a056-70a771908359> ;
.

<https://example.com/observation/widest-diameter/dfce14ff-aa54-48eb-a6fb-699b4197e529>
    a tern:Observation ;
    rdfs:label "coarse woody debris widest diameter" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 0.83 ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 0.83 ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/ee4d10cb-4245-496c-a72c-0696e2014f90> ;
.

<https://example.com/observation/narrowest-diameter/419c04bd-b968-4975-8001-92d870aaa173>
    a tern:Observation ;
    rdfs:label "coarse woody debris narrowest diameter" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 0.67 ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 0.67 ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/e73af424-f20d-49b8-81e3-cd30afb5b267> ;
.

<https://example.com/observation/length/c24c657f-0c2c-448d-be53-51108f337336>
    a tern:Observation ;
    rdfs:label "coarse woody debris length" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 4.54 ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 4.54 ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/b15f883b-c2e7-408e-8146-3754bbd5693f> ;
.

<https://example.com/observation/decay-class/49150ce2-fa85-4f0a-a056-70a771908359>
    a tern:Observation ;
    rdfs:label "coarse woody debris decay class" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "class 2" ;
        rdf:value <https://linked.data.gov.au/def/test/dawe-cv/2d462468-ccea-5be9-b8e9-07816fd7de5d> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/test/dawe-cv/2d462468-ccea-5be9-b8e9-07816fd7de5d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/fa986148-e44a-4cd3-8ac3-17748eb013f3> ;
.
```

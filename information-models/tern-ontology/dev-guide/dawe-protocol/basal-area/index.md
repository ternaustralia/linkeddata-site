# Basal Area Module

The Basal Area Module can be performed using one of the three sub-protocols:

- [Full DBH measures protocol](https://linkeddata.tern.org.au/viewers/dawe-vocabs?uri=https://linked.data.gov.au/def/test/dawe-cv/5a00862b-a885-472e-8bee-561ec502653f)
- [Lite DBH measures protocol](https://linkeddata.tern.org.au/viewers/dawe-vocabs?uri=https://linked.data.gov.au/def/test/dawe-cv/cd83fb3e-d8d3-4502-a618-a0f3f8712b27)
- [Basal wedge protocol](https://linkeddata.tern.org.au/viewers/dawe-vocabs?uri=https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f)

## Plant occurrence

Identify a plant occurrence in the plot that meets the requirements specified in the selected protocol.

```turtle
<https://example.com/feature-of-interest/159e94df-332c-483f-85a4-6463dbdaa7c3>
    a tern:Sample ;
    rdfs:label "a tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
.
```

Here is an observation collection containing all of the observations made on the plant occurrence using the full DBH method.

```turtle
<https://example.com/observation-collection/7ce8c31b-7b5b-4558-a56d-47d9f020dec7>
    a sosa:ObservationCollection ;
    rdfs:label "Basal area observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/c1bbafd8-8217-4d8c-9658-804eb104c1f0> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:resultTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/5a00862b-a885-472e-8bee-561ec502653f> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <https://example.com/observation/field-species-name/9af7a090-e94b-45e0-8841-10fd62d5cce3>,
        <https://example.com/observation/circumference-at-breast-height/cf7ed3f4-b672-4269-8351-3aebd223dc40>,
        <https://example.com/observation/diameter-at-breast-height/09d1ee14-402d-4970-a54f-75fa42ad40f7>,
        <https://example.com/observation/tree-alive-status/073c75ad-834c-4fa6-8c10-d45d50580d07>,
        <https://example.com/observation/tree-trunk-type/dbf429d1-8ce3-4713-8d5a-676d62630687> ;
.
```

The first observation on this plant occurrence is the [field species name](https://linkeddata.tern.org.au/viewers/dawe-vocabs?uri=https://linked.data.gov.au/def/test/dawe-cv/63f3f8e8-c204-4c91-8a48-e9f85b33ce06).

```turtle
<https://example.com/observation/field-species-name/9af7a090-e94b-45e0-8841-10fd62d5cce3> a tern:Observation ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Value, tern:Text ;
        rdf:value "Melaleuca citrolens" ;
    ] ;
    sosa:hasSimpleResult "Melaleuca citrolens" ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
```

The subsequent observations made on this plant occurrence:

- [circumference at breast height](circumference-at-breast-height)
- [diameter at breast height](diameter-at-breast-height-dbh)
- [tree alive status](tree-alive-status)
- [tree trunk type](tree-trunk-type)

## Plant population

Here is the plant population feature of interest.

```turtle
<https://example.com/feature-of-interest/50093186-6954-4770-b3af-a13696c360c8>
    a tern:Sample ;
    rdfs:label "Melaleuca citrolens population" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
.
```

The plant population observation collection.

```turtle
<https://example.com/observation-collection/682ca65a-39a9-4a50-9f2a-0baf7ff0b5bb>
    a sosa:ObservationCollection ;
    rdfs:label "Plant population observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/50093186-6954-4770-b3af-a13696c360c8> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:resultTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/5a00862b-a885-472e-8bee-561ec502653f> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <https://example.com/observation/basal-area-count/9af7a090-e94b-45e0-8841-10fd62d5cce3> ;
.
```

The observations made on this plant population:

- [basal area count](basal-area-count)

## Vegetation stand

Here is the vegetation stand feature of interest.

```turtle
<https://example.com/feature-of-interest/fc26aa53-a367-4b78-94e3-9869d63d35d1>
    a tern:Sample ;
    rdfs:label "vegetation stand" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/1f93a3e8-4c78-4b08-85a4-6869c9ee17ac> ;
.
```

The vegetation stand observation collection.

```turtle
<https://example.com/observation-collection/1bd4c362-0d26-4ea6-b7a0-edee2ee74419>
    a sosa:ObservationCollection ;
    rdfs:label "Vegetation stand observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/fc26aa53-a367-4b78-94e3-9869d63d35d1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:resultTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/5a00862b-a885-472e-8bee-561ec502653f> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasMember <https://example.com/observation/stand-basal-area/c80a26a4-9b37-4042-ab9f-1da36c32f7de> ;
.
```

The observations made on this vegetation stand:

- [stand basal area](stand-basal-area)

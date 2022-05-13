# Basal Wedge Protocol

With the Basal Wedge Protocol, at a basal sweep sampling point, a specific species population is targeted with a basal area sweep using a TERN basal wedge. The basal area sweep _hits_ are either 'in' or 'borderline', or ignored if they are 'out'. For each basal area sweep hit, an 'in' is assigned a score of 1 while 'borderline' is assigned a score of 0.5. A total tally of the hits make up the basal area count.

The basal sweep sampling point is captured as an attribute on the plant population.

During the basal area sweep, a TERN basal wedge is used with a specific basal area factor. This basal area factor value is captured as an attribute on the basal wedge instrument.

The relationship `prov:wasInformedBy` is used to illustrate that the basal area count observation is derived from the two basal area sweep hits.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .

<https://example.com/feature-of-interest/50093186-6954-4770-b3af-a13696c360c8>
    a tern:Sample ;
    rdfs:label "Melaleuca citrolens plant population" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation-collection/682ca65a-39a9-4a50-9f2a-0baf7ff0b5bb>
    a sosa:ObservationCollection ;
    rdfs:label "Plant population observation collection" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/50093186-6954-4770-b3af-a13696c360c8> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    sosa:resultTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute [
        a tern:Attribute ;
        rdfs:label "basal sweep sampling point - NE" ;
        tern:attribute <https://linked.data.gov.au/def/test/dawe-cv/7dc0c94d-6bb5-48c7-a4a6-e5fbd87c91e9> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/test/dawe-cv/316798ea-2138-5e1d-ad63-1a40734e8db2> ;
        tern:hasValue [
                a tern:IRI ;
                rdf:value <https://linked.data.gov.au/def/test/dawe-cv/316798ea-2138-5e1d-ad63-1a40734e8db2> ;
        ] ;
    ] ;
    sosa:hasMember <https://example.com/observation/field-species-name/9af7a090-e94b-45e0-8841-10fd62d5cce3>,
        <https://example.com/observation/basal-sweep-hit-type/0f19a1be-2c3e-402a-8c37-154ef73f9139>,
        <https://example.com/observation/basal-sweep-hit-type/cb3d1dec-c1b9-4b51-9bc4-7227a66cdba9> ;
.

<https://example.com/observation/field-species-name/9af7a090-e94b-45e0-8841-10fd62d5cce3>
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

<https://example.com/observation/basal-sweep-hit-type/0f19a1be-2c3e-402a-8c37-154ef73f9139>
    a tern:Observation ;
    rdfs:label "basal sweep hit type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "in" ;
        rdf:value <https://linked.data.gov.au/def/test/dawe-cv/57b9fb25-e075-4e18-8c7f-167e09318c94> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/test/dawe-cv/57b9fb25-e075-4e18-8c7f-167e09318c94> ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/43178892-92a6-434f-9895-340700e299e6> ;
    sosa:madeBySensor [
        a tern:Sensor ;
        rdfs:label "basal wedge" ;
        ssn:implements <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
        tern:hasAttribute [
            a tern:Attribute ;
            rdfs:label "basal area factor" ;
            tern:attribute <https://linked.data.gov.au/def/test/dawe-cv/d06bf3e4-f59d-47fb-b780-bb089b298d83> ;
            tern:hasSimpleValue 0.1 ;
            tern:hasValue [
                a tern:Float ;
                rdf:value 0.1 ;
            ] ;
        ] ;
    ] ;
.

<https://example.com/observation/basal-sweep-hit-type/cb3d1dec-c1b9-4b51-9bc4-7227a66cdba9>
    a tern:Observation ;
    rdfs:label "basal sweep hit type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "borderline" ;
        rdf:value <https://linked.data.gov.au/def/test/dawe-cv/3e0a5d97-c623-477e-98fe-8fe120907530> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/test/dawe-cv/3e0a5d97-c623-477e-98fe-8fe120907530> ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/43178892-92a6-434f-9895-340700e299e6> ;
    sosa:madeBySensor [
        a tern:Sensor ;
        rdfs:label "basal wedge" ;
        ssn:implements <https://linked.data.gov.au/def/test/dawe-cv/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
        tern:hasAttribute [
            a tern:Attribute ;
            rdfs:label "basal area factor" ;
            tern:attribute <https://linked.data.gov.au/def/test/dawe-cv/d06bf3e4-f59d-47fb-b780-bb089b298d83> ;
            tern:hasSimpleValue 0.1 ;
            tern:hasValue [
                a tern:Float ;
                rdf:value 0.1 ;
            ] ;
        ] ;
    ] ;
.

<https://example.com/observation/basal-area-count/e6dbf73d-3e6b-4ed2-9e4b-afa521706f0c>
    a tern:Observation ;
    rdfs:label "basal area count" ;
    rdfs:comment "The basal area count is calculated by assigning points to the basal sweep hits (in - 1, borderline - 0.5) and adding the total." ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 1.5 ;
    ] ;
    sosa:hasSimpleResult 1.5 ;
    sosa:observedProperty <https://linked.data.gov.au/def/test/dawe-cv/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
    prov:wasInformedBy <https://example.com/observation/basal-sweep-hit-type/0f19a1be-2c3e-402a-8c37-154ef73f9139>,
        <https://example.com/observation/basal-sweep-hit-type/cb3d1dec-c1b9-4b51-9bc4-7227a66cdba9> ;
.


```

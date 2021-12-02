---
sidebar_position: 9
---

import ExternalLink from '../../../src/components/ExternalLink';

# Photopoints Module

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

The Photopoints Module is concerned with collecting samples of photographs of the plot following a set of methodologies and procedures. Within a plot, three photopoint positions are set up where multiple pictures at each point are taken. The following diagram illustrates this notion conceptually.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/dawe-rlp/photopoints-module/conceptual-model.png" alt="Photopoints conceptual model" />
  <figcaption style={{textAlign: "center"}}>Conceptual model of the Photopoints Module. Samples are the results of samplings, but the samplings have been omitted from the diagram for brevity. </figcaption>
</figure>

Details such as the camera shutter speed, the camera mode, the aperture, focal length and whether auto or manual focus was used can all be recorded as attributes on the sampling act that produced the images.

The following examples provide the structure to capture photopoint images taken from photopoint positions within a site during a site visit. It also demonstrates capturing additional information during the sampling act of taking the photos, including metadata information things like the camera type and what focal length was used.

Example in JSON-LD:

```json
{
   "@graph":[
      {
         "@id":"https://example.com/site/1/photopoint-pos-1/sampling",
         "@type":"https://w3id.org/tern/ontologies/tern/Sampling",
         "inDataset":"https://example.com/dataset/1",
         "hasGeometry":"https://example.com/site/1/photopoint-pos-1/sampling/geometry",
         "label":"Photopoint position 1 establishment",
         "hasFeatureOfInterest":"https://example.com/site/1",
         "hasResult":"https://example.com/site/1/photopoint-pos-1",
         "resultTime":"2021-11-11T00:00:00+00:00",
         "usedProcedure":"https://linked.data.gov.au/def/test/dawe-cv/05669173-2fe7-4b70-ba67-2e09fbe87de9",
         "https://w3id.org/tern/ontologies/tern/hasSiteVisit":{
            "@id":"https://example.com/site/1/visit/1"
         }
      },
      {
         "@id":"https://example.com/site/1/photopoint-pos-1/image/1/sampling",
         "@type":"https://w3id.org/tern/ontologies/tern/Sampling",
         "inDataset":"https://example.com/dataset/1",
         "label":"Photopoint image 1 sampling",
         "hasFeatureOfInterest":"https://example.com/site/1/photopoint-pos-1",
         "hasResult":"https://example.com/site/1/photopoint-pos-1/image/1",
         "http://www.w3.org/ns/sosa/madeBySampler":{
            "@id":"_:n2c92bf96f8b24199bd594617c57ed1d7b1"
         },
         "resultTime":"2021-11-11T00:00:00+00:00",
         "usedProcedure":"https://linked.data.gov.au/def/test/dawe-cv/05669173-2fe7-4b70-ba67-2e09fbe87de9",
         "https://w3id.org/tern/ontologies/tern/hasSiteVisit":{
            "@id":"https://example.com/site/1/visit/1"
         }
      },
      {
         "@id":"_:n2c92bf96f8b24199bd594617c57ed1d7b1",
         "@type":"https://w3id.org/tern/ontologies/tern/Sampler",
         "inDataset":"https://example.com/dataset/1",
         "label":"Canon EOS 550D DSLR cropped sensor camera",
         "https://w3id.org/tern/ontologies/tern/hasAttribute":{
            "@id":"_:n2c92bf96f8b24199bd594617c57ed1d7b2"
         },
         "https://w3id.org/tern/ontologies/tern/samplerType":{
            "@id":"http://linked.data.gov.au/def/tern-cv/11e03f36-7ada-4333-88e2-38c9205f2749"
         }
      },
      {
         "@id":"_:n2c92bf96f8b24199bd594617c57ed1d7b2",
         "@type":"https://w3id.org/tern/ontologies/tern/Attribute",
         "inDataset":"https://example.com/dataset/1",
         "https://w3id.org/tern/ontologies/tern/attribute":"focal length",
         "https://w3id.org/tern/ontologies/tern/hasSimpleValue":24,
         "https://w3id.org/tern/ontologies/tern/hasValue":{
            "@id":"_:n2c92bf96f8b24199bd594617c57ed1d7b3"
         }
      },
      {
         "@id":"_:n2c92bf96f8b24199bd594617c57ed1d7b3",
         "@type":"https://w3id.org/tern/ontologies/tern/Integer",
         "value":24,
         "unit":"http://qudt.org/vocab/unit/MilliM"
      },
      {
         "@id":"https://example.com/site/1/photopoint-pos-1",
         "@type":"https://w3id.org/tern/ontologies/tern/Sample",
         "inDataset":"https://example.com/dataset/1",
         "label":"Photopoint position 1",
         "isResultOf":"https://example.com/site/1/photopoint-pos-1/sampling",
         "http://www.w3.org/ns/sosa/isSampleOf":{
            "@id":"https://example.com/site/1"
         },
         "https://w3id.org/tern/ontologies/tern/featureType":"photopoint position"
      },
      {
         "@id":"https://example.com/site/1/photopoint-pos-1/image/1",
         "@type":"https://w3id.org/tern/ontologies/tern/MaterialSample",
         "inDataset":"https://example.com/dataset/1",
         "label":"Photopoint image 1",
         "isResultOf":"https://example.com/site/1/photopoint-pos-1/image/1/sampling",
         "http://www.w3.org/ns/sosa/isSampleOf":{
            "@id":"https://example.com/site/1/photopoint-pos-1"
         },
         "https://w3id.org/tern/ontologies/tern/featureType":"photopoint image"
      },
      {
         "@id":"https://example.com/site/1/photopoint-pos-1/sampling/geometry",
         "@type":"https://w3id.org/tern/ontologies/loc/Point",
         "inDataset":"https://example.com/dataset/1",
         "asWKT":"POINT(150.3 -34.0)",
         "label":"Photopoint position 1 establishment point",
         "lat":-34,
         "long":{
            "@type":"http://www.w3.org/2001/XMLSchema#decimal",
            "@value":"150.3"
         }
      }
   ]
}
```

_For brevity, the JSON-LD context has been omitted. See the full JSON-LD context at [JSON-LD context](/tern-ontology/dev-guide/json-ld-context)._

<details>
    <summary>In Turtle.</summary>

<p>

```
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix tern-loc: <https://w3id.org/tern/ontologies/loc/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .
@prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

<https://example.com/site/1/photopoint-pos-1/sampling> a tern:Sampling ;
    rdfs:label "Photopoint position 1 establishment" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:resultTime "2021-11-11T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/05669173-2fe7-4b70-ba67-2e09fbe87de9> ;
    geosparql:hasGeometry <https://example.com/site/1/photopoint-pos-1/sampling/geometry> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/photopoint-pos-1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/site/1/photopoint-pos-1/sampling/geometry> a tern-loc:Point ;
    rdfs:label "Photopoint position 1 establishment point" ;
    wgs84:lat -34 ;
    wgs84:long 150.3 ;
    geosparql:asWKT "POINT(150.3 -34.0)"^^geosparql:wktLiteral ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/site/1/photopoint-pos-1> a tern:Sample ;
    rdfs:label "Photopoint position 1" ;
    sosa:isResultOf <https://example.com/site/1/photopoint-pos-1/sampling> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photopoint position" ;
.

<https://example.com/site/1/photopoint-pos-1/image/1/sampling> a tern:Sampling ;
    rdfs:label "Photopoint image 1 sampling" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1/photopoint-pos-1> ;
    sosa:resultTime "2021-11-11T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/05669173-2fe7-4b70-ba67-2e09fbe87de9> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/site/1/photopoint-pos-1/image/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:madeBySampler [
        a tern:Sampler ;
        rdfs:label "Canon EOS 550D DSLR cropped sensor camera" ;
        tern:samplerType <http://linked.data.gov.au/def/tern-cv/11e03f36-7ada-4333-88e2-38c9205f2749> ;
        void:inDataset <https://example.com/dataset/1> ;
        tern:hasAttribute [
            a tern:Attribute ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute "focal length" ;
            tern:hasSimpleValue 24 ;
            tern:hasValue [
                a tern:Integer ;
                rdf:value 24 ;
                tern:unit <http://qudt.org/vocab/unit/MilliM> ;
            ]
        ] ;
    ] ;
.

<https://example.com/site/1/photopoint-pos-1/image/1> a tern:MaterialSample ;
    rdfs:label "Photopoint image 1" ;
    sosa:isResultOf <https://example.com/site/1/photopoint-pos-1/image/1/sampling> ;
    sosa:isSampleOf <https://example.com/site/1/photopoint-pos-1> ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photopoint image" ;
.
```

</p>
    
</details>

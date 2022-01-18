---
sidebar_position: 3
---

import ExternalLink from '../../../../src/components/ExternalLink';

# Plot Selection Module

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

## Plots

A plot is represented with the <ExternalLink href="https://w3id.org/tern/ontologies/tern/Site">tern:Site</ExternalLink> class with details of the plot selection process captured through the use of the <ExternalLink href="https://w3id.org/tern/ontologies/tern/Sampling">tern:Sampling</ExternalLink> class.

Example in JSON-LD:

```json
{
  "@graph": [
    {
      "@id": "https://example.com/site/1",
      "@type": "https://w3id.org/tern/ontologies/tern/Site",
      "inDataset": "https://example.com/dataset/1",
      "hasGeometry": "_:n0ed44a3da0b74d57a77187450ae6d128b2",
      "label": "Site 1",
      "isResultOf": "https://example.com/site/1/selection-and-layout",
      "dimension": "100x100",
      "locationDescription": "Calperum Station. 9.3km north of homestead. 24km north of Renmark",
      "polygon": "_:n0ed44a3da0b74d57a77187450ae6d128b1",
      "siteDescription": "Swale in low dunefield. Very gentle slope to the north. Northern edge is just on the edge of dune slope. Fire- south east corner was burnt in January 2014. Rest of the site is long unburnt. Fire has come in 30m at the south east corner. Some scattered surface strew- limestone but low cover. Introduced plant effect is minimal- none noted. Homogeneity- community is contained to the plot at the moment due to effect of fire. Some Eucalyptus gracilis close to the road have been cut for timber but have long regenerated."
    },
    {
      "@id": "_:n0ed44a3da0b74d57a77187450ae6d128b1",
      "@type": "https://w3id.org/tern/ontologies/loc/Polygon",
      "type": "https://w3id.org/tern/ontologies/loc/Polygon",
      "asWKT": "POLYGON((140.71854444 -33.95690278, 140.71853889 -33.95601667, 140.71963056 -33.95600556, 140.71962778 -33.95690556, 140.71854444 -33.95690278))"
    },
    {
      "@id": "_:n0ed44a3da0b74d57a77187450ae6d128b2",
      "@type": "https://w3id.org/tern/ontologies/loc/Point",
      "type": "https://w3id.org/tern/ontologies/loc/Point",
      "asWKT": "POINT(140.71854444 -33.95690278)",
      "lat": -33.9569,
      "long": 140.7185,
      "pointType": "http://linked.data.gov.au/def/tern-cv/4dd22567-d692-44e7-b29d-b80eaff829dc"
    },
    {
      "@id": "https://example.com/site/1/selection-and-layout",
      "@type": "https://w3id.org/tern/ontologies/tern/Sampling",
      "inDataset": "https://example.com/dataset/1",
      "label": "Establishment of Site 1",
      "hasFeatureOfInterest": "http://sws.geonames.org/2077456/",
      "hasResult": "https://example.com/site/1",
      "resultTime": "2021-11-01T00:00:00+00:00",
      "usedProcedure": "https://linked.data.gov.au/def/test/dawe-cv/d15d05db-5007-411e-b257-105ef4f76821"
    }
  ]
}
```

_For brevity, the JSON-LD context has been omitted. See the full JSON-LD context at [JSON-LD context](/information-models/tern-ontology/dev-guide/json-ld-context)._

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

<https://example.com/site/1> a tern:Site ;
    rdfs:label "Site 1" ;
    tern:dimension "100x100" ;
    tern:locationDescription "Calperum Station. 9.3km north of homestead. 24km north of Renmark" ;
    tern:siteDescription "Swale in low dunefield. Very gentle slope to the north. Northern edge is just on the edge of dune slope. Fire- south east corner was burnt in January 2014. Rest of the site is long unburnt. Fire has come in 30m at the south east corner. Some scattered surface strew- limestone but low cover. Introduced plant effect is minimal- none noted. Homogeneity- community is contained to the plot at the moment due to effect of fire. Some Eucalyptus gracilis close to the road have been cut for timber but have long regenerated." ;
    tern:polygon [
        a tern-loc:Polygon ;
        dcterms:type tern-loc:Polygon ;
        geosparql:asWKT "POLYGON((140.71854444 -33.95690278, 140.71853889 -33.95601667, 140.71963056 -33.95600556, 140.71962778 -33.95690556, 140.71854444 -33.95690278))"^^<http://www.opengis.net/ont/geosparql#wktLiteral> ;
    ] ;
    geosparql:hasGeometry [
        a tern-loc:Point ;
        dcterms:type tern-loc:Point ;
        geosparql:asWKT "POINT(140.71854444 -33.95690278)"^^<http://www.opengis.net/ont/geosparql#wktLiteral> ;
        geo:lat "-3.39569e+01"^^xsd:double ;
        geo:long "1.407185e+02"^^xsd:double ;
        tern-loc:pointType <http://linked.data.gov.au/def/tern-cv/4dd22567-d692-44e7-b29d-b80eaff829dc> ;
    ] ;
    sosa:isResultOf <https://example.com/site/1/selection-and-layout> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/site/1/selection-and-layout> a tern:Sampling ;
    rdfs:label "Establishment of Site 1" ;
    sosa:hasFeatureOfInterest <http://sws.geonames.org/2077456/> ;
    sosa:hasResult <https://example.com/site/1> ;
    sosa:resultTime "2021-11-01T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/d15d05db-5007-411e-b257-105ef4f76821> ;
    void:inDataset <https://example.com/dataset/1> ;
.
```

</p>
    
</details>

## Plot visits

A plot visit is represented with the <ExternalLink href="https://w3id.org/tern/ontologies/tern/SiteVisit">tern:SiteVisit</ExternalLink> class. A plot visit always links to a plot and repeated visits are recorded with many instances of a plot visit.

Example in JSON-LD:

```json
{
  "@graph": [
    {
      "@id": "https://example.com/site/1/visit/2",
      "@type": "https://w3id.org/tern/ontologies/tern/SiteVisit",
      "inDataset": "https://example.com/dataset/1",
      "label": "Visit 2 to Site 1",
      "http://www.w3.org/ns/prov#endedAtTime": {
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        "@value": "2021-12-01T00:10:00+00:00"
      },
      "http://www.w3.org/ns/prov#startedAtTime": {
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        "@value": "2021-12-01T00:00:00+00:00"
      },
      "https://w3id.org/tern/ontologies/tern/hasSite": {
        "@id": "https://example.com/site/1"
      }
    },
    {
      "@id": "https://example.com/site/1/visit/1",
      "@type": "https://w3id.org/tern/ontologies/tern/SiteVisit",
      "inDataset": "https://example.com/dataset/1",
      "label": "Visit 1 to Site 1",
      "http://www.w3.org/ns/prov#endedAtTime": {
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        "@value": "2021-11-01T00:10:00+00:00"
      },
      "http://www.w3.org/ns/prov#startedAtTime": {
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        "@value": "2021-11-01T00:00:00+00:00"
      },
      "https://w3id.org/tern/ontologies/tern/hasSite": {
        "@id": "https://example.com/site/1"
      }
    }
  ]
}
```

_For brevity, the JSON-LD context has been omitted. See the full JSON-LD context at [JSON-LD context](/information-models/tern-ontology/dev-guide/json-ld-context)._

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

<https://example.com/site/1/visit/1> a tern:SiteVisit ;
    rdfs:label "Visit 1 to Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2021-11-01T00:00:00Z"^^xsd:dateTime ;
    prov:endedAtTime "2021-11-01T00:10:00Z"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/site/1/visit/2> a tern:SiteVisit ;
    rdfs:label "Visit 2 to Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2021-12-01T00:00:00Z"^^xsd:dateTime ;
    prov:endedAtTime "2021-12-01T00:10:00Z"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.
```

</p>
    
</details>

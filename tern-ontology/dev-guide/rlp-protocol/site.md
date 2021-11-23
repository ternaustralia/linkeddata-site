---
sidebar_position: 3
---

# Site (Plot)

A site is established by using the Plot Selection and Layout module. Below is an example site.

```ttl
<site-1> a tern:Site ;
    rdfs:label "Site 1" ;
    tern:dimension "100x100" ;
    tern:locationDescription "Calperum Station. 9.3km north of homestead.24km north of Renmark" ;
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
        geo:lat "-3.39569e+01"^^xsd:double
        geo:long "1.407185e+02"^^xsd:double
        tern-loc:pointType <http://linked.data.gov.au/def/tern-cv/4dd22567-d692-44e7-b29d-b80eaff829dc> ;
    ] ;
    sosa:isResultOf <site-1-selection-and-layout> ;
.

<site-1-selection-and-layout> a tern:Sampling ;
    sosa:hasFeatureOfInterest <http://sws.geonames.org/2077456/> ;
    sosa:hasResult <site-1>
    sosa:resultTime "2021-11-01T00:00:00Z"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/d15d05db-5007-411e-b257-105ef4f76821> ;
.
```

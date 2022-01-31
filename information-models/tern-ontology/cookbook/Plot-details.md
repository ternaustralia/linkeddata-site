# Plot details

## Geometry

An ecological survey plot area is represented by the [tern:Site](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Site) class and the geolocation details of a site is captured using GeoSPARQL 1.1's [geo:Geometry](http://www.opengis.net/ont/geosparql#Geometry) class.

A [tern:Site](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Site) can link to a [geo:Geometry](http://www.opengis.net/ont/geosparql#Geometry) using the [geo:hasGeometry](http://www.opengis.net/ont/geosparql#hasGeometry) property.

GeoSPARQL's [Simple Features](http://www.opengis.net/ont/sf#) vocabulary defines a set of specialised classes for [geo:Geometry](http://www.opengis.net/ont/geosparql#Geometry). These classes are:

- [geo:Geometry](http://www.opengis.net/ont/geosparql#Geometry)
  - [sf:Surface](http://www.opengis.net/ont/sf#Surface)
  - [sf:Polygon](http://www.opengis.net/ont/sf#Polygon)
    - [sf:Triangle](http://www.opengis.net/ont/sf#Triangle)
  - [sf:PolyhedralSurface](http://www.opengis.net/ont/sf#PolyhedralSurface)
    - [sf:TIN](http://www.opengis.net/ont/sf#TIN)
  - [sf:Point](http://www.opengis.net/ont/sf#Point)
  - [sf:GeometryCollection](http://www.opengis.net/ont/sf#GeometryCollection)
  - [sf:MultiSurface](http://www.opengis.net/ont/sf#MultiSurface)
    - [sf:MultiPolygon](http://www.opengis.net/ont/sf#MultiPolygon)
  - [sf:MultiCurve](http://www.opengis.net/ont/sf#MultiCurve)
    - [sf:MultiLineString](http://www.opengis.net/ont/sf#MultiLineString)
  - [sf:MultiPoint](http://www.opengis.net/ont/sf#MultiPoint)
  - [sf:Curve](http://www.opengis.net/ont/sf#Curve)
  - [sf:LineString](http://www.opengis.net/ont/sf#LineString)
    - [sf:Line](http://www.opengis.net/ont/sf#Line)
    - [sf:LinearRing](http://www.opengis.net/ont/sf#LinearRing)

### Polygon example

The following RDF Turtle shows how to capture the polygon details of a plot.

```turtle
<https://linked.data.gov.au/dataset/bdr/site/example-1> a tern:Site ;
    void:inDataset <...> ;
    geo:hasGeometry [ a sf:Polygon ;
        geo:asWKT "POLYGON((136.67833056 -27.86566667, 136.67833056 -27.86477222, 136.67843056 -27.86478056, 136.67934722 -27.86567778, 136.67833056 -27.86566667))" ;
    ] ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/5bf7ae21-a454-440b-bdd7-f2fe982d8de4> .
```

### Point example

The [tern-loc:Point](/viewers/tern-loc-ontology?uri=https://w3id.org/tern/ontologies/loc/Point) defines a few additional properties to capture the depth, elevation and point type.

```turtle
<https://linked.data.gov.au/dataset/bdr/site/example-1> a tern:Site ;
    void:inDataset <...> ;
    geo:hasGeometry [ a sf:Point ;
        geo:asWKT "POINT(119.064722 -21.450278)" ;
        tern-loc:pointType <http://linked.data.gov.au/def/tern-cv/4dd22567-d692-44e7-b29d-b80eaff829dc> ;
    ] ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/5bf7ae21-a454-440b-bdd7-f2fe982d8de4> .
```

The above RDF Turtle defines the point type as "south-west".

:::info
Spatial accuracy or uncertainty can be captured using the [geo:hasMetricSpatialAccuracy](http://www.opengis.net/ont/geosparql#hasMetricSpatialAccuracy) property. See [Spatial accuracy/uncertainty](/information-models/tern-ontology/cookbook/spatial-accuracy-uncertainty) for more information.
:::

## Plot size

:::warning
The way to capture plot size may change in the future.
:::

The current method of capturing the plot size of a site is to use the [tern:dimension](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/dimension) property.

```turtle
<https://linked.data.gov.au/dataset/bdr/site/example-1> a tern:Site ;
    void:inDataset <...> ;
    tern:dimension "100x100" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/5bf7ae21-a454-440b-bdd7-f2fe982d8de4> .
```

---

See also:

- [Annotating instances with the Attribute class](/information-models/tern-ontology/cookbook/annotating-instances-with-the-attribute-class)

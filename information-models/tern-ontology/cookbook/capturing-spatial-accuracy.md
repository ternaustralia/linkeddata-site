# Capturing spatial accuracy

Use `geo:hasMetricSpatialAccuracy` from [GeoSPARQL 1.1](https://opengeospatial.github.io/ogc-geosparql/geosparql11/spec.html) to capture the uncertainty of the spatial coordinates.

Darwin Core datasets using the Darwin Core term [coordinateUncertaintyInMeters](https://dwc.tdwg.org/terms/#dwc:coordinateUncertaintyInMeters) should map to `geo:hasMetricSpatialAccuracy` on an instance of `geo:Geometry`.

```turtle {5}
<https://linked.data.gov.au/dataset/bdr/site/example-1> a tern:Site ;
    void:inDataset <...> ;
    geo:hasGeometry [ a geo:Geometry ;
            geo:asWKT "POINT(119.064722 -21.450278)" ;
            geo:hasMetricSpatialAccuracy 5e+01 ;
            tern-loc:elevation 1.81e+02 ] ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/5bf7ae21-a454-440b-bdd7-f2fe982d8de4> .
```

The above example shows an individual [tern:Site](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Site) but this can also be applied to other classes such as [tern:Observation](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Observation) and [tern:Sampling](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sampling).

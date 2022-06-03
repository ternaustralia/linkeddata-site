# Soil Metagenomics

:::info
This section is still in draft and the conceptual modelling for this module may change from now until release.
:::

This protocol module samples soil for metagenomics purposes at 9 different sampling points of an ecological site. If the soil sub-site characterizatioin protocol is being undertaken, collect 5 soil samples from the sub-site and the remaining 4 soil samples spread from within the ecological site.

The nine sampling points are [sub-samples](https://w3id.org/tern/ontologies/tern/Sample) of either the ecological [site](https://w3id.org/tern/ontologies/tern/Site) directly or of the soil sub-site. Each sampling point's location is recorded using GeoSPARQL's [geometry](http://www.opengis.net/ont/geosparql#Geometry) class. At each sampling point, a [sampling](https://w3id.org/tern/ontologies/tern/Sampling) activity occurs and produces a [material sample](https://w3id.org/tern/ontologies/tern/MaterialSample) of the soil. The barcode provided to each material sample is captured using the [material sample ID](https://linkeddata.tern.org.au/viewers/tern-ontology?uri=https://w3id.org/tern/shapes/tern/dwc-materialSampleID) property.

![model](https://w3id.org/tern/static/linkeddata-website/dawe-rlp/soil/soil-metagenomics.png)

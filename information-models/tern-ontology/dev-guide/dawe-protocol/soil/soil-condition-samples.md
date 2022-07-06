# Soil Condition Samples

:::info
This section is still in draft and the conceptual modelling for this module may change from now until release.
:::

This protocol module collects 30 soil samples at a 25 x 25 m sub-site, south-west corner of a main ecological site. 10 sampling points are chosen at random within the sub-site where 3 samples at each point are collected at 10 cm increments to a total depth of 30 cm.

For an ecological site, a 25 x 25 m sub-site is created in the south-west corner. This sub-site is a [sub-sample](https://w3id.org/tern/ontologies/tern/Sample) of the main ecological [site](https://w3id.org/tern/ontologies/tern/Site) and itself has 10 different child samples representing sampling points. At each sampling point, 3 [sampling](https://w3id.org/tern/ontologies/tern/Sampling) activities are performed to produce a [material sample](https://w3id.org/tern/ontologies/tern/MaterialSample) of the soil. Location of these sampling points are captured using GeoSPARQL's [geometry](http://www.opengis.net/ont/geosparql#Geometry) class. The barcode ID is captured with the [material sample ID](https://linkeddata.tern.org.au/viewers/tern-ontology?uri=http://rs.tdwg.org/dwc/terms/materialSampleID) property on the material sample. Additional information should be captured using the [attribute](https://w3id.org/tern/ontologies/tern/Attribute) class.

![model](https://w3id.org/tern/static/linkeddata-website/dawe-rlp/soil/soil-condition-samples.png)

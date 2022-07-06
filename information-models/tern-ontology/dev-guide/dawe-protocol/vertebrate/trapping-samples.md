# Trapping Samples

:::info
This section is still in draft and the conceptual modelling for this module may change from now until release.
:::

This protocol module provides details on how various different trapping techniques are used to capture vertebrate fauna.

Each trapping technique defined in the protocol is a type of [sampler](https://w3id.org/tern/ontologies/tern/Sampler) with [deployment](https://w3id.org/tern/ontologies/tern/Deployment) details. Details specific to the deployment of samplers in this protocol may be captured using [attributes](https://w3id.org/tern/ontologies/tern/Attribute). These samplers are [_hosted_](https://www.w3.org/TR/vocab-ssn/#SOSAisHostedBy) on an ecological [site](https://w3id.org/tern/ontologies/tern/Site), which makes a site both a [feature of interest](https://w3id.org/tern/ontologies/tern/FeatureOfInterest) and a [platform](http://www.w3.org/ns/sosa/Platform). Locations of the traps are captured using GeoSPARQL's [geometry](http://www.opengis.net/ont/geosparql#Geometry) class. Vertebrate fauna captured by samplers are [samples](https://w3id.org/tern/ontologies/tern/Sample) produced from a [sampling](https://w3id.org/tern/ontologies/tern/Sampling) activity.

![model](https://w3id.org/tern/static/linkeddata-website/dawe-rlp/vertebrate/trapping-samples.png)

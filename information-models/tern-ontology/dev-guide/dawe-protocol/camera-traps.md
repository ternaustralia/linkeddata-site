# Camera Traps Module

:::info
This section is still in draft and the conceptual modelling for this module may change from now and release.
:::

This protocol module provides guidance and decision frameworks on how to deploy camera traps at monitoring sites and how to target specific species of fauna with attractants. This page will detail how the concepts used in the protocol are mapped to [SOSA/SSN](https://www.w3.org/TR/vocab-ssn/) via the TERN Ontology.

A camera trap is a [platform](http://www.w3.org/ns/sosa/Platform) that hosts [samplers](https://w3id.org/tern/ontologies/tern/Sampler) such as a camera. Deployment details such as the location of the camera trap, configuration settings of the camera trap, configuration settings of the camera as well as the deployment period are all recorded as [attributes](https://w3id.org/tern/ontologies/tern/Attribute) of the [deployment](https://w3id.org/tern/ontologies/tern/Deployment) class.

Each image captured by the camera trap is a [sample](https://w3id.org/tern/ontologies/tern/Sample) resulting from a [sampling](https://w3id.org/tern/ontologies/tern/Sampling) activity. Details such as the camera trap identification, attractant, point selection and preparation should all be detailed in the [procedure](https://linkeddata.tern.org.au/viewers/tern-ontology?uri=https://w3id.org/tern/shapes/tern/sosa-usedProcedure) of the sampling activity.

In SSN, a platform may host other platforms as well. In this case, the camera trap has a relationship indicating it is hosted on an ecological [site](https://w3id.org/tern/ontologies/tern/Site).

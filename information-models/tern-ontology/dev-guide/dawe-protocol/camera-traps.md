# Camera Traps Module

:::info
This section is still in draft and the conceptual modelling for this module may change from now until release.
:::

This protocol module provides guidance and decision frameworks on how to deploy camera traps at monitoring sites and how to target specific species of fauna with attractants. This page will detail how the concepts used in the protocol are mapped to [SOSA/SSN](https://www.w3.org/TR/vocab-ssn/) via the TERN Ontology.

A camera trap is a [sampler](https://w3id.org/tern/ontologies/tern/Sampler) and uses the [deployment](https://www.w3.org/TR/vocab-ssn/#SSNDeployment) class to capture the deployment details such as the location of the camera trap, configuration settings of the camera trap, configuration settings of the camera as well as the deployment period. These details can be captured using the [attribute](https://w3id.org/tern/ontologies/tern/Attribute) class.

Each image captured by the camera trap is a [sample](https://w3id.org/tern/ontologies/tern/Sample) resulting from a [sampling](https://w3id.org/tern/ontologies/tern/Sampling) activity. Details such as the camera trap identification, attractant, point selection and preparation should all be detailed in the [procedure](https://linkeddata.tern.org.au/viewers/tern-ontology?uri=https://w3id.org/tern/shapes/tern/sosa-usedProcedure) of the sampling activity. An attribute may be used to indicate where the static image is online, for example, in an object storage location. The feature of interest of the sampling activity of the camera traps is the fauna community. Observations are made on each image to determine the fauna species. To get the images of the target species, perform a filter on the fauna species observations on each image.

In SSN, a platform may host other platforms as well. In this case, the camera trap has a relationship indicating it is hosted on an ecological [site](https://w3id.org/tern/ontologies/tern/Site).

![model](https://w3id.org/tern/static/linkeddata-website/dawe-rlp/camera-traps-module/model.png)
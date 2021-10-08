---
sidebar_position: 1
slug: /
---

# TERN Ontology

## Abstract

The TERN Ontology is a conceptual information model to represent plot-based ecological surveys. It defines concepts to describe sites, site visits, features of interest, observations, samplings, and samples. Survey collection protocols generally differ between different programs and organisations. To cater for existing and future survey collection protocols, the TERN Ontology ensures data harmonisation is possible at the core conceptual level while also capturing the intricacies of each survey collection protocol using an extensible framework with SKOS controlled vocabularies.

The TERN Ontology enables a standard representation of ecological survey data for data integration and data exchange. Different systems use the TERN Ontology to exchange survey data using standard RDF serialisations as an exchange format. The TERN Ontology is modelled as a SHACL ontology to ensure incoming and outgoing data conforms to the standard. 

The TERN Ontology is based on existing RDF standards and promotes Linked Data principles to enable FAIR data. Exchanging survey data between different data sources in an agreed standard will substantially improve the quality of the published data and ensure the data is harmonised and interpreted correctly. 


## Status of this document

This document was prepared by TERN Data Services and Analytics as one of the deliverables to the service agreement between the Australian Government Department of Agriculture, Water and the Environment (DAWE) and TERN. The contents of this document is a continuation of the previous draft report titled Data Exchange Specifications - a report to the Department of Agriculture, Water and the Environment - draft submitted in January of 2021. This document is published as an online evolving specification instead of the report style in the previous draft.


## Introduction

Ecological data are collected by different state/territory governments under different programs including environmental assessments. There is no standard way to share and exchange data between different jurisdictions. Often, data sharing between agencies is a manual process and there is no standard that governs the exchange of survey data. Performing data integration with disparate datasets from different data sources require a massive amount of time and effort for the data integrator. Rather than putting the onus on the data integrator, the TERN Ontology will serve as the data representation for data exchange, thus putting the onus back on the data provider. Data providers can now use the TERN Ontology to exchange data to a data integrator with a much shorter turnaround time to integrate the new data.

The TERN Ontology is a set of vocabularies for plot-based ecological surveys based upon the OGC-aligned W3C Semantic Web standards, the Semantic Sensor Network (SSN) and Sensor, Observation, Sample, and Actuator (SOSA) ontologies. Simple Knowledge Organisation System (SKOS) controlled vocabularies are also extensively used to define the domain-specific feature types, parameters, methods and units of measure. The recommendation to align the SKOS controlled vocabularies to the Australian Soil and Land Survey Field Handbook and the National Vegetation Information System (NVIS) for Australian ecological data is highly encouraged. The TERN Ontology has gone through many iterations to simplify the core concepts and modelling patterns based on similar or related standards such as Veg-X, ODM2, SoilML, GeoSciML, Darwin Core, Darwin Core Event, and Humboldt Core.


## Scope

The TERN Ontology is an earth-based science information system for plot-based site observations. It supports ecological themes, including vegetation, landform, soil, and more. Both site-based and plotless opportunistic observations are also supported. Controlled vocabularies support the domain-specific aspects of the TERN Ontology. These include things like feature types, observable properties, procedures, core and non-core attributes and units of measure all support the structure. During development, the TERN Ontology was tested against datasets based primarily on the Australian Soil and Land Survey Field Handbook, though any ecological datasets will also work. Ultimately, the TERN Ontology provides a framework for integrating observations and samples from a survey and provides a unified view of the data for cross-jurisdictional applications.



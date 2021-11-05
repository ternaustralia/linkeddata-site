---
sidebar_position: 2
slug: /conceptual-information-model
---

# Conceptual Information Model

:::warning
This section is incomplete and will be revised.
:::

:::info
If you want to browse the classes, go to [Browse TERN Ontology by class](/viewers/tern-ontology)
:::

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

## Background

There are several initiatives started in Australia to work on a data standard for plot-based ecology. A working group for developing the national information model and data exchange protocol for vegetation site data was established in February 2016 by the Australian Government Department of the Environment's Essential Environmental Measures program. The working group had representatives from TERN, ALA, CSIRO and all state and territory governments. The working group produced an initial UML model with a conversion to an OWL ontology following the rules provided by ISO 19150-2:2015. Serialisation examples for GML and RDF were both provided as examples. It is important to note that this working group and its work predates the current W3C Recommendation for the SSN/SOSA Ontology. The recommendations made in the report and the design of the OWL ontology model would likely change if SSN/SOSA's formal status existed before the formation of the working group. Unfortunately, work within this working group stopped after the Essential Environmental Measures program ended in December 2017.

In 2019, TERN started a project to develop a standard to represent and exchange any data collected in an ecology survey. The initial version of the information model was developed in collaboration with Simon Cox from CSIRO Environmental informatics group, an OWL ontology named TERN-Plot to represent plot-based survey data was developed. The current TERN Ontology is an evolution of TERN-Plot. TERN-Plot's purpose was to replace the information model used by the Australian Ecological Knowledge and Observation System (AEKOS) system and align with international standards such as O&M and SSN/SOSA for observation data. The initial ontology development used the Queensland Government's CORVEG database and TERN's AusPlots Rangelands database as test datasets for data integration.

Both the TERN-Plot and the TERN Ontology work for integrating survey data, but there are a few key differences.

1. TERN-Plot is a feature-based model due to its detailed modelling of the domain-specific features of interest by extending the SOSA Sample class. Class properties (attributes) are also modelled directly on the specialised Sample classes. TERN-Plot follows the same modelling patterns of other Observations and Measurements extensions such as GeoSciML and SoilML. In contrast, the TERN Ontology uses SKOS controlled vocabularies to model feature-of-interest types (feature types). Non-core attributes of the features of interest in the TERN Ontology also use SKOS controlled vocabularies instead of class properties.

2. TERN-Plot and SSN/SOSA specialise the SOSA Sample class for sites, vegetation strata, taxa, taxa in a stratum, organism occurrences, etc. This usage of the SOSA Sample class is what Observations and Measurements define as the SamplingFeature class. However, most users and domain experts found it hard to grasp the conceptual meaning of the SOSA Sample class. To simplify this, the TERN Ontology uses the FeatureOfInterest class for all domain-specific features while the Sample class is reserved only for physical specimens.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-plot-sample-specialisations.png" alt="TERN-Plot sample specialisation classes" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN-Plot’s specialisation of Sample classes.</figcaption>
</figure>

The above figure shows different classes and relationships for TERN-Plot ontology. From the start of the TERN-Plot's development to the current TERN Ontology, many people and organisations contributed to the design and discussions of the conceptual information model. Please see the Acknowledgements section for more information.

## Conceptual information model

The TERN Ontology defines a set of classes and properties to serve as a vocabulary for representing plot-based ecological surveys. These classes inform data providers of the structure and relationships of the data store.

The TERN Ontology has a direct dependency on the following ontologies and RDF vocabularies:

- RDF
- RDFS
- OWL
- SKOS
- Dublin Core Terms
- SSN
- SOSA
- Darwin Core
- TERN-LOC
- TERN-ORG
- OWL-Time
- GeoSPARQL

The TERN Ontology is accessible via its namespace URI at https://w3id.org/tern/ontologies/tern/. The source code and its related content are accessible in the GitHub repository at https://github.com/ternaustralia/ontology_tern.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-ontology-overview.png" alt="TERN Ontology overview" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN Ontology overview.</figcaption>
</figure>

## Feature of Interest

A Feature of Interest is an abstraction of domain-related phenomena that are of interest to observers. An observer at a site makes an Observation or a Sampling act related to the feature of interest. The result of an Observation is the observed property's value of a Feature of Interest. For a Sampling act, the result is the sub-sample created or transformed from the Feature of Interest. The TERN Ontology requires the type of feature of interest to be specified, e.g. plant individual, plant occurrence, landform, etc. The Feature of Interest class uses the GeoSPARQL vocabulary to record spatial information.

### Example

A site, tree, plant, leaf, specimen (soil or vegetation), and land surface are all examples of features of interest represented through the feature type property. The feature type can be very broad (vegetation) or very specific (leaf).

## Observations

The TERN Ontology defines an Observation class based on SOSA's OWL implementation of the OGC's Observations and Measurements model. In the context of the TERN Ontology, an observation is an activity that occurs within a sampling plot area or in a plotless and opportunistic manner (without site or site visit relationships). It observes a property or characteristic of a feature of interest, and the outcome of the observation is a qualitative or quantitative result based on the procedure used. The Observation class captures the result time and the phenomenon time using SOSA and captures spatial information such as points and polygons using the GeoSPARQL vocabulary. The PROV Ontology is used to capture the observer of an observation.

The Observation class also expresses relationships to the site, site visit, and the feature of interest.

### Example

Bob (observer) uses a laser rangefinder (procedure) to measure the height (property) of a tree. The result is 15 metres (quantitative result value) recorded at 12:24 pm (phenomenon time). Database entry of the recorded data was at 5:15 pm (result time) later that day.

## Sampling

The Sampling class in the TERN Ontology remains mostly the same as the definition defined in SOSA with a few changes. SOSA specifies that the Sampling class must have a relationship to a Sampler. This requirement is dropped in the TERN Ontology's version of the Sampling class, as the requirement of a Sampler is very biased towards the use of sensors in a sensor network. In the context of the TERN Ontology, Sampling is an activity that follows a procedure, and the outcome is a physical sample, also known as a specimen. The Sampling class records the result time and optionally records the instrument type used during the sampling activity. The PROV Ontology is used to record the person who performed the sampling act (not necessarily the same as the sampler). GeoSPARQL is used here to record the location information of where the sampling activity took place.

Occurrence information is recorded using the Sampling class. The result of the sampling class is the occurrence sample which can have further observations made upon it (e.g. identification).

Without relationships to a site visit (and also a site) assumes the sampling activity was performed opportunistically.

### Example

Bob (person who performed the sampling act) collected soil (sample) from a soil pit (a feature of interest) at 12:28 pm (result time) with a core ring (sampler) at 10 cm intervals (procedure).

## Sample

In the TERN Ontology, a Sample is a material or non-material sample of a Feature of Interest. To represent material samples such as specimen, use the Material Sample class. Non-material samples are not collected and are simply identified to support observations and samplings.

### Example

An example of non-material sample may be describing the landform of a site or identifying the disturbed portion of the landform. These non-material samples are the features of interest of further observations or sampling activities.

## Material Sample

A Material Sample is a physical sample that is collected and retrieved from the field. Further observations and samplings may be performed on it. It may be tagged and stored as a specimen with an accession identifier.

### Example

A soil sample is collected from the field and taken back to the lab to be processed to produce an oven dried sample.

A plant specimen is collected from the field and stored. It is later sent to the local state/territory herbarium for identification.

## Site

Sites are the ultimate features of interest in the context of plot-based surveys and their activities. Observations and sampling acts made in a site generally represent the overall state of the site. Sites may contain nested sites using the sub-sample relationship, and the usage of controlled vocabularies indicate the site's type. Examples of site types may be plots, transects, and quadrats. Other features identified within a Site are also represented using sub-sample relationships.

Conceptually, a Site is a type of Sample as it may representative of something larger such as a local government area, state or territory.

### Example

The TERN AusPlots program has sites across Australia, and these sites contain transects for their point intercept collection method. Modelling of these transects uses the sub-sample relationship of the Sample class.

## Site visit

A Site Visit is a discrete time-bounded activity at a Site, during which Sampling or Observation activities occur. A Site Visit and a Site is a composition relationship, meaning a Site Visit cannot exist without a Site. The Site Visit class enables the modelling of revisits to a Site and provides the ability to describe the site condition in the context of a site visit.

### Example

AusPlots Rangelands establish permanent sites across Australia. Revisits to these sites allow the AusPlots team to capture the changes in the environment of these sites. Studies on the collected data provide us with an understanding of why and how these changes are occurring.

## Spatial geometries

Sites, site visits, samplings and observations can use the TERN Location Alignment vocabulary, a minimal ontology to tie together the GeoSPARQL vocabulary and the W3C Basic Geo WGS84 vocabulary. TERN Location Alignment also defines a specialised Point class with properties to express the depth and elevation. LineString and Polygon are also specialised to denote that a WKT literal is required.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-loc-overview.png" alt="TERN Location Alignment overview" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN Location Alignment vocabulary overview.</figcaption>
</figure>

Express where observations and samplings took place using the Point class. Use the Polygon class for sites. Use the LineString geometry for things such as sites that are, for example, transects.

## Non-core attributes

The TERN Ontology captures the minimal amount of information common across different survey datasets. To capture the protocol-specific aspects of a dataset, the TERN Ontology provides a concept of non-core attributes with the Attribute class. Use the Attribute class on any of the core concepts (classes) of the TERN Ontology to express additional information using a key-value pair pattern.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-ontology-attribute-class.png" alt="TERN Ontology Attribute class" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN Ontology Attribute class.</figcaption>
</figure>

### Example

The CORVEG database has a site-level attribute named sampling intensity for all sites. This attribute is not an attribute available directly on the TERN Ontology's Site class definition. To capture the sampling intensity, create an instance of the Attribute class and associate it to the site.

The ontology assumes that all observations Relationships to the site and site visit are optional to support both opportunistic data collection. For example, the species occurrence information can be represented and shared without any relationship with site and site visit.

## Values and results

The generic Value class is used to capture the values of attributes and results of observations and samplings. The Value class has different specialised classes to capture different value types.

A Sample is a type of value and is the result of a Sampling activity.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-ontology-value-classes.png" alt="TERN Ontology Value classes" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN Ontology Value classes.</figcaption>
</figure>

## Existing standards

Existing O&M-based models and data exchange standards influenced the design and modelling patterns of the TERN Ontology.

### Veg-X

A summary of Veg-X.

- Veg-X was designed primarily to represent and exchange plot-based vegetation data and uses an observation-centric model.
- Veg-X defines a plot entity as the sampling area where observations occur, and the plot entities can be related to other plots as a parent-child or association relationship.
- Veg-X's observation-centric approach classifies the type of observation used based on the feature of interest it is observing or measuring.
- Veg-X does not use controlled vocabularies and instead capture observable properties and procedures as attributes directly on the observation entities.
- Veg-X acknowledges the feature of interest of observation is different depending on its granularity. Individual organism observations are not the same as aggregated organism observations.

The TERN Ontology takes inspiration from how Veg-X models plots, sub-plots and the different observations types at varying granularity levels. Veg-X defines four fixed levels of feature types in the vegetation domain. In contrast, the TERN Ontology manages feature types as an extendable controlled vocabulary and inherently supports different ecological themes such as soil, landform, and more.

## References

Box P, Cox S J D, Simons B A (2016) Vegetation Site Data - Information model and data exchange standard development, Report, CSIRO Land and Water

- https://data.csiro.au/dap/SupportingAttachment?collectionId=18832&fileId=1393

Cox, Simon. TERN-Plot Architecture. Melbourne: CSIRO; 2019.

- http://hdl.handle.net/102.100.100/251303?index=1

Box P. & Lemon D. (2018) Essential Environmental Measures Program Evaluation Report, CSIRO Land and Water

- https://publications.csiro.au/rpr/download?pid=csiro:EP185016&dsid=DS2

Wiser, S.K., Spencer, N., De Cáceres, M., Kleikamp, M., Boyle, B. and Peet, R.K. (2011), Veg-X – an exchange standard for plot-based vegetation data. Journal of Vegetation Science, 22: 598-609. https://doi.org/10.1111/j.1654-1103.2010.01245.x

De Caceres, M. (2018) The Veg-X exchange standard - IAVS Ecoinformatics Working Group. https://miquelcaceres.github.io/VegX/articles/VegXStandard.html

Sampling features classified by shape. https://confluence.csiro.au/display/seegrid/Observations+and+Sampling#ObservationsandSampling-Samplingfeaturesclassifiedbyshape

SoilML information model - https://www.clw.csiro.au/aclep/InfoModels/index.htm

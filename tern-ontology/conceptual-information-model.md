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

The TERN Ontology is a information model to represent plot-based ecological surveys. 
It includes classes to describe sites, site visits, features of interest, observations, samplings, and samples. 
Survey collection protocols generally differ between different programs and organisations. 
The TERN Ontology ensures data harmonisation is possible at the core conceptual level to cater for existing and future survey collection protocols. 
Intricacies of survey collection protocols are supported through an extensible framework using SKOS controlled vocabularies.

The TERN Ontology enables a standard representation of ecological survey data for data integration and data exchange. 
Different systems can exchange survey data using formats and schemas based on the TERN Ontology, in particular the standard RDF serializations. 
The TERN Ontology is formalised as a SHACL ontology, which allows RDF data to be tested for conformance.

The TERN Ontology is based on several existing RDF standards, and promotes Linked Data principles to enable FAIR data. 
Exchanging survey data between different data sources in a standard will substantially improve the quality of the published data and ensure the data is harmonised and interpreted correctly.

## Status of this document

This document was prepared by TERN Data Services and Analytics as one of the deliverables to the service agreement between the Australian Government Department of Agriculture, Water and the Environment (DAWE) and TERN. 
The contents of this document is a continuation of the previous draft report titled Data Exchange Specifications - a report to the Department of Agriculture, Water and the Environment - draft submitted in January of 2021. 
This document is published as an online evolving specification instead of the report style in the previous draft.

## Introduction

Ecological observations data are collected by all the jurisdictions through various programs, including environmental assessments. 
There is currently no standard for sharing and exchanging ecology observations and survey data between jurisdictions, so data sharing typically involves time and effort for manual processing by the integrator. 
The TERN Ontology provides a common data representation which can accommodate all the observational data collected by the data providers. 
Products that conform to a standard are much more easily integrated. 
However, use of a standard representation for transfer puts the onus on the data provider to conform to the standard. 

The TERN Ontology is a set of vocabularies for plot-based ecological surveys based upon the OGC-aligned W3C Semantic Web standards, in particular the Semantic Sensor Network (SSN) and Sensor, Observation, Sample, and Actuator (SOSA) ontologies. 
Domain-specific feature types, parameters, methods and units of measure, are managed separately as controlled vocabularies, and published using the Simple Knowledge Organisation System (SKOS) standard. 
Controlled vocabularies aligned to the Australian Soil and Land Survey Field Handbook and the National Vegetation Information System (NVIS) for Australian ecological data are highly encouraged, since this allows data integration at a deeper level. 

The TERN Ontology has gone through a number of iterations to simplify the core concepts and modelling patterns based on similar or related standards including Veg-X, ODM2, SoilML, GeoSciML, Darwin Core, Darwin Core Event, and Humboldt Core.

## Scope

The TERN Ontology is an earth-based science information system for plot-based site observations. 
It supports ecological themes, including vegetation, landform, soil, and more. 
Both site-based observations and plotless opportunistic observations are supported. 
The domain-specific aspects of the TERN Ontology are supported by controlled vocabularies, covering elements like feature types, observable properties, procedures, core and non-core attributes and units of measure. 

During development, the TERN Ontology was tested against datasets based primarily on the Australian Soil and Land Survey Field Handbook, though any ecological datasets will also work. 
The TERN Ontology provides a framework for integrating observations and samples from a survey and provides a unified view of the data for cross-jurisdictional applications.
The primary applications are **data transfer**. 

## Background

Several initiatives in Australia have worked on data standards for plot-based ecology. 

A working group for developing a national **information model and data exchange protocol for vegetation site data** was established in February 2016 by the Australian Government Department of the Environment's Essential Environmental Measures (EEM) program, with representatives from TERN, ALA, CSIRO and all state and territory governments. 
This predated the publication of the SSN/SOSA Ontology, which is the W3C RDF implementation of O&M. 
The working group produced an initial UML model with a conversion to an OWL ontology following the rules provided by ISO 19150-2:2015. 
Serialisation examples for GML and RDF were both provided as examples. 
Unfortunately, the working group stopped in December 2017 when the EEM program ended.

In 2019, TERN started a project to develop a standard to represent and exchange any data collected in an ecology survey, in collaboration with Simon Cox from CSIRO Environmental informatics group. 
The initial model was an OWL ontology, based on SSN/SOSA, to represent plot-based survey data was developed named **TERN-Plot**. 
Its purpose was to replace the information model used by the Australian Ecological Knowledge and Observation System (AEKOS) system and align with international standards such as O&M and SSN/SOSA for observation data. 
Initial ontology development used the Queensland Government's CORVEG database and TERN's AusPlots Rangelands database as test datasets for data integration.

The **TERN Ontology** is an evolution of TERN-Plot. Both the TERN-Plot and the TERN Ontology can be used for integrating survey data, but there are a few key differences in the modeling style, as follows.

### 1. Controlled vocabularies instead of sub-classes

TERN-Plot is a feature-based model with detailed modelling of domain-specific features-of-interest. Most of these specialize the SOSA `Sample` class, by adding specific class properties (attributes). This approach follows modelling patterns used in other Observations and Measurements extensions such as GeoSciML and SoilML. 

In contrast, the TERN Ontology uses SKOS controlled vocabularies to specify feature types. 
Non-core attributes of the features-of-interest in the TERN Ontology also use SKOS controlled vocabularies instead of class properties. _Don't understand the point here_

### 2. Only physical specimens are 'samples'

TERN-Plot specialised the SOSA `Sample` class for sites, vegetation strata, taxa, taxa in a stratum, organism occurrences, etc. 

However, most users including domain experts found it hard to understand the SOSA `Sample` class. 
As a simplifcation, the TERN Ontology uses `FeatureOfInterest` for all domain-specific features while `Sample` is reserved only for physical specimens.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-plot-sample-specialisations.png" alt="TERN-Plot sample specialisation classes" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN-Plot’s specialisation of Sample classes.</figcaption>
</figure>

The above figure shows different classes and relationships for TERN-Plot ontology. 

From the start of the TERN-Plot's development to the current TERN Ontology, many people and organisations contributed to the design and discussions of the conceptual information model. 
Please see the Acknowledgements section for more details.

## Conceptual information model

TERN Ontology defines a set of classes and properties which form a vocabulary for representing plot-based ecological surveys. 
These classes inform data providers of the structure and relationships of the data store.

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

Most of these dependencies are specified using **RDFS and OWL axioms**, which enable reasoning and inferencing. 
In contrast, the formal specification of TERN Ontology is through **SHACL shapes**, which enables data validation. 
Shapes are appropriate for TERN ontology becasue the primary application is data transfer and ingestion.  

The TERN Ontology is accessible via its namespace URI at https://w3id.org/tern/ontologies/tern/. 
The source code and its related content are accessible in the GitHub repository at https://github.com/ternaustralia/ontology_tern.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-ontology-overview.png" alt="TERN Ontology overview" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN Ontology overview.</figcaption>
</figure>

## Feature of Interest

A `Feature of Interest` is a domain-related entity that is of interest to observers. 
An observer visting an individual `Site` will make one or more acts of `Observation` or `Sampling` related to one or more individual `Features of Interest` found at the site. 
The result of an act of `Observation` is an estimate of the value of a property of a Feature of Interest. 
The result of an act of `Sampling` is a sample that is representative of the Feature of Interest. 

A `Sample` may be the **proximate** feature-of-interest of a subsequent Observation. 
In this case, the original Feature of Interest of the act of Sampling is often the **ultimate** feature-of-interest of the Observation. 

The TERN Ontology requires the _type_ of feature of interest to be specified, e.g. plant individual, plant occurrence, landform, etc. 
Spatial information is associated with a Feature of Interest using the GeoSPARQL vocabulary.

### Example

A site, tree, plant, leaf, specimen (soil or vegetation), and land surface are all examples of types of features of interest inidicated through the `feature type` property. 
The feature type can be very broad (vegetation) or very specific (leaf).

## Observations

The `Observation` class in the TERN Ontology is based on the OWL implementation of the OGC's Observations and Measurements model in the SOSA module of the W3C Semantic Sensor Network Ontology. 
In the context of the TERN Ontology, an act of observation occurs within a visit to a sampling plot, or in a 'plot-less' opportunistic manner (i.e. without a relationship to an identified site or site visit). 
An act of observation involves a sensor or observer implementing a protocol or procedure to estimate the value of a property or characteristic of a feature of interest. 
The result of the observation is a qualitative or quantitative value. 

An individual Observation encodes the result time and the phenomenon time using predicates from SOSA and spatial information such as points and polygons using the GeoSPARQL vocabulary. 
Elements from the PROV Ontology are used to record the person who performed the observation, i.e. operated the sensor or observer.

As well as the standard `featureOfInterest`, a TERN Observation has contextual relationships to the site hosting the feature, and the site-visit when the observation occurred.

### Example

Bob (observer) uses a laser rangefinder (procedure) to measure the height (property) of a tree. 
The result is 15 metres (quantitative result value) recorded at 12:24 pm (phenomenon time). 
Database entry of the recorded data was at 5:15 pm (result time) later that day.

## Sampling

The `Sampling` class in the TERN Ontology has minor additions to the standard definition from SOSA. 
**I think this discussion of Sampler can be dropped. There are implications of the cardinality restrictions in a reasoning application, but TERN Ontology is not primarily designed for this, which is why the main formalisation uses SHACL.**
The Semantic Sensor Network Ontology has an axiom that a Sampler (i.e. a sampling instrument or device)is involved in Sampling. 
This requirement is dropped in the TERN Ontology's version of the Sampling class, as the requirement of a Sampler is very biased towards the use of sensors in a sensor network. 
In the context of the TERN Ontology, Sampling is an activity that follows a procedure, and the outcome is a physical sample, _also known as a specimen_. **Not really - Specimen is a material thing which has been accessioned into a collection (such as a Herbarium). Not every material sample is a Specimen.**
The Sampling class records the result time and optionally records the instrument type used during the sampling activity. 
Elements from the PROV Ontology are used to record the person who performed the sampling (not necessarily the same as the sampler). 
GeoSPARQL is used to record location information of the act of sampling.

Occurrences are initially recorded as acts of Sampling.  
The result of the sampling class is the occurrence sample which is taken to be representative of the site or local ecosystem, and can then have further observations made upon it (e.g. identification).

A sampling that is not related to a site visit may be inferred to have been performed opportunistically.

### Example

Bob (person who performed the sampling act) collected soil (sample) from a soil pit (a feature of interest) at 12:28 pm (result time) with a core ring (sampler) at 10 cm intervals (procedure).

## Sample

In SOSA the key characteristic of a `Sample` is the link to the broader Feature of Interest that it `isSampleOf`. 
In ecology studies, the broader feature of interest may be a site, or an ecosytem, tract, or other landscape or ecology feature. 

In the TERN Ontology, a `Sample` is a material or non-material sample of a Feature of Interest. 
Non-material samples are not collected and are simply identified to support observations and samplings.

### Example

An example of non-material sample may be describing the landform of a site or identifying the disturbed portion of the landform. 
These non-material samples are the features of interest of further observations or sampling activities.

## Material Sample

A `Material Sample` is a physical sample that is collected and retrieved from the field. 
Further observations and samplings may be performed on it. 
If a material sample is accessioned into a collection or curated for future study it is also known as a _specimen_. 
It may be tagged and stored as a specimen with an accession identifier.

### Example

A soil sample is collected from the field and taken back to the lab to be processed to produce an oven dried sample.

A plant specimen is collected from the field and stored. 
It is later sent to the local state/territory herbarium for identification.

## Site

Sites are the main _ultimate_ features of interest in the context of plot-based surveys and their activities. 
Acts of observations and sampling made in a site are generally undertaken in order to represent the overall state of the site. 

Sites may contain nested 'sites' using the sub-sample relationship. 
The site-type is indicated using a value from a controlled vocabulary. 
Common site-types may include `plot`, `transect`, `quadrat`. 
Other features identified within a Site are also represented using sub-sample relationships.

A Site may itself be a kind of Sample, as it may be deemed to be representative of a
- fiat area such as a parcel, a local government area, state or territory
- landscape area such as an ecosystem or biome.

### Example

The TERN AusPlots program has sites across Australia, and these sites contain transects for their point intercept collection method. 
Modelling of these transects uses the sub-sample relationship of the Sample class.

## Site visit

A Site Visit is a discrete time-bounded activity at a Site, during which Sampling or Observation activities occur. 
A Site Visit and a Site have a composition relationship, so a Site Visit cannot exist without a Site. 
The Site Visit class enables the modelling of revisits to a Site and provides the ability to describe collections of acts of observation or sampling, and the site condition in the context of a site visit.

### Example

AusPlots Rangelands establish permanent sites across Australia. 
Revisits to these sites allow the AusPlots team to capture the changes in the environment of these sites. 
Studies on the collected data provide us with an understanding of why and how these changes are occurring.

## Spatial geometries

Sites, site visits, samplings and observations can use the TERN Location Alignment vocabulary, which is a minimal ontology to tie together the GeoSPARQL vocabulary and the W3C Basic Geo WGS84 vocabulary. 
TERN Location Alignment also defines a specialised Point class with properties to express the depth and elevation. 
LineString and Polygon are also specialised to denote that a WKT literal is required.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-loc-overview.png" alt="TERN Location Alignment overview" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN Location Alignment vocabulary overview.</figcaption>
</figure>

The location where individual observations and samplings took place can be expressed using individuals from the Point class. 
The extent and shape of a Site can be expressed using an individual Polygon. 
The shape of a transect can be expressed using a LineString.

## Non-core attributes

The TERN Ontology captures some information common across different survey datasets. 
To capture the protocol-specific aspects of a dataset, the TERN Ontology provides a concept of non-core attributes with the Attribute class. 
Use the Attribute class on any of the core concepts (classes) of the TERN Ontology to express additional information using a key-value pair pattern.

<figure>
  <img src="https://w3id.org/tern/static/linkeddata-website/tern-ontology/tern-ontology-attribute-class.png" alt="TERN Ontology Attribute class" />
  <figcaption style={{textAlign: "center"}}>Figure: TERN Ontology Attribute class.</figcaption>
</figure>

### Example - not really an example in the way that the previous ones are ... 

The CORVEG database has a site-level attribute named sampling intensity for all sites. 
However, this attribute is not available directly on the TERN Ontology's Site class definition. 
Sampling intensity can be captured by creating an instance of the Attribute class and associating it to the site.

The ontology assumes that all observations Relationships to the site and site visit are optional to support both opportunistic data collection. 
For example, the species occurrence information can be represented and shared without any relationship with site and site visit.
**not quite following here ... you seem to be petering out**

## Values and results

A generic Value class is used to capture the values of attributes, and the results of observations and samplings. 
The Value class is specialised to capture different value types.

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

The TERN Ontology takes inspiration from how Veg-X models plots, sub-plots and the different observations types at varying granularity levels. 
Veg-X defines four fixed levels of feature types in the vegetation domain. 
In contrast, the TERN Ontology manages feature types as an extendable controlled vocabulary and inherently supports different ecological themes such as soil, landform, and more.

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

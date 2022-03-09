---
sidebar_position: 2
slug: /specification
---

# Specification

---

:::info Note
DRAFT, incomplete
:::

## 1. Metadata

| IRI                 | https://w3id.org/tern/profiles/tern/specification                                                                                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title               | TERN Ontology Specification                                                                                                                                                                                                                                                  |
| Definition          | This document lists the normative requirements for data aiming to conform to the TERN Ontology. It is to be used as the authoritative, human-readable, identified, list of individual requirements from which other profile artefacts, such as data validators, are derived. |
| Created             | 2022-03-09                                                                                                                                                                                                                                                                   |
| Modified            | 2022-03-09                                                                                                                                                                                                                                                                   |
| Creator             | TERN and its collaborators                                                                                                                                                                                                                                                   |
| Publisher           | TERN                                                                                                                                                                                                                                                                         |
| License             | [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)                                                                                                                                                                   |
| Further information | This document is one of many resources as part of the [TERN Ontology Profile](https://w3id.org/tern/profiles/tern).                                                                                                                                                          |

## 2. Preamble

### 2.1 Abstract

This Specification is the normative listing of requirements for data conformig to the TERN Ontology, an information model for representing ecological field survey data.

### 2.2 Normative Status

This specification is normative. Please see [Conceptual Information Model](/information-models/tern-ontology/conceptual-information-model) for an informative document.

### 2.3 Standard Parts

This specification document is one of many resources that together form the [TERN Ontology Profile](https://w3id.org/tern/profiles/tern).

Other parts of this standard are:

|                 | TERN Ontology - conceptual information model                                                 |
| --------------- | -------------------------------------------------------------------------------------------- |
| **Description** | An overview of the core concepts of the TERN Ontology.                                       |
| **Artifact**    | https://linkeddata.tern.org.au/information-models/tern-ontology/conceptual-information-model |
| **Role**        | [Guidance](http://www.w3.org/ns/dx/prof/role/guidance)                                       |

|                 | TERN Ontology - classes, properties and shape constraints                                |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Description** | A web-based viewer of the TERN Ontology classes, properties and their shape constraints. |
| **Artifact**    | https://linkeddata.tern.org.au/viewers/tern-ontology                                     |
| **Role**        | [Constraints](http://www.w3.org/ns/dx/prof/role/constraints)                             |

|                 | TERN Ontology - specification (this document)                                 |
| --------------- | ----------------------------------------------------------------------------- |
| **Description** | OGC-style specification of the TERN Ontology.                                 |
| **Artifact**    | https://linkeddata.tern.org.au/information-models/tern-ontology/specification |
| **Role**        | [Specification](http://www.w3.org/ns/dx/prof/role/specification)              |

|                 | TERN Ontology - validator                                    |
| --------------- | ------------------------------------------------------------ |
| **Description** | SHACL shapes for the TERN Ontology.                          |
| **Artifact**    | https://ternaustralia.github.io/ontology_tern/tern.shacl.ttl |
| **Role**        | [Validator](http://www.w3.org/ns/dx/prof/role/validator)     |

|                 | TERN Ontology vocabulary - feature types                                         |
| --------------- | -------------------------------------------------------------------------------- |
| **Description** | Feature types controlled vocabulary to describe SOSA-based features of interest. |
| **Artifact**    | http://linked.data.gov.au/def/tern-cv/68af3d25-c801-4089-afff-cf701e2bd61d       |
| **Role**        | [Vocabulary](http://www.w3.org/ns/dx/prof/role/vocabulary)                       |

|                 | TERN Ontology vocabulary - observable properties                                 |
| --------------- | -------------------------------------------------------------------------------- |
| **Description** | Observable properties controlled vocabulary to describe SOSA-based observations. |
| **Artifact**    | http://linked.data.gov.au/def/tern-cv/5699eca7-9ef0-47a6-bcfb-9306e0e2b85e       |
| **Role**        | [Vocabulary](http://www.w3.org/ns/dx/prof/role/vocabulary)                       |

|                 | TERN Ontology vocabulary - attributes                                      |
| --------------- | -------------------------------------------------------------------------- |
| **Description** | Attributes controlled vocabulary to describe facts about any entity.       |
| **Artifact**    | http://linked.data.gov.au/def/tern-cv/dd085299-ae86-4371-ae15-61dfa432f924 |
| **Role**        | [Vocabulary](http://www.w3.org/ns/dx/prof/role/vocabulary)                 |

|                 | TERN Ontology vocabulary - units of measure                |
| --------------- | ---------------------------------------------------------- |
| **Description** | Unit of measure controlled vocabulary by QUDT              |
| **Artifact**    | http://qudt.org/vocab/unit/"                               |
| **Role**        | [Vocabulary](http://www.w3.org/ns/dx/prof/role/vocabulary) |

|                 | TERN Ontology vocabulary - instrument types                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Description** | Instrument types controlled vocabulary to describe the types of instruments used in observations and sampling acts. |
| **Artifact**    | http://linked.data.gov.au/def/tern-cv/a3088b5c-622d-4e25-8a75-4c4961b0dfe8                                          |
| **Role**        | [Vocabulary](http://www.w3.org/ns/dx/prof/role/vocabulary)                                                          |

|                 | TERN Ontology vocabulary - site types                                              |
| --------------- | ---------------------------------------------------------------------------------- |
| **Description** | Site types controlled vocabulary to describe the types of ecological survey sites. |
| **Artifact**    | http://linked.data.gov.au/def/tern-cv/74aa68d3-28fd-468d-8ff5-7e791d9f7159         |
| **Role**        | [Vocabulary](http://www.w3.org/ns/dx/prof/role/vocabulary)                         |

|                 | TERN Ontology vocabulary - CI Role Code                                                           |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Description** | CI Role Code controlled vocabulary to describe the roles available to the TERN Ontology concepts. |
| **Artifact**    | http://def.isotc211.org/iso19115/-1/2018/CitationAndResponsiblePartyInformation/code/CI_RoleCode  |
| **Role**        | [Vocabulary](http://www.w3.org/ns/dx/prof/role/vocabulary)                                        |

### Namespaces

:::warning
This section is incomplete.
:::

| Prefix       | Namespace                              | Description                            |
| ------------ | -------------------------------------- | -------------------------------------- |
| `tern`       | https://w3id.org/tern/ontologies/tern/ | TERN Ontology namespace                |
| `tern-shacl` | https://w3id.org/tern/shapes/tern/     | TERN Ontology's SHACL shapes namespace |

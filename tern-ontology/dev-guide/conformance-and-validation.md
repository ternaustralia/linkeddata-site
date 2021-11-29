---
sidebar_position: 4
---

# Conformance and Validation

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

## Validation with SHACL

The TERN Ontology is defined as a [SHACL (Shapes Constraint Language)](https://www.w3.org/TR/shacl/) Ontology. Property shapes of each class define the cardinality and value types to conform to the TERN Ontology. These shape constraints can be used with a _SHACL processor_ to validate incoming or outgoing data.

## What it doesn't do

The constraints defined with SHACL in the TERN Ontology do not check domain and protocol specific details. Example, it does not check if a categorical value is valid for an observation at the survey protocol level. However, if required, these constraints can be implemented by adopters of the TERN Ontology.

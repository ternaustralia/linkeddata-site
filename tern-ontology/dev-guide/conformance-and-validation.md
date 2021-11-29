---
sidebar_position: 4
---

# Conformance and Validation

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

## Validation with SHACL

The TERN Ontology is defined as a [SHACL (Shapes Constraint Language)](https://www.w3.org/TR/shacl/) Ontology. Property shapes of each class define the cardinality and value types to conform to the TERN Ontology. These shape constraints can be used with a _SHACL processor_ to validate incoming or outgoing data.

Here is a short list of open-source SHACL processors:

- PySHACL - A Python validator for SHACL
  - https://github.com/RDFLib/pySHACL
- rdf-validate-shacl - Validate RDF data purely in JavaScript.
  - https://github.com/zazuko/rdf-validate-shacl
- shacl - SHACL API in Java based on Apache Jena
  - https://github.com/TopQuadrant/shacl

A list of browser-based SHACL playgrounds:

- SHACL playground by Zazuko
  - https://shacl-playground.zazuko.com/
- SHACL playground by TopQuadrant
  - https://shacl.org/playground/

### Example usage with PySHACL

Install PySHACL:

```bash
pip install pyshacl
```

Save the TERN Ontology in a file named `tern.ttl` in the Turtle RDF format:

```bash
curl -L -H "Accept: text/turtle" https://w3id.org/tern/ontologies/tern >> tern.ttl
```

Assuming you have a file named `data.ttl` in the Turtle RDF format, run the following command to validate the data:

```bash
pyshacl -s tern.ttl -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## What it doesn't do

The constraints defined with SHACL in the TERN Ontology do not check domain and protocol specific details. Example, it does not check if a categorical value is valid for an observation at the survey protocol level. However, if required, these constraints can be implemented by adopters of the TERN Ontology.

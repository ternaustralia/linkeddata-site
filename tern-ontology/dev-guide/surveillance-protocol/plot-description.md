---
sidebar_position: 3
---

import ExternalLink from '../../../src/components/ExternalLink'

# Plot Description

:::caution
This section is a work in progress.
:::

## Observable properties, feature types and categorical values

The Plot Description module provides instructions on how to collect data from the following observable properties:

import PlotDescriptionObservableProperties from '../../../src/components/docs/tern-ontology/surveillance-protocol/PlotDescriptionObservableProperties'

<PlotDescriptionObservableProperties />

:::info
This table was generated automatically from the Plot Description observable properties controlled vocabulary and their relationships.
:::

## Example data in RDF which conforms to the TERN Ontology

This section provides examples of observations encoded in JSON-LD for the observable properties within this module. The examples will illustrate how the data is structured based on the feature types, value types, and how it is related to a site visit and site.

Prerequisites:

- A `tern:RDFDataset` must exist and referred to via `void:inDataset` for certain objects (JSON object). See [Dataset Metadata](/tern-ontology/dev-guide/surveillance-protocol/metadata) for more information on `tern:RDFDataset`.

The structure of an observation remains largely the same between different observable properties. The things that vary are:

- feature of interest
- procedure
- result (and the type and structure of the result)

## JSON-LD context

This context object will be used for all examples within the Plot Description module.

```json
{
  "@context": {
    "featureType": {
      "@id": "https://w3id.org/tern/ontologies/tern/featureType",
      "@type": "@id"
    },
    "hasFeatureOfInterest": {
      "@id": "http://www.w3.org/ns/sosa/hasFeatureOfInterest"
    },
    "observedProperty": {
      "@id": "http://www.w3.org/ns/sosa/observedProperty",
      "@type": "@id"
    },
    "usedProcedure": {
      "@id": "http://www.w3.org/ns/sosa/usedProcedure",
      "@type": "@id"
    },
    "hasResult": {
      "@id": "http://www.w3.org/ns/sosa/hasResult"
    },
    "value": {
      "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value"
    },
    "vocabulary": {
      "@id": "https://w3id.org/tern/ontologies/tern/vocabulary",
      "@type": "@id"
    },
    "phenomenonTime": {
      "@id": "http://www.w3.org/ns/sosa/phenomenonTime"
    },
    "resultTime": {
      "@id": "http://www.w3.org/ns/sosa/resultTime",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "inDataset": {
      "@id": "http://rdfs.org/ns/void#inDataset",
      "@type": "@id"
    },
    "hasSimpleResult": {
      "@id": "http://www.w3.org/ns/sosa/hasSimpleResult"
    },
    "isResultOf": {
      "@id": "http://www.w3.org/ns/sosa/isResultOf",
      "@type": "@id"
    },
    "inXSDDateTimeStamp": {
      "@id": "http://www.w3.org/2006/time#inXSDDateTimeStamp"
    },
    "unit": {
      "@id": "https://w3id.org/tern/ontologies/tern/unit",
      "@type": "@id"
    }
  }
}
```

## Landform pattern observation example

```json {8-10,16,40-42}
{
  "@id": "https://example.com/observation-1-landform-pattern",
  "@type": "https://w3id.org/tern/ontologies/tern/Observation",
  "hasFeatureOfInterest": {
    "@id": "https://example.com/feature-instance/1",
    "@type": "https://w3id.org/tern/ontologies/tern/FeatureOfInterest",
    "featureType": "http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd",
    "inDataset": {
      "@id": "http://example.com/dataset/1"
    }
  },
  "observedProperty": "http://linked.data.gov.au/def/tern-cv/78b617e9-cd18-40b7-ad38-efc30579e680",
  "usedProcedure": "http://linked.data.gov.au/def/test/dawe-cv/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32",
  "hasResult": {
    "@id": "https://example.com/observation-1-result",
    "@type": [
      "https://w3id.org/tern/ontologies/tern/Concept",
      "https://w3id.org/tern/ontologies/tern/Value"
    ],
    "value": {
      "@id": "http://linked.data.gov.au/def/tern-cv/e392b1f9-cf6f-4c3e-bf19-8bc04893a1f4"
    },
    "vocabulary": "http://linked.data.gov.au/def/surveillance-protocol/landform-pattern",
    "isResultOf": {
      "@id": "https://example.com/observation-1-landform-pattern"
    }
  },
  "hasSimpleResult": {
    "@id": "https://linked.data.gov.au/def/surveillance-protocol/landform-pattern/1"
  },
  "phenomenonTime": {
    "@id": "http://example.com/time/instant/1",
    "@type": "https://w3id.org/tern/ontologies/tern/Instant",
    "inXSDDateTimeStamp": {
      "@value": "2021-10-20T03:51:29+0000",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    }
  },
  "resultTime": "2021-10-20T03:51:29+0000",
  "inDataset": {
    "@id": "http://example.com/dataset/1"
  }
}
```

The feature of interest is the spatial extent of the landform. The value of the feature type is the landform concept's URI <ExternalLink href="http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd">`http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd`</ExternalLink>.

The value of `usedProcedure` links to the URI of the procedure.

The result value <ExternalLink href="http://linked.data.gov.au/def/tern-cv/e392b1f9-cf6f-4c3e-bf19-8bc04893a1f4">`http://linked.data.gov.au/def/tern-cv/e392b1f9-cf6f-4c3e-bf19-8bc04893a1f4`</ExternalLink> comes from the categorical values list as defined in [Observable properties, feature types and categorical values table above](/tern-ontology/dev-guide/surveillance-protocol/plot-description#observable-properties-feature-types-and-categorical-values).

:::caution
RDFS entailment is required to infer that a `tern:Concept` is a `tern:Value`.
Without RDFS entailment, the result must have the type `tern:Value` explicitly in the JSON-LD. See highlighted line in the code.

Example SHACL constraints violation message if no RDFS entailment rules was used and if `tern:Value` was not explicitly stated as the type for the result object.

```
Validation Report
Conforms: False
Results (1):
Constraint Violation in ClassConstraintComponent (http://www.w3.org/ns/shacl#ClassConstraintComponent):
        Severity: sh:Violation
        Source Shape: [ rdf:type sh:PropertyShape ; sh:class tern:Value ; sh:maxCount Literal("1", datatype=xsd:integer) ; sh:minCount Literal("1", datatype=xsd:integer) ; sh:name Literal("has result") ; sh:nodeKind sh:IRI ; sh:path sosa:hasResult ]
        Focus Node: <https://example.com/observation-1-landform-pattern>
        Value Node: <https://example.com/observation-1-result>
        Result Path: sosa:hasResult
        Message: Value does not have class tern:Value
```

:::

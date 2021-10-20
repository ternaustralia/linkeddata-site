---
sidebar_position: 2
---

# Plot Description

:::caution
This section is a work in progress.
:::


## Observable properties, feature types and categorical values

The Plot Description module provides instructions on how to collect data from the following observable properties:

import PlotDescriptionObservableProperties from '../../../src/components/docs/tern-ontology/surveillance-protocol/PlotDescriptionObservableProperties'

<PlotDescriptionObservableProperties />

## Landform pattern observation example

:::danger TODO
... provide details and explanations here ...
:::

```json
{
  "@context": {
    "featureType": {
      "@id": "https://w3id.org/tern/ontologies/tern/featureType"
    },
    "hasFeatureOfInterest": {
    },
    "observedProperty": {
      "@id": "http://www.w3.org/ns/sosa/observedProperty"
    },
    "usedProcedure": {
      "@id": "http://www.w3.org/ns/sosa/usedProcedure"
    },
    "hasResult": {
      "@id": "http://www.w3.org/ns/sosa/hasResult"
    },
    "value": {
      "@id": "https://w3id.org/tern/ontologies/tern/value",
    },
    "vocabulary": {
      "@id": "https://w3id.org/tern/ontologies/tern/vocabulary"
    }
  },
  "@id": "https://example.com/observation-1-landform-pattern",
  "@type": "https://w3id.org/tern/ontologies/tern/Observation",
  "featureType": "http://linked.data.gov.au/def/tern-cv/2cf3ed29-440e-4a50-9bbc-5aab30df9fcd",
  "hasFeatureOfInterest": "",
  "observedProperty": "http://linked.data.gov.au/def/tern-cv/78b617e9-cd18-40b7-ad38-efc30579e680",
  "usedProcedure": "",
  "hasResult": {
    "@id": "https://example.com/observation-1-result",
    "@type": "https://w3id.org/tern/ontologies/tern/Result",
    "value": "https://linked.data.gov.au/def/surveillance-protocol/landform-pattern/1",
    "vocabulary": "http://linked.data.gov.au/def/surveillance-protocol/landform-pattern"
  }
}
```

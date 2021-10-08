---
sidebar_position: 1
---

# Module 1 - Plot Description

:::caution
This section is a work in progress.
:::


## Observable properties

Module 1 provides instructions in how to collect data from the following observable properties:
- [landform pattern](http://linked.data.gov.au/def/tern-cv/78b617e9-cd18-40b7-ad38-efc30579e680)
- [landform element](http://linked.data.gov.au/def/tern-cv/a40230bc-c1e9-4309-b883-c4ead1d143ce)
- [growth form](http://linked.data.gov.au/def/tern-cv/f81aa91e-5f57-4e49-bc6e-4d821d1f9de2)

### Example of an observation of the landform pattern

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

---
sidebar_position: 2
---

import ExternalLink from '../../../src/components/ExternalLink'

# Dataset Metadata

:::warning
This section is incomplete and will be revised.
:::

An example of a <ExternalLink href="https://w3id.org/tern/ontologies/tern/RDFDataset">tern:RDFDataset</ExternalLink> in JSON-LD.

```json
{
    "@id": "https://example.com/dataset/1",
    "@type": "https://w3id.org/tern/ontologies/tern/RDFDataset",
    "http://purl.org/dc/terms/title": "Example Dataset 1",
    "http://purl.org/dc/terms/issued": {
        "@type": "http://www.w3.org/2001/XMLSchema#date",
        "@value": "2021-10-20"
    },
    "http://purl.org/dc/terms/description": "Example dataset description."
}
```
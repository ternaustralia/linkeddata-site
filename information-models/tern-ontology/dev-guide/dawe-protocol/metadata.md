---
sidebar_position: 2
---

import ExternalLink from '../../../../src/components/ExternalLink'

# Dataset Metadata

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

The <ExternalLink href="https://w3id.org/tern/ontologies/tern/RDFDataset">tern:RDFDataset</ExternalLink> class provides a way to describe metadata for RDF datasets. It is based on the <ExternalLink href="https://www.w3.org/TR/void/">VoID Vocabulary for describing Linked Datasets</ExternalLink>. The <ExternalLink href="https://w3id.org/tern/ontologies/tern/RDFDataset">tern:RDFDataset</ExternalLink> class is primarily used to describe RDF data dumps and payloads by a source data provider.

An example of a <ExternalLink href="https://w3id.org/tern/ontologies/tern/RDFDataset">tern:RDFDataset</ExternalLink> in JSON-LD.

```json
{
  "@id": "https://example.com/dataset/1",
  "@type": "https://w3id.org/tern/ontologies/tern/RDFDataset",
  "title": "Example Dataset 1",
  "issued": {
    "@type": "http://www.w3.org/2001/XMLSchema#date",
    "@value": "2021-10-20"
  },
  "description": "Example dataset description."
}
```

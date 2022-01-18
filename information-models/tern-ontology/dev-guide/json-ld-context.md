---
sidebar_position: 3
---

import CodeBlock from '@theme/CodeBlock'

import ExternalLink from '../../../src/components/ExternalLink'

import context from "../../../src/components/docs/tern-ontology/json-ld-context";

# JSON-LD Context

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

A JSON-LD context is a mapping of the JSON-LD terms (properties) to their respective RDF terms. The JSON-LD context is very powerful and can perform value type coercion when used with a JSON-LD processor. The advantage of using a JSON-LD context is to reduce complexity and verbosity of the JSON-LD data.

A JSON-LD context example taken from <ExternalLink href="https://www.w3.org/TR/json-ld/#the-context">json-ld#the-context</ExternalLink>.

```json {4,7,9-10,14,16-17}
{
  "@context": {
    "name": "http://schema.org/name",
    ↑ This means that 'name' is shorthand for 'http://schema.org/name'
    "image": {
      "@id": "http://schema.org/image",
      ↑ This means that 'image' is shorthand for 'http://schema.org/image'
      "@type": "@id"
      ↑ This means that a string value associated with 'image'
        should be interpreted as an identifier that is an IRI
    },
    "homepage": {
      "@id": "http://schema.org/url",
      ↑ This means that 'homepage' is shorthand for 'http://schema.org/url'
      "@type": "@id"
      ↑ This means that a string value associated with 'homepage'
        should be interpreted as an identifier that is an IRI
    }
  }
}
```

The following JSON-LD does not use a JSON-LD context. It is quite verbose since some of the properties are fully qualified URIs.

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

The following JSON-LD uses a JSON-LD context. Notice that the data in the `@graph` can use simple terms instead of fully qualified URIs and the value of `issued` is coerced to an `http://www.w3.org/2001/XMLSchema#date`.

```json
{
  "@context": {
    "title": {
      "@id": "http://purl.org/dc/terms/title",
      "@type": "http://www.w3.org/2001/XMLSchema#string"
    },
    "issued": {
      "@id": "http://purl.org/dc/terms/issued",
      "@type": "http://www.w3.org/2001/XMLSchema#date"
    },
    "description": {
      "@id": "http://purl.org/dc/terms/description",
      "@type": "http://www.w3.org/2001/XMLSchema#string"
    }
  },
  "@graph": {
    "@id": "https://example.com/dataset/1",
    "@type": "https://w3id.org/tern/ontologies/tern/RDFDataset",
    "title": "Example Dataset 1",
    "issued": "2021-10-20",
    "description": "Example dataset description."
  }
}
```

The advantages may not be obvious on this small data example, but from practical experience, using a JSON-LD context

:::success JSON-LD Context definition
In JSON-LD, a context is used to map terms, i.e., properties with associated values in an JSON document, to URLs. A term is a short word that expands to a URL. Terms may be defined as any valid JSON string other than a JSON-LD keyword.

Source: *https://json-ld.org/spec/latest/json-ld-api-best-practices/#dfn-json-ld-context*
:::

## The JSON-LD Context used in this document's examples

The JSON-LD code snippets throughout this section of the developer guide assumes the following context:

<CodeBlock className="language-json">{JSON.stringify(context, null, 2)}</CodeBlock>

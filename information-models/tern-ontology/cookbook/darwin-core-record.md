# Darwin Core Record

The Darwin Core [Record-level concept](https://dwc.tdwg.org/terms/#record-level) provides a container-like mechanism to bundle metadata of a "record" together. This is often used in Darwin Core datasets to bundle multiple Darwin Core concepts together in a single record or row in a CSV file. The record-level metadata is then "applied" to the other Darwin Core concepts within the record.

Some examples of record-level metadata:

- country code
- provenance of the data (whether it is published or not)
- license type of the data in the record
- rights holder

In RDF, data is represented in triples, and collections of triples can be represented with the [void:Dataset](https://www.w3.org/TR/void/#dataset) class from the [VoiD Vocabulary](https://www.w3.org/TR/void/). The TERN Ontology provides a specialised version of the `void:Dataset` class as [tern:RDFDataset](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/RDFDataset).

## Example in RDF Turtle

```turtle
ex:b8240c0b-c670-4ef0-81cf-ba9a771c3c26 a tern:RDFDataset ;
    dcterms:identifier "dffa8107-f9d8-49c2-abca-c0a59d173d9b" ;
    dcterms:license <https://creativecommons.org/licenses/by/4.0/> ;
    dcterms:rightsHolder <https://museum.wa.gov.au/> ;
    dcterms:source "https://doi.org/10.26197/ala.26fdc11f-107e-45fa-9aab-3aead9083137"^^xsd:anyURI ;
    dcterms:subject <https://linked.data.gov.au/def/bdr-cv/ARACH> ;
    rdfs:comment "Equivalent to dwc:Record." ;
    tern:hasAttribute [ a tern:Attribute ;
            tern:attribute <https://linked.data.gov.au/def/bdr-cv/country-code> ;
            tern:hasSimpleValue "AU" ;
            tern:hasValue [ a tern:Text ;
                    rdf:value "AU" ] ],
        [ a tern:Attribute ;
            tern:attribute <https://linked.data.gov.au/def/bdr-cv/provenance> ;
            tern:hasSimpleValue "Published dataset" ;
            tern:hasValue [ a tern:Text ;
                    rdf:value "Published dataset" ] ] .
```

Use the object property `void:inDataset` to add other individuals to the record.

```turtle {2}
ex:88fd08b6-e443-4648-8bef-0c5ed0496a6d a tern:SiteVisit ;
    void:inDataset ex:b8240c0b-c670-4ef0-81cf-ba9a771c3c26 ;
    prov:startedAtTime "2015-03-22T13:00:00Z" ;
    tern:hasSite <https://linked.data.gov.au/dataset/bdr/site/e543b0dc-2d24-4490-a0f2-c2e33b858aed> .
```

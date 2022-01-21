# Annotating instances with the Attribute class

Instances of a class (also known as [individuals](http://www.linkeddatatools.com/help/classes) in RDF) can be annotated with additional properties with the [tern:Attribute](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Attribute) class.

This is useful for annotating protocol- and domain-specific information about individuals of the TERN Ontology classes. A few examples are documented below.

## Examples

### Adding protocol-specific information to a site and site visit

The Quensland CORVEG mapping survey classify sites into four "[sample level](http://linked.data.gov.au/def/corveg-cv/52794ba9-738c-4eba-a34a-d883c79b789c)" categories.

> The sample level is calculated by the CORVEG database when the ‘checked’ field is entered, based on the attributes recorded as either secondary, or tertiary, or quaternary/other

CORVEG's site type classifications can be annotated on CORVEG sites using the [tern:Attribute](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Attribute) class.

```turtle
ex:site-1 a tern:Site ;
    rdfs:label "CORVEG example site 1" ;
    tern:hasAttribute [
        tern:attribute <https://linked.data.gov.au/def/corveg-cv/example/site-sample-level> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/corveg-cv/aa0140d9-e6f3-4de6-9bd5-278e93366475> ;
        tern:hasValue [
            rdf:value <https://linked.data.gov.au/def/corveg-cv/aa0140d9-e6f3-4de6-9bd5-278e93366475> ;
            tern:vocabulary <https://linked.data.gov.au/def/corveg-cv/52794ba9-738c-4eba-a34a-d883c79b789c> ;
        ] ;
    ] .
```

CORVEG currently does not capture sampling effort for site visits, but if they do in the future, then sampling effort can be captured using the [tern:Attribute](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Attribute) class in the same way as sample level. Continuing with the previous example RDF.

```turtle
ex:site-1 a tern:Site ;
    rdfs:label "CORVEG example site 1" ;
    tern:hasSite ex:site-1-visit-1 ;
    tern:hasAttribute [
        tern:attribute <https://linked.data.gov.au/def/corveg-cv/example/site-sample-level> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/corveg-cv/aa0140d9-e6f3-4de6-9bd5-278e93366475> ;
        tern:hasValue [
            rdf:value <https://linked.data.gov.au/def/corveg-cv/aa0140d9-e6f3-4de6-9bd5-278e93366475> ;
            tern:vocabulary <https://linked.data.gov.au/def/corveg-cv/52794ba9-738c-4eba-a34a-d883c79b789c> ;
        ] ;
    ] .

ex:site-1-visit-1 a tern:SiteVisit ;
    rdfs:label "CORVEG example site 1 site visit 1" ;
    tern:hasAttribute [
        tern:attribute <https://linked.data.gov.au/def/corveg-cv/sampling-intensity> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/corveg-cv/sampling-intensity/high> ;
        tern:hasValue [
            rdf:value <https://linked.data.gov.au/def/corveg-cv/sampling-intensity-values/high> ;
            tern:vocabulary <https://linked.data.gov.au/def/corveg-cv/sampling-intensity-values> ;
        ] ;
    ] .
```

See also:

- [Queensland CORVEG Database](https://www.data.qld.gov.au/dataset/queensland-corveg-database)
- [Methodology for surveying and mapping regional ecosystems and vegetation communities in Queensland (v5.1)](https://www.publications.qld.gov.au/ckan-publications-attachments-prod/resources/6dee78ab-c12c-4692-9842-b7257c2511e4/methodology-mapping-surveying-v5-1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-Date=20220120T054044Z&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhALASfUXnLsei8czmPWHPIKDIIcxb5pOxvZCm%2F0YWn7MdAiAq7Pa7tLOvQfLDJHIIsAiq9pOxzaTE7l1TfMHts34tfyqNBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDI2NTMyNjI5ODYwMiIMGS3LjAGaKYfd0e2FKuEDL4B5upPnYQDTEXGs3LphC2py%2FAoDfEvAAJO%2FvyQNQviS93E03qlmTLfdUBgiicW9mAQ0nahkCCtGzmmplA%2FBBKNCdq6PBwYkH%2FDjcfp5fiURk1VNR23eaZgnRztsxvoazW4Sbrrb3fBJplFKkuJBrm%2FdAEXK1OHm0Ah58%2BnvlBguKQTj76qUSdvHilGjN6hsgc8HjnDwzhUQ7hISy%2BrgFFqK20NQOBhxNSVAgT0jkCg2lVjGpkFm7bFTgZ7wm7E1hHsU5gwK1wZTdplKV8Rgi74bvZiRQDrhGkihZkp%2Br14mqyv2v3JALCd7qSNl%2BlsjWffVayMcsRo3b9SiV4JGC5nQBJ32OrBBT%2FKhFmARFsyeLM%2BxATClBTLZfBEnIyfOIvR1yBQ3fI6Vd8bINd5znrDE3JGIE4Iv%2BYNqB03%2FfGpBPaHiXRKXOYrxRNyql83CRGMJ5hXLrgiqQwcwGbUu0dSSFfiLGgkgC8XYe0La1XPm6jraTR9mwMY9Wigqf8HbVqd3IdO3%2Fn%2Fl3zAF27rvWBvP9Zj%2FD6G3RhhJIDU82TgVgeryliyeAx1NvgfqQNVJCZv0sYJEAUtwX5NxwotFPxZoFgbae0hsJebjWF06eigRJFAtB8RCLqHzuSOmUGIupDCe3KOPBjqlAcX3ddQnpQ%2FbyyBMzX3u%2B1dyIi7zhNnE4YDERtMUs5pgOEbpzfPw5hOhNe9qTOEXBmjY9JdJGis7Iqun1RnnepgxlocPL9NVp22yXN0qBPUtwgORz1MPLLun8iasmube6fnJs6S%2BIXFXC6ZVeXAIAuIKCgDOtAOXPlBti3QOqpFD5LhV1o45Hn7WNT%2BPYBuBjTgCAey8%2FYKhZLOWV%2BXJ8HjPQbgILw%3D%3D&X-Amz-Credential=ASIAT3RVOAXVFCL7XXFA%2F20220120%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=70ffeb64bd28a10f02df7627407279c9091109f1fa950b0404c66e7034e84402)

### Adding instrument information used in a sampling event

The AusPlots Rangelands survey protocol collects soil bulk density measurements by obtaining undisturbed soil using the "core" method. The sampler, or tool used to collect the soil is a bulk density ring with a specific volume. The soil is also collected at different depths.

The below RDF example showcases how the [tern:Attribute](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Attribute) class is used to capture the soil sampling depth of the sampling event and the volume of the soil ring used to collect the soil sample.

```turtle {11-21,23-33}
ex:sampling-1 a tern:Sampling ;
    rdfs:label "CORVEG soil bulk density sampling 1" ;
    sosa:hasFeatureOfInterest <...> ;
    sosa:usedProcedure <...> ;
    sosa:resultTime "..."^^xsd:dateTime ;
    sosa:hasResult <...> ;
    sosa:madeBySampler [
        a tern:Sampler ;
        rdfs:label "soil ring" ;
        tern:instrumentType <https://linked.data.gov.au/def/tern-cv/24c81cc3-4d68-45a0-91a2-051af25dfb94> ;
        tern:hasAttribute [
            a tern:Attribute ;
            rdfs:label "volume of the soil ring" ;
            tern:attribute <https://linked.data.gov.au/def/tern-cv/039f87e5-ffd9-4676-b126-c74844d2e095> ;
            tern:hasSimpleValue 209.35 ;
            tern:hasValue [
                a tern:Float ;
                rdf:value 209.35 ;
                tern:unit <http://qudt.org/vocab/unit/CentiM3> ;
            ] ;
        ] ;
    ] ;
    tern:hasAttribute [
        a tern:Attribute ;
        rdfs:label "soil sampling depth" ;
        tern:attribute <http://linked.data.gov.au/def/tern-cv/c_908a6f69> ;
        tern:hasSimpleValue 0.1 ;
        tern:hasValue [
            a tern:Float ;
            rdf:value 0.1 ;
            tern:unit <http://qudt.org/vocab/unit/M> ;
        ] ;
    ] .
```

See also:

- [AusPlots Rangelands Survey Program](https://portal.tern.org.au/ausplots-rangelands-survey-program/18425)
- [AusPlots Rangelands Survey Protocols Manual (v1.2.9)](https://w3id.org/tern/static/ausplots-rangelands-manual/v1.2.9/manual.pdf)

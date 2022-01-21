---
sidebar_position: 1
---

# Cookbook of patterns

:::info
This section is in draft. The content and structure of the document may change until it is released.
:::

The cookbook is an amalgamation of the knowledge acquired through applying the TERN Ontology to different datasets and data standards. This section will document those learnings of common patterns,
practices and conventions of modelling ecological survey data and act as a quick reference for those who wish to apply the TERN Ontology to their own datasets. The cookbook is organised as a series of sections where each topic can be read and understood without reading the previous sections.

New patterns and practices can be added to the cookbook once discussions have taken place on the TERN Ontology's GitHub Discussions forum.
Potential items of the cookbook must be posted under the "_Modelling_" category. See a list of modelling discussions [here](https://github.com/ternaustralia/ontology_tern/discussions/categories/modelling).

Contribution to the cookbook directly is also possible by submitting pull requests to [TERN's Linked Data website's GitHub repository](https://github.com/ternaustralia/linkeddata-site). The content of the cookbook is written in [Markdown](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) format. See the source code for this specific page [here](https://github.com/ternaustralia/linkeddata-site/blob/master/information-models/tern-ontology/cookbook/intro.md).

The modelling patterns and practices provided in this cookbook are not definitive for all datasets. The idea of the cookbook is to understand the general modelling practices and apply the patterns if it is applicable to a particular dataset. Keep in mind that modelling practices usually differ based on business requirements and implementation details.

RDF examples in the cookbook will be in the [RDF Turtle](https://www.w3.org/TR/turtle/) syntax for human readability. The examples will omit prefix declarations for brevity. The examples may also omit required properties required for certain classes. Therefore, the examples may not conform to the TERN Ontology's SHACL shape constraints. Furthermore, the IRIs used in the examples may not be real or may not redirect to something that exists.

Some examples may contain values such as IRIs or literals and the values may use `...` as a placeholder:

```
<thing-1> a owl:Thing ;
    rdfs:label "..." ;
    void:inDataset <...> .
```

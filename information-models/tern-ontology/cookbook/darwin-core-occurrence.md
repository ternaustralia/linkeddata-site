# Darwin Core Occurrence

Darwin Core defines Occurrence as _"An existence of an Organism at a particular place at a particular time"_.

Some examples:

- A wolf pack on the shore of Kluane Lake in 1988.
- A virus in a plant leaf in the New York Botanical Garden at 15:29 on 2014-10-23.
- A fungus in Central Park in the summer of 1929.
- A cassowary in the Daintree in 2020.
- A dingo pack on Fraser Island.

To represent a Darwin Core Occurrence, we can use the following classes from the TERN Ontology:

- [tern:Sample](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sample) - equivalent to Darwin Core's [Occurence class](http://rs.tdwg.org/dwc/terms/Occurrence).
- [tern:Sampling](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sampling) - equivalent to Darwin Core's [Event class](http://rs.tdwg.org/dwc/terms/Event) (which is also equivalent to an activity).

A [tern:Sample](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sample) is always the result of a [tern:Sampling](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sampling). A [tern:Sample](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sample) can be broken down with further [tern:Sampling](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sampling) activities. A [tern:Sample](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Sample) can also be the feature of interest of [tern:Observation](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/Observation) activities.

## Presence/absence

In Darwin Core, the presence or absence of an Occurrence is captured using the property [dwc:occurrenceStatus](http://rs.tdwg.org/dwc/terms/occurrenceStatus). It may be tempting to capture this property as an observation on the sample, but this would be inaccurate. By defining the existence of a sample via a sampling activity, the sample is inherently "present".

The [ALA Faealla Darwin Core dataset](information-models/tern-ontology/cookbook/worked-examples/ala-faealla-darwin-core-dataset) provides a good example of modelling Darwin Core Occurrence with the TERN Ontology.

## Observable properties

Darwin Core's Occurrence class defines a number of properties that can be modelled as observations with the TERN Ontology. The following Darwin Core properties are equivalent to observable properties:

- [individual count](http://rs.tdwg.org/dwc/terms/individualCount)
- [organism quantity](http://rs.tdwg.org/dwc/terms/organismQuantity)
- [sex](http://rs.tdwg.org/dwc/terms/sex)
- [life stage](http://rs.tdwg.org/dwc/terms/lifeStage)
- [reproductive condition](http://rs.tdwg.org/dwc/terms/reproductiveCondition)
- [behavior](http://rs.tdwg.org/dwc/terms/behavior)

See TERN's [list of observable properties](http://linked.data.gov.au/def/tern-cv/5699eca7-9ef0-47a6-bcfb-9306e0e2b85e).

## Relation to MaterialSample

The [tern:MaterialSample](/viewers/tern-ontology?uri=https://w3id.org/tern/ontologies/tern/MaterialSample) class may be used to capture the specimen collected from the occurrence and stored in a museum for archival purposes.

## Example taken from the ALA Faealla Darwin Core dataset

The following example describes the sampling activity of an occurrence of `urn:lsid:taxonomy.org.au:ARACH:135732`.

- Two observations were made on the occurrence to describe its habitat and its life stage.
- A second sampling activity was performed to capture a specimen derived from the occurrence.
- An additional observation was made on the specimen to determine its taxonomic information.

```turtle
# Sampling of an occurrence
ex:5db1b0ee-26b4-4e46-b173-ca39db3a527f a tern:Sampling ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    geo:sfWithin <http://linked.data.gov.au/dataset/asgs2016/stateorterritory/5>,
        <https://sws.geonames.org/2077456/> ;
    rdfs:comment "Millstream-Chichester National Park, George River, 2.2 km SE. of Mt Montagu" ;
    prov:wasAssociatedWith _:N3f7ab12626864b5ba31a83c314551788 ;
    sosa:hasFeatureOfInterest <https://linked.data.gov.au/dataset/bdr/site/636ad3fa-9402-436e-9d4a-3e0e0ce928cd> ;
    sosa:hasResult ex:4d551894-f02f-431f-b002-cd75e4e26ade ;
    sosa:resultTime "2015-03-22T13:00:00+00:00"^^xsd:dateTime ;
    sosa:usedProcedure ex:occurrence-method .

# The occurrence sample
ex:4d551894-f02f-431f-b002-cd75e4e26ade a tern:Sample ;
    dcterms:identifier "urn:lsid:taxonomy.org.au:ARACH:135732" ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    rdfs:comment "occurrence" ;
    sosa:isResultOf ex:5db1b0ee-26b4-4e46-b173-ca39db3a527f ;
    sosa:isSampleOf <https://linked.data.gov.au/dataset/bdr/site/636ad3fa-9402-436e-9d4a-3e0e0ce928cd> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2361dea8-598c-4b6f-a641-2b98ff199e9e> .

# Observation 1 on the occurrence sample
ex:b1d4f2a2-0a48-4eb1-ac44-e327498653bb a tern:Observation ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    rdfs:comment "habitat of the occurrence." ;
    prov:wasAssociatedWith _:N3f7ab12626864b5ba31a83c314551788 ;
    sosa:hasFeatureOfInterest ex:4d551894-f02f-431f-b002-cd75e4e26ade ;
    sosa:hasResult [ a tern:Text ;
            rdf:value "under rock" ] ;
    sosa:hasSimpleResult "under rock" ;
    sosa:observedProperty <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
    sosa:phenomenonTime [ a tern:Instant ;
            time:inXSDDateTimeStamp "2015-03-22T13:00:00Z"^^xsd:dateTimeStamp ] ;
    sosa:resultTime "2015-03-22T13:00:00+00:00"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/bdr-cv/occurrence-method> .

# Observation 2 on the occurrence sample
ex:ebbab410-5a7b-4348-bb60-c72f67cf67b6 a tern:Observation ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    rdfs:comment "life stage of the occurrence." ;
    prov:wasAssociatedWith _:N3f7ab12626864b5ba31a83c314551788 ;
    sosa:hasFeatureOfInterest ex:4d551894-f02f-431f-b002-cd75e4e26ade ;
    sosa:hasResult [ a tern:Text ;
            rdf:value "Juvenile" ] ;
    sosa:hasSimpleResult "Juvenile" ;
    sosa:observedProperty <http://linked.data.gov.au/def/tern-cv/abb0ee19-b2e8-42f3-8a25-d1f39ca3ebc3> ;
    sosa:phenomenonTime [ a tern:Instant ;
            time:inXSDDateTimeStamp "2015-03-22T13:00:00Z"^^xsd:dateTimeStamp ] ;
    sosa:resultTime "2015-03-22T13:00:00+00:00"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/bdr-cv/occurrence-method> .

# Sampling to create a MaterialSample of the occurrence
ex:137c2e73-4387-4030-a03e-99c9ae5364c1 a tern:Sampling ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    prov:wasAssociatedWith _:N3f7ab12626864b5ba31a83c314551788 ;
    sosa:hasFeatureOfInterest ex:4d551894-f02f-431f-b002-cd75e4e26ade ;
    sosa:hasResult ex:d5eb394d-fedd-416e-81e8-ecd9ddb3c7b3 ;
    sosa:resultTime "2015-03-22T13:00:00+00:00"^^xsd:dateTime ;
    sosa:usedProcedure ex:specimen-sampling .

# MaterialSample of the occurrence
ex:d5eb394d-fedd-416e-81e8-ecd9ddb3c7b3 a tern:MaterialSample ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    rdfs:comment "specimen" ;
    sosa:isResultOf ex:137c2e73-4387-4030-a03e-99c9ae5364c1 ;
    sosa:isSampleOf ex:4d551894-f02f-431f-b002-cd75e4e26ade ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> .

# Observation on the MaterialSample of the occurrence
ex:7453b566-6740-468c-b7f2-53bb2242e8b3 a tern:Observation ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    rdfs:comment "specimen taxonomic information" ;
    prov:wasAssociatedWith _:N42fea4eea3334fa78102ee19446553e2 ;
    sosa:hasFeatureOfInterest ex:d5eb394d-fedd-416e-81e8-ecd9ddb3c7b3 ;
    sosa:hasResult _:Nea38746614164b2abec6f51cd4f161cc ;
    sosa:hasSimpleResult _:Nea38746614164b2abec6f51cd4f161cc ;
    sosa:observedProperty <http://linked.data.gov.au/def/tern-cv/70646576-6dc7-4bc5-a9d8-c4c366850df0> ;
    sosa:phenomenonTime [ a tern:Instant ;
            time:inXSDDateTimeStamp "2015-01-01T00:00:00"^^xsd:dateTimeStamp ] ;
    sosa:resultTime "2015-01-01T00:00:00"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/bdr-cv/specimen-method> .

# Result of the MaterialSample observation
_:Nea38746614164b2abec6f51cd4f161cc a tern:Taxon ;
    void:inDataset ex:429d65cf-40f1-4870-b47b-4528090f872d ;
    dwc:class "Arachnida" ;
    dwc:family "Feaellidae" ;
    dwc:genus "Feaella" ;
    dwc:kingdom "Animalia" ;
    dwc:order "Pseudoscorpiones" ;
    dwc:phylum "Arthropoda" ;
    dwc:scientificName "Feaella (Tetrafeaella) linetteae" ;
    dwc:scientificNameAuthorship "Harvey, Abrams, Beavis, Hillyer & Huey, 2016" ;
    dwc:species "Feaella linetteae" ;
    dwc:specificEpithet "linetteae" ;
    dwc:taxonConceptID <urn:lsid:biodiversity.org.au:afd.taxon:8d2bffe6-d564-4114-9453-525fa1f0ff8b> ;
    dwc:taxonRank "species" .
```

---

See also:

- [dwc:Occurrence](https://dwc.tdwg.org/list/#dwc_Occurrence)
- [Feature type controlled vocabulary](http://linked.data.gov.au/def/tern-cv/68af3d25-c801-4089-afff-cf701e2bd61d)
- [ALA Faealla Darwin Core dataset](/information-models/tern-ontology/cookbook/worked-examples/ala-faealla-darwin-core-dataset)
- [TERN's observable properties controlled vocabulary](http://linked.data.gov.au/def/tern-cv/5699eca7-9ef0-47a6-bcfb-9306e0e2b85e)

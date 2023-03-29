---
sidebar_position: 2
---

# Pan trapping protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Pan trapping protocol](https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303) protocol.

Mentions of observable properties should refer to [pan-trapping/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/invertebrate/pan-trapping/overview) for the feature type and value type information.

## Conceptual modelling

The Pan trapping protocol records data about the site for the following feature types:

- plant community
- animal specimen

These observations are recorded for each site during a site visit.

The method involves the use of small coloured bowls or ‘pans’ which are either filled with water and a small amount of dishwashing liquid for rapid sampling over one day, or undiluted propylene glycol for sampling over a longer duration.

### Diagram

The following diagram shows the Pan trapping protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d&layers=1&nav=1&title=invertebrate-fauna-pan-trapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d&layers=1&nav=1&title=invertebrate-fauna-pan-trapping-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1EJExnBy_Mk1kqjmEqQxU26yok1EZrs_d%26export%3Ddownload">View diagram in new tab.</a>

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX ssn: <http://www.w3.org/ns/ssn/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX unit: <http://qudt.org/vocab/unit/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/Deployment/trap-set-up>
    a tern:Deployment ;
    rdfs:label "trap set up" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    ssn:deployedOnPlatform <https://example.com/Transect/transect> ;
    ssn:deployedSystem <https://example.com/Sampler/pan-traps> ;
    tern:hasAttribute
        [
            rdfs:label "pan placement" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b5e04630-0013-4cc2-8515-02fdc1e952fc> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/41881d6e-2e4c-45c6-8f9c-f8c0d82ce0b6> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "liquid amount" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e760902f-b01c-4b11-aaab-1f965f292352> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:MilliL
                ]
        ] ,
        [
            rdfs:label "proposed pan trapping duration" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/51abbe2c-0108-4def-95ec-39d574593a52> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "liquid type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d423df1b-aac6-42c2-be3e-43ab27eaf745> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/5a25663a-201a-587a-a527-84f9543fadaf> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Undiluted Propylene Glycol" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/5a25663a-201a-587a-a527-84f9543fadaf>
                ]
        ] ,
        [
            rdfs:label "pan height above ground" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6c5e9c30-6924-468d-be8e-481aa68fa1f6> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "stakes used to hold pan" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/309ff0e0-f17b-4c05-8d11-5ca1b700a35c> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap monitoring duration" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a1556af0-814e-4b1f-b296-9d42a9186dd8> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/7b77b36b-2661-5c37-80c7-5618abf9682d> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Lite Duration" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/7b77b36b-2661-5c37-80c7-5618abf9682d>
                ]
        ] ,
        [
            rdfs:label "pan trap repeat monitoring" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/e8b25478-caba-4ae1-95af-4bb24e9fbb5a> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ;
.

<https://example.com/Sampling/sample-collection-and-trap-removal>
    a tern:Sampling ;
    rdfs:label "sample collection and trap removal" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-05-10T07:38:02"^^xsd:dateTime ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/pan-traps> ;
    sosa:hasResult <https://example.com/MaterialSample/invertebrate-animals> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
    tern:hasAttribute
        [
            rdfs:label "pan trap refilled" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ba740b63-219b-4832-baa9-5f6ab1799c3f> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap upended" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2d17cd6e-da13-4544-83a5-0a6900cd1ba1> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap no catch" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ea52a346-b6d3-41dc-9f0d-d5d74d48fdbd> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap damaged" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/c7f352f9-eeb9-428b-b54a-9e726bee3b4c> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap completion comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a959af6d-890b-4e49-984d-827ac88a38fb> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "pan trap not found" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/03da222d-f463-4d4e-a892-fe19b70a9bed> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap rain impacted" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/59b22e0b-b01d-4464-840b-37a538dbb272> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap evaporated" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/fb2ef80e-52c1-4391-88a4-355857cc5edb> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a tern:Boolean ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "pan trap preservation type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5f261bed-d7d9-413e-8685-68ea548c5c64> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/01409859-285c-5402-9ee6-713bc7964167>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/MaterialSample/invertebrate-animals> ,
        <https://example.com/Sampler/pan-traps> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
.

<https://example.com/observation/pan-trap-count-estimate/1>
    a tern:Observation ;
    rdfs:label "pan trap count estimate" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/MaterialSample/invertebrate-animals> ;
    sosa:hasResult [
            a tern:Integer ;
            rdf:value 2
        ] ;
    sosa:hasSimpleResult 2 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e4fa718e-76d1-47a2-87c9-b683a3ff3c18> ;
.

<https://example.com/observation/plant-species-in-flower/1>
    a tern:Observation ;
    rdfs:label "plant species in flower" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2d95624b-e04e-4826-b97d-b74b90db4d56> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
.

<https://example.com/Sample/photos>
    a tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
    tern:hasAttribute
        [
            rdfs:label "photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "photo direction" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/92650dea-b8f2-4e48-bb20-95ca9aa80308> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/18d6d662-5fbf-5848-8f5a-69523188c769> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "South East" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/18d6d662-5fbf-5848-8f5a-69523188c769>
                ]
        ] ;
.

<https://example.com/Sample/plant-community>
    a tern:Sample ;
    rdfs:label "plant community" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/Site/site>
    a tern:Site ;
    rdfs:label "site" ;
    dcterms:identifier "site-site-001" ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/MaterialSample/invertebrate-animals>
    a tern:MaterialSample ;
    rdfs:label "invertebrate animals" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "materialsample-invertebrate-animals-001" ;
    sosa:isSampleOf <https://example.com/Transect/transect> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
.

<https://example.com/Sampler/pan-traps>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ;
    rdfs:label "pan traps" ;
    dcterms:identifier "sampler-pan-traps-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/666e5aa5-e545-4637-bc52-a296d647b303> ;
    tern:hasAttribute
        [
            rdfs:label "pan height" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/51fd3f49-e302-4b68-af86-431f64b1a540> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "pan diameter" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2b0aac4a-a79a-4ce9-aa34-f8e0cee4770f> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "pan trap inside colour" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/4a6ae834-08bf-4f80-b219-fbe9c56e4e1a> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/06495910-6429-5403-adb6-b5fbecf9ca90> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "White" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/06495910-6429-5403-adb6-b5fbecf9ca90>
                ]
        ] ,
        [
            rdfs:label "pan trap outside colour" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b3a55fa-7d3e-44f5-9042-897b624c4273> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/06495910-6429-5403-adb6-b5fbecf9ca90> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "White" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/06495910-6429-5403-adb6-b5fbecf9ca90>
                ]
        ] ,
        [
            rdfs:label "pan trap capacity" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/498a0a7e-9a0f-4ebe-9775-a414caa7a80d> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:MilliL
                ]
        ] ;
.

<https://example.com/Transect/transect>
    a tern:Transect ;
    rdfs:label "transect" ;
    dcterms:identifier <https://example.com/Transect/transect-line-001> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
.

```

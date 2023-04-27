---
sidebar_position: 2
---

# Targeted survey - Ecological community protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Ecological community protocol](https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c) protocol.

Mentions of observable properties should refer to [ecological-community/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/targeted-survey/ecological-community/overview) for the feature type and value type information.

## Conceptual modelling

The Ecological community protocol records data about the site for the feature type:

- plant community

These observations are recorded for each site during a site visit.

This protocol is to record survey effort and any observations of target ecological communities within the project area.

### Diagram

The following diagram shows the Ecological community protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8&layers=1&nav=1&title=targeted-survey-ecological-community-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8&layers=1&nav=1&title=targeted-survey-ecological-community-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S4ZAr-swzWcHRc9-KQuOwQdHZCe82Xd8%26export%3Ddownload">View diagram in new tab.</a>

### Survey data from targeted survey - Ecological community protocol:

The following is dummy data:

```json
{
  "start_date": "2023-04-11T06:03:58.525Z",
  "lat": 0,
  "lng": 0,
  "plot_visit": 0,
  "observers": "Paul Green",
  "sample_id": "materialSample001",
  "photo": [0],
  "voucher_type": "skin",
  "condition_thresholds": "string",
  "disturbance": "Cultivated; rain fed",
  "species_and_cover": "20%",
  "weeds": "weed species",
  "health": "Healthy",
  "diagnostic_characteristics": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/visit/1> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `lat`, `lng`

These 2 keys map to the attribute `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `observers`

The `observers` key maps to the property `prov:wasAssociatedWith` on the `tern:Observation` class.

##### Example

```
<https://example.com/observation/1> a tern:Observation ;
    prov:wasAssociatedWith "Paul Green" .
```

#### `sample_id`

The `sample_id` key maps to the property `dwc:materialSampleID` on the `tern:MaterialSample` class.

##### Example

```
<https://example.com/fauna-sample/1> a tern:MaterialSample ;
    dwc:materialSampleID "materialSample001" .
```

#### `photo`

The `photo` key maps to the `tern:Sample` class.

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher type` in [Targeted survey module - Ecological Community protocol Attributes](https://linked.data.gov.au/def/nrm/228ecdc5-9982-4049-9c15-db781d7e6e0f), and is linked to specimen by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/specimen/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/36d484d2-05fb-548f-a939-740e4bf27fae> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Animal tissue (skin)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/36d484d2-05fb-548f-a939-740e4bf27fae> ;
        ] ;
    ] ;
.
```

#### `condition_thresholds`

The `condition_thresholds` key maps to a `tern:Observation` with the observable property 'condition thresholds'.

#### `disturbance`

The `disturbance` key maps to a `tern:Observation` with the observable property 'disturbance type'.

#### `species_and_cover`

The `species_and_cover` key maps to a `tern:Observation` with the observable property 'species and cover'.

#### `weeds`

The `weeds` key maps to a `tern:Observation` with the observable property 'weeds'.

#### `health`

The `health` key maps to a `tern:Observation` with the observable property 'vegetation health'.

#### `diagnostic_characteristics`

The `diagnostic_characteristics` key maps to a `tern:Observation` with the observable property 'diagnostic characteristics'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Targeted survey - Ecological Community protocol` are in [Targeted Survey - Ecological Community protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#targeted_survey_ecological_community_protocol_conformance_class_requirements).

Validator is [Targeted survey - ecological community protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-ecological-community-protocol-shapes/shapes.ttl).

The following are examples of validating data at the project, protocol, sub-protocol, and observation levels:

### Example usage with PySHACL - project level

Save the [DCCEEW RLP shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/shapes.ttl) in a file named `dcceew-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for all DCCEEW protocols**, run the following command to validate the data:

```bash
pyshacl -s dcceew-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - protocol level

Save the [Targeted survey shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/shapes.ttl) in a file named `targeted-survey-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Targeted survey protocol**, run the following command to validate the data:

```bash
pyshacl -s targeted-survey-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Targeted survey - ecological community shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-ecological-community-protocol-shapes/shapes.ttl) in a file named `targeted-survey-ecological-community-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Targeted survey - Ecological Community protocol**, run the following command to validate the data:

```bash
pyshacl -s targeted-survey-ecological-community-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [vegetation health shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/targeted-survey/targeted-survey-ecological-community-protocol-shapes/vegetation-health/shapes.ttl) in a file named `vegetation-health-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for vegetation health in Targeted survey - ecological community protocol**, run the following command to validate the data:

```bash
pyshacl -s vegetation-health-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/ObservationCollection/observations-on-plant-community>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant community" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasMember
        <https://example.com/observation/condition-thresholds/1> ,
        <https://example.com/observation/diagnostic-characteristics/1> ,
        <https://example.com/observation/disturbance-type/1> ,
        <https://example.com/observation/species-and-cover/1> ,
        <https://example.com/observation/vegetation-health/1> ,
        <https://example.com/observation/weeds/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:hasSiteVisit <https://example.com/SiteVisit/site-visit> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/locating-ecological-community>
    a tern:Sampling ;
    rdfs:label "locating ecological community" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/plant-community> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/plant-vouchering>
    a tern:Sampling ;
    rdfs:label "plant vouchering" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult <https://example.com/MaterialSample/flora-voucher-specimen> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/MaterialSample/flora-voucher-specimen>
    a
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "flora voucher specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    rdfs:comment "Photo is taken." ;
    sosa:isSampleOf <https://example.com/Sample/plant-community> ;
    tern:featureType "plant specimen" ;
    tern:hasAttribute [
            rdfs:label "voucher type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/318227b7-6ab5-507a-86d9-3ff8030dfb5d> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Plant Tissue Voucher" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/318227b7-6ab5-507a-86d9-3ff8030dfb5d>
                ]
        ] ;
.

<https://example.com/Sample/photos>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Sample/plant-community> ;
    tern:featureType <https://example.com/non-created-feature-type/photos/1> ;
    tern:hasAttribute [
            rdfs:label "photo description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/edfc908c-f040-495d-9b54-3c0cfe6eb698> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    prov:startedAtTime "2022-05-10T03:38:02"^^xsd:dateTime ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/observation/condition-thresholds/1>
    a tern:Observation ;
    rdfs:label "condition thresholds" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/92d0eaf3-0352-45ba-b173-f82923cdd795> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/diagnostic-characteristics/1>
    a tern:Observation ;
    rdfs:label "diagnostic characteristics" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f6990e14-842c-4eee-bd3d-77dfe8cfede4> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/disturbance-type/1>
    a tern:Observation ;
    rdfs:label "disturbance type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/059b347f-58c9-59a9-bd75-9305d7e1211d>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/059b347f-58c9-59a9-bd75-9305d7e1211d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/632e4c3c-0e73-4b3d-b1d6-7b38897da5e8> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/species-and-cover/1>
    a tern:Observation ;
    rdfs:label "species and cover" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e706382f-3cf5-48ff-bc86-6e8902dc2aaf> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    rdfs:label "vegetation health" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Grazing" ;
            rdf:value <https://linked.data.gov.au/def/nrm/118698b1-44f4-5159-a32a-79f7fd335682>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/118698b1-44f4-5159-a32a-79f7fd335682> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7d4eaa80-0f2a-4828-886e-34cd5a4e2746> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/weeds/1>
    a tern:Observation ;
    rdfs:label "weeds" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/plant-community> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cefdf9e3-63cb-42fb-9d9b-790dbdebbe45> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/4da8c123-b886-4881-91b3-1ff6a9b30e3c> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Site/site>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "site" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs84:lat -3.092085e+01 ;
    wgs84:long 1.522424e+02 ;
.

<https://example.com/Sample/plant-community>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant community" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410"
        ] ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
    tern:hasAttribute
        [
            rdfs:label "ecological community comments" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/c66b7850-8db7-408b-9819-eaef6ca37114> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "community description" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/00ce1921-fedc-40c2-a24e-294937bffa5b> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "target community" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/401f1d32-68c0-49da-9755-dfb5d1ede660> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/092efe20-9aaa-5c76-af9e-defd84207318> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Tasmanian Forests and Woodlands dominated by black gum or Brookers gum (Eucalyptus ovata / E. brookeriana)" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/092efe20-9aaa-5c76-af9e-defd84207318>
                ]
        ] ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

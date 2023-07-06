---
sidebar_position: 2
---

# Opportunistic Observations protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Opportunistic observations protocol](https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/opportunistic-observations-module/overview) for the feature type and value type information.

## Conceptual modelling

The Opportunistic Observations module records data about the site for the following feature types:

- habitat
- plant occurrence
- animal occurrence
- plant community

Opportunistic observations are unplanned (no defined survey effort) and made while undertaking other activities, at any stage of a project. Observations often occur while traveling between plots and while undertaking other modules.

`voucher condition` is only recorded for fauna specimens.

### Diagram

The following diagram show the Opportunistic Observations protocol mapping. 

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm&layers=1&nav=1&title=opportunistic-observations-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm&layers=1&nav=1&title=opportunistic-observations-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1rf2awb20JcQlGEdC2oKoT-5mMK89QFXm%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Opportunistic Observations measurements

- [OpenAPI docs for opportunistic observations](https://beta.core-api.paratoo.tern.org.au/documentation#/Opportunistic-observation/post%2Fopportunistic-observations)

```json
{
  "observation_id": "string",
  "representative_media": [0],
  "location": {
    "lat": 0,
    "lng": 0
  },
  "plot_location": 0,
  "taxa_type": "VP",
  "species": "string",
  "confident": true,
  "identification_source": "F",
  "date_time": "2022-12-20T06:28:21.298Z",
  "number_of_individuals": 0,
  "observation_method": "OB",
  "habitat_description": "CD",
  "observation_notes": "string",
  "veg_growth_form": "V",
  "vouchered_specimens": [
    {
      "voucher_barcode": "string",
      "voucher_comment": "string",
      "voucher_type": "Animal tissue (skin)",
      "voucher_condition": "F"
    }
  ],
  "fauna_behaviour": "FE",
  "fauna_age_class": "AD",
  "fauna_sex": "M",
  "fauna_breeding_code": "UK",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `observation_id`

The `observation_id` key maps to the property `dcterms:identifier` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/vegetation-health/1>
    a tern:Observation ;
    dcterms:identifier "observation001"^^xsd:string ;
.
```

#### `representative_media`

The `representative_media` key maps to photos, videos, and audio(`tern:Sample`) taken during 'taking representative media'(`tern:Sampling`) for observations on site. Each representative media has the property `dcterms:identifier`.

##### Example

```turtle
<https://example.com/site/1/image/1> a tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
.
```

#### `location`

The `location` key maps to the attribute `geo:hasGeometry` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `plot_location`

The `plot_location` key map sto the attribute `geo:hasGeometry` on the `tern:Site` class.

##### Example

```turtle
<https://example.com/site/1> a tern:Site ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat "-30.920849"^^xsd:double ;
        wgs:long "152.242400"^^xsd:double ;
    ] ;
.
```

#### `taxa_type`

The `taxa_type` key maps to a `tern:Observation` with the observable property 'taxa type'.

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `confident`

The `confident` key maps to the attribute `species name confidence` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/field-species-name/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "species name confidence" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/6f6a3655-4347-4219-bfe1-9e4023d3a80f> ;
        tern:hasSimpleValue true ;
        tern:hasValue [
            a tern:Boolean ;
            rdf:value true ;
        ] ;
    ] ;
.
```

#### `identification_source`

The `identification_source` key maps to the attribute `source of identification` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/field-species-name/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "source of identification" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0f60d198-4d2f-54fb-be71-342551f0433f> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Field observer" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0f60d198-4d2f-54fb-be71-342551f0433f> ;
        ] ;
    ] ;
.
```

#### `date_time`

The `date_time` key maps to the property `tern:resultDateTime` on the `tern:Observation` class.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:resultDateTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `number_of_individuals`

The `number_of_individuals` key maps to a `tern:Observation` with the observable property 'number of individuals'.

#### `observation_method`

The `observation_method` key maps to attributes `observation method tier 1` and `observation method tier 2` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "observation method tier 1" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/6b1b5d93-a0cf-47bc-959d-d9bdb6b8248b> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/beaabf41-ed1a-5315-89ae-8dd437b4df34> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Observed" ;
            rdf:value <https://linked.data.gov.au/def/nrm/beaabf41-ed1a-5315-89ae-8dd437b4df34> ;
        ] ;
    ] ;
.
```

#### `habitat_description`

The `habitat_description` key maps to a `tern:Observation` with the observable property 'habitat description'.

#### `observation_notes`

The `observation_notes` key maps to the attribute `observation notes` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to observations by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "observation notes" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
        tern:hasSimpleValue "Observed on bird groups." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Observed on bird groups." ;
        ] ;
    ] ;
.
```

#### `veg_growth_form`

The `veg_growth_form` key maps to a `tern:Observation` with the observable property 'growth form'.

#### `voucher_barcode`

The `voucher_barcode` key maps to the property `dwc:materialSampleID` in `tern:MaterialSample` class. It is the identifier of specimen collected during `tern:Sampling`.

##### Example

```turtle
<https://example.com/site/1/plant-tissue-vouchering/specimen/1> a tern:MaterialSample ;
    rdfs:label "flora vouchering specimen 1" ;
    dwc:materialSampleID "materialSample1" ;
.
```

#### `voucher_comment`

The `voucher_comment` key maps to the property `rdfs:comment` on the `tern:Sampling` class.

##### Example

```turtle
<https://example.com/fauna-vouchering/1>
    a tern:Sampling ;
    rdfs:comment "Hair taken."^^xsd:string ;
.
```

#### `voucher_type`

The `voucher_type` key maps to the attribute `voucher type` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to samples by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/material-sample/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/958424a8-1c46-507b-a175-d5ff5409f85e> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Animal tissue (fur/hair)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/958424a8-1c46-507b-a175-d5ff5409f85e> ;
        ] ;
    ] ;
.
```

#### `voucher_condition`

The `voucher_condition` key maps to the attribute `voucher condition` in [Opportunistic Observations Attributes](https://linked.data.gov.au/def/nrm/36bc359e-5748-4f53-b6a1-548663155357), and is linked to samples by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/material-sample/1> a tern:MaterialSample ;
    tern:hasAttribute [
        rdfs:label "voucher condition" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/010ee3c8-bfbe-47c5-adc8-068ca664173d> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/53691227-fec8-5518-9278-ac3e10a587a6> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Fresh (estimate <24 hours)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/53691227-fec8-5518-9278-ac3e10a587a6> ;
        ] ;
    ] ;
.
```

#### `fauna_behaviour`

The `fauna_behaviour` key maps to a `tern:Observation` with the observable property 'fauna behaviour'.

#### `fauna_age_class`

The `fauna_age_class` key maps to a `tern:Observation` with the observable property 'age class'.

#### `fauna_sex`

The `fauna_sex` key maps to a `tern:Observation` with the observable property 'sex'.

#### `fauna_breeding_code`

The `fauna_breeding_code` key maps to a `tern:Observation` with the observable property 'breeding status'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Opportunistic Observations protocol` are in [Opportunistic Observations Module Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#opportunistic_observations_module_conformance_class_requirements).

Validator is [Opportunistic Observations protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/opportunistic-observations-protocol-shapes/shapes.ttl).

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

Save the [Opportunistic Observations shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/opportunistic-observations-protocol-shapes/shapes.ttl) in a file named `opportunistic-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Opportunistic Observations protocol**, run the following command to validate the data:

```bash
pyshacl -s opportunistic-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [sex shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/opportunistic-observations-protocol-shapes/sex/shapes.ttl) in a file named `sex-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for sex in Opportunistic Observations protocol**, run the following command to validate the data:

```bash
pyshacl -s sex-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

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
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation/microhabitat-tier-1/1>
    a tern:Observation ;
    rdfs:label "microhabitat tier 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "in" ;
            rdf:value <https://linked.data.gov.au/def/nrm/57b9fb25-e075-4e18-8c7f-167e09318c94>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/57b9fb25-e075-4e18-8c7f-167e09318c94> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/71e15d2a-53d0-4c79-91a8-4746958703cb> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/microhabitat-tier-2/1>
    a tern:Observation ;
    rdfs:label "microhabitat tier 2" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Scrubland" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c0a34405-508b-56f7-8011-991bfa87c5ec>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c0a34405-508b-56f7-8011-991bfa87c5ec> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/664bd7cf-1cc4-4d19-8c33-8173471638c2> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/habitat/1/sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/3> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasAttribute [
            rdfs:label "target species" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "Pine" ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Pine"
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-11T12:00:00+00:00"^^xsd:dateTime ;
.

<https://example.com/camera/1>
    a tern:Sampler ;
    rdfs:label "Canon EOS 550D DSLR cropped sensor camera" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/05669173-2fe7-4b70-ba67-2e09fbe87de9> ;
    tern:hasAttribute [
            a tern:Attribute ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://example.com/non-created-attribtue/focal-length/1> ;
            tern:hasSimpleValue 24 ;
            tern:hasValue [
                    a
                        tern:Integer ,
                        tern:Value ;
                    rdf:value 24 ;
                    tern:unit <http://qudt.org/vocab/unit/MilliM>
                ]
        ] ;
    tern:samplerType <http://linked.data.gov.au/def/tern-cv/11e03f36-7ada-4333-88e2-38c9205f2749> ;
.

<https://example.com/fauna-tissue-vouchering/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    rdfs:comment "Photos are taken for this sample" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult <https://example.com/site/1/fauna-vouchering/specimen/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T10:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on animal occurrence" ;
    dcterms:identifier "observationCollection001" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/age-class/1> ,
        <https://example.com/observation/animal-pouch-condition/1> ,
        <https://example.com/observation/animal-testes-condition/1> ,
        <https://example.com/observation/breeding-status/1> ,
        <https://example.com/observation/fauna-behaviour/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/habitat-description/1> ,
        <https://example.com/observation/number-of-individuals/1> ,
        <https://example.com/observation/sex/1> ,
        <https://example.com/observation/taxa-type/1> ,
        <https://example.com/observation/teat-status/1> ,
        <https://example.com/observation/vaginal-condition/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasAttribute
        [
            rdfs:label "observation notes" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "Taken photos." ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Taken photos."
                ]
        ] ,
        [
            rdfs:label "observation method tier 1" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6b1b5d93-a0cf-47bc-959d-d9bdb6b8248b> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/4603c442-e9e3-5bfd-8ab5-b46129f0e6b8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "None" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/4603c442-e9e3-5bfd-8ab5-b46129f0e6b8>
                ]
        ] ,
        [
            rdfs:label "observation method tier 2" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/19835fac-2edc-4960-89ad-7e5981dcc8f1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/b7a02786-f651-5199-877b-96d5dc4c66c6> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Harp Trap" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/b7a02786-f651-5199-877b-96d5dc4c66c6>
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T06:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    dcterms:identifier "observationCollection002" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    prov:wasAssociatedWith [
            a <https://w3id.org/tern/ontologies/org/Person> ;
            schema:name "Paul Green"
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember
        <https://example.com/observation/field-species-name/2> ,
        <https://example.com/observation/growth-form/1> ,
        <https://example.com/observation/habitat-description/2> ,
        <https://example.com/observation/number-of-individuals/2> ,
        <https://example.com/observation/plant-phenology/1> ,
        <https://example.com/observation/taxa-type/2> ,
        <https://example.com/observation/vegetation-type/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T08:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasAttribute
        [
            rdfs:label "observation method tier 1" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6b1b5d93-a0cf-47bc-959d-d9bdb6b8248b> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/4603c442-e9e3-5bfd-8ab5-b46129f0e6b8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "None" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/4603c442-e9e3-5bfd-8ab5-b46129f0e6b8>
                ]
        ] ,
        [
            rdfs:label "observation method tier 2" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/19835fac-2edc-4960-89ad-7e5981dcc8f1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/b7a02786-f651-5199-877b-96d5dc4c66c6> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Harp Trap" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/b7a02786-f651-5199-877b-96d5dc4c66c6>
                ]
        ] ,
        [
            rdfs:label "observation notes" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dd035eed-24b2-41b5-a3cc-7270c2c590b5> ;
            tern:hasSimpleValue "Taken photos." ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "Taken photos."
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T09:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/age-class/1>
    a tern:Observation ;
    rdfs:label "age class" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Juvenile" ;
            rdf:value <https://linked.data.gov.au/def/nrm/6de1f874-fdcb-520a-9ff8-481a7968e76c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/6de1f874-fdcb-520a-9ff8-481a7968e76c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/59df7c05-1521-4161-86e4-8e6a8feb4002> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/animal-pouch-condition/1>
    a tern:Observation ;
    rdfs:label "animal pouch condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Developed" ;
            rdf:value <https://linked.data.gov.au/def/nrm/76e74327-adb8-52be-9f50-4c2eef108f69>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/76e74327-adb8-52be-9f50-4c2eef108f69> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5ccfd7ed-12e4-42ed-83a1-1b85445f92d6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/animal-testes-condition/1>
    a tern:Observation ;
    rdfs:label "animal testes condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Scrotal" ;
            rdf:value <https://linked.data.gov.au/def/nrm/47e71470-3a77-5c15-9d54-b9a6fff840e9>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/47e71470-3a77-5c15-9d54-b9a6fff840e9> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ff9c9d4e-5c91-42ea-9278-f7c9ed82569f> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/breeding-status/1>
    a tern:Observation ;
    rdfs:label "breeding status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Unknown" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d8ed3241-8d97-4a63-be3a-5f610a4b8739> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/fauna-behaviour/1>
    a tern:Observation ;
    rdfs:label "fauna behaviour" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Roosting" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4246f9b7-0e3c-55fc-a7e9-3794ec69599f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4246f9b7-0e3c-55fc-a7e9-3794ec69599f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dfaf2438-6019-4632-85d8-0efc91930768> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Snake"
        ] ;
    sosa:hasSimpleResult "Snake" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasAttribute
        [
            rdfs:label "species name confidence" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6f6a3655-4347-4219-bfe1-9e4023d3a80f> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "source of identification" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Other" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/2>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Pine"
        ] ;
    sosa:hasSimpleResult "Pine" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasAttribute
        [
            rdfs:label "species name confidence" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/6f6a3655-4347-4219-bfe1-9e4023d3a80f> ;
            tern:hasSimpleValue true ;
            tern:hasValue [
                    a
                        tern:Boolean ,
                        tern:Value ;
                    rdf:value true
                ]
        ] ,
        [
            rdfs:label "source of identification" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/7b970827-ed2e-48d8-9c41-63bb51d01ce1> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Other" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/a96d7507-e823-5f3a-a26b-62313538e0bb>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Grass-tree" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1be47880-4ee6-5df9-8eda-551c58078771>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1be47880-4ee6-5df9-8eda-551c58078771> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Isolated clump of tussock grasses" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f51c20dd-6026-5b24-9f5f-a705b8d88a95>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f51c20dd-6026-5b24-9f5f-a705b8d88a95> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/habitat-description/2>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Near the forest."
        ] ;
    sosa:hasSimpleResult "Near the forest." ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/number-of-individuals/1>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 5
        ] ;
    sosa:hasSimpleResult 5 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/number-of-individuals/2>
    a tern:Observation ;
    rdfs:label "number of individuals" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 6
        ] ;
    sosa:hasSimpleResult 6 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-phenology/1>
    a tern:Observation ;
    rdfs:label "plant phenology" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/94ee6b46-e2f1-5101-8666-3cbcd8697f0f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/33c1752f-b5f3-4ac9-9090-e9a4dd3096d1> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/sex/1>
    a tern:Observation ;
    rdfs:label "sex" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Unknown" ;
            rdf:value <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/f6b0f6d8-16d8-5dd7-b1b7-66b0c020b96f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/40b39732-e10b-4c4e-968b-3404663a094d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/taxa-type/1>
    a tern:Observation ;
    rdfs:label "taxa type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Vascular plant" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7def5e09-00a6-5ace-b48b-6f93b4d4bf8a>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7def5e09-00a6-5ace-b48b-6f93b4d4bf8a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1b3904f4-df8c-49ba-a234-3b406fe11fa9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/taxa-type/2>
    a tern:Observation ;
    rdfs:label "taxa type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Vascular plant" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7def5e09-00a6-5ace-b48b-6f93b4d4bf8a>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7def5e09-00a6-5ace-b48b-6f93b4d4bf8a> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1b3904f4-df8c-49ba-a234-3b406fe11fa9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/teat-status/1>
    a tern:Observation ;
    rdfs:label "teat status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Distended" ;
            rdf:value <https://linked.data.gov.au/def/nrm/36024777-d9d8-5ec9-9ee2-c91af3a56279>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/36024777-d9d8-5ec9-9ee2-c91af3a56279> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2ad2e5ec-ec5c-4541-a98c-85278e93ad67> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/vaginal-condition/1>
    a tern:Observation ;
    rdfs:label "vaginal condition" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Imperforate" ;
            rdf:value <https://linked.data.gov.au/def/nrm/d735d8a7-beb7-56b8-aab7-f0fa6daa11b5>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/d735d8a7-beb7-56b8-aab7-f0fa6daa11b5> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/56059af9-44ff-4722-9cfc-6af2c69a5ed5> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/vegetation-type/1>
    a tern:Observation ;
    rdfs:label "vegetation type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/4> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Scrubland" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c0a34405-508b-56f7-8011-991bfa87c5ec>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/c0a34405-508b-56f7-8011-991bfa87c5ec> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a9a73dfe-9165-4ad3-bccb-f1fa0a18e0be> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/plant-tissue-vouchering/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    rdfs:comment "Photos are taken for this sample" ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult <https://example.com/site/1/flora-vouchering/specimen/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-12-07T12:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/image/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "image 1" ;
    dcterms:identifier "image1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/observation-collection/1> ,
        <https://example.com/observation-collection/2> ;
    sosa:isResultOf <https://example.com/site/1/representative-media/1/sampling> ;
    sosa:isSampleOf
        <https://example.com/site/1/fauna-vouchering/specimen/1> ,
        <https://example.com/site/1/flora-vouchering/specimen/1> ;
    tern:featureType <https://example.com/non-created-feature-type/photo-video-audio/1> ;
    tern:hasAttribute [
            rdfs:label "media description" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ed32558e-8bd5-4809-8104-93d662432ef5> ;
            tern:hasSimpleValue "The photo is kind of blur." ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The photo is kind of blur."
                ]
        ] ;
.

<https://example.com/site/1/representative-media/1/sampling>
    a tern:Sampling ;
    rdfs:label "taking representative media" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:hasResult <https://example.com/site/1/image/1> ;
    sosa:madeBySampler <https://example.com/camera/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/6fd39a33-9c4f-469e-80a5-e76b5d5f04a6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-11T15:00:00+00:00"^^xsd:dateTime ;
.

<https://example.com/site/1/fauna-vouchering/specimen/1>
    a
        tern:FeatureOfInterest ,
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "fauna vouchering specimen 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "faunaMaterialSample1" ;
    sosa:isResultOf <https://example.com/fauna-tissue-vouchering/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/cd5cbdbb-07d9-4a5b-9b11-5ab9d6015be6> ;
    tern:hasAttribute
        [
            rdfs:label "preservation type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0f16c593-df2d-462f-ab01-87b4bc0a223f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585>
                ]
        ] ,
        [
            rdfs:label "voucher condition" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/010ee3c8-bfbe-47c5-adc8-068ca664173d> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/08f85f09-9f82-5b4e-8918-be7f2a317823> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Fresh (estimate 24 houts - <48 hours)" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/08f85f09-9f82-5b4e-8918-be7f2a317823>
                ]
        ] ,
        [
            rdfs:label "voucher type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Plant Tissue Voucher" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4>
                ]
        ] ;
.

<https://example.com/site/1/flora-vouchering/specimen/1>
    a
        tern:FeatureOfInterest ,
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "plant vouchering specimen 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "floraMaterialSample1" ;
    sosa:isResultOf <https://example.com/plant-tissue-vouchering/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/2> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2e122e23-881c-43fa-a921-a8745f016ceb> ;
    tern:hasAttribute
        [
            rdfs:label "preservation type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0f16c593-df2d-462f-ab01-87b4bc0a223f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Pressed and dried" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/0b9d4aa5-a3cf-5b6f-accf-60458395b585>
                ]
        ] ,
        [
            rdfs:label "voucher type" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/07216660-5082-428e-9f78-f1139d5c2b1f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Plant Tissue Voucher" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8b794be8-3b58-558b-a483-121f73cc56b4>
                ]
        ] ;
.

<https://example.com/feature-of-interest/3>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "habitat 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    dcterms:identifier "site001"^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    rdfs:comment "The weather is sunny."^^xsd:string ;
    prov:endedAtTime "2022-11-02T03:18:42.783000+00:00"^^xsd:dateTime ;
    prov:startedAtTime "2022-11-02T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "animal occurrence 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2361dea8-598c-4b6f-a641-2b98ff199e9e> ;
.

<https://example.com/feature-of-interest/4>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant community 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        tern-loc:Point ;
    wgs:lat -3.092085e+01 ;
    wgs:long 1.522424e+02 ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

---
sidebar_position: 2
---

# Soil Bulk Density mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Soil bulk density protocol](https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436) protocol in [Soil](https://linked.data.gov.au/def/nrm/6fd9d31f-9a77-4fc1-9eee-23ea8af32b95) module.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/soil-bulk-density-submodule/overview) for the feature type and value type information.

## Conceptual modelling

The Soil bulk density module records data about the site for the following feature types:

- soil specimen

These observations are recorded for each site during a site visit.

Collection of soil core samples at 0–10, 10–20, and 20–30 cm increments from the edge of the soil pit, sealing the core samples or storing them in zip lock bags, and post-field survey processing of soil core samples. Soil bulk density measures are collected so important soil parameters can be quantified, particularly carbon content.

### Diagram

The following diagram shows the Soil bulk density protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa&layers=1&nav=1&title=soil-soil-bulk-density-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa&layers=1&nav=1&title=soil-soil-bulk-density-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D11CYpwCS9wFTQlbUSKoY1gmBBJsqGWbJa%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Soil bulk density` protocol surveys:

- [OpenAPI docs for soil bulk density survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-bulk-density-survey/post%2Fsoil-bulk-density-surveys)

```json
{
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

<!-- #### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `start_date_time`

The `start_date_time` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date_time`

The `end_date_time` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
``` -->

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Soil bulk density measurements

The following is dummy data:

```json
{
  "fine_earth_bulk_density": "string",
  "gross_bulk_density": "string",
  "soil_bulk_density": "string",
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `fine_earth_bulk_density`

The `fine_earth_bulk_density` key maps to a `tern:Observation` with the observable property 'fine earth bulk density'.

#### `gross_bulk_density`

The `gross_bulk_density` key maps to a `tern:Observation` with the observable property 'gross bulk density'.

#### `soil_bulk_density`

The `soil_bulk_density` key maps to a `tern:Observation` with the observable property 'soil bulk density'.

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Soil - soil bulk density protocol` are in [Soil - Soil bulk density protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#soil_soil_bulk_density_protocol_conformance_class_requirements).

Validator is [Soil - soil bulk density protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-soil-bulk-density-protocol-shapes/shapes.ttl).

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

Save the [Soil shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/shapes.ttl) in a file named `soil-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Soil protocol**, run the following command to validate the data:

```bash
pyshacl -s soil-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Soil - soil bulk density protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-soil-bulk-density-protocol-shapes/shapes.ttl) in a file named `soil-bulk-density-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Soil - soil bulk density protocol**, run the following command to validate the data:

```bash
pyshacl -s soil-bulk-density-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [gross bulk density shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-soil-bulk-density-protocol-shapes/gross-bulk-density/shapes.ttl) in a file named `gross-bulk-density-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for gross bulk density in Soil - soil bulk density protocol**, run the following command to validate the data:

```bash
pyshacl -s gross-bulk-density-shapes.ttl -m -i rdfs -a -j -f human data.ttl
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
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil specimen" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/fine-earth-bulk-density/1> ,
        <https://example.com/observation/gross-bulk-density/1> ,
        <https://example.com/observation/soil-bulk-density/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/fine-earth-bulk-density/1>
    a tern:Observation ;
    rdfs:label "fine earth bulk density" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.56e+00 ;
            tern:unit <http://qudt.org/vocab/unit/GM-PER-CentiM3>
        ] ;
    sosa:hasSimpleResult 1.56e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/460784be-8ad5-4c32-b171-93d69984c0b9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/gross-bulk-density/1>
    a tern:Observation ;
    rdfs:label "gross bulk density" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.56e+00 ;
            tern:unit <http://qudt.org/vocab/unit/GM-PER-CentiM3>
        ] ;
    sosa:hasSimpleResult 1.56e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a344d029-4b47-455e-89d9-a1040877a5ce> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-bulk-density/1>
    a tern:Observation ;
    rdfs:label "soil bulk density" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.56e+00 ;
            tern:unit <http://qudt.org/vocab/unit/GM-PER-CentiM3>
        ] ;
    sosa:hasSimpleResult 1.56e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ec510708-9ac1-4c8a-bfe2-31ba5bb693da> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/d9e6739a-c2dd-4619-be43-1251449a6436> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:endedAtTime "2022-11-06T03:18:42.783000+00:00"^^xsd:dateTime ;
    prov:startedAtTime "2022-11-06T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
    tern:locationDescription "The weather is sunny."^^xsd:string ;
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

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        tern-loc:Point ;
    wgs:lat -3.092085e+01 ;
    wgs:long 1.522424e+02 ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "soil specimen 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/d738a3f9-9b00-4adf-9dc8-0577269b691d> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

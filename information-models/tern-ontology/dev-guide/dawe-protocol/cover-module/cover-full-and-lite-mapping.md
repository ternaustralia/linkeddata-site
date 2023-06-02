---
sidebar_position: 2
---

# Cover full and lite protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Cover](https://linked.data.gov.au/def/nrm/c3403517-fcc6-4389-9c09-f1e1ee8b0f3b) protocol.

Mentions of observable properties should refer to [full-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/cover-module/full-protocol/overview) and [lite-protocol/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/cover-module/lite-protocol/overview) for the feature type and value type information.

## Conceptual modelling

The Cover module records data about the site for the following feature types:

- plant occurrence
- land surface

These observations are recorded for each site during a site visit.

The Cover module involves the collection of quantitative, accurate and repeatable measures of vegetation and substrate cover within the plot, using the point-intercept method.

### Diagram

The following diagram show the Cover mapping. The orange nodes are things related to the plant occurrence feature type and the yellow nodes are things related to the land surface feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1bl7zq2xWibhnyqvAFFham3fIvyv23lpV&layers=1&nav=1&title=cover-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1bl7zq2xWibhnyqvAFFham3fIvyv23lpV%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1bl7zq2xWibhnyqvAFFham3fIvyv23lpV&layers=1&nav=1&title=cover-full-and-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1bl7zq2xWibhnyqvAFFham3fIvyv23lpV%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Cover` protocol surveys:

- [OpenAPI docs for cover](https://beta.core-api.paratoo.tern.org.au/documentation#/Cover-point-intercept-survey/post%2Fcover-point-intercept-surveys)

Survey data from Cover point intercept:

```json
{
  "protocol_variant": "lite",
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

<!-- #### `start_date_time`

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

#### `protocol_variant`

The `protocol_variant` key is protocol selection in the app, in TERN Ontology, it maps to the value(`tern:Method` or `tern:MethodCollection`) of property `sosa:usedProcedure`.

<!-- #### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
``` -->

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Cover point intercept point measurements

- [OpenAPI docs for cover point intercept point](https://beta.core-api.paratoo.tern.org.au/documentation#/Cover-point-intercept-point/post%2Fcover-point-intercept-points)

```json
{
  "point_number": 0,
  "soils_substrate": "BR",
  "cover_transect_start_point": "N1",
  "species_intercepts": [0],
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `point_number`

The `point_number` key maps to the attribute `point intercept number` in [Cover Attributes](https://linked.data.gov.au/def/nrm/08184439-7631-45b8-b3a1-0ed06d9c5566), and is linked to site by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/observation/1> a tern:Observation ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "12"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "12"^^xsd:string ;
        ] ;
    ] ;
```

#### `soils_substrate`

The `soils_substrate` key maps to a `tern:Observation` with the observable property 'substrate type'.

#### `cover_transect_start_point`

The `cover_transect_start_point` key maps to the property `tern:transectStartPoint` on the `tern:Transect` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/transect/456> a tern:Transect ;
    tern:transectStartPoint <https://example.com/site/1/geometry/1> .

<https://example.com/site/1/geometry/1> a tern-loc:Point ;
    rdfs:label "Position 1" ;
    wgs84:lat -34 ;
    wgs84:long 150.3 ;
    geosparql:asWKT "POINT(150.3 -34.0)"^^geosparql:wktLiteral ;
.
```

<!-- #### `cover_point_intercept_survey`

The `cover_point_intercept_survey` key maps to the `tern:SiteVisit` class. -->

#### `species_intercepts`

The `species_intercepts` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Cover point intercept - species intercepts measurements

- [OpenAPI docs for cover point intercept species intercepts](https://beta.core-api.paratoo.tern.org.au/documentation#/Cover-point-intercept-species-intercept/post%2Fcover-point-intercept-species-intercepts)

```json
{
  "height": 0,
  "in_canopy_sky": true,
  "floristics_voucher_full": 0,
  "floristics_voucher_lite": 0,
  "growth_form": "V",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `height`

The `height` key maps to a `tern:Observation` with the observable property 'uppermost height'.

#### `in_canopy_sky`

The `in_canopy_sky` key maps to a `tern:Observation` with the observable property 'in-canopy sky'.

#### `floristics_voucher_full` and `floristics_voucher_lite`

These 2 keys are protocol selection in the app, in TERN Ontology, they map to the value(`tern:Method` or `tern:MethodCollection`) of property `sosa:usedProcedure`.

#### `growth_form`

The `growth_form` key maps to a `tern:Observation` with the observable property 'growth form'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Cover full and lite protocol` are in [Cover - Full protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#cover_full_protocol_conformance_class_requirements) and [Cover - Lite protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#cover_lite_protocol_conformance_class_requirements).

Validators are in [Cover - Full protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/cover/cover-full-protocol-shapes/shapes.ttl) and [Cover - Lite protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/cover/cover-lite-protocol-shapes/shapes.ttl).

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

Save the [Cover shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/cover/shapes.ttl) in a file named `cover-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Cover protocol**, run the following command to validate the data:

```bash
pyshacl -s cover-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Cover - Full protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/cover/cover-full-protocol-shapes/shapes.ttl) in a file named `cover-full-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Cover - Full protocol**, run the following command to validate the data:

```bash
pyshacl -s cover-full-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [growth form shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/cover/cover-full-protocol-shapes/growth-form/shapes.ttl) in a file named `growth-form-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for growth form in Cover - Full protocol**, run the following command to validate the data:

```bash
pyshacl -s growth-form-shapes.ttl -m -i rdfs -a -j -f human data.ttl
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
PREFIX sf: <http://www.opengis.net/ont/sf#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/growth-form/1> ,
        <https://example.com/observation/in-canopy-sky/1> ,
        <https://example.com/observation/uppermost-height/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/576f634e-2706-4f18-b561-0636d4c007d0> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "12"^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "12"^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember <https://example.com/observation/substrate-type/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-11T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/576f634e-2706-4f18-b561-0636d4c007d0> ;
    tern:hasAttribute [
            rdfs:label "point intercept number" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
            tern:hasSimpleValue "12"^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "12"^^xsd:string
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-11T05:38:02"^^xsd:dateTime ;
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
            rdf:value "Pine"
        ] ;
    sosa:hasSimpleResult "Pine" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c3403517-fcc6-4389-9c09-f1e1ee8b0f3b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Fern" ;
            rdf:value <https://linked.data.gov.au/def/nrm/860d33aa-2b8b-51c4-aa39-641ef684a4c7>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/860d33aa-2b8b-51c4-aa39-641ef684a4c7> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c3403517-fcc6-4389-9c09-f1e1ee8b0f3b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/in-canopy-sky/1>
    a tern:Observation ;
    rdfs:label "in-canopy sky" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Boolean ,
                tern:Value ;
            rdf:value true
        ] ;
    sosa:hasSimpleResult true ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/85bdd25a-fa08-49de-9f0b-98895cb79aa6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c3403517-fcc6-4389-9c09-f1e1ee8b0f3b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/substrate-type/1>
    a tern:Observation ;
    rdfs:label "substrate type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Bare" ;
            rdf:value <https://linked.data.gov.au/def/nrm/08f21bd5-b4f1-5cc1-9c16-50e7b1676f5b>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/08f21bd5-b4f1-5cc1-9c16-50e7b1676f5b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/75f55bf0-6972-42ba-ad46-7e24f91e8f6a> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c3403517-fcc6-4389-9c09-f1e1ee8b0f3b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/uppermost-height/1>
    a tern:Observation ;
    rdfs:label "uppermost height" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.81e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 3.81e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/823263e6-4bc9-4c98-94de-74a509aef47c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/c3403517-fcc6-4389-9c09-f1e1ee8b0f3b> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/transect-geometry/1>
    a
        sf:Point ,
        tern-loc:Point ;
    rdfs:label "Transect start point" ;
    geo:asWKT "POINT(150.3 -34.0)"^^geo:wktLiteral ;
    wgs:lat -34 ;
    wgs:long 150.3 ;
.

<https://example.com/site/1/transect-geometry/2>
    a
        sf:Point ,
        tern-loc:Point ;
    rdfs:label "Transect end point" ;
    geo:asWKT "POINT(150.8 -34.5)"^^geo:wktLiteral ;
    wgs:lat -34.5 ;
    wgs:long 150.8 ;
.

<https://example.com/transect/1>
    a
        tern:FeatureOfInterest ,
        tern:Transect ;
    rdfs:label "Transect 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/de46fa49-d1c9-4bef-8462-d7ee5174e1e1> ;
    tern:transectDirection "East"^^xsd:string ;
    tern:transectEndPoint <https://example.com/site/1/transect-geometry/2> ;
    tern:transectStartPoint <https://example.com/site/1/transect-geometry/1> ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "land surface 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8282fb22-4135-415c-8ca2-317860d102fb> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "site001" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.492085e+01 ;
            wgs:long 1.502424e+02
        ] ;
    prov:endedAtTime "2022-11-02T03:18:42.783000+00:00"^^xsd:dateTime ;
    prov:startedAtTime "2022-11-02T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
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
    rdfs:label "plant occurrence 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/transect/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

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
  "start_date_time": "2022-12-15T05:45:24.392Z",
  "end_date_time": "2022-12-15T05:45:24.392Z",
  "protocol_variant": "lite",
  "surveyId": "string",
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

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
```

#### `protocol_variant`

The `protocol_variant` key is protocol selection in the app, not mapping to TERN Ontology.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping Cover point intercept point measurements

- [OpenAPI docs for cover point intercept point](https://beta.core-api.paratoo.tern.org.au/documentation#/Cover-point-intercept-point/post%2Fcover-point-intercept-points)

```json
{
  "point_number": 0,
  "soils_substrate": "BR",
  "cover_transect_start_point": "N1",
  "cover_point_intercept_survey": 0,
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

#### `cover_point_intercept_survey`

The `cover_point_intercept_survey` key maps to the `tern:SiteVisit` class.

#### `species_intercepts`

The `species_intercepts` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Cover point intercept point measurements

- [OpenAPI docs for cover point intercept species intercepts](https://beta.core-api.paratoo.tern.org.au/documentation#/Cover-point-intercept-species-intercept/post%2Fcover-point-intercept-species-intercepts)

```json
{
  "height": 0,
  "senescent": true,
  "in_canopy_sky": true,
  "floristics_voucher_full": 0,
  "floristics_voucher_lite": 0,
  "fractional_cover": "PV",
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

These 2 keys are protocol selection in the app, not mapping to TERN Ontology.

#### `growth_form`

The `growth_form` key maps to a `tern:Observation` with the observable property 'growth form'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix tern: <https://w3id.org/tern/ontologies/tern/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix void: <http://rdfs.org/ns/void#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix geo: <http://www.opengis.net/ont/geosparql#> .
@prefix wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#> .

<https://example.com/site/1>
    a tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/transect/1>
    a tern:Transect ;
    rdfs:label "Transect 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:transectStartPoint <https://example.com/site/1/transect-geometry/1> ;
    tern:transectDirection "East"^^xsd:string ;
.

<https://example.com/site/1/transect-geometry/1> a tern-loc:Point ;
    rdfs:label "Transect start point" ;
    wgs84:lat -34 ;
    wgs84:long 150.3 ;
    geosparql:asWKT "POINT(150.3 -34.0)"^^geosparql:wktLiteral ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "site001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z" ;
    prov:endedAtTime "2022-11-02T03:18:42.783Z" ;
    tern:hasSite <https://example.com/site/1> ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -34.920849^^xsd:double ;
        wgs:long 150.242400^^xsd:double ;
    ] ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "plant occurrence 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b311c0d3-4a1a-4932-a39c-f5cdc1afa611> ;
    tern:isSampleOf <https://example.com/transect/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/feature-of-interest/2>
    a tern:Sample ;
    rdfs:label "land surface 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/8282fb22-4135-415c-8ca2-317860d102fb> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on plant occurrence" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "12"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "12"^^xsd:string ;
        ] ;
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/576f634e-2706-4f18-b561-0636d4c007d0> ;
    sosa:hasMember <https://example.com/observation/field-species-name/1>,
        <https://example.com/observation/growth-form/1>,
        <https://example.com/observation/in-canopy-sky/1>,
        <https://example.com/observation/uppermost-height/1> ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on land surface" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-11T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:hasAttribute [
        rdfs:label "point intercept number" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/1080a165-ebfe-42d0-bae5-2acf90d59eb3> ;
        tern:hasSimpleValue "12"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "12"^^xsd:string ;
        ] ;
    ] ;
    tern:resultDateTime "2022-05-11T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/576f634e-2706-4f18-b561-0636d4c007d0> ;
    sosa:hasMember <https://example.com/observation/substrate-type/1> ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult "Pine" ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Pine" ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227> ;
.

<https://example.com/observation/growth-form/1>
    a tern:Observation ;
    rdfs:label "growth form" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5b669769-cfda-5e2f-a311-acc06cd1ff02> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Fern" ;
            rdf:value <https://linked.data.gov.au/def/nrm/5b669769-cfda-5e2f-a311-acc06cd1ff02> ;
        ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd1769b9-c475-4732-915c-9b890a8d5f65> ;
.

<https://example.com/observation/in-canopy-sky/1>
    a tern:Observation ;
    rdfs:label "in-canopy sky" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult True ;
    sosa:hasResult [
        a tern:Boolean ;
        rdf:value Ture ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/85bdd25a-fa08-49de-9f0b-98895cb79aa6> ;
.

<https://example.com/observation/uppermost-height/1>
    a tern:Observation ;
    rdfs:label "uppermost height" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 3.81^^xsd:float ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:hasSimpleResult 3.81^^xsd:float ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/823263e6-4bc9-4c98-94de-74a509aef47c> ;
.

<https://example.com/observation/substrate-type/1>
    a tern:Observation ;
    rdfs:label "substrate type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "Bare" ;
        rdf:value <https://linked.data.gov.au/def/nrm/856056f9-0588-5e50-9b6e-966beb136bf6> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/856056f9-0588-5e50-9b6e-966beb136bf6> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/75f55bf0-6972-42ba-ad46-7e24f91e8f6a> ;
.

```

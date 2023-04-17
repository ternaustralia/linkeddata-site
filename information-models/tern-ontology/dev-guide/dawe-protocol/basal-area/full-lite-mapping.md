# Full and Lite DBH protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to both the [Full DBH](https://linked.data.gov.au/def/nrm/5a00862b-a885-472e-8bee-561ec502653f) and [Lite DBH](https://linked.data.gov.au/def/nrm/cd83fb3e-d8d3-4502-a618-a0f3f8712b27) protocols.

Mentions of observable properties should refer to [full-dbh/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/basal-area/full-dbh/overview) or [lite-dbh/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/basal-area/lite-dbh/overview) for the feature type and value type information.

## Conceptual modelling

A site is established and a site visit is carried out to record observations and measurements.

A specific plant species is targeted where multiple observations are made on plant individuals.

The diameter at breast height (DBH) observation is made at a specific point of measurement on a tree. This point of measurement value is captured as an attribute on the observation. The plant status and the tree trunk type is also recorded as observations.

Depending on the tree trunk type of a tree, additional observations may be recorded. If the tree trunk type is 'buttress', then an additional diameter measurement is recorded 50 cm above the top of the buttress. If the tree trunk type is 'ellipse', then an additional diameter measurement at a 90 degree angle to the first diameter measurement is recorded.

If the tree trunk type of a tree is 'multi-stemmed', then additional measurements of the diameter are made for each stem. Each individual stem is a `tern:Sample` where they are related to the tree via a `sosa:isSampleOf` relationship.

The DBH measurements are used to derive the basal area for each tree and its stems. Each of the tree and stem basal area measurements are summed up to calculate the total stand basal area in the plant community.

### Diagram

Coloured in yellow are the conditional objects created to cater for trees with the trunk type buttress, ellipse or multi-stemmed.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL&layers=1&nav=1&title=basal-area-full-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL&layers=1&nav=1&title=basal-area-full-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL%26export%3Ddownload">View diagram in new tab<svg width="10" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>

## Survey data

Example data from source for full and lite DBH protocol surveys:

- [OpenAPI docs for Full DBH survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Basal-area-dbh-measure-survey-full/post%2Fbasal-area-dbh-measure-survey-fulls)
- [OpenAPI docs for Lite DBH survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Basal-area-dbh-measure-survey-lite/post%2Fbasal-area-dbh-measure-survey-lites)

```json
{
  "basal_dbh_instrument": "DIA",
  "surveyId": "string",
  "start_date": "2022-11-02T03:16:42.783Z",
  "end_date": "2022-11-02T03:16:42.783Z",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `surveyId`

Use this value along with the site ID to generate a site visit URI.

##### Example

```
https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456
```

#### `start_date`

The `start_date` key maps to the property `prov:startedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `end_date`

The `end_date` key maps to the property `prov:endedAtTime` on the `tern:SiteVisit` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/site-visit/456> a tern:SiteVisit ;
    prov:endedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `basal_dbh_instrument`

The `basal_dbh_instrument` key maps to the property `sosa:madeBySensor` on the `tern:Observation` class instance with the observable property 'diameter at breast height'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

### Mapping full and lite DBH tree measurements

- [OpenAPI docs for full and lite DBH tree measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Basal-area-dbh-measure-observation-tree/post%2Fbasal-area-dbh-measure-observation-trees)

```json
{
  "species": "string",
  "lut_basal_tree_status": "A",
  "point_of_measurement_metres": 0,
  "diameter_breast_height_centimetres": 0,
  "lut_basal_tree_trunk_type": "S",
  "diameter_breast_height_2_centimetres": 0,
  "ba_dbh_measure_obs_stems": [0],
  "basal_area_dbh_measure_survey_full": 0,
  "basal_area_dbh_measure_survey_lite": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit. Since majority of the properties on these observations share the same values (feature of interest, site visit, result and phenomenon time) they can be recorded as observation members of an observation collection.

The feature of interest for all the observations is a single tree modelled as a `tern:Sample` with the feature type as 'plant individual'.

#### `species`

The `species` key maps to a `tern:Observation` with the observable property 'field species name'.

#### `lut_basal_tree_status`

The `lut_basal_tree_status` key maps to a `tern:Observation` with the observable property 'plant status'.

#### `point_of_measurement`, `diameter_breast_height_centimetres`, `diameter_breast_height_2_centimetres` and `lut_basal_tree_trunk_type`

The `point_of_measurement` key maps to a [point of measurement](https://linked.data.gov.au/def/nrm/9faeafe6-0d01-41aa-b38b-a6b56eda0dda) `tern:Attribute` on the observation of 'diameter at breast height' for the key `diameter_breast_height_centimetres`.

The `diameter_breast_height_2_centimetres` key maps to a second observation if and only if the `lut_basal_tree_trunk_type` code is 'buttress' or 'ellipse'. The 'point of measurement' attribute on this observation also needs to be recorded. Following the protocol, the point of measurement value for buttress trees should be 50 cm higher than the original point of measurement value.

#### `ba_dbh_measure_obs_stems`

The `ba_dbh_measure_obs_stems` are primary keys to observation measurements made on stems of the current tree. They are modelled as `tern:Sample` individuals with a relation to the tree via the property `sosa:isSampleOf`.

See the [next section on stem measurements](#mapping-full-and-lite-dbh-stem-measurements) for more information.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping full and lite DBH stem measurements

- [OpenAPI docs for full and lite DBH stem measurements](https://beta.core-api.paratoo.tern.org.au/documentation#/Basal-area-dbh-measure-observation-stem/post%2Fbasal-area-dbh-measure-observation-stems)

```json
{
  "species": "string",
  "lut_basal_tree_status": "A",
  "point_of_measurement": 0,
  "diameter_breast_height": 0,
  "lut_basal_tree_trunk_type": "S",
  "diameter_breast_height_2": 0,
  "basal_area_dbh_measure_obs_tree": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

Refer to the tree measurements mapping [#mapping-full-and-lite-dbh-tree-measurements](#mapping-full-and-lite-dbh-tree-measurements) on how each keys with the same name in stems are mapped.

## Validation with SHACL
The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage are presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).


Encoded using the TERN Ontology and related controlled vocabularies.

```turtle
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/dbh/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/plant-status/1> ,
        <https://example.com/observation/tree-trunk-type/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/stand-basal-area/1>
    a tern:Observation ;
    rdfs:label "stand basal area" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    prov:wasInformedBy <https://example.com/observation/dbh/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.56e+01
        ] ;
    sosa:hasSimpleResult 2.56e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f437f23a-7965-4bae-9dc3-2aead06786ec> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Melaleuca citrolens"
        ] ;
    sosa:hasSimpleResult "Melaleuca citrolens" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/plant-status/1>
    a tern:Observation ;
    rdfs:label "plant status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Alive" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1a57c444-66a7-5746-bebc-2be757ee54c8>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1a57c444-66a7-5746-bebc-2be757ee54c8> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ddd0c631-bfdd-4b0f-88de-a5eb1a0181c6> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/tree-trunk-type/1>
    a tern:Observation ;
    rdfs:label "tree trunk type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "smooth" ;
            rdf:value <https://linked.data.gov.au/def/nrm/cf394183-2d9f-5c98-b0ef-a2d831061192>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/cf394183-2d9f-5c98-b0ef-a2d831061192> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3da2a8ca-c0a3-4761-8736-507255eeee68> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant community 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
.

<https://example.com/observation/dbh/1>
    a tern:Observation ;
    rdfs:label "diameter at breast height" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 4.3e+00 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 4.3e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6e1c8b97-3655-4a22-9647-02f2c756e789> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasAttribute [
            rdfs:label "point of measurement" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/9faeafe6-0d01-41aa-b38b-a6b56eda0dda> ;
            tern:hasSimpleValue 1.3e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 1.3e+00 ;
                    tern:unit <http://qudt.org/vocab/unit/M>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "tree 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/2> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/60d7edf8-98c6-43e9-841c-e176c334d270> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

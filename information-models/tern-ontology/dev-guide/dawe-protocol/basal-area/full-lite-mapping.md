# Full and Lite DBH protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to both the Full DBH and Lite DBH protocols.

Mentions of observable properties should refer to [full-dbh/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/basal-area/full-dbh/overview) or [lite-dbh/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/basal-area/lite-dbh/overview) for the feature type and value type information.

## Conceptual modelling

A site (aka. plot) is established and a site visit (aka. survey) is carried out to record observations and measurements.

A specific species population is targeted where multiple observations are made on plant individuals.

The diameter at breast height observation is made at a specific point of measurement on a tree. This point of measurement value is captured as an attribute on the observation.

Depending on the tree trunk type of a tree, additional observations may be recorded. If the tree trunk type is 'buttress', then an additional diameter measurement is recorded 50 cm above the top of the buttress. If the tree trunk type is 'ellipse', then an additional diameter measurement at a 90 degree angle to the first diameter measurement is recorded.

If the tree trunk type of a tree is 'multi-stemmed', then additional measurements of the diameter are made for each stem. Each individual stem is a `tern:Sample` where they are related to the tree via a `sosa:isSampleOf` relationship.

### Diagram

Coloured in yellow are the conditional objects created to cater for trees with the trunk type buttress, ellipse or multi-stemmed.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL&layers=1&nav=1&title=basal-area-full-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL&layers=1&nav=1&title=basal-area-full-lite-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1ehO_1Lxzj0v6gWat6tq_36QVzOzXC7iL%26export%3Ddownload">View diagram in new tab.</a>

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

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

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

#### `created_by` and `updated_by`

See [#created_by-and-updated_by](#created_by-and-updated_by).

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

<https://example.com/site/1>
    a tern:Site ;
    rdfs:label "Site 1" ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z" ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on tree" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    sosa:hasMember <https://example.com/observation/field-species-name/1>,
        <https://example.com/observation/tree-status/1>,
        <https://example.com/observation/dbh/1>,
        <https://example.com/observation/tree-trunk-type/1> ;
.

<https://example.com/feature-of-interest/1>
    a tern:Sample ;
    rdfs:label "tree 1" ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/60d7edf8-98c6-43e9-841c-e176c334d270> ;
    tern:isSampleOf <https://example.com/site/1> ;
    void:inDataset <https://example.com/dataset/1> ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:Text ;
        rdf:value "Melaleuca citrolens" ;
    ] ;
    sosa:hasSimpleResult "Melaleuca citrolens" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
.

<https://example.com/observation/plant-status/1>
    a tern:Observation ;
    rdfs:label "plant status" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/9667b324-6488-5e83-9528-0be628eb8907> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "alive" ;
        rdf:value <https://linked.data.gov.au/def/nrm/9667b324-6488-5e83-9528-0be628eb8907> ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e51ced21-4442-465d-8be9-8b5bba76d4d8> ;
.

<https://example.com/observation/dbh/1>
    a tern:Observation ;
    rdfs:label "diameter at breast height" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult 4.3 ;
    sosa:hasResult [
        a tern:Float ;
        rdf:value 4.3 ;
        tern:unit <http://qudt.org/vocab/unit/M> ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6e1c8b97-3655-4a22-9647-02f2c756e789> ;
    tern:hasAttribute [
        rdfs:label "point of measurement" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/9faeafe6-0d01-41aa-b38b-a6b56eda0dda> ;
        tern:hasSimpleValue 1.3 ;
        tern:hasValue [
            a tern:Float ;
            rdf:value 1.3 ;
            tern:unit <http://qudt.org/vocab/unit/M> ;
        ] ;
    ] ;
.

<https://example.com/observation/tree-trunk-type/1>
    a tern:Observation ;
    rdfs:label "tree trunk type" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/cf394183-2d9f-5c98-b0ef-a2d831061192> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "smooth" ;
        rdf:value <https://linked.data.gov.au/def/nrm/cf394183-2d9f-5c98-b0ef-a2d831061192> ;
    ] ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3da2a8ca-c0a3-4761-8736-507255eeee68> ;
.

```

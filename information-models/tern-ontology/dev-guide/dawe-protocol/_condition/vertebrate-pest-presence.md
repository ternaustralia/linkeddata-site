# Vertebrate Pest Presence Protocol

Example data from source:

```json
{
  "lut_condition_species": "foo",
  "lut_condition_vegeatation_health": "CH",
  "lut_condition_vertebrate_pest_type": "CAT",
  "leaf_litter_depth_mm": 0,
  "mistletoe_number": 0,
  "comment": "string",
  "point_number": 0,
  "canopy_health": 0,
  "lut_condition_growth_stage_shrub": "RC",
  "lut_condition_growth_stage_tree": "RC",
  "photo": [0],
  "condition_point_intercept_survey": 0,
  "created_by": 0,
  "updated_by": 0
}
```

Only the `lut_condition_vertebrate_pest_type` field is relevant to the vertebrate pest presence sub-protocol.

Below is an observation on the site where evidence of vertebrate pest presence is found.

```turtle
<https://example.com/observation/8810b579-4a15-4647-8ae2-a72467c73d54>
    a tern:Observation ;
    rdfs:label "vertebrate pest type" ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:phenomenonTime [
        a time:Instant ;
        time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp
    ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/bfcca277-85a8-476a-aeb1-315775bcd5f6> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasResult [
        a tern:IRI ;
        rdfs:label "pig" ;
        rdf:value <https://linked.data.gov.au/def/nrm/4f8cd0d7-7850-520e-8a42-78f68f6a1382> ;
    ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4f8cd0d7-7850-520e-8a42-78f68f6a1382> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/85d5f75c-776f-44a3-abe6-e71c695f1754> ;
.
```

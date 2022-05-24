# Plot Soil Description Protocol

Example data from source:

```json
{
  "start_date_time": "2022-05-20T02:02:59.913Z",
  "end_date_time": "2022-05-20T02:02:59.913Z",
  "surveyId": {},
  "plot_visit": 0,
  "slope_percent": 0,
  "slope_aspect": 0,
  "evaluation_means": "T",
  "slope_class": "LE",
  "morphological_type": "C",
  "inclination_of_slope_element": "X",
  "relief": "M",
  "modal_slope": "LE",
  "runoff": "0",
  "permeability": "1",
  "coarse_frag_abundance": "0",
  "coarse_frag_size": "1",
  "coarse_frag_shape": "n/a",
  "coarse_frag_lithology": "NA",
  "coarse_frag_strength": "VW",
  "coarse_frag_alteration": "F",
  "rock_outcrop_abundance": "0",
  "rock_outcrop_lithology": "NA",
  "surface_soil_condition": "C",
  "published_at": "2022-05-20T02:02:59.913Z",
  "created_by": 0,
  "updated_by": 0
}
```

Define the 'landform' of the site and make observations to it.

```turtle
<https://example.com/sampling/28c8a6b0-38e6-4aea-9b53-f6a8ec0013ea>
    a tern:Sampling ;
    rdfs:label "Sampling activity for landform" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    sosa:usedProcedure <https://linked.data.gov.au/def/test/dawe-cv/7818e122-6354-42e0-aeff-32dbab7baae4> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/03203943-47cf-4242-aa34-8a8af01f2d11> ;
.

<https://example.com/feature-of-interest/03203943-47cf-4242-aa34-8a8af01f2d11>
    a tern:Sample ;
    rdfs:label "landform" ;
.
```

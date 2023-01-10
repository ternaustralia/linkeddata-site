---
sidebar_position: 2
---

# Plot Soil Description protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot soil description protocol](https://linked.data.gov.au/def/nrm/7818e122-6354-42e0-aeff-32dbab7baae4) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/plot-soil-description/overview) for the feature type and value type information.

## Conceptual modelling

The Plot soil description module records data about the site for the following feature types:

- landform
- land surface
- land surface substrate
- land surface disturbance
- soil profile

These observations are recorded for each site during a site visit.

This module describes important aspects of the soil surface within the plot in accordance with the Australian Soil and Land Survey Handbook (The National Committee on Soil and Terrain 2009), including plot identification and location details, slope, landform element and pattern, erosion, microrelief, drainage, disturbance, and soil surface condition (when dry). Critical to describe, measure and sample the soil profile, and assign an Australian Soil Classification.

### Diagram

The following diagram shows the Plot Soil Description protocol mapping. Purple nodes are things related to 'land surface' feature type. Yellow nodes are things related to 'landform' feature type. Orange nodes are things related to 'land surface substrate' feature type. Green nodes are things related to 'soil profile' feature type. Blue nodes are things related to 'land surface disturbance' feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy&layers=1&nav=1&title=soil-plot-soil-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy&layers=1&nav=1&title=soil-plot-soil-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1jQw8u2jj8WCNfghg5XzTlofJieOMHPQy%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Plot Soil Description measurements

- [OpenAPI docs for plot soil description](https://beta.core-api.paratoo.tern.org.au/documentation#/Plot-soil-description-survey/post%2Fplot-soil-description-surveys)

```json
{
  "start_date_time": "2023-01-10T01:07:56.944Z",
  "end_date_time": "2023-01-10T01:07:56.944Z",
  "surveyId": "string",
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
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

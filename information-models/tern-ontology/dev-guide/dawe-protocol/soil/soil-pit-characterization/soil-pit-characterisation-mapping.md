---
sidebar_position: 2
---

# Soil pit characterisation protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Soil pit characterisation protocol](https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db) protocol.

Mentions of observable properties should refer to [overview](/information-models/tern-ontology/dev-guide/dawe-protocol/soil/soil-pit-characterization/overview) for the feature type and value type information.

## Conceptual modelling

The Soil pit characterisation module records data about the site for the following feature types:

- soil horizon
- soil specimen

These observations are recorded for each site during a site visit.

If a depth of 1 m+ cannot be achieved after three attempts, record what 'digging was Stopped by' (Appendix N) and the 'R horizon depth' in metres.

When record soil colours, assess and record matrix Colour, including the Hue, Value and Chroma using the Munsell Soils Color Charts (Munsell Color 2009), and Moisture status using the codes in [Soils moisture statuses codes](https://linked.data.gov.au/def/nrm/a1e434a8-3fbb-4323-a0ae-0e31308eba8b). Moisten the soil if it is dry. Dry colours may also be recorded.

### Diagram

The following diagram shows the Soil pit characterisation protocol mapping.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1zs3aNZHP63rAr-g_XTaXmMMtGG6dxPUG&layers=1&nav=1&title=soil-soil-pit-charaterization-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1zs3aNZHP63rAr-g_XTaXmMMtGG6dxPUG%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1zs3aNZHP63rAr-g_XTaXmMMtGG6dxPUG&layers=1&nav=1&title=soil-soil-pit-charaterization-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1zs3aNZHP63rAr-g_XTaXmMMtGG6dxPUG%26export%3Ddownload">View diagram in new tab.</a>

## Observations data

### Mapping Soil pit characterisation measurements

- [OpenAPI docs for soil pit characterisation](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-observation/post%2Fsoil-horizon-observations)

```json
{
  "soil_pit_characterisation_survey": 0,
  "horizon_detail": "O",
  "horizon_suffix": "b",
  "upper_depth": 0,
  "lower_depth": 0,
  "boundary_distinctness": "S",
  "boundary_shape": "S",
  "texture_grade": "CL",
  "texture_qualification": "-",
  "texture_modifier": "F",
  "colour_hue": "10R",
  "colour_value": "2",
  "colour_chroma": "1",
  "moisture_status": "M",
  "soil_strength": "0",
  "water_status": "D",
  "pan_type": "Z",
  "pan_cementation": "0",
  "pan_continuity": "C",
  "pan_structure": "V",
  "fabric_details": "E",
  "cutan_type": "Z",
  "cutan_abundance": "0",
  "cutan_distinctness": "F",
  "pH": 0,
  "electrical_conductivity": "string",
  "effervescence": "H",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `soil_pit_characterisation_survey`

The `soil_pit_characterisation_survey` key maps to the `tern:SiteVisit` class.

#### `horizon_detail`

The `horizon_detail` key maps to a `tern:Observation` with the observable property 'soil horizon'.

#### `horizon_suffix`

The `horizon_suffix` key maps to a `tern:Observation` with the observable property 'soil horizon suffix'.

#### `upper_depth`

The `upper_depth` key maps to a `tern:Observation` with the observable property 'soil horizon depth - upper'.

#### `lower_depth`

The `lower_depth` key maps to a `tern:Observation` with the observable property 'soil horizon depth - lower'.

#### `boundary_distinctness`

The `boundary_distinctness` key maps to a `tern:Observation` with the observable property 'horizon boundary distinctness'.

#### `boundary_shape`

The `boundary_shape` key maps to a `tern:Observation` with the observable property 'horizon boundary shape'.

#### `texture_grade`

The `texture_grade` key maps to a `tern:Observation` with the observable property 'soil texture grade'.

#### `texture_qualification`

The `texture_qualification` key maps to a `tern:Observation` with the observable property 'soil texture qualification'.

#### `texture_modifier`

The `texture_modifier` key maps to a `tern:Observation` with the observable property 'soil texture modifier'.

#### `colour_hue`, `colour_value`, `colour_chroma`

Keys `colour_hue`, `colour_value`, `colour_chroma` map to a `tern:Observation` with observable properties 'soil matrix dry color' and 'soil matrix wet color'.

#### `moisture_status`

The `moisture_status` key maps to a `tern:Observation` with the observable property 'soil moisture status'.

#### `soil_strength`

The `soil_strength` key maps to a `tern:Observation` with the observable property 'soil consisitency- strength of soil'.

#### `water_status`

The `water_status` key maps to a `tern:Observation` with the observable property 'soil consistency- water status'.

#### `pan_type`

The `pan_type` key maps to a `tern:Observation` with the observable property 'soil pan type'.

#### `pan_cementation`

The `pan_cementation` key maps to a `tern:Observation` with the observable property 'soil pan cementation'.

#### `pan_continuity`

The `pan_continuity` key maps to a `tern:Observation` with the observable property 'soil pan continuity'.

#### `pan_structure`

The `pan_structure` key maps to a `tern:Observation` with the observable property 'soil pan structure'.

#### `fabric_details`

The `fabric_details` key maps to a `tern:Observation` with the observable property 'soil fabric details'.

#### `cutan_type`

The `cutan_type` key maps to a `tern:Observation` with the observable property 'soil cutan type'.

#### `cutan_abundance`

The `cutan_abundance` key maps to a `tern:Observation` with the observable property 'soil cutan abundance'.

#### `cutan_distinctness`

The `cutan_distinctness` key maps to a `tern:Observation` with the observable property 'soil cutan distinctness'.

#### `pH`

The `pH` key maps to a `tern:Observation` with the observable property 'soil ph'.

#### `electrical_conductivity`

The `electrical_conductivity` key maps to a `tern:Observation` with the observable property 'soil electrical conductivity'.

#### `effervescence`

The `effervescence` key maps to a `tern:Observation` with the observable property 'soil effervescence'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Soil horizon coarse fragment measurements

- [OpenAPI docs for soil horizon coarse fragment](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-coarse-fragment/post%2Fsoil-horizon-coarse-fragments)

```json
{
  "coarse_frag_abundance": "0",
  "coarse_frag_size": "1",
  "coarse_frag_shape": "n/a",
  "lithology": "NA",
  "coarse_frag_strength": "VW",
  "coarse_frag_alteration": "F",
  "soil_horizon_observation": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `coarse_frag_abundance`

The `coarse_frag_abundance` key maps to a `tern:Observation` with the observable property 'coarse fragments abundance'.

#### `coarse_frag_size`

The `coarse_frag_size` key maps to a `tern:Observation` with the observable property 'coarse fragments size'.

#### `coarse_frag_shape`

The `coarse_frag_shape` key maps to a `tern:Observation` with the observable property 'coarse fragments shape'.

#### `coarse_frag_lithology`

The `coarse_frag_lithology` key maps to a `tern:Observation` with the observable property 'coarse fragments lithology'.

#### `coarse_frag_strength`

The `coarse_frag_strength` key maps to a `tern:Observation` with the observable property 'soil- coarse fragment strength'.

#### `coarse_frag_alteration`

The `coarse_frag_alteration` key maps to a `tern:Observation` with the observable property 'soil- coarse fragment alteration'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

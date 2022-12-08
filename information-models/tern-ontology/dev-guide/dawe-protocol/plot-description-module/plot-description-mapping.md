---
sidebar_position: 2
---

# Plot Description protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plot Description](https://linked.data.gov.au/def/nrm/1ff9e97c-3bdd-44c9-bdd3-401fa31c0b32) protocol.

Mentions of observable properties should refer to [plot-description/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/plot-description-module/overview) for the feature type and value type information.

## Conceptual modelling

The Plot Description module records data about the site for the following feature types:

- climate
- landform
- land surface
- plant community
- vegetation stratum

These observations are recorded for each site during a site visit.

A NVIS Level 5 description will be automatically generated based on entered vegetation information. The value of `structural formation` aligns with NVIS and is based on `growth form`, `height class`, and `cover`.

The value of `slope class` is automatically generated from a list of 8 values once `slope` is entered – this information can help determine `landform element` (generated based on `slope` (degrees) value).

### Diagram

The following diagram is colour-coded to show the related things by feature type. The orange nodes are things related to the landform feature type and the yellow nodes are things related to the land surface feature type. Blue is for the climate feature type and green is for the vegetation stratum feature type. Lastly, purple is for the plant community feature type.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1AHov37L7NVuER801aSH_L8Um2IGzsKVq&layers=1&nav=1&title=plot-description-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1AHov37L7NVuER801aSH_L8Um2IGzsKVq%26export%3Ddownload">View diagram in new tab.</a>

# Basal Wedge protocol mapping

Mentions of observable properties should refer to [basal-wedge/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/basal-area/basal-wedge/overview) for the feature type and value type information.

## Conceptual modelling

During a site visit to a site, the basal area is derived from a number of different observations carried out using the basal wedge method. Firstly, the target species for a population is selected. At a specific location within the site, a basal area sweep is performed using a basal wedge set at a specific _basal area factor_. Each tree may be a categorised as a _hit_ or a _borderline_. If the tree is not a hit, then it is ignored. The trees that were hits and borderlines are tallied up using a point system to calculate the basal area count.

To calculate the basal area of a site, the basal wedge method is used. The first step is to select the target species for the population. At a specific location within the site, a basal area sweep is performed using a basal wedge set at a specific basal area factor. During the sweep, each tree is categorised as a hit, a borderline, or is ignored. The trees that are hits or borderlines are tallied using a point system to calculate the basal area count.

The basal area count is used to calculate the mean basal area for each targeted species population. The stand basal area is calculated by summing up the mean basal area for each species population.

### Diagram

The diagram is colour-coded for legibility. The green nodes are samples/features-of-interest while the blue nodes are observation activities.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5&layers=1&nav=1&title=basal-area-basal-wedge-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5&layers=1&nav=1&title=basal-area-basal-wedge-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5%26export%3Ddownload">View diagram in new tab<svg width="10" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>

## Survey data

- [OpenAPI docs for Basal Wedge survey](https://core.vocabs.paratoo.tern.org.au/documentation#/Basal-wedge-survey/post%2Fbasal-wedge-surveys)

```json
{
  "data": {
    "surveyId": "string",
    "start_date": "2022-12-05T06:38:17.851Z",
    "end_date": "2022-12-05T06:38:17.851Z",
    "createdBy": 0,
    "updatedBy": 0
  }
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

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Observations data

- [OpenAPI docs for basal wedge](https://core.vocabs.paratoo.tern.org.au/documentation#/Basal-wedge-observation/post%2Fbasal-wedge-observations)

```json
{
  "data": {
    "lut_basal_sweep_sampling_point": "NW",
    "species": "string",
    "in_tree": 0,
    "borderline_tree": 0,
    "lut_basal_area_factor": "A",
    "basal_wedge_survey": 0,
    "createdBy": 0,
    "updatedBy": 0
  }
}
```

#### `lut_basal_sweep_sampling_point`

Each site has 9 sampling points for basal area using the basal wedge protocol. The `lut_basal_sweep_sampling_point` field indicates which location out of the 9 sampling points is being observed.

#### `species`

This is the targeted species recorded as a `tern:Observation` on the plant population.

#### `in_tree`

This may be a boolean value as to whether the tree is _in_ or not. If it is true, it is recorded as a `tern:Observation` on the plant individual.

#### `borderline_tree`

This may be a boolean value as to whether the tree is _borderline_ or not. If it is true, it is recorded as a `tern:Observation` on the plant individual.

#### `lut_basal_area_factor`

This is the basal area factor setting used on the basal wedge. It is recorded as a `tern:Attribute` of the `tern:Observation` that determines whether a tree is _in_ or _borderline_.

#### `created_by` and `updated_by`

If the keys `created_by` and `updated_by` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

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

### Mapping Soil horizon mottle measurements

- [OpenAPI docs for soil horizon mottle](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-mottle/post%2Fsoil-horizon-mottles)

```json
{
  "mottle_type": "M",
  "mottle_abundance": "0",
  "mottle_size": "1",
  "mottle_contrast": "F",
  "mottle_colour": "n/a",
  "mottle_boundary_distinctness": "S",
  "soil_horizon_observation": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `mottle_type`

The `mottle_type` key maps to a `tern:Observation` with the observable property 'soil mottle type'.

#### `mottle_abundance`

The `mottle_abundance` key maps to a `tern:Observation` with the observable property 'soil mottle abundance'.

#### `mottle_size`

The `mottle_size` key maps to a `tern:Observation` with the observable property 'soil mottle size'.

#### `mottle_contrast`

The `mottle_contrast` key maps to a `tern:Observation` with the observable property 'soil mottle contrast'.

#### `mottle_colour`

The `mottle_colour` key maps to a `tern:Observation` with the observable property 'soil mottle color'.

#### `mottle_boundary_distinctness`

The `mottle_boundary_distinctness` key maps to a `tern:Observation` with the observable property 'soil mottle boundary distinctness'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Soil horizon segregation measurements

- [OpenAPI docs for soil horizon segregation](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-segregation/post%2Fsoil-horizon-segregations)

```json
{
  "segregations_abundance": "0",
  "segregations_nature": "A",
  "segregations_form": "n/a",
  "segregations_size": "n/a",
  "segregation_strength": "1",
  "segregation_magnetic_attribute": "N",
  "soil_horizon_observation": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `segregation_abundance`

The `segregation_abundance` key maps to a `tern:Observation` with the observable property 'soil segregation abundance'.

#### `segregation_nature`

The `segregation_nature` key maps to a `tern:Observation` with the observable property 'soil segregation nature'.

#### `segregation_form`

The `segregation_form` key maps to a `tern:Observation` with the observable property 'soil segregation form'.

#### `segregation_size`

The `segregation_size` key maps to a `tern:Observation` with the observable property 'soil segregation size'.

#### `segregation_strength`

The `segregation_strength` key maps to a `tern:Observation` with the observable property 'soil segregation strength'.

#### `segregation_magnetic_attribute`

The `segregation_magnetic_attribute` key maps to a `tern:Observation` with the observable property 'soil segregation magnetic attributes'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Soil horizon structure measurements

- [OpenAPI docs for soil horizon structure](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-structure/post%2Fsoil-horizon-structures)

```json
{
  "structure_grade": "G",
  "structure_size": "1",
  "structure_type": "PL",
  "structure_compound_pedality": "1",
  "soil_horizon_observation": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `structure_grade`

The `structure_grade` key maps to a `tern:Observation` with the observable property 'soil structure grade'.

#### `structure_size`

The `structure_size` key maps to a `tern:Observation` with the observable property 'soil structure size'.

#### `structure_type`

The `structure_type` key maps to a `tern:Observation` with the observable property 'soil structure type'.

#### `structure_compound_pedality`

The `structure_compound_pedality` key maps to a `tern:Observation` with the observable property 'soil compound pedality'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Mapping Soil horizon void measurements

- [OpenAPI docs for soil horizon void](https://beta.core-api.paratoo.tern.org.au/documentation#/Soil-horizon-void/post%2Fsoil-horizon-voids)

```json
{
  "void_crack": "1",
  "fine_macropore_abundance": "0",
  "medium_macropore_abundance": "0",
  "macropore_diameter": "1",
  "soil_horizon_observation": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data are observations recorded during a site visit.

#### `void_crack`

The `void_crack` key maps to a `tern:Observation` with the observable property 'soil voids cracks'.

#### `fine_macropore_abundance`

The `fine_macropore_abundance` key maps to a `tern:Observation` with the observable property 'soil voids fine macropore abundance'.

#### `medium_macropore_abundance`

The `medium_macropore_abundance` key maps to a `tern:Observation` with the observable property 'soil voids coarse macropore abundance'.

#### `macropore_diameter`

The `macropore_diameter` key maps to a `tern:Observation` with the observable property 'mean macropore diameter'.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organisations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Soil - soil pit characterisation protocol` are in [Soil - Soil pit characterization protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#soil_soil_pit_characterization_protocol_conformance_class_requirements).

Validator is [Soil - soil pit characterisation protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-soil-pit-characterization-protocol-shapes/shapes.ttl).

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

Save the [Soil shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/shapes.ttl) in a file named `soil-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Soil protocol**, run the following command to validate the data:

```bash
pyshacl -s soil-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Soil - soil pit characterisation protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-soil-pit-characterization-protocol-shapes/shapes.ttl) in a file named `soil-pit-characterisation-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Soil - soil pit characterisation protocol**, run the following command to validate the data:

```bash
pyshacl -s soil-pit-characterisation-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [soil ph shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/soil/soil-soil-pit-characterization-protocol-shapes/soil-ph/shapes.ttl) in a file named `soil-ph-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for soil ph in Soil pit characterisation protocol**, run the following command to validate the data:

```bash
pyshacl -s soil-ph-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <https://schema.org/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX tern-loc: <https://w3id.org/tern/ontologies/loc/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/digging-soil-pits/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    prov:wasAssociatedWith <https://example.com/agent/1> ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/2> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasAttribute
        [
            rdfs:label "soil pit comments" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5e49d84f-eb74-420a-9bee-afedcae264ea> ;
            tern:hasSimpleValue "The depth is 1.5m." ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The depth is 1.5m."
                ]
        ] ,
        [
            rdfs:label "type of soil observation" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/dcebbffe-bd0b-461f-8b6d-cc43a64248b6> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/87e0e0a3-b7f5-573e-ace6-0dc0d0e4f6a2> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Soil pit" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/87e0e0a3-b7f5-573e-ace6-0dc0d0e4f6a2>
                ]
        ] ;
    tern:resultDateTime "2022-11-05T03:18:42.783000+00:00"^^xsd:dateTime ;
.

<https://example.com/observation-collection/1>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil subsite (soil pits)" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember
        <https://example.com/observation/asc-family/1> ,
        <https://example.com/observation/asc-great-group/1> ,
        <https://example.com/observation/asc-order/1> ,
        <https://example.com/observation/asc-subgroup/1> ,
        <https://example.com/observation/asc-suborder/1> ,
        <https://example.com/observation/soil-pit-depth/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation-collection/2>
    a tern:ObservationCollection ;
    rdfs:label "observations on soil horizon" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasMember
        <https://example.com/observation/coarse-fragments-abundance/1> ,
        <https://example.com/observation/coarse-fragments-lithology/1> ,
        <https://example.com/observation/coarse-fragments-shape/1> ,
        <https://example.com/observation/coarse-fragments-size/1> ,
        <https://example.com/observation/horizon-boundary-distinctness/1> ,
        <https://example.com/observation/horizon-boundary-shape/1> ,
        <https://example.com/observation/mean-macropore-diameter/1> ,
        <https://example.com/observation/r-horizon-depth/1> ,
        <https://example.com/observation/soil-coarse-fragment-alteration/1> ,
        <https://example.com/observation/soil-coarse-fragment-strength/1> ,
        <https://example.com/observation/soil-compound-pedality/1> ,
        <https://example.com/observation/soil-consistency-strength-of-soil/1> ,
        <https://example.com/observation/soil-consistency-water-status/1> ,
        <https://example.com/observation/soil-cutan-abundance/1> ,
        <https://example.com/observation/soil-cutan-distinctness/1> ,
        <https://example.com/observation/soil-cutan-type/1> ,
        <https://example.com/observation/soil-dispersion-score/1> ,
        <https://example.com/observation/soil-effervescence/1> ,
        <https://example.com/observation/soil-electrical-conductivity/1> ,
        <https://example.com/observation/soil-fabric-details/1> ,
        <https://example.com/observation/soil-horizon-depth-lower/1> ,
        <https://example.com/observation/soil-horizon-depth-upper/1> ,
        <https://example.com/observation/soil-horizon-suffix/1> ,
        <https://example.com/observation/soil-horizon/1> ,
        <https://example.com/observation/soil-matrix-dry-color/1> ,
        <https://example.com/observation/soil-matrix-wet-color/1> ,
        <https://example.com/observation/soil-moisture-status/1> ,
        <https://example.com/observation/soil-mottle-abundance/1> ,
        <https://example.com/observation/soil-mottle-boundary-distinctness/1> ,
        <https://example.com/observation/soil-mottle-color/1> ,
        <https://example.com/observation/soil-mottle-contrast/1> ,
        <https://example.com/observation/soil-mottle-size/1> ,
        <https://example.com/observation/soil-mottle-type/1> ,
        <https://example.com/observation/soil-pan-cementation/1> ,
        <https://example.com/observation/soil-pan-continuity/1> ,
        <https://example.com/observation/soil-pan-structure/1> ,
        <https://example.com/observation/soil-pan-type/1> ,
        <https://example.com/observation/soil-ph/1> ,
        <https://example.com/observation/soil-segregation-abundance/1> ,
        <https://example.com/observation/soil-segregation-form/1> ,
        <https://example.com/observation/soil-segregation-magnetic-attributes/1> ,
        <https://example.com/observation/soil-segregation-nature/1> ,
        <https://example.com/observation/soil-segregation-size/1> ,
        <https://example.com/observation/soil-segregation-strength/1> ,
        <https://example.com/observation/soil-slaking-score/1> ,
        <https://example.com/observation/soil-structure-grade/1> ,
        <https://example.com/observation/soil-structure-size/1> ,
        <https://example.com/observation/soil-structure-type/1> ,
        <https://example.com/observation/soil-texture-grade/1> ,
        <https://example.com/observation/soil-texture-modifier/1> ,
        <https://example.com/observation/soil-texture-qualification/1> ,
        <https://example.com/observation/soil-voids-coarse-macropore-abundance/1> ,
        <https://example.com/observation/soil-voids-cracks/1> ,
        <https://example.com/observation/soil-voids-fine-macropore-abundance/1> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-11-05T05:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-11-05T05:38:02"^^xsd:dateTime ;
.

<https://example.com/soil-sample-collection/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    prov:wasAssociatedWith <https://example.com/agent/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult <https://example.com/site/1/soil/specimen/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-12-07T10:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/asc-family/1>
    a tern:Observation ;
    rdfs:label "asc family" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "B Horizon Maxium Texture" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0af99c38-488a-5a30-b975-a8f4b90189d4>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0af99c38-488a-5a30-b975-a8f4b90189d4> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/02ae5760-c028-460a-837a-d1e3d997e744> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasAttribute [
            rdfs:label "australian soil classification- confidence level" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/05276066-6ba8-4afa-8f37-caf7eafa0259> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "1" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
                    skos:definition "All necessary analytical and/or morphological data are available for the profile being classified."
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/asc-great-group/1>
    a tern:Observation ;
    rdfs:label "asc great group" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Episodic-Endocalcareous" ;
            rdf:value <https://linked.data.gov.au/def/nrm/008401fd-1b02-57a9-8490-f8b6c393e73c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/008401fd-1b02-57a9-8490-f8b6c393e73c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8ac01d1e-8ad1-4832-98bd-170a89efca33> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasAttribute [
            rdfs:label "australian soil classification- confidence level" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/05276066-6ba8-4afa-8f37-caf7eafa0259> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "1" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
                    skos:definition "All necessary analytical and/or morphological data are available for the profile being classified."
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/asc-order/1>
    a tern:Observation ;
    rdfs:label "australian soil classification- order" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Podosols" ;
            rdf:value <https://linked.data.gov.au/def/nrm/068b8a56-1f6c-5746-b29d-62b4def376dc>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/068b8a56-1f6c-5746-b29d-62b4def376dc> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1b7d133f-4d43-47d7-a6c5-8a98f505675e> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasAttribute [
            rdfs:label "australian soil classification- confidence level" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/05276066-6ba8-4afa-8f37-caf7eafa0259> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "1" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
                    skos:definition "All necessary analytical and/or morphological data are available for the profile being classified."
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/asc-subgroup/1>
    a tern:Observation ;
    rdfs:label "asc subgroup" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Episodic-Endocalcareous" ;
            rdf:value <https://linked.data.gov.au/def/nrm/008401fd-1b02-57a9-8490-f8b6c393e73c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/008401fd-1b02-57a9-8490-f8b6c393e73c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cd334597-fedc-40cd-86e4-71295d8a222f> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasAttribute [
            rdfs:label "australian soil classification- confidence level" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/05276066-6ba8-4afa-8f37-caf7eafa0259> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "1" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
                    skos:definition "All necessary analytical and/or morphological data are available for the profile being classified."
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/asc-suborder/1>
    a tern:Observation ;
    rdfs:label "asc suborder" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Episodic-Endocalcareous" ;
            rdf:value <https://linked.data.gov.au/def/nrm/008401fd-1b02-57a9-8490-f8b6c393e73c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/008401fd-1b02-57a9-8490-f8b6c393e73c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/856d1030-f3db-4347-9c56-05d576ddcecd> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasAttribute [
            rdfs:label "australian soil classification- confidence level" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/05276066-6ba8-4afa-8f37-caf7eafa0259> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "1" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/fe6067f3-a3cc-57e0-93aa-07fd49c875c8> ;
                    skos:definition "All necessary analytical and/or morphological data are available for the profile being classified."
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-fragments-abundance/1>
    a tern:Observation ;
    rdfs:label "coarse fragments abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "No coarse fragments" ;
            rdf:value <https://linked.data.gov.au/def/nrm/31da543c-1e37-5e6a-900f-e98f144e2915>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/31da543c-1e37-5e6a-900f-e98f144e2915> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b3dd4df5-589b-476e-8e9e-0af6a7155759> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-fragments-lithology/1>
    a tern:Observation ;
    rdfs:label "coarse fragments lithology" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "None Apparent" ;
            rdf:value <https://linked.data.gov.au/def/nrm/027e370b-cd03-5ed3-ab3e-dff1638582ad>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/027e370b-cd03-5ed3-ab3e-dff1638582ad> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4062f093-424b-441e-86fc-648d820ae1fb> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-fragments-shape/1>
    a tern:Observation ;
    rdfs:label "coarse fragments shape" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/119a820f-5a03-5cd9-a64f-6457ca8a62a7>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/119a820f-5a03-5cd9-a64f-6457ca8a62a7> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/d83560e6-0356-446e-a8b5-e64b82e3c362> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/coarse-fragments-size/1>
    a tern:Observation ;
    rdfs:label "coarse fragments size" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Medium gravelly or medium pebbles (6-20mm)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1c45fc37-01b6-5537-a762-29b1edbd4236>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1c45fc37-01b6-5537-a762-29b1edbd4236> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/92ae6036-50a8-446c-8df8-573860011b79> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/horizon-boundary-distinctness/1>
    a tern:Observation ;
    rdfs:label "horizon boundary distinctness" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Clear (20-50mm)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/09d19fbc-263b-5363-80cb-020a6fa6d721>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/09d19fbc-263b-5363-80cb-020a6fa6d721> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/181f2d40-8cb7-4b0e-83cb-90ca77b6327f> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/horizon-boundary-shape/1>
    a tern:Observation ;
    rdfs:label "horizon boundary shape" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Tongued" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2da7ccbc-49a7-5147-89c9-c9dc87f58dfb>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2da7ccbc-49a7-5147-89c9-c9dc87f58dfb> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ee03aeec-28ef-4910-94af-338a981bb40d> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/mean-macropore-diameter/1>
    a tern:Observation ;
    rdfs:label "mean macropore diameter" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Coarse" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0e3fa1b5-06e1-557e-9bbd-6615f50fe52b>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0e3fa1b5-06e1-557e-9bbd-6615f50fe52b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/796022f7-ccba-419a-8f70-020ee9e8e3f8> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/r-horizon-depth/1>
    a tern:Observation ;
    rdfs:label "r horizon depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 8.8e-01 ;
            tern:unit <http://qudt.org/vocab/unit/M>
        ] ;
    sosa:hasSimpleResult 8.8e-01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/ee463caf-8310-49be-82f7-12ef1cd11d3a> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-coarse-fragment-alteration/1>
    a tern:Observation ;
    rdfs:label "soil- coarse fragment alteration" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Other" ;
            rdf:value <https://linked.data.gov.au/def/nrm/05bf64f4-0b39-5580-a3a4-9b5fedbf6c18>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/05bf64f4-0b39-5580-a3a4-9b5fedbf6c18> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/e38d6585-30f4-4a50-bb3f-f9481ce9c595> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-coarse-fragment-strength/1>
    a tern:Observation ;
    rdfs:label "soil- coarse fragment strength" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Weak rock (25-50 MPa)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/5f60a81b-891d-595f-9f4b-ce7d53384188>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/5f60a81b-891d-595f-9f4b-ce7d53384188> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7739f6d5-06dd-42da-82ae-763fd62ff0f0> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-compound-pedality/1>
    a tern:Observation ;
    rdfs:label "soil compound pedality" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Next size peds, ... and further, if required, to the primary ped." ;
            rdf:value <https://linked.data.gov.au/def/nrm/1a87385a-954f-590d-8549-05d73808ce00>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1a87385a-954f-590d-8549-05d73808ce00> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/180f3ff5-a3ea-4b85-a947-f5a14156e833> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-consistency-strength-of-soil/1>
    a tern:Observation ;
    rdfs:label "soil consistency- strength of soil" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Weak" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1064ce4a-fd1c-53cc-bc1c-1a6dc67b1917>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1064ce4a-fd1c-53cc-bc1c-1a6dc67b1917> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/6b2ba4eb-89d1-46bd-a845-f0b32d129806> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-consistency-water-status/1>
    a tern:Observation ;
    rdfs:label "soil consistency- water status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Moist" ;
            rdf:value <https://linked.data.gov.au/def/nrm/33485261-3dac-5c6e-b20e-337a7a85cb49>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/33485261-3dac-5c6e-b20e-337a7a85cb49> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/74281a72-db08-4928-83a9-956187e06528> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-cutan-abundance/1>
    a tern:Observation ;
    rdfs:label "soil cutan abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "No cutans" ;
            rdf:value <https://linked.data.gov.au/def/nrm/43e40e62-32ca-55b9-ad76-cb142a4a48f2>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/43e40e62-32ca-55b9-ad76-cb142a4a48f2> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/90dc7158-cc88-45ba-ad74-be80321e0344> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-cutan-distinctness/1>
    a tern:Observation ;
    rdfs:label "soil cutan distinctness" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Faint" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0463a57d-2d81-55e2-861b-1abab8d83ada>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0463a57d-2d81-55e2-861b-1abab8d83ada> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7cd4d597-be78-4c0e-b2b2-7a1206870974> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-cutan-type/1>
    a tern:Observation ;
    rdfs:label "soil cutan type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Other cutans" ;
            rdf:value <https://linked.data.gov.au/def/nrm/14e5ed8b-113f-5d3d-b201-ae8353afe06f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/14e5ed8b-113f-5d3d-b201-ae8353afe06f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/786d4846-5b75-4b11-aba0-71fa40fd180a> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-dispersion-score/1>
    a tern:Observation ;
    rdfs:label "soil dispersion score" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Complete dispersion after 10 minutes" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2925c15c-dc00-5320-8f71-543b259a3a8c>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2925c15c-dc00-5320-8f71-543b259a3a8c> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1a8ca840-af43-41f2-bc69-965894bccd1a> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-effervescence/1>
    a tern:Observation ;
    rdfs:label "soil effervescence" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4b4da93d-b05b-5516-90ea-77904020f592>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4b4da93d-b05b-5516-90ea-77904020f592> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/bfe1e9d6-4040-45c1-a2a9-bcb634b745ac> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-electrical-conductivity/1>
    a tern:Observation ;
    rdfs:label "soil electrical conductivity" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.381e+01 ;
            tern:unit <http://qudt.org/vocab/unit/S-PER-M>
        ] ;
    sosa:hasSimpleResult 3.381e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/22815fee-434e-4e21-b85f-8005a669a865> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-fabric-details/1>
    a tern:Observation ;
    rdfs:label "soil fabric details" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Earthy" ;
            rdf:value <https://linked.data.gov.au/def/nrm/324dcb74-6c36-5891-9fc3-ca99ecf4828e>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/324dcb74-6c36-5891-9fc3-ca99ecf4828e> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/4a2a4fda-e1b8-436b-bd10-b3616de53ea9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-horizon-depth-lower/1>
    a tern:Observation ;
    rdfs:label "soil horizon depth - lower" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 3.381e+01 ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult 3.381e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/66f227c3-6267-4068-9493-dfd909592aaf> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-horizon-depth-upper/1>
    a tern:Observation ;
    rdfs:label "soil horizon depth - upper" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.222e+01 ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult 2.222e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/3b693f41-50b2-4469-bdbb-3b5b877fa2a9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-horizon-suffix/1>
    a tern:Observation ;
    rdfs:label "soil horizon suffix" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "s" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2d113077-d092-5317-a4b4-bd7385411c7f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2d113077-d092-5317-a4b4-bd7385411c7f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/224075e9-0998-4cac-95c4-babe5b63e3bf> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-horizon/1>
    a tern:Observation ;
    rdfs:label "soil horizon" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "A" ;
            rdf:value <https://linked.data.gov.au/def/nrm/06d28ee7-3dbc-505a-981b-2c4df4b55a42>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/06d28ee7-3dbc-505a-981b-2c4df4b55a42> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/7761c9df-0ce5-4de6-9c92-f1a8965b9481> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-matrix-dry-color/1>
    a tern:Observation ;
    rdfs:label "soil matrix dry color" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Khaki"^^xsd:string
        ] ;
    sosa:hasSimpleResult "Khaki"^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2a5c4ab0-124b-4430-a612-e069173bc82a> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-matrix-wet-color/1>
    a tern:Observation ;
    rdfs:label "soil matrix wet color" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "dark Khaki"^^xsd:string
        ] ;
    sosa:hasSimpleResult "dark Khaki"^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/bdc0806b-acdd-402d-a1c1-6b9618f98401> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-moisture-status/1>
    a tern:Observation ;
    rdfs:label "soil moisture status" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Moist" ;
            rdf:value <https://linked.data.gov.au/def/nrm/29be81d5-2df2-59c5-9e18-e4a2937b9ef0>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/29be81d5-2df2-59c5-9e18-e4a2937b9ef0> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/759b8562-b416-4fdc-924e-b55288018286> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-mottle-abundance/1>
    a tern:Observation ;
    rdfs:label "soil mottle abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Collected" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0033bb3d-fd5a-51eb-ba4b-8c249430aa6d>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0033bb3d-fd5a-51eb-ba4b-8c249430aa6d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/049cd754-cdc4-46e3-868f-fefa258522c9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-mottle-boundary-distinctness/1>
    a tern:Observation ;
    rdfs:label "soil mottle boundary distinctness" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Clear" ;
            rdf:value <https://linked.data.gov.au/def/nrm/34393ac0-af5f-53a2-8d24-ddd8a5dde281>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/34393ac0-af5f-53a2-8d24-ddd8a5dde281> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8861378e-8012-4ce4-932b-ed9b3d25de61> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-mottle-color/1>
    a tern:Observation ;
    rdfs:label "soil mottle color" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Red" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0e4c7101-cc8e-512e-ac54-44a10399c64d>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0e4c7101-cc8e-512e-ac54-44a10399c64d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a0b98f1c-ebcb-4a06-b5bc-919de1e02331> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-mottle-contrast/1>
    a tern:Observation ;
    rdfs:label "soil mottle contrast" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Prominent" ;
            rdf:value <https://linked.data.gov.au/def/nrm/7fd401b2-db8b-5eae-b653-9397792e26fd>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/7fd401b2-db8b-5eae-b653-9397792e26fd> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/922aa129-61d2-499e-9f2b-d57f3617737c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-mottle-size/1>
    a tern:Observation ;
    rdfs:label "soil mottle size" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Fine (<5mm)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1db4c94d-5db3-5835-9c6f-a1bd1bc52f09>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1db4c94d-5db3-5835-9c6f-a1bd1bc52f09> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd220b97-75b8-4d73-af57-793e431459b6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-mottle-type/1>
    a tern:Observation ;
    rdfs:label "soil mottle type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Colour patterns due to mechanical mixing of soil material from other horizons (e.g. inclusions of B horizon material in Ap horizons)." ;
            rdf:value <https://linked.data.gov.au/def/nrm/0eaade24-2a3b-5f2a-951e-41ab3f03ef64>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0eaade24-2a3b-5f2a-951e-41ab3f03ef64> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/79df1f41-1a8e-44af-8362-87ac7944cfc3> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-pan-cementation/1>
    a tern:Observation ;
    rdfs:label "soil pan cementation" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Weakly cemented" ;
            rdf:value <https://linked.data.gov.au/def/nrm/04eca36c-5d44-547e-ac33-df0a9a8152aa>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/04eca36c-5d44-547e-ac33-df0a9a8152aa> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/50baa5cb-43e1-465f-a842-0cf598576eb9> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-pan-continuity/1>
    a tern:Observation ;
    rdfs:label "soil pan continuity" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Broken" ;
            rdf:value <https://linked.data.gov.au/def/nrm/2948ce8d-d606-50d0-b161-3933e5f9f240>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/2948ce8d-d606-50d0-b161-3933e5f9f240> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/1c64a9a4-aee6-492a-a7cd-a375c2d1da27> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-pan-structure/1>
    a tern:Observation ;
    rdfs:label "soil pan structure" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Concretionary" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1ac4c2a2-5766-5f8c-af83-ede59025d5d4>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1ac4c2a2-5766-5f8c-af83-ede59025d5d4> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/151ce1f3-9ff5-456c-b780-806f705d97c6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-pan-type/1>
    a tern:Observation ;
    rdfs:label "soil pan type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Zero or no pan" ;
            rdf:value <https://linked.data.gov.au/def/nrm/04241797-7737-5069-9d0b-284203e69a61>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/04241797-7737-5069-9d0b-284203e69a61> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/084ba6fb-0cfd-48a1-bf00-e91c9bc0cea0> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-ph/1>
    a tern:Observation ;
    rdfs:label "soil ph" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 7e+00 ;
            tern:unit <http://qudt.org/vocab/unit/PH>
        ] ;
    sosa:hasSimpleResult 7e+00 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f8993f1e-b4d8-47b8-acdd-a74dd84e845e> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-pit-depth/1>
    a tern:Observation ;
    rdfs:label "soil pit depth" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.0112e+02 ;
            tern:unit <http://qudt.org/vocab/unit/CentiM>
        ] ;
    sosa:hasSimpleResult 1.0112e+02 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/cc960a7d-33a1-446a-85dc-8d1f8fda9996> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:hasAttribute [
            rdfs:label "digging stopped by" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5cb6df41-5411-44b7-b70f-0209ee91cf06> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/199e72de-f835-5eea-b0cb-f7b13c2e3d0b> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Hard pan" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/199e72de-f835-5eea-b0cb-f7b13c2e3d0b>
                ]
        ] ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-segregation-abundance/1>
    a tern:Observation ;
    rdfs:label "soil segregation abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Few (2-10%)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/22d971d6-9a1d-5f2d-ba8b-4f9ea977cb2f>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/22d971d6-9a1d-5f2d-ba8b-4f9ea977cb2f> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/b23d0935-6d2c-4657-a416-1e9f61761bad> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-segregation-form/1>
    a tern:Observation ;
    rdfs:label "soil segregation form" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Laminae" ;
            rdf:value <https://linked.data.gov.au/def/nrm/137d6fcc-e269-523f-9347-70bb227414e7>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/137d6fcc-e269-523f-9347-70bb227414e7> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/898c9bd8-ae04-4917-94b9-75725c050850> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-segregation-magnetic-attributes/1>
    a tern:Observation ;
    rdfs:label "soil segregation magnetic attributes" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Non-magnetic" ;
            rdf:value <https://linked.data.gov.au/def/nrm/68450df8-26e6-5fec-9829-77d768d217de>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/68450df8-26e6-5fec-9829-77d768d217de> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/764d2097-c55e-46c4-a64b-2bc2204c22af> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-segregation-nature/1>
    a tern:Observation ;
    rdfs:label "soil segregation nature" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Calcareous (carbonate)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0796dc68-579b-5522-b2e2-1517ae4fb322>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0796dc68-579b-5522-b2e2-1517ae4fb322> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/2884455e-8016-44e9-8b18-5f219c89bd26> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-segregation-size/1>
    a tern:Observation ;
    rdfs:label "soil segregation size" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Medium (2-6mm)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/6ad463af-c4ab-54dd-97cc-66a8988552a8>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/6ad463af-c4ab-54dd-97cc-66a8988552a8> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/958da592-ff9b-4110-92f1-c82fe0472de1> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-segregation-strength/1>
    a tern:Observation ;
    rdfs:label "soil segregation strength" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Weak" ;
            rdf:value <https://linked.data.gov.au/def/nrm/82158132-92f7-5701-a473-d34eef7bb132>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/82158132-92f7-5701-a473-d34eef7bb132> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dc7e53c1-ff9e-47eb-9d0d-594ca31adaef> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-slaking-score/1>
    a tern:Observation ;
    rdfs:label "soil slaking score" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Completely slaked within 10 minutes" ;
            rdf:value <https://linked.data.gov.au/def/nrm/130ef1cb-f725-5a23-9adf-1262023d97b1>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/130ef1cb-f725-5a23-9adf-1262023d97b1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/040526b4-50a2-4bcf-a16a-ed5d1b5f7c4c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-structure-grade/1>
    a tern:Observation ;
    rdfs:label "soil structure grade" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Moderate" ;
            rdf:value <https://linked.data.gov.au/def/nrm/6a24fddc-c762-5944-b39d-115edafd4f40>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/6a24fddc-c762-5944-b39d-115edafd4f40> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/8e87bc47-7bc6-4ad7-81ac-17d4968004e8> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-structure-size/1>
    a tern:Observation ;
    rdfs:label "soil structure size" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "200-500mm" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1894c4ac-1503-59c5-84dc-64ecde22de65>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1894c4ac-1503-59c5-84dc-64ecde22de65> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/dd8dcc19-8a0c-4d9f-995f-a449408b5aa5> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-structure-type/1>
    a tern:Observation ;
    rdfs:label "soil structure type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Prismatic" ;
            rdf:value <https://linked.data.gov.au/def/nrm/0b1a8759-5346-5fca-8b27-9e816186d9e1>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/0b1a8759-5346-5fca-8b27-9e816186d9e1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/5b4dc0ad-3b4d-47d2-a775-7b405b4ff570> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-texture-grade/1>
    a tern:Observation ;
    rdfs:label "soil texture grade" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Not Applicable" ;
            rdf:value <https://linked.data.gov.au/def/nrm/12ca1c18-7f58-5a4e-a3ef-a6c767de7396>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/12ca1c18-7f58-5a4e-a3ef-a6c767de7396> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/062078e4-716e-4f27-a0f2-5e9715ddb6dc> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-texture-modifier/1>
    a tern:Observation ;
    rdfs:label "soil texture modifier" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Silty" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1218dbaf-c438-5005-845e-39c2af813c9b>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1218dbaf-c438-5005-845e-39c2af813c9b> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/51101df7-f8ac-4b5f-8890-482cc7a083ed> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-texture-qualification/1>
    a tern:Observation ;
    rdfs:label "soil texture qualification" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Heavy" ;
            rdf:value <https://linked.data.gov.au/def/nrm/4db2eefa-8864-5ce8-9d20-1a494c26664d>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/4db2eefa-8864-5ce8-9d20-1a494c26664d> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/c0e91cf7-b099-498a-8450-a37783404b3c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-voids-coarse-macropore-abundance/1>
    a tern:Observation ;
    rdfs:label "soil voids coarse macropore abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Many" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1e561329-2acd-5ab2-bab7-d418b6061050>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/1e561329-2acd-5ab2-bab7-d418b6061050> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/c0512e0a-98dd-4f38-8db9-db79769457bf> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-voids-cracks/1>
    a tern:Observation ;
    rdfs:label "soil voids cracks" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Fine (<5mm)" ;
            rdf:value <https://linked.data.gov.au/def/nrm/55c6c960-2cd7-5fc9-8296-73fc8e2acf36>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/55c6c960-2cd7-5fc9-8296-73fc8e2acf36> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f6504250-db2c-47ae-98f5-17f9534aff84> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/soil-voids-fine-macropore-abundance/1>
    a tern:Observation ;
    rdfs:label "soil voids fine macropore abundance" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Common" ;
            rdf:value <https://linked.data.gov.au/def/nrm/106d5960-faf8-58de-affc-58079d5ccf74>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/106d5960-faf8-58de-affc-58079d5ccf74> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0408a67f-2448-4151-bc1e-d97b6ff34e4f> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/8f00b7c6-34b4-4203-8dcc-4be47f21d7db> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/site/1/soil/specimen/1>
    a
        tern:MaterialSample ,
        tern:Sample ;
    rdfs:label "soil specimen 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    dwc:materialSampleID "soilSpecimen001" ;
    sosa:isSampleOf <https://example.com/feature-of-interest/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/d738a3f9-9b00-4adf-9dc8-0577269b691d> ;
    tern:hasAttribute
        [
            rdfs:label "soil sample depth - lower" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5040cfbe-eb65-4ce8-899c-f13ab841e7c3> ;
            tern:hasSimpleValue 3.381e+01 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 3.381e+01
                ]
        ] ,
        [
            rdfs:label "soil sample depth - upper" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2729becc-9e41-4303-9311-ec2a506e62e5> ;
            tern:hasSimpleValue 2.601e+01 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.601e+01
                ]
        ] ;
.

<https://example.com/agent/1>
    a
        prov:Agent ,
        <https://w3id.org/tern/ontologies/org/Person> ;
    schema:name "Paul Green" ;
.

<https://example.com/site/1/visit/1>
    a tern:SiteVisit ;
    rdfs:label "Site 1 visit 1" ;
    dcterms:identifier "siteVisit001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-11-05T03:16:42.783000+00:00"^^xsd:dateTime ;
    tern:hasSite <https://example.com/site/1> ;
    tern:locationDescription "The weather is sunny."^^xsd:string ;
.

<https://example.com/site/1>
    a
        tern:FeatureOfInterest ,
        tern:Site ;
    rdfs:label "Site 1" ;
    dcterms:identifier "site001"^^xsd:string ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                tern-loc:Point ;
            wgs:lat -2.992086e+01 ;
            wgs:long 1.512424e+02
        ] ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "soil subsite 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/b9a72809-6d53-4dad-bac6-bfe4dc76be31> ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "soil horizon 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/2> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/de1e18e4-6cfd-4c78-b389-a5b1dd04b899> ;
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

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

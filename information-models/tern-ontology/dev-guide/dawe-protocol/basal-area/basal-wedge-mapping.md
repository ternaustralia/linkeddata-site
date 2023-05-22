# Basal Wedge protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Basal Wedge](https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f) protocol in [Basal Area](https://linked.data.gov.au/def/nrm/f7e0d965-ae73-434e-8599-634598e506b5) module.

Mentions of observable properties should refer to [basal-wedge/overview](/information-models/tern-ontology/dev-guide/dawe-protocol/basal-area/basal-wedge/overview) for the feature type and value type information.

## Conceptual modelling

During a site visit to a site, the basal area is derived from a number of different observations carried out using the basal wedge method. Firstly, the target species for a population is selected. At a specific location within the site, a basal area sweep is performed using a basal wedge set at a specific _basal area factor_. Each tree may be a categorized as a _hit_ or a _borderline_. If the tree is not a hit, then it is ignored. The trees that were hits and borderlines are tallied up using a point system to calculate the basal area count.

To calculate the basal area of a site, the basal wedge method is used. The first step is to select the target species for the population. At a specific location within the site, a basal area sweep is performed using a basal wedge set at a specific basal area factor. During the sweep, each tree is categorized as a hit, a borderline, or is ignored. The trees that are hits or borderlines are tallied using a point system to calculate the basal area count.

The basal area count is used to calculate the mean basal area for each targeted species population. The stand basal area is calculated by summing up the mean basal area for each species population.

### Diagram

The diagram is colour-coded for legibility. The green nodes are samples/features-of-interest while the blue nodes are observation activities.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5&layers=1&nav=1&title=basal-area-basal-wedge-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5&layers=1&nav=1&title=basal-area-basal-wedge-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D17qmHvsAapJ0sYxM5GbT7WXHB2GtzsXT5%26export%3Ddownload">View diagram in new tab<svg width="10" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>

<!-- ## Survey data

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

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`. -->

## Observations data

- [OpenAPI docs for basal wedge](https://core.vocabs.paratoo.tern.org.au/documentation#/Basal-wedge-observation/post%2Fbasal-wedge-observations)

```json
{
    "lut_basal_sweep_sampling_point": "NW",
    "species": "string",
    "in_tree": 0,
    "borderline_tree": 0,
    "lut_basal_area_factor": "A",
    "plot_visit": 0,
    "createdBy": 0,
    "updatedBy": 0
}
```

#### `lut_basal_sweep_sampling_point`

Each site has 9 sampling points for basal area using the basal wedge protocol. The `lut_basal_sweep_sampling_point` field indicates which location out of the 9 sampling points is being observed.

#### `species`

This is the targeted species recorded as a `tern:Observation` on the plant population, and the observable property is `field species name`.

#### `in_tree`

This may be a boolean value as to whether the tree is _in_ or not. If it is true, it is recorded as a `tern:Observation` on the plant individual.

#### `borderline_tree`

This may be a boolean value as to whether the tree is _borderline_ or not. If it is true, it is recorded as a `tern:Observation` on the plant individual.

#### `lut_basal_area_factor`

This is the basal area factor setting used on the basal wedge. It is recorded as a `tern:Attribute` of the `tern:Observation` that determines whether a tree is _in_ or _borderline_.

#### `plot_visit`

The `plot_visit` key maps to the `tern:SiteVisit` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Basal area  - Basal Wedge protocol` are in [Basal Area - Basal Wedge protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#basal_area_basal_wedge_protocol_conformance_class_requirements).

Validator is [Basal area  - Basal Wedge protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/basal-area/basal-area-basal-wedge-protocol-shapes/shapes.ttl).

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

Save the [Basal Area shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/basal-area/shapes.ttl) in a file named `basal-area-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Basal Area protocol**, run the following command to validate the data:

```bash
pyshacl -s basal-area-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Basal Area - Basal Wedge shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/basal-area/basal-area-basal-wedge-protocol-shapes/shapes.ttl) in a file named `basal-wedge-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Basal Area - Basal Wedge protocol**, run the following command to validate the data:

```bash
pyshacl -s basal-wedge-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [basal area count shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/basal-area/basal-area-basal-wedge-protocol-shapes/basal-area-count/shapes.ttl) in a file named `basal-area-count-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for basal area count in Basal Area - Basal Wedge protocol**, run the following command to validate the data:

```bash
pyshacl -s basal-area-count-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

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
    rdfs:label "observations on plant population" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasMember
        <https://example.com/observation/basal-area-count/1> ,
        <https://example.com/observation/field-species-name/1> ,
        <https://example.com/observation/mean-basal-area/1> ;
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
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy <https://example.com/observation/mean-basal-area/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/3> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 2.56e+01 ;
            tern:unit <http://qudt.org/vocab/unit/M2-PER-HA>
        ] ;
    sosa:hasSimpleResult 2.56e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/f437f23a-7965-4bae-9dc3-2aead06786ec> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/sampling-plant-population/1>
    a tern:Sampling ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs:lat -3.092085e+01 ;
            wgs:long 1.522424e+02
        ] ;
    sosa:hasFeatureOfInterest <https://example.com/site/1> ;
    sosa:hasResult <https://example.com/feature-of-interest/2> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:resultDateTime "2022-12-07T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/basal-area-sweep-hit-type/1>
    a tern:Observation ;
    rdfs:label "basal area sweep hit type" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/1> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "borderline" ;
            rdf:value <https://linked.data.gov.au/def/nrm/3e0a5d97-c623-477e-98fe-8fe120907530>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/3e0a5d97-c623-477e-98fe-8fe120907530> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/1> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/43178892-92a6-434f-9895-340700e299e6> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:hasAttribute [
            rdfs:label "basal area factor (baf)" ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d06bf3e4-f59d-47fb-b780-bb089b298d83> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/4a68f312-b4bb-5cce-a4fd-03ca509f84be> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "0.1" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/4a68f312-b4bb-5cce-a4fd-03ca509f84be>
                ]
        ] ;
    tern:hasSiteVisit <https://example.com/site/1/visit/1> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/field-species-name/1>
    a tern:Observation ;
    rdfs:label "field species name" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "Melaleuca citrolens"
        ] ;
    sosa:hasSimpleResult "Melaleuca citrolens" ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/feature-of-interest/1>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant individual tree 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/2> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/60d7edf8-98c6-43e9-841c-e176c334d270> ;
.

<https://example.com/feature-of-interest/3>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant community 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/site/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ea3a4c64-dac3-4660-809a-8ad5ced8997b> ;
.

<https://example.com/observation/basal-area-count/1>
    a tern:Observation ;
    rdfs:label "basal area count" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy <https://example.com/observation/basal-area-sweep-hit-type/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Integer ,
                tern:Value ;
            rdf:value 6
        ] ;
    sosa:hasSimpleResult 6 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/29b37ffc-9a41-44f7-889a-bab63b48fa93> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/mean-basal-area/1>
    a tern:Observation ;
    rdfs:label "mean basal area" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    prov:wasInformedBy <https://example.com/observation/basal-area-count/1> ;
    sosa:hasFeatureOfInterest <https://example.com/feature-of-interest/2> ;
    sosa:hasResult [
            a
                tern:Float ,
                tern:Value ;
            rdf:value 1.56e+01 ;
            tern:unit <http://qudt.org/vocab/unit/M2-PER-HA>
        ] ;
    sosa:hasSimpleResult 1.56e+01 ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/a70282a3-c62f-43df-8d9c-34727ae1ee16> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a7d605e0-7d90-473e-aac0-21cdf380576f> ;
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

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs:lat -3.092085e+01 ;
    wgs:long 1.522424e+02 ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/feature-of-interest/2>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "plant population 1" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/feature-of-interest/3> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/ae71c3f6-d430-400f-a1d4-97a333b4ee02> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

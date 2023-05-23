---
sidebar_position: 2
---

# Camera Traps - Array protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Array protocol](https://linked.data.gov.au/def/nrm/1a6953e4-a830-41f8-9cfd-11ead4dd6bc2) protocol.

## Conceptual modelling

The Array protocol includes the procedures and guidelines for deployment, recovery and redeployment of camera traps in an array within the project area, including locating camera trap points in an evenly spaced grid or at regular intervals along a transect, and then micrositing the exact camera trap point locations within the grid or transect to optimize fauna detections, and recording all associated data (e.g. camera trap make, model and settings, camera trap placement and orientation, focal point, target species if applicable, deployment period) in a standardized manner directly into the App.

### Diagram

The following diagram shows the Camera Traps - Array protocol mapping. Blue nodes are things related to camera traps deployment and redeployment. Purple node is only related to redeployment.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G108gL-3o-6ig90E5FsvnS27v6NMQfHd6l&layers=1&nav=1&title=camera-traps-array-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D108gL-3o-6ig90E5FsvnS27v6NMQfHd6l%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G108gL-3o-6ig90E5FsvnS27v6NMQfHd6l&layers=1&nav=1&title=camera-traps-array-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D108gL-3o-6ig90E5FsvnS27v6NMQfHd6l%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Camera traps` protocol surveys:

### Survey data from camera trap deployment point:

- [OpenAPI docs for camera trap deployment point](https://dev.core-api.paratoo.tern.org.au/documentation#/Camera-trap-deployment-point/post%2Fcamera-trap-deployment-points)

```json
{
  "data": {
    "camera_trap_survey": 0,
    "distance_to_closest_point": 0,
    "transect_number": "string",
    "fauna_plot": 0,
    "target_taxa_types": "VP",
    "target_species": [
      {
        "species": "string"
      }
    ],
    "point_id": "string",
    "camera_trap_mount": {
      "camera_trap_mount_lut": "Star dropper",
      "camera_trap_mount_text": "string"
    },
    "camera_location": {
      "lat": 0,
      "lng": 0
    },
    "features": [0],
    "distance_to_feature": 0,
    "bait_station_mount": {
      "bait_station_mount_lut": "Star dropper",
      "bait_station_mount_text": "string"
    },
    "bait_container_height": 0,
    "lure_height": 0,
    "camera_lure_type": "Passive",
    "camera_lure_variety": {
      "camera_lure_variety_lut": "Lenon's Coyote Nature's Call",
      "camera_lure_variety_text": "string"
    },
    "carcass_species": "string",
    "camera_trap_number": "123456789",
    "SD_card_number": "123456789",
    "camera_trap_height": 0,
    "camera_trap_direction": 0,
    "camera_trap_angle": 0,
    "detection_angle": 0,
    "slope": 0,
    "aspect": 0,
    "camera_trap_photo": 0,
    "deployment_date": "2023-04-03",
    "additional_equipment": {
      "additional_equipment_lut": "Drift fence",
      "additional_equipment_text": "string"
    },
    "habitat_description": {
      "habitat_lut": "CD",
      "habitat_text": "string"
    },
    "microhabitat_description": {
      "microhabitat_lut": "Artificial surface",
      "microhabitat_text": "string"
    },
    "deployment_notes": "string",
    "createdBy": 0,
    "updatedBy": 0
  }
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `camera_trap_survey`

The `camera_trap_survey` key maps to the `tern:SiteVisit` class.

#### `transect_number`

The `transect_number` key maps to the property `dcterms:identifier` in `tern:Transect` class. It is the identifier of the transect during site visits.

##### Example

```turtle
<https://example.com/site/1/transect/1> a tern:Transect ;
    dcterms:identifier "transect1" ;
.
```

#### `fauna_plot`

The `fauna_plot` key maps to the `tern:Site` class.

#### `target_species`

The `target_species` key maps to a `tern:Observation` with the observable property 'target species'.

#### `point_id`

The `point_id` key maps to the attribute `camera trap point` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap point" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0b1cc26f-ea77-4fd9-9c0e-f2c0069af83f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/1eca71a8-23c7-56b2-9d55-72619fb29628> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "East" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1eca71a8-23c7-56b2-9d55-72619fb29628> ;
        ] ;
    ] ;
.
```

#### `camera_trap_mount`

The `camera_trap_mount` key maps to the attribute `camera trap mount` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap mount" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/295206ed-7d52-4fac-8e2c-b08f512c76a5> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/bf41b5f9-4b99-5a63-b9d8-635aec0d2385> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Star dropper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/bf41b5f9-4b99-5a63-b9d8-635aec0d2385> ;
        ] ;
    ] ;
.
```

#### `camera_location`

The `camera_location` key maps to the attribute `geo:hasGeometry` on the `tern:Deployment` class.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    geo:hasGeometry [
        a <https://w3id.org/tern/ontologies/loc/Point> ;
        wgs:lat -30.920849^^xsd:double ;
        wgs:long 152.242400^^xsd:double ;
    ] ;
.
```

#### `features`

The `features` key maps to the attribute `feature` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "feature" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/a0cee131-5ec1-4c49-b823-89a9a4ccdcf4> ;
        tern:hasSimpleValue "Catch animals during night"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Catch animals during night"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `distance_to_feature`

The `distance_to_feature` key maps to the attribute `distance to feature` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "distance to feature" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/d7a6dcc9-5e4c-4261-9df1-0805f254c05d> ;
        tern:hasSimpleValue "5"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "5"^^xsd:float ;
            tern:unit unit:M ;
        ] ;
    ] ;
.
```

#### `bait_container_height`

The `bait_container_height` key maps to the attribute `bait container height` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/bait-container-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "bait container height" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/24412351-9325-4497-8aad-7df14a0a580e> ;
        tern:hasSimpleValue "50"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "50"^^xsd:float ;
            tern:unit unit:CentiM ;
        ] ;
    ] ;
.
```

#### `camera_lure_type`

The `camera_lure_type` key maps to the attribute `lure type` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/bait-container-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "lure type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0ab6903f-2ebd-4236-812b-48ba6ad871fc> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/b5625aa3-9768-5610-80d3-c14d1095d040> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Auditory" ;
            rdf:value <https://linked.data.gov.au/def/nrm/b5625aa3-9768-5610-80d3-c14d1095d040> ;
        ] ;
    ] ;
.
```

#### `camera_lure_variety`

The `camera_lure_variety` key maps to the attribute `lure variety` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/bait-container-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "lure type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/64250214-f6e9-4634-a9f8-c460005a108f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/585bb013-c4a9-50a9-b1e6-3fa6913446d2> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Meat" ;
            rdf:value <https://linked.data.gov.au/def/nrm/585bb013-c4a9-50a9-b1e6-3fa6913446d2> ;
        ] ;
    ] ;
.
```

#### `camera_trap_number`

The `camera_trap_number` key maps to the property `dcterms:identifier` in `tern:Sampler` class. It is the identifier of the camera trap during site visits.

##### Example

```turtle
<https://example.com/site/1/camera-trap/1> a tern:Sampler ;
    dcterms:identifier "cameraTrap1" ;
.
```

#### `SD_card_number`

The `SD_card_number` key maps to the attribute `sd card id` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "sd card id" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/2d4905bc-db1c-4713-acf6-abcf8cf58418> ;
        tern:hasSimpleValue "sd-card-001"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "sd-card-001"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `camera_trap_height`

The `camera_trap_height` key maps to the attribute `camera trap height` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap height" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/bdca64df-e6a5-4993-8a10-cd93405107f6> ;
        tern:hasSimpleValue "50"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "50"^^xsd:float ;
            tern:unit unit:CentiM ;
        ] ;
    ] ;
.
```

#### `camera_trap_direction`

The `camera_trap_direction` key maps to the attribute `camera trap direction` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap direction" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/62db1bc1-3be4-48e9-be1c-bb7f051c4df0> ;
        tern:hasSimpleValue "60"^^xsd:integer ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value "60"^^xsd:integer ;
            tern:unit unit:DEG ;
        ] ;
    ] ;
.
```

#### `camera_trap_angle`

The `camera_trap_angle` key maps to the attribute `camera trap angle` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap angle" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/66a64821-d887-4dfd-bd2c-02d885428ae9> ;
        tern:hasSimpleValue "-50"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "-50"^^xsd:float ;
            tern:unit unit:DEG ;
        ] ;
    ] ;
.
```

#### `detection_angle`

The `detection_angle` key maps to the attribute `camera trap detection angle` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap detection angle" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/817ef056-a112-4314-85e4-75d3216a6ad9> ;
        tern:hasSimpleValue "-50"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "-50"^^xsd:float ;
            tern:unit unit:DEG ;
        ] ;
    ] ;
.
```

#### `slope`

The `slope` key maps to the attribute `slope` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to location by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment-location/1> a geo:Geometry ;
    tern:hasAttribute [
        rdfs:label "slope" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/b036ba09-d061-4a1c-99a8-890efc462a2c> ;
        tern:hasSimpleValue "60"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "60"^^xsd:float ;
            tern:unit unit:DEG ;
        ] ;
    ] ;
.
```

#### `aspect`

The `aspect` key maps to the attribute `aspect` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to location by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment-location/1> a geo:Geometry ;
    tern:hasAttribute [
        rdfs:label "aspect" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0e0423c6-0dc3-40aa-9776-410a94299256> ;
        tern:hasSimpleValue "60"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "60"^^xsd:float ;
            tern:unit unit:DEG ;
        ] ;
    ] ;
.
```

#### `camera_trap_photo`

The `camera_trap_photo` key maps to the `tern:Sample` class.

#### `deployment_date`

The `deployment_date` key maps to the property `prov:startedAtTime` on the `tern:Deployment` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/camera-trap-deployment/456> a tern:Deployment ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `additional_equipment`

The `additional_equipment` key maps to the attribute `additional equipment` in [Camera traps module - targeted protocol Attributes](https://linked.data.gov.au/def/nrm/1c26a538-2973-476f-b286-692f62fd8e6b), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "additional equipment" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0a6b69d9-5c8f-47c3-a85a-c92ae51ddc47> ;
        tern:hasSimpleValue "Drift fence"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Drift fence"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `habitat_description`

The `habitat_description` key maps to a `tern:Observation` with the observable property 'habitat description'.

#### `microhabitat_description`

The `microhabitat_description` key maps to a `tern:Observation` with the observable property 'microhabitat'.

#### `deployment_notes`

The `deployment_notes` key maps to the attribute `deployment motes` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "deployment notes" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/5e0b9262-0e24-4f73-98a4-5f76796e2a80> ;
        tern:hasSimpleValue "Drift fence used"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Drift fence used"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from camera trap feature:

- [OpenAPI docs for camera trap feature](https://dev.core-api.paratoo.tern.org.au/documentation#/Camera-trap-feature/post%2Fcamera-trap-features)

```json
{
  "feature": {
    "feature_lut": "Bait station",
    "feature_text": "string"
  },
  "feature_comment": "string",
  "feature_photo": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `feature`

The `feature` key maps to the attribute `feature` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "feature" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/a0cee131-5ec1-4c49-b823-89a9a4ccdcf4> ;
        tern:hasSimpleValue "Bait station"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Bait station"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `feature_comment`

The `feature_comment` key maps to the property `rdfs:comment` on the `tern:Attribute` class.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "feature" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/a0cee131-5ec1-4c49-b823-89a9a4ccdcf4> ;
        tern:hasSimpleValue "Bait station"^^xsd:string ;
        rdfs:comment "Bait station installed." ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Bait station"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `feature_photo`

The `feature_photo` key maps to the `tern:Sample` class.

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from camera trap information:

- [OpenAPI docs for camera trap information](https://dev.core-api.paratoo.tern.org.au/documentation#/Camera-trap-information/post%2Fcamera-trap-informations)

```json
{
  "camera_make": "Browning",
  "camera_model": {
    "camera_model_lut": "Dark Ops Pro DCL",
    "camera_model_text": "string"
  },
  "camera_year": 2200,
  "camera_illumination_type": "Infrared - red glow",
  "camera_activation_mechanism": "Passive infrared",
  "camera_trigger_speed": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `camera_make`

The `camera_make` key maps to the attribute `camera trap make` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera trap make" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/afc9fe4a-4bcd-47db-a9f4-6a977b2a244d> ;
        tern:hasSimpleValue "Browning"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Browning"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `camera_model`

The `camera_model` key maps to the attribute `camera trap model` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera trap model" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/92686f93-d2a9-4bfa-ac49-ed90eea5a311> ;
        tern:hasSimpleValue "Dark Ops Pro DCL"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Dark Ops Pro DCL"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `camera_year`

The `camera_year` key maps to the attribute `camera trap year` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera trap year" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/ec93bcc2-e395-4655-820c-c3aaf28bafdb> ;
        tern:hasSimpleValue "2000"^^xsd:integer ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value "2000"^^xsd:integer ;
        ] ;
    ] ;
.
```

#### `camera_illumination_type`

The `camera_illumination_type` key maps to the attribute `illumination` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "illumination" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/88513882-4a3e-4c7c-8454-d9d5908e006f> ;
        tern:hasSimpleValue "Infrared - red glow"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Infrared - red glow"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `camera_activation_mechanism`

The `camera_activation_mechanism` key maps to the attribute `activation mechanism` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "activation mechanism" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/fe1ae759-cbad-4e64-afe7-29fa51f77e13> ;
        tern:hasSimpleValue "Passive infrared"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Passive infrared"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `camera_trigger_speed`

The `camera_trigger_speed` key maps to the attribute `trigger speed` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "trigger speed" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/ae020c12-9956-40aa-a21a-7c410dbced95> ;
        tern:hasSimpleValue "0.2"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "0.2"^^xsd:float ;
            tern:unit unit:SEC ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from camera trap reequipping point:

- [OpenAPI docs for camera trap reequipping point](https://dev.core-api.paratoo.tern.org.au/documentation#/Camera-trap-reequipping-point/post%2Fcamera-trap-reequipping-points)

```json
{
  "camera_trap_survey": 0,
  "point_id": "string",
  "operational_status": "Operational",
  "number_of_images": 0,
  "SD_card_number": "123456789",
  "camera_trap_number": "123456789",
  "reequipping_date": "2023-04-06",
  "camera_trap_information": 0,
  "camera_trap_settings": 0,
  "camera_trap_height": 0,
  "camera_trap_direction": 0,
  "camera_trap_angle": 0,
  "camera_trap_mount": {
    "camera_trap_mount_lut": "Star dropper",
    "camera_trap_mount_text": "string"
  },
  "bait_station_mount": {
    "bait_station_mount_lut": "Star dropper",
    "bait_station_mount_text": "string"
  },
  "bait_container_height": 0,
  "lure_height": 0,
  "camera_lure_type": "Passive",
  "camera_lure_variety": {
    "camera_lure_variety_lut": "Lenon's Coyote Nature's Call",
    "camera_lure_variety_text": "string"
  },
  "carcass_species": "string",
  "reequipping_notes": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `camera_trap_survey`

The `camera_trap_survey` key maps to the `tern:SiteVisit` class.

#### `point_id`

The `point_id` key maps to the attribute `camera trap point` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap point" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0b1cc26f-ea77-4fd9-9c0e-f2c0069af83f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/1eca71a8-23c7-56b2-9d55-72619fb29628> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "East" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1eca71a8-23c7-56b2-9d55-72619fb29628> ;
        ] ;
    ] ;
.
```

#### `operational_status`

The `operational_status` key maps to the attribute `operational status` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "operational status" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/c38c49eb-74f4-41a7-96a7-bb34722121cd> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Operational" ;
            rdf:value <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae> ;
        ] ;
    ] ;
.
```

#### `number_of_images`

The `number_of_images` key maps to the attribute `number of images` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "number of images" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/4cba50f1-ad45-41d4-924c-c7efb9801248> ;
        tern:hasSimpleValue "10"^^xsd:integer ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value "10"^^xsd:integer ;
        ] ;
    ] ;
.
```

#### `SD_card_number`

The `SD_card_number` key maps to the attribute `sd card id` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "sd card id" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/2d4905bc-db1c-4713-acf6-abcf8cf58418> ;
        tern:hasSimpleValue "sd-card-001"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "sd-card-001"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `camera_trap_number`

The `camera_trap_number` key maps to the property `dcterms:identifier` in `tern:Sampler` class. It is the identifier of the camera trap during site visits.

##### Example

```turtle
<https://example.com/site/1/camera-trap/1> a tern:Sampler ;
    dcterms:identifier "cameraTrap1" ;
.
```

#### `reequipping_date`

The `reequipping_date` key maps to the property `prov:startedAtTime` on the `tern:Deployment` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/camera-trap-redeployment/456> a tern:Deployment ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `camera_trap_height`

The `camera_trap_height` key maps to the attribute `camera trap height` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap height" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/bdca64df-e6a5-4993-8a10-cd93405107f6> ;
        tern:hasSimpleValue "50"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "50"^^xsd:float ;
            tern:unit unit:CentiM ;
        ] ;
    ] ;
.
```

#### `camera_trap_direction`

The `camera_trap_direction` key maps to the attribute `camera trap direction` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap direction" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/62db1bc1-3be4-48e9-be1c-bb7f051c4df0> ;
        tern:hasSimpleValue "60"^^xsd:integer ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value "60"^^xsd:integer ;
            tern:unit unit:DEG ;
        ] ;
    ] ;
.
```

#### `camera_trap_angle`

The `camera_trap_angle` key maps to the attribute `camera trap angle` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap angle" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/66a64821-d887-4dfd-bd2c-02d885428ae9> ;
        tern:hasSimpleValue "-50"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "-50"^^xsd:float ;
            tern:unit unit:DEG ;
        ] ;
    ] ;
.
```

#### `camera_trap_mount`

The `camera_trap_mount` key maps to the attribute `camera trap mount` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap mount" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/295206ed-7d52-4fac-8e2c-b08f512c76a5> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/bf41b5f9-4b99-5a63-b9d8-635aec0d2385> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Star dropper" ;
            rdf:value <https://linked.data.gov.au/def/nrm/bf41b5f9-4b99-5a63-b9d8-635aec0d2385> ;
        ] ;
    ] ;
.
```

#### `bait_container_height`

The `bait_container_height` key maps to the attribute `bait container height` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/bait-container-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "bait container height" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/24412351-9325-4497-8aad-7df14a0a580e> ;
        tern:hasSimpleValue "50"^^xsd:float ;
        tern:hasValue [
            a tern:Float ;
            rdf:value "50"^^xsd:float ;
            tern:unit unit:CentiM ;
        ] ;
    ] ;
.
```

#### `camera_lure_type`

The `camera_lure_type` key maps to the attribute `lure type` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/bait-container-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "lure type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0ab6903f-2ebd-4236-812b-48ba6ad871fc> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/b5625aa3-9768-5610-80d3-c14d1095d040> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Auditory" ;
            rdf:value <https://linked.data.gov.au/def/nrm/b5625aa3-9768-5610-80d3-c14d1095d040> ;
        ] ;
    ] ;
.
```

#### `camera_lure_variety`

The `camera_lure_variety` key maps to the attribute `lure variety` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/bait-container-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "lure type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/64250214-f6e9-4634-a9f8-c460005a108f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/585bb013-c4a9-50a9-b1e6-3fa6913446d2> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Meat" ;
            rdf:value <https://linked.data.gov.au/def/nrm/585bb013-c4a9-50a9-b1e6-3fa6913446d2> ;
        ] ;
    ] ;
.
```

#### `reequipping_notes`

The `reequipping_notes` key maps to the attribute `redeployment motes` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-redeployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "redeployment notes" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/8d5dcb31-661c-42d1-83c8-afbca2a7afed> ;
        tern:hasSimpleValue "Drift fence used"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Drift fence used"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from camera trap retrieval point:

- [OpenAPI docs for camera trap retrieval point](https://dev.core-api.paratoo.tern.org.au/documentation#/Camera-trap-retrieval-point/post%2Fcamera-trap-retrieval-points)

```json
{
  "camera_trap_survey": 0,
  "point_id": "string",
  "operational_status": "Operational",
  "number_of_images": 0,
  "retrieval_date": "2023-04-06",
  "deployment_period": 0,
  "retrieval_notes": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `camera_trap_survey`

The `camera_trap_survey` key maps to the `tern:SiteVisit` class.

#### `point_id`

The `point_id` key maps to the attribute `camera trap point` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to recovery by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-recovery/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera trap point" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/0b1cc26f-ea77-4fd9-9c0e-f2c0069af83f> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/1eca71a8-23c7-56b2-9d55-72619fb29628> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "East" ;
            rdf:value <https://linked.data.gov.au/def/nrm/1eca71a8-23c7-56b2-9d55-72619fb29628> ;
        ] ;
    ] ;
.
```

#### `operational_status`

The `operational_status` key maps to the attribute `operational status` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to recovery by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-recovery/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "operational status" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/c38c49eb-74f4-41a7-96a7-bb34722121cd> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Operational" ;
            rdf:value <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae> ;
        ] ;
    ] ;
.
```

#### `number_of_images`

The `number_of_images` key maps to the attribute `number of images` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to recovery by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-recovery/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "number of images" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/4cba50f1-ad45-41d4-924c-c7efb9801248> ;
        tern:hasSimpleValue "10"^^xsd:integer ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value "10"^^xsd:integer ;
        ] ;
    ] ;
.
```

#### `retrieval_date`

The `retrieval_date` key maps to the property `prov:startedAtTime` on the `tern:Deployment` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/camera-trap-retrieval/456> a tern:Deployment ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `deployment_period`

The `deployment_period` can be calculated by the value of properties `prov:startedAtTime` and `prov:endedAtTime` on the `tern:Deployment` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/camera-trap-retrieval/456> a tern:Deployment ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime ;
    prov:endedAtTime "2022-11-02T08:16:42.783Z"^^xsd:dateTime .
```

#### `retrieval_notes`

The `retrieval_notes` key maps to the attribute `recovery motes` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to retrieval by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-retrieval/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "recovery notes" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/b400ec81-0c8e-4f8a-bbcc-62f9b991cbb8> ;
        tern:hasSimpleValue "Drift fence used"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "Drift fence used"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from camera trap setting:

- [OpenAPI docs for camera trap setting](https://dev.core-api.paratoo.tern.org.au/documentation#/Camera-trap-setting/post%2Fcamera-trap-settings)

```json
{
  "camera_media_type": "Image",
  "aspect_ratio": "4:3 standard",
  "quite_period": "string",
  "sensor_sensitivity": "Low",
  "time_lapse": true,
  "datetime": "2023-04-06T01:25:52.082Z",
  "unit_of_temperature": "C",
  "battery_type": "NiMH rechargeable",
  "day_night_recording": "Day only",
  "time_format": "12h",
  "images_per_trigger": 0,
  "image_interval": "string",
  "image_quality": "string",
  "video_length": 0,
  "video_resolution": "7680p (8K) (7680x4320)",
  "time_lapse_interval": "string",
  "time_lapse_schedule_start": "2023-04-06",
  "time_lapse_schedule_end": "2023-04-06",
  "night_mode_shutter_speed": 0,
  "user_label": "string",
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

#### `camera_media_type`

The `camera_media_type` key maps to the attribute `media type` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "media type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/133ff279-17d9-47ca-9a18-b8835338a10a> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8bb39343-4461-55ed-b652-534484ac7f2c> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Image" ;
            rdf:value <https://linked.data.gov.au/def/nrm/8bb39343-4461-55ed-b652-534484ac7f2c> ;
        ] ;
    ] ;
.
```

#### `quite_period`

The `quite_period` key maps to the attribute `camera settings- quite period` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera settings- quite period" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/90a43366-1507-484b-8f30-85e431d22985> ;
        tern:hasSimpleValue "From 6:00 am to 6:00 pm"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "From 6:00 am to 6:00 pm"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `sensor_sensitivity`

The `sensor_sensitivity` key maps to the attribute `camera settings- sensor sensitivity` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera settings- sensor sensitivity" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/35f2c7a1-135b-41da-8902-a2cb7cad0b17> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/cfce9f40-5090-5828-800e-3def3b850c12> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Low" ;
            rdf:value <https://linked.data.gov.au/def/nrm/cfce9f40-5090-5828-800e-3def3b850c12> ;
        ] ;
    ] ;
.
```

#### `datetime`

The `datetime` key maps to the property `prov:startedAtTime` on the `tern:Deployment` class.

##### Example

```turtle
<https://linked.data.gov.au/dataset/nrm/site/123/camera-trap-redeployment/456> a tern:Deployment ;
    prov:startedAtTime "2022-11-02T03:16:42.783Z"^^xsd:dateTime .
```

#### `unit_of_temperature`

The `unit_of_temperature` key maps to the attribute `camera settings- unit of temperature` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera settings- unit of temperature" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/9a3f4a8e-5600-4698-a30b-6708c7e27ade> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/9ddc3a8d-eaa8-520f-9267-6298e03b3335> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Celcius" ;
            rdf:value <https://linked.data.gov.au/def/nrm/9ddc3a8d-eaa8-520f-9267-6298e03b3335> ;
        ] ;
    ] ;
.
```

#### `battery_type`

The `battery_type` key maps to the attribute `camera settings- battery type` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera settings- battery type" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/644f7e74-fbe1-48f7-9ae8-712b4ec67685> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/c5385732-2f61-52a7-8bd4-712b13553e16> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "NiMH" ;
            rdf:value <https://linked.data.gov.au/def/nrm/c5385732-2f61-52a7-8bd4-712b13553e16> ;
        ] ;
    ] ;
.
```

#### `images_per_trigger`

The `images_per_trigger` key maps to the attribute `camera settings- pictures per trigger` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera settings- pictures per trigger" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/f09d8c8e-5152-45d5-b2d7-6e30a45fbb3f> ;
        tern:hasSimpleValue "10"^^xsd:integer ;
        tern:hasValue [
            a tern:Integer ;
            rdf:value "10"^^xsd:integer ;
        ] ;
    ] ;
.
```

#### `image_interval`

The `image_interval` key maps to the attribute `camera settings- picture interval` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera settings- picture interval" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/51eef4d3-1a0b-4f72-8af3-b639289ee6c0> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/fa1cc557-7e0b-5e18-86f0-18d19fef6f6c> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Time lapse frequency" ;
            rdf:value <https://linked.data.gov.au/def/nrm/fa1cc557-7e0b-5e18-86f0-18d19fef6f6c> ;
        ] ;
    ] ;
.
```

#### `video_resolution`

The `video_resolution` key maps to the attribute `camera settings- image resolution` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera settings- image resolution" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/f707dadf-dd86-4eab-a718-ca48af241b5a> ;
        tern:hasSimpleValue "7680p (8K) (7680x4320)"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "7680p (8K) (7680x4320)"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `night_mode_shutter_speed`

The `night_mode_shutter_speed` key maps to the attribute `camera settings- night mode` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to sampler by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap/1> a tern:Sampler ;
    tern:hasAttribute [
        rdfs:label "camera settings- night mode" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/7a3c7440-70a8-4442-83ef-9be484c96be4> ;
        tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/94f6f1b9-e04a-5533-9dbc-fb249afbc962> ;
        tern:hasValue [
            a tern:IRI ;
            rdfs:label "Fast shutter" ;
            rdf:value <https://linked.data.gov.au/def/nrm/94f6f1b9-e04a-5533-9dbc-fb249afbc962> ;
        ] ;
    ] ;
.
```

#### `user_label`

The `user_label` key maps to the attribute `camera settings- user label` in [Camera traps module - array protocol Attributes](https://linked.data.gov.au/def/nrm/e2d8b951-c1fd-4de9-9bd3-313ddcd79ab8), and is linked to deployment by `tern:hasAttribute`.

##### Example

```turtle
<https://example.com/camera-trap-deployment/1> a tern:Deployment ;
    tern:hasAttribute [
        rdfs:label "camera settings- user label" ;
        tern:attribute <https://linked.data.gov.au/def/nrm/4cfd15b3-9646-401c-a423-0b221143b3e7> ;
        tern:hasSimpleValue "userLabel001"^^xsd:string ;
        tern:hasValue [
            a tern:Text ;
            rdf:value "userLabel001"^^xsd:string ;
        ] ;
    ] ;
.
```

#### `createdBy` and `updatedBy`

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

### Survey data from camera trap survey:

- [OpenAPI docs for camera trap survey](https://dev.core-api.paratoo.tern.org.au/documentation#/Camera-trap-survey/post%2Fcamera-trap-surveys)

```json
{
  "surveyId": "string",
  "survey_label": "string",
  "survey_type": "P",
  "start_date": "2023-04-06T06:44:59.813Z",
  "end_date": "2023-04-06T06:44:59.813Z",
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

#### `survey_type`

The `survey_type` key maps to the property `dcterms:type` in `tern:SiteVisit` class.

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

If the keys `createdBy` and `updatedBy` represent the people or organizations that carried out the surveys, then they can be mapped to the `prov:qualifiedAssociation` of a `tern:Observation` or `tern:SiteVisit` along with their role in the activity. If the role of the agent is not required, then a direct association can be recorded using the property `prov:wasAssociatedWith` on the `tern:Observation` or `tern:SiteVisit`.

## Validation with SHACL

The data should conform to both the TERN Ontology and protocol specific SHACL shapes. The introduction to TERN Ontology SHACL shapes and example usage is presented in [Conformance and Validation](/information-models/tern-ontology/dev-guide/conformance-and-validation).

The specification requirements of observations in `Camera traps - array protocol` are in [Camera Traps - Array protocol Conformance Class Requirements](https://ternaustralia.github.io/dawe-rlp-spec/#camera_traps_array_protocol_conformance_class_requirements).

Validator is [Camera traps - array protocol shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/camera-traps/camera-traps-array-protocol-shapes/shapes.ttl).

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

Save the [Camera traps shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/camera-traps/shapes.ttl) in a file named `camera-traps-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Camera traps protocol**, run the following command to validate the data:

```bash
pyshacl -s camera-traps-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - sub protocol level

Save the [Camera traps - array shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/camera-traps/camera-traps-array-protocol-shapes/shapes.ttl) in a file named `camera-traps-array-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for Camera traps - array protocol**, run the following command to validate the data:

```bash
pyshacl -s camera-traps-array-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

### Example usage with PySHACL - observation level

Save the [habitat description shapes](https://github.com/ternaustralia/dawe-rlp-spec/blob/main/shapes/camera-traps/camera-traps-array-protocol-shapes/habitat-description/shapes.ttl) in a file named `habitat-description-shapes.ttl` in the Turtle RDF format.

Assuming you have a file named `data.ttl` in the Turtle RDF format and **it has observations for habitat description in Camera traps - array protocol**, run the following command to validate the data:

```bash
pyshacl -s habitat-description-shapes.ttl -m -i rdfs -a -j -f human data.ttl
```

If there are no violations, then you should see some output similar to the following:

```
Validation Report
Conforms: True
```

## Example data

Encoded using the TERN Ontology and related controlled vocabularies.

```turtle

PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX ssn: <http://www.w3.org/ns/ssn/>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX unit: <http://qudt.org/vocab/unit/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

<https://example.com/Deployment/camera-traps-deployment-or-redeployment>
    a tern:Deployment ;
    rdfs:label "camera traps deployment or redeployment" ;
    dcterms:identifier "deployment-camera-traps-deployment-or-redeployment-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry [
            a
                geo:Geometry ,
                <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410" ;
            tern:hasAttribute
                [
                    rdfs:label "slope" ;
                    void:inDataset <https://example.com/dataset/1> ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/b036ba09-d061-4a1c-99a8-890efc462a2c> ;
                    tern:hasSimpleValue 2.22e+00 ;
                    tern:hasValue [
                            a
                                tern:Float ,
                                tern:Value ;
                            rdf:value 2.22e+00 ;
                            tern:unit unit:DEG
                        ]
                ] ,
                [
                    rdfs:label "aspect" ;
                    void:inDataset <https://example.com/dataset/1> ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/0e0423c6-0dc3-40aa-9776-410a94299256> ;
                    tern:hasSimpleValue 2.22e+00 ;
                    tern:hasValue [
                            a
                                tern:Float ,
                                tern:Value ;
                            rdf:value 2.22e+00 ;
                            tern:unit unit:DEG
                        ]
                ]
        ] ;
    prov:endedAtTime "2022-05-10T06:38:02"^^xsd:dateTime ;
    prov:startedAtTime "2022-05-10T05:38:02"^^xsd:dateTime ;
    ssn:deployedOnPlatform <https://example.com/Site/site> ;
    ssn:deployedSystem <https://example.com/Sampler/camera-traps> ;
    tern:hasAttribute
        [
            rdfs:label "distance to bait station" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/654888b4-8f97-4420-8b42-ba7df2c743f6> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:M
                ]
        ] ,
        [
            rdfs:label "camera trap height" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/bdca64df-e6a5-4993-8a10-cd93405107f6> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "camera trap direction" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/62db1bc1-3be4-48e9-be1c-bb7f051c4df0> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a
                        tern:Integer ,
                        tern:Value ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "deployment notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5e0b9262-0e24-4f73-98a4-5f76796e2a80> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "feature" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/a0cee131-5ec1-4c49-b823-89a9a4ccdcf4> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "operational status" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/c38c49eb-74f4-41a7-96a7-bb34722121cd> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Operational" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae>
                ]
        ] ,
        [
            rdfs:label "camera trap angle" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/66a64821-d887-4dfd-bd2c-02d885428ae9> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:DEG
                ]
        ] ,
        [
            rdfs:label "redeployment notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/8d5dcb31-661c-42d1-83c8-afbca2a7afed> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "camera trap mount" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/295206ed-7d52-4fac-8e2c-b08f512c76a5> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/46dc31c7-4888-5697-95ea-356ae5b00ad8> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Tripod" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/46dc31c7-4888-5697-95ea-356ae5b00ad8>
                ]
        ] ,
        [
            rdfs:label "recovery notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b400ec81-0c8e-4f8a-bbcc-62f9b991cbb8> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "media type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/133ff279-17d9-47ca-9a18-b8835338a10a> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/2eebe2f3-ad3e-562a-b0cf-975a338b8de2> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Burst" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/2eebe2f3-ad3e-562a-b0cf-975a338b8de2>
                ]
        ] ,
        [
            rdfs:label "camera trap detection angle" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/817ef056-a112-4314-85e4-75d3216a6ad9> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:DEG
                ]
        ] ,
        [
            rdfs:label "direction to feature" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/256b2845-4d36-45ba-b24d-06787bd5a7c2> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a
                        tern:Integer ,
                        tern:Value ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "number of images" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/4cba50f1-ad45-41d4-924c-c7efb9801248> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a
                        tern:Integer ,
                        tern:Value ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "target species" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/93fa405c-9e63-4857-a55d-e93d866545a6> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "number of camera traps deployed" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/f61a6869-1358-4afb-bcab-779837b682c6> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a
                        tern:Integer ,
                        tern:Value ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "distance to feature" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/d7a6dcc9-5e4c-4261-9df1-0805f254c05d> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:M
                ]
        ] ;
.

<https://example.com/Deployment/install-the-bait-station>
    a tern:Deployment ;
    rdfs:label "install the bait station" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:deployedOnPlatform <https://example.com/Site/site> ;
    ssn:deployedSystem <https://example.com/Sampler/bait-container> ;
    tern:hasAttribute
        [
            rdfs:label "lure variety" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/64250214-f6e9-4634-a9f8-c460005a108f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/02105caa-6c01-546b-8d15-06710ff04a53> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Standard small mammal bait mix" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/02105caa-6c01-546b-8d15-06710ff04a53>
                ]
        ] ,
        [
            rdfs:label "lure type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0ab6903f-2ebd-4236-812b-48ba6ad871fc> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8cf79ae3-98a7-5fbc-9cda-f94ce010cab3> ;
            tern:hasValue [
                    a
                        tern:IRI ,
                        tern:Value ;
                    rdfs:label "Visual" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8cf79ae3-98a7-5fbc-9cda-f94ce010cab3>
                ]
        ] ,
        [
            rdfs:label "bait container height" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/24412351-9325-4497-8aad-7df14a0a580e> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:CentiM
                ]
        ] ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1a6953e4-a830-41f8-9cfd-11ead4dd6bc2> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/camera-traps> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1a6953e4-a830-41f8-9cfd-11ead4dd6bc2> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    dcterms:identifier "sitevisit-site-visit-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    prov:startedAtTime "2022-05-10T04:38:02"^^xsd:dateTime ;
    tern:hasAttribute
        [
            rdfs:label "survey name" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/bd5b318a-237f-4c14-8103-4ef063417432> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "protocol name" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/4525b91d-a9e4-4fec-89d7-1a5e9963b1dc> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/habitat> ;
    sosa:hasResult [
            a
                tern:IRI ,
                tern:Value ;
            rdfs:label "Isolated clump of tussock grasses" ;
            rdf:value <https://linked.data.gov.au/def/nrm/01a85e08-b223-50e9-92d2-98d8b71d6092>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/01a85e08-b223-50e9-92d2-98d8b71d6092> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1a6953e4-a830-41f8-9cfd-11ead4dd6bc2> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/observation/redeployment-observations/1>
    a tern:Observation ;
    rdfs:label "redeployment observations" ;
    void:inDataset <https://example.com/dataset/1> ;
    geo:hasGeometry <https://example.com/example-observation-location/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/camera-traps> ;
    sosa:hasResult [
            a
                tern:Text ,
                tern:Value ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0adc5740-7e20-4509-949c-12ae72500951> ;
    sosa:phenomenonTime <https://example.com/example-phenomenon-time/1> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/1a6953e4-a830-41f8-9cfd-11ead4dd6bc2> ;
    tern:resultDateTime "2022-05-10T05:38:02"^^xsd:dateTime ;
.

<https://example.com/Sample/photos>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <https://example.com/non-created-feature-type/photos> ;
.

<https://example.com/Sampler/bait-container>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ,
        tern:System ;
    rdfs:label "bait container" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/1a6953e4-a830-41f8-9cfd-11ead4dd6bc2> ;
    tern:featureType <https://example.com/non-created-feature-type/bait-container/1> ;
.

<https://example.com/Sample/habitat>
    a
        tern:FeatureOfInterest ,
        tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/example-phenomenon-time/1>
    a time:Instant ;
    time:inXSDDateTimeStamp "2022-05-10T05:38:02.032000+00:00"^^xsd:dateTimeStamp ;
.

<https://example.com/Sampler/camera-traps>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ,
        tern:System ;
    rdfs:label "camera traps" ;
    dcterms:identifier "sampler-camera-traps-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/1a6953e4-a830-41f8-9cfd-11ead4dd6bc2> ;
    tern:featureType <https://example.com/non-created-feature-type/camera-traps/1> ;
    tern:hasAttribute
        [
            rdfs:label "trigger speed" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ae020c12-9956-40aa-a21a-7c410dbced95> ;
            tern:hasSimpleValue 2.22e+00 ;
            tern:hasValue [
                    a
                        tern:Float ,
                        tern:Value ;
                    rdf:value 2.22e+00 ;
                    tern:unit unit:SEC
                ]
        ] ,
        [
            rdfs:label "illumination" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/88513882-4a3e-4c7c-8454-d9d5908e006f> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "camera trap make" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/afc9fe4a-4bcd-47db-a9f4-6a977b2a244d> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "sd card id" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2d4905bc-db1c-4713-acf6-abcf8cf58418> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "camera trap year" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ec93bcc2-e395-4655-820c-c3aaf28bafdb> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a
                        tern:Integer ,
                        tern:Value ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "camera trap model" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/92686f93-d2a9-4bfa-ac49-ed90eea5a311> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "activation mechanism" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/fe1ae759-cbad-4e64-afe7-29fa51f77e13> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a
                        tern:Text ,
                        tern:Value ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
.

<https://example.com/example-observation-location/1>
    a
        geo:Geometry ,
        <https://w3id.org/tern/ontologies/loc/Point> ;
    wgs84:lat -3.092085e+01 ;
    wgs84:long 1.522424e+02 ;
.

<https://example.com/Site/site>
    a
        tern:FeatureOfInterest ,
        tern:Platform ,
        tern:Site ;
    rdfs:label "site" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/e1c7c434-1321-4601-9079-e837b7ffc293> ;
.

<https://example.com/dataset/1>
    a tern:RDFDataset ;
.

```

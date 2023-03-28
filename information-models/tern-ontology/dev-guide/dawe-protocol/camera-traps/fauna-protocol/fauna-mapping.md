---
sidebar_position: 2
---

# Camera Traps - Fauna plot protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Fauna plot protocol](https://linked.data.gov.au/def/nrm/a2afccd5-766e-44bc-98c1-f27aae26727f) protocol.

## Conceptual modelling

The Fauna plot protocol includes the procedures and guidelines for the standardised deployment and recovery or redeployment of camera traps in a fauna plot, including standards for camera make, model and settings, camera placement and orientation, site preparation, bait station installation, deployment period, and entering the data directly into the App.

### Diagram

The following diagram shows the Camera Traps - Fauna plot protocol mapping. Blue nodes are things related to camera traps deployment and redeployment. Purple node is only related to redeployment.

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1a7kHJ5hWbGp5Mj6Vd2a-U86oERZsFhOT&layers=1&nav=1&title=camera-traps-fauna-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1a7kHJ5hWbGp5Mj6Vd2a-U86oERZsFhOT%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1a7kHJ5hWbGp5Mj6Vd2a-U86oERZsFhOT&layers=1&nav=1&title=camera-traps-fauna-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1a7kHJ5hWbGp5Mj6Vd2a-U86oERZsFhOT%26export%3Ddownload">View diagram in new tab.</a>

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
            a <https://w3id.org/tern/ontologies/loc/Point> ;
            wgs84:lat "-31.920860" ;
            wgs84:long "151.242410" ;
            tern:hasAttribute
                [
                    rdfs:label "slope" ;
                    void:inDataset <https://example.com/dataset/1> ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/b036ba09-d061-4a1c-99a8-890efc462a2c> ;
                    tern:hasSimpleValue "2.22"^^xsd:float ;
                    tern:hasValue [
                            a tern:Float ;
                            rdf:value "2.22"^^xsd:float ;
                            tern:unit unit:DEG
                        ]
                ] ,
                [
                    rdfs:label "aspect" ;
                    void:inDataset <https://example.com/dataset/1> ;
                    tern:attribute <https://linked.data.gov.au/def/nrm/0e0423c6-0dc3-40aa-9776-410a94299256> ;
                    tern:hasSimpleValue "2.22"^^xsd:float ;
                    tern:hasValue [
                            a tern:Float ;
                            rdf:value "2.22"^^xsd:float ;
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
            rdfs:label "number of images" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/4cba50f1-ad45-41d4-924c-c7efb9801248> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a tern:Integer ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "deployment notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/5e0b9262-0e24-4f73-98a4-5f76796e2a80> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "camera trap direction" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/62db1bc1-3be4-48e9-be1c-bb7f051c4df0> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a tern:Integer ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "number of camera traps deployed" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/f61a6869-1358-4afb-bcab-779837b682c6> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a tern:Integer ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "redeployment notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/8d5dcb31-661c-42d1-83c8-afbca2a7afed> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "distance to bait station" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/654888b4-8f97-4420-8b42-ba7df2c743f6> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:M
                ]
        ] ,
        [
            rdfs:label "recovery notes" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/b400ec81-0c8e-4f8a-bbcc-62f9b991cbb8> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "operational status" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/c38c49eb-74f4-41a7-96a7-bb34722121cd> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Operational" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/3fc4c897-f811-5488-b49e-82ffd2b37eae>
                ]
        ] ,
        [
            rdfs:label "camera trap mount" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/295206ed-7d52-4fac-8e2c-b08f512c76a5> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/46dc31c7-4888-5697-95ea-356ae5b00ad8> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Tripod" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/46dc31c7-4888-5697-95ea-356ae5b00ad8>
                ]
        ] ,
        [
            rdfs:label "camera trap height" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/bdca64df-e6a5-4993-8a10-cd93405107f6> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:CentiM
                ]
        ] ,
        [
            rdfs:label "camera trap angle" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/66a64821-d887-4dfd-bd2c-02d885428ae9> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:DEG
                ]
        ] ,
        [
            rdfs:label "media type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/133ff279-17d9-47ca-9a18-b8835338a10a> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/2eebe2f3-ad3e-562a-b0cf-975a338b8de2> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Burst" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/2eebe2f3-ad3e-562a-b0cf-975a338b8de2>
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
            rdfs:label "lure type" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/0ab6903f-2ebd-4236-812b-48ba6ad871fc> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/8cf79ae3-98a7-5fbc-9cda-f94ce010cab3> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Visual" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/8cf79ae3-98a7-5fbc-9cda-f94ce010cab3>
                ]
        ] ,
        [
            rdfs:label "lure variety" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/64250214-f6e9-4634-a9f8-c460005a108f> ;
            tern:hasSimpleValue <https://linked.data.gov.au/def/nrm/02105caa-6c01-546b-8d15-06710ff04a53> ;
            tern:hasValue [
                    a tern:IRI ;
                    rdfs:label "Standard small mammal bait mix" ;
                    rdf:value <https://linked.data.gov.au/def/nrm/02105caa-6c01-546b-8d15-06710ff04a53>
                ]
        ] ,
        [
            rdfs:label "bait container height" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/24412351-9325-4497-8aad-7df14a0a580e> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:CentiM
                ]
        ] ;
.

<https://example.com/Sampling/habitat-sampling>
    a tern:Sampling ;
    rdfs:label "habitat sampling" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Site/site> ;
    sosa:hasResult <https://example.com/Sample/habitat> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a2afccd5-766e-44bc-98c1-f27aae26727f> ;
.

<https://example.com/Sampling/taking-photos>
    a tern:Sampling ;
    rdfs:label "taking photos" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest
        <https://example.com/Sampler/bait-container> ,
        <https://example.com/Sampler/camera-traps> ;
    sosa:hasResult <https://example.com/Sample/photos> ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a2afccd5-766e-44bc-98c1-f27aae26727f> ;
.

<https://example.com/SiteVisit/site-visit>
    a tern:SiteVisit ;
    rdfs:label "site visit" ;
    dcterms:identifier "sitevisit-site-visit-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:hasAttribute
        [
            rdfs:label "survey name" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/bd5b318a-237f-4c14-8103-4ef063417432> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "protocol name" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/4525b91d-a9e4-4fec-89d7-1a5e9963b1dc> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ;
    tern:hasSite <https://example.com/Site/site> ;
.

<https://example.com/observation/habitat-description/1>
    a tern:Observation ;
    rdfs:label "habitat description" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sample/habitat> ;
    sosa:hasResult [
            a tern:IRI ;
            rdfs:label "Isolated clump of tussock grasses" ;
            rdf:value <https://linked.data.gov.au/def/nrm/01a85e08-b223-50e9-92d2-98d8b71d6092>
        ] ;
    sosa:hasSimpleResult <https://linked.data.gov.au/def/nrm/01a85e08-b223-50e9-92d2-98d8b71d6092> ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/aa4c96f6-9ea8-4bd3-8800-0bfddcd8a37c> ;
    sosa:phenomenonTime [
            a time:Instant ;
            time:inXSDDateTimeStamp "2022-05-11T06:38:02.032000+00:00"^^xsd:dateTimeStamp
        ] ;
    sosa:usedProcedure <https://linked.data.gov.au/def/nrm/a2afccd5-766e-44bc-98c1-f27aae26727f> ;
.

<https://example.com/observation/redeployment-observations/1>
    a tern:Observation ;
    rdfs:label "redeployment observations" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:hasFeatureOfInterest <https://example.com/Sampler/camera-traps> ;
    sosa:hasResult [
            a tern:Text ;
            rdf:value "The value is from observations."^^xsd:string
        ] ;
    sosa:hasSimpleResult "The value is from observations."^^xsd:string ;
    sosa:observedProperty <https://linked.data.gov.au/def/nrm/0adc5740-7e20-4509-949c-12ae72500951> ;
.

<https://example.com/Sample/photos>
    a tern:Sample ;
    rdfs:label "photos" ;
    dcterms:identifier "sample-photos-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    tern:featureType "photos" ;
.

<https://example.com/Sample/habitat>
    a tern:Sample ;
    rdfs:label "habitat" ;
    void:inDataset <https://example.com/dataset/1> ;
    sosa:isSampleOf <https://example.com/Site/site> ;
    tern:featureType <http://linked.data.gov.au/def/tern-cv/2090cfd9-8b6b-497b-9512-497456a18b99> ;
.

<https://example.com/Sampler/bait-container>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ;
    rdfs:label "bait container" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/a2afccd5-766e-44bc-98c1-f27aae26727f> ;
    tern:featureType "bait container" ;
.

<https://example.com/Sampler/camera-traps>
    a
        tern:FeatureOfInterest ,
        tern:Sampler ;
    rdfs:label "camera traps" ;
    dcterms:identifier "sampler-camera-traps-001" ;
    void:inDataset <https://example.com/dataset/1> ;
    ssn:implements <https://linked.data.gov.au/def/nrm/a2afccd5-766e-44bc-98c1-f27aae26727f> ;
    tern:featureType "camera traps" ;
    tern:hasAttribute
        [
            rdfs:label "sd card id" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/2d4905bc-db1c-4713-acf6-abcf8cf58418> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "camera trap year" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ec93bcc2-e395-4655-820c-c3aaf28bafdb> ;
            tern:hasSimpleValue 2 ;
            tern:hasValue [
                    a tern:Integer ;
                    rdf:value 2
                ]
        ] ,
        [
            rdfs:label "camera trap make" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/afc9fe4a-4bcd-47db-a9f4-6a977b2a244d> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "illumination" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/88513882-4a3e-4c7c-8454-d9d5908e006f> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "camera trap model" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/92686f93-d2a9-4bfa-ac49-ed90eea5a311> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "activation mechanism" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/fe1ae759-cbad-4e64-afe7-29fa51f77e13> ;
            tern:hasSimpleValue "The value is from survey."^^xsd:string ;
            tern:hasValue [
                    a tern:Text ;
                    rdf:value "The value is from survey."^^xsd:string
                ]
        ] ,
        [
            rdfs:label "trigger speed" ;
            void:inDataset <https://example.com/dataset/1> ;
            tern:attribute <https://linked.data.gov.au/def/nrm/ae020c12-9956-40aa-a21a-7c410dbced95> ;
            tern:hasSimpleValue "2.22"^^xsd:float ;
            tern:hasValue [
                    a tern:Float ;
                    rdf:value "2.22"^^xsd:float ;
                    tern:unit unit:SEC
                ]
        ] ;
.

<https://example.com/Site/site>
    a tern:Site ;
    rdfs:label "site" ;
    void:inDataset <https://example.com/dataset/1> ;
.

```

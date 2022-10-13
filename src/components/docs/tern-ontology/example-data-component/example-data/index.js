const exampleData = {
  // recruitment-age
  // sapling count
  "https://linked.data.gov.au/def/nrm/0f342ac9-800a-4298-a148-ffc953ecd393": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 2,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // tree height
  "https://linked.data.gov.au/def/nrm/20afc22d-7981-44d7-9417-673bb498b242": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 6.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M",
    },
  },
  // diameter at breast height (dbh)
  "https://linked.data.gov.au/def/nrm/6e1c8b97-3655-4a22-9647-02f2c756e789": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 6.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M",
    },
  },
  // seedling count
  "https://linked.data.gov.au/def/nrm/b6a5d847-0698-4cce-8a5e-f2719e142208": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 2,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // plot-soil-description
  // aspect (degrees)
  "https://linked.data.gov.au/def/nrm/0e0423c6-0dc3-40aa-9776-410a94299256": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 26.3,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/DEG",
  },
  // coarse fragment abundance
  "https://linked.data.gov.au/def/nrm/b3dd4df5-589b-476e-8e9e-0af6a7155759": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/72bdd173-9782-55b7-87f9-f3f46ea77312",
    },
  },
  // component of microrelief
  "https://linked.data.gov.au/def/nrm/7f023c76-32e1-4c08-a52f-b900343b4b92": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/0ae36b0d-bc0e-5963-bb10-4418881946ce",
    },
  },
  // condition of soil surface when dry
  "https://linked.data.gov.au/def/nrm/3a1ccb70-41dc-4f57-a74c-62e05aa02c61": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/01b55547-e78c-5eb0-82a3-ee3c13234f3b",
    },
  },
  // erosion type
  "https://linked.data.gov.au/def/nrm/9fc1503b-e690-41f0-a824-99f0e69699f1": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/526a7fb6-fd26-55d6-bbd3-5f2075f6f495",
    },
  },
  // gully depth
  "https://linked.data.gov.au/def/nrm/4aa9e813-8c4c-4fa6-953b-32c59fdd97be": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/1a4c3838-0d31-59eb-be2d-6f713d273091",
    },
  },
  // microrelief horizontal interval distance
  "https://linked.data.gov.au/def/nrm/22caefc0-0201-4bf2-a108-ef173d607bf4": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.2,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M",
    },
  },
  // microrelief vertical interval distance
  "https://linked.data.gov.au/def/nrm/2f87b7cc-c029-4784-92cf-c32055b5c9b7": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.2,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M",
    },
  },
  // slope
  "https://linked.data.gov.au/def/nrm/b036ba09-d061-4a1c-99a8-890efc462a2c": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.2,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/DEG",
    },
  },
  // slope percent tangent
  "https://linked.data.gov.au/def/nrm/bc537f95-6721-4a87-bd30-62d6377424ef": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 12.3,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/PERCENT",
  },
  // soil horizon depth
  "https://linked.data.gov.au/def/nrm/c0b5ae33-438d-42ca-b78e-e384d139fe27": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 12.3,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/CentiM",
  },
  // soil horizon depth - lower
  "https://linked.data.gov.au/def/nrm/66f227c3-6267-4068-9493-dfd909592aaf": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 12.3,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/CentiM",
  },
  // soil horizon depth - upper
  "https://linked.data.gov.au/def/nrm/3b693f41-50b2-4469-bdbb-3b5b877fa2a9": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 12.3,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/CentiM",
  },
  // soil pH
  "https://linked.data.gov.au/def/nrm/f8993f1e-b4d8-47b8-acdd-a74dd84e845e": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
  },
  // soil pit depth
  "https://linked.data.gov.au/def/nrm/cc960a7d-33a1-446a-85dc-8d1f8fda9996": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // soil sample depth
  "https://linked.data.gov.au/def/nrm/93932e83-41aa-48e6-b05c-ecde9bfcca99": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // soil sample depth - lower
  "https://linked.data.gov.au/def/nrm/5040cfbe-eb65-4ce8-899c-f13ab841e7c3": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // soil sample depth - upper
  "https://linked.data.gov.au/def/nrm/2729becc-9e41-4303-9311-ec2a506e62e5": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // fine earth bulk density
  "https://linked.data.gov.au/def/nrm/460784be-8ad5-4c32-b171-93d69984c0b9": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 2.77,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
  },
  // gross soil bulk density
  "https://linked.data.gov.au/def/nrm/a344d029-4b47-455e-89d9-a1040877a5ce": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.34,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
  },
  // soil bulk density
  "https://linked.data.gov.au/def/nrm/ec510708-9ac1-4c8a-bfe2-31ba5bb693da": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 2.44,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
  },
  // basal area count
  "https://linked.data.gov.au/def/nrm/29b37ffc-9a41-44f7-889a-bab63b48fa93": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 3,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // basal area sweep hit type
  "https://linked.data.gov.au/def/nrm/43178892-92a6-434f-9895-340700e299e6": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/3e0a5d97-c623-477e-98fe-8fe120907530",
    },
  },
  // circumference at breast height
  "https://linked.data.gov.au/def/nrm/2d042596-d49a-4139-92f5-dc0f23737e76": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 0.565,
      "@type": "http://www.w3.org/2001/XMLSchema#float",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M",
    },
  },
  // field species name
  "https://linked.data.gov.au/def/nrm/26f843a5-e1ed-46da-b22b-053e567e3227": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "Melaleuca citrolens",
    },
  },
  // stand basal area
  "https://linked.data.gov.au/def/nrm/f437f23a-7965-4bae-9dc3-2aead06786ec": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.34,
      "@type": "http://www.w3.org/2001/XMLSchema#float",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M2-PER-HA",
    },
  },
  // coarse woody debris count
  "https://linked.data.gov.au/def/nrm/acdb15e0-a034-454e-b0e4-8b7546cbb5c7": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 2,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // coarse woody debris length
  "https://linked.data.gov.au/def/nrm/b15f883b-c2e7-408e-8146-3754bbd5693f": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 0.565,
      "@type": "http://www.w3.org/2001/XMLSchema#float",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M",
    },
  },
  // coarse woody debris narrowest diameter
  "https://linked.data.gov.au/def/nrm/e73af424-f20d-49b8-81e3-cd30afb5b267": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 12.2,
      "@type": "http://www.w3.org/2001/XMLSchema#float",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/CentiM",
    },
  },
  // coarse woody debris per hectare
  "https://linked.data.gov.au/def/nrm/74b6493b-8dfe-42f6-acb2-0dda5652cf54": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.34,
      "@type": "http://www.w3.org/2001/XMLSchema#float",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/M2-PER-HA",
    },
  },
  // coarse woody debris percent cover
  "https://linked.data.gov.au/def/nrm/5370f9a5-c347-4442-b144-e486f11191a8": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 12.3,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/PERCENT",
  },
  // coarse woody debris volume individual
  "https://linked.data.gov.au/def/nrm/9ce420b8-8070-498c-974f-0eee82f23fd2": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.79,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M3",
  },
  // coarse woody debris widest diameter
  "https://linked.data.gov.au/def/nrm/ee4d10cb-4245-496c-a72c-0696e2014f90": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 0.89,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // cwd decay class
  "https://linked.data.gov.au/def/nrm/fa986148-e44a-4cd3-8ac3-17748eb013f3": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/a4a236eb-4474-59f3-b269-29f812d642b4",
    },
  },
  // canopy health
  "https://linked.data.gov.au/def/nrm/d0a31d21-b475-490e-a8d6-fbe374fc7391": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 0.67,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/PERCENT",
  },
  // dieback from disease
  "https://linked.data.gov.au/def/nrm/0685299e-d22a-4efa-a507-a7614e58a500": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Boolean"],
    value: {
      "@value": false,
      "@type": "http://www.w3.org/2001/XMLSchema#boolean",
    },
  },
  // epicormic growth
  "https://linked.data.gov.au/def/nrm/cacfba72-ae93-4f92-9cc3-bf656d7ab5f0": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Boolean"],
    value: {
      "@value": false,
      "@type": "http://www.w3.org/2001/XMLSchema#boolean",
    },
  },
  // galls and lerps
  "https://linked.data.gov.au/def/nrm/28131f08-1ae4-422f-99cb-3b5bafc7761d": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Boolean"],
    value: {
      "@value": false,
      "@type": "http://www.w3.org/2001/XMLSchema#boolean",
    },
  },
  // grazing
  "https://linked.data.gov.au/def/nrm/cd905dda-06df-4f0e-85eb-b50f9ed2af91": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Boolean"],
    value: {
      "@value": false,
      "@type": "http://www.w3.org/2001/XMLSchema#boolean",
    },
  },
  // growth stage
  "https://linked.data.gov.au/def/nrm/fcfda2f7-84f0-4c26-9f80-c051d129a094": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/1215ec81-a8a8-5100-b846-c50931e6fa27",
    },
  },
  // insect damage
  "https://linked.data.gov.au/def/nrm/33e79578-0946-4f21-9607-ca501e1500c7": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Boolean"],
    value: {
      "@value": false,
      "@type": "http://www.w3.org/2001/XMLSchema#boolean",
    },
  },
  // large tree count
  "https://linked.data.gov.au/def/nrm/1fc43da5-004d-4258-bd33-8ffc9e2e8cba": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 3,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // leaf litter depth
  "https://linked.data.gov.au/def/nrm/f6af2c5e-d193-4337-b845-44550f661854": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/MilliM",
  },
  // mistletoe count
  "https://linked.data.gov.au/def/nrm/6a1d703f-6622-4804-8b78-4c2ac93c97ba": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 2,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // average canopy width
  "https://linked.data.gov.au/def/nrm/5471254f-01e0-4201-8e15-888bb26b8fa5": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 0.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // plant height
  "https://linked.data.gov.au/def/nrm/0e9da717-6c8e-4194-9385-c995d54702e4": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 16.8,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // small tree count
  "https://linked.data.gov.au/def/nrm/48370fb2-ab58-4f19-8d99-6d005f61538a": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 2,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // in-canopy sky
  "https://linked.data.gov.au/def/nrm/85bdd25a-fa08-49de-9f0b-98895cb79aa6": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Boolean"],
    value: {
      "@value": false,
      "@type": "http://www.w3.org/2001/XMLSchema#boolean",
    },
  },
  // plant regenerating height
  "https://linked.data.gov.au/def/nrm/936f6c7d-9432-41d2-8214-00ed64e8f0c4": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 16.8,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // soil char depth
  "https://linked.data.gov.au/def/nrm/d88be090-97b9-40a1-9251-65f5c945b50e": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/MilliM",
  },
  // species intercepted
  "https://linked.data.gov.au/def/nrm/20c219f2-1526-4365-8f77-569cec5f1731": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "Melaleuca citrolens",
    },
  },
  // tree trunk char height
  "https://linked.data.gov.au/def/nrm/3a2b344c-07b5-4536-8db3-06b73bc0e263": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 2.38,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // bare ground percentage
  "https://linked.data.gov.au/def/nrm/9a3e5f88-72e1-43b0-8ba1-6cd63fdee2c5": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 69.82,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/PERCENT",
  },
  // dominant flora species
  "https://linked.data.gov.au/def/nrm/8e782307-4e4d-4cdf-9b10-8d79794065a4": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "Melaleuca citrolens",
    },
  },
  // estimated percent cover
  "https://linked.data.gov.au/def/nrm/a9f6b098-96bf-4faf-a460-2d71213023f6": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 23.82,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/PERCENT",
  },
  // litter cover percentage
  "https://linked.data.gov.au/def/nrm/e89eccd4-1deb-49cc-9103-272f6628a274": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.82,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/PERCENT",
  },
  // plant phenology
  "https://linked.data.gov.au/def/nrm/33c1752f-b5f3-4ac9-9090-e9a4dd3096d1": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "fruiting",
    },
  },
  // substrate cover percentage
  "https://linked.data.gov.au/def/nrm/8993e97e-7639-4e71-bd89-9391321cb84f": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 14.82,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/PERCENT",
  },
  // pan trap count estimate
  "https://linked.data.gov.au/def/nrm/e4fa718e-76d1-47a2-87c9-b683a3ff3c18": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 2,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // plant species in flower
  "https://linked.data.gov.au/def/nrm/2d95624b-e04e-4826-b97d-b74b90db4d56": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "Primula vulgaris",
    },
  },
  // invertebrate - individual life stage count
  "https://linked.data.gov.au/def/nrm/ece0e09e-9e77-499c-b130-27d9c1d855bd": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 9,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // invertebrate - life stage average length
  "https://linked.data.gov.au/def/nrm/f2a11bc9-cc3c-4f8f-8ded-50ab46f73818": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
  },
  // speciment count
  "https://linked.data.gov.au/def/nrm/50da4103-111d-4876-800f-382d5033f1b4": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 9,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },
  // area of litter sampled
  "https://linked.data.gov.au/def/nrm/87709af7-edbf-43a8-a507-d6e5b6bd1b58": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M2",
  },
  // estimate volume of leaf litter
  "https://linked.data.gov.au/def/nrm/4ad7d58a-543b-46b5-83c5-fa87dd8ce1ff": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.07,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M3",
  },
  // estimate volume of leaf litter extraction
  "https://linked.data.gov.au/def/nrm/0e2f04c7-a576-4565-8e4f-2d53a5e26ef7": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.27,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M3",
  },
  // litter depth
  "https://linked.data.gov.au/def/nrm/94b5aec9-33cd-435e-a861-f10f70a1006c": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 7.3,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/CentiM",
  },
  // soil surface temperature
  "https://linked.data.gov.au/def/nrm/375e39af-79d9-4b69-8349-fcc34bf37b68": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 38.9,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/DEG_C",
  },
  // condition thresholds
  "https://linked.data.gov.au/def/nrm/92d0eaf3-0352-45ba-b173-f82923cdd795": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "5 trees died of beetle pest, condition threshold reached.",
    },
  },
  // species and cover
  "https://linked.data.gov.au/def/nrm/e706382f-3cf5-48ff-bc86-6e8902dc2aaf": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "eucalyptus abdita 49%",
    },
  },
  // weeds
  "https://linked.data.gov.au/def/nrm/cefdf9e3-63cb-42fb-9d9b-790dbdebbe45": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "Lycium ferocissimum",
    },
  },
  // fauna length
  "https://linked.data.gov.au/def/nrm/7905c3ec-3901-4fb9-a042-b83066bee975": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 0.45,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // fauna weight
  "https://linked.data.gov.au/def/nrm/375a2c90-71d6-4ff4-99e4-bc033f2bb03c": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 237.4,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/GM",
  },
  // plant size - width
  "https://linked.data.gov.au/def/nrm/9a73de99-19c7-438e-829d-c363ac86b570": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.23,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },
  // animal weight - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/d78e0ad6-9ac8-4adc-a796-61ad458726b3": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 11800.99,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/GM",
  },

  // body length - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/0e9b8207-3282-4b42-b68c-c33951539016": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 1.38,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/M",
  },

  // head length - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/96ccc2b7-7b7f-4e5c-b11f-d5e5c88e245a": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 98.9,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/MilliM",
  },

  // pouch young number - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/88353d7b-8a2c-4b84-b034-71395f4edb93": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 6,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },

  // pouch young size - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/fe18c3aa-7af1-4fe8-bf5f-dcec29a3bea9": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 18.9,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/MilliM",
  },

  // tail length - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/38d1419f-7f3b-4d0e-a2f6-4b152e2d91f7": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/CentiM",
  },

  // testes length - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/93486f3f-bef9-42ee-b3b9-eacaaf9324cf": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/CentiM",
  },

  // testes width - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/3d011f97-5d22-409c-a382-36b378db8a14": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 3.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: "http://qudt.org/vocab/unit/CentiM",
  },

  // vertebrate class - vertebrate-identify
  "https://linked.data.gov.au/def/nrm/8997be1e-cf91-4ca6-a641-eb57aa10d9e6": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "Mammalia (mammals)",
    },
  },

  // number of individuals
  "https://linked.data.gov.au/def/nrm/b2d28629-c986-4c05-9d4a-8b05e99a0a94": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Integer"],
    value: {
      "@value": 20,
      "@type": "http://www.w3.org/2001/XMLSchema#integer",
    },
  },

  // Adequate recruitment
  "https://linked.data.gov.au/def/nrm/0f6d5b8e-4c3c-41b9-a8c0-99039718b59c": {
    "@type": ["https://w3id.org/tern/ontologies/tern/boolean"],
    value: {
      "@value": false,
      "@type": "http://www.w3.org/2001/XMLSchema#Boolean",
    },
  },
  // soil matrix dry color
  "https://linked.data.gov.au/def/nrm/2a5c4ab0-124b-4430-a612-e069173bc82a": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "gray",
    },
  },
  // soil matrix wet color
  "https://linked.data.gov.au/def/nrm/bdc0806b-acdd-402d-a1c1-6b9618f98401": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "gray",
    },
  },
  // body condition
  "https://linked.data.gov.au/def/nrm/a0bf61f1-56fa-4653-8f68-be2f732357c8": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "healthy",
    },
  },
  // signs of pregnancy
  "https://linked.data.gov.au/def/nrm/88472a97-fd55-4382-9d6e-793164c574f1": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Text"],
    value: {
      "@value": "pregnant",
    },
  },
  // vegetation health
  "https://linked.data.gov.au/def/nrm/7d4eaa80-0f2a-4828-886e-34cd5a4e2746": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/25baf194-afec-5ba4-9708-7d6cfdcc2615",
    },
  },
  // vertebrate pest presence evidence
  "https://linked.data.gov.au/def/nrm/adc24cd3-b652-4696-bca0-b881b0111cdb": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/ad234f5d-8187-5a39-9c52-e06a81f83098",
    },
  },
  // vertebrate pest type
  "https://linked.data.gov.au/def/nrm/85d5f75c-776f-44a3-abe6-e71c695f1754": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/e5407dff-766c-5b3f-827a-3b1a4e54f624",
    },
  },
  // tree trunk type
  "https://linked.data.gov.au/def/nrm/3da2a8ca-c0a3-4761-8736-507255eeee68": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/fe116024-67ba-5d87-bd04-751bbb2d0b28",
    },
  },
  // plant status
  "https://linked.data.gov.au/def/nrm/ddd0c631-bfdd-4b0f-88de-a5eb1a0181c6": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/1a57c444-66a7-5746-bebc-2be757ee54c8",
    },
  },
  // soil electricity conductivity
  "https://linked.data.gov.au/def/nrm/22815fee-434e-4e21-b85f-8005a669a865": {
    "@type": ["https://w3id.org/tern/ontologies/tern/Float"],
    value: {
      "@value": 6.5,
      "@type": "http://www.w3.org/2001/XMLSchema#double",
    },
    unit: {
      "@value": "http://qudt.org/vocab/unit/MilliS-PER-M",
    },
  },
  // age class
  "https://linked.data.gov.au/def/nrm/59df7c05-1521-4161-86e4-8e6a8feb4002": {
    "@type": ["https://w3id.org/tern/ontologies/tern/IRI"],
    value: {
      "@id":
        "https://linked.data.gov.au/def/nrm/2befa1d5-33f2-5bc1-bc4c-0609b8dad9b9",
    },
  },
};

export default exampleData;

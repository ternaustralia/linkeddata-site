---
title: Information Models
---

import ExternalLink from '../components/ExternalLink'

# Overview

This page lists the information models used and published by TERN.

## TERN Ontology

The TERN Ontology is a conceptual information model to represent plot-based ecological surveys. It defines concepts to describe sites, site visits, features of interest, observations, samplings, and samples. Survey collection protocols generally differ between different programs and organisations. To cater for existing and future survey collection protocols, the TERN Ontology ensures data harmonisation is possible at the core conceptual level while also capturing the intricacies of each survey collection protocol using an extensible framework with SKOS controlled vocabularies.

The TERN Ontology enables a standard representation of ecological survey data for data integration and data exchange. Different systems use the TERN Ontology to exchange survey data using standard RDF serialisations as an exchange format. The TERN Ontology is modelled as a SHACL ontology to ensure incoming and outgoing data conforms to the standard.

The TERN Ontology is based on existing RDF standards and promotes Linked Data principles to enable FAIR data. Exchanging survey data between different data sources in an agreed standard will substantially improve the quality of the published data and ensure the data is harmonised and interpreted correctly.

[View more](/tern-ontology)

## TERN Organisations Ontology

A small profile of schema.org and the W3C Organisations ontology containing several classes to describe people and organisations with additional properties.

<p><ExternalLink href="https://w3id.org/tern/ontologies/org/">View more</ExternalLink></p>

## TERN Location Alignment Ontology

An alignment of a few widely used ontologies for describing locations, features and geometries.

<p><ExternalLink href="https://w3id.org/tern/ontologies/loc/">View more</ExternalLink></p>

## TERN Metadata Profile of ISO 19115-3:2016 and ISO 19157-2:2016

TERN has developed an ISO 19115-3:2016 and ISO 19157-2:2016 profile and uses it as the primary metadata standard for representing the data collections published on the TERN Data Discovery Portal (TDDP). The profile specifies the required metadata properties to aid data discovery and applies several controlled vocabularies (e.g., topic category, parameter, units, instrument, organization, and person) to standardize the metadata representation. The XML template of the profile is available at <ExternalLink href="https://github.com/ternaustralia/TERN-ISO19115">https://github.com/ternaustralia/TERN-ISO19115</ExternalLink>.

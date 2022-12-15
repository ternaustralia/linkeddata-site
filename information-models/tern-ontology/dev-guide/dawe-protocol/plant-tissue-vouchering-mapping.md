---
sidebar_position: 3
---

# Plant Tissue Vouchering protocol mapping

The mapping of the source app data to the TERN Ontology on this page is applicable to the [Plant tissue vouchering](https://linked.data.gov.au/def/nrm/1f2ac884-2177-403a-a6c3-27e109b1fc95) protocol.

## Conceptual modelling

The Plant tissue vouchering module involves the collection, rapid drying and appropriate storage of representative plant tissue (i.e. leaf) samples from the vascular flora species within the plot.

Replicate samples can be collected, and the minimum distance between replicate samples will be recorded in meters. `replicate number` and `minimum distance between replicates` are attributes to be recorded during `tern:Sampling` 'plant tissue vouchering'.

### Diagram

The following diagram is showing plant tissue vouchering

<iframe frameBorder="0" style={{width:"100%",height:"593px"}} src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=plant-tissue-vouchering-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1caMM1I8sxMhtruRJJwglWKgnXe1OfLAa%26export%3Ddownload"></iframe>

<a href="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=plant-tissue-vouchering-example#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1caMM1I8sxMhtruRJJwglWKgnXe1OfLAa%26export%3Ddownload">View diagram in new tab.</a>

## Survey data

Example data from source for `Plant tissue vouchering` protocol surveys:

- [OpenAPI docs for floristics veg genetic voucher](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-genetic-voucher/post%2Ffloristics-veg-genetic-vouchers)
- [OpenAPI docs for floristics veg genetic voucher survey](https://beta.core-api.paratoo.tern.org.au/documentation#/Floristics-veg-genetic-voucher-survey/post%2Ffloristics-veg-genetic-voucher-surveys)

1. Survey data from floristics veg genetic voucher:

```json
{
  "floristics_voucher_full": 0,
  "floristics_voucher_lite": 0,
  "min_distance_between_replicates": 0,
  "replicate": [
    {
      "replicate_number": 0,
      "genetic_voucher_barcode": "string"
    }
  ],
  "survey": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

2. Survey data from floristics veg genetic voucher survey:

```json
{
  "start_date_time": "2022-12-15T01:57:56.192Z",
  "end_date_time": "2022-12-15T01:57:56.192Z",
  "protocol_variant": "lite",
  "surveyId": "string",
  "plot_visit": 0,
  "createdBy": 0,
  "updatedBy": 0
}
```

The data recorded as surveys in the data collection app are mapped directly to site visits in the TERN Ontology.

import { test, expect } from "@jest/globals";

import { fetcher } from "../../src/data/dataFetcher";
import {
  sparqlQuery,
  endpoint,
} from "../../src/components/docs/tern-ontology/rlp-protocol/OverviewTable";
import { getFetchOptions } from "../../src/data/utils";

test("Plot Description observable proeprties overview table - query responds with at least 20 records with the expected vars", async () => {
  const fetchOptions = getFetchOptions(sparqlQuery('https://linked.data.gov.au/def/test/dawe-cv/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312'));
  const result = await fetcher(endpoint, JSON.stringify(fetchOptions));
  expect(result.head.vars).toEqual([
    "concept",
    "label",
    "featureType",
    "featureTypeLabel",
    "valueType",
    "valueTypeLabel",
    "categoricalCollection",
    "categoricalCollectionLabel",
  ]);
  expect(result.results.bindings.length).toBeGreaterThanOrEqual(20);
});

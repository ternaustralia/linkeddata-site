import { test, expect } from "@jest/globals";

import { fetcher } from "../../src/data/dataFetcher";
import {
  sparqlQuery,
  endpoint,
} from "../../src/components/docs/tern-ontology/surveillance-protocol/PlotDescriptionObservableProperties";
import { getFetchOptions } from "../../src/data/utils";

test("query responds with at least 20 records with the expected vars", async () => {
  const fetchOptions = getFetchOptions(sparqlQuery);
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

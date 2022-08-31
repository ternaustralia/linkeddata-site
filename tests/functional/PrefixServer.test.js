import { test, expect } from "@jest/globals";

import { prefixEndpoint } from "../../src/prefixEndpoint";
import { fetcher } from "../../src/data/dataFetcher";

test("fetching curies from the prefix server works with the current fetcher implementation.", async () => {
  const searchParams = new URLSearchParams("");
  searchParams.set("q", "http://www.w3.org/2004/02/skos/core#prefLabel");

  const result = await fetcher(prefixEndpoint + "?" + searchParams);
  expect(result).toEqual({ success: true, value: "skos:prefLabel" });
});

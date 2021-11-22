import useSWR from "swr";
import axios from "axios";
import { getFetchOptions } from "./utils";

// const fetcher = (...args) => fetch(...args).then(res=> res.json())
export const fetcher = async (...args) => {
  const url = args[0];

  let fetchOptions = null;
  if (args.length > 1) {
    fetchOptions = JSON.parse(args[1]);
    const params = new URLSearchParams();
    params.append("query", fetchOptions.sparqlQuery);
    const res = await axios.post(url, params, fetchOptions);
    return res.data;
  } else {
    const res = await axios.post(url, null, fetchOptions);
    return res.data;
  }
};

export function useSparql(sparqlEndpoint, sparqlQuery) {
  const fetchOptions = getFetchOptions(sparqlQuery);
  const { data, error } = useSWR(
    [sparqlEndpoint, JSON.stringify(fetchOptions)],
    fetcher
  );

  return { data, error };
}

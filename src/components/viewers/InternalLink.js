import React from 'react'
import useSWR from "swr"
import { fetcher } from "../../common/dataFetcher"
import { getFetchOptions } from "./utils"
import { Link } from 'react-router-dom';

export default function InternalLink({ resourceUri, settings }) {
  const {pageRoute, endpoint} = settings
  const sparqlQuery = settings.queries.getLabel(resourceUri)
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Link to={`${pageRoute}?uri=${resourceUri}`}><strong>{data.results.bindings[0].label.value}</strong></Link>
  )
}
import React from 'react'
import useSWR from "swr"
import { fetcher } from "../../../common/dataFetcher"
import { getFetchOptions } from "./utils"
import { Link } from 'react-router-dom';

export default function InternalLink({ classUri, pageRoute, endpoint }) {
  const sparqlQuery = `
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      select *
      from <http://www.ontotext.com/explicit>
      from <https://w3id.org/tern/ontologies/tern/>
      where {
          <${classUri}> rdfs:label ?label .
      }
      limit 1
    `
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Link to={`${pageRoute}?uri=${classUri}&endpoint=${endpoint}`}><strong>{data.results.bindings[0].label.value}</strong></Link>
  )
}
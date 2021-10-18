
import React from 'react'
import useSWR from "swr"
import { fetcher } from "../../common/dataFetcher"
import ExternalLink from "../ExternalLink"
import { getFetchOptions } from "../viewers/utils"

const sparqlQuery = `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
select ?concept (sample(?_label) as ?label)
where { 
    # Plot Description Observable Properties
    <http://linked.data.gov.au/def/test/dawe-cv/bfac1b1f-a14e-4e9a-ab7f-c43a8bc1a312> skos:member ?concept .
    service <repository:tern_vocabs_core> {
        ?concept skos:prefLabel ?_label .
    }
} 
group by ?concept
order by lcase(?label)
`

const endpoint = 'https://graphdb.tern.org.au/repositories/dawe_vocabs_core'

export default function PlotDescriptionObservableProperties() {
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const concepts = data.results.bindings.map(value => (
    <li>
      <ExternalLink href={value.concept.value}>{value.label.value}</ExternalLink>
    </li>
  ))

  return (
    <ul>
      {concepts}
    </ul>
  )
}
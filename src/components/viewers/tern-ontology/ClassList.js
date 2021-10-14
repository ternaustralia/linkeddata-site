import useSWR from 'swr';
import { fetcher } from '../../../common/dataFetcher';
import { getNodeShapes } from './queries';
import { getFetchOptions } from './utils';
import React from 'react'
import { Link } from 'react-router-dom';

function ListItem({classUri, pageRoute, endpoint}) {
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
    <li>
      <Link to={`${pageRoute}?uri=${classUri}&endpoint=${endpoint}`}>{data.results.bindings[0].label.value}</Link>
    </li>
  )
}

export default function ClassList({ pageRoute, endpoint }) {
  const sparqlQuery = getNodeShapes()
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const items = data.results.bindings.map(item => {
    return <ListItem key={item.class.value} classUri={item.class.value} pageRoute={pageRoute} endpoint={endpoint} />
  })

  return (
    <div className="margin-left--lg">
      <h2>Classes</h2>
      <ul>
        {items}
      </ul>
    </div>
  )
}
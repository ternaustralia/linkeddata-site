import useSWR from 'swr';
import { fetcher } from '../../../common/dataFetcher';
import { getNodeShapes } from './queries';
import { getFetchOptions } from './utils';
import React from 'react'
import InternalLink from './InternalLink';
import styles from './classlist.modules.css';

export default function ClassList({ pageRoute, endpoint }) {
  const sparqlQuery = getNodeShapes()
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const items = data.results.bindings.map(item => {
    return (
      <div className={styles.classItem} key={item.class.value}>
        <InternalLink classUri={item.class.value} pageRoute={pageRoute} endpoint={endpoint} />
      </div>
    )
  })

  return (
    <div className={styles.classList + " margin-left--md padding--sm"}>
      <h2>Classes</h2>
      {items}
    </div>
  )
}
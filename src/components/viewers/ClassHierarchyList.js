import useSWR from 'swr';
import { fetcher } from '../../common/dataFetcher';
import { getFetchOptions } from './utils';
import React from 'react'
import InternalLink from './InternalLink';
import styles from './viewer.modules.css';

function HierarchyListItem({ resourceUri, hasSubclass, settings }) {
  const { endpoint, queries } = settings
  const sparqlQuery = queries.getDirectSubclasses(resourceUri)
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  if(hasSubclass === 'false') {
    return (
      <InternalLink resourceUri={resourceUri} settings={settings} />
    )
  }

  return (
    <>
      <InternalLink resourceUri={resourceUri} settings={settings} />
      <ul>
        {data.results.bindings.map(value => (
          <li className={styles.classItem} key={value.directChildClass.value}>
            <HierarchyListItem resourceUri={value.directChildClass.value} hasSubclass={value.hasSubclass.value} settings={settings} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default function ClassHierarchyList({ settings }) {
  const { endpoint, queries } = settings
  const sparqlQuery = queries.getTopLevelClasses()
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR([endpoint, JSON.stringify(fetchOptions)], fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const items = data.results.bindings.map(item => {
    return (
      <div className={styles.classItem} key={item.class.value}>
        <HierarchyListItem resourceUri={item.class.value} hasSubclass={item.hasSubclass.value} settings={settings} />
      </div>
    )
  })

  return (
    <div>
      {items}
    </div>
  )
}
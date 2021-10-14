import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../common/dataFetcher'
import settings from '../pages/viewers/tern-ontology/_settings'
import ExternalLink from './ExternalLink'
import InternalLink from './viewers/tern-ontology/InternalLink'

export default function IRIField({ value }) {

  // A little ugly but, check if the URI is from the TERN Ontology namespace
  // and if it is, then create it as an internal viewer link.
  if (value.startsWith('https://w3id.org/tern/ontologies/tern/')) {
    return <InternalLink classUri={value} pageRoute={settings.pageRoute} endpoint={settings.endpoint} />
  }

  const searchParams = new URLSearchParams('')
  searchParams.set('q', value)
  const endpoint = 'https://prefix.zazuko.com/api/v1/shrink'

  // Don't refetch on error - could be the curie does not exist in the prefix service.
  const swrOptions = {
    shouldRetryOnError: false,
    revalidateOnFocus: false
  }
  const { data, error } = useSWR(endpoint + '?' + searchParams, fetcher, swrOptions)

  const errorView = <code>{value}</code>

  if (error) return errorView
  if (!data) return <div>Loading...</div>

  if (data.success) {
    return (
      <>
        <ExternalLink href={value}>{data.value}</ExternalLink>
      </>
    )
  }
  else {
    return errorView
  }
}
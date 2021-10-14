import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../common/dataFetcher'
import ExternalLink from './ExternalLink'

export default function IRIField({value}) {
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
  
    if(data.success) {
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
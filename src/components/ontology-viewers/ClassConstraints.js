import React from 'react'
import { getFetchOptions } from '../../data/utils';
import useSWR from 'swr';
import { fetcher } from '../../data/dataFetcher';
import IRIField from '../IRIField';

function Cardinality({max, min}) {
  if(max && min && max === min) {
    return <>Exactly {max}</>
  }
  else if(max && !min) {
    return <>Maximum {max}</>
  }
  else if(min && !max) {
    return <>Minimum {min}</>
  }
  else if(max && min) {
    return (
      <>
        <p>Maximum: {max}</p>
        <p>Minimum: {min}</p>
      </>
    )
  }

  return <></>
}

function ExpectedValueTypes({values, settings}) {
  if(!values) {
    return <></>
  }

  if(values.length === 1) {
    return <IRIField value={values[0]} settings={settings} />
  }

  return (
    <ul>
      {values.map((value, idx) => <li key={idx}>{value ? <IRIField value={value} settings={settings} /> : ''}</li>)}
    </ul>
  )
}

function ExpectedValueClassTypes({classes, datatypes, settings}) {
  let values = []

  if(classes) {
    values = values.concat(classes)
  }

  if(datatypes) {
    values = values.concat(datatypes)
  }

  if(!values) {
    return <></>
  }
  
  if(values.length === 1) {
    return <IRIField value={values[0]} settings={settings} />
  }

  return (
    <ul>
      {values.map((value, idx) => <li key={idx}>{value ? <IRIField value={value} settings={settings} /> : ''}</li>)}
    </ul>
  )
}

function ExpectedValues({values, settings}) {
  if(!values) {
    return <></>
  }

  if(values.length === 1) {
    return <>{values[0]}</>
  }

  return (
    <ul>
      {values.map((value, idx) => <li key={idx}>{value ? value : ''}</li>)}
    </ul>
  )
}

function Description({values, settings}) {
  if(!values) {
    return <></>
  }

  if(values.length === 1) {
    return <>{values[0]}</>
  }

  return (
    <ul>
      {values.map((value, idx) => <li key={idx}>{value ? value : ''}</li>)}
    </ul>
  )
}

export default function ClassConstraints({resourceUri, settings}) {
  const { endpoint, queries } = settings
  const sparqlQuery = queries.getClassConstraints(resourceUri)
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR(resourceUri ? [endpoint, JSON.stringify(fetchOptions)] : null, fetcher)

  if (error) return <tr><td>Failed to load</td></tr>
  if (!data && !resourceUri) return <tr><td>No class selected</td></tr>
  if (!data) return <tr><td>Loading...</td></tr>

  const results = {}

  for (const row of data.results.bindings) {
    const internalId = row.id.value
    let p = row.p.value
    let o = row.o.value

    if (p === 'http://www.w3.org/ns/shacl#or') {
      p = row.ppp.value
      o = row.ooo.value
    }

    if (!(internalId in results)) {
      results[internalId] = {}
      results[internalId][p] = []
      results[internalId][p].push(o)
    }
    else {
      if (p in results[internalId]) {
        results[internalId][p].push(o)
      }
      else {
        results[internalId][p] = [o]
      }
    }
  }

  return (
    <>
      <tr>
        <td colSpan="6"><strong>Properties from <IRIField value={resourceUri} settings={settings} /></strong></td>
      </tr>
      {Object.keys(results).map(key => {
        return <tr key={key}>
          <td>
            <strong><IRIField value={results[key]['http://www.w3.org/ns/shacl#path'][0]} settings={settings} /></strong>
          </td>
          <td>
            <Description values={results[key]?.['http://www.w3.org/ns/shacl#description']} settings={settings} />
          </td>
          <td>
            <Cardinality max={results[key]?.['http://www.w3.org/ns/shacl#maxCount']?.[0]} min={results[key]?.['http://www.w3.org/ns/shacl#minCount']?.[0]} />
          </td>
          <td>
            <ExpectedValueTypes values={results[key]?.['http://www.w3.org/ns/shacl#nodeKind']} settings={settings} />
          </td>
          <td>
            <ExpectedValueClassTypes classes={results[key]?.['http://www.w3.org/ns/shacl#class']} datatypes={results[key]?.['http://www.w3.org/ns/shacl#datatype']} settings={settings} />
          </td>
          <td>
            <ExpectedValues values={results[key]?.['http://www.w3.org/ns/shacl#hasValue']} settings={settings} />
          </td>
        </tr>
      })}
    </>
  )
}
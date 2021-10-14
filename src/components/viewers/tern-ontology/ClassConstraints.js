import React from 'react'
import { Table } from 'react-bootstrap'
import { getClassConstraints } from './queries';
import { getFetchOptions } from './utils';
import useSWR from 'swr';
import { fetcher } from '../../../common/dataFetcher';
import IRIField from '../../IRIField';

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

function ExpectedValueTypes({values}) {
  if(!values) {
    return <></>
  }

  if(values.length === 1) {
    return <IRIField value={values[0]} />
  }

  return (
    <ul>
      {values.map((value, idx) => <li key={idx}>{value ? <IRIField value={value} /> : ''}</li>)}
    </ul>
  )
}

function ExpectedValueClassTypes({classes, datatypes}) {
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
    return <IRIField value={values[0]} />
  }

  return (
    <ul>
      {values.map((value, idx) => <li key={idx}>{value ? <IRIField value={value} /> : ''}</li>)}
    </ul>
  )
}

function ExpectedValues({values}) {
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

function Description({values}) {
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

export default function ClassConstraints({ classUri, endpoint }) {
  const sparqlQuery = getClassConstraints(classUri)
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR(classUri ? [endpoint, JSON.stringify(fetchOptions)] : null, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data && !classUri) return <div>No class selected</div>
  if (!data) return <div>Loading...</div>

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

  const constraints = <Table bordered hover>
    <thead>
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Cardinality</th>
        <th>Expected value types</th>
        <th>Expected value class types</th>
        <th>Expected values</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="6"><strong>Properties from <IRIField value={classUri} /></strong></td>
      </tr>
      {Object.keys(results).map(key => {
        return <tr key={key}>
          <td>
            <strong><IRIField value={results[key]['http://www.w3.org/ns/shacl#path'][0]} /></strong>
          </td>
          <td>
            <Description values={results[key]?.['http://www.w3.org/ns/shacl#description']} />
          </td>
          <td>
            <Cardinality max={results[key]?.['http://www.w3.org/ns/shacl#maxCount']?.[0]} min={results[key]?.['http://www.w3.org/ns/shacl#minCount']?.[0]} />
          </td>
          <td>
            <ExpectedValueTypes values={results[key]?.['http://www.w3.org/ns/shacl#nodeKind']} />
          </td>
          <td>
            <ExpectedValueClassTypes classes={results[key]?.['http://www.w3.org/ns/shacl#class']} datatypes={results[key]?.['http://www.w3.org/ns/shacl#datatype']} />
          </td>
          <td>
            <ExpectedValues values={results[key]?.['http://www.w3.org/ns/shacl#hasValue']} />
          </td>
        </tr>
      })}
    </tbody>
  </Table>

  return (
    <>
      {constraints}
    </>
  )
}
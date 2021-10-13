import useSWR from 'swr'
import { fetcher } from '../../../common/dataFetcher'
import { getNodeShape } from './queries'
import { getFetchOptions, getRdfsLabel } from './utils'
import React, { useRef, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import lightCodeTheme from 'prism-react-renderer/themes/github'
import ExternalLink from '../../ExternalLink'
import IRIField from '../../IRIField'

function ClassUri({ children }) {
  // const button = useRef(null);
  // const [showCopied, setShowCopied] = useState(false);

  // const handleCopyCode = () => {
  //   copy(code);
  //   setShowCopied(true);

  //   setTimeout(() => setShowCopied(false), 2000);
  // };

  return (
    <Highlight {...defaultProps} theme={lightCodeTheme} code={children} language="">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
          {/* <button
            ref={button}
            type="button"
            className='clean-btn'
            onClick={handleCopyCode}>Copy</button> */}
        </>
      )}


    </Highlight>
  )
}

function ClassLabel({ children }) {
  return (
    <h1>{children}</h1>
  )
}

export default function ClassView({ selectedClass, endpoint }) {
  const sparqlQuery = getNodeShape(selectedClass)
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR(selectedClass ? [endpoint, JSON.stringify(fetchOptions)] : null, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data && !selectedClass) return <div>No class selected</div>
  if (!data) return <div>Loading...</div>

  const label = getRdfsLabel(data)

  // TODO: Refactor this property values into its own component.
  // TODO: Render a different component based on the value.type. 
  //   E.g., IRI, String (lang), Number, Bool, etc.
  const propertyValues = {}
  for(const row of data.results.bindings) {
    const p = row.p.value
    const o = row.o
    if(propertyValues.hasOwnProperty(row.p.value)) {
      propertyValues[p].push(o)
    }
    else {
      propertyValues[p] = [o]
    }
  }

  const properties = []
  for(const property in propertyValues) {
    properties.push({
      property: property,
      values: propertyValues[property]
    })
  }

  return (
    <>
      <ClassLabel>{label}</ClassLabel>
      <pre>{selectedClass}</pre>

      <hr></hr>
      
      {properties.map(property => <div key={property.property}>
        <IRIField value={property.property} /> 
        <ul>
          {property.values.map(value => value.type === 'uri' ? <li key={value.value}><IRIField key={value.value} value={value.value} /></li> : <li key={value.value}>{value.value}</li>)}
        </ul>
      </div>)}

      <pre>{JSON.stringify(propertyValues, null, 2)}</pre>
      
    </>
  )
}
import useSWR from 'swr'
import { fetcher } from '../../../common/dataFetcher'
import { getNodeShape } from './queries'
import { getFetchOptions, getRdfsLabel } from './utils'
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import lightCodeTheme from 'prism-react-renderer/themes/github'
import IRIField from '../../IRIField'
import ClassConstraints from './ClassConstraints'

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

function ResourceLabel({ children }) {
  return (
    <h1>{children}</h1>
  )
}

export default function ResourceView({ resourceUri, endpoint }) {
  const sparqlQuery = getNodeShape(resourceUri)
  const fetchOptions = getFetchOptions(sparqlQuery)
  const { data, error } = useSWR(resourceUri ? [endpoint, JSON.stringify(fetchOptions)] : null, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data && !resourceUri) return <div>No class selected</div>
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

  let rdfTypes = []
  const properties = []
  for(const property in propertyValues) {
    properties.push({
      property: property,
      values: propertyValues[property]
    })

    if(property === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type') {
      rdfTypes = rdfTypes.concat(propertyValues[property])
    }
  }

  return (
    <div className="margin-left--md padding--sm">
      <ResourceLabel>{label}</ResourceLabel>
      <p>IRI: <code>{resourceUri}</code></p>
      
      {properties.map(property => <div key={property.property}>
        <strong><IRIField value={property.property} /></strong>
        <ul>
          {property.values.map(value => {
            if(value.type === 'uri') {
              return <li key={value.value}><IRIField key={value.value} value={value.value} /></li>
            }
            else {
              return <li key={value.value}>{value.value}</li>
            }
          })}
        </ul>
      </div>)}

      {/* Only render ClassConstraints if it is a sh:NodeShape */}
      {rdfTypes.some(c => c.value === 'http://www.w3.org/ns/shacl#NodeShape') ? <ClassConstraints classUri={resourceUri} endpoint={endpoint} /> : ''}
    </div>
  )
}
import useSWR from 'swr'
import { fetcher } from '../../../common/dataFetcher'
import { getNodeShape } from './queries'
import { getFetchOptions, getRdfsLabel } from './utils'
import React, { useRef, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import lightCodeTheme from 'prism-react-renderer/themes/github'

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

  return (
    <>
      <ClassLabel>{label}</ClassLabel>
      <ClassUri>{selectedClass}</ClassUri>

      <hr></hr>
      
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
export function getFetchOptions(sparqlQuery) {
  return {
    method: 'POST',
    headers: {
      accept: 'application/sparql-results+json',
      'content-type': 'application/x-www-form-urlencoded',
    },
    // https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch
    body: [encodeURIComponent('query') + '=' + encodeURIComponent(sparqlQuery)]
  }
}

export function getRdfsLabel(data) {
  const labelArray = data.results.bindings.filter(item => item?.p?.value === 'http://www.w3.org/2000/01/rdf-schema#label')
  const label = labelArray[0]?.o?.value
  return label
}
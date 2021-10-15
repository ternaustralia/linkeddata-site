export const baseUri = 'https://w3id.org/tern/ontologies/tern/'

export const getClasses = () => {
  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  select distinct ?class
  from <http://www.ontotext.com/explicit>
  from <https://w3id.org/tern/ontologies/tern/>
  where {
    ?class a sh:NodeShape
  
    filter(!isBlank(?class))
    filter(strstarts(str(?class), "https://w3id.org/tern/ontologies/tern/"))
  }
  order by ?class
  `

  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  select distinct ?class
  from <http://www.ontotext.com/explicit>
  from <https://w3id.org/tern/ontologies/tern/>
  where {
    {
      optional { ?class a rdfs:Class }        
    }
    union {
      optional { ?class a owl:Class }        
    }
    union {
        optional { ?class a sh:NodeShape }
    }
  
    filter(!isBlank(?class))
    filter(strstarts(str(?class), "https://w3id.org/tern/ontologies/tern/"))
  }
  order by ?class
  `
}

export function getResource(classUri) {
  return `
  PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
  select *
  from <http://www.ontotext.com/explicit>
  from <https://w3id.org/tern/ontologies/tern/>
  where {
      <${classUri}> ?p ?o .
      filter(!isBlank(?p))
      filter(!isBlank(?o))
  }
  order by ?p
  `
}

export function getClassConstraints(classUri) {
  return `
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX tern: <https://w3id.org/tern/ontologies/tern/>

  SELECT ?id ?p ?o ?ppp ?ooo
  from <http://www.ontotext.com/explicit>
  from <https://w3id.org/tern/ontologies/tern/>
  WHERE { 
      <${classUri}> sh:property ?id .
      ?id ?p ?o .

      OPTIONAL { 
          ?o rdf:rest*/rdf:first ?oo .
          ?oo ?ppp ?ooo .
      }
  }
  `
}

export function getLabel(resourceUri) {
  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  select *
  from <http://www.ontotext.com/explicit>
  from <https://w3id.org/tern/ontologies/tern/>
  where {
      <${resourceUri}> rdfs:label ?label .
  }
  limit 1
`
}
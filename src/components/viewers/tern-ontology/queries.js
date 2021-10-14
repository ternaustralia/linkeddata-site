export const getNodeShapes = () => {
  return `
    PREFIX sh: <http://www.w3.org/ns/shacl#>
    select *
    from <http://www.ontotext.com/explicit>
    from <https://w3id.org/tern/ontologies/tern/>
    where {
        ?class a sh:NodeShape
        filter(!isBlank(?class))
    }
    order by ?class
    `
}

export function getNodeShape(classUri) {
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
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
  }
    `
}
export const baseUri = "https://w3id.org/tern/ontologies/tern/";
const namedGraph = baseUri;

export function getDirectSubclasses(resourceUri) {
  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  SELECT DISTINCT ?directChildClass ?hasSubclass
  from <http://www.ontotext.com/explicit>
  from <${namedGraph}>
  WHERE {
    ?directChildClass rdfs:subClassOf <${resourceUri}> .
    ?class sh:targetClass ?directChildClass .
    
    BIND(
        EXISTS {
            ?childClass rdfs:subClassOf <${resourceUri}>
        }
        as ?hasSubclass
    )
  }
  order by ?directChildClass
  `;
}

export function getTopLevelClasses() {
  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  SELECT distinct ?class ?hasSubclass
  FROM <http://www.ontotext.com/explicit>
  FROM <${namedGraph}>
  WHERE {
      ?_class a sh:NodeShape .
      ?_class sh:targetClass ?class .
      OPTIONAL {
          ?class rdfs:subClassOf ?parentClass .
          FILTER(isIRI(?parentClass))
      }

      FILTER(!isBlank(?class))
      # FILTER(STRSTARTS(STR(?class), "${baseUri}"))

      FILTER NOT EXISTS {
          ?class rdfs:subClassOf ?other .
          FILTER(STRSTARTS(STR(?other), "${baseUri}"))
      }

      BIND(
          EXISTS {
              ?childClass rdfs:subClassOf ?class
          }
          as ?hasSubclass
      )

      ?class rdfs:label ?label .
  }
  ORDER BY ?label
  `;
}

export const getClasses = () => {
  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  SELECT distinct ?class
  FROM <http://www.ontotext.com/explicit>
  FROM <${namedGraph}>
  WHERE {
    ?_class a sh:NodeShape .
    ?_class sh:targetClass ?class .
  
    FILTER(!isBlank(?class))
    # FILTER(strstarts(str(?class), "${baseUri}"))

    ?class rdfs:label ?label .
  }
  ORDER BY ?label
  `;

  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  SELECT distinct ?class
  FROM <http://www.ontotext.com/explicit>
  FROM <${namedGraph}>
  WHERE {
    {
      OPTIONAL { ?class a rdfs:Class }        
    }
    UNION {
      OPTIONAL { ?class a owl:Class }        
    }
    UNION {
        OPTIONAL { ?class a sh:NodeShape }
    }
  
    FILTER(!isBlank(?class))
    FILTER(strstarts(str(?class), "${baseUri}"))
  }
  ORDER by ?class
  `;
};

export function getResource(classUri) {
  return `
  PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  SELECT distinct ?p ?o
  FROM <http://www.ontotext.com/explicit>
  FROM <${namedGraph}>
  WHERE {
    {
      <${classUri}> ?p ?o .
      filter(!isBlank(?p))
      filter(!isBlank(?o))
    }
    UNION {
      ?class sh:targetClass <${classUri}> .
      ?class ?p ?o .
      filter(!isBlank(?p))
      filter(!isBlank(?o))
      filter(?p != sh:targetClass)
    }
  }
  ORDER by ?p
  `;
}

export function getClassConstraints(classUri) {
  return `
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX tern: <https://w3id.org/tern/ontologies/tern/>

  SELECT ?id ?p ?o ?ppp ?ooo
  FROM <http://www.ontotext.com/explicit>
  FROM <${namedGraph}>
  WHERE { 
      ?class sh:targetClass <${classUri}> .
      ?class sh:property ?id .
      ?id ?p ?o .

      OPTIONAL { 
          ?o rdf:rest*/rdf:first ?oo .
          ?oo ?ppp ?ooo .
      }
  }
  `;
}

export function getLabel(resourceUri) {
  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  SELECT (SAMPLE(?_label) as ?label)
  FROM <http://www.ontotext.com/explicit>
  FROM <${namedGraph}>
  WHERE {
    {
      <${resourceUri}> rdfs:label ?_label .
    }
    UNION {
      <${resourceUri}> skos:prefLabel ?_label .
    }
    UNION {
      <${resourceUri}> sh:name ?_label .
    }
  }
  LIMIT 1
`;
}

export function getSuperClasses(resourceUri) {
  return `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX sh: <http://www.w3.org/ns/shacl#>
  SELECT *
  FROM <http://www.ontotext.com/explicit>
  FROM <${namedGraph}>
  WHERE {
      <${resourceUri}> rdfs:subClassOf+ ?superclass
      FILTER(!isBlank(?superclass))
      FILTER(strstarts(str(?superclass), "${baseUri}"))
  }
  `;
}

export function resourceExists(resourceUri) {
  return `
ASK {
  GRAPH <${namedGraph}> {
      <${resourceUri}>  ?p ?o .       
  }
}
`;
}

function getSparqlQuery(collectionUri) {
  const sparqlQuery = `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
select ?concept ?featureType (sample(?__label) as ?label) (sample(?_featureTypeLabel) as ?featureTypeLabel) ?valueType (sample(?_valueTypeLabel) as ?valueTypeLabel) ?categoricalCollection (sample(?_categoricalCollectionLabel) as ?categoricalCollectionLabel)
from <http://www.ontotext.com/explicit>
from <https://linked.data.gov.au/def/test/dawe-cv/>
where { 
    # Collection of observable properties.
    <${collectionUri}> skos:member ?concept .
    
    ?concept skos:prefLabel ?_label .
    bind(str(?_label) as ?__label)

    optional { 
        ?concept tern:hasFeatureType ?featureType .
        service <https://graphdb.tern.org.au/repositories/tern_vocabs_core> {
            ?featureType skos:prefLabel ?_featureTypeLabel .
        }
    }

    optional {
      ?concept tern:valueType ?valueType .
      service <https://graphdb.tern.org.au/repositories/knowledge_graph_core?context=%3Chttps%3A%2F%2Fw3id.org%2Ftern%2Fontologies%2Ftern%2F%3E&infer=false> {
        ?valueType skos:prefLabel ?_valueTypeLabel .
      }
    }

    optional {
      ?concept tern:hasCategoricalCollection ?categoricalCollection .
      optional {
          {
              service <https://graphdb.tern.org.au/repositories/tern_vocabs_core> {
                  ?categoricalCollection skos:prefLabel ?_categoricalCollectionLabel .
              }
          }
          union {
              service <https://graphdb.tern.org.au/repositories/ausplots_vocabs_core> {
                  ?categoricalCollection skos:prefLabel ?_categoricalCollectionLabel .
              }
          }
          union {
              ?categoricalCollection skos:prefLabel ?_categoricalCollectionLabel .
          }
      }
  }
} 
group by ?concept ?featureType ?valueType ?categoricalCollection
order by lcase(?label)
`;

  return sparqlQuery;
}

module.exports = {
  getSparqlQuery,
};

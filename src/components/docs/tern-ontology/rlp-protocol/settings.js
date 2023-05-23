import settings from "../../../../pages/viewers/dawe-vocabs/_settings";

export const sparqlQuery = (moduleOpCollectionUri) => {
  return `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX tern: <https://w3id.org/tern/ontologies/tern/>
select ?concept (sample(?__label) as ?label) ?featureType (sample(?_featureTypeLabel) as ?featureTypeLabel) ?valueType (sample(?_valueTypeLabel) as ?valueTypeLabel) ?categoricalCollection (sample(?_categoricalCollectionLabel) as ?categoricalCollectionLabel)
from <http://www.ontotext.com/explicit>
from <${settings.queries.namedGraph}>
where { 
    # Plot Description Observable Properties
    <${moduleOpCollectionUri}> skos:member ?concept .
    ?concept skos:prefLabel ?_label .
    bind(str(?_label) as ?__label)

    optional { 
      ?metadata <urn:property:featureType> ?featureType ;
      <urn:property:observableProperty> ?concept ;
      <urn:property:observablePropertiesCollection> <${moduleOpCollectionUri}> .
        service <https://graphdb.tern.org.au/repositories/tern_vocabs_core> {
            ?featureType skos:prefLabel ?_featureTypeLabel .
        }
    }

    optional {
      ?concept tern:valueType ?valueType .
      optional {
          service <https://graphdb.tern.org.au/repositories/knowledge_graph_core?context=%3Chttps%3A%2F%2Fw3id.org%2Ftern%2Fontologies%2Ftern%2F%3E&infer=false> {
          ?valueType rdfs:label ?_valueTypeLabel .
        }
      }
    }

    optional {
        ?concept tern:hasCategoricalValuesCollection ?categoricalCollection .
        ?categoricalCollection skos:prefLabel ?_categoricalCollectionLabel .
    }
} 
group by ?concept ?featureType ?valueType ?categoricalCollection
order by lcase(?label)
`;
};

export const endpoint =
  "https://graphdb.tern.org.au/repositories/dawe_vocabs_core";

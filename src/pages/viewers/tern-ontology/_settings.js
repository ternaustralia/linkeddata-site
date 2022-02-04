import * as queries from "./_queries";

const settings = {
  title: "TERN Ontology viewer",
  pageRoute: "/viewers/tern-ontology",
  // endpoint: 'https://graphdb.tern.org.au/repositories/knowledge_graph_core?infer=false',
  endpoint:
    "https://cors-anywhere.edmondchuc.com/http://graphdb-test.tern.org.au/repositories/knowledge_graph_core?infer=false",
  queries: queries,
};
export default settings;

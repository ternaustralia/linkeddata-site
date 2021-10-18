import * as queries from './_queries'

const settings = {
  title: 'TERN Organisation Ontology viewer',
  pageRoute: '/viewers/tern-org-ontology',
  endpoint: 'https://graphdb.tern.org.au/repositories/knowledge_graph_core?infer=false',
  queries: queries
}
export default settings
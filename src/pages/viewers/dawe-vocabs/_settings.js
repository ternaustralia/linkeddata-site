import * as queries from './_queries'

const settings = {
    title: 'DAWE RLP Controlled Vocabularies',
    pageRoute: '/viewers/dawe-vocabs',
    endpoint: 'http://localhost:7200/repositories/dawe_vocabs_core?infer=false',
    queries: queries
}
export default settings
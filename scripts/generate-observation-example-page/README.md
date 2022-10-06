This folder is used to generate observation examples for modules.

Steps:

1. Add the module item in `moduleLookup` with the properties collection URI, starting index, and sparql endpoint.
2. Change the `moduleName` to current module, like `plot description`.
3. In terminal, run `cd scripts/generate-observation-example-page`, `node index.js`; then observation examples files will be generated in `./output`.
4. In `information-models/tern-ontology/dev-guide/dawe-protocol`, create a folder for current module, and add `_category_.json` with the module's label inside.
5. Add `overview.mdx` with the properties collecion URI and module name inside, so that an overview page with all properties listed will be shown.
6. Move those automatically generated files in `scripts/generate-observation-example-page/output` into `information-models/tern-ontology/dev-guide/dawe-protocol/_module_name_`.
7. Add the configuration for current module in `src/components/docs/tern-ontology/example-data-component/protocol-module-config.js`.
8. If some properties don't have example values in those files under `src/components/docs/tern-ontology/example-data-component/example-data`, then add the example value in `src/components/docs/tern-ontology/example-data-component/example-data/index.js`.

NOTE:
When a module has sub modules, only sub modules folders have `overview.mdx`, but all modules folders have `_category_.json`.

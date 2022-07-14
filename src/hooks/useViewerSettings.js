import useEnv from "./useEnv";

export const useViewerSettings = (key) => {
  const env = useEnv();

  const localSettings = {
    nrm: {
      title: "NRM Controlled Vocabularies",
      api: "http://localhost:5000/api/v1.0",
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint: "http://graphdb:7200/repositories/dawe_vocabs_core",
    },
  };

  const devSettings = {
    nrm: {
      title: "NRM Controlled Vocabularies",
      api: "https://linkeddata-test.tern.org.au/api/v1.0",
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint:
        "https://demo.vocabs.ardc.edu.au/repository/api/sparql/tern-rva_dawe-nrm-controlled-vocabularies_0-0-7",
    },
  };

  const prodSettings = {
    nrm: {
      title: "NRM Controlled Vocabularies",
      api: "https://linkeddata.tern.org.au/api/v1.0",
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint:
        "https://graphdb.tern.org.au/repositories/dawe_vocabs_core",
    },
  };

  let settings;
  if (env === "local") {
    settings = localSettings;
  } else if (env === "test") {
    settings = devSettings;
  } else {
    settings = prodSettings;
  }

  return settings[key];
};

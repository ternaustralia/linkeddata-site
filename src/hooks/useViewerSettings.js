import useEnv from "./useEnv";

export const useViewerSettings = (key) => {
  const env = useEnv();

  const localApiEndpoint = "http://localhost:5000/api/v1.0";
  const devApiEndpoint = "https://linkeddata-test.tern.org.au/api/v1.0";
  const prodApiEndpoint = "https://linkeddata.tern.org.au/api/v1.0";

  const localSettings = {
    general: {
      api: localApiEndpoint,
      pageRoute: "/viewers/general",
    },
    nrm: {
      title: "NRM Controlled Vocabularies",
      api: localApiEndpoint,
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint: "http://graphdb:7200/repositories/dawe_vocabs_core",
    },
  };

  const devSettings = {
    general: {
      api: devApiEndpoint,
      pageRoute: "/viewers/general",
    },
    nrm: {
      title: "NRM Controlled Vocabularies",
      api: devApiEndpoint,
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint:
        "https://demo.vocabs.ardc.edu.au/repository/api/sparql/tern-rva_dawe-nrm-controlled-vocabularies_0-0-7",
    },
  };

  const prodSettings = {
    general: {
      api: prodApiEndpoint,
      pageRoute: "/viewers/general",
    },
    nrm: {
      title: "NRM Controlled Vocabularies",
      api: prodApiEndpoint,
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

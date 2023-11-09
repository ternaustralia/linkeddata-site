import useEnv from "./useEnv";

export const useViewerSettings = (key) => {
  const env = useEnv();

  const localApiEndpoint = "http://localhost:5000/api/v2.0";
  const devApiEndpoint = "https://linkeddata-test.tern.org.au/api/v2.0";
  const prodApiEndpoint = "https://linkeddata.tern.org.au/api/v2.0";

  const localSettings = {
    general: {
      api: localApiEndpoint,
      pageRoute: "/viewers/general",
    },
    nrm: {
      title: "Ecological Monitoring System - Australia Controlled Vocabularies",
      api: localApiEndpoint,
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint:
        "https://graphdb.tern.org.au/repositories/dawe_vocabs_core?infer=false",
    },
    tern: {
      title: "TERN Controlled Vocabularies",
      api: localApiEndpoint,
      pageRoute: "/viewers/tern-vocabs",
      sparqlEndpoint:
        "https://graphdb.tern.org.au/repositories/tern_vocabs_core?infer=false",
    },
  };

  const devSettings = {
    general: {
      api: devApiEndpoint,
      pageRoute: "/viewers/general",
    },
    nrm: {
      title: "Ecological Monitoring System - Australia Controlled Vocabularies",
      api: devApiEndpoint,
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint:
        "https://demo.vocabs.ardc.edu.au/repository/api/sparql/tern-rva_dawe-nrm-controlled-vocabularies_0-0-7",
    },
    tern: {
      title: "TERN Controlled Vocabularies",
      api: devApiEndpoint,
      pageRoute: "/viewers/tern-vocabs",
      sparqlEndpoint:
        "https://graphdb.tern.org.au/repositories/tern_vocabs_core?infer=false",
    },
  };

  const prodSettings = {
    general: {
      api: prodApiEndpoint,
      pageRoute: "/viewers/general",
    },
    nrm: {
      title: "Ecological Monitoring System - Australia Controlled Vocabularies",
      api: prodApiEndpoint,
      pageRoute: "/viewers/dawe-vocabs",
      sparqlEndpoint:
        "https://graphdb.tern.org.au/repositories/dawe_vocabs_core?infer=false",
    },
    tern: {
      title: "TERN Controlled Vocabularies",
      api: prodApiEndpoint,
      pageRoute: "/viewers/tern-vocabs",
      sparqlEndpoint:
        "https://graphdb.tern.org.au/repositories/tern_vocabs_core?infer=false",
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

module.exports = {
  env: {
    production: {
      presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
    },
    development: {
      presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
    },
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};

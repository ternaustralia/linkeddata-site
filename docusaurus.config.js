// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const package = require("./package.json");

const version = process.env.REACT_APP_GIT_VERSION || package.version;

let env = null;
let ga4TagCode = null;
if (version.includes("dev")) {
  env = "test";
  ga4TagCode = "G-SV1R8XF9RD";
} else if (version.includes("local")) {
  env = "local";
  ga4TagCode = "G-SV1R8XF9RD";
} else {
  env = "prod";
  ga4TagCode = "G-9ZSB7J0E6H";
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TERN Linked Data Services",
  tagline:
    "TERN uses Linked Data and the Semantic Web to manage datasets derived from its terrestrial ecosystem field observatory.",
  url: "https://linkeddata.tern.org.au",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://w3id.org/tern/static/tern-web/img/logo@2x.png",
  organizationName: "ternaustralia", // Usually your GitHub org/user name.
  projectName: "linkeddata-site", // Usually your repo name.

  scripts: [
    {
      src:
        `https://www.googletagmanager.com/gtag/js?id=${ga4TagCode}`,
      async: true,
    },
  ],

  customFields: {
    version: version,
    env: env,
    ga4TagCode: ga4TagCode,
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ternaustralia/linkeddata-site/edit/main/tern-ontology/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/ternaustralia/linkeddata-site/edit/main/blog/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            // Load tern-react styles.
            require.resolve("tern-react/dist/index.css"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    // '@docusaurus/plugin-ideal-image',
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tern-ontology",
        path: "information-models/tern-ontology",
        routeBasePath: "information-models/tern-ontology",
        sidebarPath: require.resolve(
          "./information-models/tern-ontology/sidebars.js"
        ),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "TERN Linked Data Services",
        logo: {
          alt: "TERN logo",
          src: "https://w3id.org/tern/static/tern-web/img/logo@3x.png",
        },
        items: [
          {
            type: "dropdown",
            label: "Information models",
            position: "right",
            items: [
              {
                to: "/information-models/overview",
                label: "Overview",
              },
              {
                to: "/information-models/tern-ontology",
                label: "TERN Ontology",
              },
              // {
              //   type: 'doc',
              //   docId: '/tern-ontology',
              //   label: 'TERN Ontology'
              // }
            ],
          },
          {
            type: "dropdown",
            label: "Controlled vocabularies",
            position: "right",
            items: [
              {
                to: "/controlled-vocabularies/overview",
                label: "Overview",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Browse",
            position: "right",
            items: [
              {
                to: "/viewers/tern-ontology",
                label: "TERN Ontology by class",
              },
              {
                to: "/viewers/tern-loc-ontology",
                label: "TERN Location Ontology by class",
              },
              {
                to: "/viewers/tern-org-ontology",
                label: "TERN Organisation Ontology by class",
              },
              {
                to:
                  env === "prod"
                    ? "https://linkeddata.tern.org.au/viewer/tern"
                    : "https://linkeddata-test.tern.org.au/viewer/tern",
                label: "TERN Controlled Vocabularies",
                target: "_blank",
              },
              {
                to:
                  env === "prod"
                    ? "https://linkeddata.tern.org.au/viewer/ausplots"
                    : "https://linkeddata-test.tern.org.au/viewer/ausplots",
                label: "AusPlots Controlled Vocabularies",
                target: "_blank",
              },
              {
                to:
                  env === "prod"
                    ? "https://linkeddata.tern.org.au/viewer/corveg"
                    : "https://linkeddata-test.tern.org.au/viewer/corveg",
                label: "CORVEG Controlled Vocabularies",
                target: "_blank",
              },
              {
                to: "/viewers/dawe-vocabs",
                label: "Ecological Monitoring System - Australia Controlled Vocabularies",
              },
            ],
          },
          {
            type: "dropdown",
            label: "About",
            position: "right",
            items: [
              {
                to: "/about/acknowledgement-and-attribution",
                label: "Acknowledgement and attribution",
              },
            ],
          },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "light",
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'TERN Ontology',
        //         to: '/tern-ontology',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'TERN Ecosystem Research Infrastructure',
        //         href: 'https://www.tern.org.au/'
        //       },
        //       {
        //         label: 'TERN Australia GitHub',
        //         href: 'https://github.com/ternaustralia'
        //       },
        //       {
        //         label: 'Terms of use',
        //         href: 'https://www.tern.org.au/terms-of-use'
        //       }
        //     ],
        //   },
        // ],
        // copyright: `
        // <hr>

        // <p>TERN is supported by the Australian Government through the National Collaborative Research Infrastructure Strategy, <a target="_blank" href="https://www.education.gov.au/national-collaborative-research-infrastructure-strategy-ncris">NCRIS<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>.</p>

        // <div style="text-align: center; margin-bottom: 1em;">
        //   <img style="background-color: rgba(255, 255, 255, 1); padding: 0.5em;" src="https://www.tern.org.au/wp-content/uploads/logo-ncris@2x.png" width="138">
        // </div>

        // <p>Key Operating Partners

        // <div style="text-align: center; margin-bottom: 1em;">

        //   <img style="background-color: rgba(255, 255, 255, 1); padding: 0.5em; margin-right: -5px;" src="https://www.tern.org.au/wp-content/uploads/uq-logo-purple.png" height="80">
        //   <img style="background-color: rgba(255, 255, 255, 1); padding: 0.5em; margin-right: -5px;"src="https://www.tern.org.au/wp-content/uploads/james-cook-logo@2x.png" height="80">
        //   <img style="background-color: rgba(255, 255, 255, 1); padding: 0.5em; margin-right: -4px;" src="https://www.tern.org.au/wp-content/uploads/csiro-logo@2x.png" height="80">
        //   <img style="background-color: rgba(255, 255, 255, 1); padding: 0.5em; " src="https://www.tern.org.au/wp-content/uploads/ua-logo@2x.png" height="80">

        // </div>

        // <p><em style="font-size: 14px;">We at TERN acknowledge the Traditional Owners and Custodians throughout Australia, New Zealand and all nations.
        // We honour their profound connections to land, water, biodiversity and culture and pay our respects to their Elders past, present and emerging.</em></p>

        // © ${new Date().getFullYear()} TERN Ecosystem Research Infrastructure`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

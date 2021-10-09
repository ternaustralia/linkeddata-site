// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TERN Linked Data Services',
  tagline: 'TERN’s Data Services and Analytics platform manages datasets derived from its terrestrial ecosystem field observatory. TERN data infrastructure also enables the Australian community of ecosystem researchers to collect, contribute, store and share data.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    // '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tern-ontology',
        path: 'tern-ontology',
        routeBasePath: 'tern-ontology',
        sidebarPath: require.resolve('./sidebarsTernOntology.js'),
        // ... other options
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TERN Linked Data Services',
        logo: {
          alt: 'My Site Logo',
          src: 'https://w3id.org/tern/static/tern-web/img/logo@2x.png',
        },
        items: [
          {
            type: "dropdown",
            label: "Standards",
            position: 'left',
            items: [
              {
                to: '/standards',
                label: 'About'
              },
              {
                to: '/tern-ontology',
                label: 'TERN Ontology'
              }
              // {
              //   type: 'doc',
              //   docId: '/tern-ontology',
              //   label: 'TERN Ontology'
              // }
            ]
          },
          {
            type: "dropdown",
            label: "Viewers",
            position: "left",
            items: [
              {
                to: '/viewers/tern-ontology',
                label: 'TERN Ontology viewer'
              }
            ]
          }
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
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'TERN Ontology',
                to: '/tern-ontology',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'TERN Ecosystem Research Infrastructure',
                href: 'https://www.tern.org.au/'
              },
              {
                label: 'TERN Australia GitHub',
                href: 'https://github.com/ternaustralia',
              },
            ],
          },
        ],
        copyright: `
        <em style="font-size: 14px;">We at TERN acknowledge the Traditional Owners and Custodians throughout Australia, New Zealand and all nations.
        We honour their profound connections to land, water, biodiversity and culture and pay our respects to their Elders past, present and emerging.</em>
        
        <br><br>
        
        © ${new Date().getFullYear()} TERN | TERN Data Services and Analytics`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

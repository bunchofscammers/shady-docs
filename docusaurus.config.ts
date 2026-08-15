import type { Config } from "@docusaurus/types";
import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "ShadyUI",
  tagline:
    "Framework-agnostic components for professionally untrustworthy interfaces.",
  url: "https://bunchofscammers.github.io",
  baseUrl: "/shady-docs/",
  organizationName: "bunchofscammers",
  projectName: "shady-docs",
  trailingSlash: false,
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/bunchofscammers/shady-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "ShadyUI",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/showcase", label: "Showcase", position: "left" },
        {
          href: "https://github.com/bunchofscammers",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "Core",
              href: "https://github.com/bunchofscammers/shady-ui",
            },
            {
              label: "React",
              href: "https://github.com/bunchofscammers/shady-react",
            },
            {
              label: "Svelte",
              href: "https://github.com/bunchofscammers/shady-svelte",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bunch of Scammers contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies ThemeConfig,
};

export default config;

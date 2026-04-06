import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Predictive History",
    pageTitleSuffix: " | Predictive History",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "localhost:8080",
    ignorePatterns: ["private", "templates", ".obsidian", "articles", "website", "node_modules"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "oklch(0.98 0.005 60)",
          lightgray: "oklch(0.92 0.005 60)",
          gray: "oklch(0.78 0.01 60)",
          darkgray: "oklch(0.40 0.01 60)",
          dark: "oklch(0.25 0.01 60)",
          secondary: "oklch(0.40 0.08 230)",
          tertiary: "oklch(0.68 0.06 165)",
          highlight: "oklch(0.70 0.03 230 / 0.15)",
          textHighlight: "oklch(0.90 0.15 95 / 0.35)",
        },
        darkMode: {
          light: "oklch(0.18 0.005 280)",
          lightgray: "oklch(0.30 0.01 280)",
          gray: "oklch(0.48 0.01 280)",
          darkgray: "oklch(0.87 0.005 60)",
          dark: "oklch(0.94 0.005 60)",
          secondary: "oklch(0.65 0.06 230)",
          tertiary: "oklch(0.68 0.06 165)",
          highlight: "oklch(0.70 0.03 230 / 0.15)",
          textHighlight: "oklch(0.65 0.15 95 / 0.35)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-22",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },

  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/icon", "@nuxt/fonts", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  css: ["~/assets/css/main.css"],
  ssr: true,
  runtimeConfig: {
    connectionString: process.env.DB_CONNECTION_STRING,
    articlesConnection: process.env.ARTICLES_DB_CONNECTION_STRING,
    privateConnection: process.env.COOLIFY_CONNECTION_STRING,
  },
  typescript: {
    typeCheck: false,
    strict: false,
    tsConfig: {
      compilerOptions: {
        allowJs: true,
        baseUrl: ".",
        paths: {
          "#types": ["./types"],
        },
        // Add the "types" array to include @types/fhir
      },
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "tokyo-night",
          langs: ["vue", "javascript", "typescript", "css", "python", "go"],
        },
      },
    },
  },
  experimental: {
    payloadExtraction: true,
    viewTransition: true,
  },
  site: {
    url: "https://mdanvar.ca",
    name: "Mehrdad Anvar Website",
  },
});

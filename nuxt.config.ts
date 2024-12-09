// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/color-mode", "@nuxt/ui"],
  ssr: true,
  googleFonts: {
    families: {
      // Roboto: true,
      Inter: true,
      // Lato: [100, 300],
      "Open+Sans": true,
      // "Crimson Text": true,
      "Source+Code+Pro": true,
    },
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    //componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },
  ui: {
    icons: ["solar", "simple-icons"],
  },
  runtimeConfig: {
    connectionString: process.env.DB_CONNECTION_STRING,
    articlesConnection: process.env.ARTICLES_DB_CONNECTION_STRING,
  },
});

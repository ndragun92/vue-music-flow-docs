// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-07-11",

  typescript: {
    // Enables strict typeCheck for development environment
    typeCheck: process.env.NODE_ENV === "development",
    strict: process.env.NODE_ENV === "development",
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetchedClass: "link--prefetched",
      },
    },
    asyncContext: true,
    appManifest: false,
    buildCache: false, // Build Cache
  },

  imports: {
    dirs: [
      // support deep nested composables
      "composables/**",
    ],
  },

  nitro: {
    // compressPublicAssets: true,
    routeRules: {
      "/_nuxt/**": { headers: { "cache-control": "max-age=600" } }, // Set the generated files cache to 10 minutes
      "/audio/**": { headers: { "cache-control": "max-age=600" } }, // Set the generated files cache to 10 minutes
      "/images/**": { headers: { "cache-control": "max-age=600" } }, // Set the generated files cache to 10 minutes
      "/_ipx/**": { headers: { "cache-control": "max-age=600" } }, // Set the generated files cache to 10 minutes
      "/": { isr: 60 }, // revalidated every 60 seconds, in the background
      "/getting-started": { prerender: true },
      "/installation": { prerender: true },
      "/usage": { prerender: true },
      "/customization": { prerender: true },
      "/options": { prerender: true },
      "/demo": { ssr: false },
      "/builder": { ssr: false },
    },
  },

  runtimeConfig: {
    public: {
      // myValue: process.env.NUXT_PUBLIC_MY_VALUE,
    },
  },

  eslint: {
    config: {
      // stylistic: {
      //   commaDangle: 'never',
      //   braceStyle: '1tbs'
      // }
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  pinia: {
    storesDirs: ["./app/store/**"],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts", // https://pinia.vuejs.org/ssr/nuxt.html
    "@pinia/nuxt", // https://github.com/nuxt-modules/icon | https://icones.js.org/collection/all?s=github
    "nuxt-icon", // https://vueuse.org/guide/#nuxt
    "@vueuse/nuxt", // https://image.nuxt.com
    "@nuxt/image",
    "nuxt-music-flow",
  ],

  image: {},

  hooks: {
    "build:before": () => {
      console.time("Nuxt Build Time");
    },
    "build:done": () => {
      console.timeEnd("Nuxt Build Time");
    },
  },
});

import { processExpression } from "@vue/compiler-core";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      productsApi: process.env.API_URL,
    },
    },
});

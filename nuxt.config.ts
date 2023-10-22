// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Space+Grotesk": {
            wght: [400, 500, 600, 700],
          },
        },
        display: "swap",
      },
    ],
  ],
});

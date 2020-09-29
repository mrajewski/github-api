export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "github-api",
    script: [
      {
        src: "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js",
      },
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/styles/variables.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/style-resources", "@nuxtjs/apollo", "nuxt-clipboard2"],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://api.github.com/graphql",
        httpLinkOptions: {
          headers: {
            Authorization: "bearer b1502f83a0bbb2016209935bfddbf3484fdd6b96",
          },
        },
      },
    },
  },

  styleResources: {
    scss: ["./assets/styles/*.scss"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
}

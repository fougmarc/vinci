module.exports = {
  css: [
    '@/assets/css/main.styl',
    '@/animations/page_transitions.styl',
    '@/animations/menu.styl',
  ],
  plugins: [
    '@/plugins/mixin',
    { src: '@/plugins/ga.js', ssr: false },
  ],
  modules: [
    ['nuxt-stylus-resources-loader', [
        __dirname + '/assets/css/mixin.styl',
    ]],
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
  ],
  manifest: {
    name: 'VINCI',
    lang: 'ja',
    short_name: 'KN works',
    title: 'VINCI',
    'og:title': 'VINCI',
    description: 'Association',
    theme_color: '#000000',
    background_color: '#000000'
  },
  workbox: {
    dev: true,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "VINCI",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "VINCI  Association" },
      { name: 'og:image', content: '' },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "" },
      { property: "og:url", content: "" },
      { property: "og:title", content: "VINCI" },
      { property: "og:description", content: "" },
      { property: "og:image", content: "" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css", integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ", crossorigin: "anonymous"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300"},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // extend default options
      // const stylus = config.module.rules[0].options.loaders.stylus.find(e => e.loader == 'stylus-loader')
      // Object.assign(stylus.options, {
      //   import: [
      //     '@/assets/css/mixins.styl'
      //   ]
      // })
    }
  }
}

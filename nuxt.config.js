module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mad Men Literary References',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "A data visualization of Mad Men's literary references" },
      { property: 'og:image', content: '/fbcocktails.png' },
      { name: 'twitter:image', content: '/twittercocktails.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/wyh2rwu.css' },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon.png'
      }
    ]
  },
  plugins: [{ src: '~plugins/ga.js', ssr: false }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ac3650' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

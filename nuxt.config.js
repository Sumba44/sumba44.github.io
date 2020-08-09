
export default {
  mode: 'spa', //spa or universal
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   re: 'stylesheet',
      //   href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
      // }
    ],
    script: [
      { 
        // type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11' 
      },
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'
      },
      {
        src: 'https://use.fontawesome.com/c618ce8cf6.js'
      }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#42b682' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/theme.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/client-only.js', mode: 'client' },
    // { src: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11'}
    { src: '~/plugins/aos.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/vuetify',
  ],

  fontawesome: {
    icons: {
      solid: ['faLock', 'faUndo', 'faFileSignature', 'faSort', 'faBusinessTime', 'faSmile', 'faTruck', 'faInfoCircle', 'faHome', 'faShoppingCart', 'faUser', 'faEnvelope', 'faPhone', 'faGlobe', 'faLaptopCode', 'faGem', 'faHeart'],
      brands: ['faApple', 'faFacebook', 'faInstagram', 'faYoutube', 'faLinkedin', 'faTwitter', 'faHtml5', 'faCss3', 'faJs', 'faPhp', 'faWordpress', 'faReact', 'faVuejs', 'faSass', 'faGithub', 'faBootstrap',],
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth',
  ],

  styleResources: {
    scss: ['~assets/scss/*.scss']
  },


  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: 'http://localhost:3000/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },

  env: {
    title: process.env.npm_package_name
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}

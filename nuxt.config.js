const pkg = "IFblog"
const bodyParser=require('body-parser')
const axios=require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'orange', height:'5px', duration:6000},
  loadingIndicator:{
    name:"circle",
    color:"red"
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios:{
    baseURL: process.env.BASE_URL || 'https://ajde-f263e.firebaseio.com',
    credentials:false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  env:{
    baseUrl: process.env.BASE_URL || 'https://ajde-f263e.firebaseio.com',
    fbAPIKey:'AIzaSyBe60a5ORj_g-4C7E11NJinLil43iI3M0E'
  },
  transistion:{
    name:'fade',
    mode:'out-in'
  },
  // router:{
  //   middleware:'log'
  // }
  serverMiddleware:[
    bodyParser.json(),
    '~/api'
  ],
  generate:{
    routes:function(){
      return axios.get('https://ajde-f263e.firebaseio.com/posts.json')
      .then(res=>{
        const routes=[]
        for (const key in res.data){
          routes.push({route: '/posts/'+key,
          payload:{postData:res.data[key]}})
        }
        return routes
      })
    }
  }
}

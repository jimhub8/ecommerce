import Vue from 'vue'
import Vuetify from 'vuetify'
// import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader


Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
}

export default new Vuetify(opts)
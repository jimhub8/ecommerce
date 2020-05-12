/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


window.Vue = require('vue');
window.eventBus = new Vue()

import vuetify from './vuetify'
import router from './router'
import store from './vuex'

import VueScrollTo from 'vue-scrollto'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
// import * as VueGoogleMaps from 'vue2-google-maps'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
// import StoreData from './store/store'

// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);

import myNavmenu from './components/include/Menu.vue';
import myRegister from './components/register/Register.vue';
import myFooter from './components/include/Footer.vue';
import myNav from './components/include/Headervue';

// import * as VueGoogleMaps from 'vue2-google-maps'

import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);

// Vue.use(VueGoodTablePlugin);
Vue.use(ElementUI, { locale });

// Vue.use(VueLazyload)
// Vue.use(VueCarousel);
// Vue.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyBNzKeF6ZwxlAOUCyeH8UxvvYRHP_w_Guk',
//         libraries: ['geometry', 'places'],
//         // libraries: 'places',
//     },
// })
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
// Vue.component('downloadExcel', JsonExcel)
// Vue.use(CKEditor);
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
    vuetify,
    router,
    components: {
        myNavmenu, myRegister, myFooter,
        myNav
    },
});

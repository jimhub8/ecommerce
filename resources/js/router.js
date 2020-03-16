import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// import myUser from './components/users/'

import myHome from './components/home/Home';
import productDetail from './components/Shop/Details';
import myShop from './components/Shop/Shop.vue';
import myCartHome from './components/cart/CartHome.vue';
import myFilter from './components/filter/Filter.vue';
import mywishList from './components/wish/Wish.vue';
import CategoryFilter from './components/filter/Category.vue';
import SearchP from './components/Shop/Search';
import myThanks from './components/Shop/Thankyou';

import myFaq from './components/content/faq';
// import myPrivacy from './components/content/privacy';

// Clients
import myCheckout from './components/checkout'
// import myAccount from './components/client/Client';

import myAccount from './components/account';

// import InstantSearch from 'vue-instantsearch';


const routes = [
    { path: '/', component: myHome },
    { path: '/filter', component: myFilter },
    { path: '/shop', component: myShop },
    { path: '/wishList', component: mywishList },
    { path: '/cartHome', component: myCartHome },
    { path: '/details/:id', component: productDetail, name: 'details' },
    { path: '/category/:id', component: CategoryFilter, name: 'Category' },
    { path: '/search/:search', component: SearchP, name: 'search' },
    { path: '/thankyou', component: myThanks, name: 'thankyou' },
    { path: '/account', component: myAccount },
    { path: '/checkout', component: myCheckout, name: 'checkout' },
    { path: '/help_center', component: myFaq },


]


export default new VueRouter({routes})

import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// import myUser from './components/users/'

// import myHome from './components/home/Home';
// import myShop from './components/Shop/Shop.vue';


// import productDetail from './components/Shop/Details';
// import myCartHome from './components/cart/CartHome.vue';
// import myFilter from './components/filter/Filter.vue';
// import mywishList from './components/wish/Wish.vue';
// import CategoryFilter from './components/filter/Category.vue';
// import SearchP from './components/Shop/Search';
// import myThanks from './components/Shop/Thankyou';

// import myFaq from './components/content/faq';
// import myPrivacy from './components/content/privacy';

// Clients
// import myCheckout from './components/checkout'
// import myAccount from './components/client/Client';

// import myAccount from './components/account';

// import InstantSearch from 'vue-instantsearch';


// import myExample from './components/home/products/Slide';


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ './components/home/Home')
    },
    { 
        path: '/shop',  
        name: 'Shop',
        component: () => import(/* webpackChunkName: "Shop" */ './components/Shop/Shop.vue')
    }, 
    { 
        path: '/filter',  
        name: 'filter',
        component: () => import(/* webpackChunkName: "filter" */ './components/filter/Filter.vue')
    }, 
    { 
        path: '/thankyou',  
        name: 'thankyou',
        component: () => import(/* webpackChunkName: "thankyou" */ './components/Shop/Thankyou')
    }, 
    { 
        path: '/wishList',  
        name: 'wishList',
        component: () => import(/* webpackChunkName: "wishList" */ './components/wish/Wish.vue')
    }, 
    { 
        path: '/cartHome',  
        name: 'cartHome',
        component: () => import(/* webpackChunkName: "cartHome" */ './components/cart/CartHome.vue')
    },  
    { 
        path: '/details/:id',  
        name: 'details',
        component: () => import(/* webpackChunkName: "details" */ './components/Shop/Details')
    },  
    { 
        path: '/category/:id',  
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */ './components/filter/Category.vue')
    },  
    { 
        path: '/search/:search',  
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ './components/Shop/Search')
    },  
    { 
        path: '/account',  
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ './components/account')
    }, 
    { 
        path: '/checkout',  
        name: 'checkout',
        component: () => import(/* webpackChunkName: "checkout" */ './components/checkout')
    }, 
    { 
        path: '/help_center',  
        name: 'help_center',
        component: () => import(/* webpackChunkName: "help_center" */ './components/content/faq')
    }, 
    { 
        path: '/example',  
        name: 'example',
        component: () => import(/* webpackChunkName: "example" */ './components/home/products/Slide')
    }, 

    // { path: '/wishList', component: mywishList },
    // { path: '/cartHome', component: myCartHome },
    // { path: '/details/:id', component: productDetail, name: 'details' },
    // { path: '/category/:id', component: CategoryFilter, name: 'Category' },
    // { path: '/search/:search', component: SearchP, name: 'search' },
    // { path: '/thankyou', component: myThanks, name: 'thankyou' },
    // { path: '/account', component: myAccount },
    // { path: '/checkout', component: myCheckout, name: 'checkout' },
    // { path: '/help_center', component: myFaq },

    // { path: '/example', component: myExample },



]


export default new VueRouter({ routes })

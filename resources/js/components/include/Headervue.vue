<template>
<v-app id="inspire" v-scroll="onScroll">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <!-- <v-app id="inspire"> -->
    <header class="header2" id="headerq">
        <!-- Header desktop -->
        <div class="wrap_header fixed-header2 trans-0-4">
            <!-- <div style="float: left"> -->
            <!-- </div> -->
            <!-- Logo -->
            <div class="flex-c-m size22 s-text21 pos-relative" style="background:#f0f0f0;">
                <myCartmenu :menus="menus" :categories="categories"></myCartmenu>
            </div>
            <router-link @click.native="progressBar" to="/" class="logo">
                <img src="storage/logo/dellmat.png" alt="Delmat">
            </router-link>
            <!-- Mini Menu Start -->
            <div class="wrap_menu" id="header2">
                <nav class="menu">
                    <ul class="main_menu" style="background: #fff;">
                        <li>
                            <router-link @click.native="progressBar" to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link @click.native="progressBar" to="/shop">Shop</router-link>
                        </li>
                        <li>
                            <router-link @click.native="progressBar" to="/cartHome">Cart</router-link>
                        </li>
                        <!-- <li>
                                <router-link @click.native="progressBar" to="/about">About Us</router-link>
                            </li> -->

                    </ul>
                </nav>
            </div>
            <div class="header-icons">
                <!-- <a href="/login" class="header-wrapicon1 dis-block" v-if="user">
            <img src="/storage/icons/icon-header-01.png" class="header-icon1" alt="ICON">
          </a> -->
                <a href="/seller/register" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;">Become a seller</a>
                <Logout :user="user" v-if="user"></Logout>

                <!-- <v-btn href="/login" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;" v-else>Login</v-btn> -->
                <v-btn color="primary" href="/login" v-else>Login</v-btn>
                <span class="linedivide1"></span>

                <div class="header-wrapicon2">
                    <img src="/storage/icons/cart.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
                    <span class="header-icons-noti">{{ cart_count }}</span>

                    <!-- Header cart noti -->
                    <myCart></myCart>
                </div>
                <span class="linedivide2"></span>
                <div class="header-wrapicon2">
                    <img src="/storage/icons/wish.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
                    <span class="header-icons-noti">{{ wishItems.length }}</span>

                    <!-- Header cart noti -->
                    <!-- <myWish></myWish> -->
                </div>
            </div>
        </div>
        <!-- Mini Menu Start End -->

        <!-- Big navigation Start -->
        <div class="container-menu-header-v2 p-t-26">
            <div class="topbar2" style="margin-top: -26px;padding-bottom: 20px;">
                <div class="topbar-social">
                    <a href="https://www.facebook.com/DellmatGroup" target="_blank" class="topbar-social-item fa fa-facebook"></a>

                    <span class="topbar-email" style="margin: 0 10px"><a href="mailto:info@dellmat.com" target="_blank">info@dellmat.com</a></span>
                </div>
                <br>
                <hr>

                <!-- Logo2 -->
                <router-link to="/" class="logo2">
                    <img src="/storage/logo/dellmat.png" alt="Delmat" style="height: 50px !important;">
                </router-link>

                <div class="topbar-child2">

                    <!-- <div class="topbar-language rs1-select2" style="margin-left: 10px !important">
                        <select class="selection-1" name="time">
                            <option>KSH</option>
                        </select>
                    </div> -->
                    <!-- <VDivider vertical /> -->
                    <!--  -->
                    <!-- <a href="/seller/register" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;margin: 0 10px">Become a seller</a> -->
                    <v-btn color="primary" href="/seller/register" style="margin: 0 10px">Become a seller</v-btn>
                    <!-- <VDivider vertical /> -->

                    <Logout :user="user" v-if="user"></Logout>

                    <v-btn color="primary" v-else href="/login">Login</v-btn>
                    <!-- <a href="/login" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;" v-else>Login</a> -->

                    <span class="linedivide1"></span>

                    <div class="header-wrapicon2 m-r-13">
                        <img src="/storage/icons/cart.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
                        <span class="header-icons-noti">{{ cart_count }}</span>

                        <!-- Header cart noti -->
                        <myCart></myCart>
                    </div>
                    <div class="header-wrapicon2 m-r-13">
                        <img src="/storage/icons/wish.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
                        <span class="header-icons-noti">{{ wishItems.length }}</span>
                        <!-- Header cart noti -->
                        <!-- <myWish></myWish> -->
                    </div>
                </div>
            </div>

            <div class="flex-c-m size22 s-text21 pos-relative" style="background:#f0f0f0;">

                <myCartmenu :menus="menus" :categories="categories"></myCartmenu>
            </div>
        </div>

        <div class="wrap_header">

            <!-- Main Menu -->
            <div class="wrap_menu" id="header1">
                <nav class="menu">
                    <ul class="main_menu">
                        <li>
                            <router-link @click.native="progressBar" to="/">Home</router-link>
                        </li>

                        <li>
                            <router-link @click.native="progressBar" to="/shop">Shop</router-link>
                        </li>

                        <li>
                            <router-link @click.native="progressBar" to="/cartHome">Cart</router-link>
                        </li>

                        <!-- <li>
                                <router-link @click.native="progressBar" to="/about">About Us</router-link>
                            </li> -->
                    </ul>
                </nav>
            </div>

            <!-- Header Icon -->
            <div class="header-icons"></div>
        </div>
        <!-- Big navigation End -->

        <!-- Menu Mobile -->
        <mobileNav :user="user" />
        <!-- Menu Mobile -->

    </header>
    <v-fab-transition v-if="offsetTop >= 400">
        <v-btn color="pink" v-scroll-to="'#headerq'" dark fab fixed bottom left ref="button">
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
    </v-fab-transition>
    <v-snackbar :timeout="timeout" :bottom="y === 'bottom'" :color="Scolor" :left="x === 'left'" v-model="snackbar">
        {{ message }}
        <v-icon dark right>check_circle</v-icon>
    </v-snackbar>
</v-app>
</template>

<script>
// import * as easings from "vuetify/es5/util/easing-patterns";
// vuetify/es5/Vuetify/goTo/easing-patterns
import {
    vueTopprogress
} from "vue-top-progress";
import myCart from "../cart/Cartvue";
// import myWish from "../wish/Wishvue";
import myShop from "../Shop/Shop";
import CartHome from "../cart/CartHome";
import Logout from "./Logout";
import mobileNav from './header/Mobile'

import myCartmenu from './Catmenu'
export default {
    // router,
    props: ["user"],
    components: {
        myCartmenu,
        vueTopprogress,
        // myWish,
        myShop,
        CartHome,
        myCart,
        Logout,
        mobileNav,
    },
    data() {
        return {
            form: {},
            search: "",
            catShow: false,
            menuShow: false,
            categories: [],
            menus: [],
            drawer: true,
            right: null,
            snackbar: false,
            y: "bottom",
            x: "left",
            Allusers: [],
            Scolor: "",
            timeout: 5000,
            message: "Success",
            offsetTop: 0,
            duration: 1000,
            easing: "easeInOutCubic",
            // easings: Object.keys(easings),
            type: "number",
            wishItems: []
        };
    },
    methods: {
        gotoSub(item) {
            eventBus.$emit("progressEvent");
            eventBus.$emit("goToSubEvent", item);
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "subcat"
                }
            });
            // eventBus.$emit("gotoSUbcatEvent", item);
        },
        gotoCat(item) {
            eventBus.$emit("progressEvent");
            eventBus.$emit("goToCatEvent", item);
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "cat"
                }
            });
            // eventBus.$emit("gotoCatEvent", item);
        },
        showMenu(menu) {
            this.menuShow = true;
            this.categories = menu.categories;
        },
        progressBar() {
            this.$refs.topProgress.start();
        },

        onScroll(e) {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        },
        update_cart(cart, quantity) {
            cart.quantity = quantity
            var payload = {
                model: 'update_cart',
                id: cart.id,
                data: cart,
            }
            this.$store.dispatch('postItem', payload).then((res) => {
                this.getCart()
                this.get_cart_total()
                this.get_cart_count()
            })
        },
        addToCart(cart) {
            // console.log(cart);
            eventBus.$emit("progressEvent");
            var payload = {
                model: 'cartAdd',
                id: cart.id,
                data: cart,
            }

            this.$store.dispatch('postItem', payload).then((res) => {
                this.getCart()
                this.get_cart_total()
                this.get_cart_count()
            })
        },
        addToWish(wish) {
            console.log(wish);
            eventBus.$emit("progressEvent");
            var payload = {
                model: 'wish',
                id: wish.id,
                data: wish,
            }

            this.$store.dispatch('postItem', payload).then((res) => {
                this.getWish()
                this.get_wish_total()
                this.get_wish_count()
            })
        },
        categoryPro(data) {
            // console.log(data)
            eventBus.$emit("filterEvent", data.id);

            // router.go('')
            // this.$router.push(`/filter/${data.id}`)
        },
        unfilter() {
            this.loadingalert();
            eventBus.$emit("unfilterEvent");
        },
        getCart() {
            var payload = {
                model: 'getCart',
                update_list: 'updateCartsList',
            }
            this.$store.dispatch('getItems', payload)
        },

        get_cart_total() {
            var payload = {
                model: 'cart_total',
                update_list: 'updateCartTotalList',
            }
            this.$store.dispatch('getItems', payload)
        },
        get_cart_count() {

            var payload = {
                model: 'cart_count',
                update_list: 'updateCartCountList',
            }

            this.$store.dispatch('getItems', payload)

            // axios.get("/cart_count").then(response => {
            //     this.cart_count = response.data;
            // });
        },
        get_wish_total() {

            var payload = {
                model: 'cart_count',
                update_list: 'updateCartCountList',
            }
            this.$store.dispatch('getItems', payload)
        },
        get_wish_count() {

            var payload = {
                model: 'cart_count',
                update_list: 'updateCartCountList',
            }

            this.$store.dispatch('getItems', payload)
        },

        getCategory() {

            var payload = {
                model: 'categories',
                update_list: 'updateCategoryList',
            }

            this.$store.dispatch('getItems', payload)
        },
        getMenu() {

            var payload = {
                model: 'menu',
                update_list: 'updateMenuList',
            }

            this.$store.dispatch('getItems', payload)
        },
        getWish() {

            var payload = {
                model: 'wish',
                update_list: 'updateWishCountList',
                id: cart,
            }

            this.$store.dispatch('getItems', payload)

        },

        addToWish(item) {
            eventBus.$emit("progressEvent");
            // eventBus.$emit("loadingRequest");
            axios
                .patch(`/wish/${item}`)
                .then(response => {
                    eventBus.$emit("alertRequest", "Wishlist updated");
                    eventBus.$emit("RefWishEvent");
                    eventBus.$emit("StoprogEvent");
                    this.getWish();
                    // this.snackbar = true;
                })
                .catch(error => {
                    eventBus.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },

        showerror(data) {
            this.message = data;
            this.Scolor = "red";
            this.snackbar = true;
        },

        showalert(data) {
            this.message = data;
            this.Scolor = "black";
            this.snackbar = true;
        },

        loadingalert() {
            this.message = "Loading...";
            this.Scolor = "black";
            this.y = "top";
            this.x = "right";
            this.snackbar = true;
        },

        productSearch() {
            // alert('test')
            // eventBus.$emit("openSearch");
            eventBus.$emit("searchEvent", this.search);
            this.$router.push({
                name: "search",
                params: {
                    search: this.search
                }
            });
        },

        redirect(id) {
            // alert('oooo')
            this.$router.push({
                name: "details",
                params: {
                    id: id
                }
            });
        },
    },

    created() {
        eventBus.$on("addCartEvent", data => {
            this.addToCart(data);
        });
        eventBus.$on("subCartEvent", data => {
            this.update_cart(data);
        });
        eventBus.$on("WishListEvent", data => {
            this.addToWish(data);
        });
        eventBus.$on("cartEvent", data => {
            this.getCart()
        });
        eventBus.$on("alertRequest", data => {
            this.showalert(data);
        });
        eventBus.$on("errorRequest", data => {
            this.showerror(data);
        });
        eventBus.$on("loadingRequest", data => {
            this.loadingalert();
        });
        eventBus.$on("progressEvent", data => {
            this.$refs.topProgress.start();
        });
        eventBus.$on("StoprogEvent", data => {
            this.$refs.topProgress.done();
        });
        eventBus.$on("ScollEvent", data => {
            window.scrollTo(0, 300);
            // VueScroll.scrollTo('#headerq', 1000)
        });
        eventBus.$on("ScollTopEvent", data => {
            window.scrollTo(0, 0);
            // VueScroll.scrollTo('#headerq', 1000)
        });
        eventBus.$on("errorEvent", data => {
            this.showerror(data);
        });

        eventBus.$on("Productdetails", data => {
            this.redirect(data);
        });

        this.timer = window.setInterval(() => {
            this.getCart();
            // eventBus.$emit("cartEvent", response.data);
        }, 60000);

        eventBus.$on('addCartVariantEvent', res_data => {
            var choices = res_data.choices
            var data = res_data.skus
            this.product = data.product

            // console.log(data);

            // if (this.cart_item.cart.length > 0) {
            //     this.cart_item.cart.forEach(element => {
            //         if (data.sku_no == element.sku_no) {
            //             data.product = element
            //         }
            //     });
            // }
            data.product.sku_no = data.sku_no
            data.product.order_qty = 1
            data.product.price = data.price
            data.product.quantity = data.quantity
            data.product.sku_id = data.sku_id

            if (choices) {
                data.product.choices = choices
            }

            this.addToCart(data.product);
            // this.addCart(data.product)
        })
    },

    computed: {
        target() {
            const value = this[this.type];
            return Number(value);
        },
        options() {
            return {
                duration: this.duration,
                offsetTop: this.offsetTop,
                easing: this.easing
            };
        },
        cart_count() {
            return this.$store.getters.cart_count
        },

        wish_count() {
            return this.$store.getters.wish_count
        }

    },
    mounted() {
        // this.progressBar();
        this.getCart();
        // this.getWish();
        this.get_cart_total()
        this.get_cart_count()
        this.getCategory()
        this.getMenu()
    },
};
</script>

<style scoped>
#header1 .main_menu>li>a:hover {
    color: #f0aca1;
}

.router-link-exact-active {
    color: #e65540 !important;
}

#category .active {
    color: #e65540;
    padding: 5px 0;
    cursor: pointer;
    /* font-size: 17px; */
    font-style: italic;
    font-weight: bold;
}

#category .card-text {
    cursor: pointer;
    padding: 5px 0;
    color: #000;
}

#category .card-text:hover {
    color: #f00;
}
</style>

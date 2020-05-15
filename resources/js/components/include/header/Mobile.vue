<template>
<div class="wrap_header_mobile">

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="width: 100%">
        <router-link class="nav-link" to="/">
            <img src="/storage/logo/dellmat.png" alt="Delmat" style="max-width: 100px;">
        </router-link>

        <mySearch />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/shop">Shop</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/carthome">Cart</router-link>
                </li>

            </ul>

        </div>
    </nav>

    <div class="header-icons-mobile">
        <v-tooltip bottom id="mobile">
            <a href="/vendor">
                <v-btn slot="activator" icon class="mx-0">
                    <v-icon small color="indigo darken-2">login</v-icon>
                </v-btn>
            </a>
            <span>Become a seller</span>
        </v-tooltip>
        <a href="tel:+254792877803" style="margin: 0 10px">+254792877803</a>
        <div class="header-wrapicon2">
            <img src="https://storage.cloud.google.com/ecomerce_bucket/icons/cart.png?authuser=1" class="header-icon1 js-show-header-dropdown" alt="ICON">
            <span class="header-icons-noti">{{ cart_count }}</span>



            <!-- Header cart noti -->
            <myCart></myCart>
        </div>
        <span class="linedivide2"></span>
        <div class="header-wrapicon2">
            <img src="https://storage.cloud.google.com/ecomerce_bucket/icons/wish.png?authuser=1" class="header-icon1 js-show-header-dropdown" alt="ICON">
            <span class="header-icons-noti">0</span>

            <!-- Header cart noti -->
            <!-- <myWish></myWish> -->
        </div>
        <Logout :user="user" style="margin-left: 100px;"></Logout>
        <!-- <VBtn icon color="primary" v-else  style="margin-left: 20px;">
            <VIcon>update</VIcon>
        </VBtn> -->
        <!-- <v-btn color="primary"href="/login" style="margin-left: 20px;">Login</v-btn> -->
    </div>

</div>
</template>

<script>
import myCart from "../../cart/Cartvue";
import Logout from "../Logout";
import mySearch from "../Search";

export default {
    props: ['user'],
    components: {
        myCart,
        Logout,
        mySearch
    },
    computed: {
        cart_count() {
            return this.$store.getters.cart_count
        },
    },
}
</script>

<template>
<!-- <VBtn color="success" @click="getProducts">text</VBtn> -->
<div>
    <img src="/banners/banner1.jpg" style="margin: 20px 0" />
    <div>
        <myCategory style="padding: 0 30px" />
        <myVariants style="padding: 0 30px" />
        <myFeatured style="padding: 0 30px" />
        <mySlide style="padding: 0 30px" />
        <myNew></myNew>
        <img src="/banners/banner-02.jpg" />

        <myBest style="padding: 0 30px" />

    </div>
</div>
</template>

<script>
// import slider components
import myCategory from './category'
import myVariants from './variants'
import myBest from './Best'
import myFeatured from './Featured'
import myNew from './New'
import mySlide from "./Slide";

import {
    slider,
    slideritem
} from 'vue-concise-slider'
export default {
    name: 'product_slider',
    components: {
        slider,
        slideritem,
        myBest,
        myCategory,
        myVariants,
        myNew,
        mySlide,
        myFeatured
    },
    data() {
        return {

        }
    },
    methods: {
        getProducts() {
            var payload = {
                model: 'products',
                update_list: 'updateProductsList',
            }
            this.$store.dispatch('getItems', payload)
        },
        getProductsettings() {
            var payload = {
                model: 'product_setting',
                update_list: 'updateProductSettingList',
            }
            this.$store.dispatch('getItems', payload)
        },
    },
    mounted() {
        this.getProductsettings();
        this.getProducts();
    },
    computed: {
        products() {
            return this.$store.getters.products
        },
    },
}
</script>

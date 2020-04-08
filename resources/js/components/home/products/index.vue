<template>
<!-- <VBtn color="success" @click="getProducts">text</VBtn> -->
<div class="container">
    <myCategory></myCategory>
    <myVariants></myVariants>

    <myFeatured></myFeatured>
    <myNew></myNew>
    <myBest></myBest>

</div>
</template>

<script>
// import slider components
import myCategory from './category'
import myVariants from './variants'
import myBest from './Best'
import myFeatured from './Featured'
import myNew from './New'

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

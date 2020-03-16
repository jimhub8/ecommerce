<template>
<v-app>
    <v-container fluid>
        <div style="width:100%;auto;height:600px">
            <myCategory></myCategory>
            <myProducts></myProducts>
        </div>
    </v-container>
</v-app>
</template>

<script>
// import slider components
import myCategory from './category'
import myProducts from './Best'
import {
    slider,
    slideritem
} from 'vue-concise-slider'
export default {
    name: 'product_slider',
    components: {
        slider,
        slideritem,
        myProducts,
        myCategory
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
    },
    mounted() {
        this.getProducts();
    },
    computed: {
        products() {
            return this.$store.getters.products
        }
    },
}
</script>

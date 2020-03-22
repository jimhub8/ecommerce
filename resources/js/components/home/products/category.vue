<template>
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label="item.category" :name="item.category" v-for="item in categories.data" :key="item.id">
        <v-row>
            <v-col v-for="(product, index) in item.products" :key="product.id" cols="12" sm="6" md="3" lg="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4">
                        <v-img :aspect-ratio="16/9" :src="product.image" height="300px">
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon v-on="on" @click="product_view(item.products[index])">
                                                <v-icon color="primary">visibility</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Quick view</span>
                                    </v-tooltip>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon v-on="on">
                                                <v-icon color="primary">favorite</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>add to wish list</span>
                                    </v-tooltip>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon v-on="on" @click="addToCart(item.products[index])">
                                                <v-icon color="primary">mdi-cart</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>add to cart</span>
                                    </v-tooltip>
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">

                            <div class="font-weight-light grey--text title mb-2">{{ product.product_name }}</div>
                            <div class="font-weight-light title mb-2">
                                {{ product.price }}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </el-tab-pane>
</el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: "Television"
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

        getCategory() {
            var payload = {
                model: 'categories',
                update_list: 'updateCategoryList',
            }
            this.$store.dispatch('getItems', payload)
        },

        product_view(product) {
            eventBus.$emit("viewProEvent", product);
        },

        addToCart(cart) {
            if (cart.product_variants.length > 0) {
                eventBus.$emit('selectVariantsEvent', cart)
                // this.select_variants()
                return
            }
            cart.order_qty = 1
            eventBus.$emit("addCartEvent", cart);
        },
        // addToCart(cart) {
        //     cart.order_qty = 1
        //     eventBus.$emit("addCartEvent", cart);
        // },
    },
    mounted() {
        this.getCategory();
    },
    computed: {
        categories() {
            return this.$store.getters.categories
        }
    },

};
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>

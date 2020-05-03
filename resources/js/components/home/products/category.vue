<template>
<v-layout row wrap>
    <VFlex sm2>
        <img src="/banners/banner-left2.jpg" />

        <div>
            <div class="box-title">
                <h3><span>On sale</span></h3>
            </div>

            <VLayout row wrap v-for="sale in onSale.data" :key="sale.id" style="margin-top: 30px; background: #fff">
                <v-flex sm7 style="text-align: right">
                    <el-rate v-model="value" disabled></el-rate>
                    <small> {{ sale.price }} </small>
                    <p> {{ sale.product_name }} </p>
                </v-flex>
                <v-flex sm4 offset-sm1>
                    <img :src="sale.image" style="width:80px; height:80px" />
                </v-flex>
                <v-flex sm12>
                    <VDivider />
                </v-flex>
            </VLayout>
            <!-- <ul class="list-group">
                <li class="list-group-item" v-for="sale in onSale.data" :key="sale.id">{{ sale.product_name }}</li>
            </ul> -->
        </div>
    </VFlex>
    <VFlex sm9 style="margin-left: 20px">
        <el-tabs v-model="selected_name" @input="handleClick">
            <el-tab-pane :label="item.category" :name="item.category" v-for="item in categories.data" :key="item.id">
                <v-row>
                    <v-col v-for="(product, index) in category_products.data" :key="product.id" cols="12" sm="6" md="3" lg="3">
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
                                                        <v-icon color="primary">shopping_cart</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>add to cart</span>
                                            </v-tooltip>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                                <v-card-text class="pt-6" style="position: relative;">

                                    <div style="cursor: pointer" class="font-weight-light grey--text title mb-2" @click="Productdetails(product.id)">{{ product.product_name }}</div>
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
    </VFlex>
</v-layout>
</template>

<script>
export default {
    data() {
        return {
            selected_name: '',
            value: 3.7

        };
    },
    methods: {

        getCategory() {
            var payload = {
                model: 'categories',
                update_list: 'updateCategoryList',
            }
            this.$store.dispatch('getItems', payload).then((res) => {
                // if (this.categories.data) {
                const idx = Math.floor(Math.random() * this.categories.data.length);
                console.log(idx);

                return this.selected_name = this.categories.data[idx].category;
                // }
            })
        },

        getonSale() {
            var payload = {
                model: 'onSale',
                update_list: 'updateonSaleList',
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
        Productdetails(id) {
            eventBus.$emit('Productdetails', id)
        },
        handleClick(data) {
            console.log(data);

            var payload = {
                model: 'category_products',
                update: 'updateCategortProductsList',
                id: data,
            }
            this.$store.dispatch('showItem', payload)
        }
        // addToCart(cart) {
        //     cart.order_qty = 1
        //     eventBus.$emit("addCartEvent", cart);
        // },
    },
    mounted() {
        this.getCategory();
        this.getonSale();
    },
    computed: {
        categories() {
            return this.$store.getters.categories
        },
        category_products() {
            return this.$store.getters.category_products
        },
        onSale() {
            return this.$store.getters.onSale
        },
        // activeName() {
        //     // console.log(this.categories.length);
        //     if (this.categories.data) {
        //         const idx = Math.floor(Math.random() * this.categories.data.length);
        //         console.log(idx);

        //         return this.selected_name = this.categories.data[idx].category;
        //     }
        // },
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
/*
.box-title h3 {
    position: relative;
    float: none;
    text-align: center;
    font-size: 20px !important;
    text-transform: uppercase;
    font-weight: 700;
}

.box-title h3:before {
    right: auto;
}

.box-title h3:before {
    content: "\f005";
    font-family: FontAwesome;
    font-size: 16px;
    color: #18bcec;
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-left: -15px;
    border: 1px #ccc solid;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    line-height: 23px;
    background: #fff;
    z-index: 9;
    margin-top: 20px;
}

.box-title h3:after {
    content: "";
    height: 2px;
    background: #ebebeb;
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
} */
</style>

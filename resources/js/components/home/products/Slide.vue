<template>
<div>
    <div class="box-title" style="margin: 30px 0;">
        <h3><span>Trending items</span></h3>
    </div>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in chunkedItems" :key="index">
            <!-- <v-layout row wrap>
                <v-flex sm4 v-for="product in item" :key="product.id">
                    <img :src="product.image" style="width: 99%;" />
                </v-flex>
            </v-layout> -->

            <v-row>
                <v-col v-for="product in item" :key="product.id" cols="12" sm="12" md="3" lg="3">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="mx-auto" color="grey lighten-4" max-width="800">
                            <v-img :aspect-ratio="16/9" :src="product.image" height="300px">
                                <v-btn color="primary" text>{{ product.product_name }}</v-btn>
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon v-on="on" @click="product_view(product)">
                                                    <v-icon color="primary">visibility</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Quick preview</span>
                                        </v-tooltip>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon v-on="on" @click="addToWish(product)">
                                                    <v-icon color="primary">favorite</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>add to wish list</span>
                                        </v-tooltip>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon v-on="on" @click="addToCart(product)">
                                                    <v-icon color="primary">shopping_cart</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>add to cart</span>
                                        </v-tooltip>
                                    </div>
                                </v-expand-transition>
                            </v-img>
                            <!-- <v-card-text class="pt-6" style="position: relative;">
                                <div style="cursor: pointer" class="font-weight-light grey--text title mb-2" @click="Productdetails(product.id)">{{ product.product_name }}</div>
                                <div class="font-weight-light title mb-2">
                                    {{ product.price }}
                                </div>
                            </v-card-text> -->
                        </v-card>
                    </v-hover>

                </v-col>
            </v-row>

        </el-carousel-item>
    </el-carousel>
    <div>
        <!-- {{ length_val }} -->

    </div>
</div>
</template>

<script>
export default {
    methods: {

        getProducts() {
            var payload = {
                model: 'all_products',
                update_list: 'updateSlideProductsList',
            }
            this.$store.dispatch('getItems', payload)
        },
        product_view(product) {
            console.log(product);
            eventBus.$emit("viewProEvent", product);
        },

        addToCart(cart) {
            console.log(cart);

            if (cart.product_variants.length > 0) {
                eventBus.$emit('selectVariantsEvent', cart)
                // this.select_variants()
                return
            }
            cart.order_qty = 1
            eventBus.$emit("addCartEvent", cart);
        },
        addToWish(wish) {
            eventBus.$emit("WishListEvent", wish);
        },
    },
    computed: {
        chunkedItems() {
            if (this.product_slide.data) {
                return _.chunk(this.product_slide.data, 6)
            }
        },
        product_slide() {
            return this.$store.getters.product_slide;
        },
        length_val() {
            if (this.chunkedItems) {
                return this.chunkedItems[0].length
            }
        }
    },
    mounted() {
        this.getProducts();
    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    /* line-height: 300px; */
    margin: 0;
}


.el-carousel__item:nth-child(2n) {
    background-color: #fff;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}

.el-carousel__item[data-v-6225075b]:nth-child(2n+1) {
    background-color: #fff;
    /* height: 420px; */
}

.el-carousel--horizontal {
    /* height: 420px; */
}
</style>

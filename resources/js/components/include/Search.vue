<template>
<div>
    <ais-index app-id="V4Q0BRYFL9" api-key="9f7c6c2a11bdfec5e7569c1e45e8fa2b" index-name="products" style="margin: auto;">
        <ais-input placeholder="Find products..." class="form-control" @query="showMenu" autofocus></ais-input>

        <div class="container" style="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper;position: absolute;z-index: 17;" v-if="show_menu">
            <div class="categori-menu" @mouseleave="show_menu = false">
                <v-list three-line style="max-height: 60vh; overflow: scroll">
                    <template>
                        <ais-results>
                            <template slot-scope="{ result }">
                                <v-divider></v-divider>
                                <v-list-item @click="Productdetails(result.id)">

                                    <v-img :src="result.image" style="height: 70px"></v-img>
                                    <v-list-item-content>
                                        <v-list-item-title v-html="result.product_name"></v-list-item-title>
                                        <v-list-item-subtitle>
                                            KSH {{ result.Price }}
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </ais-results>
                        <ais-no-results></ais-no-results>
                        <ais-pagination></ais-pagination>
                    </template>
                </v-list>

            </div>
        </div>
    </ais-index>
</div>
</template>

<script>
export default {

    data() {
        return {
            api_key: process.env.MIX_ALGOLIA_APP_KEY,
            secret_key: process.env.MIX_ALGOLIA_SECRET,
            show_menu: false,
            search: '',
        }
    },
    methods: {
        showMenu() {
            // alert('test')
            this.show_menu = true
            // this.show_menu = !this.show_menu
        },

        search_products() {
            var payload = {
                model: 'algolia',
                update_: 'updateProductSearch',
                search: this.search
            }
            this.$store.dispatch('getItems', payload)
        },
        Productdetails(data) {
            eventBus.$emit('Productdetails', data)
        }
    },
}
</script>

<style>
.ais-index .v-image__image {
    width: 50px !important;
    height: 50px !important;
}

.ais-index .v-list--three-line .v-list-item .v-list-item__content,
.v-list-item--three-line .v-list-item__content {
    margin-left: -430px !important;
}

.ais-pagination ul,
li {
    margin: 0px;
    list-style-type: none;
    display: inline;
}
.theme--light.v-list {
    background: #f0f0f0;
    color: rgba(0, 0, 0, 0.87);
}
@media only screen and (max-width: 991px) {

    .ais-index .v-list--three-line .v-list-item .v-list-item__content,
    .v-list-item--three-line .v-list-item__content {
        margin-left: -0px !important;
    }

    .categori-menu {
        width: 100% !important;
    }
}
</style>

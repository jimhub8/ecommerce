<template>
<div>
    <v-content>
        <v-container fluid fill-height>

            <v-layout justify-center align-center>
                <v-card>
                    <v-card-title>
                        Order

                        <!-- <v-spacer></v-spacer> -->
                        <v-tooltip bottom>
                            <v-btn slot="activator" icon class="mx-0" @click="getOrders">
                                <v-icon small color="blue darken-2">refresh</v-icon>
                            </v-btn>
                            <span>Refresh</span>
                        </v-tooltip>
                        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="orders.data" class="elevation-1" :search="search" :loading="loading">
                        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.created_at }}</td>
                            <td class="text-xs-right">{{ props.item.order_no }}</td>
                            <td class="text-xs-right">{{ user.billing.street_address }}</td>
                            <td class="text-xs-right">e</td>
                            <td class="text-xs-right">ddd</td>

                        </template>
                        <v-alert slot="no-results" :value="true" color="error" icon="warning">
                            Your search for "{{ search }}" found no results.
                        </v-alert>
                    </v-data-table>
                </v-card>
            </v-layout>
        </v-container>
        <v-snackbar :timeout="timeout" bottom :color="color" left v-model="snackbar">
            {{ message }}
            <v-btn>close</v-btn>
        </v-snackbar>
    </v-content>
    <!-- <Edit @closeRequest="close" :openAddRequest="dispEdit" @alertRequest="showAlert" :order="catEdit"></Edit> -->
    <myView></myView>
</div>
</template>

<script>
import myView from "./View";
export default {
    props: ['user'],
    components: {
        myView
    },

    data() {
        return {
            csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            search: "",
            dispAdd: false,
            dispEdit: false,
            dispShow: false,
            catEdit: [],
            snackbar: false,
            timeout: 5000,
            color: "",
            message: "",
            discount: 0,
            totalPrice: null,
            carts: [],
            headers: [{
                    text: "Created On",
                    value: "created_at"
                }, {
                    text: "Order No.",
                    value: "order_no"
                },
                {
                    text: "Client address",
                    value: "user.billing.street_address"
                },
                {
                    text: "Total",
                    value: "sub_total"
                },
                {
                    text: "Status",
                    value: "status"
                },
                {
                    text: "Actions",
                    sortable: false
                }
            ]
        };
    },

    methods: {
        openAdd() {
            this.dispAdd = true;
        },
        close() {
            this.dispAdd = this.dispShow = this.dispEdit = false;
        },

        getOrders() {
            var payload = {
                model: 'sales',
                update_list: 'updateOrderList',
            }
            this.$store.dispatch('getItems', payload)
        },
        view(order) {
            eventBus.$emit("viewOrdEvent", order);
        },
        deleteItem(item) {
            if (confirm('Are you sure you want to delete this item?')) {
                axios.delete(`/orders/${item.id}`)
                    .then((response) => {
                        eventBus.$emit("alertRequest", 'Successifully deleted');
                        this.orders.splice(index, 1)
                    })
                    .catch((error) => {
                        if (error.response.status === 500) {
                            eventBus.$emit('errorEvent', error.response.statusText)
                            return
                        }
                        this.errors = error.response.data.errors
                    })
            }
        },

    },
    mounted() {
        this.getOrders();
    },

    computed: {
        getSubTotal() {
            this.orders.forEach(element => {
                this.carts = element.cart;
            });
            // if (this.orders.carts.length > 0) {
            //     this.totalPrice = 0;
            //     for (let index = 0; index < this.orders.carts.length; index++) {
            //         const element = this.orders.carts[index];
            //         this.totalPrice = parseInt(element.price) + this.totalPrice;
            //     }
            // }
            // return this.carts;
        },
        orders() {
            return this.$store.getters.orders
        },
        loading() {
            return this.$store.getters.loading
        },
        // getTotal() {
        //     if (this.carts.length > 0) {
        //         return parseInt(this.getSubTotal) - this.discount;
        //     }
        // }
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (vm.user.can['view orders']) {
                next();
            } else {
                next('/unauthorized');
            }
        })
    }
};
</script>

<style scoped>
.theme--light.v-sheet {
    width: 100% !important;
}
</style>

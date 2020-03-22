<template>
<div>
<v-data-table :headers="headers" :items="orders.data" sort-by="calories" class="elevation-1">
    <template v-slot:item.actions="{ item }">
        <!-- <v-icon small class="mr-2">
            mdi-visibility
        </v-icon>
        <v-icon small>
            mdi-delete
        </v-icon> -->

        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" slot="activator" class="mx-0" @click="view(item)">
                    <v-icon color="blue darken-2" small>visibility</v-icon>
                </v-btn>
            </template>
            <span>view order</span>
        </v-tooltip>

    </template>
</v-data-table>
<myView></myView>
</div>
</template>

<script>
import myView from "./View";
export default {
    components: {
        myView,
    },
    data: () => ({
        dialog: false,
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
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
        ],
    }),

    methods: {
        view(order) {
            console.log(order);

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
        getOrders() {
            var payload = {
                model: 'sales',
                update_list: 'updateOrderList',
            }
            this.$store.dispatch('getItems', payload)
        },

    },

    computed: {
        orders() {
            return this.$store.getters.orders
        },
        loading() {
            return this.$store.getters.loading
        },
    },

    mounted() {
        this.getOrders();
    },
}
</script>

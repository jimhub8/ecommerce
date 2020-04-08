import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
    state: {
        loading: false,
        errors: [],
        users: [],
        deletedUsers: [],
        roles: [],
        permissions: [],
        products: [],
        customers: [],
        discount: [],
        sales: [],
        order_address: [],
        related: [],
        carts: [],
        discounts: [],
        clients: [],
        cart_count: null,
        categories: [],
        menu: [],
        subcategories: [],
        brands: [],
        wish_count: null,
        option_values: [],
        orders: [],
        cart_total: null,
        // Deleted
        deleted_clients: [],

        // Api
        options: [],
        sliderS: [],
        slider: [],
        cart: [],
        product_setting: [],

    },
    getters,
    mutations,
    actions
}

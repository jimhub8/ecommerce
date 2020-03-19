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
        groups: [],
        carts: [],
        discounts: [],
        clients: [],
        cart_count: [],
        categories: [],
        menu: [],
        subcategories: [],
        brands: [],
        wish_count: null,
        option_values: [],
        cart_total: null,
        // Deleted
        deleted_clients: [],

        // Api
        options: [],

        cart: [],

    },
    getters,
    mutations,
    actions
}

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
        cart: [],
        discounts: [],
        clients: [],
        cart_count: [],
        categories: [],
        menu: [],
        subcategories: [],
        brands: [],
        wish_count: null,
        option_values: [],

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

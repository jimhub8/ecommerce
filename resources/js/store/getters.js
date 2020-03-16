export default {
    loading(state) {
        return state.loading;
    },
    errors(state) {
        return state.errors;
    },
    alertEvent(state) {
        eventBus.$emit('alertEvent', state)
        // return state.alertEvent;
    },
    users(state) {
        return state.users
    },
    deletedUsers(state) {
        return state.deletedUsers
    },
    roles(state) {
        return _.orderBy(state.roles, 'name', 'asc')
    },
    permissions(state) {
        return state.permissions;
    },
    products(state) {
        return state.products
    },
    clients(state) {
        return state.clients
    },
    suppliers(state) {
        return state.suppliers
    },
    customers(state) {
        return state.customers
    },
    discount(state) {
        return state.discount
    },
    sales(state) {
        return state.sales
    },
    cart(state) {
        return state.cart
    },
    cart_count(state) {
        return state.cart_count
    },

    discounts(state) {
        return state.discounts
    },
    // Unique
    wish_count(state) {
        return state.wish_count;
    },
    categories(state) {
        return state.categories;
    },
    menu(state) {
        return state.menu;
    },
    subcategories(state) {
        return state.subcategories;
    },
    brands(state) {
        return state.brands;
    },


    options(state) {
        return state.options;
    },
    option_values(state) {
        return state.option_values;
    },
}

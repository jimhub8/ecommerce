<template>
<div>
    <section class="bgwhite">
        <myCarousel></myCarousel>
        <myProduct></myProduct>
        <Show></Show>
    </section>
</div>
</template>

<script>
import myCarousel from './Carousel'
import myFilter from "../filter/Filter";
import myProduct from "./products";
import Show from "../home/Show";
import Menu from "./Menu";
import myFooter from '../include/Footer'
export default {
    components: {
        myCarousel,
        Menu,
        Show,
        myProduct,
        myFilter,
        myFooter
    },
    data() {
        return {
            singleP: [],
            singleT: [],
            singleTN: [],
            headerPro: [],
            menus: [],
            categories: [],
            loader: false,
            catShow: false,
            menuShow: false,
            filter: false
        };
    },
    methods: {
        gotoSub(item) {
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "subcat"
                }
            });
            // eventBus.$emit("gotoSUbcatEvent", item);
        },
        gotoCat(item) {
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "cat"
                }
            });
            // eventBus.$emit("gotoCatEvent", item);
        },
        showMenu(menu) {
            this.menuShow = true;
            this.categories = menu.categories;
        },

        view(product) {
            eventBus.$emit("viewProEvent", product);
        },

        getSliders() {
            var payload = {
                model: 'slider',
                update_list: 'updateSliderList'
            }
            this.$store.dispatch("getItems", payload);
        },

        getSlider() {
            var payload = {
                model: 'slider',
                update: 'updateSliderSList',
                id: 1,
            }
            this.$store.dispatch("showItem", payload);
        },
    },
    computed: {
        slider() {
            return this.$store.getters.slider;
        },
    },
    mounted() {
        eventBus.$emit("ScollTopEvent");
        // eventBus.$emit('StoprogEvent');
        // alert('enter')
        this.getSliders()
        this.getSlider();

    },
    created() {
        // eventBus.$on("addCartEvent", data => {
        //   this.addToCart(data);
        // });
        eventBus.$on("filterEvent", data => {
            this.filter = true;
        });

        eventBus.$on("unfilterEvent", data => {
            this.filter = false;
        });
    },
    beforeRouteLeave(to, from, next) {
        // eventBus.$emit('progressEvent');
        next();
    },

    updated() {
        // alert('updated')
        // eventBus.$emit("StoprogEvent");
    }
};
</script>

<style scoped>

</style>

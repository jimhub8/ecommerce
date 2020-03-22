<template>
<div>
    <div v-show="loader" style="text-align: center; width: 100%; margin-top: 200px;">
        <v-progress-circular :width="3" indeterminate color="red" style="margin: 1rem"></v-progress-circular>
    </div>
    <div v-show="!loader" id="container">
        <section class="bgwhite p-t-55 p-b-65">
            <div id="backImage">
                <v-layout wrap>
                    <v-flex sm12 md12>
                        <myCarousel></myCarousel>
                    </v-flex>
                </v-layout>
            </div>
        </section>
        <div>
            <myProduct></myProduct>
            <!-- <myFilter v-show="filter"></myFilter> -->
            <Show></Show>
        </div>
    </div>
</div>
</template>

<script>
import myCarousel from './Carousel'
import myFilter from "../filter/Filter";
import myProduct from "./products";
import Show from "../home/Show";
import Menu from "./Menu";
export default {
    components: {
        myCarousel,
        Menu,
        Show,
        myProduct,
        myFilter
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
        sliderS() {
            return this.$store.getters.sliderS;
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
#container {
    position: relative;
    width: 100%;
    height: 100%;
}

#container.after {
    position: absolute;
    color: #000;
    display: block;
}

#container:hover.after {
    display: block;
    background: rgba(0, 0, 0, 6);
}

.image-container {
    position: relative;
    height: 60vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.45);
}

.image-container .after {
    position: absolute;
    top: 0;
    left: 0;
    height: 60vh;
    width: 100%;
    display: block;
    color: #fff;
    background: rgba(0, 0, 0, 0.45);
}

.image-container:hover .after {
    display: block;
    background: rgba(0, 0, 0, 0.45);
}

#backImage {
    /* background: url(/storage/cover/pixel.jpeg); */
    background-position: center;
    /* background-repeat: no-repeat;  */
}

#category .active {
    color: #e65540;
    padding: 5px 0;
    cursor: pointer;
    /* font-size: 17px; */
    font-style: italic;
    font-weight: bold;
}

#category .card-text {
    cursor: pointer;
    padding: 5px 0;
}

#category .card-text:hover {
    color: #f00;
}
</style>

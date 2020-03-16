<template>
<!-- Make a div wrapped slider,set height and width -->
<div style="width:100%;margin:20px auto;height:400px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
        <!-- slideritem wrapped package with the components you need -->
        <slideritem v-for="(item,index) in products.data" :key="index" >test</slideritem>
        <!-- Customizable loading -->
        <div slot="loading">loading...</div>
    </slider>
</div>
</template>

<script>
// import slider components
import {
    slider,
    slideritem
} from 'vue-concise-slider'
export default {
    name: 'product_slider',
    components: {
        slider,
        slideritem
    },
    data() {
        return {
            someList: [{
                    html: 'slider1',
                    style: {
                        'background': '#4abf8a',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                },
                {
                    html: 'slider2',
                    style: {
                        'background': '#4bbfc3',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                },
                {
                    html: 'slider3',
                    style: {
                        'background': '#7baabe',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                },
                {
                    html: 'slider4',
                    style: {
                        'background': '#7caabe',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                },
                {
                    html: 'slider5',
                    style: {
                        'background': '#4abf8a',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                },
                {
                    html: 'slider6',
                    style: {
                        'background': '#4bbfc3',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                },
                {
                    html: 'slider7',
                    style: {
                        'background': '#7baabe',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                },
                {
                    html: 'slider8',
                    style: {
                        'background': '#7caabe',
                        'width': '23.5%',
                        'margin-right': '2%'
                    }
                }
            ],
            //Slider configuration [obj]
            options: {
                currentPage: 0,
                tracking: false,
                thresholdDistance: 100,
                thresholdTime: 300,
                infinite: 4,
                slidesToScroll: 4,
                loop: true
            }
        }
    },
    methods: {
        getProducts() {
            var payload = {
                model: 'products',
                update_list: 'updateProductsList',
            }
            this.$store.dispatch('getItems', payload)
        },
    },
    mounted () {
        this.getProducts();
    },
    computed: {
        products() {
            return this.$store.getters.products
        }
    },
}
</script>

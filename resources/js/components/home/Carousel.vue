<template>
<div id="mainslider">
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in slider" :key="item.id">
            <img :src="item.image" />
            <div class="container">
                <div class="overlay" v-html="item.content"></div>
            </div>
        </el-carousel-item>
    </el-carousel>

</div>
</template>

<script>
export default {
    data() {
        return {
            overlay: true,
        }
    },
    computed: {
        slider() {

            return this.$store.getters.slider;
        },
        // sliderS() {
        //     return this.$store.getters.sliderS;
        // },
    },
}
</script>

<style>
#mainslider .el-carousel__container {
    height: 60vh !important;
}

/* Make the image to responsive */
#mainslider .image {
    display: block;
    width: 100%;
    height: auto;
}

/* The overlay effect - lays on top of the container and over the image */
#mainslider .overlay {
    position: absolute;
    bottom: 20%;
    background: #c7b9b926;
    /* Black see-through */
    width: 100%;
    transition: .5s ease;
    opacity: 0;
    color: black;
    font-size: 20px;
    padding: 20px;
    text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
#mainslider .container .overlay {
    opacity: 1;
    opacity: 1;
    width: 70%;
    margin: auto;
}
</style>

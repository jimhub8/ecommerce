(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-foo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Carousel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      overlay: true
    };
  },
  computed: {
    slider: function slider() {
      return this.$store.getters.slider;
    } // sliderS() {
    //     return this.$store.getters.sliderS;
    // },

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./resources/js/components/home/Carousel.vue");
/* harmony import */ var _filter_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter/Filter */ "./resources/js/components/filter/Filter.vue");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ "./resources/js/components/home/products/index.vue");
/* harmony import */ var _home_Show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/Show */ "./resources/js/components/home/Show.vue");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./resources/js/components/home/Menu.vue");
/* harmony import */ var _include_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../include/Footer */ "./resources/js/components/include/Footer.vue");
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    myCarousel: _Carousel__WEBPACK_IMPORTED_MODULE_0__["default"],
    Menu: _Menu__WEBPACK_IMPORTED_MODULE_4__["default"],
    Show: _home_Show__WEBPACK_IMPORTED_MODULE_3__["default"],
    myProduct: _products__WEBPACK_IMPORTED_MODULE_2__["default"],
    myFilter: _filter_Filter__WEBPACK_IMPORTED_MODULE_1__["default"],
    myFooter: _include_Footer__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
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
    gotoSub: function gotoSub(item) {
      this.$router.push({
        name: "Category",
        params: {
          id: item,
          type: "subcat"
        }
      }); // eventBus.$emit("gotoSUbcatEvent", item);
    },
    gotoCat: function gotoCat(item) {
      this.$router.push({
        name: "Category",
        params: {
          id: item,
          type: "cat"
        }
      }); // eventBus.$emit("gotoCatEvent", item);
    },
    showMenu: function showMenu(menu) {
      this.menuShow = true;
      this.categories = menu.categories;
    },
    view: function view(product) {
      eventBus.$emit("viewProEvent", product);
    },
    getSliders: function getSliders() {
      var payload = {
        model: 'slider',
        update_list: 'updateSliderList'
      };
      this.$store.dispatch("getItems", payload);
    },
    getSlider: function getSlider() {
      var payload = {
        model: 'slider',
        update: 'updateSliderSList',
        id: 1
      };
      this.$store.dispatch("showItem", payload);
    }
  },
  computed: {
    slider: function slider() {
      return this.$store.getters.slider;
    }
  },
  mounted: function mounted() {
    eventBus.$emit("ScollTopEvent"); // eventBus.$emit('StoprogEvent');
    // alert('enter')

    this.getSliders();
    this.getSlider();
  },
  created: function created() {
    var _this = this;

    // eventBus.$on("addCartEvent", data => {
    //   this.addToCart(data);
    // });
    eventBus.$on("filterEvent", function (data) {
      _this.filter = true;
    });
    eventBus.$on("unfilterEvent", function (data) {
      _this.filter = false;
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // eventBus.$emit('progressEvent');
    next();
  },
  updated: function updated() {// alert('updated')
    // eventBus.$emit("StoprogEvent");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Menu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      menus: [],
      menuShow: false,
      categories: []
    };
  },
  methods: {
    showMenu: function showMenu(menu) {
      this.menuShow = true;
      this.categories = menu.categories;
    },
    gotoSub: function gotoSub(item) {
      this.$router.push({
        name: "Category",
        params: {
          id: item,
          type: "subcat"
        }
      }); // eventBus.$emit("gotoSUbcatEvent", item);
    },
    gotoCat: function gotoCat(item) {
      this.$router.push({
        name: "Category",
        params: {
          id: item,
          type: "cat"
        }
      }); // eventBus.$emit("gotoCatEvent", item);
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("menus").then(function (response) {
      _this.menus = response.data;
    })["catch"](function (error) {
      _this.errors = error.response.data.errors;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Best.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'product_name',
      keys: ['Product name', 'sku no']
    };
  },
  computed: {
    numberOfPages: function numberOfPages() {
      return Math.ceil(this.products.bestsellers.data.length / this.itemsPerPage);
    },
    filteredKeys: function filteredKeys() {
      return this.keys.filter(function (key) {
        return key !== "Name";
      });
    },
    products: function products() {
      return this.$store.getters.products;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage: function formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage: function updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    product_view: function product_view(product) {
      eventBus.$emit("viewProEvent", product);
    },
    addToCart: function addToCart(cart) {
      if (cart.product_variants.length > 0) {
        eventBus.$emit('selectVariantsEvent', cart); // this.select_variants()

        return;
      }

      cart.order_qty = 1;
      eventBus.$emit("addCartEvent", cart);
    },
    addToWish: function addToWish(wish) {
      eventBus.$emit("WishListEvent", wish);
    },
    Productdetails: function Productdetails(id) {
      eventBus.$emit('Productdetails', id);
    },
    imageUrlAlt: function imageUrlAlt(e) {
      alert('tedst');
      event.target.src = "/assets/notfound/notfound.jpg";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Featured.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'product_name',
      keys: ['Product name', 'sku no']
    };
  },
  computed: {
    numberOfPages: function numberOfPages() {
      return Math.ceil(this.products.featured.data.length / this.itemsPerPage);
    },
    filteredKeys: function filteredKeys() {
      return this.keys.filter(function (key) {
        return key !== "Name";
      });
    },
    products: function products() {
      return this.$store.getters.products;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage: function formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage: function updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    product_view: function product_view(product) {
      eventBus.$emit("viewProEvent", product);
    },
    addToCart: function addToCart(cart) {
      if (cart.product_variants.length > 0) {
        eventBus.$emit('selectVariantsEvent', cart); // this.select_variants()

        return;
      }

      cart.order_qty = 1;
      eventBus.$emit("addCartEvent", cart);
    },
    wishList: function wishList(item) {
      eventBus.$emit("WishListEvent", item);
    },
    Productdetails: function Productdetails(id) {
      eventBus.$emit('Productdetails', id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/New.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'product_name',
      keys: ['Product name', 'sku no']
    };
  },
  computed: {
    numberOfPages: function numberOfPages() {
      return Math.ceil(this.products.newproduct.data.length / this.itemsPerPage);
    },
    filteredKeys: function filteredKeys() {
      return this.keys.filter(function (key) {
        return key !== "Name";
      });
    },
    products: function products() {
      return this.$store.getters.products;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage: function formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage: function updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    product_view: function product_view(product) {
      eventBus.$emit("viewProEvent", product);
    },
    addToCart: function addToCart(cart) {
      if (cart.product_variants.length > 0) {
        eventBus.$emit('selectVariantsEvent', cart); // this.select_variants()

        return;
      }

      cart.order_qty = 1;
      eventBus.$emit("addCartEvent", cart);
    },
    wishList: function wishList(item) {
      eventBus.$emit("WishListEvent", item);
    },
    Productdetails: function Productdetails(id) {
      eventBus.$emit('Productdetails', id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/category.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selected_name: '',
      value: 3.7
    };
  },
  methods: {
    getCategory: function getCategory() {
      var _this = this;

      var payload = {
        model: 'categories',
        update_list: 'updateCategoryList'
      };
      this.$store.dispatch('getItems', payload).then(function (res) {
        // if (this.categories.data) {
        var idx = Math.floor(Math.random() * _this.categories.data.length);
        console.log(idx);
        return _this.selected_name = _this.categories.data[idx].category; // }
      });
    },
    getonSale: function getonSale() {
      var payload = {
        model: 'onSale',
        update_list: 'updateonSaleList'
      };
      this.$store.dispatch('getItems', payload);
    },
    product_view: function product_view(product) {
      eventBus.$emit("viewProEvent", product);
    },
    addToCart: function addToCart(cart) {
      if (cart.product_variants.length > 0) {
        eventBus.$emit('selectVariantsEvent', cart); // this.select_variants()

        return;
      }

      cart.order_qty = 1;
      eventBus.$emit("addCartEvent", cart);
    },
    Productdetails: function Productdetails(id) {
      eventBus.$emit('Productdetails', id);
    },
    handleClick: function handleClick(data) {
      console.log(data);
      var payload = {
        model: 'category_products',
        update: 'updateCategortProductsList',
        id: data
      };
      this.$store.dispatch('showItem', payload);
    } // addToCart(cart) {
    //     cart.order_qty = 1
    //     eventBus.$emit("addCartEvent", cart);
    // },

  },
  mounted: function mounted() {
    this.getCategory();
    this.getonSale();
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    },
    category_products: function category_products() {
      return this.$store.getters.category_products;
    },
    onSale: function onSale() {
      return this.$store.getters.onSale;
    } // activeName() {
    //     // console.log(this.categories.length);
    //     if (this.categories.data) {
    //         const idx = Math.floor(Math.random() * this.categories.data.length);
    //         console.log(idx);
    //         return this.selected_name = this.categories.data[idx].category;
    //     }
    // },

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./resources/js/components/home/products/category.vue");
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variants */ "./resources/js/components/home/products/variants.vue");
/* harmony import */ var _Best__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Best */ "./resources/js/components/home/products/Best.vue");
/* harmony import */ var _Featured__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Featured */ "./resources/js/components/home/products/Featured.vue");
/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./New */ "./resources/js/components/home/products/New.vue");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Slide */ "./resources/js/components/home/products/Slide.vue");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-concise-slider */ "./node_modules/vue-concise-slider/dist/module.js");
/* harmony import */ var vue_concise_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_concise_slider__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import slider components







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'product_slider',
  components: {
    slider: vue_concise_slider__WEBPACK_IMPORTED_MODULE_6__["slider"],
    slideritem: vue_concise_slider__WEBPACK_IMPORTED_MODULE_6__["slideritem"],
    myBest: _Best__WEBPACK_IMPORTED_MODULE_2__["default"],
    myCategory: _category__WEBPACK_IMPORTED_MODULE_0__["default"],
    myVariants: _variants__WEBPACK_IMPORTED_MODULE_1__["default"],
    myNew: _New__WEBPACK_IMPORTED_MODULE_4__["default"],
    mySlide: _Slide__WEBPACK_IMPORTED_MODULE_5__["default"],
    myFeatured: _Featured__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    getProducts: function getProducts() {
      var payload = {
        model: 'products',
        update_list: 'updateProductsList'
      };
      this.$store.dispatch('getItems', payload);
    },
    getProductsettings: function getProductsettings() {
      var payload = {
        model: 'product_setting',
        update_list: 'updateProductSettingList'
      };
      this.$store.dispatch('getItems', payload);
    }
  },
  mounted: function mounted() {
    this.getProductsettings();
    this.getProducts();
  },
  computed: {
    products: function products() {
      return this.$store.getters.products;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#mainslider .el-carousel__container {\n    height: 60vh !important;\n}\n\n/* Make the image to responsive */\n#mainslider .image {\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n/* The overlay effect - lays on top of the container and over the image */\n#mainslider .overlay {\n    position: absolute;\n    bottom: 20%;\n    background: #c7b9b926;\n    /* Black see-through */\n    width: 100%;\n    transition: .5s ease;\n    opacity: 0;\n    color: black;\n    font-size: 20px;\n    padding: 20px;\n    text-align: center;\n}\n\n/* When you mouse over the container, fade in the overlay title */\n#mainslider .container .overlay {\n    opacity: 1;\n    opacity: 1;\n    width: 70%;\n    margin: auto;\n}\n\n/* .el-carousel--horizontal {\n    height: 40vh;\n} */\n@media only screen and (max-width: 991px) {\n#mainslider img {\n        width: 100vw;\n        height: 40vh;\n}\n#mainslider .container .overlay {\n        display: none;\n}\n.el-carousel--horizontal {\n    height: 40vh;\n        overflow: hidden;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.after[data-v-1824a374] {\r\n  position: absolute;\r\n  color: #000;\r\n  display: block;\n}\n#category .active[data-v-1824a374] {\r\n  color: #e65540;\r\n  padding: 5px 0;\r\n  cursor: pointer;\r\n  /* font-size: 17px; */\r\n  font-style: italic;\r\n  font-weight: bold;\n}\n#category .card-text[data-v-1824a374] {\r\n  cursor: pointer;\r\n  padding: 5px 0;\n}\n#category .card-text[data-v-1824a374]:hover {\r\n  color: #f00;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-1fdda4aa] {\n    align-items: center;\n    bottom: 0;\n    justify-content: center;\n    opacity: .5;\n    position: absolute;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-680d1218] {\n    align-items: center;\n    bottom: 0;\n    justify-content: center;\n    opacity: .5;\n    position: absolute;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-084ea04a] {\n    align-items: center;\n    bottom: 0;\n    justify-content: center;\n    opacity: .5;\n    position: absolute;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-d969d8b8] {\n    align-items: center;\n    bottom: 0;\n    justify-content: center;\n    opacity: .5;\n    position: absolute;\n    width: 100%;\n}\n/*\n.box-title h3 {\n    position: relative;\n    float: none;\n    text-align: center;\n    font-size: 20px !important;\n    text-transform: uppercase;\n    font-weight: 700;\n}\n\n.box-title h3:before {\n    right: auto;\n}\n\n.box-title h3:before {\n    content: \"\\f005\";\n    font-family: FontAwesome;\n    font-size: 16px;\n    color: #18bcec;\n    position: absolute;\n    bottom: -20px;\n    left: 50%;\n    margin-left: -15px;\n    border: 1px #ccc solid;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    line-height: 23px;\n    background: #fff;\n    z-index: 9;\n    margin-top: 20px;\n}\n\n.box-title h3:after {\n    content: \"\";\n    height: 2px;\n    background: #ebebeb;\n    position: absolute;\n    bottom: -8px;\n    left: 0;\n    right: 0;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=template&id=32724075&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Carousel.vue?vue&type=template&id=32724075& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "mainslider" } },
    [
      _c(
        "el-carousel",
        { attrs: { "indicator-position": "outside" } },
        _vm._l(_vm.slider, function(item) {
          return _c("el-carousel-item", { key: item.id }, [
            _c("img", { attrs: { src: item.image } }),
            _vm._v(" "),
            _c("div", { staticClass: "container" }, [
              _c("div", {
                staticClass: "overlay",
                domProps: { innerHTML: _vm._s(item.content) }
              })
            ])
          ])
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Home.vue?vue&type=template&id=1f26c2f4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Home.vue?vue&type=template&id=1f26c2f4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "bgwhite" },
      [_c("myCarousel"), _vm._v(" "), _c("myProduct"), _vm._v(" "), _c("Show")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=template&id=1824a374&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Menu.vue?vue&type=template&id=1824a374&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "after container",
      staticStyle: { "margin-top": "-7vh" },
      on: {
        mouseleave: function($event) {
          _vm.menuShow = false
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "row",
          staticStyle: {
            "margin-top": "7vh",
            "z-index": "1000",
            position: "absolute"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "col-2",
              staticStyle: {
                "min-width": "300px",
                "max-width": "300px",
                "margin-left": "-5vw"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "list-group",
                  staticStyle: { "text-align": "right" },
                  attrs: { id: "list-tab", role: "tablist" }
                },
                _vm._l(_vm.menus, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      attrs: {
                        id: "list-home-list",
                        "data-toggle": "list",
                        role: "tab",
                        "aria-controls": "home"
                      },
                      on: {
                        mouseover: function($event) {
                          return _vm.showMenu(item)
                        }
                      }
                    },
                    [_vm._v(_vm._s(item.name) + " > ")]
                  )
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-9", staticStyle: { "margin-left": "-2vw" } },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.menuShow,
                      expression: "menuShow"
                    }
                  ],
                  staticClass: "tab-content",
                  staticStyle: { background: "#fff" },
                  attrs: { id: "nav-tabContent" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade show active",
                      attrs: {
                        id: "list-home",
                        role: "tabpanel",
                        "aria-labelledby": "list-home-list"
                      }
                    },
                    [
                      _c("div", { staticClass: "row wrap" }, [
                        _c(
                          "div",
                          { staticClass: "card-columns col-md-10" },
                          _vm._l(_vm.categories, function(category, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                staticClass: "card",
                                staticStyle: {
                                  margin: "0",
                                  width: "110%",
                                  border: "none"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "card-body",
                                    staticStyle: { padding: "0" },
                                    attrs: { id: "category" }
                                  },
                                  [
                                    _c(
                                      "li",
                                      {
                                        staticClass: "active",
                                        on: {
                                          click: function($event) {
                                            return _vm.gotoCat(category.id)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(category.name))]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(category.sub_categories, function(
                                      subcat
                                    ) {
                                      return _c(
                                        "li",
                                        {
                                          key: subcat.id,
                                          staticClass: "card-text",
                                          on: {
                                            click: function($event) {
                                              return _vm.gotoSub(subcat.id)
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(subcat.name))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=template&id=1fdda4aa&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Best.vue?vue&type=template&id=1fdda4aa&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("v-data-iterator", {
        attrs: {
          items: _vm.products.bestsellers.data,
          "items-per-page": _vm.itemsPerPage,
          page: _vm.page,
          search: _vm.search,
          "sort-by": _vm.sortBy.toLowerCase(),
          "sort-desc": _vm.sortDesc,
          "hide-default-footer": ""
        },
        on: {
          "update:itemsPerPage": function($event) {
            _vm.itemsPerPage = $event
          },
          "update:items-per-page": function($event) {
            _vm.itemsPerPage = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c(
                  "v-row",
                  _vm._l(props.items, function(item) {
                    return _c(
                      "v-col",
                      {
                        key: item.product_name,
                        attrs: { cols: "12", sm: "6", md: "4", lg: "3" }
                      },
                      [
                        _c("v-hover", {
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          color: "grey lighten-4",
                                          "max-width": "800"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-img",
                                          {
                                            attrs: {
                                              "aspect-ratio": 16 / 9,
                                              src: item.image,
                                              height: "300px"
                                            }
                                          },
                                          [
                                            _c("v-expand-transition", [
                                              hover
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text",
                                                      staticStyle: {
                                                        height: "100%"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.product_view(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "visibility"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v("Quick view")
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addToWish(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "favorite"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "add to wish list"
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addToCart(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "shopping_cart"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "add to cart"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          {
                                            staticClass: "pt-6",
                                            staticStyle: {
                                              position: "relative"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-light grey--text title mb-2",
                                                staticStyle: {
                                                  cursor: "pointer"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.Productdetails(
                                                      item.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item.product_name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-light title mb-2"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(item.price) +
                                                    "\n                                "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        })
                      ],
                      1
                    )
                  }),
                  1
                )
              ]
            }
          },
          {
            key: "footer",
            fn: function() {
              return [
                _c(
                  "v-row",
                  {
                    staticClass: "mt-2",
                    attrs: { align: "center", justify: "center" }
                  },
                  [
                    _c("span", { staticClass: "grey--text" }, [
                      _vm._v("Items per page")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-menu",
                      {
                        attrs: { "offset-y": "" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "ml-2",
                                      attrs: {
                                        dark: "",
                                        text: "",
                                        color: "primary"
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.itemsPerPage) +
                                        "\n                            "
                                    ),
                                    _c("v-icon", [_vm._v("mdi-chevron-down")])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-list",
                          _vm._l(_vm.itemsPerPageArray, function(
                            number,
                            index
                          ) {
                            return _c(
                              "v-list-item",
                              {
                                key: index,
                                on: {
                                  click: function($event) {
                                    return _vm.updateItemsPerPage(number)
                                  }
                                }
                              },
                              [
                                _c("v-list-item-title", [
                                  _vm._v(_vm._s(number))
                                ])
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "mr-4\n            grey--text" },
                      [
                        _vm._v(
                          "\n                    Page " +
                            _vm._s(_vm.page) +
                            " of " +
                            _vm._s(_vm.numberOfPages) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-1",
                        attrs: { fab: "", dark: "", color: "blue darken-3" },
                        on: { click: _vm.formerPage }
                      },
                      [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "ml-1",
                        attrs: { fab: "", dark: "", color: "blue darken-3" },
                        on: { click: _vm.nextPage }
                      },
                      [_c("v-icon", [_vm._v("mdi-chevron-right")])],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "box-title", staticStyle: { margin: "30px 0" } },
      [_c("h3", [_c("span", [_vm._v("Best Sellers")])])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=template&id=680d1218&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/Featured.vue?vue&type=template&id=680d1218&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("v-data-iterator", {
        attrs: {
          items: _vm.products.featured.data,
          "items-per-page": _vm.itemsPerPage,
          page: _vm.page,
          search: _vm.search,
          "sort-by": _vm.sortBy.toLowerCase(),
          "sort-desc": _vm.sortDesc,
          "hide-default-footer": ""
        },
        on: {
          "update:itemsPerPage": function($event) {
            _vm.itemsPerPage = $event
          },
          "update:items-per-page": function($event) {
            _vm.itemsPerPage = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c(
                  "v-row",
                  _vm._l(props.items, function(item) {
                    return _c(
                      "v-col",
                      {
                        key: item.product_name,
                        attrs: { cols: "12", sm: "6", md: "4", lg: "3" }
                      },
                      [
                        _c("v-hover", {
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          color: "grey lighten-4",
                                          "max-width": "800"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-img",
                                          {
                                            attrs: {
                                              "aspect-ratio": 16 / 9,
                                              src: item.image,
                                              height: "300px"
                                            }
                                          },
                                          [
                                            _c("v-expand-transition", [
                                              hover
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text",
                                                      staticStyle: {
                                                        height: "100%"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.product_view(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "visibility"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v("Quick view")
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "favorite"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "add to wish list"
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addToCart(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "shopping_cart"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "add to cart"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          {
                                            staticClass: "pt-6",
                                            staticStyle: {
                                              position: "relative"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-light grey--text title mb-2",
                                                staticStyle: {
                                                  cursor: "pointer"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.Productdetails(
                                                      item.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item.product_name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-light title mb-2"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(item.price) +
                                                    "\n                                "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        })
                      ],
                      1
                    )
                  }),
                  1
                )
              ]
            }
          },
          {
            key: "footer",
            fn: function() {
              return [
                _c(
                  "v-row",
                  {
                    staticClass: "mt-2",
                    attrs: { align: "center", justify: "center" }
                  },
                  [
                    _c("span", { staticClass: "grey--text" }, [
                      _vm._v("Items per page")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-menu",
                      {
                        attrs: { "offset-y": "" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "ml-2",
                                      attrs: {
                                        dark: "",
                                        text: "",
                                        color: "primary"
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.itemsPerPage) +
                                        "\n                            "
                                    ),
                                    _c("v-icon", [_vm._v("mdi-chevron-down")])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-list",
                          _vm._l(_vm.itemsPerPageArray, function(
                            number,
                            index
                          ) {
                            return _c(
                              "v-list-item",
                              {
                                key: index,
                                on: {
                                  click: function($event) {
                                    return _vm.updateItemsPerPage(number)
                                  }
                                }
                              },
                              [
                                _c("v-list-item-title", [
                                  _vm._v(_vm._s(number))
                                ])
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "mr-4\n            grey--text" },
                      [
                        _vm._v(
                          "\n                    Page " +
                            _vm._s(_vm.page) +
                            " of " +
                            _vm._s(_vm.numberOfPages) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-1",
                        attrs: { fab: "", dark: "", color: "blue darken-3" },
                        on: { click: _vm.formerPage }
                      },
                      [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "ml-1",
                        attrs: { fab: "", dark: "", color: "blue darken-3" },
                        on: { click: _vm.nextPage }
                      },
                      [_c("v-icon", [_vm._v("mdi-chevron-right")])],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "box-title", staticStyle: { margin: "30px 0" } },
      [_c("h3", [_c("span", [_vm._v("Featured items")])])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=template&id=084ea04a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/New.vue?vue&type=template&id=084ea04a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("v-data-iterator", {
        attrs: {
          items: _vm.products.newproduct.data,
          "items-per-page": _vm.itemsPerPage,
          page: _vm.page,
          search: _vm.search,
          "sort-by": _vm.sortBy.toLowerCase(),
          "sort-desc": _vm.sortDesc,
          "hide-default-footer": ""
        },
        on: {
          "update:itemsPerPage": function($event) {
            _vm.itemsPerPage = $event
          },
          "update:items-per-page": function($event) {
            _vm.itemsPerPage = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c(
                  "v-row",
                  _vm._l(props.items, function(item) {
                    return _c(
                      "v-col",
                      {
                        key: item.product_name,
                        attrs: { cols: "12", sm: "6", md: "4", lg: "3" }
                      },
                      [
                        _c("v-hover", {
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var hover = ref.hover
                                  return [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          color: "grey lighten-4",
                                          "max-width": "800"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-img",
                                          {
                                            attrs: {
                                              "aspect-ratio": 16 / 9,
                                              src: item.image,
                                              height: "300px"
                                            }
                                          },
                                          [
                                            _c("v-expand-transition", [
                                              hover
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text",
                                                      staticStyle: {
                                                        height: "100%"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.product_view(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "visibility"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v("Quick view")
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "favorite"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "add to wish list"
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { bottom: "" },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "activator",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var on =
                                                                    ref.on
                                                                  return [
                                                                    _c(
                                                                      "v-btn",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addToCart(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "shopping_cart"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "add to cart"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          {
                                            staticClass: "pt-6",
                                            staticStyle: {
                                              position: "relative"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-light grey--text title mb-2",
                                                staticStyle: {
                                                  cursor: "pointer"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.Productdetails(
                                                      item.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item.product_name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-light title mb-2"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(item.price) +
                                                    "\n                                "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        })
                      ],
                      1
                    )
                  }),
                  1
                )
              ]
            }
          },
          {
            key: "footer",
            fn: function() {
              return [
                _c(
                  "v-row",
                  {
                    staticClass: "mt-2",
                    attrs: { align: "center", justify: "center" }
                  },
                  [
                    _c("span", { staticClass: "grey--text" }, [
                      _vm._v("Items per page")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-menu",
                      {
                        attrs: { "offset-y": "" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "ml-2",
                                      attrs: {
                                        dark: "",
                                        text: "",
                                        color: "primary"
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.itemsPerPage) +
                                        "\n                            "
                                    ),
                                    _c("v-icon", [_vm._v("mdi-chevron-down")])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-list",
                          _vm._l(_vm.itemsPerPageArray, function(
                            number,
                            index
                          ) {
                            return _c(
                              "v-list-item",
                              {
                                key: index,
                                on: {
                                  click: function($event) {
                                    return _vm.updateItemsPerPage(number)
                                  }
                                }
                              },
                              [
                                _c("v-list-item-title", [
                                  _vm._v(_vm._s(number))
                                ])
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "mr-4\n            grey--text" },
                      [
                        _vm._v(
                          "\n                    Page " +
                            _vm._s(_vm.page) +
                            " of " +
                            _vm._s(_vm.numberOfPages) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-1",
                        attrs: { fab: "", dark: "", color: "blue darken-3" },
                        on: { click: _vm.formerPage }
                      },
                      [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "ml-1",
                        attrs: { fab: "", dark: "", color: "blue darken-3" },
                        on: { click: _vm.nextPage }
                      },
                      [_c("v-icon", [_vm._v("mdi-chevron-right")])],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "box-title", staticStyle: { margin: "30px 0" } },
      [_c("h3", [_c("span", [_vm._v("New items")])])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=template&id=d969d8b8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/category.vue?vue&type=template&id=d969d8b8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", wrap: "" } },
    [
      _c("VFlex", { attrs: { sm2: "" } }, [
        _c("img", { attrs: { src: "/banners/banner-left2.jpg" } }),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("div", { staticClass: "box-title" }, [
              _c("h3", [_c("span", [_vm._v("On sale")])])
            ]),
            _vm._v(" "),
            _vm._l(_vm.onSale.data, function(sale) {
              return _c(
                "VLayout",
                {
                  key: sale.id,
                  staticStyle: { "margin-top": "30px", background: "#fff" },
                  attrs: { row: "", wrap: "" }
                },
                [
                  _c(
                    "v-flex",
                    {
                      staticStyle: { "text-align": "right" },
                      attrs: { sm7: "" }
                    },
                    [
                      _c("el-rate", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.value,
                          callback: function($$v) {
                            _vm.value = $$v
                          },
                          expression: "value"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", [_vm._v(" " + _vm._s(sale.price) + " ")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(" " + _vm._s(sale.product_name) + " ")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-flex", { attrs: { sm4: "", "offset-sm1": "" } }, [
                    _c("img", {
                      staticStyle: { width: "80px", height: "80px" },
                      attrs: { src: sale.image }
                    })
                  ]),
                  _vm._v(" "),
                  _c("v-flex", { attrs: { sm12: "" } }, [_c("VDivider")], 1)
                ],
                1
              )
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "VFlex",
        { staticStyle: { "margin-left": "20px" }, attrs: { sm9: "" } },
        [
          _c(
            "el-tabs",
            {
              on: { input: _vm.handleClick },
              model: {
                value: _vm.selected_name,
                callback: function($$v) {
                  _vm.selected_name = $$v
                },
                expression: "selected_name"
              }
            },
            _vm._l(_vm.categories.data, function(item) {
              return _c(
                "el-tab-pane",
                {
                  key: item.id,
                  attrs: { label: item.category, name: item.category }
                },
                [
                  _c(
                    "v-row",
                    _vm._l(_vm.category_products.data, function(
                      product,
                      index
                    ) {
                      return _c(
                        "v-col",
                        {
                          key: product.id,
                          attrs: { cols: "12", sm: "6", md: "3", lg: "3" }
                        },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var hover = ref.hover
                                    return [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: { color: "grey lighten-4" }
                                        },
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              attrs: {
                                                "aspect-ratio": 16 / 9,
                                                src: product.image,
                                                height: "300px"
                                              }
                                            },
                                            [
                                              _c("v-expand-transition", [
                                                hover
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text",
                                                        staticStyle: {
                                                          height: "100%"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-tooltip",
                                                          {
                                                            attrs: {
                                                              bottom: ""
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key:
                                                                    "activator",
                                                                  fn: function(
                                                                    ref
                                                                  ) {
                                                                    var on =
                                                                      ref.on
                                                                    return [
                                                                      _c(
                                                                        "v-btn",
                                                                        _vm._g(
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.product_view(
                                                                                  item
                                                                                    .products[
                                                                                    index
                                                                                  ]
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          on
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            {
                                                                              attrs: {
                                                                                color:
                                                                                  "primary"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "visibility"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ]
                                                                  }
                                                                }
                                                              ],
                                                              null,
                                                              true
                                                            )
                                                          },
                                                          [
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                "Quick view"
                                                              )
                                                            ])
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-tooltip",
                                                          {
                                                            attrs: {
                                                              bottom: ""
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key:
                                                                    "activator",
                                                                  fn: function(
                                                                    ref
                                                                  ) {
                                                                    var on =
                                                                      ref.on
                                                                    return [
                                                                      _c(
                                                                        "v-btn",
                                                                        _vm._g(
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                ""
                                                                            }
                                                                          },
                                                                          on
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            {
                                                                              attrs: {
                                                                                color:
                                                                                  "primary"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "favorite"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ]
                                                                  }
                                                                }
                                                              ],
                                                              null,
                                                              true
                                                            )
                                                          },
                                                          [
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                "add to wish list"
                                                              )
                                                            ])
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-tooltip",
                                                          {
                                                            attrs: {
                                                              bottom: ""
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key:
                                                                    "activator",
                                                                  fn: function(
                                                                    ref
                                                                  ) {
                                                                    var on =
                                                                      ref.on
                                                                    return [
                                                                      _c(
                                                                        "v-btn",
                                                                        _vm._g(
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.addToCart(
                                                                                  item
                                                                                    .products[
                                                                                    index
                                                                                  ]
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          on
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            {
                                                                              attrs: {
                                                                                color:
                                                                                  "primary"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "shopping_cart"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ]
                                                                  }
                                                                }
                                                              ],
                                                              null,
                                                              true
                                                            )
                                                          },
                                                          [
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                "add to cart"
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-text",
                                            {
                                              staticClass: "pt-6",
                                              staticStyle: {
                                                position: "relative"
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "font-weight-light grey--text title mb-2",
                                                  staticStyle: {
                                                    cursor: "pointer"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.Productdetails(
                                                        product.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(product.product_name)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "font-weight-light title mb-2"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        " +
                                                      _vm._s(product.price) +
                                                      "\n                                    "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/index.vue?vue&type=template&id=2beb4bc8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/products/index.vue?vue&type=template&id=2beb4bc8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("img", {
      staticStyle: { margin: "20px 0", width: "100vw" },
      attrs: { src: "/banners/banner1.jpg" }
    }),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("myCategory", { staticStyle: { padding: "0 30px" } }),
        _vm._v(" "),
        _c("myVariants", { staticStyle: { padding: "0 30px" } }),
        _vm._v(" "),
        _c("myFeatured", { staticStyle: { padding: "0 30px" } }),
        _vm._v(" "),
        _c("mySlide", { staticStyle: { padding: "0 30px" } }),
        _vm._v(" "),
        _c("myNew"),
        _vm._v(" "),
        _c("img", {
          staticStyle: { margin: "20px 0", width: "100vw" },
          attrs: { src: "/banners/banner-02.jpg" }
        }),
        _vm._v(" "),
        _c("myBest", { staticStyle: { padding: "0 30px" } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/home/Carousel.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/home/Carousel.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_32724075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=32724075& */ "./resources/js/components/home/Carousel.vue?vue&type=template&id=32724075&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/components/home/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_32724075___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_32724075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/Carousel.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/home/Carousel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/Carousel.vue?vue&type=template&id=32724075&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/home/Carousel.vue?vue&type=template&id=32724075& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_32724075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=32724075& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Carousel.vue?vue&type=template&id=32724075&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_32724075___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_32724075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/Home.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/home/Home.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_1f26c2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=1f26c2f4&scoped=true& */ "./resources/js/components/home/Home.vue?vue&type=template&id=1f26c2f4&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_1f26c2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_1f26c2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f26c2f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/home/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/Home.vue?vue&type=template&id=1f26c2f4&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/home/Home.vue?vue&type=template&id=1f26c2f4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1f26c2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=1f26c2f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Home.vue?vue&type=template&id=1f26c2f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1f26c2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1f26c2f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/Menu.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/home/Menu.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_1824a374_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=1824a374&scoped=true& */ "./resources/js/components/home/Menu.vue?vue&type=template&id=1824a374&scoped=true&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/components/home/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Menu_vue_vue_type_style_index_0_id_1824a374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css& */ "./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_1824a374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_1824a374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1824a374",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/Menu.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/home/Menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_1824a374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=style&index=0&id=1824a374&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_1824a374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_1824a374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_1824a374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_1824a374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_1824a374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/Menu.vue?vue&type=template&id=1824a374&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/home/Menu.vue?vue&type=template&id=1824a374&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_1824a374_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=1824a374&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Menu.vue?vue&type=template&id=1824a374&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_1824a374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_1824a374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/products/Best.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/home/products/Best.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Best_vue_vue_type_template_id_1fdda4aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Best.vue?vue&type=template&id=1fdda4aa&scoped=true& */ "./resources/js/components/home/products/Best.vue?vue&type=template&id=1fdda4aa&scoped=true&");
/* harmony import */ var _Best_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Best.vue?vue&type=script&lang=js& */ "./resources/js/components/home/products/Best.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Best_vue_vue_type_style_index_0_id_1fdda4aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css& */ "./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Best_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Best_vue_vue_type_template_id_1fdda4aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Best_vue_vue_type_template_id_1fdda4aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1fdda4aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/products/Best.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/products/Best.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/home/products/Best.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Best.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_style_index_0_id_1fdda4aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=style&index=0&id=1fdda4aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_style_index_0_id_1fdda4aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_style_index_0_id_1fdda4aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_style_index_0_id_1fdda4aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_style_index_0_id_1fdda4aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_style_index_0_id_1fdda4aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/products/Best.vue?vue&type=template&id=1fdda4aa&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/home/products/Best.vue?vue&type=template&id=1fdda4aa&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_template_id_1fdda4aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Best.vue?vue&type=template&id=1fdda4aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Best.vue?vue&type=template&id=1fdda4aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_template_id_1fdda4aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Best_vue_vue_type_template_id_1fdda4aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/products/Featured.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/home/products/Featured.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Featured_vue_vue_type_template_id_680d1218_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Featured.vue?vue&type=template&id=680d1218&scoped=true& */ "./resources/js/components/home/products/Featured.vue?vue&type=template&id=680d1218&scoped=true&");
/* harmony import */ var _Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Featured.vue?vue&type=script&lang=js& */ "./resources/js/components/home/products/Featured.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Featured_vue_vue_type_style_index_0_id_680d1218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css& */ "./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Featured_vue_vue_type_template_id_680d1218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Featured_vue_vue_type_template_id_680d1218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "680d1218",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/products/Featured.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/products/Featured.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/home/products/Featured.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_680d1218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=style&index=0&id=680d1218&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_680d1218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_680d1218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_680d1218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_680d1218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_style_index_0_id_680d1218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/products/Featured.vue?vue&type=template&id=680d1218&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/home/products/Featured.vue?vue&type=template&id=680d1218&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_680d1218_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured.vue?vue&type=template&id=680d1218&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/Featured.vue?vue&type=template&id=680d1218&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_680d1218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_vue_vue_type_template_id_680d1218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/products/New.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/home/products/New.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_084ea04a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=084ea04a&scoped=true& */ "./resources/js/components/home/products/New.vue?vue&type=template&id=084ea04a&scoped=true&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/components/home/products/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _New_vue_vue_type_style_index_0_id_084ea04a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css& */ "./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_084ea04a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_084ea04a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "084ea04a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/products/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/products/New.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/home/products/New.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_id_084ea04a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=style&index=0&id=084ea04a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_id_084ea04a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_id_084ea04a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_id_084ea04a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_id_084ea04a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_id_084ea04a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/products/New.vue?vue&type=template&id=084ea04a&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/home/products/New.vue?vue&type=template&id=084ea04a&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_084ea04a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=084ea04a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/New.vue?vue&type=template&id=084ea04a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_084ea04a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_084ea04a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/products/category.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/home/products/category.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_d969d8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=d969d8b8&scoped=true& */ "./resources/js/components/home/products/category.vue?vue&type=template&id=d969d8b8&scoped=true&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/components/home/products/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _category_vue_vue_type_style_index_0_id_d969d8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css& */ "./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_d969d8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_d969d8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d969d8b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/products/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/products/category.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/home/products/category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_d969d8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=style&index=0&id=d969d8b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_d969d8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_d969d8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_d969d8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_d969d8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_d969d8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/products/category.vue?vue&type=template&id=d969d8b8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/home/products/category.vue?vue&type=template&id=d969d8b8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_d969d8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=d969d8b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/category.vue?vue&type=template&id=d969d8b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_d969d8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_d969d8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/products/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/home/products/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2beb4bc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2beb4bc8& */ "./resources/js/components/home/products/index.vue?vue&type=template&id=2beb4bc8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/home/products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2beb4bc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2beb4bc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/products/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/products/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/home/products/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/products/index.vue?vue&type=template&id=2beb4bc8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/home/products/index.vue?vue&type=template&id=2beb4bc8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2beb4bc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2beb4bc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/products/index.vue?vue&type=template&id=2beb4bc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2beb4bc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2beb4bc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
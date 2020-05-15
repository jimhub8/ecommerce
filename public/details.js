(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/Details.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _include_Headerpartial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../include/Headerpartial */ "./resources/js/components/include/Headerpartial.vue");
/* harmony import */ var _reviews_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reviews/Review */ "./resources/js/components/reviews/Review.vue");
/* harmony import */ var _home_Show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/Show */ "./resources/js/components/home/Show.vue");
/* harmony import */ var _details_related__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/related */ "./resources/js/components/Shop/details/related.vue");
/* harmony import */ var _home_products_variants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/products/variants */ "./resources/js/components/home/products/variants.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    headerP: _include_Headerpartial__WEBPACK_IMPORTED_MODULE_0__["default"],
    Show: _home_Show__WEBPACK_IMPORTED_MODULE_2__["default"],
    Review: _reviews_Review__WEBPACK_IMPORTED_MODULE_1__["default"],
    relatedProducts: _details_related__WEBPACK_IMPORTED_MODULE_3__["default"],
    myVariants: _home_products_variants__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      form: {
        quantity: 1
      },
      proId: this.$route.params.id,
      showError: false,
      error_msg: "",
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      selectedCard: -1,
      reviews: [],
      sizes: [],
      avgRating: null,
      originalImage: ""
    };
  },
  methods: {
    redirect: function redirect(proId) {
      // this.proId = this.$route.params.id
      this.$router.push({
        name: "details",
        params: {
          id: proId
        }
      });
      this.getProduct();
    },
    addToCart: function addToCart() {
      var cart = this.products;

      if (cart.product_variants.length > 0) {
        eventBus.$emit('selectVariantsEvent', cart); // this.select_variants()

        return;
      }

      cart.order_qty = this.form.quantity;
      eventBus.$emit("addCartEvent", cart);
    },
    // addToCart() {
    //     eventBus.$emit("progressEvent");
    //     axios
    //         .post(`/cartAdd/${this.proId}`, this.$data.form)
    //         .then(response => {
    //             this.loading = false;
    //             eventBus.$emit("StoprogEvent");
    //             if (response.data.errors) {
    //                 eventBus.$emit("errorRequest", response.data.errors);
    //                 return (this.err_ms = response.data.errors);
    //             } else {
    //                 eventBus.$emit("StoprogEvent");
    //                 eventBus.$emit("alertRequest", "Cart Added");
    //                 eventBus.$emit("cartEvent", response.data);
    //             }
    //             // this.close();
    //             // this.resetForm();
    //             // this.$parent.brands.push(response.data)
    //         })
    //         .catch(error => {
    //             this.loading = false;
    //             this.errors = error.response.data.errors;
    //         });
    //     // }
    // },
    hoverCard: function hoverCard(selectedIndex) {
      this.selectedCard = selectedIndex; // this.animateCards()
    },
    isSelected: function isSelected(cardIndex) {
      return this.selectedCard === cardIndex;
    },
    view: function view(product) {
      eventBus.$emit("viewProEvent", product);
    },
    // addToCart(cart) {
    //   eventBus.$emit("addCartEvent", cart);
    // },
    wishList: function wishList(item) {
      eventBus.$emit("WishListEvent", item);
    },
    getProduct: function getProduct() {
      var payload = {
        model: 'products',
        update: 'updateProductsList',
        id: this.$route.params.id
      };
      this.$store.dispatch('showItem', payload);
    },
    getRelated: function getRelated() {
      var payload = {
        model: 'related',
        update: 'updateRelatedList',
        id: this.$route.params.id
      };
      this.$store.dispatch('showItem', payload);
    },
    getReviews: function getReviews() {
      var payload = {
        model: 'reviews',
        update_list: 'updateReviewsList'
      };
      this.$store.dispatch('getItems', payload);
    },
    getAvgReviews: function getAvgReviews() {
      var payload = {
        model: 'ratings',
        update: 'updatAvgReviewsList',
        id: this.proId
      };
      this.$store.dispatch('showItem', payload);
    },
    next: function next(page) {
      var _this = this;

      eventBus.$emit("progressEvent");
      axios.get(this.reviews.path + "?page=" + this.reviews.current_page).then(function (response) {
        eventBus.$emit("StoprogEvent");
        _this.reviews = response.data;
      })["catch"](function (error) {
        eventBus.$emit("StoprogEvent");
        _this.errors = error.response.data.errors;
      });
    },
    getCategory: function getCategory(id) {
      var payload = {
        model: 'categories',
        update: 'updateCategoryList',
        id: id
      };
      this.$store.dispatch('showItem', payload);
    },
    imageUrlAlt: function imageUrlAlt(e) {
      event.target.src = "/assets/notfound/notfound.jpg";
    },
    priceChange: function priceChange(data) {
      var _this2 = this;

      eventBus.$emit("progressEvent");
      axios.get("product_attribute/".concat(data)).then(function (response) {
        eventBus.$emit("StoprogEvent");
        _this2.products.price = response.data.price;
      })["catch"](function (error) {
        eventBus.$emit("StoprogEvent");
        _this2.errors = error.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    this.getProduct();
    eventBus.$emit("ScollEvent");
    this.getRelated(); // this.getReviews();
    // this.getAvgReviews();
  },
  created: function created() {
    var _this3 = this;

    eventBus.$on("ReviewRequest", function (data) {
      _this3.getReviews();

      _this3.getAvgReviews();
    });
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    },
    products: function products() {
      return this.$store.getters.products;
    }
  } // beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //         eventBus.$emit('ScollTopEvent')
  //     })
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/details/related.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
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
      return Math.ceil(this.related.data.length / this.itemsPerPage);
    },
    related: function related() {
      return this.$store.getters.related;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews/Review.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews/Review.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["pid", 'product'],
  data: function data() {
    return {
      review: {
        rating: 0,
        comments: ""
      },
      loading: false,
      dialog: false
    };
  },
  methods: {
    rate: function rate() {
      var _this = this;

      this.loading = true;
      axios.post("/rate/".concat(this.pid), this.review).then(function (response) {
        _this.loading = false; // console.log(response);

        _this.close(); // this.resetForm();


        eventBus.$emit("ReviewRequest");
        eventBus.$emit("alertRequest", "Thanks for rating this product"); // this.$parent.brands.push(response.data)
      })["catch"](function (error) {
        _this.loading = false;
        _this.errors = error.response.data.errors;
      });
    },
    openDialog: function openDialog() {
      this.dialog = true;
    },
    close: function close() {
      this.dialog = false;
    }
  },
  mounted: function mounted() {// axios.get('/categories')
    //     .then((response) => {
    //         this.loader = false
    //         this.categories = response.data
    //     })
    //     .catch((error) => {
    //         this.loader = false
    //         this.errors = error.response.data.errors
    //     })
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wrap-pic-w img[data-v-4658d918] {\n    height: 300px;\n}\n.slick3-dots li[data-v-4658d918] {\n    display: none !important;\n}\n.w-100[data-v-4658d918] {\n    height: 230px;\n    transition: height 0.3s, opacity 0.3s;\n}\n.w-100.selected[data-v-4658d918] {\n    transition: height 0.6s, opacity 0.6s;\n    /* zoom: 1.2; */\n    opacity: 0.8;\n}\n.caption[data-v-4658d918] {\n    display: none;\n}\n.caption.selected[data-v-4658d918] {\n    transition: height 0.6s, opacity 0.6s;\n    display: block;\n}\n#container[data-v-4658d918] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n#container.after[data-v-4658d918] {\n    position: absolute;\n    color: #000;\n    display: none;\n}\n#container:hover.after[data-v-4658d918] {\n    display: block;\n    background: rgba(0, 0, 0, 6);\n}\n.image-container[data-v-4658d918] {\n    position: relative;\n    height: 230px;\n    width: 100%;\n}\n.image-container .after[data-v-4658d918] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 230px;\n    width: 100%;\n    display: none;\n    color: #fff;\n}\n.image-container:hover .after[data-v-4658d918] {\n    display: block;\n    background: rgba(0, 0, 0, 0.6);\n}\n#tooltip .v-btn[data-v-4658d918] {\n    background: rgba(240, 240, 240, 0.26);\n}\n#tooltip .v-btn[data-v-4658d918]:hover {\n    background: rgba(0, 0, 0, 0.24);\n}\n.v-btn .v-btn__content .v-icon[data-v-4658d918] {\n    box-shadow: 0 9px 30px -6px rgba(255, 54, 54, 0.5);\n}\n.theme--light.v-data-iterator .v-data-iterator__actions[data-v-4658d918] {\n    margin-top: 0 !important;\n}\nul[data-v-4658d918],\nli[data-v-4658d918] {\n    margin: 0px;\n    /* list-style-type: none; */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-0ddc1ab0] {\n    align-items: center;\n    bottom: 0;\n    justify-content: center;\n    opacity: .5;\n    position: absolute;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=template&id=4658d918&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/Details.vue?vue&type=template&id=4658d918&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("headerP"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container bgwhite p-t-35 p-b-80" },
        [
          _c("div", { staticClass: "flex-w flex-sb" }, [
            _c("div", { staticClass: "w-size13 p-t-30 respon5" }, [
              _c("div", { staticClass: "wrap-slick3 flex-sb flex-w" }, [
                _c(
                  "div",
                  { staticClass: "wrap-slick3-dots" },
                  [
                    _vm._l(_vm.products.images, function(image) {
                      return _c(
                        "div",
                        { key: image.id, staticClass: "wrap-pic-w" },
                        [
                          _c("img", {
                            staticStyle: {
                              height: "100px",
                              "margin-bottom": "10px"
                            },
                            attrs: { src: image.image, alt: image.mimetype },
                            on: {
                              click: function($event) {
                                _vm.products.image = image.image
                              },
                              error: _vm.imageUrlAlt
                            }
                          })
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("img", {
                      staticStyle: { height: "100px", "margin-bottom": "10px" },
                      attrs: { src: _vm.originalImage },
                      on: {
                        click: function($event) {
                          _vm.products.image = _vm.originalImage
                        },
                        error: _vm.imageUrlAlt
                      }
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "slick3" }, [
                  _c("div", { staticClass: "item-slick3" }, [
                    _c("div", { staticClass: "wrap-pic-w" }, [
                      _c("img", {
                        attrs: {
                          src: _vm.products.image,
                          alt: _vm.products.product_name
                        },
                        on: { error: _vm.imageUrlAlt }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-xs-center" },
                        [
                          _c("v-rating", {
                            attrs: { readonly: "", "half-increments": "" },
                            model: {
                              value: _vm.avgRating,
                              callback: function($$v) {
                                _vm.avgRating = $$v
                              },
                              expression: "avgRating"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-size14 p-t-30 respon5" }, [
              _c("h4", { staticClass: "product-detail-name m-text16 p-b-13" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.products.product_name) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "m-text17" }, [
                _vm._v(
                  "\n                    Price: " +
                    _vm._s(_vm.products.price) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Available: " + _vm._s(_vm.products.quantity))]),
              _vm._v(" "),
              _c("div", {
                domProps: { innerHTML: _vm._s(_vm.products.description) }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "p-t-33 p-b-60" }, [
                _c("div", { staticClass: "flex-r-m flex-w p-t-10" }, [
                  _c("div", { staticClass: "w-size16 flex-m flex-w" }, [
                    _c(
                      "div",
                      {
                        staticClass: "flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.quantity,
                              expression: "form.quantity"
                            }
                          ],
                          staticClass: "size8 m-text18 t-center num-product",
                          attrs: {
                            type: "number",
                            min: "1",
                            name: "num-product",
                            value: "1"
                          },
                          domProps: { value: _vm.form.quantity },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "quantity",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4",
                            on: { click: _vm.addToCart }
                          },
                          [_vm._v("Add to Cart")]
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "p-b-45" }, [
                _c("span", { staticClass: "s-text8" }, [
                  _vm._v("Categories: " + _vm._s(_vm.categories.name))
                ])
              ]),
              _vm._v(" "),
              _c("div", {
                domProps: { innerHTML: _vm._s(_vm.products.details) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("Review", {
            attrs: { product: _vm.products, pid: _vm.products.id }
          }),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.getProduct } }, [_vm._v("Review")]),
          _vm._v(" "),
          _c(
            "v-expansion-panel",
            [
              _c(
                "v-expansion-panel-content",
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _vm._v("Reviews")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    _vm._l(_vm.reviews.data, function(review) {
                      return _c(
                        "v-card-text",
                        { key: review.id },
                        [
                          _c("img", {
                            staticStyle: {
                              width: "50px",
                              height: "50px",
                              "border-radius": "50%",
                              "text-align": "center"
                            },
                            attrs: { src: review.profile, alt: "" },
                            on: { error: _vm.imageUrlAlt }
                          }),
                          _vm._v(" "),
                          _c("h2", [_vm._v(_vm._s(review.user_name))]),
                          _vm._v(" "),
                          _c("small", [_vm._v(_vm._s(review.comments))]),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("v-rating", {
                                attrs: {
                                  readonly: "",
                                  small: "",
                                  "half-increments": ""
                                },
                                model: {
                                  value: review.rating,
                                  callback: function($$v) {
                                    _vm.$set(review, "rating", $$v)
                                  },
                                  expression: "review.rating"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider")
                        ],
                        1
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _vm.reviews.last_page > 1
                    ? _c(
                        "div",
                        {
                          staticClass: "text-xs-center",
                          staticStyle: { margin: "auto", width: "100%" }
                        },
                        [
                          _c("v-pagination", {
                            attrs: {
                              length: _vm.reviews.last_page,
                              "total-visible": "5",
                              circle: ""
                            },
                            on: {
                              input: function($event) {
                                return _vm.next(
                                  _vm.reviews.path,
                                  _vm.reviews.current_page
                                )
                              }
                            },
                            model: {
                              value: _vm.reviews.current_page,
                              callback: function($$v) {
                                _vm.$set(_vm.reviews, "current_page", $$v)
                              },
                              expression: "reviews.current_page"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("section", { staticClass: "relateproduct bgwhite p-t-45 p-b-138" }, [
        _c("div", { staticClass: "container" }, [_c("relatedProducts")], 1)
      ]),
      _vm._v(" "),
      _c("Show"),
      _vm._v(" "),
      _c("myVariants")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=template&id=0ddc1ab0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/details/related.vue?vue&type=template&id=0ddc1ab0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("v-data-iterator", {
        attrs: {
          items: _vm.related.data,
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
            key: "header",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  {
                    staticClass: "mb-1",
                    attrs: { dark: "", color: "blue darken-3" }
                  },
                  [_vm._v("\n                Related Products\n            ")]
                )
              ]
            },
            proxy: true
          },
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
                                                  "font-weight-light grey--text title mb-2"
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews/Review.vue?vue&type=template&id=95da3612&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews/Review.vue?vue&type=template&id=95da3612& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { attrs: { row: "", "justify-center": "" } },
    [
      _c(
        "v-btn",
        { attrs: { text: "", color: "orange" }, on: { click: _vm.openDialog } },
        [_vm._v("Rate the product")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            { staticClass: "elevation-16 mx-auto" },
            [
              _c(
                "v-card-title",
                { attrs: { fixed: "" } },
                [
                  _c(
                    "h5",
                    {
                      staticClass: "t-center",
                      staticStyle: { color: "#000", "text-transform": "none" }
                    },
                    [
                      _vm._v("\n                    Rate "),
                      _c(
                        "span",
                        { staticStyle: { color: "rgba(2, 234, 0, 0.58)" } },
                        [_vm._v(_vm._s(_vm.product.name))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "", dark: "" }, on: { click: _vm.close } },
                    [
                      _c("v-icon", { attrs: { color: "black" } }, [
                        _vm._v("close")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _vm._v(
                    "\n                If you enjoy using " +
                      _vm._s(_vm.product.name) +
                      ", please take a few seconds to rate your experience with the product. It really helps!\n\n                "
                  ),
                  _c(
                    "div",
                    { staticClass: "text-xs-center mt-5" },
                    [
                      _c("v-rating", {
                        attrs: {
                          color: "yellow darken-3",
                          "background-color": "grey darken-1",
                          "empty-icon": "$vuetify.icons.ratingFull",
                          "half-increments": "",
                          hover: ""
                        },
                        model: {
                          value: _vm.review.rating,
                          callback: function($$v) {
                            _vm.$set(_vm.review, "rating", $$v)
                          },
                          expression: "review.rating"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm12: "" } },
                    [
                      _c(
                        "v-textarea",
                        {
                          attrs: { color: "blue" },
                          model: {
                            value: _vm.review.comments,
                            callback: function($$v) {
                              _vm.$set(_vm.review, "comments", $$v)
                            },
                            expression: "review.comments"
                          }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "label" }, slot: "label" },
                            [
                              _vm._v(
                                "\n                            Your Review "
                              ),
                              _c("small", [_vm._v("(optional)")])
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "justify-space-between" },
                [
                  _c(
                    "v-btn",
                    { attrs: { text: "" }, on: { click: _vm.close } },
                    [_vm._v("No Thanks")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary",
                        text: "",
                        loading: _vm.loading
                      },
                      on: { click: _vm.rate }
                    },
                    [_vm._v("\n                    Rate Now\n                ")]
                  )
                ],
                1
              )
            ],
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

/***/ "./resources/js/components/Shop/Details.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Shop/Details.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_4658d918_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=4658d918&scoped=true& */ "./resources/js/components/Shop/Details.vue?vue&type=template&id=4658d918&scoped=true&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Details_vue_vue_type_style_index_0_id_4658d918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css& */ "./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_4658d918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_4658d918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4658d918",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/Details.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Shop/Details.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_4658d918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=style&index=0&id=4658d918&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_4658d918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_4658d918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_4658d918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_4658d918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_4658d918_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Shop/Details.vue?vue&type=template&id=4658d918&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Shop/Details.vue?vue&type=template&id=4658d918&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_4658d918_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=4658d918&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Details.vue?vue&type=template&id=4658d918&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_4658d918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_4658d918_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Shop/details/related.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Shop/details/related.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _related_vue_vue_type_template_id_0ddc1ab0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./related.vue?vue&type=template&id=0ddc1ab0&scoped=true& */ "./resources/js/components/Shop/details/related.vue?vue&type=template&id=0ddc1ab0&scoped=true&");
/* harmony import */ var _related_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./related.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop/details/related.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _related_vue_vue_type_style_index_0_id_0ddc1ab0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css& */ "./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _related_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _related_vue_vue_type_template_id_0ddc1ab0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _related_vue_vue_type_template_id_0ddc1ab0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ddc1ab0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/details/related.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/details/related.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Shop/details/related.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./related.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_style_index_0_id_0ddc1ab0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=style&index=0&id=0ddc1ab0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_style_index_0_id_0ddc1ab0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_style_index_0_id_0ddc1ab0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_style_index_0_id_0ddc1ab0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_style_index_0_id_0ddc1ab0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_style_index_0_id_0ddc1ab0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Shop/details/related.vue?vue&type=template&id=0ddc1ab0&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Shop/details/related.vue?vue&type=template&id=0ddc1ab0&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_template_id_0ddc1ab0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./related.vue?vue&type=template&id=0ddc1ab0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/details/related.vue?vue&type=template&id=0ddc1ab0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_template_id_0ddc1ab0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_related_vue_vue_type_template_id_0ddc1ab0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/reviews/Review.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/reviews/Review.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Review_vue_vue_type_template_id_95da3612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Review.vue?vue&type=template&id=95da3612& */ "./resources/js/components/reviews/Review.vue?vue&type=template&id=95da3612&");
/* harmony import */ var _Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review.vue?vue&type=script&lang=js& */ "./resources/js/components/reviews/Review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Review_vue_vue_type_template_id_95da3612___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Review_vue_vue_type_template_id_95da3612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reviews/Review.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reviews/Review.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/reviews/Review.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Review.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews/Review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reviews/Review.vue?vue&type=template&id=95da3612&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/reviews/Review.vue?vue&type=template&id=95da3612& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_95da3612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Review.vue?vue&type=template&id=95da3612& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews/Review.vue?vue&type=template&id=95da3612&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_95da3612___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_95da3612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
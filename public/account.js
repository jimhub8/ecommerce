(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Billingddress.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/content/Billingddress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      address: {},
      errors: {},
      form: {},
      loading: false
    };
  },
  methods: {
    setPlace: function setPlace(place) {
      this.form.address = place;
    },
    save: function save(data) {
      if (data == 'exists') {
        var payload = {
          model: 'billing',
          id: this.user.id,
          data: this.user
        };
      } else {
        var payload = {
          model: 'billing',
          id: this.user.id,
          data: this.form
        };
      }

      this.$store.dispatch('patchItems', payload);
    },
    mounted: function mounted() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Shippingaddress.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/content/Shippingaddress.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      address: {},
      errors: {},
      form: {},
      loading: false
    };
  },
  methods: {
    setPlace: function setPlace(place) {
      this.form.address = place;
    },
    save: function save(data) {
      if (data == 'exists') {
        var payload = {
          model: 'shipping',
          id: this.user.id,
          data: this.user
        };
      } else {
        var payload = {
          model: 'shipping',
          id: this.user.id,
          data: this.form
        };
      }

      this.$store.dispatch('patchItems', payload);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/address.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/content/address.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Billingddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Billingddress */ "./resources/js/components/account/content/Billingddress.vue");
/* harmony import */ var _Shippingaddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shippingaddress */ "./resources/js/components/account/content/Shippingaddress.vue");
//
//
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
    myShipping: _Shippingaddress__WEBPACK_IMPORTED_MODULE_1__["default"],
    myBilling: _Billingddress__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['user'],
  data: function data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick: function handleClick(tab, event) {
      console.log(tab, event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/address */ "./resources/js/components/account/content/address.vue");
/* harmony import */ var _orders_Orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders/Orders */ "./resources/js/components/orders/Orders.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['user'],
  components: {
    myAddress: _content_address__WEBPACK_IMPORTED_MODULE_0__["default"],
    myOrders: _orders_Orders__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      address: true,
      account: true,
      drawer: true,
      items: [{
        title: 'Account',
        icon: 'dashboard'
      }, {
        title: 'Address',
        icon: 'question_answer'
      }],
      right: null,
      tabPosition: 'top'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Orders.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/Orders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./resources/js/components/orders/View.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    myView: _View__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      headers: [{
        text: "Created On",
        value: "created_at"
      }, {
        text: "Order No.",
        value: "order_no"
      }, {
        text: "Client address",
        value: "user.billing.street_address"
      }, {
        text: "Total",
        value: "sub_total"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }]
    };
  },
  methods: {
    view: function view(order) {
      console.log(order);
      eventBus.$emit("viewOrdEvent", order);
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      if (confirm('Are you sure you want to delete this item?')) {
        axios["delete"]("/orders/".concat(item.id)).then(function (response) {
          eventBus.$emit("alertRequest", 'Successifully deleted');

          _this.orders.splice(index, 1);
        })["catch"](function (error) {
          if (error.response.status === 500) {
            eventBus.$emit('errorEvent', error.response.statusText);
            return;
          }

          _this.errors = error.response.data.errors;
        });
      }
    },
    getOrders: function getOrders() {
      var payload = {
        model: 'sales',
        update_list: 'updateSaleList'
      };
      this.$store.dispatch('getItems', payload);
    }
  },
  computed: {
    sales: function sales() {
      return this.$store.getters.sales;
    },
    loading: function loading() {
      return this.$store.getters.loading;
    }
  },
  mounted: function mounted() {
    this.getOrders();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/View.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/View.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      loading: false,
      form: {},
      payload: {
        model: '/leaves'
      }
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on("viewOrdEvent", function (data) {
      _this.dialog = true;
      _this.form = data;

      _this.getOrderAddress();
    });
  },
  methods: {
    close: function close() {
      this.dialog = false;
    },
    getOrderAddress: function getOrderAddress() {
      var payload = {
        model: '/order_address',
        update: 'updateOrderAddressList',
        id: this.form.ordershipping.id
      };
      this.$store.dispatch("showItem", payload);
    }
  },
  computed: {
    total: function total() {
      var price = 0;
      this.form.products.forEach(function (element) {
        price += parseFloat(element.pivot.price) * parseFloat(element.pivot.quantity);
      });
      return price;
    },
    order_address: function order_address() {
      return this.$store.getters.order_address;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card[data-v-1c3af396]:not(.v-sheet--tile):not(.v-card--shaped) {\n    padding: 20px;\n    width: 80%;\n    margin: auto;\n    box-shadow: 7px 7px 8px -4px rgb(210, 225, 246), 0 12px 17px 2px rgb(210, 225, 246), 0 5px 22px 4px rgb(210, 225, 246) !important;\n    margin-bottom: 50px\n}\n@media only screen and (max-width: 991px) {\n.v-card[data-v-1c3af396]:not(.v-sheet--tile):not(.v-card--shaped) {\n    padding: 0;\n    width: 100%;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Billingddress.vue?vue&type=template&id=5e66d08a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/content/Billingddress.vue?vue&type=template&id=5e66d08a& ***!
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
      _c("v-layout", { attrs: { wrap: "" } }, [
        _vm.user.billing != null
          ? _c(
              "div",
              [
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Full name",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.name,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "name", $$v)
                            },
                            expression: "user.billing.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Email",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.email,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "email", $$v)
                            },
                            expression: "user.billing.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Address",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.street_address,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "street_address", $$v)
                            },
                            expression: "user.billing.street_address"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "City/Town",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.town,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "town", $$v)
                            },
                            expression: "user.billing.town"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Country",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.country,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "country", $$v)
                            },
                            expression: "user.billing.country"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "County",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.county,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "county", $$v)
                            },
                            expression: "user.billing.county"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Phone",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.phone,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "phone", $$v)
                            },
                            expression: "user.billing.phone"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Zip/Postcode",
                            required: ""
                          },
                          model: {
                            value: _vm.user.billing.postal_code,
                            callback: function($$v) {
                              _vm.$set(_vm.user.billing, "postal_code", $$v)
                            },
                            expression: "user.billing.postal_code"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm2: "", "offset-sm10": "" } },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.save("exists")
                              }
                            }
                          },
                          [_vm._v("Submit")]
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
          : _c(
              "div",
              [
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Full name",
                            required: ""
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Email",
                            required: ""
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Address",
                            required: ""
                          },
                          model: {
                            value: _vm.form.street_address,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "street_address", $$v)
                            },
                            expression: "form.street_address"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "City/Town",
                            required: ""
                          },
                          model: {
                            value: _vm.form.town,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "town", $$v)
                            },
                            expression: "form.town"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Country",
                            required: ""
                          },
                          model: {
                            value: _vm.form.country,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "country", $$v)
                            },
                            expression: "form.country"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "County",
                            required: ""
                          },
                          model: {
                            value: _vm.form.county,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "county", $$v)
                            },
                            expression: "form.county"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Phone",
                            required: ""
                          },
                          model: {
                            value: _vm.form.phone,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "phone", $$v)
                            },
                            expression: "form.phone"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Zip/Postcode",
                            required: ""
                          },
                          model: {
                            value: _vm.form.postal_code,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "postal_code", $$v)
                            },
                            expression: "form.postal_code"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm2: "", "offset-sm10": "" } },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.save("doesnt")
                              }
                            }
                          },
                          [_vm._v("Submit")]
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Shippingaddress.vue?vue&type=template&id=6a682673&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/content/Shippingaddress.vue?vue&type=template&id=6a682673& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("v-layout", { attrs: { wrap: "" } }, [
        _vm.user.shipping != null
          ? _c(
              "div",
              [
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Full name",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.name,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "name", $$v)
                            },
                            expression: "user.shipping.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Email",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.email,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "email", $$v)
                            },
                            expression: "user.shipping.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Address",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.street_address,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "street_address", $$v)
                            },
                            expression: "user.shipping.street_address"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "City/Town",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.town,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "town", $$v)
                            },
                            expression: "user.shipping.town"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Country",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.country,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "country", $$v)
                            },
                            expression: "user.shipping.country"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "County",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.county,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "county", $$v)
                            },
                            expression: "user.shipping.county"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Phone",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.phone,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "phone", $$v)
                            },
                            expression: "user.shipping.phone"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Zip/Postcode",
                            required: ""
                          },
                          model: {
                            value: _vm.user.shipping.postal_code,
                            callback: function($$v) {
                              _vm.$set(_vm.user.shipping, "postal_code", $$v)
                            },
                            expression: "user.shipping.postal_code"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm2: "", "offset-sm10": "" } },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.save("exists")
                              }
                            }
                          },
                          [_vm._v("Submit")]
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
          : _c(
              "div",
              [
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Full name",
                            required: ""
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Email",
                            required: ""
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Address",
                            required: ""
                          },
                          model: {
                            value: _vm.form.street_address,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "street_address", $$v)
                            },
                            expression: "form.street_address"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "City/Town",
                            required: ""
                          },
                          model: {
                            value: _vm.form.town,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "town", $$v)
                            },
                            expression: "form.town"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Country",
                            required: ""
                          },
                          model: {
                            value: _vm.form.country,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "country", $$v)
                            },
                            expression: "form.country"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "County",
                            required: ""
                          },
                          model: {
                            value: _vm.form.county,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "county", $$v)
                            },
                            expression: "form.county"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Phone",
                            required: ""
                          },
                          model: {
                            value: _vm.form.phone,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "phone", $$v)
                            },
                            expression: "form.phone"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm5: "", "offset-sm1": "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            color: "blue darken-2",
                            label: "Zip/Postcode",
                            required: ""
                          },
                          model: {
                            value: _vm.form.postal_code,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "postal_code", $$v)
                            },
                            expression: "form.postal_code"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", sm2: "", "offset-sm10": "" } },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.save("doesnt")
                              }
                            }
                          },
                          [_vm._v("Submit")]
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/address.vue?vue&type=template&id=1d3b3a01&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/content/address.vue?vue&type=template&id=1d3b3a01& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "el-tabs",
    {
      on: { "tab-click": _vm.handleClick },
      model: {
        value: _vm.activeName,
        callback: function($$v) {
          _vm.activeName = $$v
        },
        expression: "activeName"
      }
    },
    [
      _c(
        "el-tab-pane",
        { attrs: { label: "Billing Address", name: "first" } },
        [_c("myBilling", { attrs: { user: _vm.user } })],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tab-pane",
        { attrs: { label: "Shipping Address", name: "second" } },
        [_c("myShipping", { attrs: { user: _vm.user } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=template&id=1c3af396&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/account/index.vue?vue&type=template&id=1c3af396&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("VCard", [
    _c(
      "div",
      { staticClass: "container", staticStyle: { "margin-top": "30px" } },
      [
        _c(
          "el-tabs",
          { attrs: { "tab-position": _vm.tabPosition } },
          [
            _c("el-tab-pane", { attrs: { label: "My Account" } }, [
              _vm._v("\n                My account\n            ")
            ]),
            _vm._v(" "),
            _c(
              "el-tab-pane",
              { attrs: { label: "Orders" } },
              [_c("myOrders")],
              1
            ),
            _vm._v(" "),
            _c(
              "el-tab-pane",
              { attrs: { label: "Address" } },
              [_c("myAddress", { attrs: { user: _vm.user } })],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Orders.vue?vue&type=template&id=4ece3db4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/Orders.vue?vue&type=template&id=4ece3db4& ***!
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
  return _c("v-app", [
    _c(
      "div",
      [
        _c(
          "v-tooltip",
          {
            attrs: { right: "" },
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
                          staticClass: "mx-0",
                          attrs: { slot: "activator", icon: "" },
                          on: { click: _vm.getOrders },
                          slot: "activator"
                        },
                        on
                      ),
                      [
                        _c(
                          "v-icon",
                          { attrs: { color: "blue darken-2", small: "" } },
                          [_vm._v("refresh")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          },
          [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
        ),
        _vm._v(" "),
        _c("v-data-table", {
          staticClass: "elevation-1",
          attrs: {
            headers: _vm.headers,
            items: _vm.sales.data,
            "sort-by": "calories"
          },
          scopedSlots: _vm._u([
            {
              key: "item.actions",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-tooltip",
                    {
                      attrs: { right: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "mx-0",
                                      attrs: { slot: "activator", icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.view(item)
                                        }
                                      },
                                      slot: "activator"
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        attrs: {
                                          color: "blue darken-2",
                                          small: ""
                                        }
                                      },
                                      [_vm._v("visibility")]
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
                    [_vm._v(" "), _c("span", [_vm._v("view order")])]
                  )
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _c("myView")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/View.vue?vue&type=template&id=73bb7734&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/View.vue?vue&type=template&id=73bb7734& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "1200px" },
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
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "span",
                    {
                      staticClass: "headline text-center",
                      staticStyle: { margin: "auto" }
                    },
                    [_vm._v("Order Details")]
                  ),
                  _vm._v(" "),
                  _c("VSpacer"),
                  _vm._v(" "),
                  _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
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
                                    staticClass: "mx-0",
                                    attrs: { slot: "activator", icon: "" },
                                    on: { click: _vm.close },
                                    slot: "activator"
                                  },
                                  on
                                ),
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        small: "",
                                        color: "blue darken-2"
                                      }
                                    },
                                    [_vm._v("close")]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [_vm._v(" "), _c("span", [_vm._v("close")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { "grid-list-md": "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { sm12: "" } },
                            [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-striped table-hover table-responsive"
                                },
                                [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("#")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Product Name")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Product Sku no.")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Product Description")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Quantity")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Price")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Total")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.form.products, function(
                                      product,
                                      index
                                    ) {
                                      return _c("tr", { key: index }, [
                                        _c("th", { attrs: { scope: "row" } }, [
                                          _vm._v(_vm._s(index + 1))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(product.product_name))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(product.sku_no))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(product.description))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "el-tag",
                                              { attrs: { type: "danger" } },
                                              [
                                                _vm._v(
                                                  _vm._s(product.pivot.quantity)
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("el-tag", [
                                              _vm._v(
                                                _vm._s(product.pivot.price)
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "el-tag",
                                              { attrs: { type: "success" } },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    product.pivot.quantity *
                                                      product.pivot.price
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c("tfoot", [
                                    _c("td", [_vm._v("Total")]),
                                    _vm._v(" "),
                                    _c("td", { attrs: { colspan: "5" } }, [
                                      _vm._v(_vm._s(_vm.total))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("VDivider"),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "headline text-center",
                                  staticStyle: { margin: "auto" }
                                },
                                [_vm._v("Shipping Details")]
                              ),
                              _vm._v(" "),
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-striped table-hover table-responsive"
                                },
                                [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Client Name")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Client Email")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Client Address")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("Client Phone")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v("County")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tbody", [
                                    _c("tr", [
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.order_address.name))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.order_address.email))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.order_address.street_address
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.order_address.phone))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.order_address.county))
                                      ])
                                    ])
                                  ])
                                ]
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

/***/ "./resources/js/components/account/content/Billingddress.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/account/content/Billingddress.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Billingddress_vue_vue_type_template_id_5e66d08a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Billingddress.vue?vue&type=template&id=5e66d08a& */ "./resources/js/components/account/content/Billingddress.vue?vue&type=template&id=5e66d08a&");
/* harmony import */ var _Billingddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Billingddress.vue?vue&type=script&lang=js& */ "./resources/js/components/account/content/Billingddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Billingddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Billingddress_vue_vue_type_template_id_5e66d08a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Billingddress_vue_vue_type_template_id_5e66d08a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/content/Billingddress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/content/Billingddress.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/account/content/Billingddress.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billingddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Billingddress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Billingddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billingddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/content/Billingddress.vue?vue&type=template&id=5e66d08a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/account/content/Billingddress.vue?vue&type=template&id=5e66d08a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billingddress_vue_vue_type_template_id_5e66d08a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Billingddress.vue?vue&type=template&id=5e66d08a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Billingddress.vue?vue&type=template&id=5e66d08a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billingddress_vue_vue_type_template_id_5e66d08a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billingddress_vue_vue_type_template_id_5e66d08a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/content/Shippingaddress.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/account/content/Shippingaddress.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shippingaddress_vue_vue_type_template_id_6a682673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shippingaddress.vue?vue&type=template&id=6a682673& */ "./resources/js/components/account/content/Shippingaddress.vue?vue&type=template&id=6a682673&");
/* harmony import */ var _Shippingaddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shippingaddress.vue?vue&type=script&lang=js& */ "./resources/js/components/account/content/Shippingaddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Shippingaddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Shippingaddress_vue_vue_type_template_id_6a682673___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Shippingaddress_vue_vue_type_template_id_6a682673___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/content/Shippingaddress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/content/Shippingaddress.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/account/content/Shippingaddress.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shippingaddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Shippingaddress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Shippingaddress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shippingaddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/content/Shippingaddress.vue?vue&type=template&id=6a682673&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/account/content/Shippingaddress.vue?vue&type=template&id=6a682673& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shippingaddress_vue_vue_type_template_id_6a682673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Shippingaddress.vue?vue&type=template&id=6a682673& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/Shippingaddress.vue?vue&type=template&id=6a682673&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shippingaddress_vue_vue_type_template_id_6a682673___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shippingaddress_vue_vue_type_template_id_6a682673___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/content/address.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/account/content/address.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _address_vue_vue_type_template_id_1d3b3a01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.vue?vue&type=template&id=1d3b3a01& */ "./resources/js/components/account/content/address.vue?vue&type=template&id=1d3b3a01&");
/* harmony import */ var _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.vue?vue&type=script&lang=js& */ "./resources/js/components/account/content/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _address_vue_vue_type_template_id_1d3b3a01___WEBPACK_IMPORTED_MODULE_0__["render"],
  _address_vue_vue_type_template_id_1d3b3a01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/content/address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/content/address.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/account/content/address.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/content/address.vue?vue&type=template&id=1d3b3a01&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/account/content/address.vue?vue&type=template&id=1d3b3a01& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_1d3b3a01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./address.vue?vue&type=template&id=1d3b3a01& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/content/address.vue?vue&type=template&id=1d3b3a01&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_1d3b3a01___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_address_vue_vue_type_template_id_1d3b3a01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/account/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/account/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1c3af396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1c3af396&scoped=true& */ "./resources/js/components/account/index.vue?vue&type=template&id=1c3af396&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/account/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1c3af396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css& */ "./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1c3af396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1c3af396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c3af396",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/account/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c3af396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=style&index=0&id=1c3af396&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c3af396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c3af396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c3af396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c3af396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c3af396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/account/index.vue?vue&type=template&id=1c3af396&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/account/index.vue?vue&type=template&id=1c3af396&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c3af396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1c3af396&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/account/index.vue?vue&type=template&id=1c3af396&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c3af396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c3af396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/orders/Orders.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/orders/Orders.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_4ece3db4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=4ece3db4& */ "./resources/js/components/orders/Orders.vue?vue&type=template&id=4ece3db4&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_4ece3db4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_4ece3db4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/Orders.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/orders/Orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/Orders.vue?vue&type=template&id=4ece3db4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/orders/Orders.vue?vue&type=template&id=4ece3db4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_4ece3db4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=4ece3db4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/Orders.vue?vue&type=template&id=4ece3db4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_4ece3db4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_4ece3db4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/orders/View.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/orders/View.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_73bb7734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=73bb7734& */ "./resources/js/components/orders/View.vue?vue&type=template&id=73bb7734&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_73bb7734___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_73bb7734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/View.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/orders/View.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/View.vue?vue&type=template&id=73bb7734&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/orders/View.vue?vue&type=template&id=73bb7734& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_73bb7734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=73bb7734& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/View.vue?vue&type=template&id=73bb7734&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_73bb7734___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_73bb7734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
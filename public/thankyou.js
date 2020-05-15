(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Thankyou.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/Thankyou.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _include_Headerpartial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../include/Headerpartial */ "./resources/js/components/include/Headerpartial.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loader: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Shop/Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("headerP"),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loader,
              expression: "loader"
            }
          ],
          staticStyle: {
            "text-align": "center",
            width: "100%",
            "margin-top": "200px"
          }
        },
        [
          _c("v-progress-circular", {
            staticStyle: { margin: "1rem" },
            attrs: { width: 3, indeterminate: "", color: "red" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.loader,
              expression: "!loader"
            }
          ],
          staticClass: "bgwhite p-t-55 p-b-65"
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c("h3", [_vm._v("Thank you for shopping")]),
                _vm._v(" "),
                _c(
                  "v-list",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "v-btn v-btn--text theme--light primary--text",
                        staticStyle: {
                          "text-decoration": "none",
                          "text-transform": "none"
                        },
                        attrs: { to: "/shop" }
                      },
                      [
                        _c("div", { staticClass: "v-btn__content" }, [
                          _vm._v("Go to Shop")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Shop/Thankyou.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Shop/Thankyou.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Thankyou_vue_vue_type_template_id_4c555e9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true& */ "./resources/js/components/Shop/Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true&");
/* harmony import */ var _Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thankyou.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop/Thankyou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Thankyou_vue_vue_type_template_id_4c555e9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Thankyou_vue_vue_type_template_id_4c555e9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c555e9a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/Thankyou.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/Thankyou.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Shop/Thankyou.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Thankyou.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Thankyou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Shop/Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Shop/Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_4c555e9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Shop/Thankyou.vue?vue&type=template&id=4c555e9a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_4c555e9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_template_id_4c555e9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
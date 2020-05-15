(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~help_center"],{

/***/ "./node_modules/vue-faq-accordion/dist/vue-faq-accordion.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-faq-accordion/dist/vue-faq-accordion.esm.js ***!
  \**********************************************************************/
/*! exports provided: default, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");


//

var script = {
  name: 'VueFaqAccordion',

  components: {
    CollapseTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_0__["CollapseTransition"]
  },

  data: function data () {
    return {
      activeTab: '',
      activeQuestionIndex: null,
      showAccordion: true
    }
  },

  props: {
    /**
     * Array of items
     * Object style {questionProperty: string, answerProperty: string, tabName: string}
     * You can change object keys names using other props (questionProperty, answerProperty, tabName)
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Key name of object in items array for specifying title of question
     */
    questionProperty: {
      type: String,
      default: 'title'
    },
    /**
     * Key name of object in items array for specifying content text of open question
     */
    answerProperty: {
      type: String,
      default: 'value'
    },
    /**
     * Key name of object in items array for specifying navigation tab name
     */
    tabName: {
      type: String,
      default: 'category'
    },
    /**
     * Color for hover and active tab/question
     * possible values: 'red', '#F00', 'rgb(255, 0, 0)'
     */
    activeColor: {
      type: String,
      default: '#D50000'
    },
    /**
     * Color for borders
     */
    borderColor: {
      type: String,
      default: '#9E9E9E'
    },
    /**
     * Color for fonts
     */
    fontColor: {
      type: String,
      default: '#000000'
    }
  },

  computed: {
    categories: function categories () {
      var this$1 = this;

      var uniqueCategories = this.items
        .map(function (item) { return item[this$1.tabName]; })
        .filter(function (category, index, categories) { return categories.indexOf(category) === index; });
      this.activeTab = uniqueCategories[0];
      return uniqueCategories
    },
    categoryItems: function categoryItems () {
      var this$1 = this;

      return this.items
        .filter(function (item) { return item[this$1.tabName] === this$1.activeTab; })
    },
    hasNavigation: function hasNavigation () {
      return !!this.categories[0]
    }
  },

  methods: {
    makeActive: function makeActive (itemIndex) {
      this.activeQuestionIndex = this.activeQuestionIndex === itemIndex ? null : itemIndex;
      this.$emit('itemSelect', { itemIndex: itemIndex });
    },
    generateButtonClasses: function generateButtonClasses (buttonIndex) {
      return [
        'accordion__toggle-button',
        this.activeQuestionIndex === buttonIndex
          ? 'accordion__toggle-button_active'
          : null
      ]
    },
    generateQuestionClasses: function generateQuestionClasses (questionIndex) {
      return [
        'accordion__title',
        this.activeQuestionIndex === questionIndex
          ? 'accordion__title_active'
          : null
      ]
    },
    makeActiveCategory: function makeActiveCategory (category, categoryIndex) {
      var this$1 = this;

      if (this.activeTab === category) { return }

      this.showAccordion = false;
      this.activeTab = category;
      this.activeQuestionIndex = null;
      setTimeout( function () {
        this$1.$emit('categorySelect', { categoryIndex: categoryIndex });
        this$1.showAccordion = true;
      }, 300 );
    },
    generateCategoryClasses: function generateCategoryClasses (category) {
      return [
        'faq__nav-item',
        this.activeTab === category
          ? 'faq__nav-item_active'
          : null
      ]
    }
  },

  mounted: function mounted () {
    this.$refs.rootEl.style.setProperty('--active-color', this.activeColor);
    this.$refs.rootEl.style.setProperty('--border-color', this.borderColor);
    this.$refs.rootEl.style.setProperty('--font-color', this.fontColor);
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD;
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", { ref: "rootEl", staticClass: "faq" }, [
    _c(
      "div",
      { staticClass: "faq-wrapper" },
      [
        _vm.hasNavigation
          ? _c(
              "nav",
              { staticClass: "faq__nav" },
              _vm._l(_vm.categories, function(category, i) {
                return _c("div", {
                  key: "category-" + i,
                  class: _vm.generateCategoryClasses(category),
                  domProps: { innerHTML: _vm._s(category) },
                  on: {
                    click: function($event) {
                      return _vm.makeActiveCategory(category, i)
                    }
                  }
                })
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "accordion-fade-slide", mode: "out-in" } },
          [
            _vm.showAccordion
              ? _c(
                  "div",
                  { staticClass: "accordion" },
                  _vm._l(_vm.categoryItems, function(item, i) {
                    return _c(
                      "div",
                      {
                        key: "accordion-item-" + i,
                        staticClass: "accordion__item"
                      },
                      [
                        _c(
                          "div",
                          {
                            class: _vm.generateQuestionClasses(i),
                            on: {
                              click: function($event) {
                                return _vm.makeActive(i)
                              }
                            }
                          },
                          [
                            _c("p", {
                              staticClass: "accordion__title-text",
                              domProps: {
                                innerHTML: _vm._s(item[_vm.questionProperty])
                              }
                            }),
                            _vm._v(" "),
                            _c("button", {
                              class: _vm.generateButtonClasses(i)
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("collapse-transition", [
                          i === _vm.activeQuestionIndex
                            ? _c(
                                "div",
                                [
                                  _vm._t(
                                    "default",
                                    [
                                      _c("div", {
                                        staticClass: "accordion__value",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            item[_vm.answerProperty]
                                          )
                                        }
                                      })
                                    ],
                                    null,
                                    item
                                  )
                                ],
                                2
                              )
                            : _vm._e()
                        ])
                      ],
                      1
                    )
                  }),
                  0
                )
              : _vm._e()
          ]
        )
      ],
      1
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-622ade70_0", { source: "*[data-v-622ade70] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbutton[data-v-622ade70] {\n  border: none;\n  background: none;\n  outline: none;\n}\n.faq[data-v-622ade70] {\n  width: 100%;\n  padding: 0 10px;\n}\n.faq-wrapper[data-v-622ade70] {\n  max-width: 825px;\n}\n.faq__title[data-v-622ade70] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.faq__nav[data-v-622ade70] {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n}\n.faq__nav-item[data-v-622ade70] {\n  height: 60px;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 2px solid var(--border-color);\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s;\n  text-align: center;\n  user-select: none;\n  color: var(--font-color);\n}\n.faq__nav-item_active[data-v-622ade70] {\n  color: var(--active-color);\n}\n.faq__nav-item[data-v-622ade70]:hover {\n  color: var(--active-color);\n}\n.faq__nav-item[data-v-622ade70]:last-child {\n  border-right: none;\n}\n.faq__accordion[data-v-622ade70] {\n  min-height: 250px;\n}\n.accordion-fade-slide-enter-active[data-v-622ade70], .accordion-fade-slide-leave-active[data-v-622ade70] {\n  transition: all 0.3s;\n}\n.accordion-fade-slide-enter[data-v-622ade70] {\n  transform: translateY(-25px);\n  opacity: 0;\n}\n.accordion-fade-slide-leave-to[data-v-622ade70] {\n  transform: translateY(25px);\n  opacity: 0;\n}\n.accordion[data-v-622ade70] {\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n  margin-top: 15px;\n}\n.accordion__item[data-v-622ade70] {\n  border-bottom: 2px solid var(--border-color);\n}\n.accordion__item[data-v-622ade70]:last-child {\n  border-bottom: none;\n}\n.accordion__title[data-v-622ade70] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--font-color);\n}\n.accordion__title_active[data-v-622ade70] {\n  color: var(--active-color);\n}\n.accordion__title[data-v-622ade70]:hover {\n  color: var(--active-color);\n}\n.accordion__title:hover .accordion__toggle-button[data-v-622ade70]::before, .accordion__title:hover .accordion__toggle-button[data-v-622ade70]::after {\n  background: var(--active-color);\n}\n.accordion__title-text[data-v-622ade70] {\n  margin-right: 10px;\n}\n.accordion__value[data-v-622ade70] {\n  padding: 0 25px 25px 25px;\n  text-align: left;\n  color: var(--font-color);\n}\n.accordion__toggle-button[data-v-622ade70] {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 50%;\n  padding-left: 16px;\n  cursor: pointer;\n}\n.accordion__toggle-button[data-v-622ade70]::before, .accordion__toggle-button[data-v-622ade70]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transition: all 0.3s;\n  background: black;\n}\n.accordion__toggle-button[data-v-622ade70]::before {\n  transform: rotate(90deg);\n}\n.accordion__toggle-button_active[data-v-622ade70] {\n  transform: rotate(45deg);\n}\n.accordion__toggle-button_active[data-v-622ade70]::before, .accordion__toggle-button_active[data-v-622ade70]::after {\n  background: var(--active-color);\n}\n\n/*# sourceMappingURL=vue-faq-accordion.vue.map */", map: {"version":3,"sources":["/Users/gerasimvol/Projects/vue-faq-accordion/src/vue-faq-accordion.vue","vue-faq-accordion.vue"],"names":[],"mappings":"AAmLA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;AClLA;ADqLA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;AClLA;ADqLA;EACA,WAAA;EACA,eAAA;AClLA;ADoLA;EACA,gBAAA;AClLA;ADqLA;EACA,kBAAA;EACA,mBAAA;ACnLA;ADsLA;EACA,aAAA;EACA,8BAAA;EACA,qCAAA;EACA,kBAAA;ACpLA;ADuLA;EACA,YAAA;EACA,OAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,iBAAA;EACA,wBAAA;ACrLA;ADuLA;EACA,0BAAA;ACrLA;ADwLA;EACA,0BAAA;ACtLA;ADyLA;EACA,kBAAA;ACvLA;AD2LA;EACA,iBAAA;ACzLA;AD8LA;EAEA,oBAAA;AC5LA;AD8LA;EACA,4BAAA;EACA,UAAA;AC5LA;AD8LA;EACA,2BAAA;EACA,UAAA;AC5LA;ADgMA;EACA,qCAAA;EACA,kBAAA;EACA,gBAAA;AC7LA;AD+LA;EACA,4CAAA;AC7LA;AD+LA;EACA,mBAAA;AC7LA;ADiMA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,wBAAA;AC/LA;ADiMA;EACA,0BAAA;AC/LA;ADkMA;EACA,0BAAA;AChMA;ADmMA;EAEA,+BAAA;AClMA;ADuMA;EACA,kBAAA;ACrMA;ADyMA;EACA,yBAAA;EACA,gBAAA;EACA,wBAAA;ACvMA;AD0MA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;ACxMA;AD0MA;EAEA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;EACA,iBAAA;ACzMA;AD4MA;EACA,wBAAA;AC1MA;AD6MA;EACA,wBAAA;AC3MA;AD6MA;EAEA,+BAAA;AC5MA;;AAEA,gDAAgD","file":"vue-faq-accordion.vue","sourcesContent":["<template>\n<section class=\"faq\" ref=\"rootEl\">\n  <div class=\"faq-wrapper\">\n    <nav v-if=\"hasNavigation\" class=\"faq__nav\">\n      <div\n        v-for=\"(category, i) in categories\"\n        :key=\"`category-${i}`\"\n        v-html=\"category\"\n        :class=\"generateCategoryClasses(category)\"\n        @click=\"makeActiveCategory(category, i)\"\n      ></div>\n    </nav>\n\n    <transition name=\"accordion-fade-slide\" mode=\"out-in\">\n      <div v-if=\"showAccordion\" class=\"accordion\">\n        <div\n          class=\"accordion__item\"\n          v-for=\"(item, i) in categoryItems\"\n          :key=\"`accordion-item-${i}`\"\n        >\n          <div :class=\"generateQuestionClasses(i)\" @click=\"makeActive(i)\">\n            <p class=\"accordion__title-text\" v-html=\"item[questionProperty]\"></p>\n            <button :class=\"generateButtonClasses(i)\"></button>\n          </div>\n            <collapse-transition>\n              <div v-if=\"i === activeQuestionIndex\">\n                <slot v-bind=\"item\">\n                  <div class=\"accordion__value\" v-html=\"item[answerProperty]\"></div>\n                </slot>\n              </div>\n            </collapse-transition>\n        </div>\n      </div>\n    </transition>\n  </div>\n</section>\n</template>\n\n<script>\n  import { CollapseTransition } from 'vue2-transitions'\n\n  export default {\n    name: 'VueFaqAccordion',\n\n    components: {\n      CollapseTransition\n    },\n\n    data () {\n      return {\n        activeTab: '',\n        activeQuestionIndex: null,\n        showAccordion: true\n      }\n    },\n\n    props: {\n      /**\n       * Array of items\n       * Object style {questionProperty: string, answerProperty: string, tabName: string}\n       * You can change object keys names using other props (questionProperty, answerProperty, tabName)\n       */\n      items: {\n        type: Array,\n        required: true\n      },\n      /**\n       * Key name of object in items array for specifying title of question\n       */\n      questionProperty: {\n        type: String,\n        default: 'title'\n      },\n      /**\n       * Key name of object in items array for specifying content text of open question\n       */\n      answerProperty: {\n        type: String,\n        default: 'value'\n      },\n      /**\n       * Key name of object in items array for specifying navigation tab name\n       */\n      tabName: {\n        type: String,\n        default: 'category'\n      },\n      /**\n       * Color for hover and active tab/question\n       * possible values: 'red', '#F00', 'rgb(255, 0, 0)'\n       */\n      activeColor: {\n        type: String,\n        default: '#D50000'\n      },\n      /**\n       * Color for borders\n       */\n      borderColor: {\n        type: String,\n        default: '#9E9E9E'\n      },\n      /**\n       * Color for fonts\n       */\n      fontColor: {\n        type: String,\n        default: '#000000'\n      }\n    },\n\n    computed: {\n      categories () {\n        const uniqueCategories = this.items\n          .map(item => item[this.tabName])\n          .filter((category, index, categories) => categories.indexOf(category) === index)\n        this.activeTab = uniqueCategories[0]\n        return uniqueCategories\n      },\n      categoryItems () {\n        return this.items\n          .filter(item => item[this.tabName] === this.activeTab)\n      },\n      hasNavigation () {\n        return !!this.categories[0]\n      }\n    },\n\n    methods: {\n      makeActive (itemIndex) {\n        this.activeQuestionIndex = this.activeQuestionIndex === itemIndex ? null : itemIndex\n        this.$emit('itemSelect', { itemIndex })\n      },\n      generateButtonClasses (buttonIndex) {\n        return [\n          'accordion__toggle-button',\n          this.activeQuestionIndex === buttonIndex\n            ? 'accordion__toggle-button_active'\n            : null\n        ]\n      },\n      generateQuestionClasses (questionIndex) {\n        return [\n          'accordion__title',\n          this.activeQuestionIndex === questionIndex\n            ? 'accordion__title_active'\n            : null\n        ]\n      },\n      makeActiveCategory (category, categoryIndex) {\n        if (this.activeTab === category) return\n\n        this.showAccordion = false\n        this.activeTab = category\n        this.activeQuestionIndex = null\n        setTimeout( () => {\n          this.$emit('categorySelect', { categoryIndex })\n          this.showAccordion = true\n        }, 300 )\n      },\n      generateCategoryClasses (category) {\n        return [\n          'faq__nav-item',\n          this.activeTab === category\n            ? 'faq__nav-item_active'\n            : null\n        ]\n      }\n    },\n\n    mounted () {\n      this.$refs.rootEl.style.setProperty('--active-color', this.activeColor)\n      this.$refs.rootEl.style.setProperty('--border-color', this.borderColor)\n      this.$refs.rootEl.style.setProperty('--font-color', this.fontColor)\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  button {\n    border: none;\n    background: none;\n    outline: none;\n  }\n\n  .faq {\n    width: 100%;\n    padding: 0 10px;\n\n    &-wrapper {\n      max-width: 825px;\n    }\n\n    &__title {\n      text-align: center;\n      margin-bottom: 25px;\n    }\n\n    &__nav {\n      display: flex;\n      justify-content: space-between;\n      border: 2px solid var(--border-color);\n      border-radius: 5px;\n    }\n\n    &__nav-item {\n      height: 60px;\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-right: 2px solid var(--border-color);\n      cursor: pointer;\n      font-weight: 600;\n      transition: all 0.3s;\n      text-align: center;\n      user-select: none;\n      color: var(--font-color);\n\n      &_active {\n        color: var(--active-color);\n      }\n\n      &:hover {\n        color: var(--active-color);\n      }\n\n      &:last-child {\n        border-right: none;\n      }\n    }\n\n    &__accordion {\n      min-height: 250px;\n    }\n  }\n\n  .accordion-fade-slide {\n    &-enter-active,\n    &-leave-active {\n      transition: all 0.3s;\n    }\n    &-enter {\n      transform: translateY(-25px);\n      opacity: 0;\n    }\n    &-leave-to {\n      transform: translateY(25px);\n      opacity: 0;\n    }\n  }\n\n  .accordion {\n    border: 2px solid var(--border-color);\n    border-radius: 5px;\n    margin-top: 15px;\n\n    &__item {\n      border-bottom: 2px solid var(--border-color);\n\n      &:last-child {\n        border-bottom: none;\n      }\n    }\n\n    &__title {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 25px;\n      cursor: pointer;\n      transition: all 0.3s;\n      color: var(--font-color);\n\n      &_active {\n        color: var(--active-color);\n      }\n\n      &:hover {\n        color: var(--active-color);\n\n        .accordion__toggle-button {\n          &::before,\n          &::after {\n            background: var(--active-color);\n          }\n        }\n      }\n\n      &-text {\n        margin-right: 10px;\n      }\n    }\n\n    &__value {\n      padding: 0 25px 25px 25px;\n      text-align: left;\n      color: var(--font-color);\n    }\n\n    &__toggle-button {\n      position: relative;\n      width: 16px;\n      height: 16px;\n      transition: all 0.3s;\n      transform-origin: 50% 50%;\n      padding-left: 16px;\n      cursor: pointer;\n\n      &::before,\n      &::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 100%;\n        height: 2px;\n        transition: all 0.3s;\n        background: black;\n      }\n\n      &::before {\n        transform: rotate(90deg);\n      }\n\n      &_active {\n        transform: rotate(45deg);\n\n        &::before,\n        &::after {\n          background: var(--active-color);\n        }\n      }\n    }\n  }\n</style>\n","* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  border: none;\n  background: none;\n  outline: none;\n}\n\n.faq {\n  width: 100%;\n  padding: 0 10px;\n}\n.faq-wrapper {\n  max-width: 825px;\n}\n.faq__title {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.faq__nav {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n}\n.faq__nav-item {\n  height: 60px;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 2px solid var(--border-color);\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s;\n  text-align: center;\n  user-select: none;\n  color: var(--font-color);\n}\n.faq__nav-item_active {\n  color: var(--active-color);\n}\n.faq__nav-item:hover {\n  color: var(--active-color);\n}\n.faq__nav-item:last-child {\n  border-right: none;\n}\n.faq__accordion {\n  min-height: 250px;\n}\n\n.accordion-fade-slide-enter-active, .accordion-fade-slide-leave-active {\n  transition: all 0.3s;\n}\n.accordion-fade-slide-enter {\n  transform: translateY(-25px);\n  opacity: 0;\n}\n.accordion-fade-slide-leave-to {\n  transform: translateY(25px);\n  opacity: 0;\n}\n\n.accordion {\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n  margin-top: 15px;\n}\n.accordion__item {\n  border-bottom: 2px solid var(--border-color);\n}\n.accordion__item:last-child {\n  border-bottom: none;\n}\n.accordion__title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--font-color);\n}\n.accordion__title_active {\n  color: var(--active-color);\n}\n.accordion__title:hover {\n  color: var(--active-color);\n}\n.accordion__title:hover .accordion__toggle-button::before, .accordion__title:hover .accordion__toggle-button::after {\n  background: var(--active-color);\n}\n.accordion__title-text {\n  margin-right: 10px;\n}\n.accordion__value {\n  padding: 0 25px 25px 25px;\n  text-align: left;\n  color: var(--font-color);\n}\n.accordion__toggle-button {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 50%;\n  padding-left: 16px;\n  cursor: pointer;\n}\n.accordion__toggle-button::before, .accordion__toggle-button::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transition: all 0.3s;\n  background: black;\n}\n.accordion__toggle-button::before {\n  transform: rotate(90deg);\n}\n.accordion__toggle-button_active {\n  transform: rotate(45deg);\n}\n.accordion__toggle-button_active::before, .accordion__toggle-button_active::after {\n  background: var(--active-color);\n}\n\n/*# sourceMappingURL=vue-faq-accordion.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-622ade70";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VueFaqAccordion', __vue_component__);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue2-transitions/dist/vue2-transitions.m.js ***!
  \******************************************************************/
/*! exports provided: FadeTransition, ZoomCenterTransition, ZoomXTransition, ZoomYTransition, CollapseTransition, ScaleTransition, SlideYUpTransition, SlideYDownTransition, SlideXLeftTransition, SlideXRightTransition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeTransition", function() { return FadeTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomCenterTransition", function() { return ZoomCenterTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomXTransition", function() { return ZoomXTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomYTransition", function() { return ZoomYTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseTransition", function() { return CollapseTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleTransition", function() { return ScaleTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideYUpTransition", function() { return SlideYUpTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideYDownTransition", function() { return SlideYDownTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideXLeftTransition", function() { return SlideXLeftTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideXRightTransition", function() { return SlideXRightTransition; });
/*!
 * vue2-transitions v0.3.0
 * (c) 2019-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
var baseTransition = {
  inheritAttrs: false,
  props: {
    /**
     * Transition duration. Number for specifying the same duration for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    duration: {
      type: [Number, Object],
      default: 300
    },
    /**
     * Transition delay. Number for specifying the same delay for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    delay: {
      type: [Number, Object],
      default: 0
    },
    /**
     * Whether the component should be a `transition-group` component.
     */
    group: Boolean,
    /**
     * Transition tag, in case the component is a `transition-group`
     */
    tag: {
      type: String,
      default: 'span'
    },
    /**
     *  Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
     *  Can be specified with styles as well but it's shorter with this prop
     */
    origin: {
      type: String,
      default: ''
    },
    /**
     * Element styles that are applied during transition. These styles are applied on @beforeEnter and @beforeLeave hooks
     */
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out'
        };
      }
    }
  },
  computed: {
    componentType: function componentType() {
      return this.group ? 'transition-group' : 'transition';
    },
    hooks: function hooks() {
      return Object.assign({
        beforeEnter: this.beforeEnter,
        afterEnter: this.cleanUpStyles,
        beforeLeave: this.beforeLeave,
        leave: this.leave,
        afterLeave: this.cleanUpStyles
      }, this.$listeners);
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.animationDuration = enterDuration + "ms";

      var enterDelay = this.delay.enter ? this.delay.enter : this.delay;
      el.style.animationDelay = enterDelay + "ms";

      this.setStyles(el);
    },
    cleanUpStyles: function cleanUpStyles(el) {
      var this$1 = this;

      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = '';
        }
      });
      el.style.animationDuration = '';
      el.style.animationDelay = '';
    },
    beforeLeave: function beforeLeave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      el.style.animationDuration = leaveDuration + "ms";

      var leaveDelay = this.delay.leave ? this.delay.leave : this.delay;
      el.style.animationDelay = leaveDelay + "ms";

      this.setStyles(el);
    },
    leave: function leave(el) {
      this.setAbsolutePosition(el);
    },
    setStyles: function setStyles(el) {
      var this$1 = this;

      this.setTransformOrigin(el);
      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = styleValue;
        }
      });
    },
    setAbsolutePosition: function setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = 'absolute';
      }
      return this;
    },
    setTransformOrigin: function setTransformOrigin(el) {
      if (this.origin) {
        el.style.transformOrigin = this.origin;
      }
      return this;
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var FadeTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "fadeIn", "move-class": "fade-move", "leave-active-class": "fadeOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'fade-transition',
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomCenterTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "zoomIn", "move-class": "zoom-move", "leave-active-class": "zoomOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-center-transition',
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomXTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "zoomInX", "move-class": "zoom-move", "leave-active-class": "zoomOutX" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-x-transition',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        };
      }
    }
  },
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomYTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "zoomInY", "move-class": "zoom-move", "leave-active-class": "zoomOutY" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-y-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " .collapse-move { transition: transform .3s ease-in-out; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var CollapseTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "move-class": "collapse-move" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.afterEnter, "enter": _vm.enter, "before-leave": _vm.beforeLeave, "leave": _vm.leave, "after-leave": _vm.afterLeave } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'collapse-transition',
  mixins: [baseTransition],
  methods: {
    transitionStyle: function transitionStyle(duration) {
      if ( duration === void 0 ) duration = 300;

      var durationInSeconds = duration / 1000;
      var style = durationInSeconds + "s height ease-in-out, " + durationInSeconds + "s padding-top ease-in-out, " + durationInSeconds + "s padding-bottom ease-in-out";
      return style;
    },
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.transition = this.transitionStyle(enterDuration);
      if (!el.dataset) { el.dataset = {}; }

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      this.setStyles(el);
    },

    enter: function enter(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }

      el.style.overflow = 'hidden';
    },

    afterEnter: function afterEnter(el) {
      // for safari: remove class then reset height is necessary
      el.style.transition = '';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    },

    beforeLeave: function beforeLeave(el) {
      if (!el.dataset) { el.dataset = {}; }
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
      this.setStyles(el);
    },

    leave: function leave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        el.style.transition = this.transitionStyle(leaveDuration);
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
      // necessary for transition-group
      this.setAbsolutePosition(el);
    },

    afterLeave: function afterLeave(el) {
      el.style.transition = '';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ScaleTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "scaleIn", "move-class": "scale-move", "leave-active-class": "scaleOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'scale-transition',
  mixins: [baseTransition],
  props: {
    origin: {
      type: String,
      default: 'top left'
    },
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideYUpTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "type": "animation", "enter-active-class": "slideYIn", "move-class": "slide-move", "leave-active-class": "slideYOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-y-up-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideYDownTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "slideYDownIn", "leave-active-class": "slideYDownOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-y-down-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideXLeftTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "slideXLeftIn", "move-class": "slide-move", "leave-active-class": "slideXLeftOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-x-left-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideXRightTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "slideXRightIn", "move-class": "slide-move", "leave-active-class": "slideXRightOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-x-right-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

var components = {};
components[FadeTransition.name] = FadeTransition;
components[ZoomCenterTransition.name] = ZoomCenterTransition;
components[ZoomXTransition.name] = ZoomXTransition;
components[ZoomYTransition.name] = ZoomYTransition;
components[CollapseTransition.name] = CollapseTransition;
components[ScaleTransition.name] = ScaleTransition;
components[SlideYUpTransition.name] = SlideYUpTransition;
components[SlideYDownTransition.name] = SlideYDownTransition;
components[SlideXLeftTransition.name] = SlideXLeftTransition;
components[SlideXRightTransition.name] = SlideXRightTransition;

function install(Vue, options) {
  if (options && options.components) {
    options.components.forEach(function (c) { return Vue.component(c.name, components[c.name]); });
  } else {
    Object.keys(components).forEach(function (key) {
      Vue.component(key, components[key]);
    });
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install: install });
}

var index = {
  install: install
};


/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ })

}]);
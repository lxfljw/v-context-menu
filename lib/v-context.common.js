/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-context-menu/vue-context-menu.vue?vue&type=template&id=5be7e660&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticStyle:{"display":"block"},style:(_vm.style),on:{"mousedown":function($event){$event.stopPropagation();},"contextmenu":function($event){$event.preventDefault();}}},[_vm._t("default",function(){return [_c('section',_vm._l((_vm.menu),function(item,key){return _c('a',{key:key,class:{ disabled: item.disabled },style:({ color: _vm.color }),attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.handlerEvent(item.event)}}},[_vm._v(_vm._s(item.name))])}),0)]})],2)
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-context-menu/vue-context-menu.vue?vue&type=script&lang=js&

/* harmony default export */ var vue_context_menuvue_type_script_lang_js_ = ({
  name: "v-context",
  data() {
    return {
      triggerShowFn: () => {},
      triggerHideFn: () => {},
      x: null,
      y: null,
      style: {},
      binded: false,
      selectNode: {},
    };
  },
  props: {
    target: null,
    show: Boolean,
    menu: {
      type: Array,
      default: () => {
        return [];
      },
    },
    //菜单项别名，默认menu
    menuName: {
      type: String,
      default: "menu",
    },
    //菜单字体颜色
    color: {
      type: String,
      default: "#1a1a1a",
    },
  },
  created() {
    this.$$parent = {};
    this.parentVm(this);
  },
  mounted() {
    this.bindEvents();
    this.$nextTick(() => {
      this.$el.classList.add("right-menu");
    });
  },
  watch: {
    show(show) {
      if (show) {
        this.bindHideEvents();
      } else {
        this.unbindHideEvents();
        this.selectNode = {};
      }
    },
    target() {
      this.bindEvents();
    },
    // menu: {
    //   handler() {
    //     this.parentVm(this);
    //   },
    //   deep: true,
    // },
  },
  methods: {
    //挂载判断
    parentVm(VmComponent) {
      try {
        // const event = this.menu[0].event;
        // if (typeof VmComponent.$parent[event] === "function") {
        //   this.$$parent = VmComponent.$parent;
        // } else {
        //   this.parentVm(VmComponent.$parent);
        // }
        if (
          Object.prototype.toString.call(VmComponent.$parent[this.menuName]) ===
          "[object Array]"
        ) {
          this.$$parent = VmComponent.$parent;
        } else {
          this.parentVm(VmComponent.$parent);
        }
      } catch (e) {
        throw new Error(
          "---找不到该组件具备的菜单项,若您的菜单项命名不是menu,请传入菜单项别名menuName,请have a try---"
        );
      }
    },
    // 初始化事件
    bindEvents() {
      this.$nextTick(() => {
        if (!this.target || this.binded) return;
        this.triggerShowFn = this.contextMenuHandler.bind(this);
        this.target.addEventListener("contextmenu", this.triggerShowFn);
        this.binded = true;
      });
    },
    // 取消绑定事件
    unbindEvents() {
      if (!this.target) return;
      this.target.removeEventListener("contextmenu", this.triggerShowFn);
    },
    // 绑定隐藏菜单事件
    bindHideEvents() {
      this.triggerHideFn = this.clickDocumentHandler.bind(this);
      document.addEventListener("mousedown", this.triggerHideFn);
      document.addEventListener("mousewheel", this.triggerHideFn);
    },
    // 取消绑定隐藏菜单事件
    unbindHideEvents() {
      document.removeEventListener("mousedown", this.triggerHideFn);
      document.removeEventListener("mousewheel", this.triggerHideFn);
    },
    // 鼠标按压事件处理器
    clickDocumentHandler() {
      this.$emit("update:show", false);
    },
    // 右键事件事件处理,data外部主动显示右键菜单时，传进来的值，这个值在点击菜单某一项时传入
    contextMenuHandler(e, data) {
      this.$nextTick(() => {
        const windowH = this.$$parent.$el.clientHeight;
        const menuH = this.menu.length * 28;
        const flag = windowH - e.clientY > menuH;
        this.x = e.clientX;
        this.y = flag ? e.clientY : e.clientY - menuH;
        this.layout();
        this.$emit("update:show", true);
        this.selectNode = data;
        e.preventDefault();
      });
    },
    // 布局
    layout() {
      this.style = {
        left: this.x + "px",
        top: this.y + "px",
      };
    },
    handlerEvent(eventName) {
      if (typeof this.$$parent[eventName] === "function") {
        this.$$parent[eventName](this.selectNode);
      } else {
        throw new Error(`~~~找不到该组件的${eventName}方法~~~`);
      }
    },
  },
  beforeDestroy() {
    this.$el.classList.remove("right-menu");
  },
});

;// CONCATENATED MODULE: ./packages/vue-context-menu/vue-context-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_context_menu_vue_context_menuvue_type_script_lang_js_ = (vue_context_menuvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/vue-context-menu/vue-context-menu.vue?vue&type=style&index=0&id=5be7e660&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/vue-context-menu/vue-context-menu.vue?vue&type=style&index=0&id=5be7e660&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/vue-context-menu/vue-context-menu.vue



;


/* normalize component */

var component = normalizeComponent(
  vue_context_menu_vue_context_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5be7e660",
  null
  
)

/* harmony default export */ var vue_context_menu = (component.exports);
;// CONCATENATED MODULE: ./packages/vue-context-menu/index.js

vue_context_menu.install = (Vue) => {
  Vue.component(vue_context_menu.name, vue_context_menu);
};
/* harmony default export */ var packages_vue_context_menu = (vue_context_menu);

;// CONCATENATED MODULE: ./packages/index.js

const components = [packages_vue_context_menu];
/**
 * 定义install方法，接收vue作为参数.如果使用use注册插件,则所有组件都将被注册
 */
const install = (Vue) => {
  //判断是否安装
  if (install.installed) return;
  //遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};
//判断是否是直接引入文件
if (typeof window !== "undefined" && window.vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  //导出必须具有install，才能被Vue.use()方法安装
  install,
  ContextMenu: packages_vue_context_menu,
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=v-context.common.js.map
<!--
 * @Author: java-css
 * @Description: 右键菜单上下文组件
-->
<template>
  <div
    :style="style"
    style="display: block"
    v-show="show"
    @mousedown.stop
    @contextmenu.prevent
  >
    <slot>
      <section>
        <a
          href="javascript:;"
          v-for="(item, key) of menu"
          :key="key"
          @click="handlerEvent(item.event)"
          :class="{ disabled: item.disabled }"
          :style="{ color: color }"
          >{{ item.name }}</a
        >
      </section>
    </slot>
  </div>
</template>

<script>
export default {
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
};
</script>
<style scoped>
a {
  color: #333;
}
a.disabled {
  pointer-events: none;
  filter: alpha(opacity=50);
  -moz-opacity: 0.5;
  opacity: 0.5;
  color: gray !important;
}

.right-menu {
  position: fixed;
  background: #fff;
  border-radius: 5px;
  z-index: 999;
  display: none;
  border: 1px solid #eee;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.2);
}
.right-menu a {
  font-size: 14px;
  text-align: center;
  display: block;
  padding: 6px 15px;
  text-decoration: none;
}

.right-menu a:hover {
  background: #eee;
  color: #fff;
}
</style>
import ContextMenu from "./vue-context-menu";
const components = [ContextMenu];
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

export default {
  //导出必须具有install，才能被Vue.use()方法安装
  install,
  ContextMenu,
};

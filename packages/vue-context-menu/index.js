import ContextMenu from "./vue-context-menu.vue";
ContextMenu.install = (Vue) => {
  Vue.component(ContextMenu.name, ContextMenu);
};
export default ContextMenu;

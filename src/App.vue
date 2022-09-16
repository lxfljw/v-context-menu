<!--
 * @Author: java-css
 * @Description: 右键菜单测试用例
-->
<template>
  <div id="app">
    <v-context
      :target="target"
      :show="userShow"
      :menu="menu"
      @update:show="(show) => (userShow = show)"
    />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      target: document.body,
      menu: [
        { name: "菜单一", event: "testMsg" },
        { name: "菜单二", event: "testMsg" },
      ],
      userShow: false,
    };
  },
  methods: {
    testMsg(data) {
      console.log(data);
      this.userShow = false;
    },
  },
};
</script>
<style>
body {
  height: 100vh;
  font-size: 14px;
}
#app {
  margin: 0 auto;
  height: 50%;
  width: 50%;
  border: 3px solid burlywood;
}
</style>


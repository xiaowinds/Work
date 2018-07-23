<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from "./views/Layout/Layout";

export default {
  name: "App",
  components: {
    Layout
  }
};
</script>

<style lang="less" src="./assets/styles/global.less">

</style>
<style>
.el-table td,
.el-table th {
  padding: 5px 0;
}
.el-table th {
  text-align: center;
}
</style>

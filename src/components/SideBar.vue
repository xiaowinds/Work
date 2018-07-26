<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
    <div id="sidebar-wrap" :class="{ collapsed: toggSiderBar }">
        <h3 class="logo rythm twist1">AUTO VUE</h3>
        <el-menu background-color="#324157"  v-if="menu.length>0" text-color="#ddd" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="vertical" :collapse="toggSiderBar">
            <template v-for="item in menu">
                <el-submenu v-if="item.children.length !== 0" :index="item.router" :key="item.router">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{langType === 'en'? item.name_en: item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.router" :key="child.router">
                        <i :class="child.icon"></i>
                        <span slot="title">{{langType === 'en'? child.name_en: child.name}}</span>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item v-else :index="item.router" :key="item.router">
                    <i :class="item.icon"></i>
                    <span slot="title">{{langType === 'en'? item.name_en: item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>

import "@/mock/index.js";

export default {
  name: "sidebar",
  data() {
    return {
      isUnique: true,
      isRouter: true,
      menu: []
      // menu: localStorage.menu ? JSON.parse(localStorage.menu) : []
    };
  },
  computed: {
    toggSiderBar() {
      return this.$store.state.common.isCollapse;
    },
    langType() {
      return this.$i18n.locale;
    }
  },
  created() {
    var $this = this;
    this.$axios({
      url: "getMenu",
      method: "GET"
    }).then(res => {
      $this.menu = res.data.data.menu;
    });
  },
  methods: {}
};
</script>
<style scoped lang="less">
#sidebar-wrap {
  width: 160px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #324157;
  z-index: 5;
  transition: all 0.3s;

  .logo {
    color: #fff;
    text-align: center;
    margin: 18px 0;
  }
}
// 动态改变左侧导航包裹层宽度
#sidebar-wrap.collapsed {
  width: 64px;
  transition: all 0.3s;
}
// 美化左侧导航的留白
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 20px !important;
}
</style>

<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
    <div id="sidebar-wrap" :class="{ collapsed: toggSiderBar }">
        <h3 class="logo rythm twist1">AUTO VUE</h3>
        <el-menu background-color="#324157" text-color="#ddd" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="vertical" :collapse="toggSiderBar">
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
            <!-- <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-time"></i>
                        <span slot="title">项目管理</span>
                    </template>
                    <el-menu-item index="/project-info">
                        <i class="el-icon-menu"></i>
                        <span slot="title">项目信息</span>
                    </el-menu-item>
                    <el-menu-item index="/project-path">
                        <i class="el-icon-share"></i>
                        <span slot="title">项目路径</span>
                    </el-menu-item>
                    <el-menu-item index="/enroll-list">
                        <i class="el-icon-document"></i>
                        <span slot="title">报名列表</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="/operation-log">
                    <i class="el-icon-date"></i>
                    <span slot="title">操作日志</span>
                </el-menu-item> -->
        </el-menu>
    </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      isUnique: true,
      isRouter: true,
      menu: [
        {
          name: "庆茂煮漂间",
          name_en: "Scouring And Bleaching",
          icon: "el-icon-time",
          router: "/ScouringAndBleaching",
          children: []
        },
        {
          name: "庆茂染色间",
          name_en: "Dyeing",
          icon: "el-icon-document",
          router: "1",
          children: []
        },
        {
          name: "庆茂冷染间",
          name_en: "Cpb Dyeing",
          icon: "el-icon-picture-outline",
          router: "2",
          children: []
        },
        {
          name: "庆茂成品间",
          name_en: "Finishing",
          icon: "el-icon-menu",
          router: "/Finishing",
          children: [
            {
              name: "验布工",
              name_en: "验布工",
              icon: "el-icon-menu",
              router: "/Finishing/P1"
            },
            {
              name: "包装领班",
              name_en: "包装领班",
              icon: "el-icon-menu",
              router: "/Finishing/P2"
            }
          ]
        }
      ]
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
  created() {},
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

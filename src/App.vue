<template>

    <el-container id="app">



        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse">
          <el-switch
            v-model="isCollapse"
            active-color="#682223"
            inactive-color="#994933"
          style="margin-top: 10px;margin-left: 10px">
          </el-switch>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>

            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1" @click="routerPush('home')">选项1</el-menu-item>
              <el-menu-item index="1-2" @click="routerPush('home1')">选项2</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="分组3">
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
            </el-menu-item-group>

          </el-submenu>
        </el-menu>








      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: true
    }
  },
  computed: {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    routerPush(routeName) {
      this.$router.push({
        name:routeName
      });

    }
  }
}
</script>

<style>
  html,body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 0px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

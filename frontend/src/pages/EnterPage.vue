<template>
  <div id="app">
    <div class="head">
      <div class="logo">
        <i class="el-icon-document"></i>
        简易调查问卷
      </div>
      <el-menu :default-active="'/'+$route.path.split('/')[1]" router mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="item in menu" :key="item.index" :index="item.index">{{ item.name }}</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EnterPage',
  data () {
    return {
      menu: [
        { index: '/', route: '/', name: '首页' },
        { index: '/mine', route: 'mine', name: '我的问卷' },
        { index: '/edit', route: 'edit', name: '创建新问卷' },
        { index: '/help', route: 'help', name: '帮助' },
        { index: '/login', route: 'login', name: '登录' }
      ]
    }
  },
  methods: {
    handleSelect () {
      console.log(this.$route)
    }
  }
}
</script>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
  .head {
    position: fixed;
    margin: 0 1%;
    border-radius: 30px;
    width: 98%;
    height: 60px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eaecef;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .logo {
    vertical-align: middle;
    line-height: 60px;
    font-size: 1.5rem;
    padding-left: 2rem;
  }
  .el-menu {
    position: absolute;
    border-bottom: none;
    background: transparent;
    right: 2rem;
  }
  .el-menu-item {
    height: 50px;
    margin-bottom: 0.5rem;
    background: transparent;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
    background: transparent;
  }
  .content {
    position: relative;
    padding-top: 62px;
  }
</style>

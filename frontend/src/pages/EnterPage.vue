<template>
  <div id="app">
    <div class="head">
      <div class="logo">
        <i class="el-icon-document"></i>
        简易调查问卷
      </div>
      <el-menu :default-active="'/'+$route.path.split('/')[1]" mode="horizontal">
        <el-menu-item v-for="item in menu" :key="item.index" :index="item.index" @click="handleSelect(item.index)">{{ item.name }}</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        center>
        <span>是否退出登录？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible=false">取 消</el-button>
          <el-button @click="handleLogout">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EnterPage',
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    menu () {
      return this.$store.getters.menu
    }
  },
  methods: {
    handleSelect (path) {
      if (path.length) {
        this.$router.push({ path: path })
      } else {
        this.dialogVisible = true
      }
    },
    handleLogout () {
      this.$store.commit('logout')
      this.dialogVisible = false
      if (this.$route.meta.requireAuth) {
        this.$router.push({ path: '/login' })
      }
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
    z-index: 1999;
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
    height: 100%;
    box-sizing:border-box;
  }
</style>

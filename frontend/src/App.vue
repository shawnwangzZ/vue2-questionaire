<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item href="/">首页</b-nav-item>
      <b-nav-item href="/">我的问卷</b-nav-item>
      <b-nav-item href="/help">帮助</b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

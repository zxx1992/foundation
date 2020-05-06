<template>
  <div id="app">
    <!-- 路由  -->
    <router-link  :to="{name:'hello'}">helloWorld
    </router-link>
    <router-link :to="{name:'join'}">join
    </router-link>
    <router-link  :to="{name:'fundation'}">fundation
    </router-link>
    <!-- 路由匹配内容渲染 -->
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

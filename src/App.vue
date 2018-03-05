<template>
  <div id="app">
      <router-view></router-view>
      <!-- <loginForm message="Login Page"/> -->
  </div>
</template>

<script>
//import loginForm from './components/loginForm'

export default {
  name: 'App'
    /*,
  components: {
      loginForm
  }*/
}
</script>

<style>

body {
  background: url("./assets/novik-bg.png"), #F6FAF6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

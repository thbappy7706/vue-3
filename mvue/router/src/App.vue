<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/Home";
import Nav from "./components/Nav";
export default {
  name: 'App',
  components: {Nav, Home}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

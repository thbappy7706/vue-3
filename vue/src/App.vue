<template>
  <div id="app">
<h2>{{title}}</h2>
    <NavBar></NavBar>
<!--    <Hook/>-->
    <Axios/>


  </div>

</template>

<script>

import NavBar from "@/components/custom-events/NavBar";
import Axios from "@/components/custom-events/Axios";
// import Hook from "@/components/Hook";

export default {
  name: 'App',
  components: {
    Axios,
    // Hook,
    NavBar,
  },
  data(){
    return{
      title : 'The site is running',
    }
  },

  methods:{

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

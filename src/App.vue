<template>
<h1>Hello</h1>
  <Data/>
</template>

<script>
import Data from "@/components/Data";
export default  {
  name: 'App',
  components: {Data},
  data()
  {
    return {

    }
  },



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

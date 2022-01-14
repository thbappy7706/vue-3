<template>
<div>
  <h2 v-if="number===0"> The Number is Zero</h2>
  <h2 v-else-if="number < 0"> The Number is Negative</h2>
  <h2 v-else-if="number > 0"> The Number is Positive</h2>
  <h2 v-else>Not a number</h2>
  <template v-if="display">
    <h3>Tanvir Hossen</h3>
    <h3>Vue Practice</h3>
  </template>


</div>
</template>

<script>
export default {
  name: `Bappy`,
  data()
  {
  return{
   number: "Hello",
    display:true
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
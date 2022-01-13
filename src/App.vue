<template>
  <div>
    <h1> {{greeting}} {{name}}</h1>
       <h3 v-text="profession" ></h3>
  </div>

</template>

<script>


export default  {
  name: 'App',
  data()
  {
    return {
      greeting: 'Hello!!',
      name: "Tanvir Hossen Bappy",
      profession: 'Software Engineer'
    }
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
  //
}
</style>

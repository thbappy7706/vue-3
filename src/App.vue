<template>
  <div>
    <h1> {{greeting}} {{name}}</h1>
       <h3 v-text="profession" ></h3>
       <h3 v-html="profession" ></h3>
    <div v-html="link"></div>

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
      profession: `<b>Software Engineer</b>`,
      link : `<a href="#" onclick="alert('Hello!!!')">Please click</a>`
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
}
</style>

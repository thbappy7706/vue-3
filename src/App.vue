<template>
  <div>
    <h1> {{greeting}} {{name}}</h1>
       <h3 v-text="profession" ></h3>
       <h3 v-html="profession" ></h3>
        <div v-html="link"></div>
      <h2 v-bind:id="headingId">Heading</h2>
      <button v-bind:disabled="disable">Click me</button>
    <h2 class="textUnderline">UnderLine Text</h2>
    <h3 class="textUnderline" v-bind:class="status">Status</h3>
 <h2 class="badge" v-bind:class="isSoldOutMovie ? 'badge-success' : 'badge-danger'">Movie SoldOut</h2>

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
      link : `<a href="#" onclick="alert('Hello!!!')">Please click</a>`,
      headingId : '101',
      disable :true,
      status : `danger`,
      isSoldOutMovie: false
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
.textUnderline
  {
    text-decoration: underline;
  }

.isSold
{
  color: olivedrab;
}
.notSold
{
  color: darkred;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  box-sizing: border-box;
}
.badge-success {
  color: #fff;
  background-color: #28a745;
}

.badge-danger {
  color: #fff;
  background-color: darkred;
}
</style>

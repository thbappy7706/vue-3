<!--V-for in vue-->
<template>
<h1 class="textStyle">Hello Guys</h1>

<h1 class="petNameHeading">Pet Names List</h1>
  <h2 v-for="(name,index)  in names" :key="name">{{index}}.{{name}}</h2>

  <h1 class="fullNameHeading">Full Names List</h1>
  <h2 v-for="(name,index)  in fullNames" :key="name.firstName">{{index}}.{{name.firstName}} {{name.lastName}}</h2>

  <h1 class="myInfoHeading">About Myself</h1>
  <h2 v-for="(value,key,index) in myDatas" :key="value">{{index}} {{key}}: {{value}}</h2>

  <h1 class="movieNameHeading">Movie Names List</h1>
  <div v-for="actor in actors" :key="actor.name">
    <h2>Actor Name: {{actor.name}}</h2>
    <h3 class="badge-success" v-for="movie in actor.movies" :key="movie">{{movie}}</h3>

  </div>


</template>

<script>
export default {
  name: `ListRendering`,
  data()
  {
    return{
        names:[ "Bappy", "Ashik", "Shamim" ],

      fullNames : [
        {firstName: "Tanvir Hossen", lastName: "Bappy"},
        {firstName: "Ashikur Rahman", lastName: "Ashik"},
        {firstName: "Shamim Ahamed", lastName: "Sujon"},
      ],

      actors : [
        {
          name: 'Robert Downey Jr',
          movies : ['Iron Man', 'Sherlock Holmes']
        },

        {
          name: 'Chris HemsWorth',
          movies : ['Thor', 'The Huntsman: Winters War']
        },
      ],

      myDatas :
          {
            Name: 'Tanvir Hossen Bappy',
            Profession: 'Software Engineer Web',
            Company: 'IBSS - Integrated Business Systems & Solutions PVT. Ltd.',
          }

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

.textStyle
{
  font-size: 50px;
}

.petNameHeading
{
  color: darkgreen;
  background-color: skyblue;
  border:  1px solid red;
  border-radius: 5rem;
}

.fullNameHeading
{
  color: purple;
  background-color: darkcyan;
  border:  1px solid red;
  border-radius: 5rem;
}

.myInfoHeading
{
  color: midnightblue;
  background-color: mediumseagreen;
  border:  1px solid red;
  border-radius: 5rem;
}


.movieNameHeading
{
  color: darkblue;
  background-color: deepskyblue;
  border:  1px solid red;
  border-radius: 5rem;
}
.badge-success {
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
  color: #fff;
  background-color: purple;
  margin: .15rem;
}
</style>
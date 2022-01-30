<!--Conditional Rendering-->
<template>
  <h2>{{name}}</h2>
  <div>
    <button v-on:click="name='Web Developer'">Change Name</button>
  </div>

  <h2>{{count}}</h2>

  <div>
<!--    <button v-on:click="count += 1">Increment</button>-->
<!--    <button v-on:click="count -= 1">Decrement</button>-->

    <button v-on:click="increment(1)">Increment 1</button>
    <button v-on:click="decrement(1)">Decrement 1</button>
    <button v-on:click="increment(5)">Increment 5</button>
    <button v-on:click="decrement(5)">Decrement 5</button>
  </div>

</template>

<script>
export default {
  name: `Events`,
  data()
  {
    return{
     name: 'Tanvir Hossen Bappy',
      count: 0
    }
  },
  methods:
      {
        increment(num)
        {
          this.count +=num;
        },

        decrement(num)
        {
          this.count -=num;
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
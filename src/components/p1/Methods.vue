<!--Conditional Rendering-->
<template>

<h2>{{add(10,20,30)}}</h2>
<h2>{{multiply(baseValue)}}</h2>
</template>

<script>
export default {
  name: `Methods`,
  data()
  {
    return{
      baseMultiply: 5,
      baseValue: 20
    }
  },

  methods:
      {
        add(a,b,c)
        {
          return a+b+c
        },

        multiply(num)
        {
          return num* this.baseMultiply;
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
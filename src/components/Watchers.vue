<template>
  <h2>Volume Setter (0-20)</h2>
  <h3>Current Volume - {{volume}}</h3>

  <button @click="volume +=2"> Increase</button>
  <button @click="volume -=2"> Decrease</button>

</template>

<script>
export default {
  name: "Watchers",
  data(){
    return{
      volume:0,
    }
  },
  methods:{},
  computed:{},
  watch:
      {
        volume(newValue)
        {
          if (newValue >= 16)
            alert('Your volume is too high & at a risk')
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
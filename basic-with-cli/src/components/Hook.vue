<template>
 <h1>{{title}}</h1>
  <button @click="changeTitle"> See Details</button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hook",
  data(){
    return{
      title : "Vue js"

    }
  },

  methods:{
    changeTitle(){
      this.title = "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications."
    }
  },
  beforeCreate(){
    alert("Before Created hook")
  },
  created() {
    alert("its created hook")
  },
  beforeUpdate(){
    alert("Are you sure to see this??")
  },

  updated(){
    alert("Its ok")
  }
}
</script>

<style scoped>


</style>
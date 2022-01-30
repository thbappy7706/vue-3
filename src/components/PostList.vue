<template>
<button @click="getPosts">Load Post</button>
  <h1 v-if="errorMessage">{{errorMessage}}</h1>
  <div v-for="post in posts" :key="post.id">
    <h1>{{post.id}}: {{post.title}}</h1>
    <p>{{post.body}}</p>
    <hr/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "PostList",
  data(){
    return{
      posts:[],
      errorMessage:'',
    }
  },

  methods:{
    getPosts(){
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response)=>{
        console.log(response.data)
        this.posts= response.data;
      })
      .catch((error)=>{
        console.log(error)
        this.errorMessage = "Problem to retrieve data"
      })
    }
  }
}
</script>

<style scoped>

</style>
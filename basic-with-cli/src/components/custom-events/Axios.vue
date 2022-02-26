<template>
<h1>Posts</h1><hr/>
  <input type="text" v-model="searchTerm" placeholder="Search title here">
<!--  <div v-for="post in posts" :key="post.id">-->
<!--  for search-->
  <div v-for="post in filterSearch" :key="post.id">
    <h2>{{post.id}}: {{post.title}}</h2>
    <p>{{post.body}}</p>
<!--    {{ $filters.timeFilter(info.time.data) }}-->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Axios",
  data(){
    return{
      posts:[],
      searchTerm: ''
    }
  },

 // for search
  computed:{
       filterSearch(){
         return this.posts.filter(post=>{
            return post.title.match(this.searchTerm)
         })
       }
  },
  methods:{

  },
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(response =>{
      this.posts = response.data
    })
    .catch(error=>{
      console.log(error)
    })
  }
}
</script>

<style scoped>
h1{
  color:red;
}

</style>
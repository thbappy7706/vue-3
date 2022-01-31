<template>
  <div>
    <form @submit.prevent="createPost">
      <label for="userId">Post User Id</label>
      <input type="text" id="userId" v-model="formData.userId">

      <label for="title">Post Title</label>
      <input type="text" id="title" v-model="formData.title">

      <label for="body">Posts Body</label>
      <input type="text" id="body" v-model="formData.body">

      <button>Create Post</button>
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "CreatePost",
  data(){
    return{
      formData :{
        userId:'',
        title:'',
        body: ''
      }
    }
  },
  methods:{
    createPost()
    {
      axios.post('https://jsonplaceholder.typicode.com/posts',this.formData)
      .then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }
  }
}
</script>

<style scoped>

</style>
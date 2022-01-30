<template>
 <h1>Hello</h1>
<CreatePost/>
  <br/>
  <br/>
<PostList/>
  <hr>
  <Parent/>

  <TemplateRef/>


</template>

<script>
import PostList from "@/components/PostList";
import CreatePost from "@/components/CreatePost";
import Parent from "@/components/Parent";
import TemplateRef from "@/components/TemplateRef";

export default  {
  name: 'App',
  components:{
    TemplateRef,
    Parent,
    CreatePost,
    PostList,
  },

  data()
  {
    return {

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

</style>

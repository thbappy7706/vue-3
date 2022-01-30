<template>
 <h1>Hello</h1>
  <Increment/>
  <HoverIncrement/>

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
import Increment from "@/components/Increment";
import HoverIncrement from "@/components/HoverIncrement";

export default  {
  name: 'App',
  components:{
    TemplateRef,
    Increment,
    HoverIncrement,
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

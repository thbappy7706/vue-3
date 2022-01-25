<template>
<!--<Greet userName= "Tanvir Hossen" :profession="profession"/>-->
<!--<Greet userName = "Lokman Hossen"/>-->
<!--<Greet userName = "Rahima Shapla"/>-->
<!--  <Article Title="Article Title" :Likes="50" :isPublished="true"/>-->
<!--  <ComponentC/>-->

  <button @click="popUp=true">Show Popup</button>
<Popup v-show="popUp" @close="popUp=false"/>

</template>

<script>
// import Greet from "@/components/Greet";
// import Article from "@/components/Article";
// import ComponentC from "@/components/ComponentC";
import Popup from "@/components/Popup";
export default  {
  name: 'App',
  components: {
    Popup,
    // Greet
    // Article
    // ComponentC
  },
  data()
  {
    return {
    //   showPopup: false,
    //   greeting: 'Hello!!',
    //   name: "Tanvir Hossen Bappy",
    //   profession: `Software Engineer`,
    //   link : `<a href="#" onclick="alert('Hello!!!')">Please click</a>`,
    //   headingId : '101',
    //   disable :true,
    //   status : `danger`,
    //   isSoldOutMovie: false,
    //   highlightColor: `orange`,
    //   sizeOfText : 50,
    //   styleObject :
    //       {
    //         color: `green`,
    //         fontSize: `50px`,
    //         padding: `1rem`,
    //         fontWeight:`bold`
    //       },
    //   baseStyleObject :
    //       {
    //
    //         padding: `10px`
    //       },
    //
    //   successStyleObject :
    //       {
    //         color:`green`,
    //         backgroundColor:`lightgreen`,
    //         border:`1px solid green`,
    //         borderRadius: `5rem`,
    //       },
    //
    // dangerStyleObject :
    //       {
    //         color:`red`,
    //         backgroundColor:`skyblue`,
    //         border:`1px solid red`,
    //         borderRadius: `5rem`,
    //       },

      popUp:false
    }
  },
  provide: {
    userName:`TanvirBappy`,
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
.textUnderline
  {
    text-decoration: underline;
  }

.isSold
{
  color: olivedrab;
}
.notSold
{
  color: darkred;
}

.badge {
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
}
.badge-success {
  color: #fff;
  background-color: #28a745;
}

.badge-danger {
  color: #fff;
  background-color: darkred;
}
</style>

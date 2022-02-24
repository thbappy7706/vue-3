<template>
  <div id="app">
<h2>{{title}}</h2>
    <NavBar></NavBar>
    <AllFriends :friendDatas="friends" @delete="deleteFriend"/>
    <OnlineFriends :friendDatas="friends"/>
  </div>

</template> 

<script>

import NavBar from "@/components/NavBar";
import AllFriends from "@/components/AllFriends";
import OnlineFriends from "@/components/OnlineFriends";
export default {
  name: 'App',
  components: {
    OnlineFriends,
    AllFriends,
    NavBar,
  },
  data(){
    return{
      title : 'The site is running',
      friends:[
        {name:`Bappy`, status:true},
        {name:`Ashik`, status:false},
        {name:`Shamim`, status:true},
        {name:`Sabbir`, status:false},
        {name:`Milon`, status:true},
        {name:`Raihan`, status:false},
      ]
    }
  },

  methods:{
    deleteFriend(payload){
      // console.log(payload)

      this.friends = this.friends.filter( friend =>{
        return friend.name !== payload.name
      })
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

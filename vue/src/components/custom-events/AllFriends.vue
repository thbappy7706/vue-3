<template>
  <div id="allFriends">
    <h2>All Friends</h2>
    <div v-for="(friend,index) in friendDatas" :key="index">
      <h6 @click="unfriend(friend.name)">{{ friend.name }}</h6>
    </div>


  </div>
</template>

<script>
export default {
  name: "AllFriends",
  props:['friendDatas'],
  methods:{
    unfriend(name){
      this.$emit('delete',{name})
    }
  }
}
</script>

<style scoped>
 #allFriends{
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }
</style>
<template>
  <div id="online">
   <h2>Online Friends</h2>
    <div v-for="(friend,index) in friendDatas" :key="index">
      <h6 v-if="friend.status">{{ friend.name }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineFriends",
  props:['friendDatas']
}
</script>

<style scoped>
 #online{
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;

 }

</style>
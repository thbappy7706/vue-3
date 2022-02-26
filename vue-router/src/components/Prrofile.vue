<template>
<div class="profile">
  <h2>Profile Page</h2>
  <h3>The user id for this page is : {{userId}}</h3>
</div>
</template>

<script>
export default {
  name: "Profile",
  data(){
    return{
       userId :  this.$route.params.user_id
    }
  },
  methods:{
    updateId(){
      this.userId =  this.$route.params.user_id
    }
  },
  watch:{
    $route : 'updateId'
  }
  
}
</script>

<style scoped>
h2 h3{
  color: green;
}

</style>

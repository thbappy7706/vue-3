<template>
  <div>
    <nav>
      <ul>
        <li> <router-link to="/home">Home</router-link></li>
        <li> <router-link to="/contact">Contact</router-link></li>
        <li> <router-link to="/about">About</router-link></li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

nav{
  text-align: center;
}
nav ul{
  padding: 0;
}
nav li{
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 1rem;
}

</style>

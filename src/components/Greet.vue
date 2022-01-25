<template>

  <h2>Hello {{userName}} who is a {{profession}}</h2>

</template>

<script>
export default {
  name: "Greet",
  props : [`userName`,`profession`]
};
</script>

<style scoped>

</style>
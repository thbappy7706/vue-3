<template>
  <button @click="increment"> Count {{value}} Times</button>
</template>

<script>
import Counter from "@/mixins/counter";

export default {
  name: "Increment",
  mixins:[
      Counter
  ]
}
</script>

<style scoped>

</style>
<template>
<h1 @mouseover="increment"> Hover {{value}} Times</h1>
</template>

<script>
import Counter from "@/mixins/counter";

export default {
  name: "HoverIncrement",
  mixins:[
      Counter
  ]
}
</script>

<style scoped>

</style>
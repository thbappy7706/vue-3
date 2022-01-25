<template>
<div>
  <h2>Hello Article </h2>
  <h2>{{Title}}</h2>
  <h2>Likes: {{Likes}}</h2>
  <h2>Published: {{isPublished ? 'Yes' : 'No'}}</h2>
</div>
</template>

<script>
export default {
  name: "Article",
  props:{
    Title: {
      type: String,
      required: true,
      default: `This is a default title`,
    },
    Likes: Number,
    isPublished : Boolean
  }
}
</script>

<style scoped>

</style>
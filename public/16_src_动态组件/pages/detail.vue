<template>
  <ul>
      <li>ID:{{id}}</li>
      <li>TITLE:{{title}}</li>
      <li>CONTENT:{{content}}</li>
  </ul>
</template>

<script>
export default {
    props:["id","title","content"],
    mounted(){
        console.log(this.$route.query)
    }
}
</script>

<style>

</style>
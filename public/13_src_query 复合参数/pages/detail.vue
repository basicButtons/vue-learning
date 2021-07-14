<template>
  <ul>
      <li>ID:{{$route.query.id}}</li>
      <li>TITLE:{{$route.query.title}}</li>
      <li>CONTENT:{{$route.query.content}}</li>
  </ul>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route.query)
    }
}
</script>

<style>

</style>
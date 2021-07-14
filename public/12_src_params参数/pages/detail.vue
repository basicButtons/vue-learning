<template>
  <ul>
      <li>ID:{{$route.params.id}}</li>
      <li>TITLE:{{$route.params.title}}</li>
      <li>CONTENT:{{$route.params.content}}</li>
  </ul>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route.params)
    }
}
</script>

<style>

</style>
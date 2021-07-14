<template>
  <div class="wrapper">
      <h2>{{title}}分类</h2>
      <slot name ="game"></slot>
      <h2>logo</h2>
       <slot name ="food"></slot>
  </div>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style>
    .wrapper{
        height: 1000px;
        display: flex;
        flex-direction: column;
    }
</style>
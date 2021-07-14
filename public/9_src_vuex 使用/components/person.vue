<template>
  <div class="person">
      <h2>Person</h2>
      <h3>{{sum}}</h3>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState(["sum"])
    }
}
</script>

<style>
    .person{
        background-color: grey;
        height: 200px;
    }
</style>
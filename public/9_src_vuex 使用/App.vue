<template>
  <div class="container">
    <Calculate/>
    <Person/>
  </div>
</template>

<script>
import Calculate from "./components/calculate.vue"
import Person from "./components/person.vue"
export default {
  components:{
    Calculate,
    Person
  }
}
</script>

<style>

</style>
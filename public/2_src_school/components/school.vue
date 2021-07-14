<template>
  <div>
      <h3>{{name}}</h3>
      <h2>{{address}}</h2>
      <input type="text" ref="keyword">
     <button @click="get">show</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:"HIT",
            address:"西大直街92号"
        }
    },
    methods:{
        show(){
            console.log(this.$refs.keyword.value)
        },
        get(){
            this.$refs.keyword.focus()
        }
    }
}
</script>

<style>

</style>
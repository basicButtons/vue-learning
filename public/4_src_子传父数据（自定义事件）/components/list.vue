<template>
  <div class="child">
     我是demo组件！
     <button @click="show">
         哈哈哈
     </button>
  </div>
</template>

<script>
export default {
    name:"child",
    methods:{
        show(){
            this.$emit("haha",1)
        }
    }
}
</script>

<style>
.child{
    background-color:skyblue;
    padding: 10px;
    width: 300px;
}
</style>
<template>
  <div class="father">
    <h2>我这边是夫组件</h2>
    <Demo @haha = "test"/>
  </div>
</template>

<script>
import demo from "./components/list.vue"
export default {
  name:"app",
  components:{
    Demo:demo
  },
  methods:{
    test(x){
      console.log("触发了哈哈哈！",x)
    }
  }
}
</script>

<style>
.father{
  background-color: #f1f1f1;
  width:500px;
}
</style>
<template>

  <ul class="todo-main">
       <Item 
        v-for="(obj,index) in todos" 
        :key="obj.id" 
        :todo="obj" 
        :updateTodos="updateTodos" 
        :index="index" 
        :deleteTodo="deleteTodo"
        />
  </ul>

</template>

<script>
import Item from "./item.vue"
export default {
    props:["todos","updateTodos","deleteTodo"],
    components:{
        Item:Item
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>
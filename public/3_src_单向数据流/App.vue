<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <heads :addTodo="addTodo"/>
      <list :todos="todos" :updateTodos="updateTodos" :deleteTodo="deleteTodo"/>
      <foot :todos = "todos" :getAllDone="getAllDone" :clearAll="clearAllDone"/>
    </div>
  </div>
</template>

<script>
import header from "./components/header.vue"
import footer from "./components/footer.vue"
import list from "./components/list.vue"

export default {
  name: "App",
  components: {
    heads:header,foot:footer,list
  },
  data(){
    let data = localStorage.getItem("todos"),
    res = JSON.parse(data)
    return{
      todos:res
    }
  },
  methods:{
    addTodo(obj){
      this.todos.unshift(obj)
    },
    updateTodos(index){
      this.todos[index].done = !this.todos[index].done
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    getAllDone(){
      let isAll = (this.todos.reduce((pre,cur)=>pre+=cur.done?1:0,0) === this.todos.length) && this.todos.length > 0
      console.log("isAll",isAll)
      if(isAll){
        // console.log("make all unchecked")
        this.todos.map(item=>item.done = false)
      }else{
        this.todos.map(item=>item.done = true)
      }
    },
    clearAllDone(){
      this.todos =  this.todos.filter(item => item.done === false)
    }
  },
watch:{
  todos:{
    deep:true,
    handler(value){
      localStorage.setItem("todos",JSON.stringify(value))
    }
  }
},

};
</script>

<style>
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}



</style>

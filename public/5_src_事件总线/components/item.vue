<template>
    <li 
        @mouseenter="changeFlag"
        @mouseleave="changeFlag"
        :class="{'high-light':flag}"
    >
        <label>
        <input type="checkbox" :checked="todo.done" @click="check(index,$event)"/>
        <span>{{todo.name}}</span>
        </label>
        <button :class="{btn:true,'btn-danger':true,show:!flag}" @click="deleteItem(index)">删除</button>
    </li>
</template>

<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    props:["todo","updateTodos","index","deleteTodo"],
    methods:{
        show(){
            console.log(this.todo)
        },
        changeFlag(){
            this.flag = !this.flag
        },
        check(index){
            this.updateTodos(index)
        },
        deleteItem(index){
            this.deleteTodo(index)
        }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}
li button.show{
    display: none;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.high-light{
    background-color: #ddd;
}
</style>
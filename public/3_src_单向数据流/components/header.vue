<template>
  <div class="todo-header">
        <input 
            v-model="name"
            @keyup.enter="add"
            type="text" 
            placeholder="请输入你的任务名称，按回车键确认" 
        />
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:""
        }
    },
    props:["addTodo"]
    ,
    methods:{
        add(){
            if(this.name.trim()){
                console.log(this.name)
                const todo = {id:Date.now(), name:this.name, done:false}
                this.addTodo(todo)
            }else{
                alert("输入不能为空！")
            }
        }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
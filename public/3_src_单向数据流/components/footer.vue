<template>
  <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span> <span>已完成{{finish}}</span> / 全部{{all}} </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    props:["todos","getAllDone","clearAll"],
    methods:{
        clearAllDone(){
            this.clearAll()
        }
    },
    computed:{
        finish(){
            return this.todos.reduce((pre,cur)=>  pre+= cur.done?1:0,0)
        },
        all(){
            return this.todos.length
        },     
        isAll:{
            set(){
                console.log("set")
                this.getAllDone()
            },
            get(){
                return this.finish === this.all && this.all > 0
            }
        }
    },
}
</script>

<style >

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
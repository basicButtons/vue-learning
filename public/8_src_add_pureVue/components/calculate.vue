<template>

  <div>
      <h2>{{sum}}</h2>
       <br>
      <select name="" id="" v-model.number="value">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
     
      <button @click="add">+</button>
      <button @click="sub">-</button>
      <button @click="addOdd">偶数加</button>
      <button @click="addAsync">异步加</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            sum : 0,
            value : 0
        }
    },
    methods:{
        add(){
            console.log("add")
            this.sum += (this.value-0)
        },
        sub(){
            this.sum -= (this.value-0)
        },
        addOdd(){
            if(this.sum/2 === 0){
                this.sum += (this.value - 0) 
            }
        },
        addAsync(){
            setTimeout(()=>{
                this.sum += (this.value-0)
            })
        }
    }
}
</script>

<style>

</style>
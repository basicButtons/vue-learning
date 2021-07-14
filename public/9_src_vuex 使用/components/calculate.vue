<template>

  <div>
      <h2>{{bigSum}}</h2>
       <br>
      <select name="" id="" v-model.number="value">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
     
      <button @click="add(value)">+</button>
      <button @click="sub(value)">-</button>
      <button @click="addOdd">偶数加</button>
      <button @click="addAsync">异步加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from "vuex"
export default {
    data(){
        return {
            value : 0
        }
    },
    methods:{
        // add(){
        //     this.$store.commit("increment",this.value)
        //     this.value = 0
        // },
        // sub(){
        //     this.$store.commit("decrement",this.value)
        //     this.value = 0
        // },
        ...mapMutations({
            add:"increment",
            sub:"decrement"
        }),
        addOdd(){
            if(this.value % 2 === 0 ){
                this.$store.dispatch("JIA",this.value)
                this.value = 0
            }else{
                alert("偶数加")
                this.value = 0
            }
        },
        addAsync(){
            setTimeout(()=>{
                this.$store.dispatch("JIA",this.value)
                this.value = 0
            },500)
        }
    },
    computed: {
        ...mapState({sum:"sum"}),
        ...mapGetters({bigSum : "demo"})
    },
    mounted(){
        console.log(this.$store)
    }

}
</script>

<style>

</style>
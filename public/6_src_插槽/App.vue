<template>
  <div class="father">
    <Catagory title="game">
      <template slot = "game">
        <ul>
          <li v-for="obj in gameList" :key="obj.id">{{obj.id}} -- {{obj.name}} -- {{obj.price}}</li>
        </ul>
      </template>
      <template slot="food">
        <div>
          <img src="./assets/logo.png" alt="">
        </div>
      </template>
    </Catagory>
    <Catagory title="food">
      
    </Catagory>
  </div>
</template>

<script>
import Catagory from "./components/Catagory.vue";
export default {
  name:"app",
  components:{
    Catagory
  },
  data(){
    return{
      gameList:[
        {
          id:1,name:"lol",price:100
        },
        {
          id:2,name:"dnf",price:200
        },
        {
          id:3,name:"cf",price:300
        },
        {
          id:4,name:"python",price:400
        }
      ]
    }
    
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
  width:100%;
  display: flex;
  justify-content: space-around;
}
</style>
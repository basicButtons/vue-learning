<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;<button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            keyword : ""
        }
    },
    methods:{
        search(){
            this.$bus.$emit("get-users",
                    {
                        isLoading:true,
                        ifFirst:false,
                        resList:[],
                        errMsg:""
                    }
                )
        axios.get("http://api.github.com/search/users",{
            params:{
                q:this.keyword
            }
        }).then(
            (response)=>{
                this.$bus.$emit("get-users",
                    {
                        resList:response.data.items,
                        isLoading:false,
                        errMsg:"",
                        isFirst:false
                    }
                )
            },
            (err)=>{
                console.log(err.message)
                this.$bus.$emit("get-users",
                    {
                        isLoading:false,
                        errorMsg:err.message,
                        resList:[],
                        ifFirst:false
                    }
                )
            }
        )
        }
    }
}
</script>

<style>

</style>
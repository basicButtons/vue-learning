<template>
    <div class="row">
        <div v-show="isFirst">
            <h2>Welcome!</h2>   
        </div>
        <div v-show="isLoading">
            <h2>IsLoading!</h2>    
        </div>
        <div v-show="errMsg.length > 0">{{errMsg}}</div>
        <div v-show="resList.length > 0" class="card" v-for="obj in resList" :key="obj.id">
            <a :href="obj.avatar_url" target="_blank">
                <img :src="obj.avatar_url" style='width: 100px' />
            </a>
            <p class="card-text">reactjs</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            resList:[],
            isFirst:true,
            isLoading:false,
            errMsg:""
        }
    },
    methods:{
        replace(data){
            console.log("list get data: ",data)
            this.resList = data.resList
            this.isFirst = data.isFirst
            this.isLoading = data.isLoading
            this.errMsg = data.errMsg
        }
    },
    mounted(){
        this.$bus.$on("get-users",this.replace)
    }
}
</script>

<style>

</style>
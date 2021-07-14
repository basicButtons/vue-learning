<template>
    <div>
        <ul>
            <li v-for="obj in arrList" :key="obj.id" >
                <router-link :to="{name:'xiangqing',query:{id:obj.id,title:obj.title,content:obj.content}}" >{{obj.title}}--{{obj.content}}</router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr/>
        <router-view />
    </div>
</template>

<script>

export default {
    name:"message",
    data(){
        return {
        arrList:[
            {id:1,title:"message1",content:"hello country!"},
            {id:2,title:"message2",content:"hello country!"},
            {id:3,title:"message3",content:"hello country!"}
        ]}
    }
}
</script>

<style>

</style>
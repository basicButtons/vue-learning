<template>
    <div>
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"news",
    mounted(){
        console.log("news被挂载了！")
    },
    beforeDestroy() {
        console.log("news被销毁了！")
    }
}
</script>

<style>

</style>
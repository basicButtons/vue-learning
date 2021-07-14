<template>
  <div>
    <HEADER/>
    <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
                <router-link class="list-group-item active" to="/about">About</router-link>
                <router-link class="list-group-item" to="/home">Home</router-link>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                    <!-- <ABOUT/>
                    <HOME/> -->
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HEADER from "./pages/header.vue"
// import HOME from "./pages/header.vue"
// import ABOUT from "./pages/header.vue"
export default {
  components:{
    HEADER,
    // ABOUT,
    // HOME
  }
}
</script>

<style>

</style>
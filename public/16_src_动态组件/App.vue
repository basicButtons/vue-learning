<template>
  <div>
    <HEADER/>
    <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
                <router-link class="list-group-item" active-class="active" replace to="/demo">demo</router-link>
                <router-link class="list-group-item" active-class="active" replace to="/home">home</router-link>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                      <router-view/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HEADER from "./pages/header.vue"

export default {
  components:{
    HEADER,

  }
}
</script>

<style>

</style>
import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/index"
Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    store,
    render: h => h(App),
}).$mount('#app')
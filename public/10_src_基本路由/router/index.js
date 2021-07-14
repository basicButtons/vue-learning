import Vue from "vue";
import VueRouter from "vue-router"
import home from "../pages/home.vue"
import about from "../pages/about.vue"
Vue.use(VueRouter)

// 创建一个路由器，管理所有的路由

const router = new VueRouter({
    routes: [{
            path: "/home",
            component: home
        },
        {
            path: "/about",
            component: about
        }
    ]
})

export default router
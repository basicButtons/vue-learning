import Vue from "vue";
import VueRouter from "vue-router"
import news from "../pages/news.vue"
import message from "../pages/message.vue"
import home from "../pages/home.vue"
import demo from "../pages/demo.vue"
import detail from "../pages/detail.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: "/home",
            component: home,
            children: [{
                    path: "message",
                    component: message,
                    children: [{
                        path: "detail",
                        // query参数无需声明
                        // 同时接受 params 和 query 的时候，需要先去声明 params 然后后面接上 query 参数
                        component: detail,
                        name: "xiangqing"
                    }]
                },
                {
                    path: "news",
                    component: news
                }
            ]
        },
        {
            path: "/demo",
            component: demo
        }
    ]
})

export default router
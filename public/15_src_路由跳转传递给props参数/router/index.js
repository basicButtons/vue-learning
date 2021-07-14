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
                        path: "detail/:id/:title/:content",
                        // query参数无需声明
                        // 同时接受 params 和 query 的时候，需要先去声明 params 然后后面接上 query 参数
                        component: detail,
                        name: "xiangqing",
                        props: true
                            // 映射 params 参数为 props 

                        // props(route) {
                        //     // 这里面的 route 为 vc 或者 vm 中的参数。
                        //     // 这样的话，我们可以通过解构赋值的方式，来获取到请求中的 query 和 params 然后通过返回给 props
                        // }

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
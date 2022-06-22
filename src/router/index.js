import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../views/main/Home.vue'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            children:[
                {
                    path: '',
                    name: "Home",
                    component: Home,
                    meta:{
                        isLogin: true
                    }
                },
                {
                    path: '/params',
                    name: "Params",
                    component:()=>import("../views/main/Params.vue"),
                    meta:{
                        isLogin: true
                    }
                },
                {
                    path: '/product',
                    name: "Product",
                    component:()=>import("../views/main/Product.vue"),
                    meta:{
                        isLogin: true
                    }
                },
                {
                    path: '/category',
                    name: "ADCategory",
                    component:()=>import("../views/main/ADCategory.vue"),
                    meta:{
                        isLogin: true
                    }
                }
            ]
        },
        {
            path: '/login',
            name: "Login",
            component:()=>import("../views/Login.vue")
        }
    ]
})

export default router
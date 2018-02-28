import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由和组件
import Login from '../component/login/login.vue'
import Admin from '../component/admin/Admin.vue'
import Shopcart from '../component/admin/shopcart/Shopcart.vue'

//使用路由
Vue.use(VueRouter)
//购物车页面路由配置
const shopcart = [
    //这是子路由
    {name:'shopcart',path:'shopcart',component:Shopcart}
]
export default new VueRouter ({
    routes: [
        //登陆
        { name: 'login', path: '/login', component:Login},
        //后台管理
       {name:'admin',path:'/admin',component:Admin,children:[...shopcart]},
    ]
})
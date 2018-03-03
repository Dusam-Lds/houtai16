import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由和组件
import Login from '../component/login/login.vue'
import Admin from '../component/admin/Admin.vue'
import Order from '../component/admin/order/Order.vue'

//引入商品模板的相关组件
import GoodsList from '../component/admin/goods/list/List.vue'
import GoodsDetail from '../component/admin/goods/detail/Detail.vue'
import GoodsComment from '../component/admin/goods/comment/Comment.vue'
//使用路由
Vue.use(VueRouter)
//admin的子路由=》商品路由的相关页面
const goods = [
    //这是子路由
    { name: 'goodList', path: 'goods/list', component: GoodsList},
    { name: 'goodDetail', path: 'goods/detail:id', component: GoodsDetail},
    { name: 'goodComment', path: 'goods/comment', component: GoodsComment}
]
export default new VueRouter ({
    routes: [
        //登陆
        { name: 'login', path: '/login', component:Login},
        //后台管理
       {name:'admin',path:'/admin',component:Admin,children:[...goods]},
    ]
})
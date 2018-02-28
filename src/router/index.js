import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由和组件
import Login from '../component/login/login.vue'
import Register from '../component/register/register.vue'

//使用路由
Vue.use(VueRouter)
export default new VueRouter ({
    routes: [
        { name: 'login', path: '/login', component:Login},
       {name:'register',path:'/register',component:Register} 
    ]
})
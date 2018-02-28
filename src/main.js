import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import App from './component/App.vue'//引入脚本和App

import axios from 'axios'
import api,{domain} from './js/api.js'


Vue.use(ElementUI)
//配置默认域名，这样请求的时候就不用在url里每次手动加域名
axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;
//为了方便，把axios和api添加到Vue原型，将来vue组件就可以直接使用
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

import vueRouter from './router/index.js'
new Vue({
    el: '#app',
    router: vueRouter,
    render: createElement => createElement(App)
})
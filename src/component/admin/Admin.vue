<template>
    <div>
        <!-- 3 使用组件 -->
        <app-header></app-header>
        <app-aside></app-aside>
        <router-view></router-view>
    </div>
</template>

<script>
    //1 引入组件
    import Header from './subcom/Header.vue'
    import Aside from './subcom/Aside.vue'
    export default {
        //2 注册子组件
        components: {
            appHeader: Header,
            appAside: Aside
        }
    }
</script>

<style scoped>

</style>
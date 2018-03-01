<template>
    <div class="admin">
        <!-- 公共部 -->
        <el-container>
            <el-header>Header</el-header>
            <el-container class="admin_content">
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <router-view>main</router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
//1 引入组件
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
export default {
  //2 注册子组件
  components: {
    appHeader: Header,
    appAside: Aside
  }
};
</script>

<style scoped lang="less">
    .admin {
        height: 100%;
    }
    .el-header {
        height: 60px;
        background:#ccc;
    }
    .el-container {
        height: 100%;
        background: red;
        
    }
    //在less中，对上级选择器的引用
    &_content {
        
        
    }
    .el-aside {
        height: 100%;
        background: papayawhip;
    }
    
</style>
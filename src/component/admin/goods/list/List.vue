<template>
    <div class="list">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-buttom:20px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            
        </el-breadcrumb>
        <section class="list_btns">
            <el-button type="info" size="small" plain>新增</el-button>
            <el-button type="info" size="small" plain>全选</el-button>
            <el-button type="info" size="small" plain>删除</el-button>
            <div class="list_btns_right">
                <el-input size="small" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
    .list {
        &_btns {
            margin-top: 20px;
            &_right {
                float: right;
            }
        }
    }
</style>
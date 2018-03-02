<template>
    <div>
        <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.title}}</span>
                </template>

                <el-menu-item v-for="subitem in item.children" :key="subitem.title" :index="subitem.title">
                    <router-link :to="subitem.path">{{subitem.title}}</router-link>
                </el-menu-item>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "商品管理",
          children: [
            { title: "内容管理", path: "/admin/goods/list" },
            { title: "类别管理", path: "/admin/goods/category" },
            { title: "评论管理", path: "/admin/goods/comment" }
          ]
        },
        {
          title: "订单管理",
          children: [
            { title: "内容管理", path: "/admin/a" },
            { title: "类别管理", path: "/admin/b" },
            { title: "评论管理", path: "/admin/c" }
          ]
        }
      ]
    }
  }
};
</script>

<style scoped>

</style>
<template>
    <div>
        {{msg}}
        <router-view></router-view>
        <el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
        </el-switch>
    </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "aa脚手架测试",
      value4: true
    }
  },
  created() {
    this.$http.get(this.$ai.logout).then(()=>console.log('退出登陆'))
  }
};
</script>

<style>

</style>



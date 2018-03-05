<template>
    <div class="detail">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-buttom:20px">
            <el-breadcrumb-item :to="{ path:'/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/admin' }">商品管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'GoodsList' }">商品列表</el-breadcrumb-item>

        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="80px" class="detail_form" labelPosition="left">
            <el-form-item label="内容标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="副标题">
                <el-input v-model="form.sub_title"></el-input>
            </el-form-item>
            <el-form-item label="所属类别">
                <el-select v-model="form.category_id" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            
            <el-form-item label="是否发布">
                <el-switch v-model="form.status"></el-switch>
            </el-form-item>
            <el-form-item label="推荐类型">
                <el-switch v-model="form.is_slide" active-text="轮播图"></el-switch>
                <el-switch v-model="form.is_top" active-text="置顶"></el-switch>
                <el-switch v-model="form.is_hot" active-text="推荐"></el-switch>
            </el-form-item>
            
            <el-form-item label="上传封面">
                 <el-input v-model="form.a">form.imgList</el-input>
            </el-form-item>
            <el-form-item label="上传附件">
                 <el-input v-model="form.a">form.fileList</el-input>
            </el-form-item>
            <el-form-item label="商品货号">
                 <el-input v-model="form.goods_no"></el-input>
            </el-form-item>
            <el-form-item label="库存数量">
                 <el-input v-model="form.stock_quantity"></el-input>
            </el-form-item>
            <el-form-item label="市场价格">
                 <el-input v-model="form.market_price"></el-input>
            </el-form-item>
            <el-form-item label="销售价格">
                 <el-input v-model="form.sell_price"></el-input>
            </el-form-item>
            <el-form-item label="内容摘要">
                 <el-input v-model="form.zhaiyao"></el-input>
            </el-form-item>
            <el-form-item label="详细内容">
                <!-- 为什么这行代码不出效果？？？？？？？？？？？？？？？？？？？？？？？？？？？？ -->
                 <!-- <el-input v-html="form.content"></el-input> -->
                 <div v-html="form.content"></div>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="$router.go(-1)">返回上一页</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      //页面一跳转就要拿到从url的id传过来的数据
      id: this.$route.params.id,
    };
  },
  methods: {
      //获取商品数据
      getGoods() {
          this.$http.get(this.$api.gsDetail + this.id).then(res=>{
              if(res.data.status==0) {
                  this.form = res.data.message;
              }
          })
      },
    //保存按钮
    onSubmit() {}
  },
  created() {//页面加载完之后就坐执行
    //   console.log(this.$route.params.id,);
      this.getGoods();
  }
  
};
</script>

<style scoped lang="less">
.detail {
  &_form {
    margin-top: 30px;
    width: 700px;
  }
}
</style>
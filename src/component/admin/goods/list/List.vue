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
            <el-button type="info" size="small" plain @click="del">删除</el-button>
            <div class="list_btns_right">
                <el-input size="small" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="apiQuery.searchvalue" @blur="search"></el-input>
            </div>
        </section>
        <el-table ref="multipleTable" :data="tableData3" style="width: 100%" @selection-change="change">
             
             <!-- type为selection, 即多选框 -->
             <el-table-column type="selection" width="55"></el-table-column>
 
             <!-- label用来设置当前列的表头 -->
             <!-- 里面的template用来自定义表格中的内容与数据, 相比较prop属性的方式, 更加灵活, 可以对数据进行标签包裹 -->
             <el-table-column label="标题">
                 <template slot-scope="scope">
                     <router-link style="color: #666;" :to="{ name: 'goodsDetail' }">{{ scope.row.title }}</router-link>
                 </template>
             </el-table-column>
 
             <!-- 当前列要展示对象中的那个字段的值, 就配置prop属性为那个字段名 -->
             <el-table-column prop="categoryname" label="所属类别" width="120"></el-table-column>
             
             <!-- 当前列要展示对象中的那个字段的值, 就配置prop属性为那个字段名 -->
             <el-table-column prop="stock_quantity" label="库存" width="120" show-overflow-tooltip></el-table-column>
 
             <el-table-column prop="market_price" label="市场价" width="120" show-overflow-tooltip></el-table-column>
 
             <el-table-column prop="sell_price" label="销售价" width="120" show-overflow-tooltip></el-table-column>
 
             <el-table-column label="属性" width="120" show-overflow-tooltip>
                 <!-- 注意template要加slot-scope属性 -->
                 <template slot-scope="scope">里面是三个图标</template>
             </el-table-column>
 
             <el-table-column label="操作" width="120" show-overflow-tooltip>
                 <template slot-scope="scope">
                     <router-link style="color: #666;" :to="{ name: 'goodsDetail' }">修改</router-link>
                 </template>
             </el-table-column>
         </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      apiQuery: {
        searchvalue: '',
        pageIndex: 1,
        pageSize: 10
      },
      
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      //被选中的商品数据
      selectedGoodsList:[],
      multipleSelection: []
    };
  }, 
  methods: {
    del() {
      let delIDS = this.selectedGoodsList.map(v=>v.id);
      // console.log(this.selectedGoodsList.map);
      
      this.$http.get(this.$api.gsDel + delIDS).then((res) => {
        if(res.data.status==0) {
          this.getGoodsData();
        }
      })
    },
    change(selection) {
      console.log(selection)
      this.selectedGoodsList = selection;
    },
    search() {
      this.getGoodsData();
    },
    //获取商品数据列表
      getGoodsData() {
        let api = `${this.$api.gsList}?pageIndex=${this.apiQuery.pageIndex}&pageSize=${this.apiQuery.pageSize}&searchvalue=${this.apiQuery.searchvalue}`
          this.$http.get(api).then((res)=>{
              if(res.data.status==0) {
                  this.tableData3 = res.data.message;
              }
          })  
            
      },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  created() {
      this.getGoodsData();
  }
};
</script>

<style scoped lang="less">
.list {
  &_btns {
    margin-top: 20px;
    margin-bottom: 20px;
    &_right {
      float: right;
    }
  }
}
</style>
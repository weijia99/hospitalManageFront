<template>
  <div class="app-container">
  医院设置列表

<!-- 定义条件查询 -->
<el-form :inline="true" class="demo-form-inline">
   <el-form-item>
      <el-input  v-model="searchObj.hosname" placeholder="医院名称"/>
   </el-form-item>
   <el-form-item>
      <el-input v-model="searchObj.hoscode" placeholder="医院编号"/>
   </el-form-item>
   <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
</el-form>


  <!-- banner列表 -->
<el-table
:data="list"
stripe
      style="width: 100%">

<el-table-column type="index" width="50"/>
<el-table-column prop="hosname" label="医院名称"/>
<el-table-column prop="hoscode" label="医院编号"/>
<el-table-column prop="apiUrl" label="api基础路径" width="200"/>
<el-table-column prop="contactsName" label="联系人姓名"/>
<el-table-column prop="contactsPhone" label="联系人手机"/>
<el-table-column label="状态" width="80">
<template slot-scope="scope">
          {{ scope.row.status === 1 ? '可用' : '不可用' }}
</template>
</el-table-column>
<el-table-column label="操作" width="280" align="center">
   <template slot-scope="scope">
      <el-button type="danger" size="mini" 
         icon="el-icon-delete" @click="removeDataById(scope.row.id)"> </el-button>
   </template>
</el-table-column>

</el-table>

<!-- 分页 -->
<el-pagination
  :current-page="current"
  :page-size="limit"
  :total="total"
  style="padding: 30px 0; text-align: center;"
  layout="total, prev, pager, next, jumper"
  @current-change="getList"
  
/>


  </div>
</template>

<script>
import hospset from '@/api/hospset'
// 引入定义js文件
export default ({
  // 1.数据预定义
  data(){
    return{
    current:1,
    limit:1,
    searchObj:{},
    list:[],
    total:-1
    }
  },
  created(){
    // 在页面渲染前调用method获取数据
    
    this.getList()
    // 调用下面代码

  },
  methods:{
    getList(page=1){
      // 默认是第一页，传入page的数值，就查几
      this.current=page
      hospset.getHospSetList(this.current,this.limit,this.searchObj)
        .then(response=>{
          // 返回的数据
          console.log(response)
          this.list = response.data.records
          this.total=response.data.total
        }

        )//请求成功
        .catch(error=>{
          console.log(error)
        })//请求失败
    },
    // 删除医院现实
    removeDataById(id) {
      this.$confirm('此操作将永久删除医院是设置信息, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
          }).then(() => { //确定执行then方法
        //调用接口
        hospset.deleteHospSet(id)
          .then(response => {
              //提示
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              //刷新页面
              this.getList(1)
          })
       })
    }

  }
  
})
</script>

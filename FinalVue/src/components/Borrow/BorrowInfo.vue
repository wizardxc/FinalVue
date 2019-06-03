<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top: 40px;"  :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <el-table-column
      prop="id"
      label="借阅编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="bname"
      label="书名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="bid"
      label="书号">
    </el-table-column>
    <el-table-column
      prop="uname"
      label="借阅者姓名">
    </el-table-column>
    <el-table-column
      prop="uid"
      label="借阅者编号">
    </el-table-column>
    <el-table-column
      prop="btime"
      label="借阅时间">
    </el-table-column>
    <el-table-column
      prop="etime"
      label="应归还时间">
    </el-table-column>
    <el-table-column
      prop="status"
      label="书本状态">
    </el-table-column>

      <el-table-column
        align="center"
      label="操作">
        <template slot-scope="scope">


          <el-button  @click.native.prevent="handleEdit(scope.$index, scope.row)" type="primary" :disabled="scope.row.status === '已归还'">归还书本</el-button>
          <el-button type="danger" @click.native.prevent="deleRow(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>

  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 'F0618-A154',
          bname: '计算机网络',
          bid: '800211',
          uid:'1',
          uname:'xu',
          btime:'2019-06-03 21:44:31',
          etime:'2019-07-03 21:44:31',
          status:'未归还'

        }, {
          id: 'F0618-A155',
          bname: '操作系统',
          bid: '800212',
          uid:'2',
          uname:'chen',
          btime:'2019-06-04 21:44:31',
          etime:'2019-07-04 21:44:31',
          status:'已归还'
        }],

      }
    },
    methods:{
      handleEdit(index,row) {
        row.status='已归还';
        this.$notify({
          title: '成功',
          message: '已经成功归还',
          type: 'success'
        });

      },
      deleRow(index,rows){
        rows.splice(index,1);
      }
    }
  }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

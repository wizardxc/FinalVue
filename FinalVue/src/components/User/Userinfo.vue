<template>
  <div>

    <el-table
      ref="multipleTable"
      @selection-change="handleSelectionChange"

      :data="table.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%;margin-top: 40px;"  :xs="8" :sm="6" :md="4" :lg="3" :xl="1"  :default-sort = "{prop: 'uname', order: 'descending'}">
      <!--<el-table-column type="expand">-->
        <!--<template slot-scope="props">-->
          <!--<el-form label-position="left" inline class="demo-table-expand">-->
            <!--<el-form-item label="书名">-->
              <!--<span>{{ props.row.bname}}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="书本类型">-->
              <!--<span>{{ props.row.type}}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="书本简介">-->
              <!--<span>{{ props.row.remark}}</span>-->
            <!--</el-form-item>-->


          <!--</el-form>-->
        <!--</template>-->
      <!--</el-table-column>-->

      <el-table-column
        fixed
        prop="uid"
        sortable
        label="普通用户编号"

      >
      </el-table-column>
      <el-table-column
        prop="uname"
        sortable
        label="普通会员名"
      >
      </el-table-column>
      <el-table-column
        prop="usex"
        label="性别"
      >
      </el-table-column>
      <el-table-column
        prop="udate"
        label="生日"
      >
      </el-table-column>

      <el-table-column
        prop="uiphone"
        label="联系方式"
      >
      </el-table-column>

      <el-table-column
        prop="uemail"
        label="电子邮箱"
      >
      </el-table-column>

      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>


        <template slot-scope="scope">

          <el-button  @click="handleEdit(scope.$index, scope.row)" type="primary">编辑</el-button>

          <el-button type="danger" @click="dele(scope.$index, scope.row)">删除</el-button>


          <!--编辑界面-->
          <el-dialog title="编辑" :visible.sync="editFormVisible"  :append-to-body="true">
            <el-form :model="ruleForm" label-width="160px" :rules="editFormRules" ref="editForm">
              <el-form-item
                prop="uid"
                label="普通用户编号"
              >

                  <el-input v-model="ruleForm.uid " :disabled="true"></el-input>


              </el-form-item>
              <el-form-item
                prop="uname"
                label="普通会员名"
              >
                <el-input v-model="ruleForm.uname" ></el-input>
              </el-form-item>
              <el-form-item
                prop="usex"
                label="性别"
              >
                <el-input v-model="ruleForm.usex" ></el-input>
              </el-form-item>
              <el-form-item
                prop="udate"
                label="生日"
              >
                <el-input v-model="ruleForm.udate" ></el-input>
              </el-form-item>

              <el-form-item
                prop="uiphone"
                label="联系方式"
              >
                <el-input v-model="ruleForm.uiphone" ></el-input>
              </el-form-item>

              <el-form-item
                prop="uemail"
                label="电子邮箱"
              >
                <el-input v-model="ruleForm.uemail" ></el-input>
              </el-form-item>


              <el-form-item>
                <el-col  style="margin-top: 20px;">
                  <el-button type="primary" @click.native="editSubmit()" :loading="editLoading">提交 </el-button>
                  <el-button @click.native="editFormVisible = false">取消</el-button>
                </el-col>
              </el-form-item>
            </el-form>

          </el-dialog>


        </template>
      </el-table-column>



    </el-table>

    <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="current_change">
      </el-pagination>
    </div>
  </div>
</template>
<style>
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
<script>
  export default {
    inject:['reload'],
    methods: {
      handleEdit: function (index, row) {
        this.editFormVisible = true;
        this.ruleForm = Object.assign({}, row);
      },


      formatter(row, column) {
        return row.address;

      },
      current_change:function(currentPage){
        this.currentPage = currentPage;
      },
      editSubmit:function () {

        this.$axios({
          method:'post',
          url:'/rest/user/edit',
          data:"&uid="+this.ruleForm.uid+"&uname="+this.ruleForm.uname+"&usex=" + this.ruleForm.usex+"&uaddress="+this.ruleForm.uaddress+"&udate="+this.ruleForm.udate+
            "&uiphone="+this.ruleForm.uiphone+"&uemail="+this.ruleForm.uemail
        }).then(res=>{
          this.editFormVisible = false;
          this.$notify({
            title: '成功',
            message: '您已成功修改一条用户信息',
            type: 'success'
          });
          this.reload();
        })
      },
      dele: function (index, row){
        this.ruleForm = Object.assign({}, row);
        this.$confirm('此操作将永久删除该记录,是否继续?','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type: 'warning'
        }).then(()=>{
          this.$axios({
            method:'post',
            url:'/rest/user/dele',
            data:"&uid="+this.ruleForm.uid
          }).then(res=> {

            this.$notify({
              title: '成功',
              message: '您已成功删除一条图书信息',
              type: 'success'
            });
            this.reload();
          })
          //   this.$axios({
          //     method:'post',
          //     url:'rest/admin/'
          //   })
        }).catch(()=>{
          this.$message({
            type:'info',
            message:'已取消删除'
          })
        })
      }

    },


    mounted: function(){
      var _this = this
      this.$axios.get('/rest/userdata')
        .then(function (res) {
          console.log(res);

          _this.tableData = res.data

        })
        .catch(function (error) {
          console.log(error);
        });
      this.$axios.get('/rest/usernum')
        .then(function (res) {
          console.log(res);
          _this.total= res.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    data() {
      return {
        tableData: [],

        search: '',
        multipleSelection: [],
        total: 0,
        pagesize:10,
        currentPage:1,
        editFormVisible:false,
        dialogVisible:false,
        ruleForm: {
          uid: '',
          uname: '',
          usex: '',
          uaddress: '',
          udate:'',
          uiphone:'',
          uemail:'',

        },
      }

    },
    computed:{
      table:function(){
        const search = this.search;
        if (search) {
          console.log('this.tableData', this.tableData)
          return this.tableData.filter(data=> {
            return Object.keys(data).some(key => {
              return String(data[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        console.log('this.tableData', this.tableData)
        return this.tableData
      }
    },

  }
</script>



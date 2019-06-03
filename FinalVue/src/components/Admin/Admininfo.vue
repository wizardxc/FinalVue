<template>
  <div>

    <el-table
      ref="multipleTable"
      @selection-change="handleSelectionChange"

      :data="table.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%;margin-top: 40px;"  :xs="8" :sm="6" :md="4" :lg="3" :xl="1"  :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column
        fixed
        prop="number"
        sortable
        label="管理员编号"

      >
      </el-table-column>
      <el-table-column
        prop="name"
        sortable
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="生日"
      >
      </el-table-column>
      <el-table-column
        prop="iphone"
        label="手机号"
      >
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
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
            <el-form :model="ruleForm" label-width="80px" :rules="editFormRules" ref="editForm">
              <el-form-item label="编号" prop="number" >
                <el-col   >
                  <el-input v-model="ruleForm.number" :disabled="true"></el-input>
                </el-col>

              </el-form-item>
              <el-form-item label="姓名" prop="name" required>
                <el-col   >
                  <el-input v-model="ruleForm.name"></el-input>
                </el-col>

              </el-form-item>
              <el-form-item label="性别" prop="sex" required>
                <el-col   >
                  <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-col>

              </el-form-item>

              <el-form-item label="邮箱" prop="email" required>
                <el-col  >
                  <el-input  v-model="ruleForm.email" ></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="生日" prop="date"required >
                <el-col   >
                  <el-form-item prop="date">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="手机" prop="iphone" required>
                <el-col >
                  <el-input  v-model="ruleForm.iphone" ></el-input>
                </el-col>
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
          url:'/rest/admin/edit',
          data:"&number="+this.ruleForm.number+"&sex="+this.ruleForm.sex+"&name=" + this.ruleForm.name+"&date="+this.ruleForm.date+"&iphone="+this.ruleForm.iphone+
            "&email="+this.ruleForm.email
        }).then(res=>{
          this.editFormVisible = false;
          this.$notify({
            title: '成功',
            message: '您已成功修改一条管理员信息',
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
            url:'/rest/admin/dele',
            data:"&number="+this.ruleForm.number
          }).then(res=> {

            this.$notify({
              title: '成功',
              message: '您已成功删除一条管理员信息',
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
      this.$axios.get('/rest/logindata')
        .then(function (res) {
          console.log(res);

          _this.tableData = res.data

        })
        .catch(function (error) {
          console.log(error);
        });
      this.$axios.get('/rest/adminnum')
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
        // dialogVisible:false,
        ruleForm: {
          number: '',
          name: '',
          sex: '',
          iphone: '',
          date:'',
          email:''
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


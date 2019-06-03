
<template>
  <div class="myadd">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name" required>
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-input v-model="ruleForm.name" ></el-input>
        </el-col>

      </el-form-item>
      <el-form-item label="性别" prop="sex" required>
        <el-col  :xs="4" :sm="4" :md="4" :lg="2" :xl="2" >
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-col>

      </el-form-item>
      <el-form-item label="密码" prop="pass" required>
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" required>
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" required>
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input  v-model="ruleForm.email" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="生日" prop="date"required >
        <el-col  :xs="4" :sm="4" :md="4" :lg="2" :xl="2" >
        <el-form-item prop="date">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
        </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="手机" prop="iphone" required>
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input  v-model="ruleForm.iphone" ></el-input>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col :xs="6" :sm="6" :md="6" :lg="4" :xl="4" style="margin-top: 20px;">
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-col>
      </el-form-item>

    </el-form>
  </div>
</template>
<style>
  .myadd{
    margin-top: 60px;
    margin-left: 20px;

  }
  /*.el-form-item__label{*/
    /*color: #000;*/
    /*font-size: 17pt;*/
  /*}*/
</style>
<script>

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkPhone = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!value) {
          return callback(new Error('电话号码不能为空'))
        }
        setTimeout(() => {


          if (!Number.isInteger(+value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (phoneReg.test(value)) {
              callback()
            } else {
              callback(new Error('电话号码格式不正确'))
            }
          }
        }, 100)
      };
      var checkEmail = (rule, value, callback) => {
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!value) {
          return callback(new Error('邮箱不能为空'))
        }
        setTimeout(() => {
          if (mailReg.test(value)) {
            callback()
          } else {
            callback(new Error('请输入正确的邮箱格式'))
          }
        }, 100)
      };
      return {
        ruleForm: {
          name: '',
          sex: '',
          date: '',
          email: '',
          iphone:'',
          pass: '',
          checkPass: '',
        },

        rules: {
          // name: [
          //   { required: true, message: '请输入姓名', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
          //
          // date: [
          //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          // ],
          // iphone:[
          //   {validator:checkPhone , trigger: 'blur'}
          // ],
          // email:[
          //   {validator:checkEmail,trigger:'blur'}
          // ],
          //
          //
          // pass: [
          //   { validator: validatePass, trigger: 'blur' }
          // ],
          // checkPass: [
          //   { validator: validatePass2, trigger: 'blur' }
          // ],
        }
      };
    },
    methods: {
      submitForm() {
        // this.$axios.$post('/rest/admin/add',{
        //   name:this.ruleForm.name,
        //   sex: this.ruleForm.sex,
        //   date:this.ruleForm.date,
        //   email:this.ruleForm.email,
        //   iphone:this.ruleForm.email,
        //   pass:this.ruleForm.pass
        //
        // }).then(res=>{
        //     alert('ga');
        // })
        this.$axios({
          method:'post',
          url:'/rest/admin/add',
          data:"&name=" + this.ruleForm.name+"&date="+this.ruleForm.date+
            "&email="+this.ruleForm.email+"&sex="+this.ruleForm.sex+"&iphone="+this.ruleForm.iphone,

        }).then(res=>{

          // alert('asd')

        }),
          this.$axios({
            method:'post',
            url:'/rest/admin/add2',
            data:"&name=" + this.ruleForm.name+"&password="+this.ruleForm.pass
          }).then(res=>{
            this.$router.push({path : "/admininfo"});
            // this.$refs[formName].resetFields();
            this.$notify({
              title: '成功',
              message: '您已成功添加一条管理员信息',
              type: 'success'
            });
          })
          // this.$axios({
          //   method:'post',
          //   url:'/rest/admin/add2',
          //   data:"&name=" + this.ruleForm.name+"&password="+this.ruleForm.password
          //
          // }).then(res=>{
          //   // this.$router.push({path : "/test"});
          //   // this.$refs[formName].resetFields();
          //   // this.$notify({
          //   //   title: '成功',
          //   //   message: '您已成功添加一条管理员信息',
          //   //   type: 'success'
          //   // });
          //   // alert('asd')
          //
          // })



      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<template>
  <div class="myadd">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item
        prop="uid"
        label="用户编号"

      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-input v-model="ruleForm.uid " placeholder="请输入用户编号"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="uname"
        sortable
        label="用户名"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-input v-model="ruleForm.uname" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="usex"
        label="性别"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-radio-group v-model="ruleForm.usex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="uaddress"
        label="用户住址"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-input v-model="ruleForm.uaddress" placeholder="请输入地址"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        prop="udate"
        label="用户生日"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-form-item prop="date">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.udate" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item
        prop="uiphone"
        label="用户手机"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-input v-model="ruleForm.uiphone" placeholder="请输入用户手机号"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        prop="uemail"
        label="用户邮箱"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
          <el-input v-model="ruleForm.uemail" placeholder="请输入用户邮箱"></el-input>
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
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } else {
      //     if (this.ruleForm.checkPass !== '') {
      //       this.$refs.ruleForm.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      // var checkPhone = (rule, value, callback) => {
      //   const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
      //   if (!value) {
      //     return callback(new Error('电话号码不能为空'))
      //   }
      //   setTimeout(() => {
      //
      //
      //     if (!Number.isInteger(+value)) {
      //       callback(new Error('请输入数字值'))
      //     } else {
      //       if (phoneReg.test(value)) {
      //         callback()
      //       } else {
      //         callback(new Error('电话号码格式不正确'))
      //       }
      //     }
      //   }, 100)
      // };
      // var checkEmail = (rule, value, callback) => {
      //   const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      //   if (!value) {
      //     return callback(new Error('邮箱不能为空'))
      //   }
      //   setTimeout(() => {
      //     if (mailReg.test(value)) {
      //       callback()
      //     } else {
      //       callback(new Error('请输入正确的邮箱格式'))
      //     }
      //   }, 100)
      // };
      return {
        ruleForm: {
          uid: '',
          uname: '',
          usex: '',
          uaddress: '',
          udate:'',
          uiphone:'',
          uemail:'',

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
          url:'/rest/user/add',
          data:"&uid="+this.ruleForm.uid+"&uname="+this.ruleForm.uname+"&usex="+this.ruleForm.usex+"&uaddress=" + this.ruleForm.uaddress+"&udate="+this.ruleForm.udate+"&uiphone="+this.ruleForm.uiphone+
            "&uemail="+this.ruleForm.uemail

        }).then(res=>{
          this.$router.push({path : "/userinfo"});
          // this.$refs[formName].resetFields();
          this.$notify({
            title: '成功',
            message: '您已成功添加一条普通会员信息',
            type: 'success'
          });
          // alert('asd')

        })


      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


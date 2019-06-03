<template>
  <div class="myadd">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item
        prop="bid"
        label="书本编号"

      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input v-model="ruleForm.bid " placeholder="请输入书本编号"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="bname"
        sortable
        label="书名"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input v-model="ruleForm.bname" placeholder="请输入书名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="author"
        label="作者"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input v-model="ruleForm.author" placeholder="请输入作者"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="press"
        label="出版社"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input v-model="ruleForm.press" placeholder="请输入出版社"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        prop="price"
        label="书本价格"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input v-model="ruleForm.price"placeholder="请输入书本价格" ></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        prop="num"
        label="书本余量"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input v-model="ruleForm.num" placeholder="请输入书本剩余量"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item
        prop="type"
        label="书本类型"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input v-model="ruleForm.type" placeholder="请输入书本类型"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        prop="remark"
        label="书本简介"
      >
        <el-col  :xs="6" :sm="6" :md="6" :lg="4" :xl="4" >
        <el-input  type="textarea" v-model="ruleForm.remark" placeholder="请输入书本简介"></el-input>
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
          bid: '',
          bname: '',
          author: '',
          press: '',
          remark:'',
          price:'',
          type:'',
          num:''
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
          url:'/rest/book/add',
          data:"&bid="+this.ruleForm.bid+"&bname="+this.ruleForm.bname+"&author=" + this.ruleForm.author+"&press="+this.ruleForm.press+"&remark="+this.ruleForm.remark+
            "&price="+this.ruleForm.price+"&type="+this.ruleForm.type+"&num="+this.ruleForm.num

        }).then(res=>{
          this.$router.push({path : "/bookinfo"});
          // this.$refs[formName].resetFields();
          this.$notify({
            title: '成功',
            message: '您已成功添加一条书本信息',
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

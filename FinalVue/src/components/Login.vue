<template>

  <div id="bg" class="bg">

    <div class="login " @keyup.13="doLogin">
      <!--<div class="form-horizontal login">-->
        <!--<div class="logo">My-Albums</div>-->
        <!--<div class="form-group input-group input-group-lg ">-->
          <!--<span class="input-group-addon"><i class="fa fa-user-o" aria-hidden="true"></i></span>-->
          <!--<input type="text" class=" form-control" placeholder="username" v-model="userInfo.userName">-->
        <!--</div>-->
        <!--<div class="form-group input-group input-group-lg">-->
          <!--<span class="input-group-addon"><i class="fa fa-key" aria-hidden="true"></i></span>-->
          <!--<input type="password" class=" form-control" placeholder="password" v-model="userInfo.password">-->
        <!--</div>-->
        <!--<div class="form-group">-->
          <!--<el-button class="form-control" @click="doLogin">登 录</el-button>-->
          <!--&lt;!&ndash;<button class="btn btn-default btn-sm form-control login-btn" @click="doLogin">登 录</button>&ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
      <div class="logo">管理员登陆</div>
      <div class="logo2">
      <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="100px" class="demo-ruleForm">
        <el-form-item  prop="userName"  >
          <el-input v-model="userInfo.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userInfo.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="doLogin">登录</el-button>
          <el-button @click="resetForm('userInfo')">重置</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>

  </div>

</template>

<script>

  import axios from 'axios';
  export default {
    name: 'login',
    data () {
      return {
        userInfo :{
          userName : '',
          password : '',
        },

        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }

    },
    methods : {
      doLogin (){
        if (this.userInfo.userName == ''){
          alert('用户名不能为空');
          return false
        }
        if (this.userInfo.password == ''){
          alert('密码名不能为空');
          return false
        }
      // this.$router.push('/tt')
        this.$axios({
          method:'post',
          url:'/rest/admin/login',
          data:"&username="+this.userInfo.userName+"&password="+this.userInfo.password
        }).then(res=>{

          if(res.data=="success") {
            this.$store.dispatch("userLogin", true);
            //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
            //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
            localStorage.setItem("Flag", "isLogin");
            sessionStorage.setItem('userName',this.userInfo.userName);
            //将用户名放入vuex
            this.$store.dispatch('setUser',this.userInfo.userName);
            this.$notify({
              title: '提示信息',
              message: '登录成功',
              type: 'success'
            });
            this.$router.push({path: '/news'})
          }
          else if (res.data=="failed"){
            this.$notify({
              title : '提示信息',
              message : '账号或密码错误',
              type : 'error'
            });
          }
          // alert(res.data);
          // this.$notify({
          //   title : '提示信息',
          //   message : '账号或密码错误',
          //   type : 'error'
          // });

          // this.editFormVisible = false;
          // this.$notify({
          //   title: '成功',
          //   message: '您已成功修改一条管理员信息',
          //   type: 'success'
          // });
          // this.reload();
        })

        // axios.post('/login',JSON.stringify(this.userInfo))
        //   .then(res => {
        //     console.log(res)
        //     if(res.status == 200){
        //       this.$store.commit('setToken',res.data);
        //       localStorage.userName = this.userInfo.userName;
        //       localStorage.token_expire = res.data.expire;
        //       localStorage.token = res.data.token;
        //       this.$notify({
        //         title : '提示信息',
        //         message : '登录成功',
        //         type : 'success'
        //       });
        //       this.$router.push({path:'/'})
        //     }else {
        //       this.$notify({
        //         title : '提示信息',
        //         message : '账号或密码错误',
        //         type : 'error'
        //       });
        //     }
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted (){
      var wi=window.screen.width;
      var hi=window.screen.height;
      document.getElementById("bg").style.width=wi+"px";
      document.getElementById("bg").style.height=hi+"px";
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css" >
 
  .bg {
  /*background-color: aqua;*/
  background-image: url("../assets/img/background4.jpg");
    /*background-size: 100% auto;*/
    /*padding-top: -60%;*/
    /*height: 0px;*/
    background-repeat: no-repeat;
    /*z-index:-10;*/
    /*zoom: 1;*/
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    min-width: 1000px;
    /*z-index:-10;*/
    zoom: 1;
    background-color: #fff;
    /*background-repeat: no-repeat;*/
    background-size: cover;
    -webkit-background-size: cover;
    /*-o-background-size: cover;*/
    background-position: center 0 ;
  }
  .login {
    position:absolute;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 400px;

  }
  .login-btn {
    background-color: whitesmoke;
  }
  .logo {

    font-family: "DejaVu Sans Mono";
    color: lightblue;
    font-size: 30px;
    margin-left: 20%;
  }
  .logo2{
    margin-top: 10%;
  }
  .el-form-item__label{
    /*color: honeydew;*/
    font-size: 17pt;
  }




</style>

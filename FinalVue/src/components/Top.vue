<template id="top">
  <div>

  <el-header >
    <el-row >
      <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4"><div class="grid-content mytext">
        <div class="mytext2" >图书管理系统</div>

      </div></el-col>

      <el-col    :xs="12" :sm="6" :md="8" :lg="14" :xl="14" >
        <div class="grid-content bg-purple-light"  >
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">创建</el-menu-item>
              <el-menu-item index="2-2">修改</el-menu-item>

              <el-submenu index="2-3">
                <template slot="title">删除</template>
                <el-menu-item index="2-3-1">选项1</el-menu-item>
                <el-menu-item index="2-3-2">选项2</el-menu-item>
                <el-menu-item index="2-3-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" >消息中心</el-menu-item>
            <el-menu-item index="4">市场管理</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col  :xs="12" :sm="6" :md="8" :lg="6" :xl="6">

        <div class="grid-content bg-purple test">
          <div class="myimage" >
            <div class="myimage2"> <el-image :src="url" > </el-image></div>

          </div>


          <div class="test2">
            <div class="text">用户名:{{this.$store.state.currentUser}}</div>
            <div style="margin-left: 10%;width: 100px">
            <el-dropdown>
      <span class="el-dropdown-link " >
        权限管理<i class="el-icon-arrow-down el-icon--right"></i>
      </span>

              <el-dropdown-menu slot="dropdown">
                <!--<el-dropdown-item icon="el-icon-plus" @click.native="updatepass">修改密码</el-dropdown-item>-->
                <el-dropdown-item icon="el-icon-circle-plus" @click.native="swit">切换账户</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline" @click.native="cance">注销账户</el-dropdown-item>

              </el-dropdown-menu>

            </el-dropdown>
            </div>


          </div>
        </div></el-col>
    </el-row>


  </el-header>
  </div>
</template>

<script>
    export default {
        name: "Top",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          editFormVisible:false,
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClick() {
          alert('button click');
        },
        swit(){

          localStorage.removeItem("Flag");
          this.$router.push("/");
        },
        cance(){

          localStorage.removeItem("Flag");
          this.$router.push("/");

        },
        updatepass(){
          this.editFormVisible = true;
        }
      }
    }

</script>

<style scoped>
  .mytext{

    color: #ffd04b;
    font-size: 17pt;
    background: #545c64;

  }
  .mytext2{
    padding-top: 15px;

  }
  .bg-purple {
    background: #545c64;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {

    min-height: 60px;
  }

  .myimage{
    width: 11%;
    height: 11%;





    position: absolute;
    top: 18%;
    left: 60%;

    text-align: center;

  }
  .myimage2{
    border-radius: 50%;
    overflow: hidden;

  }
  .test{
    position: relative;
  }
  .test2{
    position: absolute;
    left: 75%;

    top: -40%;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #ffd04b;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .text{
    margin-top: 40%;

    color: #ffffff;
  }
</style>

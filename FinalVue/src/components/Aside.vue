<template>
<div style="margin-left:40px ;width: 200px;"  class="hidden-xs-only " >
  <!--<el-menu-->
    <!--default-active="2"-->
    <!--class="el-menu-vertical-demo"-->

    <!--@close="handleClose"-->
    <!--@select="handleSelect"-->
    <!--background-color="#545c64"-->
    <!--text-color="#fff"-->
    <!--active-text-color="#ffd04b">-->
    <!--<el-submenu >-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-user-solid"></i>-->
        <!--<span>人员管理</span>-->
      <!--</template>-->
      <!--<el-menu-item-group>-->

        <!--<el-menu-item index="1-1" >人员信息</el-menu-item>-->
        <!--<el-menu-item index="1-2">人员添加</el-menu-item>-->
      <!--</el-menu-item-group>-->


    <!--</el-submenu>-->
    <!--<el-submenu >-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-collection"></i>-->
        <!--<span>图书管理</span>-->
      <!--</template>-->
      <!--<el-menu-item-group>-->

        <!--<el-menu-item index="2-1">图书信息</el-menu-item>-->
        <!--<el-menu-item index="2-2">图书添加</el-menu-item>-->
      <!--</el-menu-item-group>-->


    <!--</el-submenu>-->
    <!--<el-submenu >-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-notebook-2"></i>-->
        <!--<span>借阅管理</span>-->
      <!--</template>-->
      <!--<el-menu-item-group>-->

        <!--<el-menu-item index="3-1">借阅信息</el-menu-item>-->
        <!--<el-menu-item index="3-2">借阅添加</el-menu-item>-->
      <!--</el-menu-item-group>-->


    <!--</el-submenu>-->
    <!--<el-submenu>-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-message"></i>-->
        <!--<span>后台记录</span>-->
      <!--</template>-->
    <!--</el-submenu>-->


  <!--</el-menu>-->
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
           unique-opened router v-show="!collapsed">
    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
      <el-submenu :index="index+''" v-if="!item.leaf">
        <template slot="title"><i class="el-icon-s-tools"></i>{{item.name}}</template>
        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
    </template>
  </el-menu>

</div>
</template>
<style>



</style>
<script type="text/ecmascript-6">

  export default {
    data(){
      return {


      }
    },

    methods:{
      handleIconClick(ev) {
        console.log(ev);
      },

      handleSelect(key, keyPath){
        // switch(key){
        //   case '1-1':
        //     this.$router.push('/test');
        //
        //     break;
        //   case '1-2':
        //     this.$router.push('/bbb')
        //
        //     break;
        //   case '3':
        //     this.$router.push('/Page3')
        //
        //     break;
        // }
      },

    },

  }
</script>


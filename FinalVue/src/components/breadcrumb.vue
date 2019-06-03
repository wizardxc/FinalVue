<template>
  <div>
  <section class="content-container">
    <div class="grid-content bg-purple-light">
      <el-col :span="24" class="breadcrumb-container">
        <!--<strong class="title">{{$route.name}}</strong>-->
        <el-breadcrumb separator="/" class="breadcrumb-inner">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <!--<el-col :span="24" class="content-wrapper">-->
        <!--<transition name="fade" mode="out-in">-->
          <!--<router-view></router-view>-->
        <!--</transition>-->
      <!--</el-col>-->
    </div>
  </section>
  </div>
</template>
<style>
  .content-container {

    flex: 1;


    padding: 20px;
  }
  .breadcrumb-container {

  }
  .title {
    width: 200px;
    float: left;
    color: #475669;
      }
  .breadcrumb-inner {
    float:left;
    color: royalblue;
    font-size: 20pt;
  }

  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }

</style>
<script>
  export default{
    data(){
      return {

      }
    },

  }
</script>

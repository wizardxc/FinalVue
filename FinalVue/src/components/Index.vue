<template>
  <el-container direction="vertical">
    <el-header >
      <top/>
    </el-header>

    <el-container>


        <NavMenu ></NavMenu>



      <el-container>

      <el-main >
        <bread ></bread>

        <transition name="fade" mode="out-in">

          <router-view></router-view>
        </transition>



      </el-main>

      <el-footer >
        <p>Copyright 图书管理有限公司 created by：徐宸 杨洪涛 郝润泽 (12)456-7800 </p>

      </el-footer>
      </el-container>
    </el-container>







  </el-container>
</template>

<script>
  import NavMenu from "./Aside";
  import bread from './breadcrumb'
  import top from './Top';

    export default {
    components:{
     top,
      NavMenu,
      bread
    },
        name: "Index",
      data() {
        return {



          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',


        };
      },
      methods: {
        handleSelect(key, keyPath) {
          this.breads=keyPath;
        },
        handleClick() {
          alert('button click');
        }
      }
    }

</script>

<style scoped>
.el-container{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }


/*.el-aside {*/
  /*display: block;*/
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 70px;*/
  /*bottom: 0;*/

/*}*/


</style>

<template>
  <div>
    <el-row>
    <div class="top">



        <el-col :span="14" >

          <p ><i class="el-icon-search"></i> 最新资讯</p>
          <div >
          <el-carousel :interval="3000" arrow="always">
            <el-carousel-item v-for="item in imagesbox" :key="item.id" style="height: 85%;width: 100% ;" >
              <img :src="item.idView" class="image">
            </el-carousel-item>
          </el-carousel>
          </div>
        </el-col>
      <el-col :span="10" >
        <div class="top-right">
          <p><i class="el-icon-date"></i> 最新公告</p>

          <label class="gray_line"></label>
          <div class="news">
            <p id="news1"><i class="el-icon-edit"></i>06.29 《创业数字图书馆》使用方法培训</p>
            <p id="news2"><i class="el-icon-edit"></i>06.28 中国报纸资源全文数据库资源介绍</p>
            <p id="news3"><i class="el-icon-edit"></i>06.28  维普考试服务平台使用技巧培训</p>
            <p id="news4"><i class="el-icon-edit"></i>06.27  正保远程多媒体资源库使用方法培训</p>
            <p id="news5"><i class="el-icon-edit"></i>06.27  智课教育“旅游英语”主题讲座之购物篇</p>
            <p id="news6">更多 ></p>
          </div>
        </div>
      </el-col>
    </div>
    </el-row>
    <div class="bottom">
      <el-row>
        <el-col :span="14">
          <div class="bottom-left">
            <p><i class="el-icon-s-grid"></i> 最新资源</p>
          </div>
          <div style="margin-top: 7%;margin-left: 8%;">
            <img :src="imgUrl" style="max-width: 40%;max-height: 30%">
            <img :src="imgUrl2" style="max-width: 40%;max-height: 30%;margin-left: 5%">
            <img :src="imgUrl3" style="width: 40%;max-height: 30%">
            <img :src="imgUrl4" style="max-width: 40%;max-height: 30% ;margin-left: 5%">
          </div>


        </el-col>
        <el-col :span="10">
          <div class="bottom-right">
            <p><i class="el-icon-phone"></i> 联系方式</p>
            <label class="gray_line"></label>
            <div style="margin-top: 100px ;color: black">
              <p style="font-size: 18pt;"><i class="el-icon-info"></i>线上处理时间</p>
              <p style="font-size: 14pt;">周一至周五 9:00-11:30 13:00-16:30</p>
              <p style="font-size: 18pt;" ><i class="el-icon-location-outline"></i>办公地址</p>
              <p style="font-size: 14pt;">上海市徐汇区淮海中路1555号</p>
              <p style="font-size: 18pt;"><i class="el-icon-phone-outline"></i>联系方式</p>
              <p style="font-size: 14pt;">(021)64455555</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>

</template>

<style>
  .bottom{
    text-align: left;
    color:dodgerblue;
    font-size: 25pt;
    margin-left: 3%;
  }
  .bottom-right{
    margin-left: 5%;

  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .top{
    margin-top: 0%;
    margin-left: 3%;
    text-align: left;
    color:dodgerblue;
    font-size: 25pt;
  }

  .gray_line {
    background: #e5e5e5;
    width: 100%;
    height: 2px;
    float: left;
    /*margin: 10px 5px;*/
  }
  .top-right{
    margin-left: 5%;
  }
  .news{
    color: #414141;
    text-align: left;
    font-size: 16pt;
  }
  .news:nth-child(n){
    margin-top: 5%;
  }
  #news1:hover
  {
    color: red;
    font-size: 18pt;
  }
  #news2:hover
  {
    color: red;
    font-size: 18pt;
  }
  #news3:hover
  {
    color: red;
    font-size: 18pt;
  }
  #news4:hover
  {
    color: red;
    font-size: 18pt;
  }
  #news5:hover{
    color: red;
    font-size: 18pt;
  }
  #news6{
    font-size: 22pt; color: dodgerblue;
  }
  #news6:hover{
    font-size: 24pt;
  }


</style>
<script>
  export default{
    data(){
      return {
        bannerH:0,

      imagesbox:[{id:0,idView:require("../assets/img/1.jpg")},     
        {id:1,idView:require("../assets/img/2.png")},

        {id:2,idView:require("../assets/img/3.jpg")}],

        imgUrl:require("../assets/ziyuan/1.jpg"),
        imgUrl2:require("../assets/ziyuan/2.jpg"),
        imgUrl3:require("../assets/ziyuan/3.jpg"),
        imgUrl4:require("../assets/ziyuan/4.jpg")
    }




      },
    methods:{
      setBannerH(){
        this.bannerH = document.body.clientWidth / 4
      }
    },
    mounted(){
      this.setBannerH()
      window.addEventListener('resize', () => {
        this.setBannerH()
      }, false)
    },
    created(){}


  }
</script>


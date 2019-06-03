<template>
  <div>

<el-row>
  <el-col :span="12" style="margin-left: 5%;margin-top: 3%;">
  <div id="echartContainer" style="width: 550px ;height: 500px">
  </div>
    <div id="echartContainer2"  style="width: 550px;height: 400px" ref="chart"
    >
    </div>
  </el-col>
  <el-col :span="6"style="margin-top: 3%; ">
    <div id="echartContainer3"  style="width: 500px;height:900px" ref="chart2"></div>
  </el-col>
</el-row>


  </div>
</template>

<script type="javascript">
  import {option} from '../BackStage/aysnc-barChart-option'
  import {option2} from "../BackStage/Doughnut-Chart";
  import {option3} from "./Basic-Line-Chart";

  var echarts = require('echarts')
    export default {
        name: "Test",
      data(){
          return{
      }
      },
      methods:{
        drawBarChart(){
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('echartContainer'));

          // 绘制基本图表
          myChart.setOption(option);

          this.$axios.get('/rest/booktype_num_data')
            .then(function (res) {
              console.log(res.data);
              myChart.hideLoading();
              var a=res.data;
              var json=[];
              for (var i in a){
                json[i]=a[i].name;
              }
              // console.log(json)
             // option.series.data=res.data;
              myChart.setOption({

                series: [{
                  data:
                   res.data,
                }],
                legend:[{
                  data:json

                }]
              })

            })
            .catch(function (error) {
              console.log(error);
            });



        },
        drawBarChart2(){
          var myChart = this.$refs.chart;
          let myChart2 =  echarts.init(myChart)

          myChart2.setOption(option2);
          this.$axios.get('/rest/bookdata')
            .then(function (res) {
            var a =res.data;

              var json = [];
              var json2=[];
              for (var i in a){
                var row1 = {};
                row1.value= a[i].num;

                row1.name = a[i].bname;
                json.push(row1);
              }
              for (var i in a){
                json2[i]=a[i].bname;
              }


              myChart2.hideLoading();
              myChart2.setOption({
                  series: [{
                    data:
                    json
                  }],
                legend:[{
                    data:json2
                }]

              })


            })
            .catch(function (error) {
              console.log(error);
            });
        },
        drawBarChart3(){
          var myChart2 = this.$refs.chart2;
          let myChart3 =  echarts.init(myChart2);
          myChart3.setOption(option3);
          this.$axios.get('/rest/numdata')
            .then(function (res) {
              var a =res.data;

              var json = [];
              json[0]=a[0].adminnum;
              json[1]=a[0].booknum;
              json[2]=a[0].usernum;


              myChart3.hideLoading();
              myChart3.setOption({
                series: [{
                  data:
                  json
                }],


              })


            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },

      mounted() {
        //调用drawBarChart()
        this.drawBarChart();
        this.drawBarChart2();
        this.drawBarChart3();
      }


    }
</script>

<style scoped>

</style>

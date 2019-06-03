export const option3= {
  title:{
    text: '数量分布图',

    x:'center'
  },

  xAxis: {
    type: 'category',

    data: ['管理员数目','书本总类','用户总数']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [],
    type: 'line'
  }]
};

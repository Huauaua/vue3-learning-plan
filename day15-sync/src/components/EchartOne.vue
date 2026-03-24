<script lang="ts">
import {defineComponent} from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  name: "EchartOne",
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const myChart = echarts.init(document.querySelector('.chart-container'))
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      myChart.setOption(option)
    }
  }
})
</script>

<template>
  <div class="chart-container"></div>
</template>

<style scoped>
  .chart-container{
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    margin: 0 auto;
    border-radius: 5px;
  }
</style>
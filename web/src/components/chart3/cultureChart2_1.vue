<template>
  <div class="Echart2">
    <div
      id="culecharts2_1"
      style="width: 100%; height: 180px; margin-left: 10px"
    ></div>
  </div>
</template>

<script>
export default {
  name: "cultureChart2_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("culecharts2_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        // title: {
        //   text: "Stacked Line",
        // },
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
        },
        legend: {
          padding: [15, 0, 0, 0],
          data: ["农家乐", "酒店", "民宿"],
        },
        grid: {
          // top:"1%",
          left: "3%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            // saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月"],
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}",
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10
          },
          name: "月收入（万元）",
          nameTextStyle:{
              padding:[0,0,0,40],
          },
          min: 0,
          max: 500,
        },
        series: [
          {
            // itemStyle : { normal: {label : {show: true}}},
            name: "农家乐",
            type: "line",
            // stack: "Total",
            data: [20, 15, 150, 384, 400],
          },
          {
            // itemStyle : { normal: {label : {show: true}}},
            name: "酒店",
            type: "line",
            // stack: "Total",
            data: [6, 2, 30, 100, 156],
          },
          {
            // itemStyle : { normal: {label : {show: true}}},
            name: "民宿",
            type: "line",
            // stack: "Total",
            data: [4, 2, 20, 40, 150],
          },
        ],
      };

      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style>
</style>
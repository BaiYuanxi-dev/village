<template>
  <div class="Echarts">
    <div id="culecharts4_2" style="width: 100%; height: 240px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "cultureChart4_2",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("culecharts4_2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        // tooltip: {
        //   trigger: "axis",
        //   transitionDuration: 0,
        // },
        legend: {
          data: ["特色", "小吃", "大众"],
          left: 60,
          top: 180,
          itemWidth: 5,
          itemHeight: 5
        },
        grid: {
          // top:"1%",
          left: "3%",
          right: "4%",
          bottom: "29%",
          containLabel: true,
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
          }
        },
        yAxis: {
          show: true,
          type: "value",
          name: "月收入（万元）",
          nameTextStyle: {
            fontSize: 11
          },
          nameTextStyle:{
              padding:[0,0,0,20],
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10
          }
          //   boundaryGap: ["20%", "20%"]
        },
        series: [
          {
            name: "特色",
            type: "line",
            // stack: "Total",
            data: [100, 40, 200, 60, 100]
          },
          {
            name: "小吃",
            type: "line",
            // stack: "Total",
            data: [300, 100, 220, 150, 200]
          },
          {
            name: "大众",
            type: "line",
            // stack: "Total",
            data: [200, 300, 100, 200, 400]
          }
        ]
      };

      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style>
</style>
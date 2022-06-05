<template>
  <div class="Echarts">
    <div id="echarts4_3" style="width: 100%; height: 190px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart4_3",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts4_3"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        tooltip: {
          trigger: "axis",
          transitionDuration: 0
        },
        legend: {
          data: ["自行车", "电动车", "其它"],
          left: 10,
          top: 162,
          itemWidth: 5,
          itemHeight: 5
        },
        grid: {
          //   //   top: 50,
          //   //   left: "1%",
          //   //   //   y: 30,
          //   //   //   height: 120,
          //   //   bottom: 40,
          //   right: 20,
          width: 140,
          y: 40,
          height: 120,
          //   containLabel: true
          containLabel: true
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
            name: "自行车",
            type: "line",
            // stack: "Total",
            data: [5, 7, 10, 4, 6]
          },
          {
            name: "电动车",
            type: "line",
            // stack: "Total",
            data: [10, 15, 20, 15, 24]
          },
          {
            name: "其它",
            type: "line",
            // stack: "Total",
            data: [4, 1, 8, 16, 0]
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
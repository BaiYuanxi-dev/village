<template>
  <div class="Echarts">
    <div id="echarts2_1" style="width: 100%; height: 190px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart2_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts2_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["手工艺", "便利店", "特产"],
          left: 0,
          top: 155,
          itemWidth: 5,
          itemHeight: 5
        },
        grid: {
          //   x: 0,
          y: 30,
          height: 120,
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
            name: "手工艺",
            type: "line",
            // stack: "Total",
            data: [20, 28, 42, 50, 30]
          },
          {
            name: "便利店",
            type: "line",
            // stack: "Total",
            data: [58, 62, 18, 20, 48]
          },
          {
            name: "特产",
            type: "line",
            // stack: "Total",
            data: [42, 15, 61, 76, 80]
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
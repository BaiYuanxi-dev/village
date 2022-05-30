<template>
  <div class="Echarts">
    <div id="echart1_3" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: "spaceChart1_3",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1_3"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      // 指定图表的配置项和数据
      this.option = {
        title: {
          text: "成员信息",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["成员社", "贫困户", "党员", "社员"],
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          //   bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              symbol: ["none", "arrow"],
              symbolOffset: [0, 8],
            },
          },
        ],
        series: [
          {
            color: "#0bad57",
            name: "成员社",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [17, 17, 17, 17, 17, 17, 17],
          },
          {
            color: "#0ba5ad",
            name: "贫困户",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [227, 227, 227, 227, 227, 227, 227],
          },
          {
            color: "#0b82c8",
            name: "党员",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [431, 431, 431, 431, 431, 431, 431],
          },
          {
            name: "社员",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [1472, 1472, 1472, 1472, 1472, 1472, 1472],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style scoped>
.Echarts{

}
</style>
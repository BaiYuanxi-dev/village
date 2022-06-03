<template>
  <div class="Echarts">
    <div id="echart2" style="width: 100%; height: 180px"></div>
  </div>
</template>

<script>
export default {
  name: "spaceChart2",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: {
          text: "资产信息",
          subtext: "资产总值（元）：\n\n23785056.87元",
          x: 35,
          y: 8
        },
        tooltip: {
          trigger: "item"
        },

        legend: {
          orient: "vertical",
          // x: "right",
          padding: [35, 20, 0, 0],
          right: 60
        },
        series: [
          {
            center: ["44%", "55%"],
            name: ["土地", "房屋", "水池", "山林", "现金"],
            type: "pie",
            radius: "70%",
            data: [
              { value: 2770.93, name: "土地" },
              { value: 64005.39, name: "房屋" },
              { value: 58917.84, name: "水池" },
              { value: 141550.5, name: "山林" },
              { value: 786520, name: "现金" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
</style>
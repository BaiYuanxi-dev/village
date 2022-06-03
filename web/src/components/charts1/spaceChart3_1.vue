<template>
  <div class="Echarts">
    <div id="echart3_1" style="width: 100%; height: 200px"></div>
  </div>
</template>

<script>
export default {
  name: "spaceChart3_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart3_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: {
          text: "资源使用信息",
          subtext: "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t土地",
          x: 30
        },
        tooltip: {
          trigger: "item"
        },
        // legend: {
        //   orient: "vertical",
        //   left: 20
        // },
        series: [
          {
            center: ["55%", "55%"],
            name: ["已用", "未用"],
            label: {
              show: true,
              position: "outside",
              fontSize: 12,
              overflow: "break"
            },
            type: "pie",
            radius: "60%",
            data: [
              { value: 20, name: "已用20%" },
              { value: 80, name: "未用80%" }
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
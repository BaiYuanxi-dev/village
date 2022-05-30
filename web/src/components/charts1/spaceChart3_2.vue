<template>
  <div class="Echarts">
    <div id="echart3_2" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: "spaceChart3_2",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart3_2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: {
          text: "资产信息",
          subtext: "资产总值",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: 20,
        },
        color:['red','#efa960'],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 20, name: "已用" },
              { value: 80, name: "未用" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style scoped>

</style>
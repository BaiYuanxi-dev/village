<template>
  <div class="Echarts">
    <div id="echarts1_3" style="width: 100%; height: 230px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart1_2",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts1_3"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: {
          subtext: "今日收入",
          x: 40,
          y: 2
        },
        tooltip: {
          // 鼠标滑过的
          trigger: "axis",
          formatter: "{c}万元",
          axisPointer: {
            type: "shadow"
          }
        },
        dataset: [
          {
            dimensions: ["name", "score"],
            source: [
              ["手工艺品", 4],
              ["便利店", 5],
              ["特产", 3]
            ]
          },
          {
            transform: {
              type: "sort",
              config: { dimension: "score", order: "desc" }
            }
          }
        ],
        xAxis: {
          type: "category",
          axisLabel: { rotate: 45, margin: 10 }
        },
        yAxis: {
          name: "日收入\n（万元）",
          nameTextStyle: {
            fontSize: 10
          }
        },
        series: {
          type: "bar",
          encode: { x: "name", y: "score" },
          datasetIndex: 1
        }
      };

      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style>
</style>
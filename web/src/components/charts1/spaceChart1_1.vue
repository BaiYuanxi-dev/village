<template>
  <div class="Echarts">
    <div id="echart1_1" style="width: 100%; height: 240px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "spaceChart1_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            text: "成员信息",
            x: 20,
            y: 10
          }
        ],
        grid: {
          // 整体位置
          // left: "50%",
          // left: 0, // 距离左侧距离
          bottom: 0, // 距离低侧的距离
          top: 0, // 距离顶部的距离
          right: 0, // 距离右侧的距离
          height: "auto",
          width: "auto",
          containLabel: true
        },
        polar: {
          radius: [3, "70%"]
        },
        angleAxis: {
          max: 2000,
          startAngle: 90
        },
        radiusAxis: {
          type: "category",
          data: ["成员社", "贫困户", "党员", "社员"]
        },
        tooltip: {},
        series: {
          type: "bar",
          data: [
            {
              value: 17,
              itemStyle: {
                normal: {
                  color: "#0ed145"
                }
              }
            },
            {
              value: 227,
              itemStyle: {
                normal: {
                  color: "#8cfffb"
                }
              }
            },
            {
              value: 431,
              itemStyle: {
                normal: {
                  color: "#00a8f3"
                }
              }
            },
            {
              value: 1472,
              itemStyle: {
                normal: {
                  color: "#3f48cc"
                }
              }
            }
          ],
          coordinateSystem: "polar",
          label: {
            show: true,
            position: "middle"
            // formatter: "{b}: {c}"
          }
        }
      };

      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style>
</style>
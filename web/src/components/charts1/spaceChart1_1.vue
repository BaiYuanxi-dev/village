<template>
  <div class="Echarts">
    <div id="echart1_1" style="width: 100%; height: 300px"></div>
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
        // 极坐标polar
        polar: {
          radius: [25, "60%"], // '15%'整个绘图区域的大小； 40圆环的半径大小
        },

        // 自定义绘制图形
        graphic: [
          {
            type: "text", // 绘制文本
            x: 50,
            y: 40,
            style: {
              text: "成员信息",
              textAlign: "center",
              fontSize: "10px",
              fill: "#1778B9", // 文本颜色
            },
          },
        //   {
        //     type: "text",
        //     x: 50,
        //     y: 55,
        //     style: {
        //       text: "-3837",
        //       textAlign: "center",
        //       fontSize: "10px",
        //       fill: "#D52722",
        //     },
        //   },
        ],
        angleAxis: {
          show: false, // 角度x轴刻度线
          max: 1500, // 圆环最大值
          startAngle: 90, // 圆环开始绘制的位置，90度为12点的位置
          clockwise: false, // 圆环绘制的方向，false为逆时针方向
          axisLine: {
            show: false, // x轴刻度分割线
          },
          axisLabel: {
            show: false, // x轴刻度文本
          },
          splitLine: {
            show: false, // 切分线显示
          },
        },
        radiusAxis: {
          show: false, // 带弧度的x轴的轴线
          type: "category",
          data: ["a", "b", "c","d"],
        },

        series: {
          type: "bar", // 柱状
          barCategoryGap: "0%", // 每个类别之间的空隙
          data: [
            // 这里的data对应 radiusAxis里的data 个数
            {
              value: 17,
              itemStyle: {
                normal: {
                  color: "#56bb8d",
                },
              },
            },
            {
              value: 227,
              itemStyle: {
                normal: {
                  color: "#dadd54",
                },
              },
            },
            {
              value: 431,
              itemStyle: {
                normal: {
                  color: "#de9f4e",
                },
              },
            },
            {
              value: 1472,
              itemStyle: {
                normal: {
                  color: "#d82843",
                },
              },
            },
          ],
          coordinateSystem: "polar",
          legend: {
            show: true,
            data: ["a", "b", "c", "d"],
          },
        },
      };
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style>
</style>
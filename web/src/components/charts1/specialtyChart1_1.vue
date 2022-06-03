<template>
  <div class="Echart2">
    <div id="echarts1_1" style="width: 100%; height: 240px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart1_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts1_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            subtext: "商户数量",
            x: 40,
            y: 2
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        series: [
          {
            // name: "Nightingal111e Chart",
            type: "pie",
            radius: [15, 60],
            center: ["40%", "40%"],
            roseType: "area",
            label: {
              show: true,
              position: "inner",
              formatter: "{d}%"
            },
            emphasis: {
              label: {
                show: true
              }
            },
            itemStyle: {
              borderRadius: 3
            },
            data: [
              { value: 72, name: "特产" },
              { value: 58, name: "手工艺" },
              { value: 38, name: "便利店" }
            ]
          }
        ],
        graphic: [
          {
            type: "group",
            left: "center",
            bottom: 10,
            children: [
              {
                type: "rect",
                z: 100,
                left: -30,
                top: 0,
                shape: {
                  width: 100,
                  height: 50
                },
                style: {
                  fill: "#f7f7f7"
                  //   stroke: "#555",
                  //   lineWidth: 2
                  //   shadowBlur: 8,
                  //   shadowOffsetX: 3,
                  //   shadowOffsetY: 3,
                  //   shadowColor: "rgba(0,0,0,0.3)"
                }
              },
              {
                type: "text",
                z: 100,
                left: "center",
                top: "middle",
                style: {
                  fill: "#333",
                  text: [
                    "· 特   产：72户",
                    "· 手工艺：58户",
                    "· 便利店：38户"
                  ].join("\n"),
                  font: "14px Microsoft YaHei"
                }
              }
            ]
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
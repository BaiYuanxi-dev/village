<template>
  <div class="Echarts">
    <div id="echarts1_2" style="width: 100%; height: 230px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart1_2",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts1_2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            subtext: "累计收入",
            x: 40,
            y: 2
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}万 ({d}%)"
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
              { value: 280, name: "特产" },
              { value: 150, name: "手工艺" },
              { value: 47, name: "便利店" }
            ]
          }
        ],
        graphic: [
          {
            type: "group",
            left: "center",
            bottom: 25,
            children: [
              {
                type: "rect",
                z: 100,
                left: -30,
                top: 0,
                shape: {
                  width: 100,
                  height: 20
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
                    "· 特   产：280万",
                    "· 手工艺：150万",
                    "· 便利店：47万"
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
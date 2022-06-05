<template>
  <div class="Echarts">
    <div id="echarts3_3" style="width: 100%; height: 200px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart3_3",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts3_3"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            subtext: "使用情况",
            x: 70,
            y: -10
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}辆 ({d}%)"
        },
        series: [
          {
            // name: "Nightingal111e Chart",
            type: "pie",
            radius: [15, 50],
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
              { value: 500, name: "已用" },
              { value: 500, name: "未用" }
            ]
          }
        ],
        graphic: [
          {
            type: "group",
            left: "center",
            bottom: 20,
            children: [
              {
                type: "rect",
                z: 100,
                left: -10,
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
                  text: ["· 已用：500辆", "\n· 未用：500辆"].join("\n"),
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
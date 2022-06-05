<template>
  <div class="Echarts">
    <div id="echarts3_2" style="width: 100%; height: 200px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart3_2",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts3_2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            subtext: "行车工具",
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
              { value: 500, name: "电动车" },
              { value: 300, name: "自行车" },
              { value: 200, name: "其他" }
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
                  text: [
                    "· 电动车：500辆",
                    "· 自行车：300辆",
                    "· 其   他：200辆"
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
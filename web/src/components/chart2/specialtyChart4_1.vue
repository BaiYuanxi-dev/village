<template>
  <div class="Echarts">
    <div id="echarts4_1" style="width: 100%; height: 190px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart4_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts4_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            subtext: "累计收入",
            x: 40,
            y: 0
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
            center: ["50%", "50%"],
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
              { value: 60, name: "电动车" },
              { value: 18, name: "自行车" },
              { value: 24, name: "其他" }
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
                left: -55,
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
                    "· 电动车：60万",
                    "· 自行车：18万",
                    "· 其   他：24万"
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
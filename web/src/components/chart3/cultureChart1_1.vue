<template>
  <div class="Echart">
    <div
      id="culecharts1_1"
      style="width: 100%; height: 240px; margin-left: 10px"
    ></div>
  </div>
</template>

<script>
export default {
  name: "cultureChart1_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("culecharts1_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            subtext: "商户数量",
            x: 40,
            y: 2,
          },
        ],

        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
          transitionDuration: 0,
        },
        color:['#7fbfd1','#2682c5','#eee35c'],
        series: [
          {
            // name: "Nightingal111e Chart",
            type: "pie",
            radius: 50,
            center: ["40%", "40%"],
            label: {
              show: true,
              position: "inner",
              formatter: "{d}%",
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            itemStyle: {
              borderRadius: 3,
            },
            data: [
              { value: 34, name: "酒店" },
              { value: 40, name: "民宿" },
              { value: 226, name: "农家乐" },
            ],
            left: 30,
            right: 30,
            top: 0,
            bottom: 0,
          },
        ],
        graphic: [
          {
            type: "group",
            // top: 30,
            left: "center",
            bottom: 0,
            children: [
              {
                type: "rect",
                z: 100,
                left: -16,
                top: 0,
                shape: {
                  width: 100,
                  height: 50,
                },
                style: {
                  fill: "#f7f7f7",
                  //   stroke: "#555",
                  //   lineWidth: 2
                  //   shadowBlur: 8,
                  //   shadowOffsetX: 3,
                  //   shadowOffsetY: 3,
                  //   shadowColor: "rgba(0,0,0,0.3)"
                },
              },
              {
                type: "text",
                z: 100,
                left: "center",
                top: "middle",
                style: {
                  fill: "#333",
                  text: [
                    "· 酒  店：34户",
                    "· 民  宿：40户",
                    "· 农家乐：226户",
                  ].join("\n"),
                  font: "14px Microsoft YaHei",
                },
              },
            ],
          },
        ],
      };

      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style>
</style>
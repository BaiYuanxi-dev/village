<template>
  <div class="Echart">
    <div
      id="culecharts3_2"
      style="width: 100%; height: 200px; margin-left: 10px"
    ></div>
  </div>
</template>

<script>
export default {
  name: "cultureChart3_2",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("culecharts3_2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: [
          {
            subtext: "累计收入",
            x: 40,
            y: 2,
          },
        ],

        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
        },
        color:['#ac6464','#4f76b7','#dc995c'],
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
              { value: 600, name: "大众" },
              { value: 180, name: "小吃" },
              { value: 100, name: "特色" },
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
                top: -15,
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
                    "· 大  众：600万",
                    "· 小  吃：180万",
                    "· 特  色：100万",
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
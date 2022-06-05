<template>
  <div class="Echarts">
    <div id="echarts2_3" style="width: 100%; height: 190px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart2_3",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts2_3"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        grid: {
          y: 30,
          x: 0,
          height: 140,
          width: 135,
          containLabel: true
        },
        xAxis: {
          name: "(万元))",
          //   nameLocation: "center",
          nameTextStyle: {
            fontSize: 10,
            padding: [0, 0, 0, -40]
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10
          },
          type: "value",
          max: 12,
          min: 3,
          interval: 3,
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          name: "产品排行榜",
          nameTextStyle: {
            fontSize: 10
          },
          axisTick: false,
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10
          },
          type: "category",
          data: ["工艺\n品", "手工\n艺品", "农副\n产品"],
          axisLabel: {
            fontSize: 10
          }
        },
        series: [
          {
            data: [8, 9, 10],
            type: "bar",
            showBackground: false,
            barWidth: "16px", //柱体宽度
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0], //柱体圆角
              color: this.$echarts.graphic.LinearGradient(
                //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                //通过修改前4个参数，可以实现不同的渐变方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
                1,
                0,
                0,
                0,
                [
                  {
                    //代表渐变色从正上方开始
                    offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: "#005BEA"
                  }, //柱图渐变色s
                  {
                    offset: 1, //指100%处的颜色
                    color: "#00C6FB"
                  }
                ]
              )
            }
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
<template>
  <div class="Echarts">
    <div id="echart1_2" style="width: 300px; height: 240px"></div>
  </div>
</template>

<script>
export default {
  name: "spaceChart1_2",
  data() {
    return {
      data: [23146.1, 180, 1638, 70681.1, 0, 5400]
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1_2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      const slideData = this.data.map(item => item + 2);
      this.option = {
        title: [
          {
            subtext: "收入信息（万元）"
          }
        ],
        color: ["#3398DB"],
        tooltip: {
          // 鼠标滑过的
          trigger: "axis",
          formatter: "{b}</br>{c}",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          // 整体位置
          // left: "5%", // 距离左侧距离
          bottom: 0, // 距离低侧的距离
          top: 40, // 距离顶部的距离
          // right: 10, // 距离右侧的距离
          height: "auto",
          width: "auto",
          containLabel: true
        },
        xAxis: [
          // 横坐标配置项
          {
            type: "category",
            // data: ["农副", "生资", "生消", "资源", "资金", "其他"
            data: [
              "农副 产品",
              "生活 资料",
              "生活 消费",
              "资源",
              "资金",
              "其他"
            ].map(function(str) {
              return str.replace(" ", "\n");
            }),
            // nameTextStyle: { fontSize: 10 },
            axisTick: {
              show: false // 不展示凸出来的数据标志
            },
            axisLabel: {
              // interval: 0, //横轴信息全部显示
              color: "#A4D5FF" // 坐标轴数值的颜色
            },
            axisLine: {
              lineStyle: {
                color: "#3376C4" // 坐标轴的颜色
              }
            }
          }
        ],
        yAxis: [
          // 纵坐标配置项
          {
            type: "value",
            max: 25000,
            min: 0,
            interval: 5000,
            alignTicks: true,

            axisLine: {
              lineStyle: {
                color: "#3376C4"
              }
            },
            axisLabel: {
              // color: "#A4D5FF"
            },
            axisTick: {
              show: false
            },
            splitLine: { show: false } // 不展示横向的网格线
          }
        ],
        series: [
          // 数据配置项（柱状图）
          {
            // 正面
            type: "bar", // 图表类型 bar 为柱状图
            barWidth: 15, // 柱体的宽度
            data: this.data, // 柱体数据
            itemStyle: {
              // 单个柱体的配置项
              color: "#4A90E2"
            }
            // barGap: 10 // 柱体间隔
          },
          {
            // 侧面
            type: "bar",
            barWidth: 8,
            itemStyle: {
              color: "#3773BA"
            },
            data: slideData,
            barGap: 0
          },
          {
            // 顶部
            tooltip: {
              show: false
            },
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#62A5F3"
              }
            },
            symbol: "path://M 90,90 l 120,30 l 0,100 l -120, -30", // 控制顶部的倾斜和形状
            symbolRotate: 90,
            symbolSize: ["7.8", "30"],
            symbolOffset: ["0", "-19"],
            symbolPosition: "end",
            data: this.data,
            z: 3
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


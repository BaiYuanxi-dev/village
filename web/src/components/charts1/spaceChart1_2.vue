<template>
  <div class="Echarts">
    <div id="echart1_2" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: "spaceChart1_2",
  data() {
    return {
      data: [23146.1, 180, 1638, 70681.1, 0, 5400],
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1_2"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      const slideData = this.data.map((item) => item + 2);
      this.option = {
        color: ["#3398DB"],
        tooltip: {
          // 鼠标滑过的
          trigger: "axis",
          formatter: "{b}</br>{c}",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          // 整体位置
          left: 0, // 距离左侧距离
          bottom: 0, // 距离低侧的距离
          top: 10, // 距离顶部的距离
          right: 0, // 距离右侧的距离
          height: "auto",
          width: "auto",
          containLabel: true,
        },
        xAxis: [
          // 横坐标配置项
          {
            type: "category",
            data: [
              "农副产品",
              "生产资料",
              "生活消费",
              "资源",
              "资金",
              "其他",
            ],
            axisTick: {
              show: false, // 不展示凸出来的数据标志
            },
            axisLabel: {
              color: "#A4D5FF", // 坐标轴数值的颜色
            },
            axisLine: {
              lineStyle: {
                color: "#3376C4", // 坐标轴的颜色
              },
            },
          },
        ],
        yAxis: [
          // 纵坐标配置项
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#3376C4",
              },
            },
            axisLabel: {
              color: "#A4D5FF",
            },
            axisTick: {
              show: false,
            },
            splitLine: { show: false }, // 不展示横向的网格线
          },
        ],
        series: [
          // 数据配置项（柱状图）
          {
            // 正面
            type: "bar", // 图表类型 bar 为柱状图
            barWidth: 24, // 柱体的宽度
            data: this.data, // 柱体数据
            itemStyle: {
              // 单个柱体的配置项
              color: "#4A90E2",
            },
            barGap: 0, // 柱体间隔
          },
          {
            // 侧面
            type: "bar",
            barWidth: 8,
            itemStyle: {
              color: "#3773BA",
            },
            data: slideData,
            barGap: 0,
          },
          {
            // 顶部
            tooltip: {
              show: false,
            },
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#62A5F3",
              },
            },
            symbol: "path://M 90,90 l 120,30 l 0,100 l -120, -30", // 控制顶部的倾斜和形状
            symbolRotate: 90,
            symbolSize: ["7.8", "30"],
            symbolOffset: ["0", "-19"],
            symbolPosition: "end",
            data: this.data,
            z: 3,
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


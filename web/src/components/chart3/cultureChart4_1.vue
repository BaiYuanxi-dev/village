<template>
  <div class="Echart">
    <div
      id="culecharts4_1"
      style="width: 100%; height: 180px; margin-left: 10px"
    ></div>
  </div>
</template>

<script>
export default {
  name: "cultureChart4_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("culecharts4_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          transitionDuration: 0,
        },
        grid: {
          // top:"1%",
          left: "3%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            inside: false,
            textStyle: {
                color: '#000',
                fontSize:'10',
                itemSize:''
                
            }
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 8
          },
          data: ["大众", "小吃", "特色"],
        },
        yAxis: {
          name: "日收入（万元）",
          nameTextStyle:{
              padding:[0,0,0,70],
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 8
          },
        //   axisTick: {
        //     show: true,
        //   },
          axisLabel: {
            color: "#999",
          },
          min: 0,
          max: 5,
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            data: [3, 2.5, 2],
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
                0,
                0,
                0,
                1,
                [
                  {
                    //代表渐变色从正上方开始
                    offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: "#005BEA",
                  }, //柱图渐变色
                  {
                    offset: 1, //指100%处的颜色
                    color: "#00C6FB",
                  },
                ]
              ),
            },
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
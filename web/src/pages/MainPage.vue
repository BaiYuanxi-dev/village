<template>
  <div>
    <el-row class="tac">
      <el-col :span="3">
        <div id="top"></div>
        <h3>首页</h3>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">资源数字化</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">宣传推荐</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">设计服务</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">运营管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="7">
        <div id="space">
          <div>空间资源！</div>
          <div>SPACE RESOURCES</div>
          <div class="Echarts">
            <div id="echart1" style="width: 100%; height: 300px"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div id="specialty">
          <div>特产资源！</div>
          <div>SPECIALTY RESOURCES</div>
        </div>
      </el-col>
      <el-col :span="7">
        <div id="culture">
          <div>文化资源！</div>
          <div>CULTURE RESOURCES</div>
        </div>
      </el-col>
    </el-row>

    <div id="bottom">
      <!-- <button @click="test">111</button> -->
      <img :src="img1Url" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1Url: require("../assets/img/pho1.png")
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1"));
    this.updateEcharts();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    updateEcharts() {
      // 指定图表的配置项和数据
      this.option = {
        title: {
          text: "成员信息"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["成员社", "贫困户", "党员", "社员"]
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          //   bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              symbol: ["none", "arrow"],
              symbolOffset: [0, 8]
            }
          }
        ],
        series: [
          {
            color: "#0bad57",
            name: "成员社",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [17, 17, 17, 17, 17, 17, 17]
          },
          {
            color: "#0ba5ad",
            name: "贫困户",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [227, 227, 227, 227, 227, 227, 227]
          },
          {
            color: "#0b82c8",
            name: "党员",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [431, 431, 431, 431, 431, 431, 431]
          },
          {
            name: "社员",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [1472, 1472, 1472, 1472, 1472, 1472, 1472]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
#top {
  background: url("../assets/img/pho2.png");
  height: 100px;
  background-size: 100% 100%;
  width: 100%;
}

.tac h3 {
  text-align: center;
  margin-top: 50px;
}

.el-menu {
  padding-left: 30px;
}

img {
  position: fixed;
  width: 40%;
  height: 25%;
  top: 75%;
  left: 0%;
}

#space,
#specialty,
#culture {
  border-right: solid 1px #e6e6e6;
  margin-top: 50px;
  margin-left: 20px;
  text-align: center;
  background-color: #e6e6e6;
}
</style>
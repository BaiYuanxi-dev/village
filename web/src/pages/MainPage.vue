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
          <el-row>
            <el-col :span="12">
              <spaceChart1_1></spaceChart1_1>
            </el-col>
            <el-col :span="12">
              <spaceChart1_2></spaceChart1_2>
            </el-col>
          </el-row>
          <el-row>
            <spaceChart2></spaceChart2>
          </el-row>
          <el-row>
            <el-col :span="12">
              <spaceChart3_1></spaceChart3_1>
            </el-col>
            <el-col :span="12">
              <spaceChart3_2></spaceChart3_2>
            </el-col>
          </el-row>
          <!-- <spaceChart1></spaceChart1>
          <spaceChart2></spaceChart2> -->
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
      <img :src="img1Url" />
    </div>
  </div>
</template>

<script>
import spaceChart1_1 from "../components/charts1/spaceChart1_1.vue";
import spaceChart1_2 from "../components/charts1/spaceChart1_2.vue";
import spaceChart1 from "../components/charts1/spaceChart1_3.vue";
import spaceChart2 from "../components/charts1/spaceChart2.vue";
import spaceChart3_1 from "../components/charts1/spaceChart3_1.vue";
import spaceChart3_2 from "../components/charts1/spaceChart3_2.vue";
export default {
  components: {
    spaceChart1_1,
    spaceChart1_2,
    spaceChart1,
    spaceChart2,
    spaceChart3_1,
    spaceChart3_2,
  },
  data() {
    return {
      img1Url: require("../assets/img/pho1.png"),
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
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
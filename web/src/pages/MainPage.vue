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
      <router-view />
    </el-row>

    <div id="bottom">
      <img id="img1" :src="img1Url" />
      <img id="img2" :src="img1Url" />
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
import specialtyChart1_1 from "../components/charts1/specialtyChart1_1.vue";
import specialtyChart1_2 from "../components/charts1/specialtyChart1_2.vue";
import specialtyChart1_3 from "../components/charts1/specialtyChart1_3.vue";
import specialtyChart2_1 from "../components/charts1/specialtyChart2_1.vue";
import specialtyChart2_2 from "../components/charts1/specialtyChart2_2.vue";
import specialtyChart2_3 from "../components/charts1/specialtyChart2_3.vue";
export default {
  components: {
    spaceChart1_1,
    spaceChart1_2,
    spaceChart1,
    spaceChart2,
    spaceChart3_1,
    spaceChart3_2,
    specialtyChart1_1,
    specialtyChart1_2,
    specialtyChart1_3,
    specialtyChart2_1,
    specialtyChart2_2,
    specialtyChart2_3
  },
  data() {
    return {
      img1Url: require("../assets/img/pho1.png")
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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

/* img { */
/* z-index: -1; */
/* position: fixed; */
/* width: 40%; */
/* height: 20%; */
/* top: 80%; */
/* left: 0%; */
/* opacity: 40%; */
/* } */

#img1 {
  position: fixed;
  width: 19%;
  overflow: hidden;
  height: 22%;
  top: 78%;
  left: 0%;
  /* opacity: 40%; */
}

#img2 {
  position: fixed;
  width: 40%;
  height: 22%;
  top: 78%;
  left: 0%;
  opacity: 40%;
}

#space,
#specialty,
#culture {
  border-right: solid 1px #e6e6e6;
  margin-top: 30px;
  margin-left: 20px;
  text-align: center;
  background-color: #f7f7f7;
}

#info h5 {
  font-size: 18px;
  /* background-color: red; */
  margin: 0;
}

#day,
#information {
  border-top: dashed 1px white;
  padding-top: 10px;
}

#union,
#purchase {
  background-color: #fafafa;
  text-align: left;
  padding-left: 35px;
  opacity: 60%;
}
</style>
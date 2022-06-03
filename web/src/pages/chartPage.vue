<template>
  <div>
      <el-col :span="7">
        <div id="space">
          <div>空间资源！</div>
          <div>SPACE RESOURCES</div>
          <div id="union">联合社数据</div>
          <el-row>
            <el-col :span="10">
              <spaceChart1_1></spaceChart1_1>
            </el-col>
            <el-col :span="14">
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
          <spaceChart2></spaceChart2>-->
          <div id="info">
            <h5>重要事情通知</h5>
            <el-row>
              <el-col :span="10">
                <div style="border-bottom: solid 2px white; padding-top:5px; padding-bottom:5px;">日期</div>
                <div id="day">52019-08-08</div>
                <div id="day">52019-08-08</div>
                <div id="day">52019-08-08</div>
              </el-col>
              <el-col :span="14">
                <div style="border-bottom: solid 2px white; padding-top:5px; padding-bottom:5px;">信息</div>
                <div id="information">业务内容 营业内容</div>
                <div id="information">业务内容 营业内容</div>
                <div id="information">业务内容 营业内容</div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div id="specialty">
          <div>特产资源！</div>
          <div>SPECIALTY RESOURCES</div>
          <div id="purchase">购销数据</div>
          <el-row>
            <el-col :span="8">
              <specialtyChart1_1></specialtyChart1_1>
            </el-col>
            <el-col :span="8">
              <specialtyChart1_2></specialtyChart1_2>
            </el-col>
            <el-col :span="8">
              <specialtyChart1_3></specialtyChart1_3>
            </el-col>
          </el-row>
          <el-row>
            <div>
              nmsl
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col :span="7">
        <div id="culture">
          <div>文化资源！</div>
          <div>CULTURE RESOURCES</div>
          <div id="live">住宿数据</div>
          <el-row>
            <el-col :span="8">
              <cultureChart1_1></cultureChart1_1>
            </el-col>
            <el-col :span="8">
              <cultureChart1_2></cultureChart1_2>
            </el-col>
            <el-col :span="8">
              <cultureChart1_3></cultureChart1_3>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="8">
              <cultureChart2_1></cultureChart2_1>
            </el-col>
            <el-col :span="8">
              <cultureChart2_2></cultureChart2_2>
            </el-col>
            <el-col :span="8">
              <cultureChart2_3></cultureChart2_3>
            </el-col>
          </el-row>
        </div>
      </el-col>
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

import cultureChart1_1 from "../components/chart3/cultureChart1_1.vue";
import cultureChart1_2 from "../components/chart3/cultureChart1_2.vue";
import cultureChart1_3 from "../components/chart3/cultureChart1_3.vue";

import cultureChart2_1 from "../components/chart3/cultureChart2_1.vue";
import cultureChart2_2 from "../components/chart3/cultureChart2_2.vue";
// import cultureChart2_3 from "../components/chart3/cultureChart2_3.vue";
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

    cultureChart1_1,
    cultureChart1_2,
    cultureChart1_3,
    cultureChart2_1,
    cultureChart2_2,
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
}
</script>

<style>
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
#purchase,
#live {
  background-color: #fafafa;
  text-align: left;
  padding-left: 35px;
  opacity: 60%;
}
</style>
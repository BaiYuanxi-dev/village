<template>
  <el-container id="home">
    <el-header>
      <el-row>
        <el-col :span="20">
          <div>Logo</div>
        </el-col>
        <el-col :span="4" style="margin-top: 15px">
          <el-button style="font-size: 18px" type="info" round>登录</el-button>
          <el-button round class="registBt">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="d2">
      <div class="upL">
        <el-button class="bt1" @click="goToCharts">
          <img :src="bt1" alt="" style="padding:0">
        </el-button>
      </div>

      <div class="upR">
        <el-button class="bt2">
          <img :src="bt2" alt="">
        </el-button>
      </div>

      <div class="downL">
        <el-button class="bt3">
          <img :src="bt3" alt="">
        </el-button>
      </div>

      <div class="downR">
        <el-button class="bt4">
          <img :src="bt4" alt="">
        </el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      img1Url: require("../assets/img/title.png"),
      bg: require("../assets/img/page2_bg2.jpg"),
      bt1: require("../assets/img/page2/bt1.1.png"),
      bt2: require("../assets/img/page2/bt1.2.png"),
      bt3: require("../assets/img/page2/bt1.3.png"),
      bt4: require("../assets/img/page2/bt1.4.png"),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goToCharts() {
      //页面跳转
      this.$router.push('/MainPage');
    },
  },
};
</script>

<style scoped>
#home {
  background-image: url(../assets/img/page2_bg2.jpg);
  background-repeat: "no-repeat";
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}

.registBt {
  background-color: #161f21;
  color: #fff;
  font-size: 18px;
  opacity: 0.6;
}

.registBt:hover {
  opacity: 0.9;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
.d2 .upL {
  width: 50%;
  position: absolute;
  height: 50%;
}

.d2 .upR {
  width: 50%;
  position: absolute;
  height: 50%;
  left: 50%;
}

.d2 .downL {
  top: 50%;
  width: 50%;
  position: absolute;
  height: 50%;
}

.d2 .downR {
  top: 50%;
  width: 50%;
  position: absolute;
  height: 50%;
  left: 50%;
}

.bt1{
  margin-top:10%;
  margin-left:10%;
  opacity: 0.6;
}

.bt1:hover{
  opacity: 0.8;
}

.bt2{
  margin-top:10%;
  margin-left:50%;
  opacity: 0.6;
}

.bt2:hover{
  opacity: 0.8;
}
.bt3{
  margin-top:10%;
  margin-left:10%;
  opacity: 0.6;
}
.bt3:hover{
  opacity: 0.8;
}

.bt4{
  margin-top:10%;
  margin-left:50%;
  opacity: 0.6;
}
.bt4:hover{
  opacity: 0.8;
}
</style>
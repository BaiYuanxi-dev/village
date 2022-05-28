<template>
  <div id="home">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="20">
            <div style="margin-top: 2%">
              <img :src="img1Url" alt="" style="margin-left: 20%" />
            </div>
          </el-col>
          <el-col :span="4">
            <el-menu
              style="margin-top: 7%"
              :default-active="activeIndex2"
              mode="horizontal"
              @select="handleSelect"
              background-color="#161f21"
              text-color="#fff"
              active-text-color="#161f21"
            >
              <el-menu-item index="1">
                <el-button  style="font-size:18px;" type="info" round>登录</el-button>
              </el-menu-item>
              <el-menu-item index="2">
                <el-button  round class="registBt">注册</el-button>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="main">  
        <el-button type="primary" class="bt1" @click="inCharts()"></el-button>
        <el-button type="primary" class="bt2"></el-button>
        <el-button type="primary" class="bt3"></el-button>
        <el-button type="primary" class="bt4">4</el-button>
        <div>dd</div>
      </el-main>
    </el-container>

    <!-- <el-row class="main">
      Main
    </el-row> -->
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      img1Url: require("../assets/img/title.png"),
      bg: require("../assets/img/page2_below.png"),
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    inCharts(){
      //页面跳转
    }
  },
};
</script>

<style scoped>
.el-header {
  background-color: #161f21;
  color: rgb(240, 239, 239);
  text-align: center;
  line-height: 80px;
}

.registBt {
  background-color: #161f21;
  color: #fff;
  font-size:18px;
}

/* .main {
  height: 80%;
  background-image: url(../assets/img/page2_below.png);
  background-repeat: "no-repeat";
  background-size: "100% 100%";
} */

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 800px;
    background-image: url(../assets/img/page2_below2.png);
    background-repeat: "no-repeat";
    background-size: 100% 100%;
  }
.el-menu.el-menu--horizontal{
      border-bottom: solid 0px #e6e6e6;
}
.bt1{
  
  position: absolute;
  width: 12%;
  height: 13%;
  top: 38.5%;
  left: 3.7%;
  opacity:0;
  /* background-color:transparent;
  border-style:none; */
}
.bt1:hover{
  opacity:0.5;
}

.bt2{
  
  position: absolute;
  width: 12%;
  height: 13%;
  top: 38.2%;
  left: 84%;
  opacity:0;
  /* background-color:transparent;
  border-style:none; */
}
.bt2:hover{
  opacity:0.5;
}

.bt3{
  
  position: absolute;
  width: 12%;
  height: 13%;
  top: 71.3%;
  left: 3.2%;
  opacity:0;
}
.bt3:hover{
  opacity:0.5;
}
.bt4{

  position: absolute;
   width: 12%;
  height: 13%;
  top: 71.3%;
  left: 84%;
  opacity:0; 
}
.bt4:hover{
  opacity:0.5;
} 
</style>
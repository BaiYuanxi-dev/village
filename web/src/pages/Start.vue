<template>
  <div id="welcome" @click="test">
    <img :src="img1Url" class="img1" />
    <img :src="img2Url" class="img2" />
    <div class="underImg">点击任意位置进入</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1Url: require("../assets/img/pho2.png"),
      img2Url: require("../assets/img/pho1.png")
    };
  },
  methods: {
    test() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.img2 {
  position: absolute;
  width: 30%;
  height: 30%;
  top: 70%;
  left: 0%;
}
.img1 {
  position: absolute;
  width: 26%;
  height: 34%;
  top: 50%;
  left: 50%;
  margin-top: -13%;
  margin-left: -14%;
}
.underImg {
  position: absolute;
  width: 26%;
  height: 34%;
  top: 60%;
  left: 47%;
}
</style>
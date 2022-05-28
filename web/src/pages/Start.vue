<template>
  <div id="welcome" @click="test">
<<<<<<< Updated upstream
    <img :src="img1Url" class="img1"  />
    <img :src="img2Url" class="img2"  />
    <div class="underImg">点击任意位置进入</div>
=======
    <!-- <button @click="test">111</button> -->
    <img :src="img1Url" />
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
  data() {
    return {
<<<<<<< Updated upstream
      img1Url: require("../assets/img/pho2.png"),
      img2Url: require("../assets/img/pho1.png"),
=======
      img1Url: require("../assets/img/pho2.png")
>>>>>>> Stashed changes
    };
  },
  methods: {
    test() {
      this.$router.push("/home");
    }
  },
<<<<<<< Updated upstream
=======
  mounted() {
    document.addEventListener("click", function(event) {
      console.log("点击");
      this.$router.push("/home");
    });
  }
>>>>>>> Stashed changes
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
.underImg{
  position: absolute;
  width: 26%;
  height: 34%;
  top: 60%;
  left: 47%;
}
</style>
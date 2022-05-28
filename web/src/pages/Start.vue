<template>
  <div id="welcome">
      <button @click="test">111</button>
    <img :src="img1Url" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1Url: require("../assets/img/pho2.png"),
    };
  },
  methods:{
      test(){
          this.$router.push('/home');
      }
  },
  mounted() {
    document.addEventListener("click", function (event) {
        console.log("点击");
        this.$router.push('/home');
    });
  },
};
</script>

<style scoped>
#welcome {
  background: url("../assets/img/all_bg.png");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
img {
  position: absolute;
  width: 26%;
  height: 34%;
  top: 50%;
  left: 50%;
  margin-top: -13%;
  margin-left: -14%;
}
</style>
<template>
  <div class="Echarts">
    <div id="echarts3_1" style="width: 100%; height: 200px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart3_1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts3_1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {};

      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style>
</style>
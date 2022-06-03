<template>
  <div class="Echarts">
    <div id="echarts2_3" style="width: 100%; height: 240px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "specialtyChart2_3",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts2_3"));
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
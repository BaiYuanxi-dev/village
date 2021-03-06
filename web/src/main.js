import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import './assets/css/global.css';
import 'element-ui/lib/theme-chalk/index.css';
import * as Echarts from 'echarts'

Vue.prototype.$echarts = Echarts
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
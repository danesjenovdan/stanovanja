import Vue from 'vue';
import Chart from 'chart.js';
import App from './App.vue';

Chart.defaults.global.defaultFontFamily = 'Titillium Web';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.legend.position = 'bottom';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import Chart from 'chart.js';
import App from './App.vue';

Chart.defaults.global.defaultFontFamily = 'Barlow';
Chart.defaults.global.defaultFontSize = 24;
Chart.defaults.global.legend.position = 'bottom';

Vue.config.productionTip = false;

Vue.directive('focus', { inserted: el => el.focus() });

new Vue({
  render: h => h(App),
}).$mount('#app');

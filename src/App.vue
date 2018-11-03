<template>
  <div id="app">
    <income-input />

    <charts />

    <hr>
    <sources />

  </div>
</template>

<script>
import Charts from './components/Charts.vue';
import IncomeInput from './components/IncomeInput.vue';
import Sources from './components/Sources.vue';

export default {
  name: 'app',
  components: {
    Charts,
    IncomeInput,
    Sources,
  },
};
</script>

<style>
* { box-sizing: border-box; }
body { margin: 0; }
#app {
  font-family: 'Titillium Web', sans-serif;
  font-size: 36px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.container {
  width: 960px;
  margin: 0 auto;
}

h2 { text-align: center; }
</style>

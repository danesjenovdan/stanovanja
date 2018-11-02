<template>
  <div id="app">
    <IncomeInput />
  </div>
</template>

<script>
import IncomeInput from './components/IncomeInput.vue';

export default {
  name: 'app',
  components: {
    IncomeInput,
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

h2 { text-align: center; }
</style>

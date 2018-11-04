<template>
  <div id="app">
    <income-input />

    <hr>

    <charts />

    <hr>

    <sources />

    <custom-footer />
  </div>
</template>

<script>
import Charts from './components/Charts.vue';
import CustomFooter from './components/CustomFooter.vue';
import IncomeInput from './components/IncomeInput.vue';
import Sources from './components/Sources.vue';

export default {
  name: 'app',
  components: {
    Charts,
    CustomFooter,
    IncomeInput,
    Sources,
  },
};
</script>

<style>
* { box-sizing: border-box; }
html, body {
  font-size: 36px;
  margin: 0;
}
#app {
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #1e2a36;
}

.container {
  width: 1280px;
  padding: 0 5px;
  margin: 0 auto;
}

h2 {
  font-size: 1.555rem;
  margin: 0;
}
.fancy-title {
  border-bottom: 20px solid #7371fc;
  line-height: 31px;
  display: inline-block;
  padding: 0px 11px;
  margin-left: -11px;
}

p { margin: 0; }

sup { line-height: 1em; }

hr {
  width: 349px;
  height: 15px;
  background: #eaf300;
  border: none;
  margin: 150px auto;
}

a {
  color: #7371fc;
}
</style>

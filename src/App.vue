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
  font-size: 24px;
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
  max-width: 1280px;
  padding: 0 15px;
  margin: 0 auto;
}

h2 {
  font-size: 1.555rem;
  margin: 0;
}
.fancy-title {
  background-image: linear-gradient(to right, #7371fc 0%, #7371fc 100%);
  background-repeat: repeat-x;
  background-position: 0 100%;
  background-size: 100% 0.555rem;
  display: inline;
}
.fancy-title::before { content: '\00a0'; }
.fancy-title::after { content: '\00a0'; }

p { margin: 0; }

sup { line-height: 1em; }

hr {
  max-width: 349px;
  height: 0.444rem;
  background: #eaf300;
  border: none;
  margin: 4rem auto;
}

a {
  color: #7371fc;
}

@media (min-width: 992px) {
  html, body { font-size: 36px; }
  .fancy-title { margin-left: -0.3rem; }
}
</style>

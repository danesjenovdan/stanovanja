<template>
  <div class="container">
    <h2 class="fancy-title">Cene rastejo hitreje od plač</h2>
    <div class="chart-container">
      <price-vs-wage class="chart" :width="2" :height="1" />
    </div>
    <p>Med letoma 2014 in 2017 se je cena m² v Ljubljani v povprečju dvignila za 500 € (26%),
      medtem ko je povprečna  mesečna plača zrasla za 60 € (5%)<sup><a href="#footnote-1">[1]</a></sup>.</p>

    <hr>

    <h2 class="fancy-title">Stanovanja so vse manj dostopna</h2>
    <div class="two-charts chart">
      <yearly-wages-for-50m2 year="2014" :height="2" :width="3" />
      <yearly-wages-for-50m2 year="2017" :height="2" :width="3" />
    </div>
    <p>Leta 2014 je bilo treba za 50 m² veliko stanovanje odšteti 84 povprečnih plač, leta 2017
      pa kar 101<sup><a href="#footnote-1">[1]</a></sup>.</p>

    <hr>

    <h2 class="fancy-title">Gradi se vse manj</h2>
    <div class="chart-container">
      <population-vs-built class="chart" :width="2" :height="1" />
    </div>
    <p>Med letoma 2011 in 2015 je število gospodinjstev naraslo za 5500, medtem ko je bilo
      v tem času zgrajenih le 1677 stanovanj<sup><a href="#footnote-2">[2]</a></sup>.</p>

    <hr>

    <h2 class="fancy-title">Tisto, kar se gradi, je luksuzno</h2>
    <div class="chart-container">
      <built-vs-size class="chart" :width="2" :height="1" />
    </div>
    <p>Stanovanja, ki se gradijo zadnja leta, so v povprečju večja od 100 m² in posledično
      nedosegljiva večini prebivalcev Ljubljane<sup><a href="#footnote-3">[3]</a></sup>.
    </p>

    <hr>

    <h2 class="fancy-title">Občina ne naredi dovolj</h2>
    <div class="chart-container">
      <municipal-apartments class="chart" :width="2" :height="1" />
    </div>
    <p>Gleda na dolgoletne trende gradnje neprofitnih stanovanj (120 na leto) bo Ljubljana
      trenutni primanjkljaj 4000 stanovanj odpravila leta 2050<sup><a href="#footnote-4">[4]</a></sup>
      <sup><a href="#footnote-5">[5]</a></sup>.
    </p>
  </div>
</template>

<script>
import BuiltVsSize from './BuiltVsSize';
import MunicipalApartments from './MunicipalApartments';
import PopulationVsBuilt from './PopulationVsBuilt';
import PriceVsWage from './PriceVsWage';
import YearlyWagesFor50m2 from './YearlyWagesFor50m2';

export default {
  name: 'Charts',
  components: {
    BuiltVsSize,
    MunicipalApartments,
    PopulationVsBuilt,
    PriceVsWage,
    YearlyWagesFor50m2,
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}

.chart { margin: 1.666rem 0; }

.chart-container {
  overflow-x: auto;
}

  .chart-container .chart {
    min-width: 450px;
  }

@media (min-width: 480px) {
  .two-charts {
    display: flex;
    justify-content: space-between;
  }

    .two-charts > div {
      flex: 1;
      max-width: 50%;
    }
}
</style>

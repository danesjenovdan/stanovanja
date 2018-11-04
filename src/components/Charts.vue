<template>
  <div class="container">
    <h2 class="fancy-title">Cene rastejo hitreje od plač</h2>
    <price-vs-wage class="chart" :height="200" />
    <p>Med letoma 2014 in 2017 se je cena m² v Ljubljani v povprečju dvignila za 500 € (26%),
      medtem ko je povprečna  mesečna plača zrasla za 60 € (5%)<sup><a href="#footnote-1">[1]</a></sup>.</p>

    <hr>

    <h2 class="fancy-title">Stanovanja so vse manj dostopna</h2>
    <div class="two-charts chart">
      <yearly-wages-for-50m2 :height="300" year="2014" />
      <yearly-wages-for-50m2 :height="300" year="2017" />
    </div>
    <p>Leta 2014 je bilo treba za 50 m² veliko stanovanje odšteti 84 povprečnih plač, leta 2017
      pa kar 101<sup><a href="#footnote-1">[1]</a></sup>.</p>

    <hr>

    <h2 class="fancy-title">Gradi se vse manj</h2>
    <population-vs-built class="chart" :height="200" />
    <p>Med letoma 2011 in 2015 je število gospodinjstev naraslo za 5500, medtem ko je bilo
      v tem času zgrajenih le 1677 stanovanj<sup><a href="#footnote-2">[2]</a></sup>.</p>

    <hr>

    <h2 class="fancy-title">Tisto, kar se gradi, je luksuzno</h2>
    <built-vs-size class="chart" :height="200" />
    <p>Stanovanja, ki se gradijo zadnja leta, so v povprečju večja od 100 m² in posledično
      nedosegljiva večini prebivalcev Ljubljane<sup><a href="#footnote-3">[3]</a></sup>.
    </p>

    <hr>

    <h2 class="fancy-title">Občina ne naredi dovolj</h2>
    <municipal-apartments class="chart" :height="200" />
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
.two-charts {
  display: flex;
  justify-content: space-between;
}

.container {
  text-align: center;
}

.chart {
  margin: 60px 0;
}
</style>

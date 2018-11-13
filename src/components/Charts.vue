<template>
  <div class="container">
    <h2 class="fancy-title">Cene rastejo hitreje od plač</h2>
    <div class="scroll-fade">
      <div class="chart-container">
        <price-vs-wage class="chart" :width="2" :height="1" />
      </div>
    </div>
    <p>Med letoma 2014 in 2017 se je cena kvadratnega metra v Ljubljani v povprečju dvignila za <b>500 €</b> (26 %),
      medtem ko je povprečna mesečna plača zrasla za <b>60 €</b> (5 %).<sup><a href="#footnote-1">[1]</a></sup></p>

    <hr>

    <h2 class="fancy-title">Stanovanja so vse manj dostopna</h2>
    <div class="scroll-fade">
      <div class="chart-container">
        <wages-for-50m2 class="chart" :width="2" :height="1" />
      </div>
    </div>
    <p>Leta 2014 je bilo treba za 50 m² veliko stanovanje v Ljubljani odšteti <b>84 povprečnih plač</b>, leta 2017
      pa že kar <b>101</b>.<sup><a href="#footnote-1">[1]</a></sup></p>

    <hr>

    <h2 class="fancy-title">Gradi se vse manj</h2>
    <div class="scroll-fade">
      <div class="chart-container">
        <population-vs-built class="chart" :width="2" :height="1" />
      </div>
    </div>
    <p>Med letoma 2011 in 2015 je število ljubljanskih gospodinjstev naraslo za <b>5500</b>, medtem ko je bilo
      v tem času zgrajenih le <b>1677</b> stanovanj.<sup><a href="#footnote-2">[2]</a></sup></p>

    <hr>

    <h2 class="fancy-title">Tisto, kar se gradi, je luksuzno</h2>
    <div class="scroll-fade">
      <div class="chart-container">
        <built-vs-size class="chart" :width="2" :height="1" />
      </div>
    </div>
    <p>Stanovanja, ki se gradijo zadnja leta, so v povprečju <b>večja od 100 m²</b> in posledično
      nedosegljiva večini prebivalcev Ljubljane.<sup><a href="#footnote-3">[3]</a></sup>
    </p>

    <!-- <hr>

    <h2 class="fancy-title">Občina ne naredi dovolj</h2>
    <div class="scroll-fade">
      <div class="chart-container">
        <municipal-apartments class="chart" :width="2" :height="1" />
      </div>
    </div>
    <p>Glede na dolgoletne trende gradnje neprofitnih stanovanj (120 na leto) bo Ljubljana
      trenutni primanjkljaj 4000 stanovanj odpravila <b>leta 2050</b>.<sup><a href="#footnote-4">[4]</a></sup>
      <sup><a href="#footnote-5">[5]</a></sup>
    </p> -->
  </div>
</template>

<script>
import BuiltVsSize from './BuiltVsSize';
import MunicipalApartments from './MunicipalApartments';
import PopulationVsBuilt from './PopulationVsBuilt';
import PriceVsWage from './PriceVsWage';
import WagesFor50m2 from './WagesFor50m2';

export default {
  name: 'Charts',
  components: {
    BuiltVsSize,
    MunicipalApartments,
    PopulationVsBuilt,
    PriceVsWage,
    WagesFor50m2,
  },
};
</script>

<style scoped>
.container { text-align: center; }

.chart { margin: 1.666rem 0; }

.chart-container { overflow-x: auto; }

  .chart-container .chart { min-width: 450px; }

@media (max-width: 991px) {
  .chart { padding-right: 40px; }

  .scroll-fade {
    position: relative;
  }
  .scroll-fade::before {
    content: '';
    height: 100%;
    width: 40px;
    top: 0;
    right: 0;
    position: absolute;
    background: linear-gradient(to left, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
    z-index: 1;
  }
}
</style>

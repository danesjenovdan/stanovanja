<template>
  <div>
    <div class="landing">
      <img class="image" alt="Logo akcije" src="../assets/logo.png">
      <div class="right">
        Vnesi plačo in se zjoči:
        <input
          class="input"
          v-model="monthlyIncome"
          @keydown.enter="moveDown"
        />
      </div>
    </div>

    <div class="container">
      <h2 ref="buying">Nakup</h2>
      <p>S svojo plačo lahko kupiš {{ available.toBuy.count }} od {{ allApartments }} stanovanj
        objavljenih na portalu nepremicnine.net
          <sup><a href="#" @click.prevent="toggleExplanation('buying')">zakaj?</a></sup>,
        pri čemer je povprečna površina stanovanja {{ available.toBuy.averageArea }} m².
        <div
          v-show="explanationVisible.buying"
          class="explanation"
        >
          Predpostavili smo, da si pripravljeni plačevati mesečni obrok v višini
          ⅓ navedenega dohodka, kar znaša {{ formatPrice(monthlyInstallment) }}.
          Če bi najel kredit za 19 let po 2,9% obrestni meri (slovensko
          povprečje), bi bil končni znesek, ki ga prejmeš od banke,
          {{ formatPrice(purchasingPower) }}.
        </div>
      </p>

      <h2 ref="renting">Najem</h2>
      <p>S svojo plačo lahko najameš {{ available.toRent.count }} od {{ allApartments }} stanovanj
        objavljenih na portalu nepremicnine.net
          <sup><a href="#" @click.prevent="toggleExplanation('renting')">zakaj?</a></sup>,
        pri čemer je povprečna površina stanovanja {{ available.toRent.averageArea }} m².
        <div
          v-show="explanationVisible.renting"
          class="explanation"
        >
          Predpostavili smo, da si pripravljeni plačevati mesečno najemnino v višini
          ⅓ navedenega dohodka, kar znaša {{ formatPrice(monthlyInstallment) }}.
          Če bi se vsa stanovanja oddajala po 13 €/m², kolikor je ljubljansko povprečje,
          si lahko torej privoščiš stanovanje veliko največ {{ rentableArea }} m².
        </div>
      </p>

      <h2>Cene rastejo hitreje od plač</h2>
      <price-vs-wage :height="200" />
      <p>Med letoma 2014 in 2017 se je cena m² v Ljubljani v povprečju dvignila za 500 € (26%),
        medtem ko je povprečna  mesečna plača zrasla za 60 € (5%)<sup><a href="#footnote-1">[1]</a></sup>.</p>

      <h2>Stanovanja so vse manj dostopna</h2>
      <div class="two-charts">
        <yearly-wages-for-50m2 :height="300" year="2014" />
        <yearly-wages-for-50m2 :height="300" year="2017" />
      </div>
      <p>Leta 2014 je bilo treba za 50 m² veliko stanovanje odšteti 84 povprečnih plač, leta 2017
        pa kar 101.<sup><a href="#footnote-1">[1]</a></sup>.</p>

      <h2>Gradi se vse manj</h2>
      <population-vs-built :height="200" />
      <p>Med letoma 2011 in 2015 je število gospodinjstev naraslo za 5500, medtem ko je bilo
        v tem času zgrajenih le 1677 stanovanj<sup><a href="#footnote-2">[2]</a></sup>.</p>

      <h2>In tisto kar se je luksuzno</h2>
      <built-vs-size :height="200" />
      <p>Ne samo, da število novogradenj pada, tudi njihova povprečna površina narašča.
        Z drugimi besedami - novozgrajena stanovanja so v vseh pogledih manj dosegljiva
        povprečnim državljanom.<sup><a href="#footnote-3">[3]</a></sup>
      </p>

      <h2>Občina ne naredi dovolj</h2>
      <municipal-apartments :height="200" />
      <p>Kljub temu, da bi Ljubljana po nekaterih podatkih potrebovala 4000 dodatnih
        neprofitnih stanovanj, je bilo v preteklih petih letih skupaj zgrajenih le 239<sup><a href="#footnote-4">[4]</a></sup><sup><a href="#footnote-5">[5]</a></sup>.
      </p>

      <hr>
      Viri:
      <ol class="sources">
        <li id="footnote-1">
          <a href="http://www.e-prostor.gov.si/fileadmin/etn/Porocila/Letno_porocilo_za_leto_2017.pdf">
            eProstor: Poročilo o slovenskem trgu nepremičnin za leto 2017
          </a>
        </li>
        <li id="footnote-2">
          <a href="https://pxweb.stat.si/pxweb/dialog/varval.asp?ma=05C4002S&ti=&path=../Database/Dem_soc/05_prebivalstvo/10_stevilo_preb/20_05C40_prebivalstvo_obcine/&xu=&yp=&lang=2">
            SURS: Prebivalstvo po starosti in spolu, občine, Slovenija, polletno
          </a>
        </li>
        <li id="footnote-3">
          <a href="https://pxweb.stat.si/pxweb/Dialog/varval.asp?ma=1906903S&ti=&path=../Database/Ekonomsko/19_gradbenistvo/05_19069_graditev_stan/&lang=2">
            SURS: Ocena dokončanih stanovanj po številu sob in površini, po občinah Slovenije, letno
          </a>
        </li>
        <li id="footnote-4">
          <a href="https://www.rtvslo.si/slovenija/10-000-najemnih-stanovanj-premalo/453222">
            MMC RTVSLO: 10.000 najemnih stanovanj premalo
          </a>
        </li>
        <li id="footnote-5">
          <a href="https://www.deloindom.si/stanujem/nepremicninski-trg/financiranje/v-ljubljani-drasticno-pomanjkanje-neprofitnih-stanovanj">
            Delo in Dom: V Ljubljani drastično pomanjkanje neprofitnih stanovanj
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import BuiltVsSize from './BuiltVsSize';
import MunicipalApartments from './MunicipalApartments';
import PopulationVsBuilt from './PopulationVsBuilt';
import PriceVsWage from './PriceVsWage';
import YearlyWagesFor50m2 from './YearlyWagesFor50m2';
import rawApartmentData from '../assets/data.json';

const apartmentData = rawApartmentData.map(apartment => ({
  ...apartment, rent: apartment.size * 13,
}));

export default {
  name: 'IncomeInput',
  components: {
    BuiltVsSize,
    MunicipalApartments,
    PopulationVsBuilt,
    PriceVsWage,
    YearlyWagesFor50m2,
  },
  data() {
    return {
      monthlyIncome: 1083,
      allApartments: apartmentData.length,
      explanationVisible: {
        buying: false,
        renting: false,
      },
    };
  },
  computed: {
    monthlyInstallment() {
      return this.monthlyIncome * 1 / 3;
    },
    rentableArea() {
      return Math.round(this.monthlyInstallment / 13);
    },
    purchasingPower() {
      return this.monthlyInstallment * 12 * 14.457;
    },
    available() {
      const buyable = apartmentData.filter(apartment => apartment.price <= this.purchasingPower);
      const rentable = apartmentData.filter(apartment => apartment.size <= this.rentableArea);

      const buyableAverageArea = Math.round(
        buyable.reduce((sum, apartment) => sum + apartment.size, 0) / buyable.length,
      );
      const rentableAverageArea = Math.round(
        rentable.reduce((sum, apartment) => sum + apartment.size, 0) / rentable.length,
      );

      return {
        toBuy: { count: buyable.length, averageArea: buyableAverageArea },
        toRent: { count: rentable.length, averageArea: rentableAverageArea },
      };
    },
  },
  methods: {
    moveDown() {
      this.scrollTo('buying');
    },
    formatPrice: price => `${Math.round(price)} €`,
    toggleExplanation(type) {
      this.explanationVisible[type] = !this.explanationVisible[type];
    },
    scrollTo(section) {
      window.scrollTo({
        top: this.$refs[section].getBoundingClientRect().top,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.landing {
  align-items: center;
  border: 21px solid #7371fc;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: left;
  width: 100%;
}

.image {
  display: block;
  width: 594px;
}

.right {
  padding-left: 48px;
  width: 594px;
}

.input {
  border: none;
  border-bottom: 7px solid #ddd5ff;
  display: block;
  font-size: inherit;
  width: 100%;
}


.container {
  width: 960px;
  margin: 0 auto;
}

  .explanation {
    font-size: 24px;
    color: #666;
    margin-top: 48px;
  }

  .sources {
    font-size: 18px;
  }

  .two-charts {
    display: flex;
    justify-content: space-between;
  }
</style>

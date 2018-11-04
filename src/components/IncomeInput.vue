<template>
  <div>
    <div class="landing">
      <img class="image" alt="Logo akcije" src="../assets/logo.png">
      <div class="right">
        Vnesi svojo mesečno plačo in se zjoči:
        <div class="input-row">
          <input
            class="input"
            v-focus
            v-model="monthlyIncome"
            @keydown.enter="moveDown"
          />
          <img
            @click="moveDown"
            class="confirm"
            src="/next.svg"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="circle-text">
        <div class="circle">
          <img class="image" src="/buy.svg" />
        </div>
        <div class="text">
          <h2 class="fancy-title" ref="buying">Nakup</h2>
          <p>S svojo plačo lahko kupiš {{ available.toBuy.count }} od {{ allApartments }} stanovanj
            objavljenih na portalu nepremicnine.net, pri čemer je povprečna površina stanovanja
            {{ available.toBuy.averageArea }} m².
            <a href="#" @click.prevent="toggleExplanation('buying')">Zakaj?</a>
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
        </div>
      </div>

      <div class="circle-text">
        <div class="circle">
          <img class="image" src="/rent.svg" />
        </div>
        <div class="text">
          <h2 class="fancy-title" ref="renting">Najem</h2>
          <p>S svojo plačo lahko najameš {{ available.toRent.count }} od {{ allApartments }} stanovanj
            objavljenih na portalu nepremicnine.net, pri čemer je povprečna površina stanovanja
            {{ available.toRent.averageArea }} m².
            <a href="#" @click.prevent="toggleExplanation('renting')">Zakaj?</a>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rawApartmentData from '../assets/data.json';

const apartmentData = rawApartmentData.map(apartment => ({
  ...apartment, rent: apartment.size * 13,
}));

export default {
  name: 'IncomeInput',
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
      ) || 0;
      const rentableAverageArea = Math.round(
        rentable.reduce((sum, apartment) => sum + apartment.size, 0) / rentable.length,
      ) || 0;

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
  background: #7371fc;
  color: white;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: left;
  width: 100%;
}

  .landing .image {
    display: block;
    width: 600px;
  }

  .right {
    padding-left: 64px;
    width: 514px;
    line-height: 1.333em;
  }

  .input-row {
    display: flex;
    margin-top: 1rem;
  }
  .input {
    background: transparent;
    border: none;
    border-bottom: 7px solid #eaf300;
    color: #ffffff;
    font-size: inherit;
    flex-basis: 100%;
    min-width: 0;
  }

  .confirm {
    cursor: pointer;
    height: 72px;
    margin-left: 18px;
    width: 72px;
  }

.circle-text {
  display: flex;
  margin-top: 114px;
}
  .circle-text:first-child { margin-top: 120px; }

  .circle-text .circle {
    width: 226px;
    height: 226px;
    border-radius: 50%;
    background: #eaf300;
    margin-right: 70px;
  }

    .circle-text .circle .image {
      width: 125px;
      height: 125px;
      margin: 51px 50px 50px 51px;
    }

  .circle-text .text {
    flex: 1;
    line-height: 48px;
  }

  .circle-text h2 {
    margin-top: 32px;
  }


.explanation {
  font-size: 24px;
  margin-top: 2em;
  line-height: 1.5em;
}
</style>

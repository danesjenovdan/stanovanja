<template>
  <div>
    <div class="main">
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

    <h1 ref="buying">Nakup</h1>
    <p>S svojo plačo lahko kupiš {{ available.toBuy.count }} od {{ allApartments }} stanovanj
      objavljenih na portalu nepremicnine.net
        <sup><a href="#"@click.prevent="toggleExplanation('buying')">zakaj?</a></sup>,
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

    <h1 ref="renting">Najem</h1>
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

<style lang="scss" scoped>
.main {
  align-items: center;
  border: 21px solid #7371fc;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: left;
  width: 100vw;

  .image {
    display: block;
    width: 594px;
  }

  .right {
    padding-left: 48px;
    width: 594px;
    .input {
      border: none;
      border-bottom: 7px solid #ddd5ff;
      display: block;
      font-size: inherit;
      width: 100%;
    }
  }

}

.explanation {
  font-size: 24px;
  color: #666;
  margin-top: 48px;
}
</style>

<template>
  <div>
    <div class="landing">
      <img class="image" alt="Logo akcije" src="../assets/logo.png">
      <div class="right">
        Vnesi svoj mesečni neto dohodek in se zjoči:
        <div class="input-row">
          <input
            class="input"
            type="number"
            v-focus
            v-model="monthlyIncome"
            @keydown.enter="moveDown"
          />
          <img
            @click="moveDown"
            class="confirm"
            src="next.svg"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="circle-text">
        <div class="circle">
          <img class="image" src="buy.svg" />
        </div>
        <div class="text">
          <h2 class="fancy-title" ref="buying">Nakup</h2>
          <p>S svojo plačo lahko kupiš <b>{{ available.toBuy.count }}</b> od <b>{{ allBuyableApartments }}</b> stanovanj
            v Ljubljani, ki so bila 2. 11. 2018 objavljena na portalu nepremicnine.net, pri čemer je
            povprečna površina stanovanja <b>{{ available.toBuy.averageArea }} m²</b>.
            <a href="#" @click.prevent="toggleExplanation('buying')">Zakaj?</a>
            <div
              v-show="explanationVisible.buying"
              class="explanation"
            >
              Predpostavljamo, da lahko plačuješ mesečni obrok v višini
              <span
                class="tooltiper"
                v-tooltip="tretjineTooltipOptions"
              >⅓ navedenega dohodka</span>, kar znaša <b>{{ formatPrice(monthlyInstallment) }}</b>.
              Če bi najel kredit za <span
                class="tooltiper"
                v-tooltip="kreditTooltipOptions"
              >19 let po 2,9 % obrestni meri</span> (slovensko
              povprečje), bi bil končni znesek, ki ga prejmeš od banke,
              <b>{{ formatPrice(purchasingPower) }}</b>.
            </div>
          </p>
        </div>
      </div>

      <div class="circle-text">
        <div class="circle">
          <img class="image" src="rent.svg" />
        </div>
        <div class="text">
          <h2 class="fancy-title" ref="renting">Najem</h2>
          <p>S svojo plačo lahko najameš <b>{{ available.toRent.count }}</b>
            od <b>{{ allRentableApartments }}</b> stanovanj v Ljubljani, ki so bila 2. 11. 2018
            objavljena na portalu nepremicnine.net, pri čemer je
            povprečna površina stanovanja <b>{{ available.toRent.averageArea }} m²</b>.
            <a href="#" @click.prevent="toggleExplanation('renting')">Zakaj?</a>
            <div
              v-show="explanationVisible.renting"
              class="explanation"
            >
              Predpostavljamo, da lahko plačuješ mesečno najemnino <span
                class="tooltiper"
                v-tooltip="tretjineTooltipOptions"
              >v višini ⅓ navedenega dohodka</span>,
              kar znaša <b>{{ formatPrice(monthlyInstallment) }}</b>.
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
import buyingData from '../assets/buy.json';
import rentingData from '../assets/rent.json';

export default {
  name: 'IncomeInput',
  components: {
    'v-popover': VPopover,
  },
  directives: {
    tooltip: VTooltip,
    'close-popover': VClosePopover,
  },
  data() {
    return {
      monthlyIncome: 1083,
      allBuyableApartments: buyingData.length,
      allRentableApartments: rentingData.length,
      explanationVisible: {
        buying: false,
        renting: false,
      },
      tretjineTooltipOptions: {
        content: 'Pravilo tretjine je <a target="_blank" href="https://shelterforce.org/2017/04/25/defense-30-percent-standard-cases/">splošno sprejeto merilo dostopnosti stanovanj</a>, ki pravi, da izdatki za stanovanje ne smejo preseči tretjino dohodkov gospodinjstva.',
        trigger: 'click',
        popover: {
          defaultPlacement: 'top',
        },
      },
      kreditTooltipOptions: {
        content: 'Trajanje kredita in obrestna mera sta izbrana glede na <a target="_blank" href="https://bankaslovenije.blob.core.windows.net/publication-files/gdgggdieQjeQhhhh_fsr_junij_2018_lektorirano.pdf">poročilo o finančni stabilnosti</a>, kjer sta navedeni povprečna ročnost in obrestna mera stanovanjskega posojila v Sloveniji za leto 2018.',
        trigger: 'click',
        popover: {
          defaultPlacement: 'bottom',
        },
      },
    };
  },
  computed: {
    monthlyInstallment() {
      return this.monthlyIncome * 1 / 3;
    },
    purchasingPower() {
      return this.monthlyInstallment * 12 * 14.457;
    },
    available() {
      const buyable = buyingData.filter(apartment => apartment.price <= this.purchasingPower);
      const rentable = rentingData.filter(apartment => apartment.price <= this.monthlyInstallment);

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

<style scoped lang="scss">
.landing {
  align-items: center;
  background: #7371fc;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: left;
  width: 100%;
  padding: 24px;
}

  .landing .image {
    display: block;
    width: 100%;
  }

  .right {
    line-height: 1.33em;
    max-width: 100%;
  }

  .input-row {
    display: flex;
    margin-top: 1rem;
  }

  .input {
    background: transparent;
    border: none;
    border-bottom: 0.2rem solid #eaf300;
    color: #ffffff;
    font-size: inherit;
    flex-basis: 100%;
    min-width: 0;
    outline: none;
     -moz-appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .confirm {
    cursor: pointer;
    height: 2rem;
    margin-left: 0.5rem;
    width: 2rem;
  }

.circle-text {
  align-items: center;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  text-align: center;
}

  .circle-text .circle {
    width: 226px;
    height: 226px;
    border-radius: 50%;
    background: #eaf300;
    margin-bottom: 1rem;
  }

    .circle-text .circle .image {
      width: 125px;
      height: 125px;
      margin: 51px 50px 50px 51px;
    }

  .circle-text .text {
    flex: 1;
    line-height: 1.5rem;
  }

.explanation {
  font-size: 0.666rem;
  margin-top: 2em;
  line-height: 1.5em;

  .tooltiper {
    text-decoration: underline;
    cursor: pointer;
  }
}

@media (min-width: 992px) {
  .landing { flex-direction: row; }

    .landing .right {
      padding-left: 64px;
      width: 514px;
    }

    .landing .image { width: 600px; }

  .circle-text {
    flex-direction: row;
    margin-top: 3rem;
    text-align: left;
  }

    .circle-text .circle {
      margin: 0 70px 0 0;
    }

}
</style>

<style lang="scss">
.tooltip {
  display: block !important;
  max-width: 300px;
  z-index: 10000;
  font-family: 'Barlow', sans-serif;

  .tooltip-inner {
    background: #eaf300;
    color: #1e2a36;
    border-radius: 0;
    padding: 10px;

    font-size: 18px;
    text-align: center;

    a {
      color: #1e2a36;
    }
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #eaf300;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 10px;

    .tooltip-arrow {
      border-width: 10px 10px 0 10px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -10px;
      left: calc(50% - 10px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 10px;

    .tooltip-arrow {
      border-width: 0 10px 10px 10px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -10px;
      left: calc(50% - 10px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &.popover {
    $color: #1e2a36;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>

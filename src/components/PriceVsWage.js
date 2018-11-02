import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  mounted() {
    const data = {
      labels: ['2014', '2015', '2016', '2017'],
      datasets: [
        {
          label: 'Cena na m²',
          backgroundColor: '#00aeef',
          borderColor: '#00aeef',
          data: [1910, 2040, 2180, 2410],
          fill: false,
        },
        {
          label: 'Povprečna neto plača',
          backgroundColor: '#eaf300',
          borderColor: '#eaf300',
          data: [1130, 1140, 1160, 1190],
          fill: false,
        },
      ],
    };

    const options = {
      tooltips: {
        callbacks: {
          label: item => `${item.yLabel} €`,
        },
      },
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

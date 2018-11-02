import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    const options = {
      scales: {
        yAxes: [{
          ticks: { beginAtZero: true },
        }],
      },
      tooltips: {
        callbacks: {
          label: item => `${item.yLabel} €`,
        },
      },
    };

    const data = {
      labels: ['2014', '2017'],
      datasets: [
        {
          label: 'Cena na m²',
          backgroundColor: '#00aeef',
          data: [1910, 2410],
        },
        {
          label: 'Povprečna neto plača',
          backgroundColor: '#eaf300',
          data: [1130, 1190],
        },
      ],
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

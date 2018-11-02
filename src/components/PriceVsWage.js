import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
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

    const options = {
      scales: {
        yAxes: [{
          ticks: { beginAtZero: true },
          gridLines: { display: false },
        }],
      },
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

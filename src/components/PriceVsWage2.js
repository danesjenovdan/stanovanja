import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    const data = {
      labels: ['2014', '2017'],
      datasets: [
        {
          label: 'Cena za 50 m²',
          yAxisID: 'price',
          backgroundColor: '#00aeef',
          data: [95500, 120500],
        },
        {
          label: 'Število plač za 50 m²',
          yAxisID: 'wages',
          backgroundColor: '#eaf300',
          data: [84, 101],
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [{
          id: 'price',
          type: 'linear',
          position: 'left',
          ticks: { beginAtZero: true },
          gridLines: { display: false },
        }, {
          id: 'wages',
          type: 'linear',
          position: 'right',
          ticks: { beginAtZero: true },
          gridLines: { display: false },
        }],
      },
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

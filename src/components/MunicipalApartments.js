import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    const data = {
      labels: ['2013', '2014', '2015', '2016', '2017'],
      datasets: [
        {
          label: 'Gradnja občinskih stanovanj',
          backgroundColor: '#00aeef',
          data: [5, 15, 142, 16, 61],
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: { beginAtZero: true },
        }],
      },
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

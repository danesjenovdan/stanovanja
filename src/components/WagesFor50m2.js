import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  mounted() {
    const data = {
      labels: ['2014', '2017'],
      datasets: [
        {
          label: 'Št. plač za 50 m²',
          backgroundColor: '#7371fc',
          data: [84, 101],
        },
      ],
    };

    const options = {
      scales: {
        xAxes: [{
          ticks: { beginAtZero: true },
        }],
      },
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

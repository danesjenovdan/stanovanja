import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    const data = {
      labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      datasets: [
        {
          label: 'Povprečna velikost v m²',
          yAxisID: 'average_size',
          backgroundColor: '#7371fc',
          borderColor: '#7371fc',
          borderWidth: 10,
          data: [73, 104, 101, 92, 177, 179, 100, 121, 177, 122],
          fill: false,
          type: 'line',
        },
        {
          yAxisID: 'apartments',
          label: 'Novozgrajena stanovanja',
          backgroundColor: '#eaf300',
          data: [1561, 830, 464, 716, 150, 130, 432, 249, 171, 188],
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [{
          id: 'apartments',
          type: 'linear',
          position: 'left',
          ticks: { beginAtZero: true },
          gridLines: { display: false },
        }, {
          id: 'average_size',
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

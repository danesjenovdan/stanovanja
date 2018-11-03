import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    const data = {
      labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      datasets: [
        {
          label: 'Novozgrajena stanovanja',
          yAxisID: 'apartments',
          backgroundColor: '#eaf300',
          borderColor: '#eaf300',
          data: [1561, 830, 464, 716, 150, 130, 432, 249, 171, 188],
          type: 'line',
          fill: false,
        },
        {
          label: 'Prebivalstvo Ljubljane',
          yAxisID: 'population',
          backgroundColor: '#00aeef',
          data: [267760, 276091, 279653, 280140, 280607, 282994, 285857, 287218, 288307, 288919],
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [{
          id: 'apartments',
          type: 'linear',
          position: 'right',
          ticks: { beginAtZero: true },
          gridLines: { display: false },
        }, {
          id: 'population',
          type: 'linear',
          position: 'left',
          ticks: { min: 260000 },
          gridLines: { display: false },
        }],
      },
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

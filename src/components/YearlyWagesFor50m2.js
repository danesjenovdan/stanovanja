import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  props: ['year'],
  mounted() {
    const rawData = {
      2014: { price: 95500, wages: 84, percentage: 14.2857 },
      2017: { price: 120500, wages: 101, percentage: 11.8812 },
    };

    const data = {
      labels: [this.year],
      datasets: [
        {
          label: 'Cena za 50 m²',
          backgroundColor: ['#00aeef', '#eaf300'],
          data: [rawData[this.year].percentage, 100 - rawData[this.year].percentage],
        },
        // {
        //   label: 'Število plač za 50 m²',
        //   backgroundColor: '#eaf300',
        //   data: [rawData[this.year].wages],
        // },
      ],
    };
    // const data = {
    //   labels: ['foo', 'bar'],
    //   datasets: []
    // }

    const options = {
      tooltips: {
        enabled: false,
      },
      // scales: {
      //   yAxes: [{
      //     id: 'price',
      //     type: 'linear',
      //     position: 'left',
      //     ticks: { beginAtZero: true },
      //     gridLines: { display: false },
      //   }, {
      //     id: 'wages',
      //     type: 'linear',
      //     position: 'right',
      //     ticks: { beginAtZero: true },
      //     gridLines: { display: false },
      //   }],
      // },
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

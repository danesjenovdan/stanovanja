import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  props: ['year'],
  mounted() {
    const rawData = {
      2014: { price: 95500, wages: 84, percentage: 14.3 },
      2017: { price: 120500, wages: 101, percentage: 11.9 },
    };

    const data = {
      datasets: [
        {
          label: 'Cena za 50 m²',
          backgroundColor: ['#7371fc', '#eaf300'],
          data: [rawData[this.year].percentage, 100 - rawData[this.year].percentage],
        },
      ],
    };

    const options = {
      tooltips: {
        filter: tooltipItem => tooltipItem.index === 0,
        callbacks: {
          label(tooltipItem, localData) {
            const value = localData.datasets[0].data[tooltipItem.index];
            return `Letna povprečna plača: ${value}%`;
          },
        },
      },
      title: {
        display: true,
        text: this.year,
      },
      legend: {
        display: false,
      },
    };

    // Overwriting base render method with actual data.
    this.renderChart(data, options);
  },
};

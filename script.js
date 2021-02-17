const supplyChart = document.getElementById('supplyChart').getContext('2d');
const chart_1 = new Chart(supplyChart, {
  type: 'bar',
  data: {
    labels: ['0', '100', '200', '300', '400', '500', '600'],
    datasets: [
      {
        label: 'Supply',
        backgroundColor: 'rgb(255, 99, 132, 0.6)',
        borderColor: 'rgb(255, 99, 132, 0.6)',
        data: [150, 400, 200, 600, 150, 210, 450],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Amount',
          },
        },
      ],
    },
  },
});

const demandChart = document.getElementById('demandChart').getContext('2d');
const chart_2 = new Chart(demandChart, {
  type: 'doughnut',
  data: {
    labels: ['0', '100', '200', '300', '400', '500', '600'],
    datasets: [
      {
        label: 'Supply',
        backgroundColor: 'rgb(255, 99, 132, 0.6)',
        borderColor: 'rgb(255, 99, 132, 0.6)',
        data: [150, 400, 200, 600, 150, 210, 450],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Amount',
          },
        },
      ],
    },
  },
});

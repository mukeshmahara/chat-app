const donaught = document.getElementById("donaught");
const piechart = document.getElementById("piechart");
const bargraph = document.getElementById("bargraph");
const bubble_chart = document.getElementById("bubble_chart");
const line_chart = document.getElementById("line_chart");
const area_chart = document.getElementById("area_chart");

const chart = new Chart(bargraph, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Donaught chart
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

// <block:config:0>
const donaught_config = {
  type: 'doughnut',
  data: data,
};
// </block:config>
new Chart(donaught, donaught_config)



// pie chart
const pie_data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
const pie_config = {
  type: 'pie',
  data: data,
};


new Chart(piechart, pie_config)

// bubble chart
const bubble_data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};
const bubble_config = {
  type: 'bubble',
  data: bubble_data,
  options: {}
};
new Chart(bubble_chart, bubble_config)

// line chart
// const labels = Utils.months({count: 7});
const labels = ["Jan", "Feb", "Mar","April"," May", "June"];
const line_data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const line_config = {
  type: 'line',
  data: line_data,
};

new Chart(line_data, line_config)
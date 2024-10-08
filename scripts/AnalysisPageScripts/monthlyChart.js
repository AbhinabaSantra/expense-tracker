import { monthlyExpenseData } from "./data/monthlyExpenseData.js";
import { aspectRatio } from "./utils/aspectRatio.js";
import { dynamicUpdateAspectRatio } from "./utils/dynamicAspectRatioUpdate.js";
import { resizeUpdate } from "./utils/resizeChart.js";

const label = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function monthlyChart(userName) {
  const ctx = document.querySelector(".monthly-chart").getContext("2d");
  const config = {
    type: "line",
    data: {
      labels: label.map((data) => data.slice(0, 3)),
      datasets: [
        {
          label: `Expenses`,
          data: monthlyExpenseData(userName),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
          pointRadius: 0,
          borderCapStyle: "round",
          borderJoinStyle: "round",
          fill: "start",
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Month →",
            font: {
              size: "14",
              weight: "bold",
            },
            color: "black",
          },
          ticks: {
            color: "rgb(40,40,40)",
          },
        },
        y: {
          title: {
            display: true,
            text: "Amount →",
            font: {
              size: "14",
              weight: "bold",
            },
            color: "black",
          },
          ticks: {
            maxRotation: 0,
            color: "rgb(40,40,40)",
          },
          border: {
            width: 2,
          },
          beginAtZero: true,
          suggestedMax: Math.max(...monthlyExpenseData(userName)) + 2000,
        },
      },
      aspectRatio: aspectRatio(),
      maintainAspectRatio: false,
      resposnive: true,
      plugins: {
        title: {
          display: true,
          text: `MONTHLY EXPENSES IN ${new Date().getFullYear()}`,
          font: {
            size: 14,
          },
          color: "black",
        },
        tooltip: {
          callbacks: {
            title: function (context) {
              let title;
              let index = context[0].dataIndex;
              title = label[index];
              return title;
            },
          },
        },
      },
    },
  };
  const chartRender = new Chart(ctx, config);
  dynamicUpdateAspectRatio(chartRender);
  resizeUpdate(chartRender);
}

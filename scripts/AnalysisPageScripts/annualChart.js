import { annualExpenseData } from "./data/annualExpenseData.js";
import { aspectRatio } from "./utils/aspectRatio.js";
import { dynamicUpdateAspectRatio } from "./utils/dynamicAspectRatioUpdate.js";
import { resizeUpdate } from "./utils/resizeChart.js";

export function annualChart(userName) {
  const ctx = document.querySelector(".annual-chart").getContext("2d");
  const config = {
    type: "bar",
    data: {
      labels: Object.keys(annualExpenseData(userName)),
      datasets: [
        {
          label: "Expense",
          data: Object.values(annualExpenseData(userName)),
          borderColor: "rgb(75,192,192)",
          backgroundColor: "rgba(75,192,192, 0.2)",
          borderWidth: 2,
          pointRadius: 0,
          borderCapStyle: "round",
          borderJoinStyle: "round",
          fill: "start",
          maxBarThickness: 60,
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Year →",
            font: {
              size: "14",
              weight: "bold",
            },
            color: "black",
          },
          ticks: {
            color: "rgb(40,40,40)",
            maxRotation: 0,
          },
          border: {
            width: 2,
            color: "rgb(75,192,192)",
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
            color: "rgb(40,40,40)",
          },
          border: {
            width: 2,
            color: "rgb(75,192,192",
          },
          beginAtZero: true,
          suggestedMax:
            Math.max(...Object.values(annualExpenseData(userName))) + 3000,
        },
      },
      aspectRatio: aspectRatio(),
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `ANNUAL EXPENSES OVER YEARS`,
          font: {
            size: 14,
          },
          color: "black",
        },
      },
    },
  };
  const chartRender = new Chart(ctx, config);
  dynamicUpdateAspectRatio(chartRender);
  resizeUpdate(chartRender);
}

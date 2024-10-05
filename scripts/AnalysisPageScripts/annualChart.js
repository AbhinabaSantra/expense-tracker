import { annualExpenseData } from "./data/annualExpenseData.js";
import { aspectRatio } from "./utils/aspectRatio.js";
import { dynamicUpdateAspectRatio } from "./utils/dynamicAspectRatioUpdate.js";

export function annualChart(userName) {
  const ctx = document.querySelector(".annual-chart").getContext("2d");
  const config = {
    type: "bar",
    data: {
      labels: Object.keys(annualExpenseData(userName)),
      datasets: [
        {
          label: `Annual Expenses over Years`,
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
        y: {
          beginAtZero: true,
          suggestedMax:
            Math.max(...Object.values(annualExpenseData(userName))) + 1000,
        },
      },
      aspectRatio: aspectRatio(),
    },
  };
  const chartRender = new Chart(ctx, config);
  dynamicUpdateAspectRatio(chartRender);
}

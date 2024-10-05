import { dailyExpenseData } from "./data/dailyExpenseData.js";
import { aspectRatio } from "./utils/aspectRatio.js";
import { dynamicUpdateAspectRatio } from "./utils/dynamicAspectRatioUpdate.js";

export function dailyChart(userName) {
  // Ensure this points to a <canvas> element
  const dailyChartElem = document
    .querySelector(".daily-chart")
    .getContext("2d");

  // Configuration for the chart
  const config = {
    type: "line",
    data: {
      labels: Array(32)
        .fill()
        .map((_, index) => index),
      datasets: [
        {
          //prettier-ignore
          label: `Daily Expenses in ${new Date().toLocaleDateString("en-US", {month: "long",})}`,
          data: dailyExpenseData(userName),
          borderColor: "rgb(153, 102, 255)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          fill: "start",
          borderWidth: 2,
          pointRadius: 0,
          borderCapStyle: "round",
          borderJoinStyle: "round",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: Math.max(...dailyExpenseData(userName)) + 400,
        },
      },
      aspectRatio: aspectRatio(),
    },
  };

  // Create the chart
  const chartRender = new Chart(dailyChartElem, config);
  dynamicUpdateAspectRatio(chartRender);
}

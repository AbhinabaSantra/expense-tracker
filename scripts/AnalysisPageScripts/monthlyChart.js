import { monthlyExpenseData } from "./data/monthlyExpenseData.js";
import { aspectRatio } from "./utils/aspectRatio.js";
import { dynamicUpdateAspectRatio } from "./utils/dynamicAspectRatioUpdate.js";

export function monthlyChart(userName) {
  const ctx = document.querySelector(".monthly-chart").getContext("2d");
  const config = {
    type: "line",
    data: {
      labels: [
        "0",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: `Monthly Expense in ${new Date().getFullYear()}`,
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
        y: {
          beginAtZero: true,
          suggestedMax: Math.max(...monthlyExpenseData(userName)) + 1000,
        },
      },
      aspectRatio: aspectRatio(),
    },
  };
  const chartRender = new Chart(ctx, config);
  dynamicUpdateAspectRatio(chartRender);
}

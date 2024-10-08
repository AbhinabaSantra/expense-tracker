import { dailyExpenseData } from "./data/dailyExpenseData.js";
import { aspectRatio } from "./utils/aspectRatio.js";
import { dynamicUpdateAspectRatio } from "./utils/dynamicAspectRatioUpdate.js";
import { resizeUpdate } from "./utils/resizeChart.js";

export function dailyChart(userName) {
  const dailyChartElem = document
    .querySelector(".daily-chart")
    .getContext("2d");

  const config = {
    type: "line",
    data: {
      labels: Array(31)
        .fill()
        .map((_, index) => index + 1),
      datasets: [
        {
          //prettier-ignore
          label: `Expense`,
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
        x: {
          title: {
            display: true,
            text: `Date  →`,
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
        },
        y: {
          title: {
            display: true,
            text: "Amount  →",
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
          },
          beginAtZero: true,
          suggestedMax: Math.max(...dailyExpenseData(userName)) + 400,
        },
      },
      aspectRatio: aspectRatio(),
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `DAILY EXPENSES IN ${new Date()
            .toLocaleDateString("en-US", {
              month: "long",
            })
            .toUpperCase()}`,
          font: {
            size: 14,
          },
          color: "black",
        },
        tooltip: {
          callbacks: {
            title: function (context) {
              let title;
              if (["1", "21", "31"].includes(context[0].label)) {
                title = `${context[0].label}st ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                  }
                )}`;
              } else if (["2", "22"].includes(context[0].label)) {
                title = `${context[0].label}nd ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                  }
                )}`;
              } else if (["3", "23"].includes(context[0].label)) {
                title = `${context[0].label}rd ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                  }
                )}`;
              } else {
                title = `${context[0].label}th ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                  }
                )}`;
              }
              return title;
            },
          },
        },
      },
    },
  };

  const chartRender = new Chart(dailyChartElem, config);
  dynamicUpdateAspectRatio(chartRender);
  resizeUpdate(chartRender);
}

export function resizeUpdate(chartInstance) {
  window.addEventListener("resize", () => {
    chartInstance.resize();
  });
}

import { aspectRatio } from "./aspectRatio.js";

export function dynamicUpdateAspectRatio(chartRender) {
  window.addEventListener("resize", () => {
    const newAspectRatio = aspectRatio();
    if (chartRender.options.aspectRatio !== newAspectRatio) {
      chartRender.options.aspectRatio = newAspectRatio;
      chartRender.update();
    }
  });
  window.addEventListener("resize", () => {
    chartRender.update();
  });
}

export function aspectRatio() {
  if (window.matchMedia("(max-width:600px)").matches) {
    return 1.5;
  } else {
    return 2;
  }
}

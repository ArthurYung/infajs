export function getDevicePixelRatio() {
  try {
    return window.devicePixelRatio || 1;
  } catch (e) {
    return 1;
  }
}

import { getDevicePixelRatio } from '../utils/global';

const RESIZE_CALLBACKS = new Set<HTMLCanvasElement>();
const PIXEL_RATIO = getDevicePixelRatio();

export interface SceneOptions {
  canvas: HTMLCanvasElement;
}

function nativeListenerFn() {
  RESIZE_CALLBACKS.forEach((canvas) => {
    const [width, height] = getCanvasRect(canvas);
    canvas.width = width;
    canvas.height = height;
  });
}

export function getCanvasRect(el: HTMLCanvasElement) {
  return [el.offsetWidth * PIXEL_RATIO, el.offsetHeight * PIXEL_RATIO];
}

export function onResize(canvas: HTMLCanvasElement) {
  RESIZE_CALLBACKS.add(canvas);
}

export function offReisze(canvas: HTMLCanvasElement) {
  RESIZE_CALLBACKS.delete(canvas);
}

// todo 是否考虑removeEventListener？
window.addEventListener('reize', nativeListenerFn);

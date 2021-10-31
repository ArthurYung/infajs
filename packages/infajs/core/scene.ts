import { getCanvasRect, offReisze, onResize } from './resize';

export interface SceneOptions {
  canvas: HTMLCanvasElement;
}

function initCanvasRect(el: HTMLCanvasElement) {
  const [width, height] = getCanvasRect(el);
  el.width = width;
  el.height = height;
  return el;
}

function createCanvas(el: HTMLCanvasElement) {
  const element = initCanvasRect(el);
  const context = element.getContext('2d');
  const canvas = {
    element,
    context,
    get width() {
      return canvas.element.width;
    },
    get height() {
      return canvas.element.height;
    },
    resize(w: number, h: number) {
      canvas.element.width = w;
      canvas.element.height = h;
    },
    destory() {
      offReisze(canvas.element);
    },
  };

  onResize(element);
  return canvas;
}

export function createScene(options: SceneOptions) {
  const canvas = createCanvas(options.canvas);
  const scene = {
    canvas,
    model: null,
    setModel(model: any) {
      scene.model = model;
    },
    destory() {
      canvas.destory();
    },
  };

  return scene;
}

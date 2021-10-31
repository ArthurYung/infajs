import { ModelOptions } from './type';

const DEFAULT_OPTION: ModelOptions = {
  image: new Image(),
  center: true,
};

export function createImageModel(options: ModelOptions) {
  return Object.assign(DEFAULT_OPTION, options);
}

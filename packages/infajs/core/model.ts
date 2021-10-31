import { MODEL_ELEMENT, MODEL_IMAGE } from '../actions/model';
import { createImageModel } from '../material/models/image';
import { ModelOptions } from '../material/models/type';

export type ModelType = MODEL_ELEMENT | MODEL_IMAGE;

export function createModel(type: ModelType, options: ModelOptions) {
  switch (type) {
    case 'MODEL_IMAGE':
      return createImageModel(options);
    default:
      return createImageModel(options);
  }
}

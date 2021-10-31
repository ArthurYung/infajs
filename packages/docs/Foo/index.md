---
nav:
  title: Components
  path: /components
---

## Foo

Demo:

```tsx
import React from 'react';
import { createScene, createModel, MODEL_IMAGE } from '@infajs/infajs';
import MODEL_1 from './model-1.png';

export default () => {
  const canvasEl = React.useRef(null);
  React.useEffect(() => {
    const img = new Image();
    img.src = MODEL_1;
    img.onload = () => {
      const scene = createScene({ canvas: canvasEl.current });
      const model = createModel(MODEL_IMAGE, { image: img });
      scene.setModel(model);
      console.log(scene);
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasEl} />
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

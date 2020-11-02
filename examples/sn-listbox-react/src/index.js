import { useElement, useEffect, useApp, useModel, useSelections } from '@nebula.js/stardust';

import properties from './object-properties';
import data from './data';

import { render, teardown } from './components/root';

export default function supernova(/* env */) {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const app = useApp();
      const model = useModel();
      const selections = useSelections();
      useEffect(
        () => () => {
          teardown(element);
        },
        []
      );
      render({
        element,
        app,
        model,
        selections,
      });
    },
  };
}

import { React, ReactDOM, ListBox } from '@nebula.js/stardust';

export function render({ element, model, selections }) {
  ReactDOM.render(<ListBox model={model} selections={selections} direction="ltr" />, element);
  return true;
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}

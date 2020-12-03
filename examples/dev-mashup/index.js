import { embed } from '@nebula.js/stardust';
import bar from '@nebula.js/sn-bar-chart';
import line from '@nebula.js/sn-line-chart';
import connect from './connect';

function init() {
  connect().then((app) => {
    const nebbie = embed(app, {
      types: [
        {
          name: 'bar',
          load: () => Promise.resolve(bar),
        },
        {
          name: 'line',
          load: () => Promise.resolve(line),
        },
      ],
    });

    // nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')));

    document.querySelectorAll('.object').forEach(async (el) => {
      const type = el.getAttribute('data-type');

      const viz = await nebbie.render({
        type,
        element: el,
        options: {
          conversion: true,
        },

        fields: ['Alpha', '=Sum(Expression1)'],
      });

      viz.__DO_NOT_USE__.convertTo({ newType: 'line' });
    });
  });
}

init();

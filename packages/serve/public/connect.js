/* global ENIGMA_HOST, ENIGMA_PORT */

import enigma from 'enigma.js';
import qixSchema from 'enigma.js/schemas/3.2.json';
import SenseUtilities from 'enigma.js/sense-utilities';

const params = (() => {
  const opts = {};
  window.location.search.substring(1).split('&').forEach((pair) => {
    const idx = pair.indexOf('=');
    const name = pair.substr(0, idx);
    let value = decodeURIComponent(pair.substring(idx + 1));
    if (name === 'cols') {
      value = value.split(',');
    }
    opts[name] = value;
  });

  return opts;
})();

const defaultConfig = {
  host: ENIGMA_HOST || window.location.hostname || 'localhost',
  port: ENIGMA_PORT,
  secure: false,
};

let connection;
const connect = () => {
  if (!connection) {
    connection = enigma.create({
      schema: qixSchema,
      url: SenseUtilities.buildUrl(defaultConfig),
    }).open();
  }

  return connection;
};

const openApp = id => enigma.create({
  schema: qixSchema,
  url: SenseUtilities.buildUrl({
    ...defaultConfig,
    appId: id,
  }),
}).open().then(global => global.openDoc(id));

export {
  connect,
  openApp,
  params,
};
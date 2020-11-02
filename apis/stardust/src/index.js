/* eslint no-underscore-dangle: 0 */
import ReactDOM from 'react-dom';
import React from 'react';

import 'regenerator-runtime/runtime'; // Polyfill for using async/await
import embed from '@nebula.js/nucleus';
import ListBox from '@nebula.js/nucleus/src/components/listbox/ListBox';
import { generator, hook } from '@nebula.js/supernova';
import theme from '@nebula.js/theme';
import locale from '@nebula.js/locale';

// mashup api
export { embed };

// component api
export {
  useState,
  useEffect,
  useMemo,
  useImperativeHandle,
  usePromise,
  useAction,
  useRect,
  useModel,
  useApp,
  useGlobal,
  useElement,
  useSelections,
  useTheme,
  useLayout,
  useStaleLayout,
  useAppLayout,
  useTranslator,
  useConstraints,
  useOptions,
  onTakeSnapshot,
} from '@nebula.js/supernova';

// component internals
const __DO_NOT_USE__ = { generator, hook, theme, locale };
export { __DO_NOT_USE__ };

export { React, ReactDOM, ListBox };

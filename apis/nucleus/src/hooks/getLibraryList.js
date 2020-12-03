import getSessionModel from './getSessionModel';
import getLayout from './getLayout';

const D = {
  qInfo: {
    qType: 'DimensionList',
    qId: 'DimensionList',
  },
  qDimensionListDef: {
    qType: 'dimension',
    qData: {
      labelExpression: '/qDimension/qLabelExpression',
      title: '/qMetaDef/title',
    },
  },
};

const M = {
  qInfo: {
    qType: 'MeasureList',
    qId: 'MeasureList',
  },
  qMeasureListDef: {
    qType: 'measure',
    qData: {
      labelExpression: '/qMeasure/qLabelExpression',
      title: '/qMetaDef/title',
    },
  },
};

export default async function list(app, type = 'dimension') {
  const def = type === 'dimension' ? D : M;

  const model = await getSessionModel(def, app);
  console.log('model', model);
  const layout = await getLayout(model);
  console.log('layout', layout);
  return [layout ? (layout.qDimensionList || layout.qMeasureList).qItems || [] : []];
}

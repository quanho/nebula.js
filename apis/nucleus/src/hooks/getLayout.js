import getRpc from './getRpc';

export default async function getLayout(model) {
  const result = await getRpc(model, 'getLayout');
  console.log('getLayout', result);
  return result[0];
}

export async function getAppLayout(model) {
  const result = await getRpc(model, 'getAppLayout');
  return result[0];
}

import { modelStore, rpcRequestSessionModelStore } from '../stores/model-store';

export default async function getSessionModel(definition, app) {
  const key = app ? `${app.id}/${JSON.stringify(definition)}` : null;

  let model;
  let rpcShared;

  if (key) {
    rpcShared = rpcRequestSessionModelStore.get(key);
  }

  if (!app) {
    return model;
  }
  // Create new session object
  const create = async () => {
    if (!rpcShared) {
      const rpc = app.createSessionObject(definition);
      rpcShared = rpc;
      rpcRequestSessionModelStore.set(key, rpcShared);
    }
    model = await rpcShared;
    modelStore.set(key, model);
  };
  await create();
  return model;
}

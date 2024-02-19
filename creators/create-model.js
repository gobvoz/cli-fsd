import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

import createModelType from './create-model-type.js';
import createModelSlice from './create-model-slice.js';
import createModelSelector from './create-model-selector.js';
import createModelService from './create-model-service.js';

const createModel = async (layer, sliceName) => {
  const resolvePath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'model', ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
      await createFolder(resolvePath('types'));
      await createFolder(resolvePath('slice'));
      await createFolder(resolvePath('selectors'));
      await createFolder(resolvePath('services'));
    } catch (error) {
      log.warning(`Could not create 'model' structure for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createModelType(layer, sliceName);
  await createModelSlice(layer, sliceName);
  await createModelSelector(layer, sliceName);
  await createModelService(layer, sliceName);
};

export default createModel;

import path from 'path';
import { existsSync as folderExist } from 'fs';

import createModel from './create-model.js';
import createUI from './create-ui.js';
import createPublicApi from './create-public-api.js';
import createLazyLoader from './create-lazy-loader.js';
import createLazyPublicApi from './create-lazy-public-api.js';

import createFolder from '../utils/create-folder.js';
import log from '../utils/log.js';

const createTemplate = async (layer, sliceName) => {
  if (folderExist(path.resolve('src', layer, sliceName.kebabCase))) {
    log.error(`Could not create '${layer}/${sliceName.kebabCase}' directory`);
    log.error(`folder already exists`);
    process.exit();
  }

  await createFolder(path.resolve('src'));
  await createFolder(path.resolve('src', layer));
  await createFolder(path.resolve('src', layer, sliceName.kebabCase));

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);

  if (layer === 'pages') {
    await createLazyLoader(layer, sliceName);
    await createLazyPublicApi(layer, sliceName);
  } else {
    await createPublicApi(layer, sliceName);
  }

  log.done(`Successfully created '${layer}/${sliceName.kebabCase}' template`);
};

export default createTemplate;

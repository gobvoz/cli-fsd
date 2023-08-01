import fs from 'fs/promises';
import { existsSync as folderExist } from 'fs';
import path from 'path';

import log from '../utils/log.js';

import createModel from './create-model.js';
import createUI from './create-ui.js';
import createPublicApi from './create-public-api.js';

const createTemplate = async (layer, sliceName) => {
  try {
    const dirPath = path.resolve('src');

    if (!folderExist(dirPath)) {
      log.info(`Creating "${dirPath}" directory`);
      await fs.mkdir(dirPath);
    }
  } catch (error) {
    log.error(`Could not create "${dirPath}" directory`);
    process.exit();
  }

  try {
    const dirPath = path.resolve('src', layer);

    if (!folderExist(dirPath)) {
      log.info(`Creating "${dirPath}" directory`);
      await fs.mkdir(dirPath);
    }
  } catch (error) {
    log.error(`Could not create "${dirPath}" directory`);
    process.exit();
  }

  try {
    const dirPath = path.resolve('src', layer, sliceName.kebabCase);

    if (!folderExist(dirPath)) {
      await fs.mkdir(dirPath);
    }
  } catch (error) {
    log.error(`Could not create "${dirPath}" directory`);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);
};

export default createTemplate;

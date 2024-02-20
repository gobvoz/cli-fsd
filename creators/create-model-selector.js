import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

const createModelSelector = async (layer, sliceName) => {
  const resolvePath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'model', ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
      await createFolder(resolvePath('selectors'));
    } catch (error) {
      log.warning(`Could not create 'model/selectors' structure for "${sliceName.kebabCase}"`);
      process.exit();
    }
  };

  const createTemplate = async () => {
    try {
      await fs.writeFile(resolvePath('selectors', `${sliceName.kebabCase}.selector.ts`), '');
    } catch (error) {
      log.error(`Could not create 'redux selector' for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createTemplate();
};

export default createModelSelector;

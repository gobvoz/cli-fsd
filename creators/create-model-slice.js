import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

import reduxSliceTemplate from '../templates/redux-slice-template.js';

const createModelSlice = async (layer, sliceName) => {
  const resolvePath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'model', ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
      await createFolder(resolvePath('slice'));
    } catch (error) {
      log.warning(`Could not create 'model/slice' structure for "${sliceName.kebabCase}"`);
    }
  };

  const createTemplate = async () => {
    try {
      await fs.writeFile(
        resolvePath('slice', `${sliceName.kebabCase}.slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (error) {
      log.error(`Could not create 'redux slice' for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createTemplate();
};

export default createModelSlice;

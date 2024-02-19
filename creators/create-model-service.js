import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

const createModelService = async (layer, sliceName) => {
  const resolvePath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'model', ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
      await createFolder(resolvePath('services'));
    } catch (error) {
      log.warning(`Could not create 'model/service' structure for "${sliceName.kebabCase}"`);
    }
  };

  const createTemplate = async () => {
    try {
      await fs.writeFile(
        resolvePath('services', `${sliceName.kebabCase}.service.ts`),
        '// TODO: Implement service',
      );
    } catch (error) {
      log.error(`Could not create 'service' for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createTemplate();
};

export default createModelService;

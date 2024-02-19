import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

import schemaTypeTemplate from '../templates/schema-type-template.js';

const createModelType = async (layer, sliceName) => {
  const resolvePath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'model', ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
      await createFolder(resolvePath('types'));
    } catch (error) {
      log.warning(`Could not create 'model/types' structure for "${sliceName.kebabCase}"`);
    }
  };

  const createTemplate = async () => {
    try {
      await fs.writeFile(
        resolvePath('types', `${sliceName.kebabCase}.schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (error) {
      log.error(`Could not create 'schema' type for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createTemplate();
};

export default createModelType;

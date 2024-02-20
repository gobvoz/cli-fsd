import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

import testTemplate from '../templates/test-template.js';

const createTest = async (layer, sliceName, segment) => {
  const resolvePath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, '__TESTS__', ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
    } catch (error) {
      log.warning(`Could not create 'tests' structure for "${sliceName.kebabCase}"`);
      process.exit();
    }
  };

  const createTemplate = async () => {
    try {
      await fs.writeFile(
        resolvePath(`${segment || sliceName.kebabCase}.test.ts`),
        testTemplate(sliceName),
      );
    } catch (error) {
      log.error(`Could not create 'tests' for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createTemplate();
};

export default createTest;

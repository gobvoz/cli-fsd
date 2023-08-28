import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

import lazyLoaderTemplate from '../templates/lazy-loader-template.js';

const createLazyLoader = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'ui', ...segments);

  const createLazyLoader = async () => {
    try {
      await fs.writeFile(
        resolveUIPath(`${sliceName.kebabCase}.lazy.tsx`),
        lazyLoaderTemplate(sliceName),
      );
    } catch (error) {
      log.error(`Could not create UI component for "${sliceName.kebabCase}"`);
    }
  };

  await createFolder('src', layer, sliceName.kebabCase, 'ui');
  await createLazyLoader();
};

export default createLazyLoader;

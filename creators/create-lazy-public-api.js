import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';

import lazyPublicApiTemplate from '../templates/lazy-public-api-template.js';

const createPublicApi = async (layer, sliceName) => {
  try {
    await fs.writeFile(
      path.resolve('src', layer, sliceName.kebabCase, 'index.ts'),
      lazyPublicApiTemplate(sliceName),
    );
  } catch (error) {
    log.error(`Could not create public API for "${sliceName.kebabCase}"`);
  }
};

export default createPublicApi;

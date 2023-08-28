import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';

import publicApiTemplate, { publicWidgetApiTemplate } from '../templates/public-api-template.js';

const createPublicApi = async (layer, sliceName) => {
  try {
    const template =
      layer === 'widgets' ? publicWidgetApiTemplate(sliceName) : publicApiTemplate(sliceName);

    await fs.writeFile(path.resolve('src', layer, sliceName.kebabCase, 'index.ts'), template);
  } catch (error) {
    log.error(`Could not create public API for "${sliceName.kebabCase}"`);
  }
};

export default createPublicApi;

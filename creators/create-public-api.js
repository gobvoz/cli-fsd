import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';

import publicApiTemplate, { publicWidgetApiTemplate } from '../templates/public-api-template.js';

const createPublicApi = async (layer, sliceName) => {
  const resolvePath = (...segments) => path.resolve('src', layer, sliceName.kebabCase, ...segments);

  try {
    const template =
      layer === 'widgets' ? publicWidgetApiTemplate(sliceName) : publicApiTemplate(sliceName);

    await fs.writeFile(resolvePath('index.ts'), template);
  } catch (error) {
    log.error(`Could not create 'public API' for "${sliceName.kebabCase}"`);
  }
};

export default createPublicApi;

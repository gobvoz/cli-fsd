import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';

import componentTemplate from '../templates/component-template.js';
import storyTemplate from '../templates/story-template.js';
import styleTemplate from '../templates/style-template.js';

import createFolder from '../utils/create-folder.js';

const createUI = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'ui', ...segments);

  const createComponent = async () => {
    try {
      await fs.writeFile(resolveUIPath(`${sliceName.kebabCase}.tsx`), componentTemplate(sliceName));
      await fs.writeFile(
        resolveUIPath(`${sliceName.kebabCase}.stories.tsx`),
        storyTemplate(layer, sliceName),
      );
      await fs.writeFile(
        resolveUIPath(`${sliceName.kebabCase}.module.scss`),
        styleTemplate(sliceName),
      );
    } catch (error) {
      log.error(`Could not create UI component for "${sliceName.kebabCase}"`);
    }
  };

  await createFolder('src', layer, sliceName.kebabCase, 'ui');
  await createComponent();
};

export default createUI;

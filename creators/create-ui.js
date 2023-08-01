import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';

import componentTemplate from '../templates/component-template.js';
import storyTemplate from '../templates/story-template.js';
import styleTemplate from '../templates/style-template.js';

const createUI = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (error) {
      log.warning(`Could not create UI directory for "${sliceName.kebabCase}"`);
    }
  };

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

  await createUIDir();
  await createComponent();
};

export default createUI;

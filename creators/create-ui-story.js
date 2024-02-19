import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

import storyTemplate from '../templates/story-template.js';

const createUIStory = async (layer, sliceName) => {
  const resolvePath = (...segments) => path.resolve('src', layer, sliceName.kebabCase, ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
      await createFolder(resolvePath('ui'));
    } catch (error) {
      log.warning(`Could not create 'ui' structure for "${sliceName.kebabCase}"`);
    }
  };

  const createTemplate = async () => {
    try {
      await fs.writeFile(
        resolvePath('ui', `${sliceName.kebabCase}.story.tsx`),
        storyTemplate(layer, sliceName),
      );
    } catch (error) {
      log.error(`Could not create 'ui/story' for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createTemplate();
};

export default createUIStory;

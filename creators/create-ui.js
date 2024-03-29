import path from 'path';

import log from '../utils/log.js';
import createFolder from '../utils/create-folder.js';

import createUIComponent from './create-ui-component.js';
import createUIStyle from './create-ui-style.js';
import createUIStory from './create-ui-story.js';

const createUI = async (layer, sliceName) => {
  const resolvePath = (...segments) => path.resolve('src', layer, sliceName.kebabCase, ...segments);

  const createFolderStructure = async () => {
    try {
      await createFolder(resolvePath());
      await createFolder(resolvePath('ui'));
    } catch (error) {
      log.warning(`Could not create 'ui' structure for "${sliceName.kebabCase}"`);
    }
  };

  await createFolderStructure();
  await createUIComponent(layer, sliceName);
  await createUIStyle(layer, sliceName);
  await createUIStory(layer, sliceName);
};

export default createUI;

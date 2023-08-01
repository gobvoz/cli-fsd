import fs from 'fs/promises';
import path from 'path';

import log from '../utils/log.js';

import reduxSliceTemplate from '../templates/redux-slice-template.js';
import schemaTypeTemplate from '../templates/schema-type-template.js';

const createModel = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    path.resolve('src', layer, sliceName.kebabCase, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slice'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (error) {
      log.warning(`Could not create model structure for "${sliceName.kebabCase}"`);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slice', `${sliceName.kebabCase}.slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (error) {
      log.error(`Could not create redux slice for "${sliceName.kebabCase}"`);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${sliceName.kebabCase}.schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (error) {
      log.error(`Could not create schema type for "${sliceName.kebabCase}"`);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};

export default createModel;

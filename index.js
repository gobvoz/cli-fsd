#!/usr/bin/env node
import { camelCase, pascalCase, kebabCase, snakeCase } from './utils/case-helper.js';
import log from './utils/log.js';

import createTemplate from './creators/create-template.js';
import createLazyLoader from './creators/create-lazy-loader.js';
import createPublicApi from './creators/create-lazy-public-api.js';
import createUIComponent from './creators/create-ui-component.js';
import createTest from './creators/create-test.js';
import init from './init/init.js';

import helpTemplate from './templates/help-template.js';
import logoTemplate from './templates/logo-template.js';

log.yellow(logoTemplate());
log.yellow('Feature-Sliced Design CLI');
console.log();

const command = process.argv[2];
const layer = process.argv[3];
const sliceName = process.argv[4];
const option = process.argv[5];
const segment = process.argv[6];

const helpList = ['/h', '-h', '/help', '--help', '-help', 'help', '/?', '-?', '?'];

const layerList = [
  'page',
  'pages',
  'widget',
  'widgets',
  'feature',
  'features',
  'entity',
  'entities',
];

if (command === 'init') {
  await init();
  process.exit();
}

if (helpList.includes(command)) {
  console.log(helpTemplate());
  process.exit();
}

if (!layerList.includes(layer)) {
  log.error(`Invalid layer: ${layer}`);
  process.exit();
}

if (!sliceName) {
  log.error(`Missing slice name`);
  process.exit();
}

const normalizeLayer = layer => {
  if (layer === 'feature') return 'features';
  if (layer === 'entity') return 'entities';
  if (layer === 'page') return 'pages';
  if (layer === 'widget') return 'widgets';
  return layer;
};

const normalizeOption = option => {
  if (option === 'lazy-loader') return 'lazy-load';
  if (option === 'tests') return 'test';
  if (option === 'components') return 'component';
  return option;
};

if (command === 'new' || command === 'n') {
  await createTemplate(normalizeLayer(layer), {
    camelCase: camelCase(sliceName),
    pascalCase: pascalCase(sliceName),
    kebabCase: kebabCase(sliceName),
    snakeCase: snakeCase(sliceName),
  });
  process.exit();
}

if (command === 'add' || command === 'a') {
  const normalizedLayer = normalizeLayer(layer);
  const normalizedSliceName = {
    camelCase: camelCase(sliceName),
    pascalCase: pascalCase(sliceName),
    kebabCase: kebabCase(sliceName),
    snakeCase: snakeCase(sliceName),
  };
  const normalizedOption = normalizeOption(option);

  switch (normalizedOption) {
    case 'component':
      await createUIComponent(normalizedLayer, normalizedSliceName);
      break;
    case 'test':
      await createTest(normalizedLayer, normalizedSliceName, segment);
      break;
    case 'lazy-load':
      await createLazyLoader(normalizedLayer, normalizedSliceName);
      await createPublicApi(normalizedLayer, normalizedSliceName);
      break;
    default:
      log.error(`Invalid option: ${option}`);
      process.exit();
  }

  process.exit();
}

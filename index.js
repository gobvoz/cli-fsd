#!/usr/bin/env node
import { camelCase, pascalCase, kebabCase, snakeCase } from './utils/case-helper.js';
import log from './utils/log.js';

import createTemplate from './creators/create-template.js';
import init from './init/init.js';

import helpTemplate from './templates/help-template.js';
import logoTemplate from './templates/logo-template.js';

log.yellow(logoTemplate());
log.yellow('Feature-Sliced Design CLI');
console.log();

const layer = process.argv[2];
const sliceName = process.argv[3];

const helpList = ['/h', '-h', '/help', '--help', '-help', 'help', '/?', '-?', '?'];
const layerList = [
  'feature',
  'features',
  'entity',
  'entities',
  'page',
  'pages',
  'widget',
  'widgets',
];

if (layer === 'init') {
  await init(process.argv);
  process.exit();
}

if (helpList.includes(layer)) {
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

createTemplate(normalizeLayer(layer), {
  camelCase: camelCase(sliceName),
  pascalCase: pascalCase(sliceName),
  kebabCase: kebabCase(sliceName),
  snakeCase: snakeCase(sliceName),
});

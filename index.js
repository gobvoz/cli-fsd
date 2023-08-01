#!/usr/bin/env node
import figlet from 'figlet';

import { camelCase, pascalCase, kebabCase, snakeCase } from './utils/case-helper.js';
import createTemplate from './creators/create-template.js';
import log from './utils/log.js';

log.yellow(figlet.textSync('FSD', { horizontalLayout: 'full' }));
log.yellow('Feature-Sliced Design CLI');
console.log();

const layer = process.argv[2];
const sliceName = process.argv[3];

const layerList = ['features', 'entities', 'pages'];

if (!layerList.includes(layer)) {
  log.error(`Invalid layer: ${layer}`);
  process.exit();
}

if (!sliceName) {
  log.error(`Missing slice name`);
  process.exit();
}

createTemplate(layer, {
  camelCase: camelCase(sliceName),
  pascalCase: pascalCase(sliceName),
  kebabCase: kebabCase(sliceName),
  snakeCase: snakeCase(sliceName),
});

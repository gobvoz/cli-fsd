const pattern = new RegExp(
  ['[A-Z][a-z0-9]+', '[A-Z]+(?=[A-Z][a-z0-9])', '[A-Z]+', '[a-z]+', '[0-9]+'].join('|'),
  'g',
);

const parse = (string = '') => (string.match(pattern) || []).map(word => word.toLowerCase());

const upperFirst = string => string.slice(0, 1).toUpperCase() + string.slice(1);
const lowerFirst = string => string && string.slice(0, 1).toLowerCase() + string.slice(1);

const camelCase = (string = '') =>
  lowerFirst(
    parse(string)
      .map(word => upperFirst(word))
      .join(''),
  );

const pascalCase = (string = '') =>
  parse(string)
    .map(word => upperFirst(word))
    .join('');

const kebabCase = (string = '') =>
  parse(string)
    .map(word => word)
    .join('-');

const snakeCase = (string = '') =>
  parse(string)
    .map(word => word)
    .join('_');

export { camelCase, pascalCase, kebabCase, snakeCase };

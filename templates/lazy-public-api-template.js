const lazyPublicApiTemplate = sliceName => {
  return `export { ${sliceName.pascalCase}Schema } from './model/types/${sliceName.kebabCase}.schema';
export { ${sliceName.pascalCase}Lazy as ${sliceName.pascalCase} } from './ui/${sliceName.kebabCase}.lazy';
`;
};

export default lazyPublicApiTemplate;

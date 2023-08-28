const lazyTemplate = sliceName => {
  return `import { lazy } from 'react';

const ${sliceName.pascalCase}Lazy = lazy(() => import('./${sliceName.kebabCase}').then(module => ({ default: module.${sliceName.pascalCase} })),
);

export { ${sliceName.pascalCase}Lazy };
`;
};

export default lazyTemplate;

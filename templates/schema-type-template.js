const schemaTypeTemplate = sliceName => {
  return `export interface ${sliceName.pascalCase}Schema {
  
}  
`;
};

export default schemaTypeTemplate;

const testTemplate = sliceName => {
  return `import { ${sliceName.pascalCase} } from '../ui/${sliceName.kebabCase}';
  
describe('${sliceName.pascalCase}', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<${sliceName.pascalCase} />);
    expect(baseElement).toBeTruthy();
  }
});
`;
};

export default testTemplate;

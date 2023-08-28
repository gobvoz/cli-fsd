const helpTemplate = () => {
  return `Utility to create slices for redux-toolkit in Feature-Sliced Design methodology.

Usage: fsd <layer> <slice-name>

Layer:
  feature(s)  -  create feature slice
  entity(ies) -  create entity slice
  page(s)     -  create page slice
  widget(s)   -  create widget slice

Slice name:
  <slice-name>  -  name of the slice

Example:
  fsd feature user
  fsd entities user
  fsd pages user
  fsd widget user
`;
};

export default helpTemplate;

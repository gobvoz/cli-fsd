const helpTemplate = () => {
  return `Utility to create slices in Feature-Sliced Design methodology.
Expect, that you have already installed react, typescript, @reduxjs/toolkit, @reduxjs/toolkit-query.

Usage: 
  fsd init
  fsd <layer> <slice-name>

Layer:
  feature(s)  -  create feature slice
  entity(ies) -  create entity slice
  page(s)     -  create page slice
  widget(s)   -  create widget slice

Slice name:
  <slice-name>  -  name of the slice

Example:
  fsd init
  fsd feature user
  fsd entities user
  fsd pages user
  fsd widget user
`;
};

export default helpTemplate;

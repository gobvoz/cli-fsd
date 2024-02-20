# cli-fsd

Utility to create slices in Feature-Sliced Design methodology.
Expect, that you have already installed `react`, `typescript`, `@reduxjs/toolkit`, `@reduxjs/toolkit-query`, `i18n` and use `module.scss` structure.

## Installation

```sh
npm install @gobvoz/cli-fsd -g
```

## Usage

Create folders structure

```sh
fsd init
```

generate slice template

```sh
fsd new|n <layer> <slice-name>
```

add to slice template

```sh
fsd add|a <layer> <slice-name> <option>
```

#### Layer:

- `feature(s)` - create feature slice
- `entit(y|ies)` - create entity slice
- `page(s)` - create page slice
- `widget(s)` - create widget slice

#### Slice name:

- `<slice-name>` - name of the slice

#### Option:

- `lazy-load(er)` - add lazy loader template to the `slice-name`. Typically used to load a page asynchronously.
- `test(s)` - create `__TEST__` folder or add a test template to an existing folder.
- `component` - add component template to `ui` folder.

## Example

```sh
fsd new pages user
fsd new widget user
fsd new entities user
fsd new feature user
fsd add feature user lazy-load
fsd add entity user tests [specific name]
fsd add entity user model
```

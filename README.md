# cli-fsd

Utility to create slices in Feature-Sliced Design methodology.
Expect, that you have already installed `react`, `typescript`, `@reduxjs/toolkit`, `@reduxjs/toolkit-query`.

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
fsd <layer> <slice-name>
```

#### Layer:

- `feature(s)` - create feature slice
- `entity(ies)` - create entity slice
- `page(s)` - create page slice
- `widget(s)` - create widget slice

#### Slice name:

- `<slice-name>` - name of the slice

## Example

```sh
fsd feature user
fsd entities user
fsd pages user
fsd widget user
```

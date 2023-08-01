import { camelCase, pascalCase, kebabCase, snakeCase } from '../utils/case-helper';

describe('case-helper', () => {
  it('should work with empty string', () => {
    expect(camelCase('')).toEqual('');
    expect(pascalCase('')).toEqual('');
    expect(kebabCase('')).toEqual('');
    expect(snakeCase('')).toEqual('');
  });
  it('camelCase should work', () => {
    expect(camelCase(' foo Bar ')).toEqual('fooBar');
    expect(camelCase('--foo-bar--')).toEqual('fooBar');
    expect(camelCase('__FOO_BAR__')).toEqual('fooBar');
    expect(camelCase('FooBar')).toEqual('fooBar');
    expect(camelCase('Fo9oB2ar')).toEqual('fo9oB2ar');
  });
  it('pascalCase should work', () => {
    expect(pascalCase(' foo Bar ')).toEqual('FooBar');
    expect(pascalCase('--foo-bar--')).toEqual('FooBar');
    expect(pascalCase('__FOO_BAR__')).toEqual('FooBar');
    expect(pascalCase('FooBar')).toEqual('FooBar');
    expect(pascalCase('Fo9oB2ar')).toEqual('Fo9oB2ar');
  });
  it('kebabCase should work', () => {
    expect(kebabCase(' foo Bar ')).toEqual('foo-bar');
    expect(kebabCase('--foo-bar--')).toEqual('foo-bar');
    expect(kebabCase('__FOO_BAR__')).toEqual('foo-bar');
    expect(kebabCase('FooBar')).toEqual('foo-bar');
    expect(kebabCase('Fo9oB2ar')).toEqual('fo9o-b2ar');
  });
  it('snakeCase should work', () => {
    expect(snakeCase(' foo Bar ')).toEqual('foo_bar');
    expect(snakeCase('--foo-bar--')).toEqual('foo_bar');
    expect(snakeCase('__FOO_BAR__')).toEqual('foo_bar');
    expect(snakeCase('FooBar')).toEqual('foo_bar');
    expect(snakeCase('Fo9oB2ar')).toEqual('fo9o_b2ar');
  });
});

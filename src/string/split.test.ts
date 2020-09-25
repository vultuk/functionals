import { split } from './split';

test('String/Split', () => {
  const splitByFullstop = split('.');

  expect(splitByFullstop('Hello.World')).toEqual(['Hello', 'World']);
  expect(splitByFullstop('My.Code.Here')).toEqual(['My', 'Code', 'Here']);

  const splitBySlash = split('/');
  expect(splitBySlash('my/folder/name')).toEqual(['my', 'folder', 'name']);
  expect(splitBySlash('path/to/url')).toEqual(['path', 'to', 'url']);
});

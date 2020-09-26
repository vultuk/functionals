import { join } from './join';

test('String / Join', () => {
  const joinWithFullstop = join('.');
  expect(joinWithFullstop(['www', 'hello', 'com'])).toBe('www.hello.com');

  const createFilePath = join('/');
  expect(createFilePath(['path', 'to', 'file.pdf'])).toBe('path/to/file.pdf');
});

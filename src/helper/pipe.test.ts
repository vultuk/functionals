import { pipe } from './pipe';

test('Helper/Pipe', () => {
  const value = 'hello world';

  const pipedValue = pipe<string, string>(
    (s: string) => s.toUpperCase(),
    (s: string) => s.replace(' ', '-'),
    (s: string) => s.split('').reverse().join(''),
  );

  expect(pipedValue(value)).toBe('DLROW-OLLEH');
});

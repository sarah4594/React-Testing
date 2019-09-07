import { add } from './add';

// Unit test
// It only tests one thing
test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(5, 2)).toBe(7);
});

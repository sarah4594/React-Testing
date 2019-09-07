import { add, total } from './App';

// Unit test
// It only tests one thing
test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(5, 2)).toBe(7);
});

// Integration tests
// Tests things working together
test('total', () => {
  expect(total(5, 20)).toBe('$25');
});

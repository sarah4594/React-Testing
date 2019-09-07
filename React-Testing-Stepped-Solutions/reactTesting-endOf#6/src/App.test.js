import { total } from './App';
import { add } from './add';

jest.mock('./add', () => ({
  add: jest.fn(() => 25)
}));

// Integration tests
// Tests things working together
test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1);

  // Redundant
  add.mockImplementation(() => 30);
  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2);
});

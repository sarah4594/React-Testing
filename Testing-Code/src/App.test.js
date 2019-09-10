import { total } from './App'

// Integration Test - testing functions that rely on other functions
test('total', () => {
  expect(total(5, 20)).toBe('$25')
})

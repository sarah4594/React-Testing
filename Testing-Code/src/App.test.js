import { total } from './App'

const add = jest.fn(() => 7)

test('add', () => {
  // const value = add(1, 2)
  // expect(value).toBe(3)
  expect(add(5, 2)).toBe(7)
  expect(add).toHaveBeenCalledTimes(1)
  expect(add).toHaveBeenCalledWith(5, 2)
})

// Integration Test - testing functions that rely on other functions
// test('total', () => {
//   expect(total(5, 20)).toBe('$25')
// })

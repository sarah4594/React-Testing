import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Counter from './Counter'

afterEach(cleanup)

it('<Counter>', () => {
  const { debug, getByTestId } = render(<Counter />)
  const counterButton = getByTestId('counter-button')

  debug() // outputs dom as string

  // asserts text value 0 is found within button
  // expect(wrapper.getByText('0').tagName).toBe('BUTTON')

  // asserts couter-button is a button
  expect(counterButton.tagName).toBe('BUTTON')
  // asserts the counter-button starts at 0
  expect(counterButton.textContent).toBe('0')

  fireEvent.click(counterButton)
  expect(counterButton.textContent).toBe('1')
})

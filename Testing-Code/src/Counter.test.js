import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Counter from './Counter'

it('<Counter>', () => {
  const { debug, getByTestId } = render(<Counter />)

  debug() // outputs dom as string

  // asserts text value 0 is found within button
  //expect(wrapper.getByText('0').tagName).toBe('BUTTON')
  expect(getByTestId('counter-button').tagName).toBe('BUTTON')
  expect(getByTestId('counter-button').textContent).toBe('0')
})

import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  // Renders component
  const { debug, getByTestId } = render(<Counter />);

  debug(); // Outputs dom as string

  // Asserts counter-button is a button
  expect(getByTestId('counter-button').tagName).toBe('BUTTON');
  // Asserts counter-button starts at 0
  expect(getByTestId('counter-button').textContent).toBe('0');
});

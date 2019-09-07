import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  // Renders component
  const wrapper = render(<Counter />);

  wrapper.debug(); // Outputs dom as string

  // Asserts text value 0 is found within a button
  expect(wrapper.getByText('0').tagName).toBe('BUTTON');
});

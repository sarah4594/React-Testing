import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Movie from './Movie';

afterEach(cleanup);

console.error = jest.fn();

test('<Movie />', () => {
  render(<Movie />);
  expect(console.error).toBeCalled();
});

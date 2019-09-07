import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm>', () => {
  const { queryByTestId, getByText } = render(<MovieForm submitForm={onSubmit} />);
  expect(queryByTestId('movie-form')).toBeTruthy();
  fireEvent.click(getByText('Submit'));

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

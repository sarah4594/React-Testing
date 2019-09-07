import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm>', () => {
  const { queryByTestId, getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit} />);
  expect(queryByTestId('movie-form')).toBeTruthy();

  // Note Might not work.
  // getByLabelText('Text').value = 'hello';
  // fireEvent.change(getByLabelText('Text'));

  fireEvent.change(getByLabelText('Text'), {
    target: { value: 'hello' },
  });

  fireEvent.click(getByText('Submit'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    text: 'hello',
  });
});

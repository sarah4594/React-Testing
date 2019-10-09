import React from 'react'
import { render, cleanup, fireEvent, getByTestId } from 'react-testing-library'
import MovieForm from './MovieForm'

afterEach(cleanup)
const onSubmit = jest.fn()

it('<MovieForm />', () => {
  const { queryByTestId, getByText } = render(
    <MovieForm submitForm={onSubmit} />,
  )

  expect(queryByTestId('movie-form').textContent).toBeTruthy()
  fireEvent.click(getByText('Submit'))

  expect(onSubmit).toHaveBeenCalledTimes(1)
})

import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';

import MovieDetail from '../MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'alsdjfal;sdjf',
  },
};

console.error = jest.fn();

const movie = {
  id: 'hi',
  title: 'Level Up',
};

test('<MovieDetail />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movie));

  const { getByTestId } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByTestId('movie-title'));

  expect(getByTestId('movie-title').textContent).toBe(movie.title);
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForElement } from 'react-testing-library';

import MoviesList from '../MoviesList';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const movies = {
  success: true,
  results: [
    {
      id: 'hi',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    },
    {
      id: 'hiz',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    },
    {
      id: 'haafdsaiz',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    },
    {
      id: 'haafdljlkjsaiz',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    },
  ],
};

const movie = movies.results[0];

test('<MoviesList />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { getByTestId, queryByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>,
  );
  expect(getByTestId('loading')).toBeTruthy();
  await waitForElement(() => getByTestId('movie-link'));
  expect(queryByTestId('loading')).toBeFalsy();
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
  expect(getAllByTestId('movie-link').length).toBe(movies.results.length);
});

test('<MoviesList /> api fail', async () => {
  movies.success = false;
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { getByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>,
  );
  expect(getByTestId('loading')).toBeTruthy();
});

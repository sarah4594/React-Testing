import React from 'react';
import { render, cleanup } from 'react-testing-library';

import MovieDetail from './MovieDetail';

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

test('<MovieDetail />', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: 'hi',
        title: 'Level Up Rules!',
      },
    }),
  );

  const { debug } = render(<MovieDetail match={match} />);
  debug();
});

import { PayloadAction } from '@reduxjs/toolkit';
import { MoviesState, MovieState } from './initialState';

export const reducers = {
  saveMostPopularMovies: (
    state: MoviesState,
    action: PayloadAction<Array<MovieState>>
  ) => {
    state.mostPopular = state.mostPopular.concat(action.payload);
  },
  saveBestRatedMovies: (
    state: MoviesState,
    action: PayloadAction<Array<MovieState>>
  ) => {
    state.bestRated = state.bestRated.concat(action.payload);
  },
  saveNextReleasesMovies: (
    state: MoviesState,
    action: PayloadAction<Array<MovieState>>
  ) => {
    state.nextReleases = state.nextReleases.concat(action.payload);
  },
};

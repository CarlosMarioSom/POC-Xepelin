import { PayloadAction } from '@reduxjs/toolkit';
import { MoviesState, MovieState } from './initialState';

export const reducers = {
  actionTest: (
    state: MoviesState,
    action: PayloadAction<MovieState>
  ) => {
    state.bestRated.push(action.payload);
  },
};

import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './actions';
import { initialState } from './initialState';

export const movies = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: reducers,
});

export const {
  saveBestRatedMovies,
  saveMostPopularMovies,
  saveNextReleasesMovies,
} = movies.actions;

export default movies.reducer;

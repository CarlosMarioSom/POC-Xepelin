export interface MovieState {
  adult: boolean;
  backdropPath: string;
  genreIDs: Array<number>;
  ID: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: number;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface MoviesState {
  mostPopular: Array<MovieState>;
  bestRated: Array<MovieState>;
  nextReleases: Array<MovieState>;
}

export const initialState: MoviesState = {
  mostPopular: [],
  bestRated: [],
  nextReleases: [],
};

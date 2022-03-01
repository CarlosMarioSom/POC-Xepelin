import { MovieState } from '../../../../../../services/redux/states/movies/initialState';

export interface IContentComponentProps {}

export interface MoviesGroupInformation {
  title: string;
  content: string;
  movies: Array<MovieState>;
}

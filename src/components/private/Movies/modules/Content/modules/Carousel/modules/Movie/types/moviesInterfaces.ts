import { MovieState } from '../../../../../../../../../../services/redux/states/movies/initialState';

export interface IMovieComponentProps {
  movie: MovieState;
  onClick: (movie?: MovieState) => void;
}

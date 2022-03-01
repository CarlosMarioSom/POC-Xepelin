import { MovieState } from '../../../../../../../../../../services/redux/states/movies/initialState';

export interface IMovieModalComponentProps {
  movie: MovieState | null;
  open: boolean;
  onClose: () => void;
}

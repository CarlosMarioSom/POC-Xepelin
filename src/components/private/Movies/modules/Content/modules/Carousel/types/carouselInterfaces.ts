import { MovieState } from '../../../../../../../../services/redux/states/movies/initialState';

export interface ICarouselComponentProps {
  title: string;
  content: string;
  movies: Array<MovieState>;
}

export interface IItemProps {
  item: {
    name: string | null | undefined;
    description: string | boolean | null | undefined;
  };
}

import React from 'react';
import { IMovieComponentProps } from './types/moviesInterfaces';
import './Movie.scss';

const Movie = (props: IMovieComponentProps) => {
  const onClick = () => {
    props.onClick(props.movie);
  };
  const renderImage = () => (
    <div
      className='movie__image'
      //   src={props.srcImage}
      //   alt='movieImage'
    />
  );
  const renderTitle = () => (
    <div className='movie__titleContent'>
      <span className='movie__text movie__text--title'>
        {props.movie.title}
      </span>
    </div>
  );
  const renderDate = () => (
    <div className='movie__dateContent'>
      <span className='movie__text movie__text--date'>
        {props.movie.releaseDate}
      </span>
    </div>
  );
  return (
    <div className='movie' onClick={onClick}>
      {renderImage()}
      {renderTitle()}
      {renderDate()}
    </div>
  );
};

export default Movie;

import React from 'react';
import { IMoviesComponentProps } from './types/moviesInterfaces';
import Header from './modules/Header/Header';
import Content from './modules/Content/Content';
import './Movies.scss';

const Movies = (_props: IMoviesComponentProps) => {
  return (
    <div className='movies'>
      <div className='movies__header'>
        <Header />
      </div>
      <div className='movies__content'>
        <Content />
      </div>
    </div>
  );
};

export default Movies;

import React from 'react';
import { IMoviesComponentProps } from './types/moviesInterfaces';
import Header from './modules/Header/Header';
import Content from './modules/Content/Content';
import './Movies.scss';

const Movies = (_props: IMoviesComponentProps) => {
  return (
    <div className='Movies'>
      <div className='Movies__Header'>
        <Header />
      </div>
      <div className='Movies__Content'>
        <Content />
      </div>
    </div>
  );
};

export default Movies;

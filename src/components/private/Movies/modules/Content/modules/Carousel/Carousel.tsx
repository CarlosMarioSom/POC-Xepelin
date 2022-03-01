import React, { useState } from 'react';
import { ICarouselComponentProps } from './types/carouselInterfaces';
import AliceCarousel from 'react-alice-carousel';
import './Carousel.scss';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import Movie from './modules/Movie/Movie';
import MovieModal from './modules/MovieModal/MovieModal';
import { MovieState } from '../../../../../../../services/redux/states/movies/initialState';

const Carousel = (props: ICarouselComponentProps) => {
  const [selectedMovie, setSelectedMovie] =
    useState<MovieState | null>(null);

  const onClickMovie = (movie?: MovieState) => {
    setSelectedMovie(movie || null);
  };
  const onCloseModal = () => {
    setSelectedMovie(null);
  };

  const renderTitle = () => {
    return (
      <div className='carousel__titleContainer'>
        <span className='carousel__text--title'>{props.title}</span>
        <img
          className='carousel__rightArrowIcon'
          src={require('./../../../../../../../assets/icons/RightArrow.png')}
          alt='RightArrow'
        />
      </div>
    );
  };

  const renderContent = () => (
    <div className='carousel__descriptionContainer'>
      <span className='carousel__text--description'>
        {props.content}
      </span>
    </div>
  );

  const renderCarousel = () => {
    return (
      <AliceCarousel
        mouseTracking
        autoWidth
        items={props.movies.map((movie) => (
          <Movie movie={movie} onClick={onClickMovie} />
        ))}
      />
    );
  };

  const renderModal = () => (
    <MovieModal
      movie={selectedMovie}
      open={!!selectedMovie}
      onClose={onCloseModal}
    />
  );

  return (
    <div className='carousel'>
      {renderTitle()}
      {renderContent()}
      {renderCarousel()}
      {renderModal()}
    </div>
  );
};

export default Carousel;

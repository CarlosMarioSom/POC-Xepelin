import React, { useEffect, useState } from 'react';
import enLabels from '../../../../../constants/en-labels';
import Carousel from './modules/Carousel/Carousel';
import {
  IContentComponentProps,
  MoviesGroupInformation,
} from './types/contentInterfaces';
import TheMovieDbService from '../../../../../services/theMovieDbService/theMovieDbService';
import './Content.scss';
import {
  saveBestRatedMovies,
  saveMostPopularMovies,
  saveNextReleasesMovies,
} from '../../../../../services/redux/states/movies/state';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../services/redux/store';

const Content = (_props: IContentComponentProps) => {
  const [mostPopularPagination, setMostPopularPagination] =
    useState<number>(1);
  const [bestRatedPagination, setBestRatedPagination] =
    useState<number>(1);
  const [nextReleasesPagination, setNextReleasesPagination] =
    useState<number>(1);

  const dispatch = useAppDispatch();
  const mostPopular = useAppSelector(
    (state) => state.movies.mostPopular
  );
  const bestRated = useAppSelector((state) => state.movies.bestRated);
  const nextReleases = useAppSelector(
    (state) => state.movies.nextReleases
  );

  const fetchMovies = async () => {
    const movieService = new TheMovieDbService();
    const mostPopular = await movieService.getMostPopular({
      pagination: mostPopularPagination,
    });
    dispatch(saveMostPopularMovies(mostPopular));
    const bestRated = await movieService.getBestRated({
      pagination: bestRatedPagination,
    });
    dispatch(saveBestRatedMovies(bestRated));
    const nextReleases = await movieService.getNextReleases({
      pagination: nextReleasesPagination,
    });
    dispatch(saveNextReleasesMovies(nextReleases));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderCarousels = () => {
    const moviesGroups: Array<MoviesGroupInformation> = [
      {
        title: enLabels.content.mostPopular.title,
        content: enLabels.content.mostPopular.content,
        movies: mostPopular,
      },
      {
        title: enLabels.content.bestRated.title,
        content: enLabels.content.bestRated.content,
        movies: bestRated,
      },
      {
        title: enLabels.content.nextReleases.title,
        content: enLabels.content.nextReleases.content,
        movies: nextReleases,
      },
    ];

    return moviesGroups.map((group, index) => (
      <div className='content__carousel' key={index}>
        <Carousel
          title={group.title}
          content={group.content}
          movies={group.movies}
        />
      </div>
    ));
  };
  return <div className='content'>{renderCarousels()}</div>;
};

export default Content;

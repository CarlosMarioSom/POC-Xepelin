import { MovieState } from '../redux/states/movies/initialState';
import { get } from '../request/requestService';
import { IGet } from '../request/types/requestServiceInterfaces';
import {
  apiKey,
  Domain,
  Methods,
} from './constants/theMovieDbServiceConstants';
import { ServiceLanguages } from './enums/theMovieDbServiceEnums';
import {
  IGetBestRatedParams,
  IGetMostPopularParams,
  IGetNextReleasesParams,
} from './types/theMovieDbServiceInterfaces';

export default class TheMovieDbService {
  private readonly domain: string;
  private readonly languaje: ServiceLanguages;
  constructor(languaje?: ServiceLanguages) {
    this.domain = Domain;
    this.languaje = languaje ? languaje : ServiceLanguages.en;
  }

  public async getMostPopular(
    params: IGetMostPopularParams
  ): Promise<Array<MovieState>> {
    const getParams: IGet = {
      domain: this.domain,
      method: Methods.mostPopular,
      params: {
        api_key: apiKey,
        language: this.languaje,
        page: params.pagination,
      },
    };

    try {
      const { results: mostPopular } = await (
        await get(getParams)
      ).data;
      return this.parseMovie(mostPopular);
    } catch (error) {
      alert(error);
      throw error;
    }
  }

  public async getBestRated(
    params: IGetBestRatedParams
  ): Promise<Array<MovieState>> {
    const getParams: IGet = {
      domain: this.domain,
      method: Methods.bestRated,
      params: {
        api_key: apiKey,
        language: this.languaje,
        page: params.pagination,
      },
    };

    try {
      const { results: bestRated } = await (
        await get(getParams)
      ).data;
      return this.parseMovie(bestRated);
    } catch (error) {
      alert(error);
      throw error;
    }
  }

  public async getNextReleases(
    params: IGetNextReleasesParams
  ): Promise<Array<MovieState>> {
    const getParams: IGet = {
      domain: this.domain,
      method: Methods.nextReleases,
      params: {
        api_key: apiKey,
        language: this.languaje,
        page: params.pagination,
      },
    };

    try {
      const { results: nextReleases } = await (
        await get(getParams)
      ).data;
      return this.parseMovie(nextReleases);
    } catch (error) {
      alert(error);
      throw error;
    }
  }

  private parseMovie(apiMovieResponse: any): Array<MovieState> {
    return apiMovieResponse.map((movie: any) => {
      const {
        adult,
        backdrop_path: backdropPath,
        genre_ids: genreIDs,
        id: ID,
        original_language: originalLanguage,
        original_title: originalTitle,
        overview,
        popularity,
        poster_path: posterPath,
        release_date: releaseDate,
        title,
        video,
        vote_average: voteAverage,
        vote_count: voteCount,
      } = movie;

      const movieResponse: MovieState = {
        adult,
        backdropPath,
        genreIDs,
        ID,
        originalLanguage,
        originalTitle,
        overview,
        popularity,
        posterPath,
        releaseDate,
        title,
        video,
        voteAverage,
        voteCount,
      };

      return movieResponse;
    });
  }
}

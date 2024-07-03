import {AxiosAdapter} from './http/axios.adaptar';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'bf876ef163f215d30ef1ddce4878fe38',
    language: 'es',
  },
});

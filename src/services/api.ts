import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZhMTkyNjBiYTYwMDdjMDE1OGUxM2IwODA5NWVjZCIsIm5iZiI6MTc0MTU1ODM5Mi44MTQwMDAxLCJzdWIiOiI2N2NlMTI3OGZmMWE4NDBiOTkxMGZmNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z2EDxk7tYm8xd58-2W3oxcsfUchWCXwmE0ttfy_wXys';

export const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const response = await axios.request(options);
  const data = await response.data;

  return data.results;
};

export const searchForMovies = async (queryValue: string) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {query: queryValue, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZhMTkyNjBiYTYwMDdjMDE1OGUxM2IwODA5NWVjZCIsIm5iZiI6MTc0MTU1ODM5Mi44MTQwMDAxLCJzdWIiOiI2N2NlMTI3OGZmMWE4NDBiOTkxMGZmNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z2EDxk7tYm8xd58-2W3oxcsfUchWCXwmE0ttfy_wXys'
    }
  };
  const response = await axios.request(options);
  const data = await response.data;
  
  return data.results;
}

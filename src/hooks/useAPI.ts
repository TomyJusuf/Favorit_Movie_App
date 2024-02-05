import axios from 'axios';
import { useQuery } from 'react-query';

const getMovies = async (
  search: string | undefined,
  input: string | undefined
) => {
  try {
    const apiKey = '1fc11d78';
    const response = await axios.get(
      `https://www.omdbapi.com/?&apikey=${apiKey}&s=${
        search ?? 'Super mario'
      }&t=${input ?? 'movie'}`
    );

    return response.data.Search;
  } catch (error) {
    throw new Error('Data server problem');
  }
};

// useAPI hook
export const useAPI = (search: string | undefined, input: string | undefined) =>
  useQuery({
    queryKey: ['movie', { search, input }],
    queryFn: () => getMovies(search, input),
  });

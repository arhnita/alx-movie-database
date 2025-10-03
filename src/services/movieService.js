const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

/**
 * Search for movies by title
 * @param {string} query - Search query
 * @returns {Promise<Object>} Search results
 */
export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.Response === 'False') {
      throw new Error(data.Error || 'Failed to fetch movies');
    }

    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

/**
 * Get detailed movie information by IMDb ID
 * @param {string} id - IMDb ID
 * @returns {Promise<Object>} Movie details
 */
export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await response.json();

    if (data.Response === 'False') {
      throw new Error(data.Error || 'Failed to fetch movie details');
    }

    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

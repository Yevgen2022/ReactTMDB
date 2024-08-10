
const API_KEY = '67d62e560168631aec9f199164512b42';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = {
    fetchPopularMovies: async () => {
        try {
            const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); //&page=3

            // check status of request
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            return [];
        }
    },



    fetchPopularTVShows: async () => {
        try {
            const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching popular TV shows:', error);
            return [];
        }
    },

    
    fetchMovieDetails: async (movieId) => {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        return response.json();
    },


};

export default tmdbApi;

import { API_KEY, BASE_URL} from "../config"; 

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


     fetchMovieById : async (movieID) => {
        try {
            const response = await fetch(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch movie:', error);
            throw error;
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




    
    // fetchMovieDetails: async (movieId) => {
    //     const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    //     return response.json();
    // },


};

export default tmdbApi;
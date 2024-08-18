
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../config";

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


    fetchMovieById: async (movieID) => {
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

    ////////////////////// start //////////////////////////////////////////
    fetchMoviesByGenre: async (genreId) => {
        try {
            const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US`);


            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // return result JSON
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch genre:', error);
            throw error;
        }
    },

    createGenreObject(movie) {
        const size = "/w200"
        return {
            movieId: movie.id,
            movieTitle: movie.title,
            moviePoster: `${IMAGE_BASE_URL}${size}${movie.poster_path}`,
            movieOriginalTitle: movie.original_title,
            movieOverview: movie.overview,
            movieRelease: movie.release_date
        };
    },
    ///////////////////////// end  ////////////////////////////////////////////////

    fetchMovieOrTvByPopular: async (path) => {
        try {
            const response = await fetch(path);
            if (!response) {
                throw new Error(`HTTP error! status: ${response.status} `)
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching popular items:`, error);
            return null;
        }
    }




};



export default tmdbApi;

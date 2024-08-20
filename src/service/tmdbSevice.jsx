
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


    fetchTrendMovies: async () => {
        try {
            const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`); //&page=3

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

    ////////////////////// start //////////////////////////////////////////
    fetchShowByGenre: async (genreId) => {
        try {
            const response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}&language=en-US`);


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

    createShowObjectGenre(show) {
        const size = "/w200"
        return {
            movieId: show.id,
            movieTitle: show.name,
            moviePoster: `${IMAGE_BASE_URL}${size}${show.poster_path}`,
            movieOriginalTitle: show.original_name,
            movieOverview: show.overview,
            movieRelease: show.first_air_date
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
    },

    ///////////////////// start   Show request and ShowObj///////////////////
    fetchShowById: async (showID) => {
        try {
            const response = await fetch(`${BASE_URL}/tv/${showID}?api_key=${API_KEY}&language=en-US`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch movie:', error);
            throw error;
        }
    },

    createShowObj(showObj) {
        let obj = {
            backdrop_path: showObj.backdrop_path || "",
            first_air_date: showObj.first_air_date || "",
            genres: showObj.genres || [],
            id: showObj.id || "",
            name: showObj.name || "",
            overview: showObj.overview || "",
            vote_average: showObj.vote_average || 0,
            poster_path: showObj.poster_path || "",
            production_companies: showObj.production_companies || [],
            production_countries: showObj.production_countries || [],
            // runtime: showObj.runtime
        }
        return obj;
        // return Object.assign(obj, showObj);
    }

    /////////////////////  end    ///////////////////




};



export default tmdbApi;

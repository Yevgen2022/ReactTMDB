
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../config";

const tmdbApi = {

    //////////////////////////This we create 2-object for trending block (Movie, Show) START 
    fetchTrendAll: async (timeWindow) => {
        try {
            const response = await fetch(`${BASE_URL}/trending/all/${timeWindow}?api_key=${API_KEY}&page=9`); //&page=3

            // check status of request
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Filtering only movie and series
            const moviesAndTVShows = data.results.filter(item => item.media_type === 'movie' || item.media_type === 'tv');

            return moviesAndTVShows;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            return [];
        }
    },

    processTrendData: (data) => {
        return data.map(item => ({
            id: item.id,
            title: item.title || item.name, // Choice between title і name
            posterPath: item.poster_path,
            releaseDate: item.release_date || item.first_air_date, // Choice between release_date і first_air_date
            mediaType: item.media_type, // Type of media
            originalLanguage: item.original_language,
            overview: item.overview,
            popularity: item.popularity,
            voteAverage: item.vote_average,
            voteCount: item.vote_count,
            genreIds: item.genre_ids || [], // Add genre_ids, if absent, then empty
            originCountry: item.origin_country || [], // Add origin_country, if absent, then empty
            ratingPercent: item.vote_average ? Math.round((item.vote_average / 10) * 100) : 0,
        }));
    },
    //////////////////////////This we finished creating 2-object for trending block (Movie, Show) FINISH



    //////////////////////////This we started creating 3-object for popular block (Movie, Show(Tv), animation) START
     fetchPopular: async (requestParam) => {
        try {
            const response = await fetch(`${BASE_URL}/${requestParam}/popular?api_key=${API_KEY}`);
    
            // Check status of request
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Handle filtering for animation specifically
            if (requestParam === 'animation') {
                return data.results.filter((element) => element.genre_ids.includes(16));
            }

            return data.results;
        } catch (error) {
            console.error(`Error fetching popular ${requestParam}:`, error);
            return [];
        }
    },
    
     fetchArrayForPopularBlock: async (requestParam) => {
        return await tmdbApi.fetchPopular(requestParam);
    },
    

    //////////////////////////This we finihsed creating 3-object for popular block (Movie, Show(Tv), animation) FINISH















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

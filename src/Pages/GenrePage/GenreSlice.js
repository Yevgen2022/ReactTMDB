import { createSlice } from '@reduxjs/toolkit';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../../config";

const initialState = {
    genreObj: {
        movieId: null,
        movieTitle: '',
        moviePoster: '',
        movieOriginalTitle: '',
        movieOverview: '',
        movieRelease: '',
    },
    genreName: "",
};

export const genreSlice = createSlice({

    name: 'genreObj',
    initialState,

    reducers: {

        setGenreName: (state, action) => {
            state.genreName = action.payload;
        },


        setGenreObj: (state, action) => {
            const movie = action.payload;
            const size = "/w200";

            // my way
            // genreObj = {
            //     movieId: movie.id,
            //     movieTitle: movie.title,
            //     moviePoster: `${IMAGE_BASE_URL}${size}${movie.poster_path}`,
            //     movieOriginalTitle: movie.original_title,
            //     movieOverview: movie.overview,
            //     movieRelease: movie.release_date
            // }


            // gpt advice
            // Оновлюємо тільки ті поля, які є в initialState
            Object.keys(state.genreObj).forEach(key => {
                if (key === 'moviePoster') {
                    // Динамічно формуємо moviePoster
                    state.genreObj.moviePoster = `${IMAGE_BASE_URL}${size}${movie.poster_path}`;
                } else if (movie.hasOwnProperty(key)) {
                    // Оновлюємо інші поля, якщо вони є в movie
                    state.genreObj[key] = movie[key];
                }
            });
        },








    }
});

export const { setGenreName, setGenreObj } = genreSlice.actions;
export default genreSlice.reducer;

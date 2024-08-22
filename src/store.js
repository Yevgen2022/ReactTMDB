import { configureStore } from "@reduxjs/toolkit";

import genreReducer from "./Pages/GenrePage/GenreSlice";
import popularSliderReducer from "./components/PopularSlider/PopularSliderSlice";
import TrendMovieAndTvSlice from "../src/Pages/MovieDetailPage/popMovieOrTvSlice"



export const store = configureStore ({
    reducer: {
        genreName: genreReducer,
        popularSlider: popularSliderReducer,//slice of popular block
        TrendMovieAndTv: TrendMovieAndTvSlice
        
    }
})
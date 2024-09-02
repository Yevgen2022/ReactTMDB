import { configureStore } from "@reduxjs/toolkit";

import genreReducer from "./Pages/GenrePage/GenreSlice";
import TrendMovieAndTvSlice from "../src/components/TrendingSection/TrendingSlice";
import PopularBlockSlice from "../src/components/PopularSection/PopularSlice";



export const store = configureStore ({
    reducer: {
        genreName: genreReducer,
       
        TrendMovieAndTv: TrendMovieAndTvSlice,
        PopularBlock: PopularBlockSlice
        
    }
})
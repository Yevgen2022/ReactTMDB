import { configureStore } from "@reduxjs/toolkit";

import genreReducer from "./Pages/GenrePage/GenreSlice";
import popularSliderReducer from "./components/PopularSlider/PopularSliderSlice";
import TrendMovieAndTvSlice from "../src/components/TrendingSection/TrendingSlice";
import PopularBlockSlice from "../src/Pages/TestPage/PopularSlice";



export const store = configureStore ({
    reducer: {
        genreName: genreReducer,
        popularSlider: popularSliderReducer,//slice of popular block first

        TrendMovieAndTv: TrendMovieAndTvSlice,
        PopularBlock: PopularBlockSlice
        
    }
})
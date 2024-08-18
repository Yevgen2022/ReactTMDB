import { configureStore } from "@reduxjs/toolkit";

import genreReducer from "./Pages/GenrePage/GenreSlice";
import popularSliderReducer from "./components/PopularSlider/PopularSliderSlice"


export const store = configureStore ({
    reducer: {
        genreName: genreReducer,
        popularSlider: popularSliderReducer
        
    }
})
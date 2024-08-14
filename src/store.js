import { configureStore } from "@reduxjs/toolkit";

import genreReducer from "./Pages/GenrePage/GenreSlice";


export const store = configureStore ({
    reducer: {
        genreName: genreReducer,
        
    }
})
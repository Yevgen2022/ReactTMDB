import { createSlice } from "@reduxjs/toolkit";
import tmdbApi from "../../service/tmdbSevice";
import { useState, useEffect } from "react";


const initialState = {
    movieOrTvObj: {
id: null,
title:"",
release: "",
average: 0,
poster: ""
    },
    status: "idle",
    error: null,
    defaultPath: `${BASE_URL}/tv/popular?api_key=${API_KEY}`
}

useEffect(() => {
    const loadObject = async () => {
        try {
            const data = await tmdbApi.fetchMovieOrTvByPopular(defaultPath);
            if (data) {
                movieOrTvObj.id = data.id,
                movieOrTvObj.title = data.name,
                movieOrTvObj.release = data.vote_average,
                movieOrTvObj.poster = data.poster_path
            }
        } catch (error) {
            console.log('Error loading data:', error);
        }
    }; loadObject();
}, [defaultPath]);




export const popMovieOrTvSlice = createSlice({
    name: "popMovieOrTv",
    initialState: movieOrTvObj,
    reducers:{

    }

})


export const {} = popMovieOrTvSlice.actions;
export default popMovieOrTvSlice.reducer;
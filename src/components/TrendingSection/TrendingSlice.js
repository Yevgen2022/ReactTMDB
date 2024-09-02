import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../service/tmdbSevice"

const fetchMultiplePages = async (timeWindow, totalItems = 120) => {
    let combinedResults = [];
    let page = 1;

    while (combinedResults.length < totalItems) {
        const response = await tmdbApi.fetchTrendAll(timeWindow, page);
        const processedData = tmdbApi.processTrendData(response);

        combinedResults = [...combinedResults, ...processedData];
        
        // If less data is received than expected, it may mean that pages have run out
        if (processedData.length === 0) {
            break;
        }

        page++;
    }
    // Limit the number of results to the desired number and sort
    return combinedResults.slice(0, totalItems).sort((a,b)=> b.ratingPercent - a.ratingPercent);
};

//Creating an asynchronous thunk to get trending movies and TV shows
export const fetchTrendMovieAndTv = createAsyncThunk(
    'timeWindow/fetchTrendMovieAndTv',
    async (timeWindow) => {
        const processeData = await fetchMultiplePages(timeWindow);/////return array of objects from(2-type).Movie and tv
        return processeData;
    }
);

const initialState = {
    timeWindow: "day",
    trendMovieAndTvArr: [],  
    loading: false,
    error: null

}

export const TrendMovieAndTvSlice = createSlice({
    initialState,
    name: "trendMovieAndTv",
    reducers: {

        setTimeWindow: (state, action) => {
            state.timeWindow = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendMovieAndTv.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTrendMovieAndTv.fulfilled, (state, action) => {
                state.loading = false;
                state.trendMovieAndTvArr = action.payload;
            })
            .addCase(fetchTrendMovieAndTv.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    }


})

export const { setTimeWindow } = TrendMovieAndTvSlice.actions;
export default TrendMovieAndTvSlice.reducer;

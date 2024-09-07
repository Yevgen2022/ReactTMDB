import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../../service/tmdbSevice"

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
    // return combinedResults.slice(0, totalItems).sort((a,b)=> b.ratingPercent - a.ratingPercent);


    return {
        results: combinedResults.slice(0, totalItems).sort((a, b) => b.ratingPercent - a.ratingPercent),
        totalPages: page
    };
};


//Creating an asynchronous thunk to get trending movies and TV shows
export const fetchTrendMovieAndTv = createAsyncThunk(
    'timeWindow/fetchTrendMovieAndTv',
    async (timeWindow) => {
        // const processeData = await fetchMultiplePages(timeWindow);/////return array of objects from(2-type).Movie and tv
        // return processeData;

        const { results, totalPages } = await fetchMultiplePages(timeWindow);
        return { results, totalPages };
    }
);

const initialState = {
    timeWindow: "day",
    trendMovieAndTvArr: [],
    loading: false,
    error: null,

    totalItems: 120,    //Limit object for array
    totalPages: 0,     // pages for slider
    currentPageSlice: 1,   //Connect with TotalInformation and SliderGeneral


}

export const TrendMovieAndTvSlice2 = createSlice({
    initialState,
    name: "trendMovieAndTv",
    reducers: {

        setTimeWindow: (state, action) => {
            state.timeWindow = action.payload;
        },

        setTotalItems: (state, action) => {
            state.totalItems = action.payload;
        },

        setCurrentPageSlice: (state, action) => {
            state.currentPage = action.payload;
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
                state.trendMovieAndTvArr = action.payload.results;
                state.totalPages = action.payload.totalPages
            })
            .addCase(fetchTrendMovieAndTv.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    }


})

export const { setTimeWindow,setCurrentPageSlice } = TrendMovieAndTvSlice2.actions;
export default TrendMovieAndTvSlice2.reducer;

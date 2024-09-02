import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../service/tmdbSevice";

const fetchMultiplePages = async (popularTab, totalItems = 120) => {
    let combinedResults = [];
    let page = 1;

    while (combinedResults.length < totalItems) {
        const response = await tmdbApi.fetchPopularAll(popularTab, page);
        const processedData = tmdbApi.processTrendData(response);

        combinedResults = [...combinedResults, ...processedData];
        
        // If less data is received than expected, it may mean that pages have run out
        if (processedData.length === 0) {
            break;
        }

        page++;
    }

    // Limit the number of results to the desired number and sort
    //console.log("From PopularSlice", combinedResults.slice(0, totalItems));//////////////////////////
    return combinedResults.slice(0, totalItems).sort((a,b)=> b.ratingPercent - a.ratingPercent);
};

// //Creating an asynchronous thunk to get popular movies, TV shows or animations
export const fetchPopular = createAsyncThunk(
    'popularTab/fetchPopular',
    async (popularTab) => {
        const processedData = await fetchMultiplePages(popularTab);
        //  console.log("Object from PopularSlice", processedData);
        return processedData;
    }
);

const initialState = {
    popularTab: "movie",             // current tab for switch in the popular section
    popularContent: [],        // current array relative to the selected position
    loading: false,
    error: null
};

export const PopularBlockSlice = createSlice({
    initialState,
    name: "popularBlock",
    reducers: {
        setPopularTab: (state, action) => {
            state.popularTab = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopular.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.loading = false;
                state.popularContent = action.payload;
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setPopularTab } = PopularBlockSlice.actions;
export default PopularBlockSlice.reducer;

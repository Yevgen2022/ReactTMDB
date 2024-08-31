import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../service/tmdbSevice"


// Створення асинхронного thunk для отримання популярних фільмів, ТВ-шоу або анімації
export const fetchPopular = createAsyncThunk(
    'popularTab/fetchPopular',
    async (popularTab) => {
        const response = await tmdbApi.fetchArrayForPopularBlock(popularTab);
        const processeData = tmdbApi.processTrendData(response)/////return 1 object from objects(2-type).Movie and tv
        
        console.log("Object from PopularSlice",processeData)
        return processeData;
    }
);

const initialState = {
    popularTab: "movie",             //current tab for switch in the popular section
    arayOfElPopularBlock: [],       //current array relative to the selected position
    loading: false,
    error: null

}

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
                state.trendMovieAndTvArr = action.payload;
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    }


})

export const { setPopularTab } = PopularBlockSlice.actions;
export default PopularBlockSlice.reducer;

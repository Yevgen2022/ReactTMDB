import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../service/tmdbSevice"


// Створення асинхронного thunk для отримання трендових фільмів і ТВ-шоу
export const fetchTrendMovieAndTv = createAsyncThunk(
    'timeWindow/fetchTrendMovieAndTv',
    async (timeWindow) => {
        const response = await tmdbApi.fetchTrendAll(timeWindow);
        const processeData = tmdbApi.processTrendData(response)/////return 1 object from objects(2-type).Movie and tv

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
    name: "timeWindow",
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

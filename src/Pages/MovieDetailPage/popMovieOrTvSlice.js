import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeWindow: "day"
}

export const timeWindowSlice = createSlice({
    initialState,
    name: "timeWindow",
    reducers: {
        setTimeWindow: (state, action) => {
            state.timeWindow = action.payload
            console.log("from slice", action.payload)
        },
    }
})

export const { setTimeWindow } = timeWindowSlice.actions;
export default timeWindowSlice.reducer;

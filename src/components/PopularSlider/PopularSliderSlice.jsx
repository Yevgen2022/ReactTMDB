import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    popularItems: [],
    popularValue: "popTv"///////////value of popular block by default
};


const popularSliderSlice = createSlice({
    name: 'popularSliderSlice',
    initialState,
    reducers: {
        setPopularItems: (state, action) => {
            state.popularItems = action.payload;
        },
        setPopularValue: (state,action) => {
            state.popularValue = action.payload;
        }

        
    },
});

export const { setPopularItems,setPopularValue } = popularSliderSlice.actions;
export const selectPopularItems = (state) => state.popularSlider.popularItems;
export const selectPopularValue = (state) => state.popularSlider.popularValue;
export default popularSliderSlice.reducer;

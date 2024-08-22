import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TrendSlider from "./TrendSlider";


import { setTimeWindow,fetchTrendMovieAndTv } from "./popMovieOrTvSlice"

const MovieDetailPage = () => {

    const [activeTab, setActiveTab] = useState('day'); // Стан для відстеження вибраної вкладки

    const dispatch = useDispatch();
    const timeWindow = useSelector((state) => state.TrendMovieAndTv.timeWindow);
    const trendMovieAndTvArr = useSelector((state) => state.TrendMovieAndTv.trendMovieAndTvArr);
    
    // Click handler to move
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        dispatch(setTimeWindow(tab));//////////Set "Time Window" for "Trending All"
    };

    useEffect(() => {
        dispatch(fetchTrendMovieAndTv(timeWindow));//download data according to new value of timeWindow
    }, [dispatch, timeWindow]);



    const runnerStyle = {
        left: activeTab === 'day' ? '0' : 'calc(100% - 50%)', // moving
        transition: 'left 0.2s ease', // Animation of moving
    };

    return (
        <>
            <h1>MOVIE DETAIL PAGE</h1>
            <button
                className="border border-black my-8">Test button</button>

            <div className="switch_container flex flex-row justify-between w-60 border border-black ml-8 px-6 rounded-full relative">
                <div className="switch_runer absolute z-0 top-0 left-0 h-full w-1/2 rounded-full bg-black" style={runnerStyle}></div>
                <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'day' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('day')}>Today</h2>
                <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'week' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('week')}>This week</h2>
            </div>

            <div>
                < PopularSlider />
            </div>
        </>
    )
}

export default MovieDetailPage
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTimeWindow, fetchTrendMovieAndTv } from "./TrendingSlice"

const TrendingSwitch = () => {

    const [activeTab, setActiveTab] = useState('day'); // State for watching choosing element(day or week)

    const dispatch = useDispatch();
    const timeWindow = useSelector((state) => state.TrendMovieAndTv.timeWindow);

    // Click handler to move
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        dispatch(setTimeWindow(tab));//////////Set "Time Window" for "Trending All"
    };

    useEffect(() => {
        // if activeTab is changing, refresh timeWindow
        if (timeWindow !== activeTab) {
            dispatch(setTimeWindow(activeTab));
        }
        // download data according to new value of timeWindow
        dispatch(fetchTrendMovieAndTv(activeTab));
    }, [dispatch, activeTab, timeWindow]);


    const runnerStyle = {
        left: activeTab === 'day' ? '0' : 'calc(100% - 50%)', // moving
        transition: 'left 0.2s ease', // Animation of moving
    };

    return (
        <>
            <div className="flex">
                <div>
                    <h2 className="text-2xl">Trending</h2>
                </div>

                <div className="switch_container flex flex-row justify-between items-center w-60 border border-black ml-8 px-6 rounded-full relative">
                    <div className="switch_runer absolute z-0 top-0 left-0 h-full w-1/2 rounded-full bg-black" style={runnerStyle}></div>
                    <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'day' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('day')}>Today</h2>
                    <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'week' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('week')}>This week</h2>
                </div>
            </div>
        </>

    )
}

export default TrendingSwitch
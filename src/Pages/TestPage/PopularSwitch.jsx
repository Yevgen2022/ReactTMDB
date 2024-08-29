import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTimeWindow, fetchTrendMovieAndTv } from "./PopularSlice"

const TrendingSwitch = () => {

    const [activeTab, setActiveTab] = useState('day'); // State for watching choosing element(day or week)

    // const dispatch = useDispatch();
    // const timeWindow = useSelector((state) => state.TrendMovieAndTv.timeWindow);

    // useEffect(() => {
    //     // if activeTab is changing, refresh timeWindow
    //     if (timeWindow !== activeTab) {
    //         dispatch(setTimeWindow(activeTab));
    //     }
    //     // download data according to new value of timeWindow
    //     dispatch(fetchTrendMovieAndTv(activeTab));
    // }, [dispatch, activeTab, timeWindow]);




    // Click handler to move
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        //  dispatch(setTimeWindow(tab));//////////Set "Time Window" for "Trending All"
    };


    const runnerStyle = {
        left: '0',
        transition: 'left 0.2s ease', // Анімація для переміщення
    };
    
    // Застосовуємо умови для визначення позиції "switch runner"
    if (activeTab === 'movie') {
        runnerStyle.left = '0';
    } else if (activeTab === 'animation') {
        runnerStyle.left = '66.66%'; // Для третього елемента, зсув на 2/3 ширини
    } else {
        runnerStyle.left = '33.33%'; // Для другого елемента, зсув на 1/3 ширини
    }

return (
    <>
        <div className="flex">
            <div>
                <h2 className="text-2xl">Popular</h2>
            </div>

            <div className="switch_container flex flex-row justify-between items-center w-80 border border-black ml-8 px-6 rounded-full relative">
                <div className="switch_runer absolute z-0 top-0 left-0 h-full w-1/3 rounded-full bg-black" style={runnerStyle}></div>
                <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'movie' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('movie')}>Movie</h2>
                <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'tv' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('tv')}>On TV</h2>
                <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'animation' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('animation')}>Animation</h2>
            </div>
        </div>
    </>

)
}

export default TrendingSwitch
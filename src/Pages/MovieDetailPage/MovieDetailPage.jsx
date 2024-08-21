import React from "react";
import { API_KEY, BASE_URL } from "../../config";
// import { json } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import tmdbApi from "../../service/tmdbSevice";
import CartForHomePage from "../../components/CartForPopular/CartForPopular";
import { setPopularItems } from "../../components/PopularSlider/PopularSliderSlice"
import PopularSlider from "../../components/PopularSlider/PopularSlider";



// const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
// const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY`)





const MovieDetailPage = () => {

   

    const [activeTab, setActiveTab] = useState('day'); // Стан для відстеження вибраної вкладки

    const dispatch = useDispatch();
 
    
    // Обробник натискання для переміщення
    const handleTabClick = (tab) => {
        setActiveTab(tab);//////////Set Time Window for "Trending All"
    };

    const runnerStyle = {
        left: activeTab === 'day' ? '0' : 'calc(100% - 50%)', // Переміщення
        transition: 'left 0.2s ease', // Анімація переміщення
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
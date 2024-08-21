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

    const [selectedValue, setSelectedValue] = useState("popTv");
    const [selectedPath, setSelectedPath] = useState(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);

    const [activeTab, setActiveTab] = useState('today'); // Стан для відстеження вибраної вкладки


    const [curentObj, setCurentObj] = useState({})

    const dispatch = useDispatch();


    useEffect(() => {
        const loadObject = async () => {
            try {
                const data = await tmdbApi.fetchMovieOrTvByPopular(selectedPath);
                if (data) {
                    dispatch(setPopularItems(ShowCurentObj(data.results)));
                }
            } catch (error) {
                console.log('Error loading data:', error);
            }
        }; loadObject();
    }, [selectedPath]);




    function ShowCurentObj(data) {
        let arrForPopularSlider = []
        if (selectedValue === "popTv") {
            arrForPopularSlider = createTvObj(data);
            // setCurentObj(tvObj);  // Використовуємо об'єкт, що повернула функція createTvObj
        } else if (selectedValue === "popMovie") {
            arrForPopularSlider = createMovieObj(data);
            // setCurentObj(movieObj);  // Використовуємо об'єкт, що повернула функція createMovieObj
        }
        return arrForPopularSlider;

    }

    function createTvObj(data) {
        let obj = {};
        let arr = [];
        data.forEach((element) => {
            obj = {
                id: element.id,
                title: element.name,
                release: element.first_air_date,
                average: element.vote_average,
                poster: element.poster_path
            }
            arr.push(obj);
        })
        console.log(arr);
        return arr;
    }

    function createMovieObj(data) {
        let obj = {};
        let arr = []
        data.forEach((element) => {
            obj = {
                id: element.id,
                title: element.title,
                release: element.release_date,
                average: element.vote_average,
                poster: element.poster_path
            }
            arr.push(obj);
        })
        console.log(arr);
        return arr;
    }






    // Обробник натискання для переміщення
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const runnerStyle = {
        left: activeTab === 'today' ? '0' : 'calc(100% - 50%)', // Переміщення
        transition: 'left 0.2s ease', // Анімація переміщення
    };

    return (
        <>
            <h1>MOVIE DETAIL PAGE</h1>
            <button
                className="border border-black my-8">Test button</button>



            <div className="switch_container flex flex-row justify-between w-60 border border-black ml-8 px-2 rounded-full relative">
                <div className="switch_runer absolute z-0 top-0 left-0 h-full w-1/2 rounded-full bg-black" style={runnerStyle}></div>
                <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'today' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('today')}>Today</h2>
                <h2 className={`switch_selected rounded-full inline-block hover:cursor-pointer z-10 ${activeTab === 'week' ? 'font-medium text-green-500' : ''}`} onClick={() => handleTabClick('week')}>This week</h2>
            </div>


            <div>
                < PopularSlider />
            </div>
        </>
    )
}

export default MovieDetailPage
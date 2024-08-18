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


    const [curentObj, setCurentObj] = useState({})

    const dispatch = useDispatch();


    useEffect(() => {
        const loadObject = async () => {
            try {
                const data = await tmdbApi.fetchMovieOrTvByPopular(selectedPath);
                if (data) {
                    // ShowCurentObj(data.results);
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




    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setSelectedPath(event.target.dataset.path);
    }

    return (
        <>
            <h1>MOVIE DETAIL PAGE</h1>
            <button
                // onClick={testRequest}
                className="border border-black ">Test button</button>
            <form action="" onChange={handleChange}>

                <input type="radio"
                    id="popular_tv"
                    name="popularSection"
                    value="popTv"
                    defaultChecked={true}
                    data-path={`${BASE_URL}/tv/popular?api_key=${API_KEY}`}
                >
                </input>
                <label htmlFor="popular_tv">Popular TV</label>

                <input type="radio"
                    id="popular_movie"
                    name="popularSection"
                    value="popMovie"
                    data-path={`${BASE_URL}/movie/popular?api_key=${API_KEY}`}
                >
                </input>
                <label htmlFor="popular_movie">Popular Movie</label>
            </form>

            <div>
                {/* <CartForHomePage
                    average={curentObj.average}
                    id={curentObj.id}
                    poster={curentObj.poster}
                    release={curentObj.release}
                    title={curentObj.title}
                /> */}
                < PopularSlider />
            </div>
        </>
    )
}

export default MovieDetailPage
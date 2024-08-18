import React from "react";
import { API_KEY, BASE_URL } from "../../config";
// import { json } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import tmdbApi from "../../service/tmdbSevice";
import CartForHomePage from "../../components/CartForHomePage/CartForHomePage";




// const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
// const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY`)

const MovieDetailPage = () => {

    const [selectedValue, setSelectedValue] = useState("popTv");
    const [selectedPath, setSelectedPath] = useState(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);

    const [curentObj, setCurentObj] = useState({})

    // const dispatch = useDispatch();


    useEffect(() => {
        const loadObject = async () => {
            try {
                const data = await tmdbApi.fetchMovieOrTvByPopular(selectedPath);
                if (data) {
                    ShowCurentObj(data.results)
                    // dispatch(updateSliderData(data));
                }
            } catch (error) {
                console.log('Error loading data:', error);
            }
        }; loadObject();
    }, [selectedPath]);




    function ShowCurentObj(data) {
        if (selectedValue === "popTv") {
            const tvObj = createTvObj(data);
            setCurentObj(tvObj);  // Використовуємо об'єкт, що повернула функція createTvObj
        } else if (selectedValue === "popMovie") {
            const movieObj = createMovieObj(data);
            setCurentObj(movieObj);  // Використовуємо об'єкт, що повернула функція createMovieObj
        }
    }
    

    useEffect(() => {
        console.log("From useEffect", curentObj)
    }, [curentObj]);

    function createTvObj(data) {
        console.log("From createTvObj:", data[0])
        let obj = {};
        obj = {
            id: data[0].id,
            title: data[0].name,
            release: data[0].first_air_date,
            average: data[0].vote_average,
            poster: data[0].poster_path
        }
        console.log("TV:",obj)
        return obj;
    }


    function createMovieObj(data) {
        console.log("From createMovieObj:", data[0])
        let obj = {};
        obj ={
            id: data[0].id,
            title: data[0].title,
            release: data[0].release_date,
            average: data[0].vote_average,
            poster: data[0].poster_path
        }
        console.log("Movie:",obj)
        return obj;
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
                <CartForHomePage
                    average={curentObj.average}
                    id={curentObj.id}
                    poster={curentObj.poster}
                    release={curentObj.release}
                    title={curentObj.title}
                />
            </div>
        </>
    )
}

export default MovieDetailPage
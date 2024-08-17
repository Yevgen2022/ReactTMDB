import React from "react";
import { API_KEY, BASE_URL } from "../../config";
import { json } from "react-router-dom";
import { useState, useEffect } from "react";



// const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`)
// const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY`)

const MovieDetailPage = () => {

    const [selectedValue, setSelectedValue] = useState("popTv");
    const [selectedPath, setSelectedPath] = useState(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);

    useEffect(() => {
        console.log("From useEffect", selectedValue);
        console.log("From useEffect", selectedPath);
    }, [selectedValue]);

    const testRequest = async () => {
        const response = await fetch(selectedPath);

        if (response.ok) {
            const curentPopularObj = response.json();
            console.log("popular Object:", curentPopularObj);
        }
    };


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setSelectedPath(event.target.dataset.path);
    }

    return (
        <>
            <h1>MOVIE DETAIL PAGE</h1>
            <button
                onClick={testRequest}
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

        </>
    )
}

export default MovieDetailPage
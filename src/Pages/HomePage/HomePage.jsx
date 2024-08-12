import React from "react";

import tmdbApi from "../../service/tmdbSevice";
import SliderOfMovie from "../../components/SliderOfMovie/SliderOfMovie";



const HomePage = () => {
    const fetchPopularMovies = tmdbApi.fetchPopularMovies; 


    return (
        <div className="bg-gray-400">
            <h1 className="text-2xl font-bold text-center py-4">HOME PAGE</h1>
            <SliderOfMovie fetchMovies={fetchPopularMovies} contentType="movie" />
        </div>
    )
}

export default HomePage
import React from "react";

import tmdbApi from "../../service/tmdbSevice";
import SliderOfMovie from "../../components/SliderOfMovie/SliderOfMovie";



const HomePage = () => {
    const fetchMovies = tmdbApi.fetchPopularMovies; // Функція для отримання популярних фільмів


    return (
        <div className="bg-gray-400">
            <h1 className="text-2xl font-bold text-center py-4">HOME PAGE</h1>
            <SliderOfMovie fetchMovies={fetchMovies} contentType="movie" />
        </div>
    )
}

export default HomePage
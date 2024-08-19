import React from "react";

import tmdbApi from "../../service/tmdbSevice";
import SliderOfMovie from "../../components/SliderOfMovie/SliderOfMovie";
import PopularSlider from "../../components/PopularSlider/PopularSlider";
import PopularRadioButton from "../../components/PopularRadioButton/PopularRadioButton";



const HomePage = () => {
    // const fetchPopularMovies = tmdbApi.fetchPopularMovies;
const fetchTrendMovies = tmdbApi.fetchTrendMovies;

    return (
        <section className="">
            <div >
                <h1 className="text-2xl font-bold text-center py-4">HOME PAGE</h1>

            </div>

            <div className="my-20">
                <h2 className=" text-gray-700 font-medium ml-10">Trending this week</h2>
                {/* <SliderOfMovie fetchMovies={fetchPopularMovies} contentType="movie" /> */}
                <SliderOfMovie fetchMovies={fetchTrendMovies} contentType="movie" />
            </div>
            <div>
                < PopularRadioButton />
            </div>


            <div>
                < PopularSlider />
            </div>
        </section>
    )
}

export default HomePage
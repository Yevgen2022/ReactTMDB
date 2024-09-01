import React from "react";

import PopularSlider from "../../components/PopularSlider/PopularSlider";
import PopularRadioButton from "../../components/PopularRadioButton/PopularRadioButton";

import TrendingSection from "../../components/TrendingSection/TrendingSection";
import { useSelector } from "react-redux";
import { useEffect } from "react";




const HomePage = () => {

    const trendingItems = useSelector((state)=> state.TrendMovieAndTv.trendMovieAndTvArr);

    return (
        <section className="">

            <div>
                < TrendingSection trendingItems = {trendingItems}/>
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
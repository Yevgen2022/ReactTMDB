import React from "react";

import TrendingSection from "../../components/TrendingSection/TrendingSection";
import { useSelector } from "react-redux";
import PopularSection from "../../components/PopularSection/PopularSection";




const HomePage = () => {

    const trendingItems = useSelector((state) => state.TrendMovieAndTv.trendMovieAndTvArr);
    const popularItems = useSelector((state) => state.PopularBlock.popularContent)

    return (
        <section className="">

            <div>
                < TrendingSection trendingItems={trendingItems} />
            </div>

            <div>
                < PopularSection popularItems={popularItems} />
            </div>



        </section>
    )
}

export default HomePage
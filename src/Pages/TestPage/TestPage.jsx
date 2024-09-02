import React from "react";
import TrendingSection from "./TrendingSection/TrendingSection";
import { useSelector } from "react-redux";

const TestPage = () => {

    const trendingItems = useSelector((state) => state.TrendMovieAndTv.trendMovieAndTvArr);

    return (
        <>
          <TrendingSection trendingItems={trendingItems}/>
        </>

    )
}

export default TestPage
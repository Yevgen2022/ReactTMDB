import React from "react";
// import SliderGeneral from "../Slider/SliderGeneral";
import PopularSwitch from "./PopularSwitch";


const PopularSection = ({trendingItems}) => {
    return (

        <div className='flex justify-center my-4 w-full'>

            <div className="overflow-hidden w-4/5 my-auto">
                <div className="my-4">
                    < PopularSwitch />
                </div>
                <div>
                    {/* <SliderGeneral arrayItems = {trendingItems} /> */}
                </div>
            </div>
        </div>

    )

}
export default PopularSection;
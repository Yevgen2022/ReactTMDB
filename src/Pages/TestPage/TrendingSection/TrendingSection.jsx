import React from "react";
import SliderGeneral from "./SliderGeneral";
//import TrendingSwitch from "./TrendingSwitch";

import SwitchTotalBlock from "./SwitchTotalBlock";


const TrendingSection = ({trendingItems}) => {
      return (

        <div className='flex justify-center my-4 w-full'>

            <div className="overflow-hidden w-4/5 my-auto">
                <div className="my-4">
                    < SwitchTotalBlock />
                </div>
                <div>
                    <SliderGeneral arrayItems = {trendingItems} />
                </div>
            </div>

        </div>

    )

}
export default TrendingSection;
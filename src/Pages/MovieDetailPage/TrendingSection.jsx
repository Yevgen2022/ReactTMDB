import React from "react";
import TrendSliderEnd from "./TrendSliderEnd";
import TrendSwich from "./TrendSwitch";


const TrendingSection = () => {
    return (

        <div className='flex justify-center border border-blue-600 w-full'>

            <div className="overflow-hidden border border-black w-4/5 my-auto">
                <div>
                    < TrendSwich />
                </div>
                <div>
                    <TrendSliderEnd />
                </div>
            </div>
        </div>

    )

}
export default TrendingSection;
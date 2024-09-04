import React from "react";
import TrendingSwitch from "./TrendingSwitch";
import TotalInformation from "./TotalInformation";


const SwitchTotalBlock = () => {

    return (
        <>
            <div className="flex justify-between">
                <div >
                    <TrendingSwitch />
                </div>
                <div className="content-end">
                    <TotalInformation />
                </div>
            </div>
        </>
    )
}






export default SwitchTotalBlock;
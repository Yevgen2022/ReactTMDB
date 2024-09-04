import React from "react";
import { useSelector } from "react-redux";

const TotalInformation = () => {
    const totalItems = useSelector((state) => state.TrendMovieAndTv2.totalItems);
    const totalPages = useSelector((state) => state.TrendMovieAndTv2.totalPages);

    // Створюємо масив з номерами сторінок
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
      console.log(totalPages);

    return (
        <>
            <div className="flex flex-row w-96 px-6 justify-between">
                <div className="">
                    <p className="text-base italic text-gray-400">Total Results : {totalItems}</p>
                </div>
                <div className="flex flex-row" >
                    <label className="text-base italic text-gray-400" htmlFor="numberPage">Number page:</label>
                    < select className="w-10 mx-4 bg-indigo-100 text-base italic text-gray-400"  id="numberPage" >
                        {pageNumbers.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>

                </div>
            </div>
        </>
    )
}

export default TotalInformation;
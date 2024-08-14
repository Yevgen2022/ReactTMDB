import React from "react";
import { useSelector } from "react-redux";
// import {setGenreName} from "../../Pages/GenrePage/GenreSlice"

const SecondHederForGenre = () => {

    const genreName = useSelector((state)=> state.genreName.genreName);




    return (
        <div className="w-full h-40 bg-gray-500 flex items-center justify-center">
            <h2 className="text-white font-extrabold text-4xl">{genreName}</h2>
        </div>
    )

}

export default SecondHederForGenre